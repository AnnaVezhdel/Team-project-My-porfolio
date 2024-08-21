import{S as l}from"./assets/vendor-103fc070.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="/Team-project-My-porfolio/assets/book-mob-363ce241.jpg",b="/Team-project-My-porfolio/assets/book-mob-2x-3a3a8a58.jpg",a="/Team-project-My-porfolio/assets/book-tab-8fafb134.jpg",d="/Team-project-My-porfolio/assets/book-tab-2x-c5a8dc0f.jpg",f="/Team-project-My-porfolio/assets/pet-mob-c4782cc2.jpg",j="/Team-project-My-porfolio/assets/pet-mob-2x-69a219ab.jpg",p="/Team-project-My-porfolio/assets/pet-tab-55a73814.jpg",u="/Team-project-My-porfolio/assets/pet-tab-2x-fba0e39a.jpg",x="/Team-project-My-porfolio/assets/vocab-mob-b07e478c.jpg",_="/Team-project-My-porfolio/assets/vocab-mob-2x-83464b98.jpg",n="/Team-project-My-porfolio/assets/vocab-tab-1689f0fe.jpg",g="/Team-project-My-porfolio/assets/vocab-tab-2x-bbf727ed.jpg",y=[{mob_1x:m,mob_2x:b,tab_1x:a,tab_2x:d,main:a,description:"ReadJourney"},{mob_1x:f,mob_2x:j,tab_1x:p,tab_2x:u,main:p,description:"PetLove"},{mob_1x:x,mob_2x:_,tab_1x:n,tab_2x:g,main:n,description:"VocabBuilder"}];new l(".swiper-projects",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});const v=document.querySelector(".projects-list");function h(i,t,r,s,e,o){const c=`
    <li class="swiper-slide projects-slide">
    <div class="projects-items">
        <div class="projects-container">
        <ul class="projects-tech">
            <li class="projects-tech-items">
            <p>#react</p>
            </li>
            <li class="projects-tech-items">
            <p>#js</p>
            </li>
            <li class="projects-tech-items">
            <p>#node js</p>
            </li>
            <li class="projects-tech-items">
            <p>#git</p>
            </li>
        </ul>
        <div class="projects-list-text">
            <p>Programming Across<br />Borders: Ideas,<br />Technologies, Innovations</p>
        </div>
        <a class="see-project"
            href="https://github.com/Tormoond/Team-project-JS-My-portfolio-">
            See project</a>
        </div>
        <div class="projects-picture">
        <picture class="projects-picture-item">
            <source
            srcset="
            ${r} 1x,
            ${s} 2x"
            media="(min-width: 768px)"
            />
            <source
            srcset="
            ${i} 1x,
            ${t} 2x"
            media="(max-width: 767px)"
            />
            <img
            class="projects-img"
            src="${e}"
            alt="${o}"
            width="614"
            height="385"
            />
        </picture>
        </div>
    </div>
    </li>
`;v.insertAdjacentHTML("beforeend",c)}y.map(({mob_1x:i,mob_2x:t,tab_1x:r,tab_2x:s,main:e,description:o})=>{h(i,t,r,s,e,o)});
//# sourceMappingURL=commonHelpers.js.map
