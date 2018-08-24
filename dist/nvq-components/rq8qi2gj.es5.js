/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};NvqComponents.loadBundle("rq8qi2gj",["exports"],function(t){var e=window.NvqComponents.h,n=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function a(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,a)}c((r=r.apply(t,e||[])).next())})},r=function(){function t(){this.items=[],this.endpoint="",this.componentAttribubte="data-nvq-autocomplete"}return t.prototype.itemsSourceHandler=function(t){var e,n;e=t,(n=document.createElement("a")).href=e,n.host&&n.host!=window.location.host?this.endpoint=t:this.items=t.split(",")},t.prototype.isLocal=function(){return""==this.endpoint||null==this.endpoint||void 0==this.endpoint},t.prototype.handleInput=function(t){return n(this,void 0,void 0,function(){var e,n,r,o,i,u,a,c,l,s,p,f=this;return __generator(this,function(h){return e=t.target,this.items!==[]&&0!=this.items.length||this.itemsSourceHandler(this.itemsSource),n=function(t){return t.setAttribute(f.componentAttribubte,""),t},r=function(t){var e=document.createElement("div");return(e=n(e)).setAttribute("class","autocomplete-row"),e.innerHTML="<strong>"+t+"</strong>",e},o=function(t){var e=document.createElement("div");(e=n(e)).setAttribute("id","autocomplete-list"),e.setAttribute("class","autocomplete-items");for(var r=0,o=t;r<o.length;r++){var i=o[r];e.appendChild(i)}return e},i=function(){var t=[];for(var e in f.items)if(f.items[e].toLowerCase().includes(s.toLocaleLowerCase())){var n=r(f.items[e]);t.push(n)}return t},u=function(t){var e=f.endpoint+t;return fetch(e).then(function(t){return t.json()}).then(function(t){return t.toString()})},a=function(t,e){u(t).then(function(t){var n=t.split(",");e(n)})},c=function(){var t=e.parentNode.querySelector("#autocomplete-list");null!=t&&void 0!=t&&e.parentNode.removeChild(t)},l=function(t){if(c(),t.length>0){var n=o(t);e.parentNode.appendChild(n)}},""===(s=e.value)||void 0===s?(c(),[2]):(this.isLocal()?(p=i(),l(p)):a(s,function(t){var e=[];for(var n in t){var o=r(t[n]);e.push(o)}l(e)}),[2])})})},t.prototype.render=function(){var t=this;return e("div",null,e("div",{class:"autocomplete"},e("input",{autocomplete:"off",onInput:function(e){return n(t,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.handleInput(e)];case 1:return[2,t.sent()]}})})},type:"text",name:this.name,placeholder:this.placeholder,value:this.value})))},Object.defineProperty(t,"is",{get:function(){return"nvq-autocomplete"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{itemsSource:{type:String,attr:"items-source",watchCallbacks:["itemsSourceHandler"]},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host .autocomplete{position:relative;display:inline-block;width:300px}:host .autocomplete input{border:1px solid transparent;background-color:#f1f1f1;padding:10px;font-size:16px}:host .autocomplete input[type=text]{background-color:#f1f1f1;width:100%}:host .autocomplete input[type=submit]{background-color:#1e90ff;color:#fff;cursor:pointer}:host .autocomplete .autocomplete-items{position:absolute;z-index:100;top:100%;left:0;right:0;background:red}:host .autocomplete .autocomplete-items .autocomplete-row{padding:1em;border:1px solid #d4d4d4}:host .autocomplete .autocomplete-items .autocomplete-row:hover{background-color:#e9e9e9}:host .autocomplete-items{background-color:pink}"},enumerable:!0,configurable:!0}),t}();t.NvqAutocomplete=r,Object.defineProperty(t,"__esModule",{value:!0})});