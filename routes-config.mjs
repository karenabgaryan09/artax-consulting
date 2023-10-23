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

const Masterclass = {
  path: '/consultants/jonathan-poston',
  component: () => import('./src/pages/masterclass/Masterclass.js')
};

const PakistanPharmacyIndustry = {
  path: '/expert-advice/pakistan-pharmacy-industry',
  component: () => import('./src/pages/articles/pakistan-pharmacy-industry/PakistanPharmacyIndustry.js')
};

const BrazilSpaceProgram = {
  path: '/expert-advice/brazil-space-program',
  component: () => import('./src/pages/articles/brazil-space-program/BrazilSpaceProgram.js')
};

const OkrConsulting = {
  path: '/okr-consulting',
  component: () => import('./src/pages/articles/okr-consulting/OkrConsulting.js')
};

const BusinessGlossary = {
  path: '/business-glossary/:slug',
  component: () => import('./src/pages/business-glossary/BusinessGlossary.js')
};
const BusinessPeople = {
  path: '/business-people/:slug',
  component: () => import('./src/pages/business-people/BusinessPeople.js')
};

const routes = [
  Home,
  PrivacyPolicy,
  Calculators,
  ReductionConsultants,
  Schedule,
  Masterclass,
  PakistanPharmacyIndustry,
  BrazilSpaceProgram,
  OkrConsulting,
  BusinessGlossary,
  BusinessPeople
  // ... other routes
];

export default routes;