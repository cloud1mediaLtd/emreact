/* empty css                          */
import { e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_BZcuupNA.mjs';
import 'kleur/colors';
import { g as getAbout, $ as $$Container, a as $$Image, u as urlFor, b as $$Layout } from './_slug__BBobfDOt.mjs';
/* empty css                          */

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getAbout();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mb-8" data-astro-cid-kh7btl4r> ${about.mainImage ? renderTemplate`${renderComponent($$result3, "Image", $$Image, { "src": urlFor(about.mainImage).url(), "alt": about.alt || "About Us Image", "width": "800", "height": "400", "class": "object-cover w-full h-48 md:h-96 rounded-lg shadow-lg overflow-hidden", "data-astro-cid-kh7btl4r": true })}` : renderTemplate`<div class="object-cover w-full h-48 md:h-96 rounded-lg shadow-lg overflow-hidden bg-gray-300" data-astro-cid-kh7btl4r> <span class="text-lg text-gray-500" data-astro-cid-kh7btl4r>No image available</span> </div>`} </div> <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl" data-astro-cid-kh7btl4r> <span class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-red-400" data-astro-cid-kh7btl4r>${about.titlePart1}</span> ${about.titlePart2} </h1> <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400" data-astro-cid-kh7btl4r> ${about.subTitle} </p> <p class="my-4 text-lg text-gray-600 dark:text-gray-400" data-astro-cid-kh7btl4r> ${about.excerpt} </p> <h2 class="text-4xl font-extrabold dark:text-white" data-astro-cid-kh7btl4r>About Us</h2> <p class="my-4 text-lg text-gray-600 dark:text-gray-400" data-astro-cid-kh7btl4r> ${about.aboutBody} </p> <h2 class="text-4xl font-extrabold dark:text-white" data-astro-cid-kh7btl4r>Method Statement</h2> <p class="my-4 text-lg text-gray-600 dark:text-gray-400" data-astro-cid-kh7btl4r> ${about.methodBody} </p> <h2 class="text-4xl font-extrabold dark:text-white" data-astro-cid-kh7btl4r>
Environmental statement
</h2> <p class="my-4 text-lg text-gray-600 dark:text-gray-400" data-astro-cid-kh7btl4r> ${about.environmentBody} </p> ` })} ` })} `;
}, "/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/about.astro", void 0);

const $$file = "/Users/anasmahmud/repos/Clients/emreactMain/emreact/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
