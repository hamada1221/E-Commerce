import{u as h,r as o,A as f,j as e,h as b}from"./index-ptXMnTVR.js";import{u as w}from"./formik.esm-CWkEBLZy.js";import{c as y,a as s,b as k}from"./index.esm-D-ZeoZrj.js";import{a as j}from"./index-CGyv0Zym.js";function F(){let u=h(),{setLogin:i}=o.useContext(f),[p,t]=o.useState(!1),[l,n]=o.useState("");function m(x){t(!0),j.post("https://ecommerce.routemisr.com/api/v1/auth/signup",x).then(({data:a})=>{a.message==="success"&&(n(""),t(!1),localStorage.setItem("userToken",a.token),i(b(a.token)),u("/"))}).catch(a=>{var d,c;n((c=(d=a==null?void 0:a.response)==null?void 0:d.data)==null?void 0:c.message),t(!1)})}let g=y({name:s().min(2).max(10).required("name is required"),email:s().email().required("email is required"),password:s().matches(/^[A-Za-z][a-z0-9]{5,10}$/).required("password is required"),rePassword:s().oneOf([k("password"),"Confirm password does not match password"]).required("rePassword is required"),phone:s().matches(/^01[0-25][0-9]{8}$/).required("phone is required")}),r=w({initialValues:{name:"",email:"",password:"",rePassword:"",phone:""},validationSchema:g,onSubmit:m});return e.jsxs("div",{children:[e.jsxs("h2",{className:"text-center py-5 text-2xl",children:[e.jsx("span",{className:"text-green-600",children:"Register"})," now"]}),l?e.jsx("div",{className:"w-1/2 mx-auto p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:l})}):"",e.jsxs("form",{className:"max-w-md mx-auto",onSubmit:r.handleSubmit,children:[e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.name,type:"text",id:"name",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer ",placeholder:""}),e.jsx("label",{htmlFor:"floating_first_name",className:"peer-focus:font-medium absolute text-sm focus:text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"First name"})]}),r.errors.name&&r.touched.name?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.name})}):"",e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.email,type:"email",id:"email",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_email",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Email address"})]}),r.errors.email&&r.touched.email?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.email})}):"",e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.password,type:"password",id:"password",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_password",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Password"})]}),r.errors.password&&r.touched.password?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.password})}):"",e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.rePassword,type:"password",id:"rePassword",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_repeat_password",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Confirm password"})]}),r.errors.rePassword&&r.touched.rePassword?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.rePassword})}):"",e.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[e.jsx("input",{onBlur:r.handleBlur,onChange:r.handleChange,value:r.values.phone,type:"tel",id:"phone",className:"block py-2.5 px-0 w-full text-sm focus:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",placeholder:" "}),e.jsx("label",{htmlFor:"floating_phone",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Phone number (123-456-7890)"})]}),r.errors.phone&&r.touched.phone?e.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:text-red-400",role:"alert",children:e.jsx("span",{className:"font-medium",children:r.errors.phone})}):"",e.jsx("button",{type:"submit",className:" text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",children:p?e.jsx("i",{className:"fas fa-spin fa-spinner text-white"}):"Register"})]})]})}export{F as default};