"use strict";(self.webpackChunkpastecode_docs=self.webpackChunkpastecode_docs||[]).push([[311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(a,".").concat(d)]||u[d]||y[d]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[u]="string"==typeof e?e:o,s[1]=p;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},s="Snippet Encryption",p={unversionedId:"managing-snippets/snippet-encryption",id:"managing-snippets/snippet-encryption",title:"Snippet Encryption",description:"No one can view the content of your encrypted snippet on PasteCode.io unless you share the secret passphrase.",source:"@site/docs/managing-snippets/snippet-encryption.md",sourceDirName:"managing-snippets",slug:"/managing-snippets/snippet-encryption",permalink:"/managing-snippets/snippet-encryption",draft:!1,editUrl:"https://github.com/pastecodeio/pastecode-docs/tree/master/docs/managing-snippets/snippet-encryption.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Remove a Snippet",permalink:"/managing-snippets/removing-snippets"},next:{title:"Snippet Visibility",permalink:"/managing-snippets/snippet-visibility"}},a={},c=[],l={toc:c},u="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snippet-encryption"},"Snippet Encryption"),(0,o.kt)("p",null,"No one can view the content of your encrypted snippet on PasteCode.io unless you share the secret passphrase."),(0,o.kt)("p",null,"We utilize the AES-256 CBC encryption algorithm (cryptojs library) to encrypt snippets when you choose that option. All encryption and decryption processes take place on the client side."),(0,o.kt)("p",null,"The secret passphrase, which is 16 characters long, is randomly generated on the client side during snippet creation. It is stored in your browser's local storage and is not sent to our servers. A 256-bit key is derived from this secret passphrase using PBKDF2 to encrypt your snippet. When you visit the snippet detail page, the encrypted snippet is automatically decrypted on the client side if your browser has the correct passphrase stored in local storage."),(0,o.kt)("p",null,"If you do not have the secret passphrase in your browser's local storage (either due to clearing it or changing devices), and assuming you have stored the secret passphrase elsewhere, you can add the hashtag ",(0,o.kt)("inlineCode",{parentName:"p"},"#SECRET_PASSPHRASE")," to your snippet's URL (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"https://pastecode.io/s/a1b2c3d4#SECRET_PASSPHRASE"),") and refresh the page. This allows you to retrieve and decrypt the snippet using the stored passphrase. However, if you have lost the secret passphrase, there is no way to recover the snippet content."),(0,o.kt)("p",null,"Additionally, you have the option to use other libraries like OpenSSL to decrypt your snippet. By clicking the 'View as Raw' or 'Download' button on the snippet detail page, you can access the encrypted content in OpenSSL format, as it is stored in our database."),(0,o.kt)("p",null,"Please note that the security of your snippets relies on keeping the secret passphrase confidential and ensuring its safe storage."))}y.isMDXComponent=!0}}]);