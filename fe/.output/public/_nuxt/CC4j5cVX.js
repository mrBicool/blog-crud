import{_ as p,a as f}from"./BrTQF-hm.js";import{_ as v}from"./Bqiq-aj6.js";import{_ as x}from"./VTDPEPOY.js";import{r as V,c as h,a as m,b as o,w as l,n as T,o as b,h as r,d as y}from"./maLFL5Tx.js";import{u as U}from"./BnNJGN2H.js";import{u as g}from"./Qnor7pCr.js";import"./Bh748a4e.js";import"./D_bbQEEy.js";import"./CvPl5tTm.js";import"./CeLqHVAG.js";const E={class:""},S={class:"mt-4"},R={__name:"create",setup(B){const i=U(),t=V({title:"",content:""}),c=async()=>{try{const{data:a,error:e}=await g("/articles",{method:"POST",body:t.value});if(e.value){console.log("CREATE",e.value.data.message),i.add({color:"red",title:e.value.data.message});return}console.log("RESPONSE",a.value),T("/articles")}catch(a){console.error(a)}};return(a,e)=>{const u=f,s=p,d=v,_=x;return b(),h("div",E,[m("div",S,[o(s,{label:"Title",required:""},{default:l(()=>[o(u,{modelValue:r(t).title,"onUpdate:modelValue":e[0]||(e[0]=n=>r(t).title=n),modelModifiers:{trim:!0},color:"primary",variant:"outline",placeholder:"Search..."},null,8,["modelValue"])]),_:1}),o(s,{label:"Content",class:"mt-2",required:""},{default:l(()=>[o(d,{modelValue:r(t).content,"onUpdate:modelValue":e[1]||(e[1]=n=>r(t).content=n),modelModifiers:{trim:!0},color:"primary",variant:"outline",placeholder:"content..."},null,8,["modelValue"])]),_:1}),m("div",null,[o(_,{onClick:c,color:"primary",class:"mt-4",size:"xs",variant:"solid"},{default:l(()=>[y(" Submit ")]),_:1})])])])}}};export{R as default};
