# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

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

    // Close the mobile menu when a mega menu link is clicked
    hideMenuOnLinkClick() {
      const menu = document.getElementById("mobile-menu");

      // Select all links inside the mega menus (Resources and Company)
      const megaMenuLinks = document.querySelectorAll(
        "#resources-menu a, #company-menu a"
      );

      megaMenuLinks.forEach((link) => {
        link.addEventListener("click", () => {
          menu.classList.add("hidden"); // Hide the mobile menu when clicking a mega menu link
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
