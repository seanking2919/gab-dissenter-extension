/* Automatically generated file. Do not edit directly.
Copyright (C) 2019 Gab AI, Inc.
All Rights Reserved */
var BROWSER_CONFIG={name:"Microsoft Edge",slug:"edge",version:"0.1.5"},BROWSER_CHROME_SLUG="chrome",BROWSER_FIREFOX_SLUG="firefox",BROWSER_EDGE_SLUG="edge",BROWSER_SAFARI_SLUG="safari",BASE_URI="https://dissenter.com/discussion/begin-extension?url=",COMMENT_COUNT_URI="https://dissenter.com/notification/comment-count?url=",BACKGROUND_ACTION_OPEN_POPUP="open_popup",BACKGROUND_ACTION_GET_KEY="get_key",BACKGROUND_ACTION_SET_KEY="set_key",BACKGROUND_ACTION_SET_BADGE="set_badge",BACKGROUND_ACTION_TAB_UPDATED="tab_updated",COLOR_GAB_GREEN="#21cf7b",STORAGE_BASE="gab_dissenter_extension_data",TWITTER_BUTTONS_ENABLED="twitter_buttons_enabled",REDDIT_BUTTONS_ENABLED="reddit_buttons_enabled",YOUTUBE_BUTTONS_ENABLED="youtube_buttons_enabled",WINDOW_SIDEBAR_UNAVAILABLE_ENABLED="window_sidebar_unavailable_enabled",WEBSITE_COMMENT_BADGE_ENABLED="website_comment_badge_enabled",DISSENT_DISQUS_BUTTONS_ENABLED="dissent_disqus_buttons_enabled",STORAGE_DEFAULT_PARAMS={};STORAGE_DEFAULT_PARAMS[TWITTER_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[REDDIT_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[YOUTUBE_BUTTONS_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WINDOW_SIDEBAR_UNAVAILABLE_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[WEBSITE_COMMENT_BADGE_ENABLED]=!0,STORAGE_DEFAULT_PARAMS[DISSENT_DISQUS_BUTTONS_ENABLED]=!0;var STORAGE_KEY_ALL="all",isObject=function(t){return!isArray(t)&&!isDate(t)&&(null!==t&&"object"==typeof t)},isString=function(t){return"string"==typeof t||t instanceof String},isDate=function(t){return!isString(t)&&!isArray(t)&&null!=t&&null!=t&&(t&&"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t))},isArray=function(t){return Array.isArray(t)};function ready(t){var e=document;"loading"==e.readyState?e.addEventListener("DOMContentLoaded",t):t()}function getQueryStringValue(t){return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}var GDReddit=function(){var a=[];function _(){var t=document.querySelectorAll('a[data-click-id="comments"][data-test-id="comments-page-link-num-comments"]');if(!t)return!1;for(var e=0;e<t.length;e++){var r=t[e],n=p(r);if(n&&!(-1<a.indexOf(n))){a.push(n);var i=r.parentElement;i.style.setProperty("width","100%","important");var o=i.lastChild.previousSibling,s=l();i.insertBefore(s,o),s.onclick=E.bind(null,n)}}setTimeout(_,2e3)}function l(){var t=document.createElement("a");t.setAttribute("title","Dissent"),t.style.setProperty("display","inline-block","important"),t.style.setProperty("height","21px","important"),t.style.setProperty("width","72px","important"),t.style.setProperty("vertical-align","top","important"),t.style.setProperty("margin-left","1px","important"),t.style.setProperty("margin-right","2px","important"),t.style.setProperty("padding","3px 4px 0","important"),t.style.setProperty("border-radius","3px","important"),t.onmouseover=function(){t.style.setProperty("background-color","rgba(26,26,27,.1)","important")},t.onmouseout=function(){t.style.removeProperty("background-color")};var e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.style.setProperty("display","inline-block","important"),e.style.setProperty("vertical-align","middle","important"),e.setAttribute("version","1.0"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("width","18px"),e.setAttribute("height","18px"),e.setAttribute("viewBox","0 0 1280 1280"),e.setAttribute("preserveAspectRatio","xMidYMid meet");var r=document.createElementNS("http://www.w3.org/2000/svg","g");r.setAttribute("fill","#878a8c"),r.setAttribute("stroke","none");var n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d","M702 1155 c-60 -13 -144 -53 -157 -75 -6 -10 71 -170 83 -170 4 0 25 9 46 20 145 73 296 -6 296 -156 l0 -37 -22 20 c-28 25 -82 53 -103 53 -19 0 -19 14 0 30 20 17 19 50 -2 50 -9 0 -45 -7 -80 -16 -49 -12 -71 -13 -95 -5 -48 17 -188 13 -249 -6 -60 -20 -149 -96 -149 -129 0 -18 8 -19 107 -19 112 0 185 -17 152 -35 -9 -6 -30 -4 -55 5 -46 17 -183 19 -237 4 -30 -8 -53 -7 -107 8 -56 14 -72 15 -82 5 -8 -8 -9 -17 -3 -26 48 -66 47 -59 25 -107 -30 -67 -27 -155 6 -205 59 -86 124 -118 253 -123 54 -2 111 2 134 9 38 11 39 11 78 -34 21 -24 63 -56 91 -70 94 -47 289 -31 324 26 6 9 10 5 14 -12 6 -25 7 -25 115 -25 l110 0 0 365 c0 403 -2 416 -66 514 -80 120 -260 179 -427 141z m-27 -324 c17 -11 29 -11 68 3 60 20 60 20 47 -3 -15 -30 -12 -66 9 -103 32 -55 35 -91 11 -146 -21 -49 -41 -71 -92 -104 l-27 -18 -6 48 c-22 164 -98 231 -275 241 l-94 6 39 33 c22 18 60 39 85 47 54 18 205 15 235 -4z m-191 -186 c45 -19 103 -70 122 -107 51 -99 -29 -221 -174 -263 -40 -12 -146 -6 -190 9 -135 48 -195 157 -142 261 22 44 25 77 10 106 -13 23 -13 23 40 4 37 -13 49 -13 94 0 28 7 62 15 76 17 36 5 121 -9 164 -27z m440 -73 c46 -43 59 -116 30 -178 -47 -98 -210 -99 -257 -2 l-15 32 41 19 c23 10 53 28 65 40 27 25 62 88 62 111 0 13 5 14 27 5 16 -6 36 -18 47 -27z");var i=document.createElement("span");return i.style.setProperty("display","inline-block","important"),i.style.setProperty("height","20px","important"),i.style.setProperty("width","20px","important"),i.style.setProperty("vertical-align","top","important"),i.style.setProperty("margin-left","6px","important"),i.style.setProperty("line-height","20px","important"),i.style.setProperty("color","#87818c","important"),i.textContent="Dissent",r.appendChild(n),e.appendChild(r),t.appendChild(e),t.appendChild(i),t}function E(t){var e=window.innerHeight;browser.runtime.sendMessage({action:BACKGROUND_ACTION_OPEN_POPUP,url:t,height:e})}function p(t){if(!t)return null;var e=t.getAttribute("href");return e&&isString(e)?"https://www.reddit.com"+e:null}this.init=function(){_()}};ready(function(){browser.runtime.sendMessage({action:BACKGROUND_ACTION_GET_KEY,key:REDDIT_BUTTONS_ENABLED},function(t){if(!t)return!1;setTimeout(function(){(new GDReddit).init()},150)})});