<template>
  <header
    class="absolute top-0 left-0 right-0 z-[9999] py-4 border border-w-900 border-opacity-[8%] bg-opacity-5 backdrop-blur-lg bg-w-900"
  >
    <div class="container px-5 mx-auto xl:px-0">
      <div class="hidden justify-between items-center md:flex">
        <router-link to="//" class="flex gap-2 justify-start items-center">
          <img src="/img/logo.svg" alt="logo" />
          <span class="text-xl font-medium text-w-900">Neurolinx</span>
        </router-link>
        <nav>
          <ul class="flex justify-center items-center md:gap-4 lg:gap-8">
            <li class="relative group">
              <router-link
                to="/"
                class="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                >home</router-link
              >
            </li>
            <li class="relative group">
              <router-link
                to="/solution"
                class="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                >solutions</router-link
              >
            </li>
            <li class="relative cursor-pointer nav-item group">
              <router-link
                to="/#"
                class="flex gap-2 items-center text-sm font-semibold capitalize transition-all duration-300 text-w-100"
              >
                resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="transition-transform duration-300 transform down-svg group-hover:rotate-180"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </router-link>
              <!-- Resources Mega Menu -->
              <div
                class="absolute left-1/2 transform -translate-x-1/2 hidden mt-9 w-[630px] rounded-lg shadow-lg bg-b-700 border border-b-500 group-hover:flex top-full"
              >
                <div class="flex w-full h-full">
                  <!-- Left Section -->
                  <div class="p-6 w-1/2 border-r border-b-500">
                    <h2 class="text-xl font-medium text-w-500">Resources</h2>
                    <p class="mt-2 text-sm text-w-100">
                      AI-Powered theme personalization resources for tech
                      agencies.
                    </p>
                  </div>
                  <!-- Right Section -->
                  <div class="p-6 w-1/2">
                    <router-link to="/blog">
                      <div
                        class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                      >
                        <div>
                          <img src="/img/blog-menu.svg" alt="" />
                        </div>
                        <div class="flex flex-col">
                          <h3 class="text-sm font-medium text-w-500">Blog</h3>
                          <span>
                            <p
                              class="text-xs font-normal whitespace-nowrap text-w-100"
                            >
                              Resources for tech agencies.
                            </p>
                          </span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="/caseStudies">
                      <div
                        class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                      >
                        <div>
                          <img src="/img/case-studies-menu.svg" alt="" />
                        </div>
                        <div class="flex flex-col">
                          <h3 class="text-sm font-medium text-w-500">
                            Case Studies
                          </h3>
                          <span>
                            <p
                              class="text-xs font-normal whitespace-nowrap text-w-100"
                            >
                              Explore detailed case studies.
                            </p>
                          </span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="/Document">
                      <div
                        class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                      >
                        <div>
                          <img src="/img/documentation-menu.svg" alt="" />
                        </div>
                        <div class="flex flex-col">
                          <h3 class="text-sm font-medium text-w-500">
                            Documentation
                          </h3>
                          <span>
                            <p
                              class="text-xs font-normal whitespace-nowrap text-w-100"
                            >
                              Detailed AI implementation guides.
                            </p>
                          </span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
            <li class="relative cursor-pointer group nav-item">
              <router-link
                to="/#"
                class="flex gap-2 items-center text-sm font-semibold capitalize transition-all duration-300 text-w-100"
              >
                Company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="transition-transform duration-300 transform down-svg group-hover:rotate-180"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </router-link>
              <!-- company Mega Menu -->
              <div
                class="absolute left-1/2 transform -translate-x-1/2 hidden mt-9 w-[630px] rounded-lg shadow-lg bg-b-700 border border-b-500 group-hover:flex top-full"
              >
                <div class="flex w-full h-full">
                  <!-- Left Section -->
                  <div class="p-6 w-1/2 border-r border-b-500">
                    <h2 class="text-xl font-medium text-w-500">Company</h2>
                    <p class="mt-2 text-sm text-w-100">
                      Learn about our mission, team, <br />
                      and values.
                    </p>
                  </div>

                  <!-- Right Section -->
                  <div class="p-6 w-1/2">
                    <router-link to="/OurStory">
                      <div
                        class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                      >
                        <div>
                          <img src="/img/our-story-menu.svg" alt="" />
                        </div>
                        <div class="flex flex-col">
                          <h3 class="text-sm font-medium text-w-500">
                            Our Story
                          </h3>
                          <span>
                            <p
                              class="text-xs font-normal whitespace-nowrap text-w-100"
                            >
                              Discover our journey and evolution.
                            </p>
                          </span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="/OurTeam">
                      <div
                        class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                      >
                        <div>
                          <img src="/img/our-team-menu.svg" alt="" />
                        </div>
                        <div class="flex flex-col">
                          <h3 class="text-sm font-medium text-w-500">
                            Our Team
                          </h3>
                          <span>
                            <p
                              class="text-xs font-normal whitespace-nowrap text-w-100"
                            >
                              Meet our team of tech innovators.
                            </p>
                          </span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="/OurService">
                      <div
                        class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                      >
                        <div>
                          <img src="/img/our-services-menu.svg" alt="" />
                        </div>
                        <div class="flex flex-col">
                          <h3 class="text-sm font-medium text-w-500">
                            Our Services
                          </h3>
                          <span>
                            <p
                              class="text-xs font-normal whitespace-nowrap text-w-100"
                            >
                              Tailored solutions for your needs.
                            </p>
                          </span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="/patent">
                      <div
                        class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                      >
                        <div>
                          <img src="/img/our-patent-menu.svg" alt="" />
                        </div>
                        <div class="flex flex-col">
                          <h3 class="text-sm font-medium text-w-500">
                            Our Patents
                          </h3>
                          <span>
                            <p
                              class="text-xs font-normal whitespace-nowrap text-w-100"
                            >
                              Explore our intellectual portfolio.
                            </p>
                          </span>
                        </div>
                      </div>
                    </router-link>
                    <router-link to="/media">
                      <div
                        class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                      >
                        <div>
                          <img src="/img/media-kit-menu.svg" alt="" />
                        </div>
                        <div class="flex flex-col">
                          <h3 class="text-sm font-medium text-w-500">
                            Media Kit
                          </h3>
                          <span>
                            <p
                              class="text-xs font-normal whitespace-nowrap text-w-100"
                            >
                              Logos and brand guidelines.
                            </p>
                          </span>
                        </div>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <div class="flex gap-2 justify-end items-center">
          <router-link
            to="/sign-in"
            class="inline-block px-4 py-2 text-sm font-medium capitalize bg-transparent rounded-full border border-transparent transition-all duration-300 text-w-900"
            >sign in</router-link
          >
          <router-link
            to="/sign-up"
            class="inline-block px-4 py-2 text-sm font-medium capitalize rounded-full border transition-all duration-300 btn-border bg-gd-secondary hover:bg-transparent text-w-900"
            >sign up</router-link
          >
        </div>
      </div>
    </div>
    <div class="overflow-hidden md:hidden">
      <div
        class="container flex justify-between items-center px-5 mx-auto xl:px-0"
      >
        <router-link to="//" class="flex gap-2">
          <img src="/img/logo.svg" alt="logo" />
          <span class="text-xl font-medium text-w-900">Neurolinx</span>
        </router-link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          @click="toggleMenu()"
          class="inline-block w-6 h-6 cursor-pointer text-w-900"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>

      <div
        id="mobile-menu"
        class="fixed z-[999999] top-0 left-0 flex-col justify-start items-start w-full h-screen p-5 bg-b-600 transition-all duration-300 hidden"
      >
        <nav>
          <ul class="flex flex-col gap-4 justify-start items-start">
            <li>
              <router-link
                to="/"
                class="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                @click="toggleMenu"
                >home</router-link
              >
            </li>
            <li>
              <router-link
                to="/Solution"
                class="inline-block text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                @click="toggleMenu"
                >solutions</router-link
              >
            </li>
            <li>
              <router-link
                to="/#"
                class="flex gap-1 items-center text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                @click="toggleSubMenu('resources')"
                >resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="transition-transform duration-300 transform down-svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </router-link>

              <ul id="resources-menu" class="hidden flex-col gap-2 mt-2">
                <router-link to="/Blog">
                  <div
                    class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                  >
                    <div>
                      <img src="/img/blog-menu.svg" alt="" />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-sm font-medium text-w-500">Blog</h3>
                      <span>
                        <p
                          class="text-xs font-normal whitespace-nowrap text-w-100"
                        >
                          Resources for tech agencies.
                        </p>
                      </span>
                    </div>
                  </div>
                </router-link>
                <router-link to="/CaseStudies">
                  <div
                    class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                  >
                    <div>
                      <img src="/img/case-studies-menu.svg" alt="" />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-sm font-medium text-w-500">
                        Case Studies
                      </h3>
                      <span>
                        <p
                          class="text-xs font-normal whitespace-nowrap text-w-100"
                        >
                          Explore detailed case studies.
                        </p>
                      </span>
                    </div>
                  </div>
                </router-link>
                <router-link to="/Document">
                  <div
                    class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                  >
                    <div>
                      <img src="/img/documentation-menu.svg" alt="" />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-sm font-medium text-w-500">
                        Documentation
                      </h3>
                      <span>
                        <p
                          class="text-xs font-normal whitespace-nowrap text-w-100"
                        >
                          Detailed AI implementation guides.
                        </p>
                      </span>
                    </div>
                  </div>
                </router-link>
              </ul>
            </li>
            <li>
              <router-link
                to="/#"
                class="flex gap-1 items-center text-sm font-semibold capitalize transition-all duration-300 text-w-100 hover:text-w-900"
                @click="toggleSubMenu('company')"
                >company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="transition-transform duration-300 transform down-svg group-hover:rotate-180"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </router-link>
              <ul id="company-menu" class="hidden flex-col gap-2 mt-2">
                <router-link to="/OurStory">
                  <div
                    class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                  >
                    <div>
                      <img src="/img/our-story-menu.svg" alt="" />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-sm font-medium text-w-500">Our Story</h3>
                      <span>
                        <p
                          class="text-xs font-normal whitespace-nowrap text-w-100"
                        >
                          Discover our journey and evolution.
                        </p>
                      </span>
                    </div>
                  </div>
                </router-link>
                <router-link to="/OurTeam">
                  <div
                    class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                  >
                    <div>
                      <img src="/img/our-team-menu.svg" alt="" />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-sm font-medium text-w-500">Our Team</h3>
                      <span>
                        <p
                          class="text-xs font-normal whitespace-nowrap text-w-100"
                        >
                          Meet our team of tech innovators.
                        </p>
                      </span>
                    </div>
                  </div>
                </router-link>
                <router-link to="/OurService">
                  <div
                    class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                  >
                    <div>
                      <img src="/img/our-services-menu.svg" alt="" />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-sm font-medium text-w-500">
                        Our Services
                      </h3>
                      <span>
                        <p
                          class="text-xs font-normal whitespace-nowrap text-w-100"
                        >
                          Tailored solutions for your needs.
                        </p>
                      </span>
                    </div>
                  </div>
                </router-link>
                <router-link to="/patent">
                  <div
                    class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                  >
                    <div>
                      <img src="/img/our-patent-menu.svg" alt="" />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-sm font-medium text-w-500">
                        Our Patents
                      </h3>
                      <span>
                        <p
                          class="text-xs font-normal whitespace-nowrap text-w-100"
                        >
                          Explore our intellectual portfolio.
                        </p>
                      </span>
                    </div>
                  </div>
                </router-link>
                <router-link to="/media">
                  <div
                    class="flex gap-2 items-center p-1 mb-1 rounded-lg hover:bg-b-500"
                  >
                    <div>
                      <img src="/img/media-kit-menu.svg" alt="" />
                    </div>
                    <div class="flex flex-col">
                      <h3 class="text-sm font-medium text-w-500">Media Kit</h3>
                      <span>
                        <p
                          class="text-xs font-normal whitespace-nowrap text-w-100"
                        >
                          Logos and brand guidelines.
                        </p>
                      </span>
                    </div>
                  </div>
                </router-link>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="flex gap-2 items-center mt-8">
          <router-link
            to="/sign-in"
            class="inline-block px-4 py-2 rounded-full border border-w-500 hover:border-tropical-indigo border-opacity-[8%] capitalize text-sm font-medium bg-transparent hover:bg-gd-secondary text-w-900 transition-all duration-300"
            >sign in</router-link
          >
          <router-link
            to="/sign-up"
            class="inline-block px-4 py-2 rounded-full border border-tropical-indigo hover:border-transparent border-opacity-[8%] capitalize text-sm font-medium bg-gd-secondary hover:bg-transparent text-w-900 transition-all duration-300"
            >sign up</router-link
          >
        </div>
        <svg
          @click="toggleMenu()"
          class="absolute top-5 right-5 cursor-pointer text-w-100"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"
          />
        </svg>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    // Toggle mobile menu visibility
    toggleMenu() {
      const menu = document.getElementById("mobile-menu");
      menu.classList.toggle("hidden");
    },

    // Mega menu for phone: toggle between Resources and Company
    toggleSubMenu(menu) {
      const resourcesMenu = document.getElementById("resources-menu");
      const companyMenu = document.getElementById("company-menu");

      // If "Resources" is clicked
      if (menu === "resources") {
        // Close the company menu if it's open
        if (!companyMenu.classList.contains("hidden")) {
          companyMenu.classList.add("hidden");
          const companyArrow =
            companyMenu.previousElementSibling.querySelector("svg");
          if (companyArrow) {
            companyArrow.classList.remove("rotate-180");
          }
        }
        // Toggle the resources menu
        resourcesMenu.classList.toggle("hidden");
        const resourcesArrow =
          resourcesMenu.previousElementSibling.querySelector("svg");
        if (resourcesArrow) {
          resourcesArrow.classList.toggle("rotate-180");
        }
      }
      // If "Company" is clicked
      else if (menu === "company") {
        // Close the resources menu if it's open
        if (!resourcesMenu.classList.contains("hidden")) {
          resourcesMenu.classList.add("hidden");
          const resourcesArrow =
            resourcesMenu.previousElementSibling.querySelector("svg");
          if (resourcesArrow) {
            resourcesArrow.classList.remove("rotate-180");
          }
        }
        // Toggle the company menu
        companyMenu.classList.toggle("hidden");
        const companyArrow =
          companyMenu.previousElementSibling.querySelector("svg");
        if (companyArrow) {
          companyArrow.classList.toggle("rotate-180");
        }
      }
    },

    // Close the mobile menu when a navigation link is clicked
    hideMenuOnLinkClick() {
      const menu = document.getElementById("mobile-menu");

      // Hide mobile menu after clicking any navigation link
      const navLinks = document.querySelectorAll("router-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.add("hidden");
        });
      });
    },
  },

  // Lifecycle hook to call the hideMenuOnLinkClick when the page loads
  mounted() {
    this.hideMenuOnLinkClick();
  },
};
</script>
