function pushwooshSetTags(e,o){console.log("Sending setTags call to Pushwoosh");try{var s=new XMLHttpRequest,i=pushwooshUrl+"setTags",t={request:{application:APP_CODE,hwid:e.toLowerCase(),tags:o}};s.open("POST",i,!0),s.setRequestHeader("Content-Type","application/json;charset=UTF-8"),s.send(JSON.stringify(t)),s.onload=function(){if(200==this.status){var e=JSON.parse(this.responseText);200==e.status_code?console.log("Set tags method were successfully sent to Pushwoosh"):console.log("Error occurred while sending setTags to Pushwoosh: "+e.status_message)}else console.log("Error occurred, status code::"+this.status)},s.onerror=function(){console.log("Pushwoosh response status code to pushStat call in not 200")}}catch(e){return void console.log("Exception while sending setTags to Pushwoosh: "+e)}}function get_browser_version(){var e,o=navigator.userAgent,s=o.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(s[1])?(e=/\brv[ :]+(\d+)/g.exec(o)||[],"IE "+(e[1]||"")):"Chrome"===s[1]&&(e=o.match(/\bOPR\/(\d+)/),null!=e)?"Opera "+e[1]:(s=s[2]?[s[1],s[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=o.match(/version\/([.\d]+)/i))&&s.splice(1,1,e[1]),s.join(" "))}var APP_CODE="80CB9-FB09D",WEB_SITE_PUSH_ID="web.gov.dol.developer",pushwooshUrl="https://cp.pushwoosh.com/json/1.3/",isFirstRegister=!1,checkRemotePermission=function(e){if(console.log(e),"default"===e.permission)console.log("This is a new web service URL and its validity is unknown."),window.safari.pushNotification.requestPermission(pushwooshUrl+"safari",WEB_SITE_PUSH_ID,{application:APP_CODE},checkRemotePermission),isFirstRegister=!0;else if("denied"===e.permission)console.log("The user said no.");else if("granted"===e.permission&&(console.log("The web service URL is a valid push provider, and the user said yes."),console.log("You deviceToken is "+e.deviceToken),1==isFirstRegister)){var o={Language:window.navigator.language||"en","Device Model":get_browser_version()};pushwooshSetTags(e.deviceToken,o)}};window.onload=function(){if("safari"in window&&"pushNotification"in window.safari){var e=window.safari.pushNotification.permission(WEB_SITE_PUSH_ID);checkRemotePermission(e)}else console.log("Push Notifications are available for Safari browser only");try{if(navigator.userAgent.indexOf("Safari")>-1){var o=/#P(.*)/,s=decodeURIComponent(document.location.hash);if("safari"in window&&"pushNotification"in window.safari)var e=window.safari.pushNotification.permission(WEB_SITE_PUSH_ID);if(o.test(s)&&e){var i=new XMLHttpRequest,t=pushwooshUrl+"pushStat",n={request:{application:APP_CODE,hwid:e.deviceToken,hash:o.exec(s)[1]}};i.open("POST",t,!0),i.setRequestHeader("Content-Type","application/json;charset=UTF-8"),i.send(JSON.stringify(n))}}}catch(e){}};