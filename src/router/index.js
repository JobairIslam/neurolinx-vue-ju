import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SolutionView from '../views/SolutionView.vue';
import HowWorkView from '../views/HowWorkView.vue';
import OurStoryView from '../views/OurStoryView.vue';
import OurTeamView from '../views/OurTeamView.vue';
import OurServiceView from '../views/OurServiceView.vue';
import MediaKitView from '../views/MediaKitView.vue';
import OurPatentsView from '../views/OurPatentsView.vue';
import DocumentView from '../views/DocumentView.vue';
import BlogView from '../views/BlogView.vue';
import BlogSingleView from '../views/BlogSingleView.vue';
import CaseStudiesView from '../views/CaseStudiesView.vue';
import CaseStudiesSingleView from '../views/CaseStudiesSingleView.vue';
import ContactView from '../views/ContactView.vue';
import TermsServiceView from '../views/TermsServiceView.vue';
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue';
import SignInView from '../views/SignInView.vue';
import SignUpView from '../views/SignUpView.vue';
import ErrorView from '../views/ErrorView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/solution',
      name: 'solution',
      component: SolutionView,
    },
    {
      path: '/howitwork',
      name: 'howitwork',
      component: HowWorkView,
    },
    {
      path: '/ourstory',
      name: 'ourstory',
      component: OurStoryView,
    },
    {
      path: '/ourteam',
      name: 'ourteam',
      component: OurTeamView,
    },
    {
      path: '/ourservice',
      name: 'ourservice',
      component: OurServiceView,
    },
    {
      path: '/media',
      name: 'media',
      component: MediaKitView,
    },
    {
      path: '/patent',
      name: 'patent',
      component: OurPatentsView,
    },
    {
      path: '/document',
      name: 'document',
      component: DocumentView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blogsingle',
      name: 'blogsingle',
      component: BlogSingleView,
    },
    {
      path: '/casestudies',
      name: 'casestudies',
      component: CaseStudiesView,
    },
    {
      path: '/casestudiessingle',
      name: 'casestudiessingle',
      component: CaseStudiesSingleView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/terms&service',
      name: 'terms&service',
      component: TermsServiceView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: PrivacyPolicyView,
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all route for undefined paths
      name: 'error',
      component: ErrorView,
    },
  ],
});

export default router;
