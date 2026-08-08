export const LINKS = {
  debatabl: 'https://play.google.com/store/apps/details?id=com.turings.chatter&hl=en_US',
  retailRevamp: 'https://stitch.withgoogle.com/preview/14470469387354206502?node-id=96361b575f2f45d9a64700e9476d3cdf',
  cars24Pdi: 'https://www.cars24.com/pre-delivery-inspection/',
  live17: 'https://play.google.com/store/apps/details?id=com.machipopo.media17&hl=en_US',
};

export const metrics = [
  { tag: 'Ownership', color: 'var(--c2)', value: '7,000+', label: 'PDI orders processed every month', note: 'Owned end to end, live across 3 platforms' },
  { tag: 'Revenue', color: 'var(--c5)', value: '+5%', label: 'Revenue uplift from one refactor', note: 'Vehicle History: errors −30%, conversion +2%' },
  { tag: 'Scale', color: 'var(--c1)', value: '50,000+', label: 'Concurrent connections', note: 'Java Sockets, Redis, heartbeats — load-tested' },
  { tag: 'Leverage', color: 'var(--c4)', value: '−50%', label: 'Dev involvement in config', note: 'Custom CMS, dynamic schemas, 2x faster iteration' },
  { tag: 'AI', color: 'var(--c3)', value: '−60%', label: 'Manual moderation effort', note: 'Speech-to-text and summarisation on OpenAI APIs' },
  { tag: 'Performance', color: 'var(--c2)', value: '10s → 2s', label: 'API response time', note: 'And 5s to sub-second with multithreading' },
];

export const platforms = [
  {
    period: 'CarInfo (Cars24) · 2025 — 2026', color: 'var(--c2)',
    name: 'Pre-Delivery Inspection platform',
    text: 'A multi-tenant inspection platform built in Java/Spring Boot on PostgreSQL and MongoDB, with config-driven pricing, Kafka-driven event flows, AWS Lambda report generation, and an ops dashboard for step-level tracking and manual intervention. Product-side configuration moved into a custom CMS, so pricing, schemas and views ship without engineering.',
    proof: '7,000+ orders/month · 3 platforms · code discrepancy −8% · dev involvement −50%',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Kafka', 'AWS Lambda', 'S3', 'Redis', 'Multi-tenancy'],
    link: LINKS.cars24Pdi,
  },
  {
    period: '17Live · 2022 — 2025', color: 'var(--c3)',
    name: 'Real-time engagement infrastructure',
    text: 'The real-time backend behind chat, poking and voice, architected on Java Sockets with Redis caching and heartbeat mechanisms, load-tested to 50,000+ concurrent connections. Alongside it: REST API performance work, OpenAI-backed speech-to-text and summarisation, and the BigQuery pipeline feeding recommendations.',
    proof: '50,000+ concurrent connections · 10s → 2s API latency · moderation effort −60%',
    tags: ['Java Sockets', 'Spring Boot', 'Redis', 'PostgreSQL', 'BigQuery', 'OpenAI APIs', 'Firebase Auth'],
    link: LINKS.live17,
    links: [
      { label: 'New Product', url: LINKS.debatabl },
      { label: '17Live', url: LINKS.live17 },
    ],
  },
];

