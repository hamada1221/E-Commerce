import{u as p,r as d,j as e}from"./index-ptXMnTVR.js";import{u as x}from"./formik.esm-CWkEBLZy.js";import{a as f}from"./index-CGyv0Zym.js";function y(){let u=p(),[i,s]=d.useState(!1),[a,o]=d.useState("");async function c(m){var n,l;try{s(!0);let{data:t}=await f.post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",m);t.status==="Success"&&(s(!1),o(""),u("/newpassword"))}catch(t){o((l=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:l.message),s(!1)}}let r=x({initialValues:{resetCode:""},onSubmit:c});return e.jsxs("div",{children:[e.jsx("h2",{className:"text-center py-5 text-2xl",children:e.jsx("span",{className:"text-green-500",children:"Forget Password"})}),a?e.jsx("div",{className:"w-1/2 mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:a})}):"",e.jsxs("form",{className:"max-w-md mx-auto",onSubmit:r.handleSubmit,children:[e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.resetCode,type:"text",id:"resetCode",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_resetCode",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Reset Code"})]}),e.jsx("button",{type:"submit",className:" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",children:i?e.jsx("i",{className:"fas fa-spin fa-spinner text-white"}):"Submit"})]})]})}export{y as default};
