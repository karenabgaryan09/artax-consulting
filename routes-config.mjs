const Home = {
  path: '/',
  component: () => import('./src/pages/home/Home.js')
};

const PrivacyPolicy = {
  path: '/privacy-policy',
  component: () => import('./src/pages/privacy-policy/PrivacyPolicy.js')
};

const Calculators = {
  path: '/calculators',
  component: () => import('./src/pages/calculators/Calculators.js')
};

const ReductionConsultants = {
  path: '/cost-reduction-consultants',
  component: () => import('./src/pages/reduction-consultants/ReductionConsultants.js')
};

const Schedule = {
  path: '/schedule-a-call',
  component: () => import('./src/pages/schedule/Schedule.js')
};

const TestPage = {
  path: '/business-glossary/:slug',
  component: () => import('./src/pages/business-glossary/TestPage.js')
};

const routes = [
  Home,
  PrivacyPolicy,
  Calculators,
  ReductionConsultants,
  Schedule,
  TestPage,
  // ... other routes
];

export default routes;