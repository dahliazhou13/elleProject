

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (typeof tabs[0] !== 'undefined') {

            var url = new URL(tabs[0].url)
            title = tabs[0].title
            console.log(`URL: ${url}`)
            console.log(`Title: ${title}`)
            var origin = url.origin;
            console.log(origin);
            var companyName = "";
            var j =0;
            var start = false;
            var i = 8;
            if(origin.includes("www.")){
                var i = 12;
            }
            for(i; i<origin.length;i++){
                
                if(origin.charAt(i)=='.'){
                    break;
                }
    
                    companyName = companyName.concat(origin.charAt(i));
                
            }
            console.log(companyName);
        }
        

    })



})