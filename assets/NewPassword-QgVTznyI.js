import{u as g,r as n,j as e}from"./index-x36sV1S1.js";import{u as f}from"./formik.esm-iEBAmT7_.js";import{c as h,a as d}from"./index.esm-CAk64yaR.js";import{a as w}from"./index-Da0AXZdd.js";function j(){let i=g(),[u,s]=n.useState(!1),[t,c]=n.useState("");function m(x){s(!0),w.put("https://ecommerce.routemisr.com/api/v1/auth/resetPassword",x).then(({data:a})=>{a.token&&i("/login")}).catch(a=>{var o,l;c((l=(o=a==null?void 0:a.response)==null?void 0:o.data)==null?void 0:l.message),s(!1)})}let p=h({email:d().email().required("email is required"),newPassword:d().matches(/^[A-Za-z][a-z0-9]{5,10}$/).required("password is required")}),r=f({initialValues:{email:"",newPassword:""},validationSchema:p,onSubmit:m});return e.jsxs("div",{children:[e.jsxs("h2",{className:"text-center py-5 text-2xl",children:[e.jsx("span",{className:"text-green-600",children:"New"})," Password"]}),t?e.jsx("div",{className:"w-1/2 mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:t})}):"",e.jsxs("form",{className:"max-w-md mx-auto",onSubmit:r.handleSubmit,children:[e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.email,type:"email",id:"email",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_email",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Email address"})]}),r.errors.email&&r.touched.email?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.email})}):"",e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.newPassword,type:"password",id:"newPassword",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_password",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"newPassword"})]}),r.errors.newPassword&&r.touched.newPassword?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.newPassword})}):"",e.jsx("button",{type:"submit",className:" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",children:u?e.jsx("i",{className:"fas fa-spin fa-spinner text-white"}):"Submit"})]})]})}export{j as default};
