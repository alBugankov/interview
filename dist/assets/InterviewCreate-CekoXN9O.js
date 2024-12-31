import{d as T,u as x,r as f,o as N,a as d,c as p,b as i,w as U,e as S,f as y,g as A,h as t,n as v,i as m,j as L,k as W,E,_ as R}from"./index-CKm8tBeE.js";import{u as D}from"./interviewsStore-DOMhipJ2.js";var o=[];for(var g=0;g<256;++g)o.push((g+256).toString(16).slice(1));function F(n,r=0){return(o[n[r+0]]+o[n[r+1]]+o[n[r+2]]+o[n[r+3]]+"-"+o[n[r+4]]+o[n[r+5]]+"-"+o[n[r+6]]+o[n[r+7]]+"-"+o[n[r+8]]+o[n[r+9]]+"-"+o[n[r+10]]+o[n[r+11]]+o[n[r+12]]+o[n[r+13]]+o[n[r+14]]+o[n[r+15]]).toLowerCase()}var I,B=new Uint8Array(16);function G(){if(!I&&(I=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!I))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return I(B)}var j=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const b={randomUUID:j};function H(n,r,e){if(b.randomUUID&&!r&&!n)return b.randomUUID();n=n||{};var c=n.random||(n.rng||G)();return c[6]=c[6]&15|64,c[8]=c[8]&63|128,F(c)}const P={class:"content-interview"},$={key:0,class:"content-interview__error content-interview__error--company"},q={class:"content-interview__salary"},z={key:1,class:"content-interview__error content-interview__error--vacancy"},J={key:2,class:"content-interview__error content-interview__error--hr"},K={key:3,class:"content-interview__error content-interview__error--telegram"},M={key:4,class:"content-interview__error content-interview__error--whatsapp"},O=T({__name:"InterviewCreate",setup(n){const r=S(),e=D(),c=x(),u=f(!1),k=()=>{u.value=!0;let V=!1;[{field:"company",errorClass:"content-interview__error--company"},{field:"vacancyLink",errorClass:"content-interview__error--vacancy"},{field:"hrName",errorClass:"content-interview__error--hr"},{field:"contactTelegram",errorClass:"content-interview__error--telegram"},{field:"contactWhatsApp",errorClass:"content-interview__error--whatsapp"}].forEach(({field:s,errorClass:_})=>{const h=e.currentInterview[s],w=document.querySelector(`.${_}`);!h&&w&&(w.style.display="block",V=!0)}),V||C()},C=async()=>{c.isGlobalLoading=!0,e.currentInterview.id=H(),e.currentInterview.createdAt=new Date,W()&&(await e.addInterview(),await r.push({name:E.INTERVIEW_LIST})),c.isGlobalLoading=!1};return N(()=>{e.$reset()}),(V,a)=>{const s=y("app-input-text"),_=y("app-input-number"),h=y("app-button"),w=y("app-card");return d(),p("div",P,[i(w,null,{title:U(()=>a[8]||(a[8]=[A("Новое собеседование")])),content:U(()=>[i(s,{modelValue:t(e).currentInterview.company,"onUpdate:modelValue":a[0]||(a[0]=l=>t(e).currentInterview.company=l),class:v([{invalid:u.value&&!t(e).currentInterview.company},"input input__company"]),placeholder:"Компания *"},null,8,["modelValue","class"]),t(e).currentInterview.company?m("",!0):(d(),p("p",$," Поле обязательно для заполнения! ")),L("div",q,[i(_,{modelValue:t(e).currentInterview.salaryFrom,"onUpdate:modelValue":a[1]||(a[1]=l=>t(e).currentInterview.salaryFrom=l),class:"content-interview__salary__input",placeholder:"ЗП-от"},null,8,["modelValue"]),i(_,{modelValue:t(e).currentInterview.salaryTo,"onUpdate:modelValue":a[2]||(a[2]=l=>t(e).currentInterview.salaryTo=l),class:"content-interview__salary__input",placeholder:"ЗП-до"},null,8,["modelValue"])]),i(s,{modelValue:t(e).currentInterview.vacancyLink,"onUpdate:modelValue":a[3]||(a[3]=l=>t(e).currentInterview.vacancyLink=l),class:v([{invalid:u.value&&!t(e).currentInterview.vacancyLink},"input input__vacancy"]),placeholder:"Ссылка на вакансию *"},null,8,["modelValue","class"]),t(e).currentInterview.vacancyLink?m("",!0):(d(),p("p",z," Поле обязательно для заполнения! ")),i(s,{modelValue:t(e).currentInterview.hrName,"onUpdate:modelValue":a[4]||(a[4]=l=>t(e).currentInterview.hrName=l),class:v([{invalid:u.value&&!t(e).currentInterview.hrName},"input input__hr"]),placeholder:"Имя HR *"},null,8,["modelValue","class"]),t(e).currentInterview.hrName?m("",!0):(d(),p("p",J," Поле обязательно для заполнения! ")),i(s,{modelValue:t(e).currentInterview.contactTelegram,"onUpdate:modelValue":a[5]||(a[5]=l=>t(e).currentInterview.contactTelegram=l),class:v([{invalid:u.value&&!t(e).currentInterview.contactTelegram&&!t(e).currentInterview.contactWhatsApp},"input input__telegram"]),placeholder:"Telegram *"},null,8,["modelValue","class"]),!t(e).currentInterview.contactTelegram&&!t(e).currentInterview.contactWhatsApp?(d(),p("p",K," Одно из этих полей обязательно для заполнения! ")):m("",!0),i(s,{modelValue:t(e).currentInterview.contactWhatsApp,"onUpdate:modelValue":a[6]||(a[6]=l=>t(e).currentInterview.contactWhatsApp=l),class:v([{invalid:u.value&&!t(e).currentInterview.contactTelegram&&!t(e).currentInterview.contactWhatsApp},"input input__whatsapp"]),placeholder:"WhatsApp"},null,8,["modelValue","class"]),!t(e).currentInterview.contactTelegram&&!t(e).currentInterview.contactWhatsApp?(d(),p("p",M," Одно из этих полей обязательно для заполнения! ")):m("",!0),i(s,{modelValue:t(e).currentInterview.contactPhone,"onUpdate:modelValue":a[7]||(a[7]=l=>t(e).currentInterview.contactPhone=l),class:"input input__phone",placeholder:"Телефон"},null,8,["modelValue"]),i(h,{loading:t(c).isGlobalLoading,class:"content-interview__add-button",label:"Создать собеседование",style:{"--p-button-primary-border-color":"transparent"},onClick:k},null,8,["loading"])]),_:1})])}}}),Y=R(O,[["__scopeId","data-v-a970ad2c"]]);export{Y as default};
