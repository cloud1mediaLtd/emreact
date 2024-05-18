/* empty css                          */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_BZcuupNA.mjs';
import 'kleur/colors';
import { f as getServices, $ as $$Container, a as $$Image, u as urlFor, b as $$Layout, h as getHero, v as videoUrl } from './_slug__BBobfDOt.mjs';
/* empty css                          */
import 'clsx';

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getServices();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Em React Services" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> ${posts.map((service, index) => renderTemplate`<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"> <a${addAttribute(`/services/${service.slug.current}`, "href")} class="block"> ${service.mainImage ? renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": urlFor(service.mainImage).url(), "alt": service.alt || "Default image description", "sizes": "(max-width: 800px) 100vw, 800px", "width": 800, "height": 450 })}` : renderTemplate`<div class="relative w-full bg-gray-300 rounded-md overflow-hidden" style="padding-top: 56.25%;"> <span class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-lg text-gray-500">
No image available
</span> </div>`} <div class="py-4 text-center"> <h2 class="text-xl text-gray-700 dark:text-gray-50 font-semibold"> ${service.title} </h2> </div> </a> </div>`)} </ul> ` })} ` })}`;
}, "/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/services/index.astro", void 0);

const $$file$1 = "/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/services/index.astro";
const $$url$1 = "/services";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const hero = await getHero();
  return renderTemplate`${maybeRenderHead()}<section class="" data-astro-cid-bbe6dxrz> <div class="relative bg-gray-800 xl:mt-8 rounded-lg overflow-hidden container" data-astro-cid-bbe6dxrz> <!-- Desktop Video --> <video class="hidden lg:block hero-video absolute inset-0 w-full h-full object-cover z-10"${addAttribute(hero.heroDesktopVideo ? videoUrl(hero.heroDesktopVideo.asset._ref) : void 0, "data-src")} autoplay muted loop playsinline preload="none" data-astro-cid-bbe6dxrz></video> <!-- Mobile Video --> <video class="block lg:hidden hero-video absolute inset-0 w-full h-full object-cover z-10"${addAttribute(hero.heroMobileVideo ? videoUrl(hero.heroMobileVideo.asset._ref) : void 0, "data-src")} autoplay muted loop playsinline preload="none" data-astro-cid-bbe6dxrz></video> <!-- Image fallback or additional content --> ${renderComponent($$result, "Image", $$Image, { "src": hero.mainImage ? urlFor(hero.mainImage).url() : "", "alt": hero.title || "", "class": "absolute inset-0 object-cover w-full h-full bg-center bg-no-repeat bg-cover bg-gray-900 opacity-60 rounded-lg border-gray-200 dark:border-gray-700", "width": 1e3, "height": 600, "width": 1e3, "height": 600, "data-astro-cid-bbe6dxrz": true })} <div class="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 z-20" data-astro-cid-bbe6dxrz> <div id="main" data-astro-cid-bbe6dxrz> <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl" data-astro-cid-bbe6dxrz> ${hero.title} </h1> <p class="mb-8 text-lg font-semibold text-gray-100 lg:text-xl sm:px-16 lg:px-48" data-astro-cid-bbe6dxrz> ${hero.paragraph} </p> <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4" data-astro-cid-bbe6dxrz> <a${addAttribute(hero.linkA, "href")} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-red-800 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80" data-astro-cid-bbe6dxrz>
Get started
<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bbe6dxrz> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-bbe6dxrz></path> </svg> </a> <a${addAttribute(hero.linkB, "href")} class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 shadow-md" data-astro-cid-bbe6dxrz>
Learn more
</a> </div> </div> </div> </div> </section>  `;
}, "/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/components/Hero.astro", void 0);

const $$Multicta = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Flood Response",
      description: "Our Flood Response service offers rapid and comprehensive solutions to minimize water damage in emergencies. Equipped with advanced tools and expert technicians, we ensure a swift return to safety and normalcy for your property.",
      color: "green",
      link: "/services/flood-response",
      span: "span-2"
    },
    {
      title: "Emergency out of hours Property repairs ",
      description: "Available 24/7, our Emergency Property Repairs service is here to address urgent maintenance issues outside of regular business hours. From plumbing to structural damage, we provide quick and efficient repairs to secure your property and peace of mind.",
      color: "purple",
      link: "/services/emergency-out-of-hours-property-repairs"
    },
    {
      title: "Accident and scene Management",
      description: "Our Accident and Scene Management service provides meticulous and prompt response to accidents and emergencies. We coordinate cleanup, repairs, and all necessary logistics to restore order and safety efficiently.",
      color: "purple",
      link: "/services/accident-and-scene-management"
    },
    {
      title: "Storm Response",
      description: "When storms strike, our Storm Response team is ready to help mitigate damage and begin the recovery process. We specialize in assessing storm impact and implementing immediate protective measures to safeguard your property and its occupants.",
      color: "purple",
      link: "/services/storm-response"
    },
    {
      title: "Specialist Cleaning",
      description: "Our Specialist Cleaning service tackles all your commercial and domestic challenges with exceptional precision. From routine office cleaning to meticulous deep-cleans in residential spaces, our trained professionals use the latest techniques and eco-friendly products to ensure a spotless, hygienic environment.",
      color: "purple",
      link: "/services/specialist-cleaning"
    },
    {
      title: "Body fluids / Fire & flood damage cleaning",
      description: "Specializing in the cleanup of hazardous materials such as body fluids, and damage from fire and floods, our team ensures your environment is thoroughly sanitized and restored to safe conditions with professionalism and respect.",
      color: "purple",
      link: "/services/specialist-cleaning"
    }
  ];
  const card2style = "flex flex-col justify-between bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12";
  return renderTemplate`${maybeRenderHead()}<section class=""> <div class="container py-5 lg:py-5"> <div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-5"> <a href="/services" class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"> <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path> </svg>
Services
</a> <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
Fire response
</h1> <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
Our Fire Response team provides immediate, expert assistance following
        fire incidents to prevent further damage and start the restoration
        process. Equipped with advanced firefighting and remediation gear, we
        prioritize safety and efficiency, helping to recover your property and
        reduce the impact of fire-related disasters.
</p> <a href="/services/fire-response" class="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
Read more
<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </a> </div> <div class="grid md:grid-cols-2 gap-5"> ${services.map((service, index) => renderTemplate`<div${addAttribute(`${card2style}`, "class")}> <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"> ${service.title} </h2> <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"> ${service.description}${" "} </p> <a${addAttribute(service.link, "href")} class="text-red-600 dark:text-red-500 hover:underline font-medium text-lg inline-flex justify-end"> <span class="outline outline-2 rounded-full ml-3 p-1"> <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </span> </a> </div>`)} </div> </div> </section>`;
}, "/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/components/multicta.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome | Em React" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-5 px-5"> ${renderComponent($$result2, "Hero", $$Hero, {})} </div> ${renderComponent($$result2, "Multicta", $$Multicta, {})} ` })}`;
}, "/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/index.astro", void 0);

const $$file = "/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
