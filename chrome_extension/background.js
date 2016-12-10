// chrome.browserAction.onClicked.addListener(function(tab) {
chrome.webNavigation.onCompleted.addListener(function(details) {
  console.log(details);
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
  if(details.frameId == 0) {
    chrome.tabs.executeScript({
      file: "insert.js"
    });
  }
}, {
  url: [
    {hostContains: '.apple.'},
    {hostContains: '.google.'},
    {hostContains: '.microsoft.'},
    {hostContains: '.paypal.'},
    {hostContains: '.starbucks.'},
    {hostContains: '.visa.'},
    ]
});
