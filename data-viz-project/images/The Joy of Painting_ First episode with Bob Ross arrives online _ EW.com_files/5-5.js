(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{437:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),s=n(4),r=n(2),o=n.n(r),c=0;function d(){window.scrollY>c?(document.body.classList.contains("header-collapsed")||document.body.classList.add("header-collapsed"),document.body.classList.contains("nav-docked")||document.body.classList.add("nav-docked")):(document.body.classList.remove("header-collapsed"),document.body.classList.remove("nav-docked"))}window.karma=window.karma||{},window.karma.cmd=window.karma.cmd||[],window.karma.cmd.push((function(){o.a.get(window.karma,"config.docking.leaderboard.enabled")||(c=$("header .ad-wrapper.outer").height())})),t.default=function(){d(),i()(s.Bb).subscribe(d),document.body.addEventListener("leaderboard_docked",(function(){document.body.classList.add("leaderboard-docked"),c=0})),document.body.addEventListener("leaderboard_undocking",(function(){document.body.classList.remove("leaderboard-docked"),c=122}))}},465:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));var a=n(5),i=n.n(a),s=n(4);function r(){i()(s.n).subscribe((function(e,t){var n=t.closest(".component.dropdown"),a=t.closest(".heading");if(n.length&&a.length){var i=a.find("span[data-default-text]").attr("data-default-text"),s=a.find("span[data-toggle-text]"),r=s.attr("data-toggle-text");return n.hasClass("dropdown-open")?(r&&s.text(r),n.removeClass("dropdown-open")):(r&&s.text(i),n.addClass("dropdown-open"))}return null}))}},476:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(5),r=n.n(s),o=n(4);function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.addClass("initialized"),this.$searchBtn=i()(".js-faceted-search-widget-button",t),this.$dropDown=i()(".js-faceted-search-widget-dropdown-list",t),this.$dropDownItem=i()(".js-faceted-search-widget-dropdown-item",t),this.$dropDownInput=i()(".faceted-search-widget-dropdown-input",t),this.$searchForm=i()(".faceted-search-widget",t)}var t,n,a;return t=e,(n=[{key:"init",value:function(e){this.$searchForm.trigger("reset"),this.$searchBtn.on("click",(function(){i()(this).next().toggleClass("is-open"),i()(this).attr("aria-expanded","false"===i()(this).attr("aria-expanded")?"true":"false")})),this.$dropDownItem.click((function(){var t=i()(this).closest(".js-faceted-search-widget-dropdown-list").siblings(".js-faceted-search-widget-button"),n=t.text().trim().split(", "),a=i()(this).text().trim(),s=n.indexOf(a),r=t.attr("text");-1===s&&n.push(a),i()(this).hasClass("checked")&&n.splice(s,1),n[0]===r&&n.shift(),n.length||n.push(r),t.text(n.join(", ")),i()(this).toggleClass("checked"),e&&this.previousElementSibling.toggleAttribute("checked")})),this.$dropDownItem.hover((function(){i()(this).toggleClass("active")})),this.$dropDownInput.focus((function(){i()(".js-faceted-search-widget-dropdown-item").removeClass("active"),i()(this).next().toggleClass("active")}))}}])&&c(t.prototype,n),a&&c(t,a),e}();t.default=function(){i()(".faceted-search-widget-wrapper").each((function(){new d(i()(this)).init()})),r()(o.e).subscribe((function(){i()(".faceted-search-widget-wrapper:not(.initialized)").each((function(){new d(i()(this)).init(!0)}))})),r()(o.n).subscribe((function(e,t){var n=i()(".js-faceted-search-widget-dropdown-list",t),a=i()(".js-faceted-search-widget-button",t);t.closest(n).length||t.is(a)||(n.removeClass("is-open"),a.attr("aria-expanded","false"))}))}},481:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),s=n(816),r=n(4),o=n(1),c=n.n(o);function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modalOtherSites=new s.a(t,"other-sites"),this.modalGlobalCommunities=new s.a(t,"global-communities"),this.context=t,this.otherSitesSpan=c()("#otherMeredithSites"),this.globalCommunitiesSpan=c()("#globalCommunities"),this.targetIs=function(e,t){return e.is(t)||t.has(e).length>0},this.registerListeners()}var t,n,a;return t=e,(n=[{key:"registerListeners",value:function(){var e=this;i()(r.n).subscribe((function(t,n){e.targetIs(n,e.otherSitesSpan)&&(t.preventDefault(),e.modalOtherSites.open()),e.targetIs(n,e.globalCommunitiesSpan)&&(t.preventDefault(),e.modalGlobalCommunities.open())}))}}])&&d(t.prototype,n),a&&d(t,a),e}();t.default=function(){return c()(".modal.other-sites").each((function(){return new l(c()(this))}))}},495:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(5),i=n.n(a),s=n(1),r=n.n(s),o=n(4);function c(){r()(".component.newsletter-signup-modal").each((function(){var e=r()(this),t=e.find(".signup-form"),n=function(){return e.find("[name=newsletter_name]:visible")},a=function(){var e=n(),t=!0;return e.each((function(){return!!r()(this).is(":checked")||(t=!1,!1)})),t?r()(".js-deselect-all").text("DESELECT ALL").removeClass("select-all"):r()(".js-deselect-all").text("SELECT ALL").addClass("select-all")};t.on("submit",(function(){i()("newsletter-signup").broadcast(t),t.find(":checkbox:not(:visible)").remove();var e=t.filter(":visible").find(":checkbox:checked"),n=t.attr("action"),a=t.find(".select-error"),s=t.find(".signup-zipcode").val(),c=t.find(".invalid-zip");if(!/(?!0{5})(^\d{5}$)|(?!0{5})(^\d{5}-\d{4}$)/.test(s))return c.show(),c.text("Please enter a valid USA zip code."),!1;if(t.find(".g-recaptcha").length>0&&grecaptcha){c.hide();var d=grecaptcha.getResponse(),l=t.find(".invalid-recaptcha");if(0===d.length)return l.show(),l.text("Please validate that you are a user"),!1}return 0===e.length?(c.hide(),a.show(),a.text("Please Select Newsletter."),!1):([].push(r.a.ajax({type:"POST",url:n,data:t.serialize()})),i()(o.H).broadcast("newsletter-signup-modal"),i()(o.Ib).broadcast("newsletter-success-modal"),!1)})),e.on("click",".close-btn",(function(){return i()(o.H).broadcast("newsletter-signup-modal"),!1})),r()(".newsletter-success-modal").on("click",".close-btn",(function(){return i()(o.H).broadcast("newsletter-success-modal"),!1})),e.on("click",".js-deselect-all",(function(){return n().prop("checked",r()(this).hasClass("select-all")),a(),!1})),e.find("[name=newsletter_name]").on("change",(function(){return a()})),e.on("focus",".input-container input",(function(){r()(this).closest(".input-container").find("label, input").addClass("input-focused")})),e.on("blur",".input-container input",(function(){""===r()(this).val()&&r()(this).closest(".input-container").find("label, input").removeClass("input-focused"),/^\S+@\S+$/.test(r()(this).val())?r()(this).removeClass("fail"):r()(this).addClass("fail")}))})),"#newsletters"===window.location.hash&&i()(o.Ib).broadcast("newsletter-signup-modal")}},497:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(5),r=n.n(s),o=n(4);function c(){var e=window.OBR;e&&e.extern&&e.extern.researchWidget()}r()(o.V).subscribe(c),r()(o.e).subscribe(c),r()(o.Y).subscribe((function(){if(i()(".component.outbrain .OUTBRAIN").length>0){var e=window.OBR;e&&e.extern&&e.extern.refreshWidget()}}));var d=function(){return i()(".LAZYBRAIN:not(.ENDSLATE)").each((function(e,t){var n=i()(t);n.is(":visible")&&(n.clone().removeClass("LAZYBRAIN").addClass("OUTBRAIN").insertAfter(n),n.remove(),r()(o.V).broadcast())}))};r()(o.X).subscribe((function(){i()(".LAZYBRAIN.ENDSLATE").each((function(e,t){i()(t).removeClass("ENDSLATE"),d()}))})),r()(o.W).subscribe((function(){i()(".component.outbrain.end-slate").each((function(){var e=i()(void 0),t=e.find(".OUTBRAIN").eq(0);if(0!==t.length){var n=t.data();e.empty(),i()(document.createElement("div")).addClass("LAZYBRAIN ENDSLATE").attr({"data-src":n.src,"data-widget-id":n.widgetId,"data-ob-template":n.obTemplate}).appendTo(e)}}))})),t.default=function(){return!!i()("body").hasClass("strip-ads")||i.a.getScript("//widgets.outbrain.com/outbrain.js",(function(){return r()(o.V).broadcast(),r()(o.Ab).subscribe(d),d()}))}},542:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(1),i=n.n(a),s=n(5),r=n.n(s),o=n(4);function c(){r()(o.n).subscribe((function(e,t){var n=t.closest("button[data-transcript-id]");if(n.length){var a=n.find(".videoDetail__actionBarTwoButtonText"),s=n.data("transcript-id"),r=i()(".component.videoTranscript[data-transcript-id=".concat(s,"]"));r.hasClass("videoTranscript--hidden")?(a.text("Hide Transcript"),n.removeClass("collapsed"),n.attr("aria-expanded","true")):(a.text("Show Transcript"),n.addClass("collapsed"),n.attr("aria-expanded","false")),r.toggleClass("videoTranscript--hidden")}}))}}}]);
//# sourceMappingURL=5-5.js.map