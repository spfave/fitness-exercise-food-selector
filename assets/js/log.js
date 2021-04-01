// DOM SELECTORS
const logTable = document.querySelector("#log-table");

// FUNCTIONS
function loadDailyLog() {
  // Load daily log from local storage
  let log = localStorage.getItem("dailyLog");

  // if log does not exist or is empty object - return empty object
  // else - return parsed log
  if (log === null || $.isEmptyObject(log)) {
    log = {};
  } else {
    log = JSON.parse(log);
  }

  return log;
}

function saveEventDailyLog(eventType, eventName) {
  // Load daily log from local storage
  const log = loadDailyLog();
  const date = moment().format("YYYYMMDD");

  // if log exist for current date - modify event key
  // else - create new date key and record event
  if (log.hasOwnProperty(date) && log[date].hasOwnProperty(eventType)) {
    log[date][eventType].push(eventName);
  } else if (log.hasOwnProperty(date)) {
    log[date][eventType] = [eventName];
  } else {
    log[date] = {};
    log[date][eventType] = [eventName];
  }

  localStorage.setItem("dailyLog", JSON.stringify(log));
}

function createDailyLog() {
  // const date = moment();
  const logHistory = 14;
  logTable.innerHTML = "";

  //
  for (let day = 0; day < logHistory; day++) {
    const dateind = moment().subtract(day, "days");

    const logRow = document.createElement("tr");
    logRow.innerHTML = `
      <td>${dateind.format("MM/DD/YY")}</td>
      <td class"exercise"></td>
      <td class"recipe"></td>
      `;
    logTable.appendChild(logRow);
  }
}

function renderDailyLog() {}

// SCRIPT EXECUTION
createDailyLog();