import { Mastercourse, Testimonial, PlanTier } from '../types';

export const COURSES: Mastercourse[] = [
  {
    id: 'course-1',
    title: 'The Architecture of Artificial Intelligence: Socratic Logic & Neural Geometry',
    subtitle: 'Uniting classical Greek epistemic dialectic with cutting-edge LLM attention architectures and explainability.',
    faculty: 'Alchemical AI & Computation',
    level: 'Master Laureate',
    duration: '28 Hours (7 Weeks)',
    lecturesCount: 42,
    instructor: {
      name: 'Dr. Alessandro De Luca',
      title: 'Professor of Computational Philosophy',
      guild: 'Venice AI Pantheon & Politecnico di Milano',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bio: 'Former DeepMind research lead and historian of science, exploring how classical Italian geometry unlocks modern neural model mechanics.'
    },
    image: '/images/statue-ai.jpg',
    rating: 4.98,
    enrolledCount: 3420,
    featured: true,
    price: 380,
    summary: 'Step inside an interactive exploratory space where transformers and deep neural weights are illuminated through classical Renaissance architectural sketches. Learn how to engineer robust AI prompts and architectures grounded in formal rhetoric, symbolic logic, and the golden ratio of parameter tuning.',
    keyLearnings: [
      'Master the mathematical foundations of Self-Attention through Euclidean geometric models',
      'Apply Socratic dialectical testing to detect hallucination and semantic drift in AI models',
      'Design modern interactive interfaces using classic Italian editorial grid systems',
      'Implement custom AI fine-tuning workflows inside artisanal high-security enclaves'
    ],
    syllabus: [
      {
        chapter: 'Module I',
        title: 'The Trivium of Code: Logic, Grammar, & Computation',
        lessons: [
          { id: 'l1-1', title: 'Aristotelian Syllogisms in Prompt Design', duration: '45m', description: 'Deconstructing language models through classical philosophical deductive reasoning.', isUnlocked: true, notesCount: 14 },
          { id: 'l1-2', title: 'The Geometry of Token Embeddings & High-Dimensional Vectors', duration: '58m', description: 'Visualizing vector spaces like Michelangelo sculpting form out of marble.', isUnlocked: true, notesCount: 22 },
          { id: 'l1-3', title: 'Dialectical Optimization: Socratic Debating Agents', duration: '1h 12m', description: 'Building twin LLM agents that constructively critique code like Florentine Guild rivals.', isUnlocked: false, notesCount: 8 }
        ]
      },
      {
        chapter: 'Module II',
        title: 'Chiaroscuro Data Visualization & Explainability',
        lessons: [
          { id: 'l1-4', title: 'Light & Shadow in AI Latent Spaces', duration: '52m', description: 'Using visual contrast techniques to explain neural decision trees to stakeholders.', isUnlocked: false },
          { id: 'l1-5', title: 'The Vitruvian AI Pipeline', duration: '1h 05m', description: 'Balancing compute cost, memory bandwidth, and accuracy with harmonious ratios.', isUnlocked: false }
        ]
      }
    ]
  },
  {
    id: 'course-2',
    title: 'Florentine UX & Digital Classical Proportion in Web Systems',
    subtitle: 'Bringing Brunelleschi’s perspective rules, Fibonacci ratios, and sensory spatial layout into modern product design.',
    faculty: 'Classical Design & Digital Proportion',
    level: 'Artisan Fellow',
    duration: '22 Hours (5 Weeks)',
    lecturesCount: 34,
    instructor: {
      name: 'Elena Rostova, M.Des.',
      title: 'Principal Design Fellow & Ex-Apple Typography Director',
      guild: 'Florence Institute of Sensory Design',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      bio: 'Pioneer of contemporary classical typography and Spatial UX, bridging Renaissance print harmony with reactive web frontends.'
    },
    image: '/images/hero-renaissance.jpg',
    rating: 4.95,
    enrolledCount: 4850,
    featured: true,
    price: 320,
    summary: 'Why do modern digital tools often feel cold and fatiguing? This course rediscovers the warmth, visual dignity, and cognitive serenity of classical bookmaking, architecture, and manuscript illumination, translating them into high-performance web systems and design systems.',
    keyLearnings: [
      'Construct responsive typographic hierarchies derived from classical printing presses & proportions',
      'Implement tactile glassmorphism and rich color harmony rooted in Venetian natural oil pigments',
      'Reduce digital fatigue through harmonious whitespace pacing and optical kerning algorithms',
      'Build living design systems in Tailwind & React that age like fine architecture'
    ],
    syllabus: [
      {
        chapter: 'Module I',
        title: 'The Golden Ratio in Screen Interfaces',
        lessons: [
          { id: 'l2-1', title: 'Brunelleschi’s Linear Perspective Applied to Modern UX Layering', duration: '50m', description: 'Creating depth and intuitive z-index hierarchies without excessive visual noise.', isUnlocked: true, notesCount: 19 },
          { id: 'l2-2', title: 'Harmonious Type Pairing: High-Contrast Serifs & Crisp Neo-Sans', duration: '40m', description: 'Achieving editorial dignity and high readability on Retina displays.', isUnlocked: true, notesCount: 31 }
        ]
      },
      {
        chapter: 'Module II',
        title: 'Tactile Materials & Micro-Interactions',
        lessons: [
          { id: 'l2-3', title: 'Simulating Parchment, Marble, and Illuminated Metal Foil in CSS', duration: '1h 10m', description: 'Advanced UI shader transformations and subtle organic textures.', isUnlocked: false }
        ]
      }
    ]
  },
  {
    id: 'course-3',
    title: 'The Vitruvian Enterprise: Strategic Systems Engineering',
    subtitle: 'Applying Leonardo Da Vinci’s multidisciplinary sketchbook method to scale autonomous business architectures.',
    faculty: 'Architectural Leadership',
    level: 'Master Laureate',
    duration: '18 Hours (4 Weeks)',
    lecturesCount: 26,
    instructor: {
      name: 'Marco Di Lorenzo',
      title: 'Chief Systems Architect & Executive Mentor',
      guild: 'Bologna Academy of Enterprise & Strategy',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      bio: 'Renowned advisor to Fortune 100 CEOs and university founders, treating engineering teams as autonomous artisan bottegas.'
    },
    image: '/images/vitruvian-tech.jpg',
    rating: 4.92,
    enrolledCount: 2110,
    price: 450,
    summary: 'In an era of hyper-specialization, the modern technical leader must be a polymath. Learn how to diagnose complex organizational bottlenecks using Leonardo da Vinci’s dynamic fluid flow mechanics and architectural blueprint models.',
    keyLearnings: [
      'Organize engineering departments into self-sustaining "Bottegas" (Guild workshops)',
      'Map enterprise software dependencies using dynamic structural equilibrium diagrams',
      'Foster radical creative friction between designers, ML specialists, and growth strategists',
      'Build long-term resilient LMS architectures capable of serving millions with zero downtime'
    ],
    syllabus: [
      {
        chapter: 'Module I',
        title: 'The Polymath Mindset in Engineering Management',
        lessons: [
          { id: 'l3-1', title: 'From Monotone Coders to Full-Spectrum Artisans', duration: '45m', description: 'Cultivating curiosity and structural mastery across engineering organizations.', isUnlocked: true }
        ]
      }
    ]
  },
  {
    id: 'course-4',
    title: 'Celestial Mechanics & Digital Astrolabes: Modern Data Science',
    subtitle: 'Visualizing complex multi-dimensional time series data using Renaissance astronomical mapping paradigms.',
    faculty: 'Alchemical AI & Computation',
    level: 'Artisan Fellow',
    duration: '24 Hours (6 Weeks)',
    lecturesCount: 38,
    instructor: {
      name: 'Dr. Clara von Koenig',
      title: 'Astrophysicist & Visual Data Science Chair',
      guild: 'Observatorium Heidelberg & L’Accademia Venice',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      bio: 'Data visualization master combining Tycho Brahe observatory geometries with D3.js and modern real-time streaming engines.'
    },
    image: '/images/botanical-astronomy.jpg',
    rating: 4.97,
    enrolledCount: 3890,
    price: 360,
    summary: 'Transform ordinary bar charts and dashboards into awe-inspiring computational instruments of inquiry. We explore how early astronomers constructed astrolabes, armillary spheres, and star charts, translating their design ingenuity into real-time analytical interfaces.',
    keyLearnings: [
      'Build orbital, radial, and multi-axes data visualizers in modern TypeScript & D3/Canvas',
      'Design predictive climate and financial dashboards with museum-level aesthetic clarity',
      'Utilize natural astronomy palettes (Lapis Lazuli, Burnished Copper, Gold Foil) for semantic contrast',
      'Create real-time visual simulation loops with sub-millisecond rendering performance'
    ],
    syllabus: [
      {
        chapter: 'Module I',
        title: 'Armillary Spheres & 3D Interactive Web Data',
        lessons: [
          { id: 'l4-1', title: 'Radial Coordinates & Celestial Data Storytelling', duration: '55m', description: 'Plotting complex customer journeys and neural attention networks using celestial maps.', isUnlocked: true }
        ]
      }
    ]
  },
  {
    id: 'course-5',
    title: 'The Ethics of Machine Minds: Human Dignity & Digital Soul',
    subtitle: 'A foundational philosophical seminar on autonomous agency, moral alignment, and classical Humanism in the AI century.',
    faculty: 'Philosophy & Ethics of Systems',
    level: 'Initiating Apprentice',
    duration: '16 Hours (4 Weeks)',
    lecturesCount: 22,
    instructor: {
      name: 'Rev. Prof. Giovanni Bettini, Ph.D.',
      title: 'Senior Fellow in Bioethics & Technologized Philosophy',
      guild: 'Pontifical Lateran Athenaeum & Oxford AI Fellowship',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      bio: 'An international ethicist probing the boundaries between artificial synthesis and human moral imagination.'
    },
    image: 'https://images.pexels.com/photos/31267820/pexels-photo-31267820.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    rating: 4.99,
    enrolledCount: 5240,
    featured: false,
    price: 280,
    summary: 'As autonomous AI agents make healthcare, judicial, and creative decisions, how do we preserve human sovereignty and moral flourishing? This course applies Renaissance Humanism (Mirandola’s "Oration on the Dignity of Man") directly to technical RLHF alignment protocols and systemic governance.',
    keyLearnings: [
      'Map Renaissance Humanist ethical treatises onto current LLM Guardrails & RLHF practices',
      'Establish ethical review charters for institutional generative AI deployments',
      'Distinguish between algorithmic imitation of sentiment and authentic subjective cognition',
      'Design AI systems that augment human dignity rather than commodify attention'
    ],
    syllabus: [
      {
        chapter: 'Module I',
        title: 'Mirandola’s Oration in the Age of Silicon',
        lessons: [
          { id: 'l5-1', title: 'Free Will, Autonomy, and Algorithmic Nudging', duration: '48m', description: 'Designing software that encourages critical thought and active discernment.', isUnlocked: true }
        ]
      }
    ]
  },
  {
    id: 'course-6',
    title: 'The Digital Cathedral: Architecture & Acoustics of Collaborative Spaces',
    subtitle: 'Designing immersive educational audio-visual ecosystems and real-time remote classrooms that evoke grandeur and deep focus.',
    faculty: 'Classical Design & Digital Proportion',
    level: 'Master Laureate',
    duration: '20 Hours (5 Weeks)',
    lecturesCount: 30,
    instructor: {
      name: 'Architecta Sofia Borromeo',
      title: 'Acoustic Engineer & Immersive Environments Architect',
      guild: 'Milan Conservatory of Spatial Media',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      bio: 'Designer of world-class concert pavilions and remote virtual symposium spaces for top global university federations.'
    },
    image: 'https://images.pexels.com/photos/31488463/pexels-photo-31488463.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    rating: 4.94,
    enrolledCount: 1840,
    price: 340,
    summary: 'Discover the hidden acoustics of digital attention. We analyze how classical libraries and cathedral spaces quiet ambient distractions and elevate contemplation, converting these principles into spatial audio, soothing interface animations, and friction-free video symposium systems.',
    keyLearnings: [
      'Engineer psychoacoustic sound design for learning platforms that enhance memory consolidation',
      'Eliminate videoconference fatigue through spatial audio positioning and asynchronous rituals',
      'Design architectural classroom UI that honors both large lectures and peer break-out Socratic forums',
      'Master WebAudio API integration for ambient focus tracks and real-time noise shaping'
    ],
    syllabus: [
      {
        chapter: 'Module I',
        title: 'Acoustic Sacred Spaces & Cognitive Serenity',
        lessons: [
          { id: 'l6-1', title: 'The Physics of Reverberation & Sonic Focus Triggers', duration: '50m', description: 'Using soundscapes to ground learners in deep imaginative contemplation.', isUnlocked: true }
        ]
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: "L'Accademia has forever spoiled traditional corporate LMS products for our university faculty. It feels less like training software and more like entering the Medici library in Florence—with a superintelligent Socrates AI sitting across the reading table.",
    author: "Dr. Jonathan Sterling",
    role: "Dean of Academic Innovation & Online Initiatives",
    institution: "King's College Digital Humanities Lab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    bgImage: "https://images.pexels.com/photos/31267820/pexels-photo-31267820.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: 't-2',
    quote: "As a Head of Design, I care deeply about typography, texture, and intellectual depth. L'Accademia's intersection of Cormorant Garamond serifs, dark obsidian glass, and rigorously researched masterclasses is simply the pinnacle of modern edtech.",
    author: "Amélie Vane-Vescovi",
    role: "VP of Product Design & Brand Architect",
    institution: "Atelier Studio Paris",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    bgImage: "https://images.pexels.com/photos/14354790/pexels-photo-14354790.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  },
  {
    id: 't-3',
    quote: "Our engineering academy adopted L'Accademia for all 800 of our AI developers. The 94% course completion rate speaks for itself. The Socratic dialogue interactive engine doesn't feed answers; it sharpens mindsets and transforms coders into actual software artisans.",
    author: "Hirokazu Takahashi",
    role: "Global Chief Technology Officer",
    institution: "Neo-Kyoto Neural Systems & Robotics",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    bgImage: "https://images.pexels.com/photos/33827919/pexels-photo-33827919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  }
];

export const PLAN_TIERS: PlanTier[] = [
  {
    id: 'apprentice',
    name: 'Apprentice Fellow',
    tagline: 'For individual scholars beginning their immersion into classical and digital mastery.',
    monthlyPrice: 39,
    annualPrice: 29,
    features: [
      'Unlimited streaming of all 60+ Masterclass Salons in 4K Cinema Quality',
      'Access to interactive Socratic AI Chat (150 inquiries / month)',
      'Downloadable high-res Renaissance architecture diagrams & PDF transcripts',
      'Personalized learning notebook & offline audio lectures',
      'Membership in community Discord & Guild discussions'
    ],
    highlighted: false,
    ctaText: 'Begin Apprentice Fellowship'
  },
  {
    id: 'artisan-patron',
    name: 'Master Artisan & Patron',
    tagline: 'The recommended immersion for professional designers, engineers, and academic researchers.',
    monthlyPrice: 79,
    annualPrice: 59,
    features: [
      'Everything in Apprentice Fellow, plus:',
      'Unlimited 24/7 Socrates AI Tutor with custom citation engine & debate mode',
      'Verified Certifications of Competence with cryptographic artisan seal',
      'Monthly live Socratic symposiums & Q&As with professors & industry leaders',
      'Access to raw Figma, D3.js code repositories & AI architecture blueprints',
      'Priority access to newly released Masterclasses'
    ],
    highlighted: true,
    ctaText: 'Claim Master Patronage'
  },
  {
    id: 'medici-institution',
    name: 'Medici Institution & School LMS',
    tagline: 'Deploy L’Accademia as your custom white-glove corporate LMS or University e-learning engine.',
    monthlyPrice: 499,
    annualPrice: 399,
    features: [
      'Custom institutional portal with white-label Medici branding & crest',
      'Full Creator Studio & Bottega tool suite to publish your own institutional courses',
      'Advanced Chiaroscuro Analytics: Socratic reasoning scores & deep retention metrica',
      'Dedicated Institutional Architect & Socratic AI fine-tuning on your internal library',
      'SSO (SAML/Okta) + SOC-2 compliance with regional European & global server enclaves',
      '25 Teacher & Admin accounts with custom role hierarchy'
    ],
    highlighted: false,
    ctaText: 'Inquire for Institution Demo'
  }
];

export const INITIAL_SOCRATES_CHAT = [
  {
    id: 'msg-1',
    sender: 'socrates' as const,
    text: "Greetings, friend. I am Socrates, your AI philosophical tutor and conversational companion at L'Accademia. We do not learn merely by memorizing axioms, but through rigorous inquiry and testing of definitions. What principle of computational logic or Renaissance design shall we illuminate today?",
    timestamp: '10:14 AM',
    citation: 'From Plato’s Republic (Book VI) on the Divided Line of Epistemology.'
  },
  {
    id: 'msg-2',
    sender: 'user' as const,
    text: "How does Brunelleschi's linear perspective from 15th-century architecture improve modern digital UI UX layout today?",
    timestamp: '10:15 AM'
  },
  {
    id: 'msg-3',
    sender: 'socrates' as const,
    text: "An exhilarating question! Before Brunelleschi demonstrated linear perspective outside Florence Cathedral in 1415, paintings lacked coherent dimensional hierarchy—everything sat flat on an arbitrary plane, exhausting the viewer's eye.\n\nIn contemporary UI/UX, we face the same dilemma: a flat, chaotic barrage of floating widgets and alerts. When you apply linear perspective and chiaroscuro (light vs. shadow) via intentional z-index elevation, optical spacing, and blurred glassmorphism, you create a intuitive vanishing point for human attention. You lead the eye effortlessly from background context (the landscape) to foreground importance (the call to action), sparing the user cognitive fatigue.",
    timestamp: '10:16 AM',
    citation: 'De pictura (On Painting) by Leon Battista Alberti, 1435.'
  }
];

export const SOCRATES_PROMPT_SUGGESTIONS = [
  "How can I use Socratic reasoning to test AI prompts for hallucinations?",
  "Why is the Golden Ratio effective in reducing cognitive load in web dashboards?",
  "What can software engineering teams learn from Florentine workshop (Bottega) culture?",
  "Explain Self-Attention in neural networks using an architectural analogy."
];