export const jobs = [
  {
    company: 'CarInfo (Cars24)', color: 'var(--c1)',
    role: 'Software Developer — Backend', dates: 'Jun 2025 — Apr 2026',
    context: 'Automotive commerce · backend & platform ownership',
    stack: 'Java · Spring Boot · PostgreSQL · MongoDB · Kafka · AWS Lambda · S3 · Redis',
    bullets: [
      { title: 'Owned the PDI launch', text: 'End-to-end Pre-Delivery Inspection service with config-driven pricing and Lambda report generation; 7,000+ orders/month across 3 platforms.' },
      { title: 'Re-architected for multi-tenancy', text: 'Kafka-driven event flows plus an ops dashboard for step-level tracking and intervention; code discrepancy down 8% and fewer ops escalations.' },
      { title: 'Vehicle History optimisation', text: 'PostgreSQL query tuning, pricing in S3 with Redis caching; error rates down 30%, order conversion up 2%, revenue up 5%.' },
      { title: 'Config-driven architecture', text: 'Custom CMS for product-side config with dynamic schemas and flexible views — 50% less dev involvement, 2x faster iteration.' },
      { title: 'API security hardening', text: 'Rate limiting, auth guards and request validation to stop scraping; unauthorised API traffic down 20%.' },
      { title: 'Centralised event tracking', text: 'Unified event-firing SDK for Firebase and Meta with unit tests and reviews across the module; instrumentation bugs down 40%.' },
    ],
  },
  {
    company: '17Live Inc.', color: 'var(--c4)',
    role: 'Software Engineer', dates: 'Sep 2022 — May 2025',
    context: 'Live streaming at consumer scale · real-time systems',
    stack: 'Java Sockets · Spring Boot · PostgreSQL · Redis · BigQuery · OpenAI · Firebase',
    bullets: [
      { title: 'Real-time infrastructure', text: 'Architected the real-time backend with Java Sockets, Redis caching and heartbeats powering chat, poking and voice for 50,000+ concurrent connections.' },
      { title: 'Backend API performance', text: 'Scaled REST APIs in Java/Spring Boot with PostgreSQL — 10s to 2s via SQL optimisation and lazy loading, 5s to sub-second via multithreading.' },
      { title: 'AI-powered features', text: 'Shipped speech-to-text and conversation summarisation on OpenAI APIs, cutting manual moderation effort by 60%.' },
      { title: 'Analytics & recommendations', text: 'Owned the BigQuery analytics pipeline; SQL and data models powering recommendation logic and product insight.' },
      { title: 'Auth & security', text: 'Firebase Phone Auth and Google Sign-In flows to compliance standards, at a 95%+ success rate.' },
      { title: 'Mentorship', text: 'Mentored 3 engineers across Android, iOS and backend through code reviews, unit testing and design discussion.' },
    ],
  },
];

export const projects = [
  {
    name: 'DebatabL', color: 'var(--c3)', kind: 'Real-time Android platform · Java',
    text: 'Real-time backend with concurrent room management, RBAC and live scoring across 50+ rooms. Built on OOP and SOLID principles with unit-tested core modules, delivered as an Android platform for structured live debates.',
    tags: ['Concurrency', 'RBAC', 'SOLID', 'Unit testing'],
    link: LINKS.debatabl,
  },
  {
    name: 'Retail Revamp', color: 'var(--c5)', kind: 'Offline-first sync engine · Java',
    text: 'The engine behind the retail product above: conflict-resolving sync for 1,000+ transactions and 20+ concurrent users at sub-500ms, a SQL schema for multi-device sync, and Whisper voice commands for low-literacy users.',
    tags: ['Java', 'SQL schema design', 'Conflict resolution', 'Whisper'],
    link: LINKS.retailRevamp,
  },
];

export const stackGroups = [
  { group: 'Languages & concepts', color: 'var(--c1)', items: 'Java · J2EE · Python · JavaScript · OOP · SOLID · DSA · SQL/PL-SQL · System design · LLD · Multithreading · Concurrency · Design patterns · Event-driven architecture · Distributed systems' },
  { group: 'Backend & data', color: 'var(--c2)', items: 'Spring Boot · Spring Framework · Node.js · REST APIs · Microservices · WebSockets · Java Sockets · PostgreSQL · MySQL · MongoDB · Redis · Kafka · RabbitMQ · Debezium · BigQuery · ElasticSearch · JPA/Hibernate' },
  { group: 'Cloud & practices', color: 'var(--c4)', items: 'GCP · AWS · S3 · Lambda · Firebase · Kubernetes · Docker · CI/CD · Git · Nginx · Agile/Scrum · Unit testing · Code reviews · API security · Rate limiting' },
  { group: 'Tools & AI', color: 'var(--c3)', items: 'OpenAI APIs · Postman · Swagger · IntelliJ · Android Studio · Jira · Gradle · Lombok · React Native · Shell script' },
];

export const seedNotes = [
  'Good work Ritik', 'Best of luck finding a new job', 'The 50k socket number made me stop scrolling',
  'We are hiring backend in Bengaluru', 'Multi-tenancy with Kafka is what we are stuck on',
  'Love that you measured revenue, not just latency', 'Config CMS cutting dev work in half is the real flex',
  'Retail Revamp sounds genuinely useful', 'Clean writing. No fluff', 'Ping me if you want a referral',
  'The rope timeline is a nice touch', 'Sub-500ms offline sync. Respect', 'Write more about Kafka retries',
  'Good luck with the search', '10s to 2s is the story I would lead with', 'Whisper voice for shop owners. Thoughtful',
];
