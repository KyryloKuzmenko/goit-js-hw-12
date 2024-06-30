import{a as y,S as g,i as d}from"./assets/vendor-b11e2a50.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function u(r,a=1,e=15){const l="https://pixabay.com/api/",t=new URLSearchParams({key:"44411867-7607aa296582669a38968dfd5",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:e}),o=`${l}?${t}`;try{const n=await y.get(o);if(!n)throw new Error(`HTTP error! Status: ${n.status}`);return await n.data}catch(n){return{error:n.message}}}function f(r){const a=r.map(e=>`<li class="gallery-item"
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
        `).join("");s.gallery.innerHTML=a,L.refresh()}const L=new g(".gallery li",{captionsData:"alt",captionDelay:250});function h(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}function w(){s.loadMoreBtn.classList.remove("is-hidden")}function m(){s.loadMoreBtn.classList.add("is-hidden")}const s={loadMoreBtn:document.querySelector(".js-load-more"),form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let i=1,c=null;s.form.addEventListener("submit",async r=>{if(r.preventDefault(),s.gallery.innerHTML="",h(),m(),i=1,c=r.currentTarget.elements.search.value.trim(),r.target.elements.search.value.trim()==="")return d.warning({title:"warning",message:"Enter a word for the query, please.",position:"topRight",displayMode:"once"});try{const e=await u(c,i);s.gallery.innerHTML=f(e.hits),e.totalHits>15&&w()}catch(e){console.log(e)}finally{r.target.reset(),p()}});s.loadMoreBtn.addEventListener("click",async()=>{i++,h();try{const r=await u(c,i);s.gallery.insertAdjacentHTML("beforeend",f(r.hits));const{height:a}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"});const e=Math.ceil(r.total/15);i===e&&(m(),d.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}catch(r){console.log(r)}finally{p()}});
//# sourceMappingURL=commonHelpers.js.map
