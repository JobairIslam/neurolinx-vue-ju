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
          Patents Registered
          <span class="inline-block lg:block"></span>by Neurolinx
        </h1>
        <p class="mt-6 text-base text-center md:text-xl text-w-100">
          Neurolinx holds a strong global patent portfolio covering AI search
          solutions,
          <span class="inline-block lg:block"></span>AI recommendation
          solutions, and live-updated AI content.
        </p>
      </div>
    </div>

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/global-patent-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
        >
          Global Patent
          <span class="block"></span>Portfolios
        </h2>
        <div class="p-6 rounded-lg md:p-12 bg-gd-tertiary">
          <h3 class="mb-6 text-xl font-medium md:mb-12 md:text-2xl text-w-500">
            Patents {{ totalPatents }} &amp; Patent Applications
            {{ totalApplications }} across the world.
          </h3>
          <img src="/img/patent-graph.png" alt="patent-graph" />
        </div>
        <div class="flex justify-center gap-3 mt-16 mb-12">
          <button
            @click="filterCards('patents')"
            class="px-6 py-[14px] rounded-full border text-base font-medium text-w-100 bg-transparent border-tropical-indigo"
          >
            Patents
          </button>
          <button
            @click="filterCards('applications')"
            :class="buttonClass('applications')"
          >
            Patent Applications
          </button>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
          id="cards-grid"
        >
          <div
            v-for="(patent, index) in filteredCards"
            :key="index"
            class="p-6 border rounded-lg md:p-12 border-b-600 bg-gd-tertiary"
          >
            <div class="flex items-center justify-between">
              <span class="text-5xl font-semibold gd-title">{{
                patent.number
              }}</span>
              <div
                v-if="patent.type === 'patents'"
                class="p-4 border rounded-full border-tropical-indigo bg-gd-secondary"
              >
                <img src="/img/icons/check-rounded.svg" alt="check rounded" />
              </div>
            </div>
            <h3 class="mt-12 mb-4 text-2xl font-medium text-w-500">
              {{ patent.title }}
            </h3>
            <p class="text-base text-w-100">{{ patent.description }}</p>
          </div>
        </div>
        <div class="flex items-center justify-center mt-6 md:mt-12">
          <button
            v-if="activeFilter !== 'applications'"
            @click="loadMore"
            class="px-6 py-[14px] rounded-full border border-tropical-indigo text-base font-medium text-w-900 bg-gd-secondary"
            :class="{ 'cursor-not-allowed opacity-50': noMoreCards }"
            :disabled="noMoreCards"
          >
            {{ noMoreCards ? 'No more cards to load' : 'Load More' }}
          </button>
        </div>
      </div>
    </div>

    <Getstart />
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPatents: 32,
      totalApplications: 88,
      loadedCards: 9, // Initial number of loaded cards
      maxCards: 18,
      activeFilter: 'all', // Can be 'all', 'patents', or 'applications'
      patents: [
        {
          number: '01',
          title: 'Patent No. 22-232002',
          description:
            'The invention enables users to search using emoticons within a chat interface and share search results with chat partners.',
          type: 'patents',
        },
        {
          number: '02',
          title: 'Patent No. 22-255690',
          description:
            'System and method for object search based on color sentiment, using an integrated color and emotion data model.',
          type: 'patents',
        },
        {
          number: '03',
          title: 'Patent No. 21-2806896',
          description:
            'Search system preferences based on a chosen field, allowing search using both objective and subjective properties.',
          type: 'patents',
        },
        {
          number: '04',
          title: 'Patent No. 21-2918378',
          description:
            'Search service using emoticons with a user terminal and search server, enabling search result display and sharing within the chat window.',
          type: 'patents',
        },
        {
          number: '05',
          title: 'Patent No. 21-2030415',
          description:
            'Search system using object properties, employing an algorithm to extract and suggest keywords, completing sentences based on user preferences.',
          type: 'patents',
        },
        {
          number: '06',
          title: 'Patent No. 21-2057089',
          description:
            'Color-sensitive object search system utilizing an integrated color and emotion data attribute model algorithm.',
          type: 'patents',
        },
        {
          number: '07',
          title: 'Patent No. 21-2066031',
          description:
            'Search method using property language automatically generates keywords by analyzing co-occurring words.',
          type: 'patents',
        },
        {
          number: '08',
          title: 'Patent No. 21-3229725',
          description:
            'Enables displaying search results in the chat window using graphical objects and sharing the search interface with chat partners.',
          type: 'patents',
        },
        {
          number: '09',
          title: 'Patent No. 21-3241256',
          description:
            'User terminal and retrieval server allow emoticon-based search, displaying results in chat and enabling interface sharing.',
          type: 'patents',
        },
        {
          number: '10',
          title: 'Patent No. 21-3295073',
          description:
            'Voice input system and method provide relevant information based on voice inputs, improving user interaction.',
          type: 'patents',
        },
        {
          number: '11',
          title: 'Patent No. 21-3206797',
          description:
            'Recommend items based on locations using Neurolinx, enhancing personalized suggestions for hotels and more.',
          type: 'patents',
        },
        {
          number: '12',
          title: 'Patent No. 21-3337853',
          description:
            'Algorithm automatically builds Neurolinx by analyzing frequently co-occurring words, enhancing information provision.',
          type: 'patents',
        },
        // Add more patent objects if needed
      ],
      applications: [
        {
          number: '1',
          title: 'Patent Application No. 21-4000001',
          description:
            'Innovative method for applying machine learning to enhance search accuracy in document retrieval systems.',
          type: 'applications',
        },
        {
          number: '2',
          title: 'Patent Application No. 21-4000002',
          description:
            'System for integrating augmented reality with e-commerce platforms to improve user experience and engagement.',
          type: 'applications',
        },
        {
          number: '3',
          title: 'Patent Application No. 21-4000003',
          description:
            'Method for improving real-time communication quality in video conferencing applications using AI-based algorithms.',
          type: 'applications',
        },
        {
          number: '4',
          title: 'Patent Application No. 21-4000004',
          description:
            'Advanced technique for data encryption in cloud storage to enhance security and privacy.',
          type: 'applications',
        },
        {
          number: '5',
          title: 'Patent Application No. 21-4000005',
          description:
            'Novel approach to integrating blockchain technology with supply chain management to increase transparency and efficiency.',
          type: 'applications',
        },
        {
          number: '6',
          title: 'Patent Application No. 21-4000006',
          description:
            'System for utilizing IoT devices to monitor and control home energy consumption more effectively.',
          type: 'applications',
        },
      ],
    };
  },
  computed: {
    filteredCards() {
      let allCards = this.patents.concat(this.applications);
      if (this.activeFilter === 'patents') {
        allCards = this.patents;
      } else if (this.activeFilter === 'applications') {
        allCards = this.applications;
      }
      return allCards.slice(0, this.loadedCards);
    },
    noMoreCards() {
      if (this.activeFilter === 'applications') {
        return true;
      }
      return this.loadedCards >= this.maxCards;
    },
  },
  methods: {
    loadMore() {
      this.loadedCards += 3;
    },
    filterCards(type) {
      this.activeFilter = type;
      this.loadedCards = 9; // Reset to show initial 9 cards
    },
    buttonClass(type) {
      return {
        'px-6 py-[14px] rounded-full border text-base font-medium': true,
        'text-w-100 bg-transparent': this.activeFilter !== type,
        'text-tropical-indigo ': this.activeFilter === type,
        'border-tropical-indigo': this.activeFilter === type,
        'border-b-600': this.activeFilter !== type,
      };
    },
  },
};
</script>
