import{a as b,r as d,f as v,b as S,c as F,s as k,d as c,e as P,g as N,j as e,i as h,L as u,N as m}from"./index-9290eb68.js";import{F as A,I as p,M as x,a as B}from"./SigninPage.styled-6cbc7ff3.js";import{u as C,c as E,a as j}from"./index.esm-35fdaca2.js";import{G as I,B as g,R as w,Y as G,a as L}from"./SignupForm.styled-8fa8afd2.js";const q=()=>{const{t:a}=b(),[t,f]=d.useState(!1),[n]=v(),i=S(),r=F(k),s=C({initialValues:{email:"",password:""},validationSchema:E({email:j().required("Email is required").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Invalid email"),password:j().required("Password is required").min(8,"Password must contain at least 8 characters").max(64,"Password must contain no more than 64 characters")}),onSubmit:async o=>{c.Notify.info("Please, consider that we use free API resources. Initial load may take some time.");const l=await i(P.signinThunk(o));if(l.error)return c.Notify.failure(l.payload)}}),y=()=>{f(!t)};return d.useEffect(()=>{const o=n.get("token");o&&i(N.actions.setGoogleToken(o))},[n,i]),e.jsx(e.Fragment,{children:e.jsxs(A,{onSubmit:s.handleSubmit,children:[e.jsx("h2",{children:a("authForm.headerSignin")}),e.jsx("label",{children:a("authForm.labelEmail")}),e.jsxs(p,{children:[e.jsx("input",{type:"email",name:"email",placeholder:a("authForm.placeholdEmail"),onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email,style:{color:s.errors.email&&s.touched.email?"var(--secondary-second)":"var(--primary-focus)",border:s.errors.email&&s.touched.email?"1px solid var(--secondary-second)":"1px solid var(--secondary-fifth)"}}),s.errors.email&&s.touched.email?e.jsx(x,{children:s.errors.email}):null]}),e.jsx("label",{children:a("authForm.labelPassword")}),e.jsxs(p,{children:[e.jsx("input",{type:t?"text":"password",name:"password",placeholder:a("authForm.placeholdPassword"),onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.password,style:{color:s.errors.password&&s.touched.password?"var(--secondary-second)":"var(--primary-focus)",border:s.errors.password&&s.touched.password?"1px solid var(--secondary-second)":"1px solid var(--secondary-fifth)"}}),e.jsx("button",{type:"button",className:"icon-eye",onClick:y,style:{top:s.errors.password&&s.touched.password?"23%":"30%"},children:e.jsx("svg",{width:"16",height:"16",className:"icon",children:e.jsx("use",{href:t?h+"#icon-opened-eye":h+"#icon-closed-eye"})})}),s.errors.password&&s.touched.password?e.jsx(x,{children:s.errors.password}):null]}),e.jsx("button",{type:"submit",disabled:r,children:r?e.jsx(u,{}):a("authForm.buttonSignin")}),e.jsx(I,{type:"button",disabled:r,children:r?e.jsx(u,{}):e.jsxs("a",{href:"https://watertracker-t8-backend.onrender.com/api/auth/google",children:["Sign in with"," ",e.jsxs("span",{children:[e.jsx(g,{children:"G"}),e.jsx(w,{children:"o"}),e.jsx(G,{children:"o"}),e.jsx(g,{children:"g"}),e.jsx(L,{children:"l"}),e.jsx(w,{children:"e"})]})]})}),e.jsx(m,{to:"/forgot-password",children:a("authForm.forgotPass")}),e.jsx("br",{}),e.jsx(m,{to:"/signup",children:a("authForm.linkSignup")})]})})},D=()=>e.jsx("section",{children:e.jsx(B,{children:e.jsx(q,{})})});export{D as default};
