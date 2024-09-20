<template>
  <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
    <img class="w-full rounded-lg" :src="imageSrc" :alt="imageAlt" />
    <a
      :href="link"
      class="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
    >
      {{ title }}
    </a>
    <div class="flex flex-wrap gap-2">
      <a
        v-for="(category, index) in categories"
        :key="index"
        class="inline-block px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 cursor-pointer hover:bg-tropical-indigo hover:text-w-900"
        :href="categoryLink"
      >
        {{ category }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    imageAlt: String,
    title: String,
    link: String,
    categories: Array,
  },
};
</script>
