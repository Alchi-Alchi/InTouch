(this.webpackJsonpgame1000=this.webpackJsonpgame1000||[]).push([[4],{297:function(e,s,t){"use strict";t.d(s,"a",(function(){return g}));var a=t(5),n=t(38),i=t(39),c=t(41),o=t(40),r=t(0),d=t.n(r),l=t(11),j=t(15),u=t(1),b=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){Object(c.a)(r,s);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(a.a)({},this.props)):Object(u.jsx)(l.a,{to:"/login"})}}]),r}(d.a.Component);return Object(j.b)(b)(s)}},298:function(e,s,t){e.exports={dialogs_wrapper:"Dialogs_dialogs_wrapper__3vHSi",dialogs:"Dialogs_dialogs__I4Fmt",contact:"Dialogs_contact__LYqdH",message:"Dialogs_message__z-ZeZ",contacts:"Dialogs_contacts__1ZNUI",messages:"Dialogs_messages__28pe8",sendTools:"Dialogs_sendTools__3lJ5i",postWindow:"Dialogs_postWindow__2DY6w",btn:"Dialogs_btn__k-MSC"}},308:function(e,s,t){"use strict";t.r(s);t(0);var a=t(15),n=t(109),i=t(13),c=t(131),o=t(132),r=t(298),d=t.n(r),l=t(69),j=t(70),u=t(1),b=Object(l.a)(300),g=function(e){return Object(u.jsx)("div",{className:d.a.contact,children:Object(u.jsx)(i.b,{to:"/dialogs/"+e.id,children:e.name})})},m=function(e){return Object(u.jsx)("div",{className:d.a.message,children:e.message})},O=Object(o.a)({form:"dialogAddMessageForm"})((function(e){return Object(u.jsx)("div",{id:d.a.sendTools,children:Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(c.a,{component:j.b,validate:[l.b,b],id:d.a.postWindow,name:"newMessageText",placeholder:"Message..."})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{id:d.a.btn,children:"Send"})})]})})})),_=function(e){var s=e.dialogsPage,t=s.usersData.map((function(e){return Object(u.jsx)(g,{name:e.name,id:e.id})})),a=s.messagesData.map((function(e){return Object(u.jsx)(m,{message:e.message,id:e.id})}));return Object(u.jsxs)("div",{className:d.a.dialogs,children:[Object(u.jsx)("p",{children:"\u0411\u0435\u0441\u0435\u0434\u044b"}),Object(u.jsxs)("div",{className:d.a.dialogs_wrapper,children:[Object(u.jsx)("div",{className:d.a.contacts,children:t}),Object(u.jsx)("div",{className:d.a.messages,children:Object(u.jsx)("div",{children:a})})]}),Object(u.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageText)}})]})},p=t(297),h=t(10);s.default=Object(h.d)(Object(a.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(n.b)(s))}}})),p.a)(_)}}]);
//# sourceMappingURL=4.1a230e07.chunk.js.map