"use strict";(self.webpackChunkoptimizing_react_renders_presentation=self.webpackChunkoptimizing_react_renders_presentation||[]).push([[775],{6747:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var a=n(9526),r=n(6832),l=n(8648),s=n(7549),u=(0,s.oM)({name:"username",initialState:{username:"Larry",status:"active"},reducers:{setUsername:function(e,t){e.username=t.payload},setStatus:function(e,t){e.status=t.payload}}}),c=u.actions.setUsername;const m=u.reducer;var o=n(9032),i=function(){var e=["Amy","Bob","Charlie","Daanesh","Ernie","Felix","George","Helen","Isabela","Joyce"];return e[Math.floor(Math.random()*e.length)]},p=n(2652),E=n.n(p),f=0,N=function(){f+=1;var e=(0,l.v9)((function(e){return e.user.username})),t=(0,l.I0)(),n=(0,a.useState)(Date.now()),s=(0,r.Z)(n,2),u=s[0],m=s[1];return a.createElement("div",{style:{backgroundColor:(0,o.Z)()}},a.createElement("h1",null,a.createElement("span",null,"Block A3: ",f)),a.createElement("button",{onClick:function(){return m(Date.now())}},"Timestamp"),a.createElement("button",{onClick:function(){return t(c(i()))}},"username"),a.createElement("p",null,"timestamp: ",u," userName: ",e," "))};const v=a.memo(N);N.propTypes={userName:E().string},N.defaultProps={userName:null};var d=0,k=function(e){var t=e.className;d+=1;var n=(0,a.useState)(Date.now()),l=(0,r.Z)(n,2),s=l[0],u=l[1];return a.createElement("div",{className:t,style:{backgroundColor:(0,o.Z)()}},a.createElement("h1",null,a.createElement("span",null,"Block A2: ",d," ")),a.createElement("button",{onClick:function(){return u(Date.now())}},"Timestamp"),a.createElement("p",null,"timestamp: ",s),a.createElement(v,null))};const C=a.memo(k);k.propTypes={className:E().string},k.defaultProps={className:null};var y=0,b=function(e){var t=e.className;y+=1;var n=(0,a.useState)(Date.now()),l=(0,r.Z)(n,2),s=l[0],u=l[1];return a.createElement("div",{className:t,style:{backgroundColor:(0,o.Z)()}},a.createElement("h1",null,a.createElement("span",null,"Block A: ",y," ")),a.createElement("button",{onClick:function(){return u(Date.now())}},"Timestamp"),a.createElement("p",null,"timestamp: ",s),a.createElement(C,null))};const g=a.memo(b);b.propTypes={className:E().string},b.defaultProps={className:null};var h=0,w=function(e){var t=e.userName;h+=1;var n=(0,a.useState)(Date.now()),l=(0,r.Z)(n,2),s=l[0],u=l[1];return a.createElement("div",{style:{backgroundColor:(0,o.Z)()}},a.createElement("h1",null,a.createElement("span",null,"Block B3: ",h)),a.createElement("button",{onClick:function(){return u(Date.now())}},"Timestamp"),a.createElement("p",null,"timestamp: ",s," userName: ",t," "))};const D=w;w.propTypes={userName:E().string},w.defaultProps={userName:null};var T=0,Z=function(e){var t=e.userName;T+=1;var n=(0,a.useState)(Date.now()),l=(0,r.Z)(n,2),s=l[0],u=l[1];return a.createElement("div",{style:{backgroundColor:(0,o.Z)()}},a.createElement("h1",null,a.createElement("span",null,"Block B2: ",T," ")),a.createElement("button",{onClick:function(){return u(Date.now())}},"Timestamp"),a.createElement("p",null,"timestamp: ",s),a.createElement(D,{userName:t}))};const B=Z;Z.propTypes={userName:E().string,className:E().string},Z.defaultProps={userName:null,className:null};var S=0,_=function(e){var t=e.userName,n=e.className;S+=1;var l=(0,a.useState)(Date.now()),s=(0,r.Z)(l,2),u=s[0],c=s[1];return a.createElement("div",{className:n,style:{backgroundColor:(0,o.Z)()}},a.createElement("h1",null,a.createElement("span",null,"Block B: ",S," ")),a.createElement("button",{onClick:function(){return c(Date.now())}},"Timestamp"),a.createElement("p",null,"timestamp: ",u),a.createElement(B,{userName:t}))};const P=_;_.propTypes={userName:E().string,className:E().string},_.defaultProps={userName:null,className:null};const x="CaJQuTBkIrewNKu_K_Yf",z="_y6xZNTG5vKhyyo5DhLv",A="CBY60KX9vkeG93Wzjpn9";var I=1;const K=function(){var e=(0,l.v9)((function(e){return e.user.username})),t=(0,l.I0)(),n=(0,a.useState)(Date.now()),s=(0,r.Z)(n,2),u=s[0],m=s[1];return(0,a.useEffect)((function(){I+=1})),a.createElement("div",{className:x,style:{backgroundColor:(0,o.Z)()}},a.createElement("h1",null,a.createElement("span",null,"Demo 4 (Using React Redux): ",I)),a.createElement("button",{onClick:function(){return m(Date.now())}},"Timestamp"),a.createElement("button",{onClick:function(){return t(c(i()))}},"Username"),a.createElement("p",null,"timestamp: ",u," userName: ",e," "),a.createElement(g,{className:z}),a.createElement(P,{className:A,userName:e}))},U=(0,s.xC)({reducer:{user:m}});const G=function(){return a.createElement(l.zt,{store:U},a.createElement(K,null))}}}]);
//# sourceMappingURL=demo4.dc5ceb45.chunk.js.map