"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[439],{5344:function(e,t,n){n.d(t,{HY:function(){return oe},fB:function(){return J},uB:function(){return K},TR:function(){return de},Lq:function(){return ue},OH:function(){return ee}});var r=n(90228),o=n.n(r),i=n(87999),a=n.n(i),c=n(26068),l=n.n(c),u=n(48305),s=n.n(u),d=n(67825),f=n.n(d),v=n(31677),p=n(81210),m=n(10233),_=n(76818),h=n(59496),y=n(9438),b=n(88153),g=n(67990),x=n(32194),w=n(75880),k=n(55745),j=n(13942),P=n(78994),Z=n(28166),C=n(69599),O=n(47574),S=n(3358),I=n(58573),N=n(18584),z=y.Z.TextArea,E=y.Z.Password,V=y.Z.Search,A=b.default.MonthPicker,B=b.default.RangePicker,R=g.Z.Group,T=x.ZP.Group,F={Button:w.ZP,Cascader:k.Z,Checkbox:g.Z,CheckboxGroup:R,ColorPicker:j.Z,DatePicker:b.default,Input:y.Z,InputNumber:P.Z,MonthPicker:A,Password:E,Radio:x.ZP,RadioGroup:T,RangePicker:B,Search:V,Select:Z.Z,Slider:C.Z,Switch:O.Z,TextArea:z,TimePicker:S.Z,TreeSelect:I.Z,Upload:N.Z},H="view___h0ysl",M=n(4637),D=["className","layout","form_config","loading","disabled","labelAlign","label_width","gutter","func_extra","onWatch"],W=["name","props","span","type","visible","render","formItemLayout"],G=v.Z.Item,L=function(e,t){var n=e.className,r=e.layout,i=e.form_config,c=void 0===i?[]:i,u=e.loading,d=void 0!==u&&u,y=e.disabled,b=void 0!==y&&y,g=e.labelAlign,x=void 0===g?"right":g,w=e.label_width,k=void 0===w?75:w,j=e.gutter,P=void 0===j?12:j,Z=e.func_extra,C=e.onWatch,O=f()(e,D),S=v.Z.useForm(),I=s()(S,1)[0],N=l()(l()({className:"".concat(H," ").concat(n),layout:r,form:I,labelAlign:x,disabled:b},O),{},{onValuesChange:function(e,t){var n,r=null===(n=Object.keys(e))||void 0===n?void 0:n[0];null==C||C({key:r,value:e[r]},t)}});return(0,h.useImperativeHandle)(t,(function(){return{verify:function(e){return function(e){return z.apply(this,arguments)}(e)},reset:function(e){return null==I?void 0:I.resetFields(e)},getValue:function(e){return I.getFieldValue(e)},setValues:function(e){return null==I?void 0:I.setFieldsValue(e)}}})),(0,M.jsx)(p.Z,{spinning:d,children:(0,M.jsx)(v.Z,l()(l()({},N),{},{children:(0,M.jsxs)(m.Z,{gutter:P,children:[c.map((function(e,t){var n=e.name,o=e.props,i=void 0===o?{}:o,a=e.span,c=void 0===a?12:a,u=e.type,s=e.visible,d=void 0===s||s,v=e.render,p=e.formItemLayout,m=void 0===p?{labelCol:{width:k,flex:"".concat(k,"px")},wrapperCol:{style:{maxWidth:"calc(100% - ".concat(k,"px)")}}}:p,h=f()(e,W);if(!d)return null;var y=null==F?void 0:F[u],b=l()(l()({name:n,validateFirst:!0},"vertical"!==r&&m),h);return(0,M.jsx)(_.Z,{span:c,children:y?(0,M.jsx)(G,l()(l()({},b),{},{children:(0,M.jsx)(y,l()(l()({},i),{},{children:null==i?void 0:i.inner_render}))})):v},n||t)})),Z]})}))});function z(){return(z=a()(o()().mark((function e(t){var n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.validateFields();case 3:n=e.sent,null==t||t(n),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log("Failed:",e.t0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},J=(0,h.forwardRef)(L),q=n(53085),U=n(84425),Y=["layout","form_config","form_loading","label_width","values","open","namespace","full_title","sub_title","no_footer","cancel_reset","onOk","onCancel","onWatch","header_extra","children"],Q=function(e,t){var n=e.layout,r=e.form_config,o=void 0===r?[]:r,i=e.form_loading,a=e.label_width,c=e.values,u=e.open,s=e.namespace,d=e.full_title,v=e.sub_title,p=void 0===v?"":v,m=e.no_footer,_=e.cancel_reset,y=void 0===_||_,b=e.onOk,g=e.onCancel,x=e.onWatch,w=e.header_extra,k=e.children,j=f()(e,Y),P=(0,h.useRef)(),Z=(0,q.useModel)(s)||{},C=Z.edit_loading,O=Z.edit_visible,S=Z.record_item,I=Z.UPDATE,N=l()({title:d||"".concat(S?"Edit ":"Create ").concat(p),open:u||O,keyboard:!1,maskClosable:!1,cancelButtonProps:{type:"primary",ghost:!0},confirmLoading:C,onCancel:function(){null==I||I({edit_visible:!1,record_item:void 0}),null==g||g()},onOk:function(){var e;return null===(e=P.current)||void 0===e?void 0:e.verify((function(e){return null==b?void 0:b(e)}))}},j),z={ref:P,layout:n,form_config:o,loading:i,label_width:a,onWatch:x};return(0,h.useImperativeHandle)(t,(function(){return{getValue:function(e){var t;return null===(t=P.current)||void 0===t?void 0:t.getValue(e)},setValues:function(e){var t;return null===(t=P.current)||void 0===t?void 0:t.setValues(e)},reset:function(e){var t;return null===(t=P.current)||void 0===t?void 0:t.reset(e)},verify:function(){var e;return null===(e=P.current)||void 0===e?void 0:e.verify()}}})),m&&(N.footer=null),(0,h.useEffect)((function(){var e;(c||S)&&(u||O)&&(null===(e=P.current)||void 0===e||e.setValues(c||S))}),[c,S,u,O]),(0,h.useEffect)((function(){var e;u||O||!y||null===(e=P.current)||void 0===e||e.reset()}),[u,O]),(0,M.jsxs)(U.Z,l()(l()({},N),{},{children:[w,!(null==o||!o.length)&&(0,M.jsx)(J,l()({},z)),k]}))},K=(0,h.memo)((0,h.forwardRef)(Q)),X={default:{fontSize:14,height:32,lineHeight:1.57,paddingBlock:4,paddingInline:16},large:{fontSize:16,height:40,lineHeight:1.5,paddingBlock:7,paddingInline:16}},$={view:"view___CpIkD",view_disabled:"view_disabled___JnDMi",view_stream:"view_stream___xjqmY",streamer:"streamer___iylh6",view_block:"view_block___QIc1j",loader:"loader___f8y_k",spin:"spin___DyBT2"},ee=function(e){var t=e.icon,n=e.size,r=void 0===n?"default":n,o=e.stream,i=e.block,a=e.loading,c=e.disabled,u=e.children,s=e.style,d=e.className,f=X[r];return(0,M.jsxs)("div",{className:"".concat($.view," ").concat(o?$.view_stream:""," ").concat(i?$.view_block:""," ").concat(c?$.view_disabled:""," ").concat(d),style:l()(l()({},f),s),onClick:function(){var t;if(c||a)return;null===(t=e.onClick)||void 0===t||t.call(e)},children:[a&&(0,M.jsx)("div",{className:$.loader,style:{width:f.fontSize}}),!!t&&(0,M.jsx)("span",{role:"img",className:$.icon,children:t}),u]})};Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var te=n.p+"518be1017526f965902101943ec07bdb.svg";Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var ne={default:te,ufo:n.p+"e9325c2111773cdc66fc24c79e30ab71.svg"},re="view___Rzl3T",oe=function(e){var t=e.icon,n=void 0===t?"default":t,r=e.size,o=void 0===r?100:r,i=e.description,a=void 0===i?"Data Not Found":i;return(0,M.jsxs)("div",{className:re,children:[(0,M.jsx)("img",{src:null==ne?void 0:ne[n],style:{width:o}}),(0,M.jsx)("span",{children:a})]})},ie=n(32042),ae="view___dg71n",ce="title___V93lz",le="logo_wrap___ojMEg",ue=function(e){var t=e.size,n=void 0===t?27:t,r=e.shape,o=void 0===r?"rect":r,i=e.scale,a=void 0===i?.6:i,c=e.style;return(0,M.jsx)("div",{className:le,style:l()({width:n,height:n,borderRadius:"circle"===o?"50%":"15%"},c),children:(0,M.jsx)("img",{src:ie.Z,alt:"logo",style:{height:n*a}})})},se=["fontSize","gap"],de=function(e){var t=e.fontSize,n=void 0===t?26:t,r=e.gap,o=void 0===r?6:r,i=f()(e,se);return(0,M.jsxs)("div",{className:ae,style:{gap:o},children:[(0,M.jsx)(ue,l()({},i)),(0,M.jsx)("span",{className:ce,style:{fontSize:n},children:"JarvisBot"})]})}},48580:function(e,t,n){n.d(t,{Hl:function(){return f},JG:function(){return u},kb:function(){return l},r0:function(){return s}});var r=n(90228),o=n.n(r),i=n(87999),a=n.n(i),c=n(29575),l=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},u=function(){var e=a()(o()().mark((function e(t){var n;return o()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!navigator.clipboard||!window.isSecureContext){e.next=7;break}return e.next=4,navigator.clipboard.writeText(t);case 4:c.ZP.success("Copy Successfully"),e.next=14;break;case 7:(n=document.createElement("input")).setAttribute("readonly","readonly"),n.setAttribute("value",t),document.body.appendChild(n),n.select(),document.execCommand("copy")&&c.ZP.success("Copy Successfully"),document.body.removeChild(n);case 14:e.next=18;break;case 16:e.prev=16,e.t0=e.catch(0);case 18:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),s=function(e){d(e).then((function(){c.ZP.success("Copy Successfully!")})).catch((function(){c.ZP.error("Copy Failed!")}))},d=function(e){if(navigator.clipboard&&navigator.permissions)return navigator.clipboard.writeText(e);if(!document.execCommand("copy"))return Promise.reject();var t=document.createElement("textarea");return t.style.position="fixed",t.style.top=t.style.left="-100vh",t.style.opacity="0",t.value=e,document.body.appendChild(t),t.focus(),t.select(),new Promise((function(e,n){document.execCommand("copy")?e():n(),t.remove()}))},f=function(e){for(var t=document.cookie.split("; "),n=0;n<t.length;n++){var r=t[n].split("=");if(r[0]===e)return r[1]}}},22433:function(e,t,n){n.d(t,{O:function(){return a},t:function(){return c}});var r=n(22902),o=n(53085),i=n(4637),a=function(e){return function(){return r.I_.get("token")?(0,i.jsx)(e,{}):(0,i.jsx)(o.Navigate,{to:"/login"})}},c=function(e){return function(){return r.I_.get("token")?(0,i.jsx)(o.Navigate,{to:"/workspace/aibot/my_bots"}):(0,i.jsx)(e,{})}}},32042:function(e,t,n){n(59496),Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;t.Z=n.p+"424886d72012927c61ddc7b796dff9ff.svg"}}]);