<template>
  <div class="bg-b-900">
    <footer
      class="pt-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/footer-bg.png')]"
    >
      <div class="container px-5 pb-24 mx-auto xl:px-0">
        <div
          class="flex flex-col items-start justify-between gap-12 lg:flex-row lg:gap-24"
        >
          <div
            class="flex flex-col justify-start items-start gap-8 lg:gap-[112px]"
          >
            <a href="/" class="flex items-center justify-start gap-2"
              ><img src="/img/logo.svg" alt="logo" /><span
                class="text-xl font-medium text-w-900"
                >Neurolinx</span
              ></a
            >
            <div class="flex gap-4">
              <a href="#" class="hover:opacity-80"
                ><img src="/img/icons/facebook.svg" alt="icon"
              /></a>
              <a href="#" class="hover:opacity-80"
                ><img src="/img/icons/instagram.svg" alt="icon"
              /></a>
              <a href="#" class="hover:opacity-80"
                ><img src="/img/icons/x.svg" alt="icon"
              /></a>
              <a href="#" class="hover:opacity-80"
                ><img src="/img/icons/linkedin.svg" alt="icon"
              /></a>
              <a href="#" class="hover:opacity-80"
                ><img src="/img/icons/youtube.svg" alt="icon"
              /></a>
            </div>
          </div>
          <div
            class="flex flex-col items-start justify-start gap-12 lg:flex-row lg:gap-24"
          >
            <div class="flex flex-col items-start justify-start gap-4">
              <h4 class="text-sm font-medium uppercase text-w-500">company</h4>
              <router-link
                to="/"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >homepage</router-link
              >
              <router-link
                to="/contact"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >contact us</router-link
              >
              <router-link
                to="/signin"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >sign in</router-link
              >
              <router-link
                to="/signup"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >sign up</router-link
              >
            </div>
            <div class="flex flex-col items-start justify-start gap-4">
              <h4 class="text-sm font-medium uppercase text-w-500">
                solutions
              </h4>
              <router-link
                to="/solution"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >Advanced prompts</router-link
              >
              <router-link
                to="/document"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >documentation</router-link
              >
              <router-link
                to="/howitwork"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >how it works</router-link
              >
              <router-link
                to="/media"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >media kit</router-link
              >
            </div>
            <div class="flex flex-col items-start justify-start gap-4">
              <h4 class="text-sm font-medium uppercase text-w-500">
                resources
              </h4>
              <router-link
                to="/blog"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >blog</router-link
              >
              <router-link
                to="/blogsingle"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >blog Single</router-link
              >
              <router-link
                to="/casestudies"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >case studies</router-link
              >
              <router-link
                to="/casestudiessingle"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >case studies single</router-link
              >
            </div>
            <div class="flex flex-col items-start justify-start gap-4">
              <h4 class="text-sm font-medium uppercase text-w-500">about us</h4>
              <router-link
                to="/patent"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >Our Patents</router-link
              >
              <router-link
                to="/ourservice"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >Our Services</router-link
              >
              <router-link
                to="/ourstory"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >Our Story</router-link
              >
              <router-link
                to="ourteam"
                class="text-sm font-medium capitalize transition-all duration-300 text-w-100 hover:text-tropical-indigo"
                >Our Team</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="container px-5 pb-6 mx-auto xl:px-0 md:py-6">
        <div
          class="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between md:gap-8"
        >
          <p class="text-xs text-w-100">
            Copyright &copy; 2024 <a href="/">Neurolinx</a>. All rights reserved
          </p>
          <ul class="flex items-center gap-8 md:justify-end">
            <li
              class="text-xs transition-all duration-300 text-w-100 hover:text-tropical-indigo"
            >
              <router-link to="/privacypolicy">Privacy Policy</router-link>
            </li>
            <li
              class="text-xs transition-all duration-300 text-w-100 hover:text-tropical-indigo"
            >
              <router-link to="/terms&service">Terms of Services</router-link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
