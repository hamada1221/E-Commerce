import{u as h,r as t,A as b,j as e,N as i,h as w}from"./index-x36sV1S1.js";import{u as j}from"./formik.esm-iEBAmT7_.js";import{c as k,a as c}from"./index.esm-CAk64yaR.js";import{a as y}from"./index-Da0AXZdd.js";function z(){let u=h(),{setLogin:m}=t.useContext(b),[p,a]=t.useState(!1),[o,l]=t.useState("");function g(f){a(!0),y.post("https://ecommerce.routemisr.com/api/v1/auth/signin",f).then(({data:s})=>{s.message==="success"&&(l(""),a(!1),localStorage.setItem("userToken",s.token),m(w(s.token)),u("/"))}).catch(s=>{var n,d;l((d=(n=s==null?void 0:s.response)==null?void 0:n.data)==null?void 0:d.message),a(!1)})}let x=k({email:c().email().required("email is required"),password:c().matches(/^[A-Za-z][a-z0-9]{5,10}$/).required("password is required")}),r=j({initialValues:{email:"",password:""},validationSchema:x,onSubmit:g});return e.jsxs("div",{children:[e.jsxs("h2",{className:"text-center py-5 text-2xl",children:[e.jsx("span",{className:"text-green-600",children:"Login"})," now"]}),o?e.jsx("div",{className:"w-1/2 mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:o})}):"",e.jsxs("form",{className:"max-w-md mx-auto",onSubmit:r.handleSubmit,children:[e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.email,type:"email",id:"email",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_email",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Email address"})]}),r.errors.email&&r.touched.email?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.email})}):"",e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.password,type:"password",id:"password",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_password",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Password"})]}),r.errors.password&&r.touched.password?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.password})}):"",e.jsx("button",{type:"submit",className:" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",children:p?e.jsx("i",{className:"fas fa-spin fa-spinner text-white"}):"Login"})]}),e.jsxs("p",{className:"text-center mt-5",children:["dont have account ",e.jsx(i,{to:"/register",className:"text-green-600 font-bold underline",children:"Register"})]}),e.jsx("p",{className:"text-center my-3",children:e.jsx(i,{to:"/forget",className:"text-green-600 font-bold underline",children:"Forget Password?"})})]})}export{z as default};
