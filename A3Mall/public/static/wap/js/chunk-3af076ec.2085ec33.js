(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3af076ec"],{1175:function(t,e,i){},"4cf9":function(t,e,i){},"4d63":function(t,e,i){var s=i("83ab"),n=i("da84"),o=i("94ca"),a=i("7156"),r=i("9bf2").f,c=i("241c").f,l=i("44e7"),u=i("ad6d"),d=i("9f7f"),h=i("6eeb"),f=i("d039"),p=i("69f3").set,b=i("2626"),g=i("b622"),v=g("match"),m=n.RegExp,k=m.prototype,S=/a/g,x=/a/g,y=new m(S)!==S,C=d.UNSUPPORTED_Y,_=s&&o("RegExp",!y||C||f((function(){return x[v]=!1,m(S)!=S||m(x)==x||"/a/i"!=m(S,"i")})));if(_){var j=function(t,e){var i,s=this instanceof j,n=l(t),o=void 0===e;if(!s&&n&&t.constructor===j&&o)return t;y?n&&!o&&(t=t.source):t instanceof j&&(o&&(e=u.call(t)),t=t.source),C&&(i=!!e&&e.indexOf("y")>-1,i&&(e=e.replace(/y/g,"")));var r=a(y?new m(t,e):m(t,e),s?this:k,j);return C&&i&&p(r,{sticky:i}),r},O=function(t){t in j||r(j,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},w=c(m),B=0;while(w.length>B)O(w[B++]);k.constructor=j,j.prototype=k,h(n,"RegExp",j)}b("RegExp")},"4e4e":function(t,e,i){"use strict";var s=i("d85a"),n=i.n(s);n.a},5246:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("8a0b")},"591c":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("80ee")},"6b41":function(t,e,i){"use strict";var s=i("d282"),n=i("b1d2"),o=i("ad06"),a=Object(s["a"])("nav-bar"),r=a[0],c=a[1];e["a"]=r({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(o["a"],{class:c("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:c("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:c("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[c({fixed:this.fixed}),(t={},t[n["b"]]=this.border,t)]},[e("div",{class:c("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[c("title"),"van-ellipsis"]},[this.slots("title")||this.title]),e("div",{class:c("right"),on:{click:this.onClickRight}},[this.genRight()])])},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:c("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},7156:function(t,e,i){var s=i("861d"),n=i("d2bb");t.exports=function(t,e,i){var o,a;return n&&"function"==typeof(o=e.constructor)&&o!==i&&s(a=o.prototype)&&a!==i.prototype&&n(t,a),t}},7713:function(t,e,i){"use strict";var s=i("c31d"),n=i("d282"),o=i("a142"),a=i("48f4"),r=i("9884"),c=i("6f2f"),l=i("ad06"),u=Object(n["a"])("goods-action-icon"),d=u[0],h=u[1];e["a"]=d({mixins:[Object(r["a"])("vanGoodsAction")],props:Object(s["a"])(Object(s["a"])({},a["c"]),{},{dot:Boolean,text:String,icon:String,color:String,info:[Number,String],badge:[Number,String],iconClass:null}),methods:{onClick:function(t){this.$emit("click",t),Object(a["b"])(this.$router,this)},genIcon:function(){var t=this.$createElement,e=this.slots("icon"),i=Object(o["b"])(this.badge)?this.badge:this.info;return e?t("div",{class:h("icon")},[e,t(c["a"],{attrs:{dot:this.dot,info:i}})]):t(l["a"],{class:[h("icon"),this.iconClass],attrs:{tag:"div",dot:this.dot,info:i,name:this.icon,color:this.color}})}},render:function(){var t=arguments[0];return t("div",{attrs:{role:"button",tabindex:"0"},class:h(),on:{click:this.onClick}},[this.genIcon(),this.slots()||this.text])}})},"80ee":function(t,e,i){},"82a8":function(t,e,i){"use strict";var s=i("c31d"),n=i("d282"),o=i("48f4"),a=i("9884"),r=i("b650"),c=Object(n["a"])("goods-action-button"),l=c[0],u=c[1];e["a"]=l({mixins:[Object(a["a"])("vanGoodsAction")],props:Object(s["a"])(Object(s["a"])({},o["c"]),{},{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),computed:{isFirst:function(){var t=this.parent&&this.parent.children[this.index-1];return!t||t.$options.name!==this.$options.name},isLast:function(){var t=this.parent&&this.parent.children[this.index+1];return!t||t.$options.name!==this.$options.name}},methods:{onClick:function(t){this.$emit("click",t),Object(o["b"])(this.$router,this)}},render:function(){var t=arguments[0];return t(r["a"],{class:u([{first:this.isFirst,last:this.isLast},this.type]),attrs:{square:!0,size:"large",type:this.type,icon:this.icon,color:this.color,loading:this.loading,disabled:this.disabled},on:{click:this.onClick}},[this.slots()||this.text])}})},"85b3":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"sku-action",class:{"sku-show":1==t.value}},[i("div",{staticClass:"sku-header"},[i("div",{staticClass:"sku-header-image"},[i("img",{attrs:{src:t.goods.photo}})]),i("div",{staticClass:"sku-header-goods-info"},[t._t("sku-header-price",[i("div",{staticClass:"sku-header-goods-price"},[i("span",{staticClass:"symbol"},[t._v("￥")]),i("span",{staticClass:"price"},[t._v(t._s(t.goodsPrice||""))])])],{price:t.goodsPrice}),i("div",{staticClass:"sku-header-item"},[i("span",{staticClass:"sku-stock"},[t._v(" 剩余"),i("i",{staticClass:"stock-num"},[t._v(t._s(t.goodsStockNumber||t.goods.store_nums||"0"))]),t._v("件 ")])]),i("div",{staticClass:"sku-header-item"},[t._v(t._s(t.specSelected||""))])],2)]),i("div",{staticClass:"sku-body",style:{"max-height":t.maxHeight+"px"}},[i("div",{staticClass:"sku-group-container"},t._l(t.attribute,(function(e,s){return i("div",{key:s,staticClass:"sku-row"},[i("div",{staticClass:"sku-row-title"},[t._v(t._s(e.name))]),t._l(e.list,(function(s,n){return i("span",{key:n,staticClass:"sku-row-item",class:{"sku-row-item-active":s.selected&&0==s.disable,"sku-row-item-disable":s.disable}},[i("i",{staticClass:"sku-row-item-name",on:{click:function(i){return t.onSelected(e.id,s.id)}}},[t._v(t._s(s.value))])])}))],2)})),0),i("div",{staticClass:"sku-stepper-stock"},[i("div",{staticClass:"sku-stepper-title"},[t._v("购买数量")]),i("div",{staticClass:"stepper sku-stepper"},[i("button",{staticClass:"stepper-minus",class:{"stepper-minus-disabled":t.number<=1},attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.minus(e)}}}),i("input",{staticClass:"stepper-input",attrs:{type:"number",disabled:"disabled"},domProps:{value:t.number}}),i("button",{staticClass:"stepper-plus",class:{"stepper-minus-disabled":t.number>=t.goodsStockNumber},attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.plus(e)}}})])]),i("div",{staticStyle:{width:"100%",height:"55px"}})]),i("i",{staticClass:"fa fa-times-circle",attrs:{id:"close"},on:{click:function(e){return e.stopPropagation(),t.onClose(e)}}})]),i("popup",{model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},n=[],o=(i("a15b"),i("fb6a"),i("b0c0"),i("4d63"),i("ac1f"),i("25f0"),i("ade3")),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mask",class:{hide:0==t.value,show:1==t.value},on:{click:function(e){return e.stopPropagation(),t.onClose(e)}}},[t._t("default")],2)},r=[],c={name:"Popup",props:{value:{type:Boolean,default:!1}},methods:{onClose:function(){}}},l=c,u=(i("bc06"),i("2877")),d=Object(u["a"])(l,a,r,!1,null,"06d8387c",null),h=d.exports,f={name:"SkuAction",components:Object(o["a"])({},h.name,h),props:{value:{type:Boolean,default:!1},fields:{required:!0,type:Array,default:function(){return[]}},goods:{default:function(){return{}}},attribute:{default:function(){return[]}},item:{default:function(){return{}}},goodsInfo:{default:function(){return{}}}},data:function(){return{maxHeight:0,number:1,minNumber:1,maxNumber:0,specSelected:"",selectedSku:[],goodsPrice:"",goodsStockNumber:"",selectedGoodsInfo:{}}},mounted:function(){this.maxHeight=window.innerHeight-200},watch:{goods:{handler:function(t,e){this.goodsStockNumber=this.goods.store_nums,this.goodsPrice=this.goods.sell_price;var i={};for(var s in this.goods)this.$tools.in_array(s,this.fields)&&(i[s]=this.goods[s]);Object.assign(i,{num:this.number,isSubmit:!0,selectedSku:{id:"",specSelected:""}}),this.selectedGoodsInfo=i},deep:!0},attribute:{handler:function(t,e){if(!(this.attribute.length<=0)){var i=[];for(var s in this.selectedSku=[],this.attribute)for(var n in this.attribute[s]["list"])this.attribute[s]["list"][n]["selected"]&&!this.attribute[s]["list"][n]["disable"]&&(this.selectedSku.push(this.attribute[s]["list"][n]),i.push({name:this.attribute[s].name,value:this.attribute[s]["list"][n].value}));var o=[];for(var a in this.selectedSku)o.push(this.selectedSku[a].pid+"_"+this.selectedSku[a].id);if(this.attribute.length==o.length&&void 0!=this.item[o.join("_")]){var r=this.item[o.join("_")];this.goodsPrice=r.sell_price,this.goodsStockNumber=r.store_nums,this.number>=r.store_nums&&(this.number=r.store_nums),this.selectedGoodsInfo.selectedSku.id=r.product_id,this.selectedGoodsInfo.isSubmit=!0}else this.selectedGoodsInfo.isSubmit=!1;this.specSelected="";var c=[];for(var l in i)c.push(i[l].name+":"+i[l].value);c.length>0&&(this.selectedGoodsInfo.selectedSku.specSelected=c.join(","),this.specSelected="己选择："+c.join(","))}},deep:!0},selectedGoodsInfo:{handler:function(t,e){this.$emit("update:goods-info",this.selectedGoodsInfo)},deep:!0}},methods:{minus:function(){this.number<=1||(this.number-=1,this.selectedGoodsInfo.num=this.number)},plus:function(){this.number>=this.goodsStockNumber||(this.number+=1,this.selectedGoodsInfo.num=this.number)},onClose:function(){this.$emit("input",!this.value)},checkStatus:function(t,e){var i=this.attribute,s=!1;for(var n in i)if(t==i[n]["id"])for(var o in i[n]["list"]){var a=i[n]["list"][o];if(t==a["pid"]&&e==a["id"]&&a["disable"]){s=!0;break}}return s},onSelected:function(t,e){if(!this.checkStatus(t,e)){var i=[];for(var s in this.attribute)if(i[s]="[A-Za-z0-9_\\:\\,]+",t==this.attribute[s]["id"])for(var n in this.attribute[s]["list"]){var o=this.attribute[s]["list"][n];if(t==o["pid"]&&e==o["id"]){var a=!o.selected;this.$set(this.attribute[s]["list"][n],"selected",a),1==a&&(i[s]=o.pid+":"+o.id)}else this.$set(this.attribute[s]["list"][n],"selected",!1)}for(var r in this.attribute)for(var c in this.attribute[r]["list"]){var l=this.attribute[r]["list"][c],u=i.slice();u[r]=l.pid+":"+l.id;var d=!0;for(var h in this.item){var f=new RegExp(u.join(","));f.test(this.item[h].key)&&this.item[h].store_nums>0&&(d=!1)}this.$set(this.attribute[r]["list"][c],"disable",d)}}}}},p=f,b=(i("4e4e"),Object(u["a"])(p,s,n,!1,null,"522e2392",null));e["a"]=b.exports},"8a0b":function(t,e,i){},"93ac":function(t,e,i){"use strict";i("68ef"),i("4cf9")},a15b:function(t,e,i){"use strict";var s=i("23e7"),n=i("44ad"),o=i("fc6a"),a=i("a640"),r=[].join,c=n!=Object,l=a("join",",");s({target:"Array",proto:!0,forced:c||!l},{join:function(t){return r.call(o(this),void 0===t?",":t)}})},b650:function(t,e,i){"use strict";var s=i("c31d"),n=i("2638"),o=i.n(n),a=i("d282"),r=i("ba31"),c=i("b1d2"),l=i("48f4"),u=i("ad06"),d=i("543e"),h=Object(a["a"])("button"),f=h[0],p=h[1];function b(t,e,i,s){var n,a=e.tag,h=e.icon,f=e.type,b=e.color,g=e.plain,v=e.disabled,m=e.loading,k=e.hairline,S=e.loadingText,x={};function y(t){m||v||(Object(r["a"])(s,"click",t),Object(l["a"])(s))}function C(t){Object(r["a"])(s,"touchstart",t)}b&&(x.color=g?b:c["i"],g||(x.background=b),-1!==b.indexOf("gradient")?x.border=0:x.borderColor=b);var _=[p([f,e.size,{plain:g,loading:m,disabled:v,hairline:k,block:e.block,round:e.round,square:e.square}]),(n={},n[c["d"]]=k,n)];function j(){var s,n=[];return m?n.push(t(d["a"],{class:p("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}})):h&&n.push(t(u["a"],{attrs:{name:h,classPrefix:e.iconPrefix},class:p("icon")})),s=m?S:i.default?i.default():e.text,s&&n.push(t("span",{class:p("text")},[s])),n}return t(a,o()([{style:x,class:_,attrs:{type:e.nativeType,disabled:v},on:{click:y,touchstart:C}},Object(r["b"])(s)]),[t("div",{class:p("content")},[j()])])}b.props=Object(s["a"])(Object(s["a"])({},l["c"]),{},{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"}}),e["a"]=f(b)},bb33:function(t,e,i){"use strict";var s=i("d282"),n=i("9884"),o=Object(s["a"])("goods-action"),a=o[0],r=o[1];e["a"]=a({mixins:[Object(n["b"])("vanGoodsAction")],props:{safeAreaInsetBottom:{type:Boolean,default:!0}},render:function(){var t=arguments[0];return t("div",{class:r({unfit:!this.safeAreaInsetBottom})},[this.slots()])}})},bc06:function(t,e,i){"use strict";var s=i("d56a"),n=i.n(s);n.a},bc1b:function(t,e,i){},d56a:function(t,e,i){},d85a:function(t,e,i){},ef6f:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("e3b3"),i("bc1b"),i("1175")},fb6a:function(t,e,i){"use strict";var s=i("23e7"),n=i("861d"),o=i("e8b5"),a=i("23cb"),r=i("50c4"),c=i("fc6a"),l=i("8418"),u=i("b622"),d=i("1dde"),h=i("ae40"),f=d("slice"),p=h("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),g=[].slice,v=Math.max;s({target:"Array",proto:!0,forced:!f||!p},{slice:function(t,e){var i,s,u,d=c(this),h=r(d.length),f=a(t,h),p=a(void 0===e?h:e,h);if(o(d)&&(i=d.constructor,"function"!=typeof i||i!==Array&&!o(i.prototype)?n(i)&&(i=i[b],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return g.call(d,f,p);for(s=new(void 0===i?Array:i)(v(p-f,0)),u=0;f<p;f++,u++)f in d&&l(s,u,d[f]);return s.length=u,s}})}}]);