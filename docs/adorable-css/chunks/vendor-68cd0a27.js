function _(){}function W(t,n){for(const e in n)t[e]=n[e];return t}function L(t){return t()}function T(){return Object.create(null)}function m(t){t.forEach(L)}function z(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function st(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function J(t){return Object.keys(t).length===0}function lt(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?W(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const l=[],o=Math.max(n.dirty.length,c.length);for(let u=0;u<o;u+=1)l[u]=n.dirty[u]|c[u];return l}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,l){if(c){const o=B(n,e,i,l);t.p(o,c)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){return t&&z(t.destroy)?t.destroy:_}let $=!1;function K(){$=!0}function Q(){$=!1}function R(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function U(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:R(1,c,x=>n[e[x]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const l=[],o=[];let u=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(l.push(n[r-1]);u>=r;u--)o.push(n[u]);u--}for(;u>=0;u--)o.push(n[u]);l.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<l.length&&o[r].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(o[r],a)}}function V(t,n){if($){for(U(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){$&&!e?V(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function X(t){t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Y(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function pt(){return S(" ")}function yt(){return S("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,c=!1){nt(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(n(u)){const r=e(u);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function P(t,n,e,i){return O(t,c=>c.nodeName===n,c=>{const l=[];for(let o=0;o<c.attributes.length;o++){const u=c.attributes[o];e[u.name]||l.push(u.name)}l.forEach(o=>c.removeAttribute(o))},()=>i(n))}function bt(t,n,e){return P(t,n,e,Y)}function $t(t,n,e){return P(t,n,e,Z)}function et(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function wt(t){return et(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function kt(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function Nt(t,n,e){t.classList[e?"add":"remove"](n)}let p;function y(t){p=t}function w(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){w().$$.on_mount.push(t)}function jt(t){w().$$.after_update.push(t)}function vt(t,n){w().$$.context.set(t,n)}function At(t){return w().$$.context.get(t)}const g=[],D=[],E=[],j=[],F=Promise.resolve();let v=!1;function H(){v||(v=!0,F.then(I))}function Ct(){return H(),F}function A(t){E.push(t)}function qt(t){j.push(t)}const C=new Set;let k=0;function I(){const t=p;do{for(;k<g.length;){const n=g[k];k++,y(n),it(n.$$)}for(y(null),g.length=0,k=0;D.length;)D.pop()();for(let n=0;n<E.length;n+=1){const e=E[n];C.has(e)||(C.add(e),e())}E.length=0}while(g.length);for(;j.length;)j.pop()();v=!1,C.clear(),y(t)}function it(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const N=new Set;let d;function Mt(){d={r:0,c:[],p:d}}function Lt(){d.r||m(d.c),d=d.p}function rt(t,n){t&&t.i&&(N.delete(t),t.i(n))}function Tt(t,n,e,i){if(t&&t.o){if(N.has(t))return;N.add(t),d.c.push(()=>{N.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},c={$$scope:1};let l=t.length;for(;l--;){const o=t[l],u=n[l];if(u){for(const r in o)r in u||(i[r]=1);for(const r in u)c[r]||(e[r]=u[r],c[r]=1);t[l]=u}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Ot(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Pt(t){t&&t.c()}function Dt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:l,on_destroy:o,after_update:u}=t.$$;c&&c.m(n,e),i||A(()=>{const r=l.map(L).filter(z);o?o.push(...r):m(r),t.$$.on_mount=[]}),u.forEach(A)}function ot(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(g.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ft(t,n,e,i,c,l,o,u=[-1]){const r=p;y(t);const s=t.$$={fragment:null,ctx:null,props:l,update:_,not_equal:c,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:T(),dirty:u,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,x,...q)=>{const M=q.length?q[0]:x;return s.ctx&&c(s.ctx[f],s.ctx[f]=M)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](M),a&&ut(t,f)),x}):[],s.update(),a=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){K();const f=tt(n.target);s.fragment&&s.fragment.l(f),f.forEach(X)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),Q(),I()}y(r)}class Ht{$destroy(){ot(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function It(t,n=_){let e;const i=new Set;function c(u){if(G(t,u)&&(t=u,e)){const r=!h.length;for(const s of i)s[1](),h.push(s,t);if(r){for(let s=0;s<h.length;s+=2)h[s][0](h[s+1]);h.length=0}}}function l(u){c(u(t))}function o(u,r=_){const s=[u,r];return i.add(s),i.size===1&&(e=n(c)||_),u(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:l,subscribe:o}}export{ot as A,W as B,It as C,Ct as D,V as E,_ as F,At as G,lt as H,Z as I,$t as J,kt as K,_t as L,at as M,dt as N,ft as O,m as P,st as Q,D as R,Ht as S,Nt as T,gt as U,Ot as V,qt as W,mt as X,tt as a,xt as b,bt as c,X as d,Y as e,ht as f,et as g,Et as h,Ft as i,pt as j,yt as k,wt as l,Mt as m,Tt as n,Lt as o,rt as p,vt as q,jt as r,G as s,S as t,St as u,Pt as v,Dt as w,ct as x,zt as y,Bt as z};
