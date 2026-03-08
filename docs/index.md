---
layout: home
---

<script setup lang="ts">
import { onMounted } from "vue";
import { useData } from "vitepress";
import { readingIcon } from "vitepress-theme-teek"

const { frontmatter } = useData();
onMounted(() => {
  const heroTextDom = document.querySelector<HTMLElement>(".VPHero .text");
  const textDom = document.querySelector<HTMLElement>("#hero-text");

  if (!heroTextDom || !textDom) return;

  while (heroTextDom.lastChild) heroTextDom.lastChild.remove();
  heroTextDom.append(textDom);
});
</script>

<style>
/* :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
} */

/* 彩虹动画 */
/* :root {
  animation: rainbow 12s linear infinite;
} */

.vp-doc #hero-text {
  display: none !important;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.tk-home__content__info {
  position: static;
}
</style>
