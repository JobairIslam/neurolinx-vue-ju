<script setup>
import OurProficient from '../components/OurProficient.vue';
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
          Meet Our Exceptional
          <span class="inline-block lg:block"></span>Team of Data Experts
        </h1>
        <p class="mt-6 text-base text-center md:text-xl text-w-100">
          Harnessing data science for public preference curation facilitating
          discovery<span class="inline-block lg:block"></span>and communication
          for similar tastes.
        </p>
      </div>
    </div>

    <OurProficient />

    <div
      class="py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/accomplishments-bg.png')] Accomplishments"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Accomplishments in Data
          <span class="inline-block lg:block"></span>Science &amp; Engineering
        </h2>
        <div>
          <div
            class="flex flex-col md:flex-row justify-between gap-8 lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
          >
            <div class="flex flex-col items-start justify-between">
              <span
                class="px-4 py-2 border rounded-full border-tropical-indigo text-tropical-indigo"
                >2023</span
              >
              <div>
                <h3 class="mt-8 mb-4 text-2xl font-medium lg:mt-0 text-w-500">
                  #1 Product on Product Hunt
                </h3>
                <p class="text-base text-w-100">
                  Founded in 2016 by experienced data scientists, engineers, and
                  consultants, Neurolinx AI is dedicated to maximizing the
                  business potential of data and AI.
                </p>
              </div>
            </div>
            <img src="/img/accom-card.png" alt="science engineering" />
          </div>
        </div>
      </div>
    </div>

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/milestones-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Milestones and
          <span class="inline-block lg:block"></span>Accomplishments
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
          <div
            class="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
          >
            <div class="inline-block p-6 rounded-full bg-primary btn-border">
              <img src="/img/icons/13.svg" alt="icon" />
            </div>
            <div>
              <h3 class="mb-4 text-xl font-medium text-w-500">
                Cutting-Edge Technology Partner
              </h3>
              <p class="text-sm text-w-100">Amazon Web Services (AWS)</p>
            </div>
          </div>
          <div
            class="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
          >
            <div class="inline-block p-6 rounded-full bg-primary btn-border">
              <img src="/img/icons/14.svg" alt="icon" />
            </div>
            <div>
              <h3 class="mb-4 text-xl font-medium text-w-500">
                Accelerate Co-Sell Collaboration
              </h3>
              <p class="text-sm text-w-100">Amazon Web Service (AWS)</p>
            </div>
          </div>
          <div
            class="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
          >
            <div class="inline-block p-6 rounded-full bg-primary btn-border">
              <img src="/img/icons/15.svg" alt="icon" />
            </div>
            <div>
              <h3 class="mb-4 text-xl font-medium text-w-500">
                Global Best Case Selection
              </h3>
              <p class="text-sm text-w-100">Amazon Web Service (AWS)</p>
            </div>
          </div>
          <div
            class="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
          >
            <div class="inline-block p-6 rounded-full bg-primary btn-border">
              <img src="/img/icons/16.svg" alt="icon" />
            </div>
            <div>
              <h3 class="mb-4 text-xl font-medium text-w-500">
                Most Promising AI Startup
              </h3>
              <p class="text-sm text-w-100">NVIDIA (2019)</p>
            </div>
          </div>
          <div
            class="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
          >
            <div class="inline-block p-6 rounded-full bg-primary btn-border">
              <img src="/img/icons/17.svg" alt="icon" />
            </div>
            <div>
              <h3 class="mb-4 text-xl font-medium text-w-500">
                #1 Best Rated Product
              </h3>
              <p class="text-sm text-w-100">Product Hunt (2023)NVIDIA (2019)</p>
            </div>
          </div>
          <div
            class="flex items-center gap-6 p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
          >
            <div class="inline-block p-6 rounded-full bg-primary btn-border">
              <img src="/img/icons/18.svg" alt="icon" />
            </div>
            <div>
              <h3 class="mb-4 text-xl font-medium text-w-500">
                Registered 32 patents
              </h3>
              <p class="text-sm text-w-100">Plus 88 applications worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/accomplishments-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Join the Neurolinx AI Family
          <span class="inline-block lg:block">Lead AI Innovation</span>
        </h2>
        <div class="flex flex-col gap-6">
          <div
            class="flex flex-col items-start justify-start gap-6 p-6 border rounded-lg md:flex-row md:items-center md:justify-between lg:p-12 border-b-600 bg-gd-tertiary"
          >
            <div>
              <h3 class="mb-2 text-2xl font-medium text-w-500">
                Forward Deployed Software Engineer
              </h3>
              <p class="text-base text-w-100">San Francisco</p>
            </div>
            <a
              href="#"
              class="flex items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent hover:bg-tropical-indigo text-w-900 transition-all duration-300"
              >Apply Now
              <img src="/img/icons/arrow-right.svg" alt="arrow" />
            </a>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-6 p-6 border rounded-lg md:flex-row md:items-center md:justify-between lg:p-12 border-b-600 bg-gd-tertiary"
          >
            <div>
              <h3 class="mb-2 text-2xl font-medium text-w-500">
                Senior AI Infrastructure Engineer
              </h3>
              <p class="text-base text-w-100">San Francisco</p>
            </div>
            <a
              href="#"
              class="flex items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent hover:bg-tropical-indigo text-w-900 transition-all duration-300"
              >Apply Now
              <img src="/img/icons/arrow-right.svg" alt="arrow" />
            </a>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-6 p-6 border rounded-lg md:flex-row md:items-center md:justify-between lg:p-12 border-b-600 bg-gd-tertiary"
          >
            <div>
              <h3 class="mb-2 text-2xl font-medium text-w-500">
                Systems Research Engineer, GPU Programming
              </h3>
              <p class="text-base text-w-100">San Francisco</p>
            </div>
            <a
              href="#"
              class="flex items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent hover:bg-tropical-indigo text-w-900 transition-all duration-300"
              >Apply Now
              <img src="/img/icons/arrow-right.svg" alt="arrow" />
            </a>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-6 p-6 border rounded-lg md:flex-row md:items-center md:justify-between lg:p-12 border-b-600 bg-gd-tertiary"
          >
            <div>
              <h3 class="mb-2 text-2xl font-medium text-w-500">
                Sales Development Representative
              </h3>
              <p class="text-base text-w-100">San Francisco</p>
            </div>
            <a
              href="#"
              class="flex items-center gap-2 px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium bg-transparent hover:bg-tropical-indigo text-w-900 transition-all duration-300"
              >Apply Now
              <img src="/img/icons/arrow-right.svg" alt="arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/supported-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Supported by
          <span class="inline-block lg:block">Remarkable Investors</span>
        </h2>
        <div class="flex flex-col gap-6">
          <div class="flex flex-wrap justify-center items-center gap-[30px]">
            <img src="/img/brand/6.svg" alt="brand" />
            <img src="/img/brand/7.svg" alt="brand" />
            <img src="/img/brand/8.svg" alt="brand" />
            <img src="/img/brand/9.svg" alt="brand" />
          </div>
          <div class="flex flex-wrap justify-center items-center gap-[30px]">
            <img src="/img/brand/10.svg" alt="brand" />
            <img src="/img/brand/11.svg" alt="brand" />
            <img src="/img/brand/12.svg" alt="brand" />
          </div>
          <div class="flex flex-wrap justify-center items-center gap-[30px]">
            <img src="/img/brand/13.svg" alt="brand" />
            <img src="/img/brand/14.svg" alt="brand" />
          </div>
        </div>
      </div>
    </div>

    <Getstart />
  </div>
</template>
