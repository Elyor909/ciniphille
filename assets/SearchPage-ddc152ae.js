import{h as _,r as v,b as g,o as s,d,w as y,e as p,f as i,u as f,i as k,t as C,n as S,p as $,q as x,j as V,c as o,v as b,F as w,l as B,m as D,a as F}from"./index-1af602d7.js";const N={alt:"",class:"main__search-content-item-img"},T={class:"main__search-content-item-title"},U={__name:"SearchContent",props:{item:Object},setup(t){const e=t,l=_(()=>e.item.media_type);return(m,u)=>{const n=v("router-link"),h=g("lazy");return s(),d(n,{to:l.value+"/"+t.item.id,class:"main__search-content-item"},{default:y(()=>[p(i("img",N,null,512),[[h,f(k)+t.item.backdrop_path]]),i("h2",T,C(t.item.title||t.item.name),1)]),_:1},8,["to"])}}},j=S("search",{state:()=>({url:"https://api.themoviedb.org/3/search/multi",searchContent:null,searchValue:""}),actions:{async getSearch(t=1){try{let e=await $.get(`${this.url}?api_key=${x}&query=${this.searchValue}&language=ru-RU&page=${t}`);this.searchContent=e.data.results,console.log(this.searchContent)}catch(e){console.error("Ошибка при поиске",e)}}}}),q={class:"main__search"},z={class:"container"},A=["placeholder"],E={key:0,class:"main__search-content"},K={__name:"Search",setup(t){const e=j();let m=((c,r)=>{let a=null;return()=>{a&&clearTimeout(a),a=setTimeout(()=>{c()},r)}})(e.getSearch,500);const u=_({get:()=>e.searchValue,set:c=>{e.searchValue=c,m()}}),n=_(()=>e.searchContent),h=V("Найти фильм, сериал...");return(c,r)=>(s(),o("div",q,[i("div",z,[p(i("input",{type:"text",class:"main__search-input",placeholder:h.value,"onUpdate:modelValue":r[0]||(r[0]=a=>u.value=a)},null,8,A),[[b,u.value]]),n.value?(s(),o("div",E,[(s(!0),o(w,null,B(n.value,a=>(s(),d(U,{key:a.id,item:a},null,8,["item"]))),128))])):D("",!0)])]))}},L={class:"main"},O={__name:"SearchPage",setup(t){return(e,l)=>(s(),o("main",L,[F(K)]))}};export{O as default};
