import{d as P,l as S,u as N,m as F,a as m,c as v,b as a,h as r,w,i as b,F as g,p as L,e as W,f as d,g as E,t as $,j as n,q as x,E as A,_ as j}from"./index-BvhJ-PTi.js";import{u as B}from"./interviewsStore-CN4hm-7r.js";const D={key:0,class:"interview"},H={class:"interview__stage__datepicker-container"},q=["for"],z={class:"interview__stage__datepicker-container"},G=["for"],M={class:""},O=["for"],J={class:"interview__stage__radio-container"},K={class:"interview__stage__radio-container-item interview__stage__radio-container-item--refusal"},Q={class:"interview__stage__radio-container-item interview__stage__radio-container-item--offer"},X={class:"interview__stage__radio-container-item interview__stage__radio-container-item--in-progress"},Y=P({__name:"InterviewEdit",setup(Z){const f=L(),V=W(),I=S(),k=N(),t=B(),y=f.params.id,U=async()=>{var e,p,i,c;((p=(e=t.currentInterview)==null?void 0:e.stages)==null?void 0:p.some(l=>!l.date))&&await new Promise(l=>{I.require({message:"Этап без указанной даты не будет сохранен!",header:"Сохранение изменений",icon:"pi pi-info-circle",rejectLabel:"Отмена",acceptLabel:"Продолжить",rejectClass:"p-button-secondary p-button-outlined",acceptClass:"p-button-danger",accept:()=>{l()},reject:()=>{},onHide:()=>{}})}),t.currentInterview.stages=(c=(i=t.currentInterview)==null?void 0:i.stages)==null?void 0:c.filter(l=>l.date),await t.updateInterview(),await V.push({name:A.INTERVIEW_LIST})};return F(async()=>{t.setInterviewId(y),await t.getInterview()}),(R,e)=>{const p=d("app-confirm-dialog"),i=d("app-input-text"),c=d("app-input-number"),l=d("app-button"),C=d("app-calendar"),h=d("app-textarea"),_=d("app-radio"),T=d("app-card");return m(),v(g,null,[a(p,{style:{width:"270px",height:"215px",fontFamily:"var(--manrope-medium)",fontSize:"14px"}}),r(t).currentInterview&&!r(k).isGlobalLoading?(m(),v("div",D,[a(T,null,{title:w(()=>[E(" Собеседование в компанию "+$(r(t).currentInterview.company),1)]),content:w(()=>[e[14]||(e[14]=n("label",{for:"company"},"Компания",-1)),a(i,{id:"company",modelValue:r(t).currentInterview.company,"onUpdate:modelValue":e[0]||(e[0]=o=>r(t).currentInterview.company=o),class:"interview__input"},null,8,["modelValue"]),e[15]||(e[15]=n("label",{for:"vacancyLink"},"Описание Вакансии (ссылка)",-1)),a(i,{id:"vacancyLink",modelValue:r(t).currentInterview.vacancyLink,"onUpdate:modelValue":e[1]||(e[1]=o=>r(t).currentInterview.vacancyLink=o),class:"interview__input"},null,8,["modelValue"]),e[16]||(e[16]=n("label",{for:"hrName"},"Контакт (имя)",-1)),a(i,{id:"hrName",modelValue:r(t).currentInterview.hrName,"onUpdate:modelValue":e[2]||(e[2]=o=>r(t).currentInterview.hrName=o),class:"interview__input"},null,8,["modelValue"]),e[17]||(e[17]=n("label",{for:"contactTelegram"},"Telegram username HR",-1)),a(i,{id:"contactTelegram",modelValue:r(t).currentInterview.contactTelegram,"onUpdate:modelValue":e[3]||(e[3]=o=>r(t).currentInterview.contactTelegram=o),class:"interview__input"},null,8,["modelValue"]),e[18]||(e[18]=n("label",{for:"contactWhatsApp"},"WhatsApp",-1)),a(i,{id:"contactWhatsApp",modelValue:r(t).currentInterview.contactWhatsApp,"onUpdate:modelValue":e[4]||(e[4]=o=>r(t).currentInterview.contactWhatsApp=o),class:"interview__input"},null,8,["modelValue"]),e[19]||(e[19]=n("label",{for:"contactPhone"},"Телефон HR",-1)),a(i,{id:"contactPhone",modelValue:r(t).currentInterview.contactPhone,"onUpdate:modelValue":e[5]||(e[5]=o=>r(t).currentInterview.contactPhone=o),class:"interview__input"},null,8,["modelValue"]),e[20]||(e[20]=n("label",{for:"salaryFrom"},"Зарплатная вилка от",-1)),a(c,{id:"salaryFrom",modelValue:r(t).currentInterview.salaryFrom,"onUpdate:modelValue":e[6]||(e[6]=o=>r(t).currentInterview.salaryFrom=o),class:"interview__input",placeholder:"Зарплатная вилка от"},null,8,["modelValue"]),e[21]||(e[21]=n("label",{for:"salaryTo"},"Зарплатная вилка до",-1)),a(c,{id:"salaryTo",modelValue:r(t).currentInterview.salaryTo,"onUpdate:modelValue":e[7]||(e[7]=o=>r(t).currentInterview.salaryTo=o),class:"interview__input",placeholder:"Зарплатная вилка до"},null,8,["modelValue"]),a(l,{style:{"--p-button-info-background":"var(--inProgress-color)","--p-button-info-active-background":"var(--inProgress-lighter)"},icon:"pi pi-plus",label:"Добавить этап",severity:"info",onClick:r(t).addStage},null,8,["onClick"]),r(t).currentInterview.stages?(m(!0),v(g,{key:0},x(r(t).currentInterview.stages,(o,s)=>(m(),v("div",{key:s,class:"interview__stage"},[n("div",H,[n("label",{for:`stage-name-${s}`},"Название этапа",8,q),a(i,{id:`stage-name-${s}`,modelValue:o.name,"onUpdate:modelValue":u=>o.name=u,class:"interview__stage-datepicker"},null,8,["id","modelValue","onUpdate:modelValue"])]),n("div",z,[n("label",{for:`stage-date-${s}`},"Дата прохождения этапа",8,G),a(C,{id:`stage-date-${s}`,modelValue:o.date,"onUpdate:modelValue":u=>o.date=u,class:"interview__stage-datepicker",dateFormat:"dd.mm.yy",panelClass:"datepicker-custom"},null,8,["id","modelValue","onUpdate:modelValue"])]),n("div",M,[n("label",{for:`stage-description-${s}`},"Комментарий",8,O),a(h,{id:`stage-description-${s}`,modelValue:o.description,"onUpdate:modelValue":u=>o.description=u,style:{borderRadius:"var(--element-radius)",width:"100%"},rows:"5"},null,8,["id","modelValue","onUpdate:modelValue"])]),a(l,{class:"interview__stage__delete-button",icon:"pi pi-times",label:"Удалить этап",severity:"danger",onClick:u=>r(t).removeStage(s)},null,8,["onClick"])]))),128)):b("",!0),n("div",J,[n("div",K,[a(_,{id:"interviewResult1",modelValue:r(t).currentInterview.result,"onUpdate:modelValue":e[8]||(e[8]=o=>r(t).currentInterview.result=o),style:{"--p-radiobutton-checked-background":"var(--refusal-color)","--p-radiobutton-checked-hover-background":"var(--refusal-color)","--p-radiobutton-checked-hover-border-color":"var(--refusal-color)"},name:"result",value:"Refusal"},null,8,["modelValue"]),e[11]||(e[11]=n("label",{class:"interview__stage__radio-container-item-label",for:"interviewResult1"},"Отказ",-1))]),n("div",Q,[a(_,{id:"interviewResult2",modelValue:r(t).currentInterview.result,"onUpdate:modelValue":e[9]||(e[9]=o=>r(t).currentInterview.result=o),style:{"--p-radiobutton-checked-background":"var(--offer-color)","--p-radiobutton-checked-hover-background":"var(--offer-color)","--p-radiobutton-checked-hover-border-color":"var(--offer-color)"},name:"result",value:"Offer"},null,8,["modelValue"]),e[12]||(e[12]=n("label",{class:"interview__stage__radio-container-item-label",for:"interviewResult2"},"Оффер",-1))]),n("div",X,[a(_,{id:"interviewResult3",modelValue:r(t).currentInterview.result,"onUpdate:modelValue":e[10]||(e[10]=o=>r(t).currentInterview.result=o),style:{"--p-radiobutton-checked-background":"var(--inProgress-color)","--p-radiobutton-checked-hover-background":"var(--inProgress-color)","--p-radiobutton-checked-hover-border-color":"var(--inProgress-color)"},checked:"",name:"result",value:"inProgress"},null,8,["modelValue"]),e[13]||(e[13]=n("label",{class:"interview__stage__radio-container-item-label",for:"interviewResult3"},"Ожидание",-1))])]),a(l,{class:"interview__stage__save-button",icon:"pi pi-save",label:"Сохранить",onClick:U})]),_:1})])):b("",!0)],64)}}}),re=j(Y,[["__scopeId","data-v-7b941b6a"]]);export{re as default};