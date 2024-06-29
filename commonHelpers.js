import{a as c,S as d,i as l}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function u(a,o=1,t=15){const n="https://pixabay.com/api/",e=new URLSearchParams({key:"44411867-7607aa296582669a38968dfd5",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:t}),r=`${n}?${e}`;try{const s=await c.get(r);if(!s)throw new Error(`HTTP error! Status: ${s.status}`);return await s.data}catch(s){return{error:s.message}}}function f(a){const o=a.map(t=>`<li class="gallery-item"
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
        `).join("");i.gallery.innerHTML=o,p.refresh()}const p=new d(".gallery li",{captionsData:"alt",captionDelay:250});function m(){i.loader.classList.remove("hidden")}function h(){i.loader.classList.add("hidden")}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",a=>{i.gallery.innerHTML="",a.preventDefault();const o=a.target.elements.search.value.trim();if(o==="")return l.warning({title:"warning",message:"Enter a word for the query, please.",position:"topRight",displayMode:"once"});m(),u(o).then(t=>{t.hits.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",displayMode:"once"}),f(t.hits)}).catch(()=>{}).finally(()=>{h(),i.form.reset()})});
//# sourceMappingURL=commonHelpers.js.map
