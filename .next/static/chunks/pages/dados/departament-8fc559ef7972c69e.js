(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{5163:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dados/departament",function(){return i(2651)}])},2651:function(e,n,i){"use strict";i.a(e,async function(e,s){try{i.r(n),i.d(n,{default:function(){return f}});var a=i(5893),t=i(6465),c=i.n(t);i(7294);var r=i(8289),o=i(1632),l=i(252),d=i.n(l),u=i(8890),m=i(5356);let e=await (0,r.Z)();function f(){return(0,a.jsxs)("section",{className:"jsx-b0cffc484a2fa82a "+(d().section||""),children:[(0,a.jsx)(o.Z,{}),(0,a.jsxs)("main",{className:"jsx-b0cffc484a2fa82a "+(d().main||""),children:[(0,a.jsx)(u.Z,{}),(0,a.jsx)(m.Z,{products:e})]}),(0,a.jsx)(c(),{id:"b0cffc484a2fa82a",children:"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}"})]})}s()}catch(e){s(e)}},1)},5356:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var s=i(5893),a=i(5470),t=i(7661),c=i.n(t);i(1664);var r=i(9017);function o(e){let{items:n,requestSort:i,sortConfig:t}=(0,r.Z)(e.products);return(0,s.jsx)(a.Z,{title:(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("th",{className:c().th,children:(0,s.jsx)("button",{type:"button",onClick:()=>i("nome"),className:(e=>{if(t)return t.key===e?t.direction:void 0})("nome"),children:"Nome"})})}),result:n.map(e=>(0,s.jsx)("tr",{children:(0,s.jsx)("td",{children:e.name})},e.id))})}},8890:function(e,n,i){"use strict";i.d(n,{Z:function(){return m}});var s=i(5893),a=i(7294),t=i(44),c=i.n(t),r=i(3521),o=i.n(r),l=i(7216),d=i.n(l),u=i(9332);function m(){let[e,n]=a.useState(""),[i,t]=a.useState([]),[r,l]=a.useState({}),m=(0,u.useRouter)(),f=[{id:1,name:"decisionMakers",configs:[{id:1,configKey:1,name:"email"},{id:1,configKey:1,name:"cnpj"},{id:1,configKey:1,name:"departament"},{id:1,configKey:1,name:"office"}]},{id:2,name:"company",configs:[{id:2,configKey:2,name:"document"},{id:2,configKey:2,name:"companyName"},{id:2,configKey:2,name:"cnae"},{id:2,configKey:2,name:"sector"}]},{id:3,name:"departament",configs:[{id:3,configKey:3,name:"name"}]},{id:4,name:"sector",configs:[{id:4,configKey:4,name:"name"}]},{id:5,name:"cnae",configs:[{id:5,configKey:5,name:"name"},{id:5,configKey:5,name:"code"}]}],h=e=>{n(e.target.value),m.push("/dados/".concat(e.target.value))};return a.useEffect(()=>{t(f.filter(n=>n.name===e)[0])},[e]),(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:c().div,children:[(0,s.jsx)(e=>{var n,a;return(0,s.jsxs)("div",{className:c().form,children:[null===(a=e.list)||void 0===a?void 0:null===(n=a.configs)||void 0===n?void 0:n.map(e=>(0,s.jsx)("input",{type:"text",name:e.name,placeholder:e.name,className:d().input,value:r[e.name],onChange:e=>l({...r,[e.target.name]:e.target.value})})),i?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{className:o().button,onClick:()=>handleSendSearch(e.value),children:"Enviar"}),(0,s.jsxs)("select",{name:"cars",id:"cars",onChange:e=>h(e),className:c().select,children:[(0,s.jsx)("option",{defaultValue:!0,children:"Exporta"}),(0,s.jsx)("option",{value:"csv",children:"CSV"}),(0,s.jsx)("option",{value:"xlsx",children:"XLSX"})]})]}):""]})},{list:i}),(0,s.jsxs)("select",{name:"cars",id:"cars",onChange:e=>h(e),className:c().select,children:[(0,s.jsx)("option",{defaultValue:!0,children:"Escolha um filtro "}),(0,s.jsx)("option",{value:"decisionMakers",children:"Decisores"}),(0,s.jsx)("option",{value:"company",children:"Empresa"}),(0,s.jsx)("option",{value:"departament",children:"Departamento"}),(0,s.jsx)("option",{value:"sector",children:"Setor"})]})]})})}},3201:function(e,n,i){"use strict";var s=i(7294);let a=(0,s.createContext)();n.Z=a},1632:function(e,n,i){"use strict";i.d(n,{Z:function(){return u}});var s=i(5893),a=i(1664),t=i.n(a),c=i(597),r=i.n(c),o=i(7294),l=i(3201),d=i(790);function u(){let[e,n]=o.useState(!1);return(0,s.jsxs)(l.Z.Provider,{value:{mounted:e,setMounted:n},children:[(0,s.jsx)("header",{className:r().header,children:(0,s.jsxs)("aside",{className:r().aside,children:[(0,s.jsx)("img",{src:"/logo.svg",alt:"bruta",className:r().logo}),(0,s.jsx)("nav",{className:r().nav,children:(0,s.jsxs)("ul",{className:r().ul,children:[(0,s.jsxs)("li",{className:r().li,children:[(0,s.jsx)(t(),{href:"/",className:r().link,children:"Inicio"}),(0,s.jsx)("img",{src:"/icons/home.svg",alt:"Inicio",className:r().icon})]}),(0,s.jsxs)("li",{className:r().li,children:[(0,s.jsx)(t(),{href:"/dados",className:r().link,children:"Dados"}),(0,s.jsx)("img",{src:"/icons/data.svg",alt:"dados",className:r().icon})]}),(0,s.jsxs)("li",{className:r().li,children:[(0,s.jsx)(t(),{href:"",className:r().link,onClick:()=>n(!0),children:"Adicionar"}),(0,s.jsx)("img",{src:"/icons/upload.svg",alt:"cadastrar",className:r().icon})]}),(0,s.jsxs)("li",{className:r().li,children:[(0,s.jsx)(t(),{href:"/",className:r().link,children:"Sair"}),(0,s.jsx)("img",{src:"/icons/exit.svg",alt:"sair",className:r().icon})]})]})})]})}),(0,s.jsx)(d.Z,{children:(0,s.jsxs)("div",{className:r().div,children:[(0,s.jsx)("label",{children:"Procurar Arquivo"}),(0,s.jsx)("input",{type:"file",name:"file",id:"file"})]})})]})}},790:function(e,n,i){"use strict";i.d(n,{Z:function(){return l}});var s=i(5893),a=i(7294),t=i(3935),c=i(5676),r=i.n(c),o=i(3201);function l(e){let{children:n}=e,{mounted:i,setMounted:c,mountedLogin:l,setMountedLogin:d,alertModal:u,setAlertModal:m}=(0,a.useContext)(o.Z),f=()=>{c(!1)};return i|l|u?(0,t.createPortal)((0,s.jsxs)("div",{className:r().div,children:[(0,s.jsx)("button",{className:r().button,onClick:()=>f(),children:"X"}),n]}),document.body):null}},9017:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var s=i(7294);function a(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,[i,a]=s.useState(n),t=s.useMemo(()=>{let n=[...e];return null!==i&&n.sort((e,n)=>e[i.key]<n[i.key]?"ascending"===i.direction?-1:1:e[i.key]>n[i.key]?"ascending"===i.direction?1:-1:0),n},[e,i]);return{items:t,requestSort:e=>{let n="ascending";i&&i.key===e&&"ascending"===i.direction&&(n="descending"),a({key:e,direction:n})},sortConfig:i}}},5470:function(e,n,i){"use strict";i.d(n,{Z:function(){return o}});var s=i(5893),a=i(9315),t=i.n(a);i(7294);var c=i(7661),r=i.n(c);function o(e){let{title:n,result:i}=e;return(0,s.jsx)("div",{className:t().variable,style:{maxWidth:"100%",overflow:"scroll"},children:(0,s.jsxs)("table",{className:r().table,children:[(0,s.jsx)("thead",{className:r().thead,children:(0,s.jsx)("tr",{children:n})}),(0,s.jsx)("tbody",{className:r().tbody,children:i})]})})}},8289:function(e,n,i){"use strict";i.d(n,{Z:function(){return a}});var s=i(9588);async function a(){let e=await s.Z.get("http://systembrutamarketing.com.br:21160/departament",{headers:{Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpbmFsZG9ndWlsaGVybWVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjMxMjMiLCJpYXQiOjE2OTM4NDk3Njl9.cF-DJyaXhL9-G_0111WpLeieghRtQN7T44GNE1hczVI"}});return e.data}},252:function(e){e.exports={section:"Section_section__RMVJq",main:"Section_main__dkoCR"}},44:function(e){e.exports={select:"Filters_select__qzTJV",div:"Filters_div__YQG92"}},3521:function(e){e.exports={button:"Button_button__7F12w"}},7216:function(e){e.exports={input:"Input_input__DyPw5"}},597:function(e){e.exports={header:"Menu_header__T_0no",link:"Menu_link__EwNgO",ul:"Menu_ul__as_HV",li:"Menu_li__7rFAJ",icon:"Menu_icon__BTmeO",logo:"Menu_logo__U_A_v",nav:"Menu_nav__3IvSt",aside:"Menu_aside__04sw8",div:"Menu_div__C5KLz"}},5676:function(e){e.exports={div:"Modal_div__MOl03",button:"Modal_button__xgbUx"}},7661:function(e){e.exports={table:"Table_table__z9eDv",thead:"Table_thead__Vm_gJ",th:"Table_th__LycMF",ascending:"Table_ascending__kAgPh",descending:"Table_descending__P_yqC",tbody:"Table_tbody__StmG7"}}},function(e){e.O(0,[774,523,463,888,179],function(){return e(e.s=5163)}),_N_E=e.O()}]);