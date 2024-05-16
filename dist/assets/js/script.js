(()=>{"use strict";var t,e={756:(t,e)=>{var n=window,i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.msRequestAnimationFrame||function(t){return setTimeout(t,16)},a=window,r=a.cancelAnimationFrame||a.mozCancelAnimationFrame||function(t){clearTimeout(t)};function o(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function u(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function s(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var c=document.documentElement;function f(t){var e="";return t.fake&&(e=c.style.overflow,t.style.background="",t.style.overflow=c.style.overflow="hidden",c.appendChild(t)),e}function d(t,e){t.fake&&(t.remove(),c.style.overflow=e,c.offsetHeight)}function v(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function p(t){return("insertRule"in t?t.cssRules:t.rules).length}function m(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var h="classList"in document.createElement("_"),y=h?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},g=h?function(t,e){y(t,e)||t.classList.add(e)}:function(t,e){y(t,e)||(t.className+=" "+e)},x=h?function(t,e){y(t,e)&&t.classList.remove(e)}:function(t,e){y(t,e)&&(t.className=t.className.replace(e,""))};function b(t,e){return t.hasAttribute(e)}function w(t,e){return t.getAttribute(e)}function C(t){return void 0!==t.item}function M(t,e){if(t=C(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function T(t,e){t=C(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function E(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function A(t,e){"none"!==t.style.display&&(t.style.display="none")}function L(t,e){"none"===t.style.display&&(t.style.display="")}function N(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}var i=document.createElement("fakeelement");t.length;for(var a=0;a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var O=!1;try{var D=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,D)}catch(t){}var H=!!O&&{passive:!0};function k(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&H;t.addEventListener(i,e[i],a)}}function R(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function I(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var P=function(t){t=o({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},c={},h=t.useLocalStorage;if(h){var C=navigator.userAgent,O=new Date;try{(c=n.localStorage)?(c.setItem(O,O),h=c.getItem(O)==O,c.removeItem(O)):h=!1,h||(c={})}catch(t){h=!1}h&&(c.tnsApp&&c.tnsApp!==C&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){c.removeItem(t)})),localStorage.tnsApp=C)}var D=c.tC?u(c.tC):l(c,"tC",function(){var t=document,e=s(),n=f(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?d(e,n):i.remove(),a}(),h),H=c.tPL?u(c.tPL):l(c,"tPL",function(){var t,e=document,n=s(),i=f(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?d(n,i):a.remove(),t}(),h),z=c.tMQ?u(c.tMQ):l(c,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=s(),i=f(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?d(n,i):a.remove(),"absolute"===t}(),h),W=c.tTf?u(c.tTf):l(c,"tTf",B("transform"),h),q=c.t3D?u(c.t3D):l(c,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=s(),a=f(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?d(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),h),F=c.tTDu?u(c.tTDu):l(c,"tTDu",B("transitionDuration"),h),j=c.tTDe?u(c.tTDe):l(c,"tTDe",B("transitionDelay"),h),V=c.tADu?u(c.tADu):l(c,"tADu",B("animationDuration"),h),G=c.tADe?u(c.tADe):l(c,"tADe",B("animationDelay"),h),Q=c.tTE?u(c.tTE):l(c,"tTE",S(F,"Transition"),h),X=c.tAE?u(c.tAE):l(c,"tAE",S(V,"Animation"),h),Y=n.console&&"function"==typeof n.console.warn,K=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],U={};if(K.forEach((function(n){if("string"==typeof t[n]){var i=t[n],a=e.querySelector(i);if(U[n]=i,!a||!a.nodeName)return void(Y&&console.warn("Can't find",t[n]));t[n]=a}})),!(t.container.children.length<1)){var _=t.responsive,J=t.nested,Z="carousel"===t.mode;if(_){0 in _&&(t=o(t,_[0]),delete _[0]);var $={};for(var tt in _){var et=_[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}_=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,ut,lt="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=Dn(),yt=!1;_&&$n(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,wt,Ct,Mt=t.autoWidth,Tt=Pn("fixedWidth"),Et=Pn("edgePadding"),At=Pn("gutter"),Lt=Rn(),Nt=Pn("center"),Bt=Mt?1:Math.floor(Pn("items")),St=Pn("slideBy"),Ot=t.viewportMax||t.fixedWidthViewportWidth,Dt=Pn("arrowKeys"),Ht=Pn("speed"),kt=t.rewind,Rt=!kt&&t.loop,It=Pn("autoHeight"),Pt=Pn("controls"),zt=Pn("controlsText"),Wt=Pn("nav"),qt=Pn("touch"),Ft=Pn("mouseDrag"),jt=Pn("autoplay"),Vt=Pn("autoplayTimeout"),Gt=Pn("autoplayText"),Qt=Pn("autoplayHoverPause"),Xt=Pn("autoplayResetOnVisibility"),Yt=(null,wt=Pn("nonce"),Ct=document.createElement("style"),wt&&Ct.setAttribute("nonce",wt),document.querySelector("head").appendChild(Ct),Ct.sheet?Ct.sheet:Ct.styleSheet),Kt=t.lazyload,Ut=t.lazyloadSelector,_t=[],Jt=Rt?(xt=function(){if(Mt||Tt&&!Ot)return mt-1;var e=Tt?"fixedWidth":"items",n=[];if((Tt||t[e]<mt)&&n.push(t[e]),_)for(var i in _){var a=_[i][e];a&&(Tt||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Tt?Ot/Math.min.apply(null,n):Math.max.apply(null,n))}(),bt=Z?Math.ceil((5*xt-mt)/2):4*xt-mt,bt=Math.max(xt,bt),In("edgePadding")?bt+1:bt):0,Zt=Z?mt+2*Jt:mt+Jt,$t=!(!Tt&&!Mt||Rt),te=Tt?Ei():null,ee=!Z||!Rt,ne=lt?"left":"top",ie="",ae="",re=Tt?function(){return Nt&&!Rt?mt-1:Math.ceil(-te/(Tt+At))}:Mt?function(){for(var t=0;t<Zt;t++)if(gt[t]>=-te)return t}:function(){return Nt&&Z&&!Rt?mt-1:Rt||Z?Math.max(0,Zt-Math.ceil(Bt)):Zt-1},oe=Bn(Pn("startIndex")),ue=oe;Nn();var le,se,ce,fe=0,de=Mt?null:re(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,me=!pe||"?",he=!1,ye=t.onInit,ge=new I,xe=" tns-slider tns-"+t.mode,be=ft.id||(ce=window.tnsId,window.tnsId=ce?ce+1:1,"tns"+window.tnsId),we=Pn("disable"),Ce=!1,Me=t.freezable,Te=!(!Me||Mt)&&Zn(),Ee=!1,Ae={click:ki,keydown:function(t){t=ji(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ke.disabled||ki(t,-1):Ue.disabled||ki(t,1))}},Le={click:function(t){if(he){if(ve)return;Di()}for(var e=Vi(t=ji(t));e!==$e&&!b(e,"data-nav");)e=e.parentNode;if(b(e,"data-nav")){var n=an=Number(w(e,"data-nav")),i=Tt||Mt?n*mt/en:n*Bt;Hi(Re?n:Math.min(Math.ceil(i),mt-1),t),rn===n&&(fn&&Wi(),an=-1)}},keydown:function(t){t=ji(t);var n=e.activeElement;if(b(n,"data-nav")){var i=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(t.keyCode),r=Number(w(n,"data-nav"));i>=0&&(0===i?r>0&&Fi(Ze[r-1]):1===i?r<en-1&&Fi(Ze[r+1]):(an=r,Hi(r,t)))}}},Ne={mouseover:function(){fn&&(Ii(),dn=!0)},mouseout:function(){dn&&(Ri(),dn=!1)}},Be={visibilitychange:function(){e.hidden?fn&&(Ii(),pn=!0):pn&&(Ri(),pn=!1)}},Se={keydown:function(t){t=ji(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);e>=0&&ki(t,0===e?-1:1)}},Oe={touchstart:Yi,touchmove:Ki,touchend:_i,touchcancel:_i},De={mousedown:Yi,mousemove:Ki,mouseup:_i,mouseleave:_i},He=In("controls"),ke=In("nav"),Re=!!Mt||t.navAsThumbnails,Ie=In("autoplay"),Pe=In("touch"),ze=In("mouseDrag"),We="tns-slide-active",qe="tns-slide-cloned",Fe="tns-complete",je={load:function(t){li(Vi(t))},error:function(t){var e;e=Vi(t),g(e,"failed"),si(e)}},Ve="force"===t.preventScrollOnTouch;if(He)var Ge,Qe,Xe=t.controlsContainer,Ye=t.controlsContainer?t.controlsContainer.outerHTML:"",Ke=t.prevButton,Ue=t.nextButton,_e=t.prevButton?t.prevButton.outerHTML:"",Je=t.nextButton?t.nextButton.outerHTML:"";if(ke)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Mt?mt:Zi(),nn=0,an=-1,rn=On(),on=rn,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(Ie)var cn,fn,dn,vn,pn,mn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Pe||ze)var xn,bn,wn={},Cn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Mt||Ln(we||Te),W&&(ne=W,ie="translate",q?(ie+=lt?"3d(":"3d(0px, ",ae=lt?", 0px, 0px)":", 0px)"):(ie+=lt?"X(":"Y(",ae=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){if(In("gutter"),st.className="tns-outer",ct.className="tns-inner",st.id=be+"-ow",ct.id=be+"-iw",""===ft.id&&(ft.id=be),xe+=H||Mt?" tns-subpixel":" tns-no-subpixel",xe+=D?" tns-calc":" tns-no-calc",Mt&&(xe+=" tns-autowidth"),xe+=" tns-"+t.axis,ft.className+=xe,Z?((ot=e.createElement("div")).id=be+"-mw",ot.className="tns-ovh",st.appendChild(ot),ot.appendChild(ct)):st.appendChild(ct),It&&((ot||ct).className+=" tns-ah"),dt.insertBefore(st,ft),ct.appendChild(ft),m(pt,(function(t,e){g(t,"tns-item"),t.id||(t.id=be+"-item"+e),!Z&&rt&&g(t,rt),M(t,{"aria-hidden":"true",tabindex:"-1"})})),Jt){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),a=Jt;a--;){var r=a%mt,o=pt[r].cloneNode(!0);if(g(o,qe),T(o,"id"),i.insertBefore(o,i.firstChild),Z){var u=pt[mt-1-r].cloneNode(!0);g(u,qe),T(u,"id"),n.appendChild(u)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=oe,i=oe+Math.min(mt,Bt);e<i;e++){var a=pt[e];a.style.left=100*(e-oe)/Bt+"%",g(a,nt),x(a,rt)}if(lt&&(H||Mt?(v(Yt,"#"+be+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",p(Yt)),v(Yt,"#"+be,"font-size:0;",p(Yt))):Z&&m(pt,(function(t,e){t.style.marginLeft=function(t){return D?D+"("+100*t+"% / "+Zt+")":100*t/Zt+"%"}(e)}))),z){if(F){var r=ot&&t.autoHeight?Vn(t.speed):"";v(Yt,"#"+be+"-mw",r,p(Yt))}r=zn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),v(Yt,"#"+be+"-iw",r,p(Yt)),Z&&(r=lt&&!Mt?"width:"+Wn(t.fixedWidth,t.gutter,t.items)+";":"",F&&(r+=Vn(Ht)),v(Yt,"#"+be,r,p(Yt))),r=lt&&!Mt?qn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=Fn(t.gutter)),Z||(F&&(r+=Vn(Ht)),V&&(r+=Gn(Ht))),r&&v(Yt,"#"+be+" > .tns-item",r,p(Yt))}else Z&&It&&(ot.style[F]=Ht/1e3+"s"),ct.style.cssText=zn(Et,At,Tt,It),Z&&lt&&!Mt&&(ft.style.width=Wn(Tt,At,Bt)),r=lt&&!Mt?qn(Tt,At,Bt):"",At&&(r+=Fn(At)),r&&v(Yt,"#"+be+" > .tns-item",r,p(Yt));if(_&&z)for(var o in _){o=parseInt(o);var u=_[o],l=(r="",""),s="",c="",f="",d=Mt?null:Pn("items",o),h=Pn("fixedWidth",o),y=Pn("speed",o),b=Pn("edgePadding",o),w=Pn("autoHeight",o),C=Pn("gutter",o);F&&ot&&Pn("autoHeight",o)&&"speed"in u&&(l="#"+be+"-mw{"+Vn(y)+"}"),("edgePadding"in u||"gutter"in u)&&(s="#"+be+"-iw{"+zn(b,C,h,y,w)+"}"),Z&&lt&&!Mt&&("fixedWidth"in u||"items"in u||Tt&&"gutter"in u)&&(c="width:"+Wn(h,C,d)+";"),F&&"speed"in u&&(c+=Vn(y)),c&&(c="#"+be+"{"+c+"}"),("fixedWidth"in u||Tt&&"gutter"in u||!Z&&"items"in u)&&(f+=qn(h,C,d)),"gutter"in u&&(f+=Fn(C)),!Z&&"speed"in u&&(F&&(f+=Vn(y)),V&&(f+=Gn(y))),f&&(f="#"+be+" > .tns-item{"+f+"}"),(r=l+s+c+f)&&Yt.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",Yt.cssRules.length)}}(),Qn();var En=Rt?Z?function(){var t=fe,e=de;t+=St,e-=St,Et?(t+=1,e-=1):Tt&&(Lt+At)%(Tt+At)&&(e-=1),Jt&&(oe>e?oe-=mt:oe<t&&(oe+=mt))}:function(){if(oe>de)for(;oe>=fe+mt;)oe-=mt;else if(oe<fe)for(;oe<=de-mt;)oe+=mt}:function(){oe=Math.max(fe,Math.min(de,oe))},An=Z?function(){var t,e,n,i,a,r,o,u,l,s,c;Mi(ft,""),F||!Ht?(Ni(),Ht&&N(ft)||Di()):(t=ft,e=ne,n=ie,i=ae,a=Ai(),r=Ht,o=Di,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u)),lt||Ji()}:function(){_t=[];var t={};t[Q]=t[X]=Di,R(pt[ue],t),k(pt[oe],t),Bi(ue,nt,it,!0),Bi(oe,rt,nt),Q&&X&&Ht&&N(ft)||Di()};return{version:"2.9.4",getInfo:ta,events:ge,goTo:Hi,play:function(){jt&&!fn&&(zi(),vn=!1)},pause:function(){fn&&(Wi(),vn=!0)},isOn:yt,updateSliderHeight:mi,refresh:Qn,destroy:function(){if(Yt.disabled=!0,Yt.ownerNode&&Yt.ownerNode.remove(),R(n,{resize:_n}),Dt&&R(e,Se),Xe&&R(Xe,Ae),$e&&R($e,Le),R(ft,Ne),R(ft,Be),hn&&R(hn,{click:qi}),jt&&clearInterval(cn),Z&&Q){var i={};i[Q]=Di,R(ft,i)}qt&&R(ft,Oe),Ft&&R(ft,De);var a=[vt,Ye,_e,Je,tn,yn];for(var r in K.forEach((function(e,n){var i="container"===e?st:t[e];if("object"==typeof i&&i){var r=!!i.previousElementSibling&&i.previousElementSibling,o=i.parentNode;i.outerHTML=a[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),K=nt=it=at=rt=lt=st=ct=ft=dt=vt=pt=mt=ut=ht=Mt=Tt=Et=At=Lt=Bt=St=Ot=Dt=Ht=kt=Rt=It=Yt=Kt=gt=_t=Jt=Zt=$t=te=ee=ne=ie=ae=re=oe=ue=fe=de=pe=me=he=ye=ge=xe=be=we=Ce=Me=Te=Ee=Ae=Le=Ne=Be=Se=Oe=De=He=ke=Re=Ie=Pe=ze=We=Fe=je=le=Pt=zt=Xe=Ye=Ke=Ue=Ge=Qe=Wt=$e=tn=Ze=en=nn=an=rn=on=un=ln=sn=jt=Vt=mn=Gt=Qt=hn=yn=Xt=gn=cn=fn=dn=vn=pn=wn=Cn=xn=Mn=bn=Tn=qt=Ft=null,this)"rebuild"!==r&&(this[r]=null);yt=!1},rebuild:function(){return P(o(t,U))}}}function Ln(t){t&&(Pt=Wt=qt=Ft=Dt=jt=Qt=Xt=!1)}function Nn(){for(var t=Z?oe-Jt:oe;t<0;)t+=mt;return t%mt+1}function Bn(t){return t=t?Math.max(0,Math.min(Rt?mt-1:mt-Bt,t)):0,Z?t+Jt:t}function Sn(t){for(null==t&&(t=oe),Z&&(t-=Jt);t<0;)t+=mt;return Math.floor(t%mt)}function On(){var t,e=Sn();return t=Re?e:Tt||Mt?Math.ceil((e+1)*en/mt-1):Math.floor(e/Bt),!Rt&&Z&&oe===de&&(t=en-1),t}function Dn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Hn(t){return"top"===t?"afterbegin":"beforeend"}function kn(t){if(null!=t){var n,i,a=e.createElement("div");return t.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||kn(t.parentNode)}}function Rn(){var t=Et?2*Et-At:0;return kn(dt)-t}function In(e){if(t[e])return!0;if(_)for(var n in _)if(_[n][e])return!0;return!1}function Pn(e,n){if(null==n&&(n=ht),"items"===e&&Tt)return Math.floor((Lt+At)/(Tt+At))||1;var i=t[e];if(_)for(var a in _)n>=parseInt(a)&&e in _[a]&&(i=_[a][e]);return"slideBy"===e&&"page"===i&&(i=Pn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function zn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=lt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&a&&F&&i&&(r+=Vn(i)),r}function Wn(t,e,n){return t?(t+e)*Zt+"px":D?D+"("+100*Zt+"% / "+n+")":100*Zt/n+"%"}function qn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?Zt:n;i=D?D+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==J?i+";":i+" !important;"}function Fn(t){var e="";return!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;"),e}function jn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return jn(F,18)+"transition-duration:"+t/1e3+"s;"}function Gn(t){return jn(V,17)+"animation-duration:"+t/1e3+"s;"}function Qn(){if(In("autoHeight")||Mt||!lt){var t=ft.querySelectorAll("img");m(t,(function(t){var e=t.src;Kt||(e&&e.indexOf("data:image")<0?(t.src="",k(t,je),g(t,"loading"),t.src=e):li(t))})),i((function(){di(E(t),(function(){le=!0}))})),In("autoHeight")&&(t=ci(oe,Math.min(oe+Bt-1,Zt-1))),Kt?Xn():i((function(){di(E(t),Xn)}))}else Z&&Li(),Kn(),Un()}function Xn(){if(Mt&&mt>1){var t=Rt?oe:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Yn():setTimeout((function(){e()}),16)}()}else Yn()}function Yn(){lt&&!Mt||(hi(),Mt?(te=Ei(),Me&&(Te=Zn()),de=re(),Ln(we||Te)):Ji()),Z&&Li(),Kn(),Un()}function Kn(){if(yi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+mt+"</div>"),se=st.querySelector(".tns-liveregion .current"),Ie){var e=jt?"stop":"start";hn?M(hn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Hn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Gt[0]+"</button>"),hn=st.querySelector("[data-action]")),hn&&k(hn,{click:qi}),jt&&(zi(),Qt&&k(ft,Ne),Xt&&k(ft,Be))}if(ke){if($e)M($e,{"aria-label":"Carousel Pagination"}),m(Ze=$e.children,(function(t,e){M(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":be})}));else{for(var n="",i=Re?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Hn(t.navPosition),n),$e=st.querySelector(".tns-nav"),Ze=$e.children}if($i(),F){var r=F.substring(0,F.length-18).toLowerCase(),o="transition: all "+Ht/1e3+"s";r&&(o="-"+r+"-"+o),v(Yt,"[aria-controls^="+be+"-item]",o,p(Yt))}M(Ze[rn],{"aria-label":ln+(rn+1)+sn}),T(Ze[rn],"tabindex"),g(Ze[rn],un),k($e,Le)}He&&(Xe||Ke&&Ue||(st.insertAdjacentHTML(Hn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+be+'">'+zt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+be+'">'+zt[1]+"</button></div>"),Xe=st.querySelector(".tns-controls")),Ke&&Ue||(Ke=Xe.children[0],Ue=Xe.children[1]),t.controlsContainer&&M(Xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&M([Ke,Ue],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(M(Ke,{"data-controls":"prev"}),M(Ue,{"data-controls":"next"})),Ge=xi(Ke),Qe=xi(Ue),Ci(),Xe?k(Xe,Ae):(k(Ke,Ae),k(Ue,Ae))),ti()}function Un(){if(Z&&Q){var i={};i[Q]=Di,k(ft,i)}qt&&k(ft,Oe,t.preventScrollOnTouch),Ft&&k(ft,De),Dt&&k(e,Se),"inner"===J?ge.on("outerResized",(function(){Jn(),ge.emit("innerLoaded",ta())})):(_||Tt||Mt||It||!lt)&&k(n,{resize:_n}),It&&("outer"===J?ge.on("innerLoaded",fi):we||fi()),ui(),we?ii():Te&&ni(),ge.on("indexChanged",vi),"inner"===J&&ge.emit("innerLoaded",ta()),"function"==typeof ye&&ye(ta()),yt=!0}function _n(t){i((function(){Jn(ji(t))}))}function Jn(n){if(yt){"outer"===J&&ge.emit("outerResized",ta(n)),ht=Dn();var i,a=ut,r=!1;_&&($n(),(i=a!==ut)&&ge.emit("newBreakpointStart",ta(n)));var o,u,l=Bt,s=we,c=Te,f=Dt,d=Pt,h=Wt,y=qt,b=Ft,w=jt,C=Qt,M=Xt,T=oe;if(i){var E=Tt,N=It,B=zt,S=Nt,O=Gt;if(!z)var D=At,H=Et}if(Dt=Pn("arrowKeys"),Pt=Pn("controls"),Wt=Pn("nav"),qt=Pn("touch"),Nt=Pn("center"),Ft=Pn("mouseDrag"),jt=Pn("autoplay"),Qt=Pn("autoplayHoverPause"),Xt=Pn("autoplayResetOnVisibility"),i&&(we=Pn("disable"),Tt=Pn("fixedWidth"),Ht=Pn("speed"),It=Pn("autoHeight"),zt=Pn("controlsText"),Gt=Pn("autoplayText"),Vt=Pn("autoplayTimeout"),z||(Et=Pn("edgePadding"),At=Pn("gutter"))),Ln(we),Lt=Rn(),lt&&!Mt||we||(hi(),lt||(Ji(),r=!0)),(Tt||Mt)&&(te=Ei(),de=re()),(i||Tt)&&(Bt=Pn("items"),St=Pn("slideBy"),(u=Bt!==l)&&(Tt||Mt||(de=re()),En())),i&&we!==s&&(we?ii():function(){if(Ce){if(Yt.disabled=!1,ft.className+=xe,Li(),Rt)for(var t=Jt;t--;)Z&&L(pt[t]),L(pt[Zt-t-1]);if(!Z)for(var e=oe,n=oe+mt;e<n;e++){var i=pt[e],a=e<oe+Bt?nt:rt;i.style.left=100*(e-oe)/Bt+"%",g(i,a)}ei(),Ce=!1}}()),Me&&(i||Tt||Mt)&&(Te=Zn())!==c&&(Te?(Ni(Ai(Bn(0))),ni()):(function(){if(Ee){if(Et&&z&&(ct.style.margin=""),Jt)for(var t="tns-transparent",e=Jt;e--;)Z&&x(pt[e],t),x(pt[Zt-e-1],t);ei(),Ee=!1}}(),r=!0)),Ln(we||Te),jt||(Qt=Xt=!1),Dt!==f&&(Dt?k(e,Se):R(e,Se)),Pt!==d&&(Pt?Xe?L(Xe):(Ke&&L(Ke),Ue&&L(Ue)):Xe?A(Xe):(Ke&&A(Ke),Ue&&A(Ue))),Wt!==h&&(Wt?(L($e),$i()):A($e)),qt!==y&&(qt?k(ft,Oe,t.preventScrollOnTouch):R(ft,Oe)),Ft!==b&&(Ft?k(ft,De):R(ft,De)),jt!==w&&(jt?(hn&&L(hn),fn||vn||zi()):(hn&&A(hn),fn&&Wi())),Qt!==C&&(Qt?k(ft,Ne):R(ft,Ne)),Xt!==M&&(Xt?k(e,Be):R(e,Be)),i){if(Tt===E&&Nt===S||(r=!0),It!==N&&(It||(ct.style.height="")),Pt&&zt!==B&&(Ke.innerHTML=zt[0],Ue.innerHTML=zt[1]),hn&&Gt!==O){var I=jt?1:0,P=hn.innerHTML,W=P.length-O[I].length;P.substring(W)===O[I]&&(hn.innerHTML=P.substring(0,W)+Gt[I])}}else Nt&&(Tt||Mt)&&(r=!0);if((u||Tt&&!Mt)&&(en=Zi(),$i()),(o=oe!==T)?(ge.emit("indexChanged",ta()),r=!0):u?o||vi():(Tt||Mt)&&(ui(),yi(),ai()),u&&!Z&&function(){for(var t=oe+Math.min(mt,Bt),e=Zt;e--;){var n=pt[e];e>=oe&&e<t?(g(n,"tns-moving"),n.style.left=100*(e-oe)/Bt+"%",g(n,nt),x(n,rt)):n.style.left&&(n.style.left="",g(n,rt),x(n,nt)),x(n,it)}setTimeout((function(){m(pt,(function(t){x(t,"tns-moving")}))}),300)}(),!we&&!Te){if(i&&!z&&(Et===H&&At===D||(ct.style.cssText=zn(Et,At,Tt,Ht,It)),lt)){Z&&(ft.style.width=Wn(Tt,At,Bt));var q=qn(Tt,At,Bt)+Fn(At);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Yt,p(Yt)-1),v(Yt,"#"+be+" > .tns-item",q,p(Yt))}It&&fi(),r&&(Li(),ue=oe)}i&&ge.emit("newBreakpointEnd",ta(n))}}function Zn(){if(!Tt&&!Mt)return mt<=(Nt?Bt-(Bt-1)/2:Bt);var t=Tt?(Tt+At)*mt:gt[mt],e=Et?Lt+2*Et:Lt+At;return Nt&&(e-=Tt?(Lt-Tt)/2:(Lt-(gt[oe+1]-gt[oe]-At))/2),t<=e}function $n(){for(var t in ut=0,_)t=parseInt(t),ht>=t&&(ut=t)}function ti(){!jt&&hn&&A(hn),!Wt&&$e&&A($e),Pt||(Xe?A(Xe):(Ke&&A(Ke),Ue&&A(Ue)))}function ei(){jt&&hn&&L(hn),Wt&&$e&&L($e),Pt&&(Xe?L(Xe):(Ke&&L(Ke),Ue&&L(Ue)))}function ni(){if(!Ee){if(Et&&(ct.style.margin="0px"),Jt)for(var t="tns-transparent",e=Jt;e--;)Z&&g(pt[e],t),g(pt[Zt-e-1],t);ti(),Ee=!0}}function ii(){if(!Ce){if(Yt.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),T(ft,["style"]),Rt)for(var t=Jt;t--;)Z&&A(pt[t]),A(pt[Zt-t-1]);if(lt&&Z||T(ct,["style"]),!Z)for(var e=oe,n=oe+mt;e<n;e++){var i=pt[e];T(i,["style"]),x(i,nt),x(i,rt)}ti(),Ce=!0}}function ai(){var t=ri();se.innerHTML!==t&&(se.innerHTML=t)}function ri(){var t=oi(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function oi(t){null==t&&(t=Ai());var e,n,i,a=oe;if(Nt||Et?(Mt||Tt)&&(n=-(parseFloat(t)+Et),i=n+Lt+2*Et):Mt&&(n=gt[oe],i=n+Lt),Mt)gt.forEach((function(t,r){r<Zt&&((Nt||Et)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Tt){var r=Tt+At;Nt||Et?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Lt/r)-1}else if(Nt||Et){var o=Bt-1;if(Nt?(a-=o/2,e=oe+o/2):e=oe+o,Et){var u=Et*Bt/Lt;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+Bt-1;a=Math.max(a,0),e=Math.min(e,Zt-1)}return[a,e]}function ui(){if(Kt&&!we){var t=oi();t.push(Ut),ci.apply(null,t).forEach((function(t){if(!y(t,Fe)){var e={};e[Q]=function(t){t.stopPropagation()},k(t,e),k(t,je),t.src=w(t,"data-src");var n=w(t,"data-srcset");n&&(t.srcset=n),g(t,"loading")}}))}}function li(t){g(t,"loaded"),si(t)}function si(t){g(t,Fe),x(t,"loading"),R(t,je)}function ci(t,e,n){var i=[];for(n||(n="img");t<=e;)m(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=ci.apply(null,oi());i((function(){di(t,mi)}))}function di(t,e){return le?e():(t.forEach((function(e,n){!Kt&&e.complete&&si(e),y(e,Fe)&&t.splice(n,1)})),t.length?void i((function(){di(t,e)})):e())}function vi(){ui(),yi(),ai(),Ci(),function(){if(Wt&&(rn=an>=0?an:On(),an=-1,rn!==on)){var t=Ze[on],e=Ze[rn];M(t,{tabindex:"-1","aria-label":ln+(on+1)}),x(t,un),M(e,{"aria-label":ln+(rn+1)+sn}),T(e,"tabindex"),g(e,un),on=rn}}()}function pi(t,e){for(var n=[],i=t,a=Math.min(t+e,Zt);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function mi(){var t=It?pi(oe,Bt):pi(Jt,mt),e=ot||ct;e.style.height!==t&&(e.style.height=t+"px")}function hi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];m(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===Zt-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function yi(){var t=oi(),e=t[0],n=t[1];m(pt,(function(t,i){i>=e&&i<=n?b(t,"aria-hidden")&&(T(t,["aria-hidden","tabindex"]),g(t,We)):b(t,"aria-hidden")||(M(t,{"aria-hidden":"true",tabindex:"-1"}),x(t,We))}))}function gi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===gi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function wi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ci(){if(Pt&&!kt&&!Rt){var t=Ge?Ke.disabled:bi(Ke),e=Qe?Ue.disabled:bi(Ue),n=oe<=fe,i=!kt&&oe>=de;n&&!t&&wi(Ge,Ke,!0),!n&&t&&wi(Ge,Ke,!1),i&&!e&&wi(Qe,Ue,!0),!i&&e&&wi(Qe,Ue,!1)}}function Mi(t,e){F&&(t.style[F]=e)}function Ti(t){return null==t&&(t=oe),Mt?(Lt-(Et?At:0)-(gt[t+1]-gt[t]-At))/2:Tt?(Lt-Tt)/2:(Bt-1)/2}function Ei(){var t=Lt+(Et?At:0)-(Tt?(Tt+At)*Zt:gt[Zt]);return Nt&&!Rt&&(t=Tt?-(Tt+At)*(Zt-1)-Ti():Ti(Zt-1)-gt[Zt-1]),t>0&&(t=0),t}function Ai(t){var e;if(null==t&&(t=oe),lt&&!Mt)if(Tt)e=-(Tt+At)*t,Nt&&(e+=Ti());else{var n=W?Zt:Bt;Nt&&(t-=Ti()),e=100*-t/n}else e=-gt[t],Nt&&Mt&&(e+=Ti());return $t&&(e=Math.max(e,te)),e+(!lt||Mt||Tt?"px":"%")}function Li(t){Mi(ft,"0s"),Ni(t)}function Ni(t){null==t&&(t=Ai()),ft.style[ne]=ie+t+ae}function Bi(t,e,n,i){var a=t+Bt;Rt||(a=Math.min(a,Zt));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-oe)/Bt+"%"),at&&j&&(o.style[j]=o.style[G]=at*(r-t)/1e3+"s"),x(o,e),g(o,n),i&&_t.push(o)}}function Si(t,e){ee&&En(),(oe!==ue||e)&&(ge.emit("indexChanged",ta()),ge.emit("transitionStart",ta()),It&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&Wi(),he=!0,An())}function Oi(t){return t.toLowerCase().replace(/-/g,"")}function Di(t){if(Z||he){if(ge.emit("transitionEnd",ta(t)),!Z&&_t.length>0)for(var e=0;e<_t.length;e++){var n=_t[e];n.style.left="",G&&j&&(n.style[G]="",n.style[j]=""),x(n,it),g(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Oi(t.propertyName)===Oi(ne)){if(!ee){var i=oe;En(),oe!==i&&(ge.emit("indexChanged",ta()),Li())}"inner"===J&&ge.emit("innerLoaded",ta()),he=!1,ue=oe}}}function Hi(t,e){if(!Te)if("prev"===t)ki(e,-1);else if("next"===t)ki(e,1);else{if(he){if(ve)return;Di()}var n=Sn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Bt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Bt){var a=i>0?1:-1;i+=oe+i-mt>=fe?mt*a:2*mt*a*-1}oe+=i,Z&&Rt&&(oe<fe&&(oe+=mt),oe>de&&(oe-=mt)),Sn(oe)!==Sn(ue)&&Si(e)}}function ki(t,e){if(he){if(ve)return;Di()}var n;if(!e){for(var i=Vi(t=ji(t));i!==Xe&&[Ke,Ue].indexOf(i)<0;)i=i.parentNode;var a=[Ke,Ue].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(kt){if(oe===fe&&-1===e)return void Hi("last",t);if(oe===de&&1===e)return void Hi("first",t)}e&&(oe+=St*e,Mt&&(oe=Math.floor(oe)),Si(n||t&&"keydown"===t.type?t:null))}function Ri(){cn=setInterval((function(){ki(null,mn)}),Vt),fn=!0}function Ii(){clearInterval(cn),fn=!1}function Pi(t,e){M(hn,{"data-action":t}),hn.innerHTML=gn[0]+t+gn[1]+e}function zi(){Ri(),hn&&Pi("stop",Gt[1])}function Wi(){Ii(),hn&&Pi("start",Gt[0])}function qi(){fn?(Wi(),vn=!0):(zi(),vn=!1)}function Fi(t){t.focus()}function ji(t){return Gi(t=t||n.event)?t.changedTouches[0]:t}function Vi(t){return t.target||n.event.srcElement}function Gi(t){return t.type.indexOf("touch")>=0}function Qi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Xi(){return r=Cn.y-wn.y,o=Cn.x-wn.x,e=Math.atan2(r,o)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Yi(t){if(he){if(ve)return;Di()}jt&&fn&&Ii(),Mn=!0,bn&&(r(bn),bn=null);var e=ji(t);ge.emit(Gi(t)?"touchStart":"dragStart",ta(t)),!Gi(t)&&["img","a"].indexOf(gi(Vi(t)))>=0&&Qi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,Z&&(xn=parseFloat(ft.style[ne].replace(ie,"")),Mi(ft,"0s"))}function Ki(t){if(Mn){var e=ji(t);Cn.x=e.clientX,Cn.y=e.clientY,Z?bn||(bn=i((function(){Ui(t)}))):("?"===me&&(me=Xi()),me&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Ui(t){if(me){if(r(bn),Mn&&(bn=i((function(){Ui(t)}))),"?"===me&&(me=Xi()),me){!Ve&&Gi(t)&&(Ve=!0);try{t.type&&ge.emit(Gi(t)?"touchMove":"dragMove",ta(t))}catch(t){}var e=xn,n=Tn(Cn,wn);!lt||Tt||Mt?(e+=n,e+="px"):(e+=W?n*Bt*100/((Lt+At)*Zt):100*n/(Lt+At),e+="%"),ft.style[ne]=ie+e+ae}}else Mn=!1}function _i(e){if(Mn){bn&&(r(bn),bn=null),Z&&Mi(ft,""),Mn=!1;var n=ji(e);Cn.x=n.clientX,Cn.y=n.clientY;var a=Tn(Cn,wn);if(Math.abs(a)){if(!Gi(e)){var o=Vi(e);k(o,{click:function t(e){Qi(e),R(o,{click:t})}})}Z?bn=i((function(){if(lt&&!Mt){var t=-a*Bt/(Lt+At);t=a>0?Math.floor(t):Math.ceil(t),oe+=t}else{var n=-(xn+a);if(n<=0)oe=fe;else if(n>=gt[Zt-1])oe=de;else for(var i=0;i<Zt&&n>=gt[i];)oe=i,n>gt[i]&&a<0&&(oe+=1),i++}Si(e,a),ge.emit(Gi(e)?"touchEnd":"dragEnd",ta(e))})):me&&ki(e,a>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),pe&&(me="?"),jt&&!fn&&Ri()}function Ji(){(ot||ct).style.height=gt[oe+Bt]-gt[oe]+"px"}function Zi(){var t=Tt?(Tt+At)*mt/Lt:mt/Bt;return Math.min(Math.ceil(t),mt)}function $i(){if(Wt&&!Re&&en!==nn){var t=nn,e=en,n=L;for(nn>en&&(t=en,e=nn,n=A);t<e;)n(Ze[t]),t++;nn=en}}function ta(t){return{container:ft,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Xe,hasControls:He,prevButton:Ke,nextButton:Ue,items:Bt,slideBy:St,cloneCount:Jt,slideCount:mt,slideCountNew:Zt,index:oe,indexCached:ue,displayIndex:Nn(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Yt,isOn:yt,event:t||{}}}Y&&console.warn("No slides found in",t.container)};e.U=P}},n={};function i(t){var a=n[t];if(void 0!==a)return a.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,i),r.exports}t=i(756),document.addEventListener("DOMContentLoaded",(()=>{try{(()=>{try{(0,t.U)({container:".teams__slider2",items:1,nav:!1,navAsThumbnails:!0,controls:!1,gutter:46,loop:!0,flexWidth:300,freezable:!1,responsive:{425:{items:1},768:{items:2},1024:{items:2,gutter:10},1440:{items:3}}})}catch(t){}})()}catch(t){console.log(t)}}))})();