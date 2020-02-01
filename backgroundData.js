var file;
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tabs) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (typeof tabs[0] !== 'undefined') {

            var url = new URL(tabs[0].url)
            title = tabs[0].title

            var origin = url.origin;
            var companyName = "";
            var j = 0;
            var start = false;
            var i = 8;
            if (origin.includes("www.")) {
                var i = 12;
            }
            for (i; i < origin.length; i++) {

                if (origin.charAt(i) == '.') {
                    break;
                }

                companyName = companyName.concat(origin.charAt(i));

            }
            console.log(companyName);
            console.log(file);
            function isCompany(companyName) {
                return function (object) { 
                    return object['COL 1'] === companyName;
                  }
            }
            function isBetter(level) {
                return function (object) { 
                    return object['COL 12'] < level;
                  }
            }
            var status;
            const found = file.find(isCompany(companyName));

            if(found != null){
                footprint=found['COL 12'];
                if(footprint<=52559){
                    status = 'Green';
                }
                else if(footprint<=643864){
                    status='Yellow';
                }
                else{
                    status='Red';
                }
                const better = file.find(isBetter(footprint));
                betterCompany = better['COL 1'];
            }
            
        }


    })

})

const url1 = chrome.runtime.getURL("./table_1.json");
fetch(url1)
    .then((response)=>response.json())
    .then((json)=>(file = json));

