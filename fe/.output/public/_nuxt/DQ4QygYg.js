import{_ as k}from"./DYokn59J.js";import{_ as x}from"./D8ue20Bc.js";import{a as E,u as f}from"./DgbBGBFi.js";import{u as w}from"./p5OpvR-P.js";import{r as N,g as T,o,c as a,a as e,h as n,b as _,w as u,d as m,j as i,F as S,B as A,t as h}from"./Bhnlaw80.js";const L={class:""},b={class:""},B={key:0,class:"flex justify-end"},C={class:""},D={key:0,role:"list",class:"divide-y divide-gray-100"},M={class:"flex-auto"},O={class:"flex items-baseline justify-between gap-x-4"},V={class:"text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 tracking-wider"},$={key:0,class:"font-normal text-gray-500 text-xs ml-2"},j=e("span",{class:"hover:text-blue-600 cursor-pointer ml-1"},"Edit",-1),F=["onClick"],H={class:"flex-none text-xs text-gray-600 dark:text-gray-400"},J={datetime:"2023-03-04T15:54Z"},P=["innerHTML"],K={__name:"Articles",setup(U){const c=E(),l=N(null);async function p(){try{const{data:t,error:r}=await f("/articles",{method:"GET",params:{page:1}});if(r.value)return;l.value=JSON.parse(JSON.stringify(t.value))}catch(t){console.error(t)}}async function y(t){try{if(confirm("Are you sure you want to delete this item?")){console.log("DELETE",t);const{data:r,error:d}=await f(`/articles/${t.id}`,{method:"DELETE"});if(d.value)return;console.log("RESPONSE",r.value),await p()}}catch(r){console.error(r)}}return T(async()=>{await w(1),console.log("MOUNTED"),await p()}),(t,r)=>{const d=k,g=x,v=x;return o(),a("div",L,[e("div",b,[["admin","editor"].includes(n(c).user_role)?(o(),a("div",B,[_(d,{to:"/articles/create",size:"xs"},{default:u(()=>[m("Create Post")]),_:1})])):i("",!0),e("div",C,[n(l)?(o(),a("ul",D,[(o(!0),a(S,null,A(n(l).data,s=>(o(),a("li",{key:s.id,class:"flex gap-x-4 py-5"},[e("div",M,[e("div",O,[e("p",V,[_(g,{to:`/articles/${s.id}`,class:"hover:underline"},{default:u(()=>[m(h(s.title),1)]),_:2},1032,["to"]),["admin","editor"].includes(n(c).user_role)?(o(),a("span",$,[m("| "),_(v,{to:`/articles/${s.id}/edit`},{default:u(()=>[j]),_:2},1032,["to"]),["admin"].includes(n(c).user_role)?(o(),a("span",{key:0,onClick:z=>y(s),class:"hover:text-red-600 cursor-pointer ml-1"}," Delete",8,F)):i("",!0)])):i("",!0)]),e("p",H,[e("time",J,h(s.formatted_created_at),1)])]),e("p",{class:"mt-1 line-clamp-6 text-sm leading-6 text-gray-600 dark:text-gray-400 font-light",innerHTML:s.content},null,8,P)])]))),128))])):i("",!0)])])])}}};export{K as _};
