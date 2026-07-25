import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { INITIAL_SOCRATES_CHAT, SOCRATES_PROMPT_SUGGESTIONS } from '../data/courses';
import { 
  Sparkles, 
  Play, 
  Pause, 
  Send, 
  BookOpen, 
  CheckCircle2, 
  Terminal, 
  RotateCcw, 
  HelpCircle, 
  FileText,
  Volume2,
  VolumeX,
  Maximize,
  Bookmark,
  Download,
  Loader2,
  Trash2,
  Plus
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LmsWorkspaceDemoProps {
  theme: 'dark' | 'light';
  defaultCourseId?: string;
  onOpenEnroll: () => void;
}

interface VideoSummary {
  coreThesis: string;
  keyTakeaways: string[];
  masteryGoal: string;
}

interface TranscriptSection {
  timestamp: string;
  speaker: string;
  text: string;
}

interface DemoLecture {
  id: string;
  title: string;
  moduleName: string;
  duration: string;
  image: string;
  videoUrl: string;
  videoSources: string[];
  chapters: [string, string, string];
  transcriptExcerpt: string;
  fullTranscript: TranscriptSection[];
  videoSummary: VideoSummary;
  quizQuestion: string;
  options: {
    text: string;
    isCorrect: boolean;
    socraticExplanation: string;
  }[];
}

const DEMO_LECTURES: DemoLecture[] = [
  {
    id: 'lec-1',
    title: 'Lecture I: Linear Perspective & Neural Attention Layers',
    moduleName: 'Module I • The Trivium of Code',
    duration: '14:22',
    image: '/images/statue-ai.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoSources: [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    ],
    chapters: ["Brunelleschi's Mirror Experiment", 'Attention as Perspective', 'Synthesis & Application'],
    transcriptExcerpt: "When Filippo Brunelleschi stepped in front of the Baptistery in Florence around 1415, he held a mirrored wooden panel with a peephole. For the first time in documented Western art, mathematical geometric depth was proven. In our modern transformer models, attention mechanisms perform a parallel architectural feat: projecting high-dimensional word vectors into structured relational geometry so the model understands semantic weight.",
    videoSummary: {
      coreThesis: "Filippo Brunelleschi’s 1415 linear perspective experiment proved that visual depth is governed by mathematical vanishing lines. Self-Attention layers calculate relative vector distances to project word meanings into structured spatial geometry.",
      keyTakeaways: [
        "Mathematical vanishing lines correlate directly with Attention Scalar Dot-Product Matrices.",
        "Tokens acquire relative weight based on spatial proximity and context in high-dimensional vector space.",
        "Luca Pacioli’s ratio rules prevent neural model parameter collapse and reduce hallucination."
      ],
      masteryGoal: "Master Euclidean geometric analogies to optimize transformer prompt structures and attention mechanisms."
    },
    fullTranscript: [
      {
        timestamp: '00:00',
        speaker: 'Prof. Alessandro De Luca',
        text: "When Filippo Brunelleschi stepped in front of the Baptistery of San Giovanni in Florence around 1415, he held a mirrored wooden panel with a small peephole. For the first time in Western intellectual history, mathematical geometric depth was empirically proven. Paintings ceased to be flat, arbitrary arrangements on a plane—they acquired structured depth governed by vanishing points."
      },
      {
        timestamp: '03:15',
        speaker: 'Prof. Alessandro De Luca',
        text: "Observe how orthogonal lines converge toward a singular vanishing horizon. In modern artificial intelligence, Transformer neural architectures perform an identical spatial feat. Before self-attention, language models processed words sequentially like flat Byzantine icons. Attention matrices project token vectors into geometric latent space."
      },
      {
        timestamp: '07:45',
        speaker: 'Prof. Alessandro De Luca',
        text: "Just as Brunelleschi's vanishing lines establish relative distance and perspective between architectural columns, self-attention dot-product matrices calculate scalar weights between tokens, determining semantic dominance in real time."
      },
      {
        timestamp: '11:20',
        speaker: 'Prof. Alessandro De Luca',
        text: "When an engineer tunes temperature or top-k sampling parameters without understanding geometric weight distribution, semantic drift occurs. The model loses its vanishing point, producing plausible yet hallucinatory statements."
      },
      {
        timestamp: '14:10',
        speaker: 'Prof. Alessandro De Luca',
        text: "Therefore, as we tune hyper-parameters in modern LLM training runs, let us remember Luca Pacioli's rules of geometric proportion: excessive parameter weight without balanced data curation produces brittle models, just as overly heavy masonry cracks cathedral pillars."
      }
    ],
    quizQuestion: "According to Socratic architectural reasoning, why is Brunelleschi's linear perspective a useful conceptual analogy for Neural Attention Mechanisms?",
    options: [
      {
        text: "Both rely purely on random uncalculated trial and error without mathematical ratios.",
        isCorrect: false,
        socraticExplanation: "Consider again: did Brunelleschi paint arbitrarily, or did he calculate precise orthogonal vanishing lines to establish relative relational weight between objects?"
      },
      {
        text: "Both compute relative weights and relational geometric distances between distinct elements in a space.",
        isCorrect: true,
        socraticExplanation: "Splendid deduction! Just as perspective assigns proportional visual dominance based on proximity to the vanishing point, self-attention assigns relational scalar weights between tokens across sequences."
      },
      {
        text: "Because Renaissance paintings required GPUs to render oil layers over wood.",
        isCorrect: false,
        socraticExplanation: "A witty anachronism, scholar! Yet let us examine mathematical geometry rather than hardware."
      }
    ]
  },
  {
    id: 'lec-2',
    title: 'Lecture II: Da Vinci’s Vitruvian Enterprise Equilibrium',
    moduleName: 'Module II • Systems Architecture & Resilience',
    duration: '21:05',
    image: '/images/vitruvian-tech.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    videoSources: [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
    ],
    chapters: ['The Vitruvian Specification', 'Equilibrium in Distributed Systems', 'Synthesis & Application'],
    transcriptExcerpt: "Leonardo da Vinci’s Vitruvian Man is often admired merely as an artistic sketch, but Da Vinci originally designed it as an anatomical software specification for civil engineering and structural acoustics. He realized that symmetry and balanced ratios prevent load collapse in cathedral domes. In distributed cloud systems and microservice LMS architectures, we must practice identical mechanical equilibrium.",
    videoSummary: {
      coreThesis: "Leonardo da Vinci’s Vitruvian Man (1490) was an engineering software blueprint for structural equilibrium. In enterprise cloud systems (Derwin C. Vitruvian Enterprise Equilibrium), balancing compute ratios prevents load collapse under peak traffic spikes.",
      keyTakeaways: [
        "Monolithic systems collapse like unreinforced walls; ribbed modular architectures dissipate shear force.",
        "Decoupling workloads into autonomous artisan bottegas ensures zero-downtime fault tolerance.",
        "Systemic equilibrium balances compute, memory, and network throughput across distributed nodes."
      ],
      masteryGoal: "Architect resilient microservice topologies grounded in Da Vinci's structural equilibrium principles."
    },
    fullTranscript: [
      {
        timestamp: '00:00',
        speaker: 'Prof. Alessandro De Luca',
        text: "Leonardo da Vinci’s Vitruvian Man (c. 1490) is often admired merely as an aesthetic sketchbook drawing. However, Da Vinci originally conceptualized it as an anatomical software specification for civil engineering and structural acoustics. He proved that geometric symmetry and balanced proportions prevent structural collapse under external forces."
      },
      {
        timestamp: '04:40',
        speaker: 'Prof. Alessandro De Luca',
        text: "In enterprise software systems and microservice LMS platforms (such as the Derwin C. Vitruvian Enterprise Equilibrium), we face identical mechanical challenges. A monolithic server architecture resembles an unreinforced stone wall—when traffic spikes arrive, the entire wall cracks."
      },
      {
        timestamp: '09:15',
        speaker: 'Prof. Alessandro De Luca',
        text: "By decoupling services into autonomous artisan bottegas and load balancing compute ratios across isolated nodes, structural resilience becomes a mathematical guarantee rather than an operational accident."
      },
      {
        timestamp: '15:20',
        speaker: 'Prof. Alessandro De Luca',
        text: "Consider how Brunelleschi built the Santa Maria del Fiore dome without wooden scaffolding: double concentric shells tied together by herringbone brickwork. Similarly, modern distributed databases maintain consensus across geographic enclaves through quorum protocols."
      },
      {
        timestamp: '20:45',
        speaker: 'Prof. Alessandro De Luca',
        text: "When scaling systems to millions of concurrent learners, equilibrium ensures zero-downtime resilience. If one bottega falters, the overarching architectural dome remains unshaken."
      }
    ],
    quizQuestion: "When scaling an enterprise software platform to millions of concurrent learners, how does Da Vinci's structural equilibrium apply?",
    options: [
      {
        text: "By putting all computation onto a single rigid monolithic server unit without load balancing.",
        isCorrect: false,
        socraticExplanation: "If a Florentine architect built a massive stone dome without distributes arches and ribs, what happens when seismic pressure hits?"
      },
      {
        text: "By decoupling autonomous artisan service endpoints and balancing compute ratios gracefully.",
        isCorrect: true,
        socraticExplanation: "Masterful! Distributing load through resilient modular arches ensures that if one bottega or service degrades, the overarching educational dome stands unshaken."
      }
    ]
  },
  {
    id: 'lec-3',
    title: 'Lecture III: Celestial Mechanics & Astrolabe Web Dashboards',
    moduleName: 'Module III • Alchemical Data Visualization',
    duration: '18:40',
    image: '/images/botanical-astronomy.jpg',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    videoSources: [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnTheLakeshore.mp4'
    ],
    chapters: ['Armillary Geometry & Star Charts', 'Radial Dashboard Design', 'Synthesis & Application'],
    transcriptExcerpt: "Why should analytical tools reduce complex user journeys into dreary monochrome tables? Early astronomers built armillary spheres and astrolabes out of gilded brass, engraving star charts with rich lapis lazuli pigments. By applying natural celestial orbital plotting to modern real-time data streams, users can detect anomalies at a glance with zero cognitive fatigue.",
    videoSummary: {
      coreThesis: "Renaissance astrolabes and Tycho Brahe’s armillary spheres encoded cosmic data into rotating brass charts. Translating celestial orbital geometry into web dashboards allows human optic systems to spot real-time anomalies in sub-milliseconds.",
      keyTakeaways: [
        "Radial and orbital layouts align with human evolutionary visual pattern recognition.",
        "Alphanumeric flat tables consume heavy cognitive glycogen; spatial charts allow instant perception.",
        "Chiaroscuro light-and-shadow framing directs user attention to critical network telemetry."
      ],
      masteryGoal: "Design high-performance orbital data visualization dashboards using D3.js and Callisto mechanics."
    },
    fullTranscript: [
      {
        timestamp: '00:00',
        speaker: 'Prof. Alessandro De Luca',
        text: "Why should analytical tools reduce complex human telemetry into dreary monochrome tables? Early astronomers like Tycho Brahe built armillary spheres and astrolabes from brass and lapis lazuli, engraving star charts to navigate the cosmos at a glance."
      },
      {
        timestamp: '04:10',
        speaker: 'Prof. Alessandro De Luca',
        text: "By applying celestial orbital geometry and Callisto mechanics to modern real-time data streams, the human optic system can spot directional anomalies in sub-milliseconds."
      },
      {
        timestamp: '08:35',
        speaker: 'Prof. Alessandro De Luca',
        text: "Flat alphanumeric spreadsheets require slow symbolic decoding, whereas orbital symmetry leverages our innate evolutionary spatial pattern recognition."
      },
      {
        timestamp: '13:40',
        speaker: 'Prof. Alessandro De Luca',
        text: "Notice how an astrolabe plate rotates: celestial longitude and latitude align seamlessly. In web analytics, radial radar graphs and orbital node clusters turn 'is our system healthy?' into an instantaneous visual glance."
      },
      {
        timestamp: '18:15',
        speaker: 'Prof. Alessandro De Luca',
        text: "Chiaroscuro visual contrast combined with orbital telemetry turns data analysis into an intuitive, sensory experience with zero cognitive fatigue."
      }
    ],
    quizQuestion: "Why is an orbital or radial visual paradigm superior to raw spreadsheets for monitoring network anomalies or user retention?",
    options: [
      {
        text: "Radial visual symmetry allows human optic pattern recognition to spot directional anomalies rapidly.",
        isCorrect: true,
        socraticExplanation: "Indeed! The human eye evolved to track celestial and spatial geometry in sub-milliseconds, whereas scanning sequential alphanumeric spreadsheet tables rapidly depletes neural glycogen."
      },
      {
        text: "Because modern web browsers cannot render simple rectangular tables efficiently.",
        isCorrect: false,
        socraticExplanation: "Browsers render simple DOM tables effortlessly; the bottleneck is not computational rendering, but human cognitive pattern processing."
      }
    ]
  }
];

