<script setup>
import Getstart from '../components/Getstart.vue';
</script>

<template>
  <div class="font-normal bg-b-900">
    <div
      class="pt-[135px] lg:pt-[164px] pb-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/hero-bgtwo.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <h2
          class="gd-title text-center tracking-[-0.02em] lg:leading-[84px] text-3xl md:text-64x font-semibold"
        >
          Get in Touch with
          <span class="inline-block lg:block">Our Sales Team</span>
        </h2>
        <p class="mt-6 text-base text-center md:text-xl text-w-100">
          Boost productivity and security for every team in your company
          <span class="inline-block md:block"></span>
          with our platform and upgraded support.
        </p>
      </div>
    </div>

    <div
      class="lg:py-24 bg-center bg-no-repeat bg-cover bg-[url('../img/bc/contact-bg.png')]"
    >
      <div class="container px-5 mx-auto xl:px-0">
        <div
          class="flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-[30px]"
        >
          <div class="px-6 md:px-12">
            <h2
              class="gd-title text-left lg:leading-[42px] text-32x font-medium"
            >
              Find Your Perfect Fit <span class="block"></span> with Neurolinx
            </h2>
            <p class="mt-4 mb-12 text-base text-w-100">
              We're here to answer any questions you may have.
            </p>
            <ul class="flex flex-col gap-4 text-base font-medium text-w-900">
              <li class="flex items-start justify-start gap-2">
                <img
                  src="/img/icons/colored-check.svg"
                  alt="icon"
                />Context-rich prompts tailored to your unique data sources.
              </li>
              <li class="flex items-start justify-start gap-2">
                <img src="/img/icons/colored-check.svg" alt="icon" />Boost
                efficiency with upgraded security and support.
              </li>
              <li class="flex items-start justify-start gap-2">
                <img src="/img/icons/colored-check.svg" alt="icon" />Find the
                perfect fit for every team with Neurolinx.
              </li>
            </ul>
            <span class="inline-block mt-12 mb-6 text-base text-w-100"
              >Trusted by Growing Teams</span
            >
            <img src="/img/brand/group.png" alt="" />
          </div>
          <div
            class="p-6 md:p-12 w-full md:max-w-[630px] rounded-lg bg-gd-tertiary border border-b-600"
          >
            <h3 class="mb-6 text-2xl font-medium text-w-500">
              Share About Yourself and Expect
              <span class="inline-block md:block"></span> a Prompt Response
            </h3>
            <form class="flex flex-col gap-3">
              <div class="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="First Name"
                  class="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  class="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                  required
                />
              </div>
              <div class="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  class="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                  required
                />
                <input
                  type=""
                  placeholder="Phone Number"
                  class="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                  required
                />
              </div>
              <div class="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  placeholder="Company Name"
                  class="px-6 py-[14px] w-full outline-none rounded-full border border-b-500 capitalize text-base bg-transparent text-w-900"
                  required
                />
                <div
                  class="px-6 py-[14px] w-full rounded-full border border-b-500 bg-transparent"
                >
                  <select
                    name="Company Size"
                    id="company-size"
                    class="w-full text-base capitalize bg-transparent outline-none text-w-100"
                    required
                  >
                    <option value="company size">Company Size</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                  </select>
                </div>
              </div>
              <textarea
                name="message"
                id="message"
                class="px-6 py-[14px] w-full h-[120px] md:h-[240px] outline-none rounded-3xl border border-b-500 capitalize text-base bg-transparent text-w-900"
                placeholder="Enter your message here"
                required
              ></textarea>
              <div class="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="check"
                  id="check"
                  class="text-base text-w-100"
                  required
                />
                <p class="text-base text-w-100">
                  I agree to Neurolinx's
                  <a
                    href="privacy-policy.html"
                    class="gd-title hover:underline transi"
                    >Privacy Policy</a
                  >
                  and
                  <a
                    href="terms-of-service.html"
                    class="gd-title hover:underline transi"
                    >Terms of Service</a
                  >.
                </p>
              </div>
              <button
                type="submit"
                class="flex justify-center items-center gap-2 mt-6 py-[14px] rounded-full capitalize bg-gd-secondary text-w-900"
              >
                contact sales
                <img src="/img/icons/arrow-right.svg" alt="arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <Getstart />
  </div>
</template>
