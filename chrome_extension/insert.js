var popup = document.getElementById('hacksocietydiv');
var closed = false;
var styleString =
  "<style>" +
  "body {color: red;}" +
  "#company-name {font-size: larger; text-align: center; font-weight: bolder; padding-bottom: 5px; margin-top: 1em}" +
  "#hacksocietydiv .company-details {font-size: medium; text-align: center; padding-bottom: 5px;}" +
  "#hacksociety-invest-btn {height: 2em; text-align: center; font-size: medium; margin-bottom: 1em;}" +
  "#hacksocietycloseBtn {height: 2em; width: 2em; right: 0; position: fixed; top: 0; border-radius: 1em; background: red;}" +
  "#hacksocietydiv #footer-div {font-size: larger; font-weight:bolder; background:red; line-height: 2em; height: 2em; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;}" +
  "</style>";

function closeIframe() {
  var iframe = document.getElementById('hacksocietydiv');
  iframe.parentNode.removeChild(iframe);
  closed = true;
}


function buildDocument(data) {
  var iframeContent =

    '<div id="company-name">' + data["name"] + '</div>' +

    '<div class="company-details">' +
      '<span class="code">' + data.code + '</span>&nbsp;' +
      '<span class="value">' + (Math.round(data.value * 100 * 100) / 100) + '%' + '</span>' +
    '</div>';

  var investBtn = document.createElement('button');
  investBtn.id = 'hacksociety-invest-btn';
  url = "http://10.4.255.200:8080/#!/ticker/" + data.code;
  console.log(url);
  investBtn.innerHTML = '<a href=' + url + ' target="_blank">Invest now</a>';
  investBtn.addEventListener("click", closeIframe, false);

  var redirectBtn = document.createElement('button');
  redirectBtn.id = 'hacksociety-redirect-btn';
  redirectBtn.innerHTML = '<a href="http://10.4.255.200:8080" target="_blank">Check it out</a>';
  redirectBtn.addEventListener("click", closeIframe, false);

  var closeBtn = document.createElement('button');
  closeBtn.id = 'hacksocietycloseBtn';
  closeBtn.innerHTML = 'x';
  closeBtn.addEventListener("click", closeIframe, false);

  var footerDiv = document.createElement('div');
  footerDiv.id = 'footer-div';
  footerDiv.innerHTML = '<a href="http://10.4.255.200:8080">HackSociety</a>';

  var extension_popup = document.createElement('div');
  extension_popup.style.zIndex = 100000;
  extension_popup.style.textAlign = 'center';
  extension_popup.style.position = 'fixed';
  // extension_popup.setProperty ("fontFamily", "Arial", "important");
  extension_popup.style.right = 0;
  extension_popup.style.top = 0;
  extension_popup.style.background = '#bababa';
  extension_popup.style.borderRadius = '10px';
  extension_popup.style.minWidth = '10em';
  extension_popup.id = 'hacksocietydiv';
  extension_popup.innerHTML = iframeContent;

  extension_popup.appendChild(investBtn);
  extension_popup.appendChild(document.createElement("br"));
  // extension_popup.appendChild(redirectBtn);
  extension_popup.appendChild(closeBtn);
  extension_popup.appendChild(footerDiv);


  style = document.createElement('style');
  style.innerHTML = styleString;
  document.body.appendChild(style);

  document.body.insertBefore(extension_popup, document.body.children[0]);
}

if(!popup && !closed) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      // buildDocument(null);
      buildDocument(JSON.parse(xmlHttp.responseText));
    }
  };
  url = 'https://10.4.255.200/public/fund/all/latestPerf/';
  data = document.location.host;
  xmlHttp.open("POST", url, true); // true for asynchronous
  xmlHttp.send(data);
}
