const CACHE_KEY = "calculation_history";

// the function of checking the Storage feature on the browser
function checkForStorage() {
  return typeof Storage !== "undefined";
}

// function to save calculation history data on localStorage
function putHistory(data) {
  if (checkForStorage()) {
    let historyData = null;
    if (localStorage.getItem(CACHE_KEY) === null) {
      historyData = [];
    } else {
      // JSON.parse => change object value in string form
      historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }

    // unshift() => add a new value to the array placed at the beginning of index
    historyData.unshift(data);

    if (historyData.length > 5) {
      // pop() => delete the last index value in the array
      historyData.pop();
    }
    // JSON.stringify => converting javascript object into string form
    localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
  }
}

// function get data from localStorage
function showHistory() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

// function to render calculation history data on HTML table
function renderHistory() {
  const historyData = showHistory();
  let historyList = document.querySelector("#historyList");

  // always clear HTML content on historyList element so as not to show double data
  historyList.innerHTML = "";

  for (let history of historyData) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + history.firstNumber + "</td>";
    row.innerHTML += "<td>" + history.operators + "</td>";
    row.innerHTML += "<td>" + history.secondNumber + "</td>";
    row.innerHTML += "<td>" + history.result + "</td>";

    historyList.appendChild(row);
  }
}

// call function
renderHistory();
