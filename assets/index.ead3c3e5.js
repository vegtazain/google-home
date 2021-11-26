import{j as m,r as l,R as d,a as h}from"./vendor.f960484e.js";const u=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}};u();const e=m.exports.jsx,n=m.exports.jsxs,p=s=>n("div",{className:"box newsImage mx-auto",children:[e("h1",{className:"title",children:s.title}),e("img",{src:s.url,className:"newsImage",alt:s.url}),e("blockquote",{children:s.content}),n("b",{children:["__",s.author]}),e("hr",{}),e("a",{href:s.original,target:"_blank",children:s.original})]}),g=()=>e("div",{className:"appfooter box my-3",children:"all \xA9 copyrights reserved to apfree"});function f(){const[s,o]=l.exports.useState({}),[r,a]=l.exports.useState([]);return l.exports.useEffect(()=>{fetch("https://api.weatherapi.com/v1/current.json?key=24072aec580f4b32886203914212511&q=Delhi").then(t=>t.json()).then(t=>{o(t.current)}),fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=a555d4b48d4a4ce49d38dfbc151bc7a9").then(t=>t.json()).then(t=>{let i=[];for(let c=0;c<10;c++)i.push(e(p,{title:t.articles[c].title,author:t.articles[c].author,original:t.articles[c].url,url:t.articles[c].urlToImage,content:t.articles[c].content},t.articles[c].title));a(i),console.log(i)})},[]),console.log(r),n("div",{className:"App",children:[n("div",{className:"box",children:[e("br",{}),n("form",{className:"is-flex nav",method:"GET",action:"https://www.google.com/search",children:[e("br",{}),e("img",{className:"icon is-medium google-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",alt:"google logo"}),e("input",{className:"input is-rounded px-6",name:"q",placeholder:"search...",type:"text"}),e("img",{src:"https://cdn.iconscout.com/icon/free/png-256/search-1754133-1493246.png",alt:"search icon",className:"search-btn icon m-5"})]}),e("br",{}),n("div",{className:"is-flex is-justify-content-center",children:[e("a",{className:"button py-5 mx-1 is-dark is-inverted ",href:"https://www.instagram.com/",children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/174/174855.png",alt:"instagram",className:"icon m-1"})}),e("a",{className:"button py-5 mx-1  is-dark is-inverted ",href:"https://www.twitter.com/",children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/124/124021.png",alt:"twitter",className:" icon m-1"})}),e("a",{className:"button py-5 mx-1 is-dark is-inverted ",href:"https://www.facebook.com/",children:e("img",{src:"https://cdn.icon-icons.com/icons2/2108/PNG/512/facebook_icon_130940.png",alt:"facebook",className:" icon m-1"})}),e("a",{className:"button py-5 mx-1 is-dark is-inverted ",href:"https://www.youtube.com/",children:e("img",{src:"https://cdn-icons-png.flaticon.com/512/1384/1384060.png",alt:"youtube",className:"icon m-1"})}),e("a",{className:"button py-5 mx-1 is-dark is-inverted ",href:"https://stackoverflow.com",children:e("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/1200px-Stack_Overflow_icon.svg.png",alt:"stackoverflow",className:"icon m-1"})})]})]}),n("div",{className:"weather is-flex is-justify-content-center ",children:[e("div",{className:"day-or-not box mx-1 is-flex is-align-items-center",children:s.is_day?e("div",{className:"day",children:e("img",{className:"icon ",src:"https://cdn4.iconfinder.com/data/icons/sun-11/50/44-512.png",alt:"sun"})}):e("div",{className:"night",children:e("img",{className:"icon",src:"https://www.pngkit.com/png/full/49-493272_moon-icon-icon-sign-symbol-png-and-vector.png",alt:"moon"})})}),n("div",{className:"temp is-flex box mx-1 is-align-items-center",children:[e("big",{children:s.temp_c<10?e("div",{children:"\u{1F976}"}):s.temp_c<28?e("div",{children:"\u{1F607}"}):e("div",{children:"\u{1F975}"})}),e("span",{className:"celsius",children:n("big",{children:[s.temp_c," ",e("sup",{children:"\xB0"})]})})]}),n("div",{className:"gust box is-flex mx-1 is-align-items-center",children:[e("img",{className:"icon",src:"https://cdn.iconscout.com/icon/free/png-256/wind-1405127-1187428.png",alt:""}),n("span",{className:"mx-1",children:[s.gust_kph," kmph "]}),e("div",{className:"button is-primary ",children:s.wind_dir})]}),e("div",{className:"cloud-or-not box mx-1 is-flex is-align-items-center",children:s.cloud?n("button",{className:"button is-info is-outlined is-rounded",children:[e("img",{className:"icon",src:"https://cdn-icons-png.flaticon.com/512/164/164806.png",alt:"cloud"}),e("b",{className:"ml-3 button is-info is-rounded",children:"clear"})]}):n("button",{className:"button is-info  is-rounded",children:[e("img",{className:"icon",src:"https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-21.jpg",alt:"clear"}),e("b",{className:"ml-3 button is-warning has-text-info is-rounded",children:"clear"})]})}),e("br",{})]}),e("div",{className:"news",children:r}),e(g,{})]})}d.render(e(h.StrictMode,{children:e(f,{})}),document.getElementById("root"));
