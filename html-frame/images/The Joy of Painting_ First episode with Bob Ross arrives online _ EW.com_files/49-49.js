(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1020:function(n,e,t){var a=t(423);n.exports=(a.default||a).template({1:function(n,e,t,a,l){var i,o,r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"        "+(null!=(i="function"==typeof(o=null!=(o=r(t,"picture_html")||(null!=e?r(e,"picture_html"):e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"picture_html",hash:{},data:l,loc:{start:{line:5,column:8},end:{line:5,column:26}}}):o)?i:"")+"\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var i,o,r=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<article class="channel--article">\n  <a href="'+n.escapeExpression("function"==typeof(o=null!=(o=u(t,"url")||(null!=e?u(e,"url"):e))?o:c)?o.call(r,{name:"url",hash:{},data:l,loc:{start:{line:2,column:11},end:{line:2,column:18}}}):o)+'">\n    <div class="image--article">\n'+(null!=(i=u(t,"if").call(r,null!=e?u(e,"picture_html"):e,{name:"if",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:4,column:6},end:{line:6,column:13}}}))?i:"")+'    </div>\n    <h3 class="article--title">'+(null!=(i="function"==typeof(o=null!=(o=u(t,"title")||(null!=e?u(e,"title"):e))?o:c)?o.call(r,{name:"title",hash:{},data:l,loc:{start:{line:8,column:31},end:{line:8,column:42}}}):o)?i:"")+"</h3>\n  </a>\n</article>"},useData:!0})},1021:function(n,e,t){var a=t(423);n.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var i,o=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,c=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<article class="section-more-from-channel__ad channel--article channel--article__ad">\n  \x3c!--img src="http://via.placeholder.com/300x250" /--\x3e\n  <div\n    id="'+c("function"==typeof(i=null!=(i=u(t,"id")||(null!=e?u(e,"id"):e))?i:r)?i.call(o,{name:"id",hash:{},data:l,loc:{start:{line:4,column:8},end:{line:4,column:14}}}):i)+'"\n    class="ad ad-container ad-wrapper type-'+c("function"==typeof(i=null!=(i=u(t,"template")||(null!=e?u(e,"template"):e))?i:r)?i.call(o,{name:"template",hash:{},data:l,loc:{start:{line:5,column:43},end:{line:5,column:55}}}):i)+'"\n    data-dimensions="'+c("function"==typeof(i=null!=(i=u(t,"template")||(null!=e?u(e,"template"):e))?i:r)?i.call(o,{name:"template",hash:{},data:l,loc:{start:{line:6,column:21},end:{line:6,column:33}}}):i)+'"\n    data-tgxlazy="200"\n    data-tgxtrack="true"\n  ></div>\n</article>'},useData:!0})},1022:function(n,e,t){var a=t(423);n.exports=(a.default||a).template({compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){return'<article class="section-more-from-channel__ad channel--article channel--article__ad__native">\n  <div\n    id="ad-480x100_1x5_more-channel_1"\n    class="ad ad-container ad-wrapper type-480x100-flex"\n    data-dimensions="480x100;1x5"\n    data-tgxnativekey="hybQgUFTpSBbnkqewQEVDfkN" data-tgxlazy="200"\n    data-tgxpriority="6"\n  ></div>\n</article>\n'},useData:!0})},435:function(n,e,t){"use strict";t.r(e);var a=t(5),l=t.n(a),i=t(4),o=t(1),r=t.n(o);function c(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var u=t(1020),s=t(1021),d=t(1022),p={},m=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.buttonElement=r()(e).find(".section-more-articles__button")[0],this.wrapperElement=r()(e).find(".section-more-articles__articles-wrap")[0],this.categorySlug=e.dataset.categorySlug,this.page=1}var e,t,a;return e=n,(t=[{key:"attach",value:function(){this.buttonElement.onclick=this.handleOnClick.bind(this)}},{key:"handleOnClick",value:function(){this.fetchMoreItems()}},{key:"addItems",value:function(n){var e,t=null;for(e=0;e<n.length;e+=1)"post"===(t=n[e]).type?this.addArticle(t):"ad"===t.type?this.addAd(t):"nativeAd"===t.type&&this.addNativeAd(t);l()(i.zb).broadcast({})}},{key:"addArticle",value:function(n){var e=u({title:n.title,url:n.url,picture_html:n.thumbnail});this.appendHtmlToContainer(e)}},{key:"addAd",value:function(n){var e=s(n);this.appendHtmlToContainer(e),window.karma.cmd.push((function(){window.karma.createSlot(function(n){var e=window.karma&&window.karma.config&&window.karma.config.isMobile,t="div-gpt-lazy-";"300x250"===n&&(t+=e?"mob-":"",t+="square-fixed"),p[t]?p[t]+=1:p[t]=1;var a=(p[t]+3)%4+1;return"".concat(t,"-tier").concat(a)}(n.template),n.id,!0)}))}},{key:"addNativeAd",value:function(){var n=d({id:"channel-more-from-native",native_key:"hybQgUFTpSBbnkqewQEVDfkN",dimensions:"480x100;1x5"});this.appendHtmlToContainer(n)}},{key:"appendHtmlToContainer",value:function(n){r()(this.wrapperElement).append('<div class="section-more-articles--article-wrapper">'.concat(n,"</div>"))}},{key:"fetchMoreItems",value:function(){var n=this;r.a.ajax({url:"/channel-load-more",data:{page:this.page,categorySlug:this.categorySlug},success:function(e){try{n.addItems(e)}catch(n){}n.page+=1}})}}])&&c(e.prototype,t),a&&c(e,a),n}();e.default=function(){var n;0===(n=document.querySelectorAll(".component.channelLoadMore")).length||Array.prototype.forEach.call(n,(function(n){var e=new m(n);e.attach(n),e.fetchMoreItems()}))}}}]);
//# sourceMappingURL=49-49.js.map