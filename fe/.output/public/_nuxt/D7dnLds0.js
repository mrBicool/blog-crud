import{r as w,ae as y,D as b,a3 as D,a1 as T,h as S}from"./CPIBycqX.js";function m(e){return D()?(T(e),!0):!1}function f(e){return typeof e=="function"?e():S(e)}const p=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const C=()=>+Date.now(),d=()=>{};function W(e,n){function i(...t){return new Promise((s,o)=>{Promise.resolve(e(()=>n.apply(this,t),{fn:n,thisArg:this,args:t})).then(s).catch(o)})}return i}function v(e,n={}){let i,t,s=d;const o=r=>{clearTimeout(r),s(),s=d};return r=>{const l=f(e),a=f(n.maxWait);return i&&o(i),l<=0||a!==void 0&&a<=0?(t&&(o(t),t=null),Promise.resolve(r())):new Promise((u,h)=>{s=n.rejectOnCancel?h:u,a&&!t&&(t=setTimeout(()=>{i&&o(i),t=null,u(r())},a)),i=setTimeout(()=>{t&&o(t),t=null,u(r())},l)})}}function F(e,n=200,i={}){return W(v(n,i),e)}function P(e,n=1e3,i={}){const{immediate:t=!0,immediateCallback:s=!1}=i;let o=null;const c=w(!1);function r(){o&&(clearInterval(o),o=null)}function l(){c.value=!1,r()}function a(){const u=f(n);u<=0||(c.value=!0,s&&e(),r(),o=setInterval(e,u))}if(t&&p&&a(),y(n)||typeof n=="function"){const u=b(n,()=>{c.value&&p&&a()});m(u)}return m(l),{isActive:c,pause:l,resume:a}}export{P as a,m as b,f as c,p as i,C as t,F as u};