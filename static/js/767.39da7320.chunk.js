"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[767],{6767:function(e,s,a){a.r(s),a.d(s,{default:function(){return u}});var r=a(1087),n=a(9434),i=a(5705),m=a(9273),t=a(6727),l=t.Ry().shape({name:t.Z_().min(2,"Username must be at least 3 characters").max(20,"Username must be at most 20 characters").matches(/^[a-zA-Z0-9_]+$/,"Username can only contain letters, numbers, and underscores").required("Username is required"),email:t.Z_().email("Invalid email address").required("Email is required"),password:t.Z_().min(6,"Password must be at least 6 characters").max(30,"Password must not exceed 30 characters").required("Password is required")}),o={container:"RegisterForm_container__w0Atp",title:"RegisterForm_title__EvDyW",form:"RegisterForm_form__Tv43W",label:"RegisterForm_label__4pTXF",btn:"RegisterForm_btn__bgTuW",signWrapper:"RegisterForm_signWrapper__CWDfr",link:"RegisterForm_link__xu2eW",errorName:"RegisterForm_errorName__C6ufW",errorEmail:"RegisterForm_errorEmail__8bxFg",errorPassword:"RegisterForm_errorPassword__RBheE"},c=a(3329),d=function(){var e=(0,n.I0)();return(0,c.jsxs)("div",{className:o.container,children:[(0,c.jsx)("h2",{className:o.title,children:"REGISTER"}),(0,c.jsx)(i.J9,{initialValues:{name:"",email:"",password:""},validationSchema:l,onSubmit:function(s,a){e((0,m.z2)(s)),a.resetForm()},children:(0,c.jsxs)(i.l0,{className:o.form,autoComplete:"off",children:[(0,c.jsxs)("label",{className:o.label,children:["Username",(0,c.jsx)(i.gN,{className:o.input,type:"text",name:"name"}),(0,c.jsx)(i.Bc,{className:o.errorName,name:"name",component:"span"})]}),(0,c.jsxs)("label",{className:o.label,children:["Email",(0,c.jsx)(i.gN,{className:o.input,type:"email",name:"email"}),(0,c.jsx)(i.Bc,{className:o.errorEmail,name:"email",component:"span"})]}),(0,c.jsxs)("label",{className:o.label,children:["Password",(0,c.jsx)(i.gN,{className:o.input,type:"password",name:"password"}),(0,c.jsx)(i.Bc,{className:o.errorPassword,name:"password",component:"span"})]}),(0,c.jsx)("button",{className:o.btn,type:"submit",children:"CREATE ACCOUNT"}),(0,c.jsxs)("div",{className:o.signWrapper,children:[(0,c.jsx)("p",{children:"Already have an account?"}),(0,c.jsx)(r.rU,{to:"/login",className:o.link,children:"Sign In"})]})]})})]})},u=function(){return(0,c.jsx)(d,{})}}}]);
//# sourceMappingURL=767.39da7320.chunk.js.map