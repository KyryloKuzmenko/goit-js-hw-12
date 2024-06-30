import{a as y,S as g,i as d}from"./assets/vendor-b11e2a50.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function u(r,a=1,e=15){const l="https://pixabay.com/api/",t=new URLSearchParams({key:"44411867-7607aa296582669a38968dfd5",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:e}),o=`${l}?${t}`;try{const s=await y.get(o);if(!s)throw new Error(`HTTP error! Status: ${s.status}`);return await s.data}catch(s){return{error:s.message}}}function f(r){const a=r.map(e=>`<li class="gallery-item"
      <a class="gallery-link" href="${e.largeImageURL}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags} " />
          <div class="image-info">
               <p>LIKES: ${e.likes}</p>
                    <p>VIEWS: ${e.views}</p>
                    <p>COMMENTS: ${e.comments}</p>
                    <p>DOWNLOADS: ${e.downloads}</p>
                </div>
            </a>
            </li>
        `).join("");return L.refresh(),a}const L=new g(".gallery li",{captionsData:"alt",captionDelay:250});function h(){n.loader.classList.remove("hidden")}function p(){n.loader.classList.add("hidden")}function w(){n.loadMoreBtn.classList.remove("is-hidden")}function m(){n.loadMoreBtn.classList.add("is-hidden")}const n={loadMoreBtn:document.querySelector(".js-load-more"),form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let i=1,c=null;n.form.addEventListener("submit",async r=>{if(r.preventDefault(),n.gallery.innerHTML="",h(),m(),i=1,c=r.currentTarget.elements.search.value.trim(),r.target.elements.search.value.trim()==="")return d.warning({title:"warning",message:"Enter a word for the query, please.",position:"topRight",displayMode:"once"});try{const e=await u(c,i);n.gallery.innerHTML=f(e.hits),e.totalHits>15&&w()}catch(e){console.log(e)}finally{r.target.reset(),p()}});n.loadMoreBtn.addEventListener("click",async()=>{i++,h();try{const r=await u(c,i);n.gallery.insertAdjacentHTML("beforeend",f(r.hits));const{height:a}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"});const e=Math.ceil(r.total/15);i===e&&(m(),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.log(r)}finally{p()}});
//# sourceMappingURL=commonHelpers.js.map
