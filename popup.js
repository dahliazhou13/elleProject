window.onload = function() {
    var web = chrome.extension.getBackgroundPage();
    var comp = web.gotCompany;
    var stat = web.gotStatus;
    var betterComp = web.gotBetter;
  
    document.getElementById("company").innerHTML=comp;
    document.getElementById("status").innerHTML=stat;
    document.getElementById("betComp").innerHTML=betterComp;
    
}