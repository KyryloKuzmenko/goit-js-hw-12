import{a as g,S as L,i as d}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function u(r,t=1,s=15){const l="https://pixabay.com/api/",e=new URLSearchParams({key:"44411867-7607aa296582669a38968dfd5",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}),o=`${l}?${e}`;try{const a=await g.get(o);if(!a)throw new Error(`HTTP error! Status: ${a.status}`);return await a.data}catch(a){return{error:a.message}}}function f(r){return r.map(t=>`<li class="gallery-item"
      <a class="gallery-link" href="${t.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags} " />
          <div class="image-info">
               <p>LIKES: ${t.likes}</p>
                    <p>VIEWS: ${t.views}</p>
                    <p>COMMENTS: ${t.comments}</p>
                    <p>DOWNLOADS: ${t.downloads}</p>
                </div>
            </a>
            </li>
        `).join("")}const n={loadMoreBtn:document.querySelector(".js-load-more"),form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};function h(){n.loader.classList.remove("hidden")}function m(){n.loader.classList.add("hidden")}function w(){n.loadMoreBtn.classList.remove("is-hidden")}function p(){n.loadMoreBtn.classList.add("is-hidden")}const y=new L(".gallery li",{captionsData:"alt",captionDelay:250});let i=1,c=null;n.form.addEventListener("submit",async r=>{if(r.preventDefault(),n.gallery.innerHTML="",h(),p(),i=1,c=r.currentTarget.elements.search.value.trim(),r.target.elements.search.value.trim()==="")return d.warning({title:"warning",message:"Enter a word for the query, please.",position:"topRight",displayMode:"once"});try{const s=await u(c,i);n.gallery.innerHTML=f(s.hits),y.refresh(),s.totalHits>15&&w()}catch(s){console.log(s)}finally{r.target.reset(),m()}});n.loadMoreBtn.addEventListener("click",async()=>{i++,h();try{const r=await u(c,i);n.gallery.insertAdjacentHTML("beforeend",f(r.hits)),y.refresh();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"});const s=Math.ceil(r.total/15);i===s&&(p(),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.log(r)}finally{m()}});
//# sourceMappingURL=commonHelpers.js.map
