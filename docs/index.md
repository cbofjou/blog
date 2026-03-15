---
layout: home
title: blog
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
