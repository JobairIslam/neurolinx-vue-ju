<template>
  <div class="bg-b-900">
    <div
      class="font-normal bg-center bg-no-repeat bg-cover bg-[url('../img/bc/signin-bg.png')]"
    >
      <div class="py-12">
        <div class="container px-5 mx-auto xl:px-0">
          <div
            class="flex flex-col lg:flex-row justify-center items-center gap-[30px] h-full lg:h-screen"
          >
            <div class="w-full lg:max-w-[850px]">
              <a href="/" class="flex items-center justify-start gap-2"
                ><img src="/img/logo.svg" alt="logo" /><span
                  class="text-xl font-medium text-w-900"
                  >Neurolinx</span
                ></a
              >
              <h2
                class="mt-6 lg:mt-12 mb-4 leading-8 md:leading-[42px] text-2xl lg:text-32x font-medium gd-title"
              >
                Unlock AI Potential with
                <span class="inline-block lg:block"></span> Context-Rich Prompts
              </h2>
              <p class="text-base text-w-100">
                Discover the power of AI with our context-rich, non-binary
                <span class="inline-block lg:block"></span> prompts crafted from
                your unique data sources.
              </p>
              <ul class="flex flex-col gap-2 my-6 lg:my-12">
                <li
                  class="flex items-start justify-start gap-2 text-base font-medium text-w-900"
                >
                  <img
                    src="/img/icons/colored-check.svg"
                    alt="check icon"
                  />Personalized recommendations and insights
                </li>
                <li
                  class="flex items-start justify-start gap-2 text-base font-medium text-w-900"
                >
                  <img
                    src="/img/icons/colored-check.svg"
                    alt="check icon"
                  />Enhance user experience and engagement
                </li>
                <li
                  class="flex items-start justify-start gap-2 text-base font-medium text-w-900"
                >
                  <img
                    src="/img/icons/colored-check.svg"
                    alt="check icon"
                  />Engineered from your unique data sources
                </li>
              </ul>
              <p class="mb-6 text-base text-w-100">Trusted by Growing Teams</p>
              <img src="/img/brand/group.png" alt="brand" />
            </div>
            <div
              class="p-6 lg:p-12 rounded-lg w-full md:max-w-[410px] bg-gd-tertiary"
            >
              <a href="/"><img src="/img/sign-logo.svg" alt="brand logo" /></a>
              <h3 class="mt-6 mb-2 text-2xl font-medium capitalize text-w-500">
                Sign Up for free
              </h3>
              <span class="text-base text-w-100"
                >Complete the form to start</span
              >
              <a
                href="#"
                class="flex justify-center items-center gap-2 my-6 py-[14px] px-6 rounded-full border border-b-500 w-full text-w-900"
                ><img src="/img/icons/g.svg" alt="google icon" /> Sign Up with
                Google</a
              >
              <div
                class="flex justify-center items-center gap-2 py-[14px] px-6"
              >
                <span class="inline-block w-full h-[1px] bg-b-500"></span>
                <span class="inline-block text-xs capitalize text-w-500"
                  >OR</span
                >
                <span class="inline-block w-full h-[1px] bg-b-500"></span>
              </div>
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  class="mt-6 mb-3 py-[14px] px-6 rounded-full border border-b-500 w-full outline-none capitalize text-left text-b-100 bg-transparent"
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  class="mb-3 py-[14px] px-6 rounded-full border border-b-500 w-full outline-none capitalize text-left text-b-100 bg-transparent"
                  required
                />
                <p class="text-sm text-w-100">At least 8 character long</p>
                <button
                  class="flex justify-center items-center gap-2 mt-6 mb-3 py-[14px] px-6 rounded-full w-full text-base font-medium text-w-900 bg-gd-secondary"
                >
                  Create an Account
                  <img src="/img/icons/arrow-right.svg" alt="arrow" />
                </button>
                <h4 class="text-sm text-w-100">
                  Already have an account&quest;
                  <router-link
                    to="/signin"
                    class="underline capitalize gd-title"
                    >sign in</router-link
                  >
                </h4>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
