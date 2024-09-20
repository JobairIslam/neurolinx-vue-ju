<script setup>
import Hero from '../components/Hero.vue';
import Accordion from '../components/Accordion.vue';
import Getstart from '../components/Getstart.vue';
</script>

<template>
  <div class="bg-b-900">
    <Hero />

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/revolutionize-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <div class="flex flex-col items-center justify-center">
          <h2
            class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Revolutionize Your Business
            <span class="inline-block md:block"></span> with Semantic AI
          </h2>
          <div class="flex flex-col gap-[30px]">
            <div class="flex flex-col lg:flex-row gap-[30px]">
              <div
                class="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
              >
                <h3
                  class="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500"
                >
                  AI Prompt Engine
                </h3>
                <p class="mb-12 text-base text-w-100">
                  Explore our AI Prompt Engine transforming data interaction
                  with precision and speed for unparalleled productivity.
                </p>
                <img
                  src="/img/revolution-card1.png"
                  alt="revolution-card1.png"
                />
              </div>
              <div
                class="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
              >
                <h3
                  class="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500"
                >
                  Smart Search
                </h3>
                <p class="mb-12 text-base text-w-100">
                  Experience precise search results with our semantic earch
                  technology.
                </p>
                <img
                  src="/img/revolution-card2.png"
                  alt="revolution-card2.png"
                />
              </div>
            </div>
            <div class="flex flex-col-reverse lg:flex-row-reverse gap-[30px]">
              <div
                class="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
              >
                <h3
                  class="mb-4 md:leading-[42px] text-3xl md:text-32x font-medium text-w-500"
                >
                  AI Guided Suggestions
                </h3>
                <p class="mb-12 text-base text-w-100">
                  Explore our AI Prompt Engine transforming data interaction
                  with precision and speed for unparalleled productivity.
                </p>
                <img
                  src="/img/revolution-card3.png"
                  alt="revolution-card3.png"
                />
              </div>
              <div
                class="p-8 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
              >
                <h3
                  class="mb-4 md:leading-[42px] text-3xl md:text-32x font-medium text-w-500"
                >
                  AI Profitization
                </h3>
                <p class="mb-12 text-base text-w-100">
                  Experience precise search results with our semantic earch
                  technology.
                </p>
                <img
                  src="/img/revolution-card4.png"
                  alt="revolution-card4.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/video-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <div class="flex flex-col items-center justify-center">
          <h2
            class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Beyond Binary Uniquely
            <span class="inline-block lg:block"></span>Inclusive Prompt
          </h2>
          <div class="relative">
            <img src="/img/video.png" alt="video image demo" class="w-full" />
            <div
              class="absolute flex items-center justify-center w-16 h-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2 play-btn"
              @click="playVideo"
            >
              <img src="/img/icons/play-btn.png" alt="" />
            </div>
            <div v-if="showVideo" class="absolute inset-0 w-full">
              <video
                ref="video"
                src="https://cdn.pixabay.com/video/2023/07/19/172156-846731269_large.mp4"
                class="w-full"
                autoplay
                muted
                controls
                @ended="closeVideo"
              ></video>
              <a href="#" @click.prevent="closeVideo" id="closeBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-circle-fill absolute top-5 right-5 w-[30px] h-[30px] text-w-800"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/revolutionize-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Enhance Product Discovery
          <span class="inline-block lg:block"></span> with Linked Prompts
        </h2>
        <div class="flex flex-col">
          <div class="flex flex-col gap-[30px]">
            <div
              class="flex flex-col-reverse lg:flex-row justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
            >
              <div class="flex flex-col items-start justify-center">
                <h3
                  class="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500"
                >
                  Masters of Data
                  <span class="inline-block lg:block">& Machine Learning</span>
                </h3>
                <p class="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                  Founded in 2016 by experienced data scientists, engineers, and
                  consultants, Neurolinx AI is dedicated to maximizing the
                  business potential of data and AI.
                </p>
                <router-link
                  to="/ourteam"
                  class="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full border-tropical-indigo bg-gd-secondary text-w-900"
                >
                  Meet Our Team
                  <img src="/img/icons/arrow-right.svg" alt="arrow" />
                </router-link>
              </div>
              <div class="rounded-lg">
                <img
                  class="w-full rounded-lg"
                  src="/img/prompts1.png"
                  alt="prompts-img"
                />
              </div>
            </div>
            <div
              class="flex flex-col-reverse lg:flex-row-reverse justify-start lg:justify-between gap-[30px] lg:gap-[126px] p-6 md:p-12 rounded-lg border border-b-600 bg-gd-tertiary"
            >
              <div class="flex flex-col items-start justify-center">
                <h3
                  class="mb-4 md:leading-[42px] text-2xl md:text-32x font-medium text-w-500"
                >
                  Powered by
                  <span class="inline-block lg:block"
                    >Established Technology</span
                  >
                </h3>
                <p class="mb-6 w-full md:max-w-[534px] text-base text-w-100">
                  Neurolinx AI possesses an extensive intellectual property
                  portfolio in AI technology, comprising 32 granted patents and
                  88 patent applications spanning the globe.
                </p>
                <router-link
                  to="/patent"
                  class="flex flex-row items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full border-tropical-indigo bg-gd-secondary text-w-900"
                >
                  Check Our Patents
                  <img src="/img/icons/arrow-right.svg" alt="arrow" />
                </router-link>
              </div>
              <div class="rounded-lg">
                <img
                  class="w-full rounded-lg"
                  src="/img/prompts2.png"
                  alt="prompts-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/updates&media-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <div class="flex flex-col items-center justify-center">
          <h2
            class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
          >
            Updates &amp;
            <span class="block"></span> Media Coverage
          </h2>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
          >
            <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
              <img
                class="w-full rounded-lg"
                src="/img/blog1.png"
                alt="media image"
              />
              <router-link
                to="/blogsingle"
                class="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
              >
                AI Partners with Megazone Cloud to Enhance GenAI Adoption
              </router-link>
              <div class="flex flex-row gap-2">
                <router-link
                  class="inline-block px-4 py-2 text-xs border rounded-full md:text-sm border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                  to="/blog"
                  >Prompt Engineering</router-link
                >
                <router-link
                  class="inline-block px-4 py-2 text-xs border rounded-full md:text-sm border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                  to="/blog"
                  >AI Use Cases</router-link
                >
              </div>
            </div>
            <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
              <img
                class="w-full rounded-lg"
                src="/img/blog2.png"
                alt="media image"
              />
              <router-link
                to="/blogsingle"
                class="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
              >
                AI's Revolutionary Impact Transforming Drama Discovery for Fans
              </router-link>
              <div class="flex flex-row gap-2">
                <router-link
                  class="inline-block px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                  to="/blog"
                  >Streaming</router-link
                >
                <router-link
                  class="inline-block px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                  to="/blog"
                  >AI Search</router-link
                >
              </div>
            </div>
            <div class="p-6 border rounded-lg border-b-600 bg-gd-tertiary">
              <img
                class="w-full rounded-lg"
                src="/img/blog3.png"
                alt="media image"
              />
              <router-link
                to="/blogsingle"
                class="inline-block mt-8 mb-6 text-2xl font-medium transition-all duration-300 text-w-500 hover:text-tropical-indigo"
              >
                Simplified AI Applications Streamlining Complexity for Enhanced
                Utility
              </router-link>
              <div class="flex flex-wrap gap-2">
                <router-link
                  class="inline-block px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                  to="/blog"
                  >AI Automation</router-link
                >
                <router-link
                  class="inline-block px-4 py-2 text-sm border rounded-full border-b-400 text-w-100 bg-b-600 hover:bg-tropical-indigo hover:text-w-900"
                  to="/blog"
                  >Generative AI Use Cases</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Accordion />

    <Getstart />
  </div>
</template>

<script>
export default {
  components: { Accordion },
  data() {
    return {
      showVideo: false,
    };
  },
  methods: {
    playVideo() {
      this.showVideo = true;
      this.$refs.video.play();
    },
    closeVideo() {
      this.showVideo = false;
      const video = this.$refs.video;
      video.pause();
      video.currentTime = 0;
    },
  },
};
</script>
