(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{440:function(t,e,n){"use strict";n.r(e);var a=n(1);n.n(a)()(document).ready((function(){}))},467:function(t,e,n){"use strict";n.r(e),e.default=function(){var t=document.createElement("script");t.src="https://static.apester.com/js/sdk/latest/apester-sdk.js",document.body.appendChild(t)}},468:function(t,e,n){"use strict";n.r(e),e.default=function(){if("undefined"==typeof OmniVirt){var t=document.createElement("script");t.src="https://remote.vroptimal-3dx-assets.com/scripts/vroptimal.js",document.body.appendChild(t)}}},469:function(t,e,n){"use strict";n.r(e),e.default=function(){if("undefined"==typeof PlayBuzz){var t=document.createElement("script");t.src="https://cdn.playbuzz.com/widget/feed.js",document.body.appendChild(t)}}},471:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(2);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var c,o=t[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}e.default=function(){!function(){var t=r()(".entity-card .title-box .title a"),e=r()(".entity-card .special-header a"),n=r()(".entity-card .details-box .show-details"),a=t.add(e),o=n,l=a.first().text().trim(),s=r()("#page-segment-values").find(".keyvals").data(),d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"data-tracking-source";Object.entries(s).forEach((function(n){var a=c(n,2),r=a[0],o=a[1],l={};l["".concat(e,"-").concat(Object(i.kebabCase)(r))]=o,t.attr(l)}))};a.attr({"data-tracking-event-name":"clicked to content","data-tracking-label":"clicked on entity title","data-tracking-link":l,"data-tracking-content-headline":l,"data-tracking-content-type":"index"}),d(a),o.attr({"data-tracking-event-name":"content action taken","data-tracking-label":"clicked show details","data-tracking-link":"","data-tracking-social_service":"","data-tracking-user_decision_area":"entity module"}),d(o,"data-tracking");[{class_selector:"cast",label:"clicked on cast"},{class_selector:"network",label:"clicked on network"},{class_selector:"genre",label:"clicked on genre"},{class_selector:"director",label:"clicked on director"},{class_selector:"coverage",label:"clicked complete coverage"},{class_selector:"streaming-service",label:"clicked affiliate link"},{class_selector:"performers",label:"clicked on performers"},{class_selector:"publisher",label:"clicked on publisher"},{class_selector:"music-label",label:"clicked on music label"}].forEach((function(t){var e=".entity-card .field-value.field-tracking-".concat(t.class_selector);r()(e).find("a").toArray().forEach((function(e,n){var a=r()(e),i=a.text().trim();a.attr({"data-tracking-event-name":"clicked to content","data-tracking-label":t.label,"data-tracking-link":i,"data-tracking-content-headline":i,"data-tracking-content-type":"index","data-tracking-section-position":n,"data-tracking-source-section":"entity module","data-tracking-source-content-url":window.location.href}),d(a)}))}))}();var t=r()(".entity-card.entity-summary"),e=t.find(".title"),n=e.outerHeight();n>Math.max(parseFloat(e.css("line-height")),n)&&(t.find(".details-box").insertAfter(".entity-card.entity-summary .card-box"),r()(".letter-grade").css({top:"-2.2em"}));var a=r()(".entity-card.entity-full:not(.entity-card--creative-work)"),o=a.find(".field-row").first().outerHeight();a.find(".field-row").each((function(t,e){r()(e).children().length>1&&r()(e).outerHeight()>o&&r()(e).css({flexDirection:"column",alignItems:"flex-start"})}))}},484:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));var a=n(2),r=n.n(a),i=n(1),c=n.n(i),o=n(5),l=n.n(o),s=n(816),d=n(4),u=n(817);function f(){var t,e=c()(".modal.view-all"),n=c()(".view-all-item"),a=new s.a(e,"view-all"),i=c()(".view-all-btn");c()(".modal.view-all .content").on("scroll",r.a.throttle((function(){return l()(d.wb).broadcast()}),5)),l()(d.n).subscribe((function(e,r){if(Object(u.a)(r,i)&&(t=!1,e.preventDefault(),a.open(),l()(d.wb).broadcast(),r.parents(".glide-slide-meta-bottom").length&&(t=!0)),Object(u.a)(r,n)){e.preventDefault();var o=r;r.is(n)||(o=r.parents(".view-all-item").first());var s=c()("[data-id='sm-native-slide']"),f=c()(".glide-slides").children().index(s),m=c()(".title-slide").length>0?-1:0,b=0;s.length&&o.data("slide-index")>f+m&&(b=1),l()(d.G).broadcast(o.data("slide-index")+b),l()(d.o).broadcast()}})),n.on("keyup",(function(t){if("Enter"===t.key){var e=c()(t.currentTarget);l()(d.G).broadcast(e.data("slide-index")),l()(d.o).broadcast()}})),"function"==typeof r.a.get(a,"dialog.on")&&a.dialog.on("hide",(function(){t&&setTimeout((function(){var t=c()(".glide__slide--active .glide-slide-meta-bottom .view-all-btn");t.length&&t.focus()}),0)}))}},488:function(t,e,n){"use strict";n.r(e);var a=n(5),r=n.n(a),i=n(4);r()(i.n).subscribe((function(t,e){var n=e.closest(".image-link").attr("data-href");!e.closest("button").length&&n&&(t.preventDefault(),window.location.href=n)})),e.default=function(){}},499:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),i=n(873),c=n.n(i),o=n(971);e.default=function(){var t=document.getElementsByClassName("js-pinterest-board");r.a.forEach(t,(function(t){var e=t.querySelector("a");if(e)try{var n=e.getAttribute("href"),a=c.a.parse(n).pathname.split("/")[2]?"embedBoard":"embedUser";e.setAttribute("data-pin-do",a)}catch(t){return!1}return!0})),o.a.load()}},500:function(t,e,n){"use strict";n.r(e);var a=n(971);e.default=function(){a.a.load()}},526:function(t,e){},971:function(t,e,n){"use strict";e.a={load:function(){var t="pinterest-script";if(!document.getElementById(t)){var e=document.createElement("script");e.id=t,e.async=!0,e.defer=!0,e.src="//assets.pinterest.com/js/pinit.js",document.body.appendChild(e)}}}}}]);
//# sourceMappingURL=1-1.js.map