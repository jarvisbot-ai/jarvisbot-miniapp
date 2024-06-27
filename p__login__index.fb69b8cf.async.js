"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[939],{87662:function(e,t,r){r.r(t),r.d(t,{default:function(){return he}});var n=r(90228),a=r.n(n),i=r(67825),s=r.n(i),o=r(87999),l=r.n(o),c=r(26068),d=r.n(c),_=r(48305),u=r.n(_),p=r(59496);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var m=r.p+"d604fca2be8f680125421b0d5ee65fea.svg",f=r(5344),h=r(22433),g=r(22902),v=r(16862),w=r(48580),b=r(96454);const y=new class{_emcWindow;_eventHandler;_removeEventListener(){this._eventHandler&&window.removeEventListener("message",this._eventHandler),this._eventHandler=void 0}_getEventHandler(e,t){return async r=>{if(r.origin!==e.origin)return void console.warn(`expected origin '${e.origin}', got '${r.origin}'`);const n=r.data;switch(n.type){case"authorize-ready":{const t={type:"authorize-setup"};this._emcWindow?.postMessage(t,e.origin);break}case"authorize-success":try{await this._handleSuccess(n,t.onSuccess)}catch(e){this._handleFailure(e.message,t.onError)}break;case"authorize-failure":this._handleFailure(n.data,t.onError);break;default:console.info(`unknow message type '${n.type}'`)}}}async _handleSuccess(e,t){this._emcWindow&&this._emcWindow.close(),this._removeEventListener(),delete this._emcWindow,"function"==typeof t&&t(e)}_handleFailure(e,t){this._emcWindow&&!this._emcWindow.closed&&this._emcWindow.close(),"function"==typeof t&&t(e),this._removeEventListener(),delete this._emcWindow}signIn(e){const t=new URL(e.provider||"https://dashboard.edgematrix.pro/");t.hash=e.endpoint||"#auth",this._emcWindow&&this._emcWindow.close(),this._removeEventListener(),this._eventHandler=this._getEventHandler(t,e),window.addEventListener("message",this._eventHandler),this._emcWindow=window.open(t.toString(),"emcWindow",e.windowOpenerFeatures);const r=()=>{this._emcWindow&&(this._emcWindow.closed?this._handleFailure("user-interrupt",e.onError):setTimeout(r,500))};r()}};var E=r(39934),x=r(98371),k=r(86878),j=r(98086),P=r(29575),O=r(53085),F=Object.defineProperty,S=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const B=e=>p.createElement("svg",((e,t)=>{for(var r in t||(t={}))C.call(t,r)&&N(e,r,t[r]);if(S)for(var r of S(t))I.call(t,r)&&N(e,r,t[r]);return e})({width:20,height:15,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),p.createElement("path",{d:"m19.49 1.15-8.724 5.541c-.4.255-1.131.255-1.532 0L.703 1.257a.664.664 0 0 0-.526-.082A2 2 0 0 1 1.997 0h16.006c.76 0 1.42.426 1.759 1.052a.664.664 0 0 0-.273.098Z",fill:"url(#login_email_svg__a)"}),p.createElement("g",{filter:"url(#login_email_svg__b)"},p.createElement("path",{d:"M8.52 7.815c.404.257.93.398 1.48.398.55 0 1.076-.141 1.48-.398L20 2.403V12.68a2 2 0 0 1-1.997 1.998H1.997A2 2 0 0 1 0 12.679V2.388l8.52 5.427Z",fill:"url(#login_email_svg__c)",fillOpacity:.3})),p.createElement("defs",null,p.createElement("linearGradient",{id:"login_email_svg__a",x1:15.637,y1:0,x2:3.769,y2:10.822,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#684FFF"}),p.createElement("stop",{offset:1,stopColor:"#B871FE"})),p.createElement("linearGradient",{id:"login_email_svg__c",x1:20,y1:2.388,x2:-1.42,y2:11.24,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#D783FF"}),p.createElement("stop",{offset:.453,stopColor:"#858AFF"})),p.createElement("filter",{id:"login_email_svg__b",x:-12,y:-9.612,width:44,height:36.289,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},p.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),p.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:6}),p.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_32_21130"}),p.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_backgroundBlur_32_21130",result:"shape"}),p.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),p.createElement("feOffset",{dy:2}),p.createElement("feGaussianBlur",{stdDeviation:4}),p.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),p.createElement("feColorMatrix",{values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"}),p.createElement("feBlend",{in2:"shape",result:"effect2_innerShadow_32_21130"}))));r.p;var W=Object.defineProperty,A=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const H=e=>p.createElement("svg",((e,t)=>{for(var r in t||(t={}))G.call(t,r)&&R(e,r,t[r]);if(A)for(var r of A(t))L.call(t,r)&&R(e,r,t[r]);return e})({width:20,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),p.createElement("g",{filter:"url(#login_pwd_svg__a)"},p.createElement("path",{d:"M.667 23.077h18.666c.356 0 .667-.304.667-.652V10.701c0-.347-.311-.651-.667-.651H.667c-.356 0-.667.304-.667.651v11.724c0 .348.267.652.667.652Z",fill:"url(#login_pwd_svg__b)",fillOpacity:.3})),p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.223 9.974v-1.4c0-4.17 3.51-7.6 7.777-7.6s7.778 3.43 7.778 7.6v1.4h-2.222v-1.4c0-2.997-2.489-5.428-5.556-5.428-3.066 0-5.555 2.431-5.555 5.427v1.401H2.223Z",fill:"url(#login_pwd_svg__c)"}),p.createElement("defs",null,p.createElement("linearGradient",{id:"login_pwd_svg__b",x1:20,y1:10.05,x2:-1.77,y2:18.537,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#D783FF"}),p.createElement("stop",{offset:.453,stopColor:"#858AFF"})),p.createElement("linearGradient",{id:"login_pwd_svg__c",x1:5.499,y1:.974,x2:18.71,y2:8.292,gradientUnits:"userSpaceOnUse"},p.createElement("stop",{stopColor:"#684FFF"}),p.createElement("stop",{offset:1,stopColor:"#B871FE"})),p.createElement("filter",{id:"login_pwd_svg__a",x:-12,y:-1.95,width:44,height:37.027,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},p.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),p.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:6}),p.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_91_50072"}),p.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_backgroundBlur_91_50072",result:"shape"}),p.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),p.createElement("feOffset",{dy:2}),p.createElement("feGaussianBlur",{stdDeviation:4}),p.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),p.createElement("feColorMatrix",{values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"}),p.createElement("feBlend",{in2:"shape",result:"effect2_innerShadow_91_50072"}))));r.p;var U="view___VbhRe",Z="left_wrap___QgQ5e",z="robot_wrap___hztRC",M="pop___Ncgyt",T="pop_1___dXEKx",D="pop_2___vXpPt",V="pop_3___S2oJe",q="title___zazlA",Q="sub_title___n4HMW",J="right_wrap___V2aA9",Y="login_wrap___Q_fJz",$="sub_title_fold___QF_xw",X="emc_btn___DmgvO",K="emc_btn_icon___hpkSc",ee="fold_wrap___ik2fZ",te="unfold___z1vjG",re="divider___l2BLA",ne="form___eyfGp",ae="form_fold___x03wt",ie="view_mobile___LYP4I",se="fog____OOSN",oe="fog_rt___Faix2",le="fog_rb___dvA0T",ce="forgot_btn___G32MW",de="register_btn___pYNLq",_e="link___bBidl",ue="verify_wrap___qCv44",pe=r(4637),me=function(e,t,r,n){return[{type:"Input",name:"userEmail",label:"Email address",span:24,rules:[{required:!0,message:"Please enter email address"},{pattern:b.Do,message:"Please enter the correct email address"}],props:{placeholder:"Email@example.com",prefix:(0,pe.jsx)(B,{})}},{type:"Search",name:"captchaCode",label:"Captcha Code",visible:["register","forgot"].includes(t),span:24,rules:[{required:!0}],props:{placeholder:"Captcha Code",prefix:(0,pe.jsx)(B,{}),enterButton:"Receive",className:ue,onSearch:n}},{type:"Password",name:"userPwd",label:"Password",span:24,rules:[{required:!0,message:"Please enter password"},{pattern:b.Zm,message:"The password length should be within 8 to 35 characters"},{pattern:b.wn,message:"Password must contain at least one uppercase letter"},{pattern:b.Qi,message:"Password must contain at least one lowercase letter"}],props:{placeholder:"Password",prefix:(0,pe.jsx)(H,{})}},{type:"Password",name:"confirmPwd",label:"Confirm Password",dependencies:["userPwd"],visible:["register","forgot"].includes(t),span:24,rules:[{required:!0},function(e){var t=e.getFieldValue;return{validator:function(e,r){return r&&t("userPwd")!==r?Promise.reject(new Error("The new password that you entered do not match")):Promise.resolve()}}}],props:{placeholder:"Confirm Password",prefix:(0,pe.jsx)(H,{})}},{span:24,visible:"login"===t,render:(0,pe.jsx)("div",{className:ce,onClick:function(){return r("forgot")},children:"Forgot your password?"})},{type:"Button",span:24,props:{block:!0,loading:e,inner_render:"login"===t?"Login":"Done",type:"primary",htmlType:"submit",style:{height:44,fontSize:16,fontWeight:500}}},{span:24,visible:"login"===t,render:(0,pe.jsxs)("div",{className:de,onClick:function(){return r("register")},children:[(0,pe.jsx)("span",{children:"Don't have an account?"}),(0,pe.jsx)("span",{className:_e,children:"Sign Up with Email"})]})},{type:"Button",name:"back",visible:["register","forgot"].includes(t),span:24,props:{block:!0,inner_render:"Back",onClick:function(){return r("login")},style:{height:44,fontSize:16,fontWeight:500}}}]},fe=["userPwd"],he=(0,h.t)((function(e){var t=(0,p.useRef)(),r=(0,O.useModel)("login.model"),n=r.user_info,i=r.loading,o=r.emc_loading,c=r.UPDATE,_=r.LOGIN,h=r.REGISTER,F=r.EMC_LOGIN,S=r.RESET_VERIFY,C=r.REGISTER_VERIFY,I=r.RESET_PWD,N=(0,p.useState)("login"),B=u()(N,2),W=B[0],A=B[1],G=(0,p.useState)(!0),L=u()(G,2),R=L[0],H=L[1],ce=g.I_.get("token"),de={ref:t,layout:"vertical",className:"".concat(ne," ").concat(R?ae:""),style:{height:R?100:"login"===W?295:505},form_config:me(i,W,(function(e){var r;null===(r=t.current)||void 0===r||r.reset(),A(e)}),(function(){var e=t.current.getValue("userEmail");b.Do.test(e)?"forgot"===W?S({userEmail:e}):C({userEmail:e}):(P.ZP.destroy(),P.ZP.warning("please enter the correct email"))})),requiredMark:!1,onFinish:function(e){return _e.apply(this,arguments)}};return(0,E.Z)((function(){ce?O.history.replace("/workspace/aibot/my_bots"):he()})),(0,x.Z)("visibilitychange",(function(e){e.target.hidden?c({user_info:void 0}):he()})),(0,pe.jsxs)("div",{className:"".concat(U," ").concat((0,w.kb)()?ie:""),children:[(0,pe.jsx)("div",{className:se}),(0,pe.jsx)("div",{className:oe}),(0,pe.jsx)("div",{className:le}),(0,pe.jsxs)("div",{className:Z,children:[(0,pe.jsxs)("div",{className:z,children:[(0,pe.jsx)("img",{src:m}),(0,pe.jsx)("div",{className:"".concat(M," ").concat(T)}),(0,pe.jsx)("div",{className:"".concat(M," ").concat(D)}),(0,pe.jsx)("div",{className:"".concat(M," ").concat(V)})]}),(0,pe.jsx)("div",{className:q,children:"Hi, Welcome back"}),(0,pe.jsx)("div",{className:Q,children:"Ready to have your own chatbot ? Join us here, a better place for building a chatbot. Let's get started."})]}),(0,pe.jsx)("div",{className:J,children:(0,pe.jsxs)("div",{className:Y,children:[(0,pe.jsx)(f.TR,{size:34,fontSize:34,gap:10}),(0,pe.jsxs)("span",{className:"".concat(Q," ").concat(R?$:""),children:["Welcome to ","JarvisBot"," ✌️"]}),(0,pe.jsxs)(f.OH,{size:"large",stream:!0,loading:o,className:X,onClick:function(){return ue.apply(this,arguments)},children:[!o&&(0,pe.jsx)("i",{className:"".concat(K," fantec_font f_emc_hub")}),"Continue with EMC Hub",n?"（".concat(null==n?void 0:n.userNickname,"）"):""]}),(0,pe.jsxs)("div",{className:ee,onClick:function(){return H(!R)},children:[(0,pe.jsx)("div",{className:re}),(0,pe.jsx)("i",{className:"".concat(R?"":te," fantec_font f_arrow_down")}),(0,pe.jsx)("div",{className:re})]}),(0,pe.jsx)(k.ZP,{theme:{algorithm:j.Z.darkAlgorithm},children:(0,pe.jsx)(f.fB,d()({},de))})]})})]});function _e(){return(_e=l()(a()().mark((function e(t){var r,n,i,o;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.userPwd,n=s()(t,fe),i=(0,v.HI)(r),"login"!==W){e.next=9;break}return e.next=4,_(d()(d()({},n),{},{userPwd:i,loginType:0}));case 4:o=g.I_.get("login_redirect_url"),O.history.replace(o||"/workspace/aibot/my_bots"),g.I_.remove("login_redirect_url"),e.next=19;break;case 9:if("register"!==W){e.next=15;break}return e.next=12,h(d()(d()({},n),{},{userPwd:i}));case 12:A("login"),e.next=19;break;case 15:if("forgot"!==W){e.next=19;break}return e.next=18,I(d()(d()({},n),{},{newUserPwd:i}));case 18:A("login");case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return ue=l()(a()().mark((function e(){var t;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n?(g.I_.set("token",null==n?void 0:n.token),g.I_.set("user_email",null==n?void 0:n.userEmail,{encrypt:!0}),g.I_.set("user_info",n,{encrypt:!0}),ge()):(t={provider:"https://emchub.ai/",windowOpenerFeatures:"popup,width=500,height=600",onSuccess:function(){var e=l()(a()().mark((function e(t){var r,n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,n=r._sid,r._result,e.next=4,F({loginType:2,emchub_cookie_id:n});case 4:ge();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onError:function(e){var t=e._desc;t&&P.ZP.error(t)}},y.signIn(t));case 1:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function he(){var e=(0,w.Hl)("emchub_cookie_id");if(e){var t=g.I_.get("disabled_emc_login"),r=g.I_.get("user_email",{decrypt:!0});F({loginType:2,emchub_cookie_id:e,async:!0}).then((function(e){if(null!=e){var n=e||{},a=n.token,i=n.userEmail,s=n.userNickname;if(a&&(!t||r!==i)){var o,l=null==s||null===(o=s.charAt(0))||void 0===o?void 0:o.toUpperCase();g.I_.set("token",a),g.I_.set("user_email",i,{encrypt:!0}),g.I_.set("user_info",d()(d()({},e),{},{avatar_text:l}),{encrypt:!0}),ge()}}}))}}function ge(){O.history.replace("/workspace/aibot/my_bots"),g.I_.remove("disabled_emc_login"),c({user_info:void 0})}}))},98371:function(e,t,r){var n=r(69901),a=r(25727),i=r(23495);t.Z=function(e,t,r){void 0===r&&(r={});var s=(0,n.Z)(t);(0,i.Z)((function(){var t=(0,a.n)(r.target,window);if(null==t?void 0:t.addEventListener){var n=function(e){return s.current(e)};return t.addEventListener(e,n,{capture:r.capture,once:r.once,passive:r.passive}),function(){t.removeEventListener(e,n,{capture:r.capture})}}}),[e,r.capture,r.once,r.passive],r.target)}}}]);