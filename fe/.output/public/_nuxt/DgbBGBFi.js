import{a4 as R,r as w,a5 as E,I as S,a6 as T,$ as U,a0 as B,a7 as O,a3 as F,a8 as j,h as k,z,a9 as M,E as x,aa as h,ab as H,k as L,ac as q,ad as I,ae as K}from"./Bhnlaw80.js";const N=e=>e==="defer"||e===!1;function G(...e){var g;const n=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(n);let[s,i,a={}]=e;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const t=F(),u=i,m=()=>null,v=()=>t.isHydrating?t.payload.data[s]:t.static.data[s];a.server=a.server??!0,a.default=a.default??m,a.getCachedData=a.getCachedData??v,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??R.deep,a.dedupe=a.dedupe??"cancel";const p=()=>a.getCachedData(s,t)!=null;if(!t._asyncData[s]||!a.immediate){(g=t.payload._errors)[s]??(g[s]=null);const c=a.deep?w:E;t._asyncData[s]={data:c(a.getCachedData(s,t)??a.default()),pending:w(!p()),error:S(t.payload._errors,s),status:w("idle")}}const r={...t._asyncData[s]};r.refresh=r.execute=(c={})=>{if(t._asyncDataPromises[s]){if(N(c.dedupe??a.dedupe))return t._asyncDataPromises[s];t._asyncDataPromises[s].cancelled=!0}if((c._initial||t.isHydrating&&c._initial!==!1)&&p())return Promise.resolve(a.getCachedData(s,t));r.pending.value=!0,r.status.value="pending";const f=new Promise((l,o)=>{try{l(u(t))}catch(y){o(y)}}).then(async l=>{if(f.cancelled)return t._asyncDataPromises[s];let o=l;a.transform&&(o=await a.transform(l)),a.pick&&(o=X(o,a.pick)),t.payload.data[s]=o,r.data.value=o,r.error.value=null,r.status.value="success"}).catch(l=>{if(f.cancelled)return t._asyncDataPromises[s];r.error.value=j(l),r.data.value=k(a.default()),r.status.value="error"}).finally(()=>{f.cancelled||(r.pending.value=!1,delete t._asyncDataPromises[s])});return t._asyncDataPromises[s]=f,t._asyncDataPromises[s]},r.clear=()=>V(t,s);const _=()=>r.refresh({_initial:!0}),b=a.server!==!1&&t.payload.serverRendered;{const c=z();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const o=c._nuxtOnBeforeMountCbs;T(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),U(()=>o.splice(0,o.length))}b&&t.isHydrating&&(r.error.value||p())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(t.payload.serverRendered&&t.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(_):a.immediate&&_();const f=M();if(a.watch){const o=B(a.watch,()=>r.refresh());f&&O(o)}const l=t.hook("app:data:refresh",async o=>{(!o||o.includes(s))&&await r.refresh()});f&&O(l)}const D=Promise.resolve(t._asyncDataPromises[s]).then(()=>r);return Object.assign(D,r),D}function V(e,n){n in e.payload.data&&(e.payload.data[n]=void 0),n in e.payload._errors&&(e.payload._errors[n]=null),e._asyncData[n]&&(e._asyncData[n].data.value=void 0,e._asyncData[n].error.value=null,e._asyncData[n].pending.value=!1,e._asyncData[n].status.value="idle"),n in e._asyncDataPromises&&(e._asyncDataPromises[n].cancelled=!0,e._asyncDataPromises[n]=void 0)}function X(e,n){const s={};for(const i of n)s[i]=e[i];return s}function A(e,n,s){const[i={},a]=typeof n=="string"?[{},n]:[n,s],t=x(()=>h(e)),u=i.key||H([a,typeof t.value=="string"?t.value:"",...J(i)]);if(!u||typeof u!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+u);if(!e)throw new Error("[nuxt] [useFetch] request is missing.");const m=u===a?"$f"+u:u;if(!i.baseURL&&typeof t.value=="string"&&t.value[0]==="/"&&t.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:v,lazy:p,default:r,transform:_,pick:b,watch:D,immediate:g,getCachedData:c,deep:f,dedupe:l,...o}=i,y=L({...q,...o,cache:typeof i.cache=="boolean"?void 0:i.cache}),$={server:v,lazy:p,default:r,transform:_,pick:b,immediate:g,getCachedData:c,deep:f,dedupe:l,watch:D===!1?[]:[y,t,...D||[]]};let d;return G(m,()=>{var P;(P=d==null?void 0:d.abort)==null||P.call(d),d=typeof AbortController<"u"?new AbortController:{};const C=h(i.timeout);return C&&setTimeout(()=>d.abort(),C),(i.$fetch||globalThis.$fetch)(t.value,{signal:d.signal,...y})},$)}function J(e){var s;const n=[((s=h(e.method))==null?void 0:s.toUpperCase())||"GET",h(e.baseURL)];for(const i of[e.params||e.query]){const a=h(i);if(!a)continue;const t={};for(const[u,m]of Object.entries(a))t[h(u)]=h(m);n.push(t)}return n}const Q=I("auth",{state:()=>({user:null,token:"",user_role:"",permission:[]}),actions:{setToken(e){console.log(`token: ${e}`),this.token=e},setUser(e){console.log(`user: ${e}`),this.user=e},setUserRole(e){console.log(`user_role: ${e}`),this.user_role=e},async logout(){await W("/logout",{method:"POST"}),this.user=null,this.token="",this.user_role="",this.permission=[]},isAuthenticated(){return!!this.token}},persist:!0});function W(e,n={}){const s=K(),i=Q();let a={};return i.isAuthenticated()&&(a.Authorization=`Bearer ${i.token}`),A(`${s.public.apiUrl}/api`+e,{...n,headers:{accept:"application/json",...a,...n==null?void 0:n.headers}},"$Ov7SIxRbXh")}export{Q as a,W as u};
