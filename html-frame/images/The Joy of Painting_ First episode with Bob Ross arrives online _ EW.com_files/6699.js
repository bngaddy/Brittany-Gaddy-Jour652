if("object"==typeof CE2&&(CE2.uid||CE2.data))throw Error("CE: multiple userscripts installed");"undefined"==typeof CE2&&(CE2={}),CE2.userDataToJs=function(t){for(var e=[["uid","uid"],["snapshots","snapshots"],["status","status"],["flows","flows"],["pageEdits","page_edits"],["sites","sites"],["USER_SCRIPT_VERSION","updated_at"],["__CE_HOST__","ce_app_url"],["COMMON_SCRIPT","common_script_url"],["COMMON_SCRIPT_SECURE","common_script_url"],["TRACKING_SCRIPT","tracking_script_url"],["TRACKING_SCRIPT_SECURE","tracking_script_url"],["AUTH_KEY","hud_auth_key"],["HUD","hud"],["GLOBAL_IP_BLOCK_LIST","global_ip_block_list"],["IS_USING_IP_BLOCKING","is_using_ip_blocking"],["TRACKING_DEST_NEW","v6_tracking_dest"],["TRACKING_DEST_NEW_SECURE","v6_secure_tracking_dest"],["DEST_V11","v11_tracking_dest"],["FT_DEST","flow_tracking_dest"],["PAGE_VIEWS_LIMIT_REACHED","page_views_limit_reached"],["NUMBER_OF_RECORDINGS","recordings_number"],["RECORDINGS_ACTIVATION","recordings_activation"],["ALLOW_RECORDINGS_2","recordings_2"],["ERROR_TRACKING","error_tracking"],["DEST_ERRORS_API","error_tracking_dest"],["DEST_ERRORS_API_DOMAIN","error_tracking_script_url"]],a=0;a<e.length;a++){var _=e[a];CE2.data[_[1]]&&(CE2[_[0]]=CE2.data[_[1]])}CE2.data.recordings_dest&&(CE2.SREC_DEST={record:CE2.data.recordings_dest,sample:CE2.data.recordings_sampling_dest})},CE_USER_DATA_URL="https://script.crazyegg.com/pages/data-scripts/0080/6699.json",CE2.debugEnabled=function(){return"undefined"!=typeof CE_DEBUG&&CE_DEBUG},CE2.loadCommonScript=function(){var t=document,e=(window,CE2.data.common_script_url);CE2.debugEnabled()&&console.log("CE: Loading script "+e);var a=t.createElement("script");a.src=e,a.type="text/javascript",a.async=!0;var _=t.getElementsByTagName("script")[0];_.parentNode.insertBefore(a,_)},CE2.getUserDataTime=function(){return parseInt(+new Date/3e5,10)},CE2.loadUserData=function(t){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState)try{200==e.status&&e.responseText&&(CE2.data=JSON.parse(e.responseText),"undefined"!=typeof CE_LOCAL_SCRIPT_HOST&&(CE2.data.common_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/common-scripts-source/latest.js",CE2.data.tracking_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/tracking-scripts-source/latest.js",CE2.data.trackingpagestate_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/trackingpagestate-scripts-source/latest.js"),CE2.userDataToJs(CE2.data),"ok"===CE2.data.status&&CE2.loadCommonScript())}catch(t){CE2.debugEnabled()&&console.log("CE: Error loading user data: "+t.message)}},CE2.debugEnabled()&&console.log("CE: Loading user data "+CE_USER_DATA_URL),e.open("GET",CE_USER_DATA_URL+"?t="+CE2.getUserDataTime(),!0),e.send()},"undefined"!=typeof CE_USER_DATA_URL?CE2.loadUserData():CE2.debugEnabled()&&console.log("CE: Missing CE_USER_DATA_URL");