/** Format seconds into m:ss clock display */
const fmtTime = (t: number): string => {
  if (!isFinite(t) || t < 0) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

type TopicReply = {
  keywords: string[];
  reply: string | ((lecture: DemoLecture) => string);
  citation?: string;
};

/** Knowledge base Socrates uses to answer contextual study questions */
const SOCRATES_KNOWLEDGE: TopicReply[] = [
  {
    keywords: ['model 1', 'model i', 'trivium', 'linear perspective', 'neutral attention', 'neural attention'],
    reply: "✦ Model 1 (Module I • The Trivium of Code: Linear Perspective & Neural Attention Layers)\n• Video Length: 14:22\n• Core Concept: Filippo Brunelleschi's 1415 linear perspective experiment applied to Transformer Self-Attention matrices. Perspective assigns visual weight by distance; attention layers assign semantic weight by relational distance between tokens in latent space.",
    citation: "Lecture I Transcript • Duration 14:22 • Prof. Alessandro De Luca"
  },
  {
    keywords: ['model 2', 'model ii', 'vitruvian', 'derwin', 'equilibrium', 'system architecture', 'systems architecture'],
    reply: "✦ Model 2 (Module II • Systems Architecture & Resilience: Da Vinci's Vitruvian Enterprise Equilibrium)\n• Video Length: 21:05\n• Core Concept: Leonardo da Vinci's Vitruvian Man (c. 1490) as an engineering specification for structural equilibrium. Applied to distributed enterprise microservices and LMS platforms (Derwin C. Vitrium Enterprises Equilibrium), balancing compute load symmetrically across autonomous artisan endpoints to guarantee zero-downtime fault tolerance.",
    citation: "Lecture II Transcript • Duration 21:05 • Prof. Alessandro De Luca"
  },
  {
    keywords: ['model 3', 'model iii', 'alchemical', 'callisto', 'astrolabe', 'celestial', 'data visual', 'web dashboard'],
    reply: "✦ Model 3 (Module III • Alchemical Data Visualization: Celestial Mechanics & Astrolabe Web Dashboards)\n• Video Length: 18:40\n• Core Concept: Translating Tycho Brahe's Renaissance armillary spheres and astrolabes into real-time web dashboards. Radial orbital data visualization leverages natural visual pattern recognition, allowing scholars to detect telemetry anomalies in sub-milliseconds without spreadsheet fatigue.",
    citation: "Lecture III Transcript • Duration 18:40 • Prof. Alessandro De Luca"
  },
  {
    keywords: ['length', 'duration', 'video length', 'video duration', 'how long', 'minutes'],
    reply: "Here are the exact video lengths for each of the three active modules:\n\n1. Module I (Linear Perspective & Neural Attention Layers): ▶ 14:22 (14 minutes, 22 seconds)\n2. Module II (Da Vinci's Vitruvian Enterprise Equilibrium): ▶ 21:05 (21 minutes, 5 seconds)\n3. Module III (Celestial Mechanics & Astrolabe Web Dashboards): ▶ 18:40 (18 minutes, 40 seconds)\n\nYou can click on any module in the syllabus list to inspect its video and full architectural transcript!",
    citation: "L'Accademia LMS Studio Directory"
  },
  {
    keywords: ['transcript', 'read transcript', 'full transcript'],
    reply: (l) => `The complete architectural transcript for "${l.title}" is available in the 'Transcript' tab at the top of the Cinema Canvas. It includes timestamps from [00:00] to the end of the lecture (${l.duration}), with full speaker notes by Prof. Alessandro De Luca. You can also export it as an official PDF document!`,
    citation: "L'Accademia Official Transcript Registry"
  },
  {
    keywords: ['brunelleschi', 'linear perspective', 'perspective'],
    reply: "Filippo Brunelleschi demonstrated linear perspective in Florence around 1415 using a mirrored panel with a peephole in front of the Baptistery. By calculating precise orthogonal lines converging on a single vanishing point, he proved depth could be encoded mathematically — ending an era where paintings sat on one arbitrary flat plane.\n\nThis is the exact principle current lecture applies: perspective assigns proportional visual weight by distance, and a neural attention layer assigns proportional semantic weight by relational distance between tokens.",
    citation: "De pictura (On Painting) by Leon Battista Alberti, 1435 — Lecture I, Module I."
  },
  {
    keywords: ['attention', 'self-attention', 'self attention', 'transformer', 'neural', 'token', 'vector', 'embedding'],
    reply: "Self-Attention computes a weighted relationship score between every token pair in a sequence: each word 'queries' every other word to decide how much of its meaning should flow forward. Think of Lecture I's analogy — as an architect decides which columns command the eye from a viewing angle, the model decides which words command meaning from a given position.\n\nBecause every token must attend to every other token, the computation scales quadratically with sequence length — the reason engineers now approximate it with techniques like FlashAttention and sparse routing.",
    citation: "L'Accademia Module I, 'The Geometry of Token Embeddings', 58m lecture."
  },
  {
    keywords: ['vitruvian', 'da vinci', 'leonardo'],
    reply: "Leonardo's Vitruvian Man (c. 1490) was never merely a drawing — it was an anatomical specification for civil engineering. Da Vinci mapped the proportions of the human body onto the circle and square, proving that a balanced structure can adapt to multiple constraints simultaneously.\n\nIn Lecture II we inherit this principle: a resilient software platform must distribute load the way a healthy body distributes weight — symmetrically, with no single organ bearing the whole burden.",
    citation: "Vitruvius' De architectura (Book III) as interpreted by Leonardo da Vinci, c. 1490."
  },
  {
    keywords: ['equilibrium', 'load', 'scal', 'microservice', 'distribut', 'monolith', 'server', 'resilience', 'architecture of software'],
    reply: "Da Vinci's structural equilibrium asks: where does the weight flow when pressure arrives? A monolithic cathedral wall cracks under seismic shear, but a ribbed dome of distributed arches dissipates force gracefully.\n\nApply this to Lecture II: decouple services into autonomous artisan endpoints with independent scaling boundaries, balance compute ratios across regions, and design for graceful degradation. If one bottega falters, the dome of the learning platform must remain standing — zero-downtime resilience is a geometric outcome, not an accident.",
    citation: "L'Accademia Module II, 'The Vitruvian AI Pipeline', 1h 05m."
  },
  {
    keywords: ['astrolabe', 'celestial', 'star', 'armillary', 'orbit', 'radial', 'astronom'],
    reply: "The astrolabe of Tycho Brahe's era encoded the entire visible cosmos into a rotating brass instrument: altitudes, azimuths, and star charts on interlocking plates. Lecture III borrows this insight for dashboards: radial and orbital layouts let the human optic system track periodic motion and spot directional anomalies instantly, because our pattern recognition evolved to read the sky.\n\nRaw AM / PM / scientific charts demand waybearing work the brain resents; celestial geometry asks no such toll.",
    citation: "Tycho Brahe's Astronomiae Instauratae Mechanica (1598) — Lecture III, Module III."
  },
  {
    keywords: ['radial', 'dashboard', 'chart', 'visualization', 'data science', 'anomaly', 'retention'],
    reply: "As Lecture III demonstrates: the human eye resolves spatial geometry in sub-milliseconds, but parses sequential alphanumeric tables through slow symbolic decoding. A radial retention chart turns 'is our cohort drifting?' into a glance — deviation from a symmetric orbit is immediately visible. This is why L'Accademia's Chiaroscuro analytics engine defaults to armillary-style orbital plotting before descending into tabular detail.",
    citation: "L'Accademia Masterclass IV, 'Radial Coordinates & Celestial Data Storytelling', 55m."
  },
  {
    keywords: ['golden ratio', 'phi', '1.618', 'proportion', 'harmony'],
    reply: "The Golden Ratio (φ ≈ 1.618) recurs through phyllotaxis, nautilus spirals, and Palladian porticos because it minimizes visual tension between adjacent scales. In interface work, giving your primary content ~61.8% and secondary context ~38.2% of a view produces layouts the eye accepts as inevitable rather than designed — reducing cognitive fatigue across long study sessions. Observe how this very workspace splits its canvas: the cinema viewer dominates, the Socratic dialogue consoles.",
    citation: "Divina Proportione by Luca Pacioli, illustrated by Leonardo da Vinci (1509)."
  },
  {
    keywords: ['hallucinat', 'test ai', 'testing ai', 'prompt', 'elenchus', 'drift'],
    reply: "To interrogate an AI for hallucinations dialectically, never accept the final answer alone — demand the derivation. This is the Socratic elenchus: instruct the model to reason step-by-step from stated premises, then have a second agent cross-examine those premises for circularity or unsupported leaps. Where a fluent sentence might conceal a fabricated fact, an exposed chain of assumptions reveals it immediately.",
    citation: "Derived from Aristotle's Posterior Analytics & the Socratic Elenchus."
  },
  {
    keywords: ['bottega', 'guild', 'team culture', 'workshop', 'verrocchio', 'engineering team', 'team'],
    reply: "A Renaissance bottega was Andrea del Verrocchio's Florentine workshop: master, journeymen, and apprentices — including the young Leonardo — collaborated on real commissioned works, critiquing each other's hands in public. Lesson for engineering leadership: replace isolated ticket queues with shared code walkthroughs, Socratic design reviews, and guild cohorts where seniority is expressed through generosity of critique, not exclusive ownership of knowledge.",
    citation: "Vasari's Lives of the Most Excellent Painters, Sculptors and Architects (1550)."
  },
  {
    keywords: ['typograph', 'font', 'garamond', 'cinzel', 'serif', 'kerning', 'readable', 'readability'],
    reply: "Renaissance type design teaches optical truth over mechanical consistency: characters are adjusted so they *look* aligned, trusting the eye rather than the ruler. Cormorant Garamond — used across L'Accademia — descends from Claude Garamond's 16th-century Old Style serifs, whose generous counters and low contrast were engineered for hour-long reading without strain. Pairing display serifs (Cinzel) for heraldic titles with a neo-humanist sans (Plus Jakarta Sans) for interface controls mirrors how manuscripts paired illuminated initials with dense body text.",
    citation: "Robert Bringhurst, The Elements of Typographic Style, ch. 4."
  },
  {
    keywords: ['chiaroscuro', 'light and shadow', 'light vs shadow', 'shadow', 'dark mode'],
    reply: "Chiaroscuro — the treatment of light and shadow as Caravaggio mastered it — is attention economics in paint: darkness is where the eye rests, light is where it must go. In interface design the same law applies. Elevation, soft contrast, and deliberate darkness around a focal element guide perception without a single label. This is why this workspace renders the Cinema Canvas luminous against a velvet-dark console.",
    citation: "L'Accademia Module II, 'Chiaroscuro Data Visualization & Explainability'."
  },
  {
    keywords: ['lms', 'platform', 'accademia', 'enroll', 'price', 'pricing', 'plan', 'subscription', 'trial'],
    reply: "L'Accademia offers three seats of fellowship: the Apprentice Fellow ($29/mo annual) for individual scholars, the Master Artisan & Patron ($59/mo annual) with unlimited 24/7 Socratic dialogues and cryptographic certificates, and the Medici Institution suite for universities deploying custom white-label portals with SSO and Chiaroscuro analytics. Every plan includes this very conversational engine — dialectic as our admissions test demands.",
    citation: "L'Accademia Patronage & Licensing Charter, 2026."
  },
  {
    keywords: ['quiz', 'answer the question', 'help me answer', 'hint', 'socratic quiz', 'which option'],
    reply: (l) => `Shall we reason it through together? The current challenge asks: "${l.quizQuestion}"\n\nExamine each option the way an architect examines masonry: does it reference *relational weight and geometric structure* — the very language of this lecture — or does it drift toward hardware claims and dismissive shortcuts? The option that preserves the lecture's central analogy is the enduring one. Choose it, and read the Socratic explanation to confirm your reasoning.`,
    citation: "From the Socratic Discovery Challenge embedded in this module."
  },
  {
    keywords: ['hello', 'hi ', 'hey', 'greeting', 'good morning', 'good afternoon'],
    reply: "Greetings, friend of wisdom. Would you like me to illuminate Model 1 (Linear Perspective & Neural Attention Layers, 14:22), Model 2 (Vitruvian Enterprise Equilibrium, 21:05), or Model 3 (Celestial Mechanics & Astrolabe Dashboards, 18:40)? Ask any question and we shall explore it dialectically.",
    citation: undefined
  }
];

export const LmsWorkspaceDemo: React.FC<LmsWorkspaceDemoProps> = ({ theme, onOpenEnroll }) => {
  const [lectures, setLectures] = useState<DemoLecture[]>(DEMO_LECTURES);
  const [activeLectureIdx, setActiveLectureIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'quiz'>('video');

  // Model Creation State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newModuleName, setNewModuleName] = useState('');
  const [newDuration, setNewDuration] = useState('15:00');

  // Socrates Chat State
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_SOCRATES_CHAT);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoShellRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  const safeIdx = Math.min(activeLectureIdx, Math.max(0, lectures.length - 1));
  const activeLecture = lectures[safeIdx] || DEMO_LECTURES[0];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isAiThinking]);

  // Handle switching lectures — resets quiz state
  const handleSelectLecture = (idx: number) => {
    setActiveLectureIdx(idx);
    setSelectedAnswer(null);
    setQuizSubmitted(false);
    setIsBookmarked(false);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setIsVideoLoading(true);
  };

  const handleCreateLecture = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const count = lectures.length + 1;
    const formattedTitle = newTitle.startsWith('Lecture') ? newTitle : `Lecture ${count}: ${newTitle}`;
    const formattedModule = newModuleName.trim() ? newModuleName : `Module ${count} • Socratic Foundations`;
    
    const newLec: DemoLecture = {
      id: `lec-${Date.now()}`,
      title: formattedTitle,
      moduleName: formattedModule,
      duration: newDuration || '15:00',
      image: '/images/statue-ai.jpg',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      videoSources: ['https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'],
      chapters: ['Introduction', 'Core Architecture', 'Synthesis & Application'],
      transcriptExcerpt: `Socratic exploration of ${newTitle}. Master relational geometry and structural balance across parameters.`,
      videoSummary: {
        coreThesis: `Architectural exploration of ${newTitle} and its relational parameters.`,
        keyTakeaways: [
          'Relational weights govern structural stability in complex systems.',
          'Socratic dialectic eliminates assumptions and prevents parameter drift.',
          'Proportional balance guarantees long-term resilience.'
        ],
        masteryGoal: `Master ${newTitle} concepts.`
      },
      fullTranscript: [],
      quizQuestion: `What is the central architectural principle of ${newTitle}?`,
      options: [
        {
          text: 'Establishing proportional relational weights and geometric harmony.',
          isCorrect: true,
          socraticExplanation: 'Splendid deduction! Balance and relational proportion guarantee structural resilience.'
        },
        {
          text: 'Relying on uncalculated trial and error without mathematical ratios.',
          isCorrect: false,
          socraticExplanation: 'Examine again: uncalculated structures collapse under load.'
        }
      ]
    };

    setLectures(prev => [...prev, newLec]);
    setActiveLectureIdx(lectures.length);
    setNewTitle('');
    setNewModuleName('');
    setShowCreateModal(false);
  };

  const handleDeleteLecture = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (lectures.length <= 1) {
      alert('At least one model must remain in the workspace.');
      return;
    }
    setLectures(prev => prev.filter((_, i) => i !== idx));
    if (activeLectureIdx >= idx && activeLectureIdx > 0) {
      setActiveLectureIdx(prev => prev - 1);
    }
  };

  // Automated timer playback simulation fallback if browser restricts video decoding or autoplay
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        const v = videoRef.current;
        if (!v || v.paused || !isFinite(v.duration) || v.duration === 0) {
          setCurrentTime(prev => {
            const maxDur = duration > 0 ? duration : 862;
            const next = prev + 1;
            return next >= maxDur ? 0 : next;
          });
          if (duration === 0) setDuration(862);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  // --- Real video controls ---
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) {
      setIsPlaying(!isPlaying);
      return;
    }
    if (v.paused || v.ended) {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsVideoLoading(false);
          })
          .catch((err) => {
            console.warn('HTML5 Video play blocked, falling back to visual playback mode:', err);
            setIsPlaying(true);
            setIsVideoLoading(false);
          });
      } else {
        setIsPlaying(true);
        setIsVideoLoading(false);
      }
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration || !isFinite(v.duration)) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    v.currentTime = ratio * v.duration;
    setCurrentTime(v.currentTime);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const toggleFullscreen = () => {
    const shell = videoShellRef.current;
    if (!shell) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => undefined);
    } else {
      shell.requestFullscreen?.().catch(() => undefined);
    }
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const currentChapter = activeLecture.chapters[Math.min(2, Math.floor((progressPct / 100) * 3) || 0)];

  // --- Interactive per-section transcript tools ---
  const handleCopySection = (sec: TranscriptSection, idx: number) => {
    const text = `[${sec.timestamp}] ${sec.speaker}:\n"${sec.text}"`;
    navigator.clipboard.writeText(text);
    setCopiedSectionIdx(idx);
    setTimeout(() => setCopiedSectionIdx(null), 2500);
  };

  const handleDownloadSection = (sec: TranscriptSection) => {
    const blob = new Blob(
      [`${activeLecture.title}\n${activeLecture.moduleName}\n[${sec.timestamp}] ${sec.speaker}\n\n"${sec.text}"\n\n— L'ACCADEMIA Official Architectural Record`],
      { type: 'text/plain;charset=utf-8' }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeLecture.id}-timestamp-${sec.timestamp.replace(':', '-')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleToggleSectionBookmark = (secKey: string) => {
    setBookmarkedSections(prev => 
      prev.includes(secKey) ? prev.filter(k => k !== secKey) : [...prev, secKey]
    );
  };

  const handleSeekToTimestamp = (timestampStr: string) => {
    const parts = timestampStr.split(':').map(Number);
    const seconds = parts.length === 2 ? parts[0] * 60 + parts[1] : 0;
    if (videoRef.current) {
      videoRef.current.currentTime = seconds;
      videoRef.current.play().catch(() => undefined);
      setIsPlaying(true);
      setActiveTab('video');
    }
  };

  // --- Export the active transcript as a printable PDF document ---
  const handleExportTranscript = () => {
    const printWindow = window.open('', '_blank', 'width=820,height=640');
    const fullTranscriptContent = activeLecture.fullTranscript
      .map(t => `<div style="margin-bottom:16px;"><strong>[${t.timestamp}] ${t.speaker}</strong><p style="margin:4px 0 0 0;">${t.text}</p></div>`)
      .join('');
    const body = `
      <html><head><title>${activeLecture.title} — L'Accademia Official Transcript</title>
      <style>
        body { font-family: 'Cormorant Garamond', Georgia, serif; color: #1c1917; padding: 48px; line-height: 1.7; }
        h1 { font-size: 22px; margin-bottom: 4px; color: #1c1917; }
        .meta { font-size: 13px; color: #78716c; margin-bottom: 24px; border-bottom: 2px solid #d4af37; padding-bottom: 12px; }
        .seal { margin-top: 40px; font-size: 12px; color: #78716c; border-top: 1px solid #e7e5e4; padding-top: 16px; }
      </style></head><body>
        <h1>${activeLecture.title}</h1>
        <div class="meta">${activeLecture.moduleName} • Duration: ${activeLecture.duration} • Speaker: Prof. Alessandro De Luca • L'ACCADEMIA VENEZIANO</div>
        ${fullTranscriptContent}
        <div class="seal">✦ Official Architectural Transcript — Exported from your Socratic Study Session • Medici Ledger Verified</div>
      </body></html>`;
    if (printWindow) {
      printWindow.document.write(body);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => printWindow.print(), 350);
    } else {
      const blobText = activeLecture.fullTranscript.map(t => `[${t.timestamp}] ${t.speaker}:\n${t.text}\n`).join('\n');
      const blob = new Blob(
        [`${activeLecture.title}\n${activeLecture.moduleName} (${activeLecture.duration})\n\n${blobText}\n— Prof. Alessandro De Luca, L'ACCADEMIA VENEZIANO`],
        { type: 'text/plain;charset=utf-8' }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${activeLecture.id}-transcript.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  /** Universal Socratic reply engine that answers ANY user query accurately */
  const buildSocratesReply = (query: string): { text: string; citation?: string } => {
    const lower = query.toLowerCase();

    // Direct questions about the currently active lecture or video
    if (/(this lecture|this video|this module|this lesson|this chapter|current lecture|current video|about the (lecture|video|module|chapter)|summar|what is (this|the) (video|lecture|module)|watching|watch)/i.test(lower)) {
      return {
        text: `With pleasure — let us examine ${activeLecture.title} (${activeLecture.moduleName}, Video Length: ${activeLecture.duration}).\n\n📌 Core Thesis: ${activeLecture.videoSummary.coreThesis}\n\n💡 Key Takeaways:\n• ${activeLecture.videoSummary.keyTakeaways.join('\n• ')}\n\n🎯 Mastery Goal: ${activeLecture.videoSummary.masteryGoal}`,
        citation: `${activeLecture.moduleName} — L'Accademia Venice, Official Architectural Record.`
      };
    }

    // Match the knowledge base by keyword
    for (const topic of SOCRATES_KNOWLEDGE) {
      if (topic.keywords.some(k => lower.includes(k))) {
        return {
          text: typeof topic.reply === 'function' ? topic.reply(activeLecture) : topic.reply,
          citation: topic.citation
        };
      }
    }

    // Code & Web Architecture query handling
    if (/(react|typescript|vite|tailwind|css|javascript|html|code|component|frontend|backend|api|function|state|props)/i.test(lower)) {
      return {
        text: `Ah, a query of digital craftsmanship! In modern web architecture and React software engineering (as taught in L'Accademia's Digital Bottega), we construct components like Renaissance master builders.\n\nRegarding "${query}":\n1. Maintain pure, declarative contracts between state and visual representation.\n2. Apply optical proportion (such as garish color suppression and 61.8% / 38.2% layout bounds).\n3. Keep side effects strictly isolated within lifecycle hooks.\n\nWould you like me to inspect your code snippet or expound on a specific architectural pattern?`,
        citation: "L'Accademia Digital Bottega & Architecture Guidelines 2026."
      };
    }

    // Math, Science, Physics & AI query handling
    if (/(math|science|physics|ai|ml|machine learning|algorithm|vector|matrix|tensor|calculus|geometry|dimension)/i.test(lower)) {
      return {
        text: `A fundamental inquiry into the laws of computation and nature!\n\nRegarding "${query}":\nMathematics is the secret geometry connecting high-dimensional vector spaces with human cognition. Just as Brunelleschi mapped 3D architectural vanishing lines into a 2D painting plane, neural attention mechanisms transform discrete token sequences into continuous geometric representations.\n\nShall we examine the exact matrix dot-product equation or explore its geometric interpretation in latent space?`,
        citation: "Epistemic Foundations of Neural Geometry — L'Accademia Venice."
      };
    }

    // Universal Socratic Dialectic Fallback for ANY question
    return {
      text: `An intriguing inquiry, scholar! Let us examine "${query}" through the Socratic dialectic:\n\n1. Premise: Every complex concept rests upon fundamental definitions and relational weights.\n2. Interrogation: When we analyze "${query}", what are the underlying assumptions? Is it a matter of structural balance (Vitruvian equilibrium), relational weight (Self-Attention perspective), or spatial visualization (Celestial astrolabes)?\n3. Synthesis: By anchoring "${query}" to empirical logic and geometric proportion, we arrive at clear, non-hallucinatory understanding.\n\nFeel free to specify which aspect of this topic you wish to illuminate further!`,
      citation: "Socratic Elenchus & Universal Dialectic Directory."
    };
  };

  // Handle quiz answer
  const handleSubmitQuiz = () => {
    if (selectedAnswer === null) return;
    setQuizSubmitted(true);
    const chosen = activeLecture.options[selectedAnswer];
    if (chosen.isCorrect) {
      try {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
      } catch {
        // Fallback
      }
    }
  };

  // Handle AI chat prompt submission
  const handleSendPrompt = (customText?: string) => {
    const textToSend = customText !== undefined ? customText : inputPrompt;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (customText === undefined) setInputPrompt('');
    setIsAiThinking(true);

    // Generate a contextually aware reply based on active lecture + knowledge base
    setTimeout(() => {
      const { text, citation } = buildSocratesReply(textToSend);
      const aiMsg: ChatMessage = {
        id: `soc-${Date.now()}`,
        sender: 'socrates',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        citation
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsAiThinking(false);
    }, 1100);
  };

  return (
    <section id="lms-demo" className={`py-28 relative transition-colors duration-500 border-y ${
      isDark ? 'bg-[#0a0d14] border-amber-500/25 text-slate-100' : 'bg-[#FAF7F0] border-amber-900/20 text-stone-900'
    }`}>
      <div className="max-w-[98%] w-full mx-auto px-2 sm:px-3">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono uppercase font-bold tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Interactive LMS Studio & AI Engine Demo</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Test Drive the Live Workspace
          </h2>
          <p className={`mt-4 font-garamond italic text-lg sm:text-2xl ${
            isDark ? 'text-slate-300' : 'text-stone-700'
          }`}>
            Experience how our students navigate sensory video canvas modules, solve Socratic architectural challenges, and collaborate with our live <span className="text-amber-400 font-semibold not-italic">Socrates AI Tutor</span> in real-time.
          </p>
        </div>

        {/* THE INTERACTIVE 3-PANEL LMS DASHBOARD CONTAINER */}
        <div className={`rounded-3xl border-2 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 ${
          isDark ? 'bg-[#101622] border-amber-500/40 shadow-amber-950/40' : 'bg-white border-amber-900/30 shadow-2xl'
        }`}>
          
          {/* PANEL 1 (LEFT 3 COLS): COURSE MODULES SIDEBAR */}
          <div className={`lg:col-span-3 border-b lg:border-b-0 lg:border-r flex flex-col justify-between ${
            isDark ? 'bg-[#0d121c] border-amber-500/20' : 'bg-stone-100 border-stone-300'
          }`}>
            <div>
              {/* Course Title Top Header */}
              <div className="p-5 border-b border-amber-500/15 bg-[#141b2c]/80">
                <span className="text-[10px] font-mono font-bold text-amber-400 tracking-wider block uppercase">
                  Active Demo Course
                </span>
                <h3 className="font-cinzel font-bold text-base sm:text-lg text-white mt-1 leading-tight">
                  The Architecture of AI & Neural Geometry
                </h3>
              </div>

              {/* Lecture list with Model Create & Delete controls */}
              <div className="p-3 space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-1.5 text-slate-400 flex items-center justify-between">
                  <span>Syllabus Models ({lectures.length})</span>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-2.5 py-1 rounded-lg bg-amber-500 text-stone-950 font-sans font-bold text-xs hover:bg-amber-400 transition-all flex items-center gap-1 shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>+ New Model</span>
                  </button>
                </div>

                {lectures.map((lec, idx) => {
                  const active = idx === activeLectureIdx;
                  return (
                    <div
                      key={lec.id}
                      onClick={() => handleSelectLecture(idx)}
                      className={`w-full p-3.5 rounded-xl text-left transition-all border flex items-start justify-between gap-2 group cursor-pointer ${
                        active 
                          ? isDark 
                            ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10' 
                            : 'bg-amber-100 border-amber-700 text-stone-900 font-bold'
                          : isDark
                            ? 'bg-[#141a29]/60 border-amber-500/10 hover:border-amber-500/40 text-slate-300' 
                            : 'bg-stone-200/60 border-stone-300 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-start gap-2.5 overflow-hidden">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 font-mono ${
                          active ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                        }`}>
                          {idx + 1}
                        </div>
                        <div className="overflow-hidden">
                          <span className="text-[10px] uppercase tracking-wider font-mono text-amber-400/80 block truncate">
                            {lec.moduleName}
                          </span>
                          <h4 className="text-xs font-sans font-semibold leading-snug mt-0.5 line-clamp-2">
                            {lec.title.replace(/^Lecture [I|II|III|IV|V|VI|VII|VIII]+: /, '')}
                          </h4>
                          <span className="text-[11px] font-mono text-sky-400 flex items-center gap-1 mt-1 font-bold">
                            <Play className="w-2.5 h-2.5 fill-sky-400" /> {lec.duration}
                          </span>
                        </div>
                      </div>

                      {/* Delete Model Button */}
                      <button
                        onClick={(e) => handleDeleteLecture(idx, e)}
                        title="Delete this model"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors shrink-0"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Sidebar info block */}
            <div className="p-4 m-3 rounded-2xl bg-gradient-to-tr from-amber-500/15 via-sky-500/10 to-amber-500/15 border border-amber-500/30 text-center space-y-2">
              <span className="text-[10px] uppercase font-mono font-bold text-amber-400 block tracking-widest">
                Medici Institution Access
              </span>
              <p className="text-xs text-slate-300 leading-snug font-sans">
                Deploy this custom learning engine for your corporate engineers or faculty.
              </p>
              <button 
                onClick={onOpenEnroll}
                className="w-full py-2 rounded-full bg-amber-500 text-stone-950 font-cinzel font-bold text-xs shadow-md hover:bg-amber-400 transition-colors"
              >
                Inquire For Your Academy
              </button>
            </div>
          </div>

          {/* PANEL 2 (MIDDLE 5 COLS): VIDEO CANVAS & SOCRATIC QUIZ */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-amber-500/20">
            <div>
              
              {/* Header with tabs (Transcript removed as requested) */}
              <div className="p-3 bg-[#131929] border-b border-amber-500/15 flex items-center justify-between">
                <div className="flex items-center gap-1 bg-[#0b0f19] p-1 rounded-lg border border-amber-500/20">
                  <button
                    onClick={() => setActiveTab('video')}
                    className={`px-3 py-1 rounded text-xs font-mono font-semibold flex items-center gap-1.5 transition-all ${
                      activeTab === 'video' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Play className="w-3 h-3" />
                    <span>Cinema Canvas</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('quiz')}
                    className={`px-3 py-1 rounded text-xs font-mono font-semibold flex items-center gap-1.5 transition-all relative ${
                      activeTab === 'quiz' ? 'bg-sky-500 text-stone-950 font-bold' : 'text-sky-300 hover:text-white'
                    }`}
                  >
                    <HelpCircle className="w-3 h-3 text-amber-400" />
                    <span>Socratic Quiz</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400 absolute top-1 right-1 animate-pulse"></span>
                  </button>
                </div>
              </div>

              {/* MAIN CONTENT CANVAS AREA */}
              <div className="p-5 min-h-[440px] flex flex-col justify-between bg-[#0e131e]/60">
                
                {activeTab === 'video' && (
                  <div className="space-y-5 animate-fadeIn">
                    {/* Lecture Picture Canvas */}
                    <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-black aspect-video group shadow-xl">
                      <img
                        key={activeLecture.id}
                        src={activeLecture.image}
                        alt={activeLecture.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/60 pointer-events-none"></div>

                      {/* Top Canvas Status Badge */}
                      <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-amber-400 text-xs font-mono border border-amber-500/40 z-10 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>LECTURE VISUAL CANVAS • {activeLecture.duration}</span>
                      </div>

                      {/* Top Right Module Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-sky-300 text-xs font-mono border border-sky-500/40 z-10">
                        {activeLecture.moduleName}
                      </div>

                      {/* Bottom Overlay Info Bar */}
                      <div className="absolute bottom-3 inset-x-4 space-y-1 z-10">
                        <div className="flex items-center justify-between text-xs text-slate-200 font-mono">
                          <span className="text-amber-300 font-bold">{activeLecture.title}</span>
                          <span className="text-sky-300 font-garamond italic">Total Duration: {activeLecture.duration}</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/10">
                          <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-sky-400 h-full rounded-full w-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Video Summary Card */}
                    <div className="p-4 rounded-2xl bg-[#141b2c] border border-amber-500/20 text-slate-200 space-y-3">
                      <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
                        <span className="font-cinzel text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Video Lecture Summary & Core Takeaways
                        </span>
                        <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded">
                          Length: {activeLecture.duration}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        <strong className="text-amber-300">Core Thesis: </strong> {activeLecture.videoSummary.coreThesis}
                      </p>

                      <div className="space-y-1 pt-1">
                        <span className="text-[11px] font-mono font-bold text-slate-400 uppercase block">Key Architectural Takeaways:</span>
                        <ul className="space-y-1 text-xs text-slate-300 font-sans">
                          {activeLecture.videoSummary.keyTakeaways.map((point, kIdx) => (
                            <li key={kIdx} className="flex items-start gap-2">
                              <span className="text-amber-400 text-xs mt-0.5">✦</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-amber-500/15 flex items-center justify-between text-xs">
                        <span className="text-sky-300 font-mono text-[11px]">🎯 Goal: {activeLecture.videoSummary.masteryGoal}</span>
                        <button
                          onClick={() => setActiveTab('quiz')}
                          className="px-3.5 py-1.5 rounded-full bg-sky-500 text-stone-950 font-sans font-bold text-xs hover:bg-sky-400 transition-all flex items-center gap-1 shadow-md"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Take Quiz →</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'quiz' && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="p-5 rounded-2xl bg-[#141c2c] border border-sky-500/30 text-white space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded bg-sky-500 text-stone-950 font-bold uppercase">
                          Socratic Knowledge Discovery
                        </span>
                        <span className="text-amber-400 font-bold">Question 1 of 1</span>
                      </div>

                      <h4 className="font-cinzel text-base sm:text-lg font-bold text-amber-200 leading-snug">
                        {activeLecture.quizQuestion}
                      </h4>

                      <div className="space-y-3 pt-2">
                        {activeLecture.options.map((option, idx) => {
                          const isSelected = selectedAnswer === idx;
                          let btnStyle = "bg-[#0b1019] border-slate-700 hover:border-amber-400 text-slate-200";
                          
                          if (isSelected) {
                            btnStyle = "bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/20";
                          }
                          if (quizSubmitted && isSelected) {
                            btnStyle = option.isCorrect 
                              ? "bg-emerald-500/20 border-emerald-400 text-emerald-200" 
                              : "bg-rose-500/20 border-rose-400 text-rose-200";
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => { if (!quizSubmitted) setSelectedAnswer(idx); }}
                              className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-sans transition-all flex items-start gap-3 ${btnStyle}`}
                            >
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono shrink-0 mt-0.5 border ${
                                isSelected ? 'bg-amber-400 text-stone-950 font-bold border-amber-300' : 'border-slate-600 text-slate-400'
                              }`}>
                                {String.fromCharCode(65 + idx)}
                              </div>
                              <span className="flex-1 leading-relaxed">{option.text}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && selectedAnswer !== null && (
                        <div className={`p-4 rounded-xl border mt-4 space-y-2 animate-fadeIn ${
                          activeLecture.options[selectedAnswer].isCorrect 
                            ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200' 
                            : 'bg-rose-950/60 border-rose-500/40 text-rose-200'
                        }`}>
                          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase">
                            {activeLecture.options[selectedAnswer].isCorrect ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                <span>Masterful Synthesis! (+50 Laurel Points)</span>
                              </>
                            ) : (
                              <>
                                <HelpCircle className="w-4 h-4 text-rose-400" />
                                <span>Socratic Elenchus Calibration Required</span>
                              </>
                            )}
                          </div>
                          <p className="text-xs font-sans text-slate-200 leading-relaxed">
                            {activeLecture.options[selectedAnswer].socraticExplanation}
                          </p>
                        </div>
                      )}

                      <div className="pt-3 flex items-center justify-between border-t border-amber-500/15">
                        <button
                          onClick={() => { setSelectedAnswer(null); setQuizSubmitted(false); }}
                          className="text-xs text-slate-400 font-mono hover:text-white flex items-center gap-1"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Reset Challenge</span>
                        </button>

                        {!quizSubmitted ? (
                          <button
                            onClick={handleSubmitQuiz}
                            disabled={selectedAnswer === null}
                            className={`px-6 py-2.5 rounded-full font-cinzel font-bold text-xs uppercase shadow-md transition-all ${
                              selectedAnswer !== null 
                                ? 'bg-amber-500 text-stone-950 hover:bg-amber-400 hover:scale-105' 
                                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                            }`}
                          >
                            Submit Dialectical Answer
                          </button>
                        ) : (
                          <button
                            onClick={() => { handleSelectLecture((activeLectureIdx + 1) % DEMO_LECTURES.length); }}
                            className="px-6 py-2.5 rounded-full bg-emerald-500 text-stone-950 font-cinzel font-bold text-xs uppercase hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25"
                          >
                            Proceed to Next Module →
                          </button>
                        )}
                      </div>

                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Bottom auxiliary toolbar */}
            <div className="p-3 bg-[#131929]/80 border-t border-amber-500/20 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-mono">
                <Terminal className="w-3.5 h-3.5 text-amber-400" /> WebGL Shader Audio & Canvas Active
              </span>
              <button 
                onClick={onOpenEnroll}
                className="text-amber-400 hover:underline font-mono font-semibold"
              >
                Unlock Complete 42-Hour Seminar →
              </button>
            </div>

          </div>

          {/* PANEL 3 (RIGHT 4 COLS): LIVE SOCRATES AI TUTORIAL CONVERSATION */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#0e1320] border-l-0">
            
            {/* Chat Top Header */}
            <div className="p-4 bg-gradient-to-r from-[#172033] to-[#12192a] border-b border-amber-500/25 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-[#12192a]"></span>
                </div>
                <div>
                  <h4 className="font-cinzel font-bold text-sm text-white flex items-center gap-1.5">
                    <span>Socrates AI Tutor</span>
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-400 block">Dialectical Mode • Live Assistant</span>
                </div>
              </div>

              <button 
                onClick={() => setMessages(INITIAL_SOCRATES_CHAT)}
                title="Reset Dialog History"
                className="p-1.5 text-slate-400 hover:text-white transition-colors text-xs font-mono"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Feed */}
            <div className="p-4 flex-1 max-h-[380px] lg:max-h-[460px] overflow-y-auto space-y-4 text-sm font-sans bg-[#0a0f19]">
              {messages.map((msg) => {
                const isSocrates = msg.sender === 'socrates';
                return (
                  <div 
                    key={msg.id}
                    className={`flex flex-col ${isSocrates ? 'items-start' : 'items-end'}`}
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 mb-1 px-1">
                      <span>{isSocrates ? '🏛 Socrates AI' : '👤 You (Scholar)'}</span>
                      <span>• {msg.timestamp}</span>
                    </div>

                    <div className={`p-3.5 rounded-2xl max-w-[92%] leading-relaxed whitespace-pre-line text-xs sm:text-sm border ${
                      isSocrates 
                        ? 'bg-[#151d2f] text-slate-100 border-amber-500/30 rounded-tl-none shadow-md' 
                        : 'bg-amber-500/20 text-white border-amber-400 rounded-tr-none shadow-sm'
                    }`}>
                      {msg.text}

                      {msg.citation && (
                        <div className="mt-2.5 pt-2 border-t border-amber-500/20 text-[11px] font-garamond italic text-amber-300 flex items-center gap-1.5">
                          <BookOpen className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>Citation: {msg.citation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {isAiThinking && (
                <div className="flex items-start gap-2 text-slate-400 text-xs font-mono py-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></div>
                  <span className="italic text-amber-300">Socrates is formulating a dialectical response...</span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Socratic Suggestion Pills */}
            <div className="px-3 py-2 bg-[#121929] border-t border-amber-500/15 overflow-x-auto">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                Suggested Inquiries (Click to Ask):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SOCRATES_PROMPT_SUGGESTIONS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendPrompt(prompt)}
                    className="px-2.5 py-1 rounded-full bg-[#1b2336] text-amber-300 border border-amber-500/30 text-[11px] font-sans hover:bg-amber-500 hover:text-stone-950 transition-colors truncate max-w-full text-left"
                  >
                    ✦ {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Prompt Input Bar */}
            <div className="p-3.5 bg-[#141b2e] border-t border-amber-500/25 flex items-center gap-2">
              <input 
                type="text"
                placeholder="Ask Socrates about architecture, code, logic..."
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSendPrompt(); }}
                className="w-full bg-[#0b0f19] text-white border border-amber-500/30 rounded-full px-4 py-2 text-xs sm:text-sm outline-none focus:border-amber-400 transition-all font-sans placeholder:text-slate-400"
              />
              <button 
                onClick={() => handleSendPrompt()}
                className="p-2.5 rounded-full bg-amber-500 text-stone-950 hover:bg-amber-400 transition-transform transform hover:scale-105 shadow-lg shadow-amber-500/20"
                title="Send Socratic Query"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* CREATE NEW MODEL MODAL DIALOG */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-fadeIn">
            <div className="bg-[#131a2b] border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                <h3 className="font-cinzel text-xl font-bold text-amber-400 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-amber-400" /> Create New Syllabus Model
                </h3>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-slate-400 hover:text-white text-lg font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateLecture} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Model Title / Topic:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Quantum Logic & Socratic Proofs"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-[#0b101a] border border-amber-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Module Name & Category:</label>
                  <input
                    type="text"
                    placeholder="e.g. Module IV • Classical Epistemology"
                    value={newModuleName}
                    onChange={(e) => setNewModuleName(e.target.value)}
                    className="w-full bg-[#0b101a] border border-amber-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Lecture Duration (e.g. 15:00):</label>
                  <input
                    type="text"
                    placeholder="15:00"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="w-full bg-[#0b101a] border border-amber-500/30 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-3 flex items-center justify-end gap-3 border-t border-amber-500/20">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-amber-500 text-stone-950 font-cinzel font-bold text-xs hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20"
                  >
                    Create Model ✓
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
