<template>
  <div
    class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/ourproficient-bg.png')]"
  >
    <div class="container px-5 mx-auto xl:px-0">
      <h2
        class="gd-title mb-16 text-center tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold"
      >
        Our Proficient
        <span class="inline-block lg:block"></span>Business Team
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="flex flex-col gap-12 p-12 border rounded-lg lg:flex-row border-b-600 bg-gd-tertiary"
        >
          <img :src="member.imgSrc" class="rounded-lg" :alt="member.name" />
          <div
            class="flex flex-col items-start justify-start md:justify-center"
          >
            <h3 class="text-2xl font-medium text-w-500">{{ member.name }}</h3>
            <p class="mt-2 text-base text-w-100">{{ member.position }}</p>
            <div class="flex flex-row gap-4 mt-6 mb-12">
              <a v-if="member.linkedin" :href="member.linkedin">
                <img src="/img/icons/linkedin.svg" alt="linkedin" />
              </a>
              <a v-if="member.twitter" :href="member.twitter">
                <img src="/img/icons/x.svg" alt="twitter" />
              </a>
            </div>
            <ul class="list-disc ms-5">
              <li
                v-for="(detail, index) in member.details"
                :key="index"
                class="text-base text-w-100"
              >
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        {
          name: 'Wade Warren',
          position: 'Founder & CEO',
          imgSrc: '/img/team1.jpg',
          linkedin: 'https://www.linkedin.com/feed/',
          twitter: 'https://x.com/home?lang=en',
          details: [
            'Digital Strategist',
            'Chief Digital Officer',
            'Corporate Restructuring',
          ],
        },
        {
          name: 'Theresa Webb',
          position: 'Data-SCM',
          imgSrc: '/img/team2.jpg',
          linkedin: 'https://www.linkedin.com/feed/',
          twitter: 'https://x.com/home?lang=en',
          details: [
            'Head of Big Data Center',
            'Strategy Head',
            'External Specialist',
          ],
        },
        {
          name: 'Jane Cooper',
          position: 'IPR Management',
          imgSrc: '/img/team3.jpg',
          linkedin: 'https://www.linkedin.com/feed/',
          twitter: 'https://x.com/home?lang=en',
          details: [
            'Patent Attorney',
            'Search Engine Specialist',
            'Caltech Graduate',
          ],
        },
        {
          name: 'Guy Hawkins',
          position: 'Product Management',
          imgSrc: '/img/team4.jpg',
          linkedin: 'https://www.linkedin.com/feed/',
          twitter: 'https://x.com/home?lang=en',
          details: ['Sales Director', 'Brand Manager', 'Product Manager'],
        },
        {
          name: 'Ralph Edwards',
          position: 'PR/MKT Lead',
          imgSrc: '/img/team5.jpg',
          linkedin: 'https://www.linkedin.com/feed/',
          twitter: 'https://x.com/home?lang=en',
          details: [
            'PR Specialist, Apple',
            'PR Consultant, eBay',
            'PR Consultant, IBM',
          ],
        },
        {
          name: 'Jenny Wilson',
          position: 'Finance Lead',
          imgSrc: '/img/team6.jpg',
          linkedin: 'https://www.linkedin.com/feed/',
          twitter: 'https://x.com/home?lang=en',
          details: [
            'CFO, MasterCard',
            'Lead, Bank of America',
            'Analyst, S&P 500',
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
