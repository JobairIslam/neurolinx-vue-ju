<script setup>
import Getstart from '../components/Getstart.vue';
</script>
<template>
  <div class="font-normal bg-b-900">
    <div
      class="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h1
          class="gd-title tracking-[-0.02em] text-center text-3xl md:text-4xl lg:text-64x leading-tight md:leading-relaxed lg:leading-[84px] font-semibold"
        >
          Brand
          <span class="inline-block lg:block">and Media Kit</span>
        </h1>
        <p class="mt-6 text-base text-center md:text-xl text-w-100">
          Explore our brand , including official logo files, product
          screenshots,<span class="inline-block lg:block"></span>
          and leadership photos, available for use without individual legal
          agreements.
        </p>
      </div>
    </div>

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/logo-library-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Neurolinx
          <span class="block">Logo Library</span>
        </h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div
            class="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-gd-tertiary"
          >
            <img src="/img/logo-library1.svg" alt="logo library" />
          </div>
          <div
            class="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-w-900"
          >
            <img src="/img/logo-library2.svg" alt="logo library" />
          </div>
          <div
            class="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-b-900"
          >
            <img src="/img/logo-library3.svg" alt="logo library" />
          </div>
          <div
            class="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-gd-tertiary"
          >
            <img src="/img/logo-library4.svg" alt="logo library" />
          </div>
          <div
            class="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-w-900"
          >
            <img src="/img/logo-library5.svg" alt="logo library" />
          </div>
          <div
            class="flex justify-center items-center rounded-lg border border-b-600 w-full h-[350px] md:h-[390px] bg-b-900"
          >
            <img src="/img/logo-library6.svg" alt="logo library" />
          </div>
        </div>
        <h2
          class="gd-title mt-16 mb-12 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Neurolinx
          <span class="block">Colors</span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
          <div
            class="flex justify-center items-center border border-b-600 w-full h-[350px] md:h-[352px] bg-w-900 rounded-lg"
          >
            <p class="font-medium text-32x md:text-64x text-b-900">EEEBFF</p>
          </div>
          <div
            class="flex justify-center items-center border border-b-600 w-full h-[350px] md:h-[352px] bg-b-900 rounded-lg"
          >
            <p class="font-medium text-32x md:text-64x text-w-900">030012</p>
          </div>
          <div
            class="flex justify-center items-center border border-b-600 w-full h-[350px] md:h-[352px] bg-primary rounded-lg"
          >
            <p class="font-medium text-32x md:text-64x text-w-900">7361E5</p>
          </div>
          <div
            class="flex justify-center items-center border border-b-600 w-full h-[350px] md:h-[352px] bg-tropical-indigo rounded-lg"
          >
            <p class="font-medium text-32x md:text-64x text-b-900">9A8DEC</p>
          </div>
        </div>
        <h2
          class="gd-title mt-16 mb-12 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Neurolinx
          <span class="block">Fonts</span>
        </h2>
        <div
          class="flex justify-center items-center border border-b-600 rounded-lg w-full h-[350px] md:h-[450px] lg:h-[648px] bg-b-900"
        >
          <p class="font-medium text-w-900 text-8xl md::text-8xl">Poppins</p>
        </div>
      </div>
    </div>

    <Getstart />
  </div>
</template>
