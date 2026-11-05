export const timeline = [
  {
    id: 'break-1',
    type: 'break',
    title: 'Career Break',
    subtitle: 'Travel & Personal Projects',
    location: '',
    startDate: '2025-10',
    endDate: '2026-09',
    description: 'Took intentional time off to travel, reset, fulfil family commitments, and explore personal interests and new engineering skills.',
    highlights: [
      'Engineered and deployed TrackMe Fitness, a full-stack, mobile, workout tracking app (see Projects)',
      'Volunteered 3-4 months on a Buddhist monastery\'s snow and grounds safety team, proactively coordinating snow and ice response (snow blowers, clearing trucks, shoveling, salting) to keep pathways safe for residents and visitors',
      'Traveled internationally and supported family commitments, including a family wedding'
    ],
    tech: [],
    links: [],
    subItems: [
      // {
      //   id: 'travel-1',
      //   type: 'travel',
      //   title: 'Solo Travel — Southeast Asia',
      //   description: '3 months backpacking through Thailand, Vietnam, Indonesia, and Japan. Focused on cultural immersion and photography.',
      //   highlights: [
      //     'Learned basic Thai and Vietnamese',
      //     'Completed 10-day Vipassana meditation retreat',
      //     'Shot 2000+ photos (film + digital)'
      //   ],
      //   tech: [],
      //   links: []
      // },
      {
        id: 'project-2',
        type: 'project',
        title: 'TrackMe Fitness',
        description: 'A polyglot full-stack mobile app that addresses the unique needs of athletes that combine resistance training with endurance running.',
        tech: ['Rust', 'Typescript', 'REST', 'Security', 'Axum', 'Tokio', 'Async Rust', 'Tauri'],
        links: [
          // { label: 'View Repo', url: '#' },
          // {label: 'View Project', url: '#'},
        ],
        projectLink: "/projects/trackme-fitness",
      }
    ]
  },
  {
    id: 'work-1',
    type: 'work',
    title: 'Software Development Engineer',
    company: 'Amazon',
    location: 'Toronto, ON',
    startDate: '2025-05',
    endDate: '2025-09',
    image: {
      url: 'https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-svg-download-png-2285069.png',
    },
    description: "Development engineer for Alexa+, LLMs with agentic workflows. ***Laid off early due to company restructuring - transitioned to pursue personal projects and growth on my engineering journey).***",
    highlights: [
      'Implemented validation guardrails for configuration management in Alexa+ LLM API infrastructure using AWS Lambda, emphasizing scalability and reducing adverse events during dynamic inference by 3x',
      'Diagnosed and fixed production bugs in asynchronous agentic LLM system by tracing path through execution graph in spite of limited logging availability, causing a drop in bug reports by 10%',
      'Contributed to architecture migration plan of agentic LLM monolith into microservices, proposing broader and deeper inference branching to enable parallel action exploration while reducing latency'
    ],
    tech: ['Java', 'Python', 'Typescript', 'AWS', 'RxJava'],
    links: [
      // { label: 'Company Website', url: '#' }
    ],
    featured: true,
    // subItems: [
    //   {
    //     id: 'project-1',
    //     type: 'project',
    //     title: 'Internal Tool: Build Orchestrator',
    //     description: 'Built a CLI tool to orchestrate multi-service builds and deployments',
    //     tech: ['Go', 'Docker', 'GraphQL'],
    //     links: [
    //       { label: 'View Repo', url: '#' }
    //     ]
    //   }
    // ]
  },
  {
    id: 'work-2',
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Ultimate Kronos Group (UKG)',
    location: 'Toronto, ON',
    startDate: '2021-08',
    endDate: '2022-08',
    image: {
      url: "https://cdn.brandfetch.io/idYNOD4MeX/w/800/h/800/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B",
    },
    description: 'Engineered and deployed a full-stack web application for tenant management.',
    highlights: [
      'Successfully delivered a highly secure web application for client management and provisions, enhancing administration efficiency and mitigating vulnerabilities',
      'Conceptualized a responsive frontend that minimized user error during critical service changes using TypeScript/Angular',
      'Collaborated with a cross-functional team to design and rigorously test a Java-based containerized backend, reducing potential security risks',
      // 'Integrated the web application into CI/CD environment, utilizing Docker and Kubernetes to ensure streamlined deployment',
    ],
    tech: ['Java', 'Spring', 'Python', 'TypeScript', 'Angular', 'Docker', 'Kubernetes'],
    links: [],
    featured: true,
    subItems: []
  },
  {
    id: 'work-3',
    type: 'work',
    title: 'Software Developer and Engagement Associate',
    company: 'STEM Powering Canada',
    location: 'Toronto, ON',
    startDate: '2020-07',
    endDate: '2020-09',
    description: 'Software development and community outreach with the motive of democratizing STEM for all students.',
    highlights: [
      'Designed and developed an interactive space exploration game that implemented physical modelling (Kepler’s equations) to accurately simulate orbital trajectories',
      'Formulated a circuit simulator game that leveraged circuit theory and linear algebra to provide a realistic, immersive learning experience for students',
    ],
    tech: ['Javascript', 'PHP', 'MySQL', 'Apache'],
    links: [],
    subItems: []
  },
  {
    id: 'education-1',
    type: 'education',
    title: 'Bachelor of Applied Science — Computer Engineering',
    company: 'University of Toronto',
    location: 'Toronto, ON',
    startDate: '2018-09',
    endDate: '2024-05',
    image: {
      url: "https://images.seeklogo.com/logo-png/52/1/university-of-toronto-logo-png_seeklogo-525642.png",
    },
    description: 'Focused on software design, robotics & controls, systems programming, computer architecture, and advanced mathematics.',
    highlights: [
      'Software developer on University of Toronto Robotics Team (UTRA)',
      'Competed as an athlete on Iron Dragons dragon boat team during 2024 season'
    ],
    tech: ['C', 'C++', 'Verilog', 'Python', 'Linux', 'Control Systems', 'Network Architecture', 'Analog Electronics'],
    links: [],
    featured: true,
    subItems: []
  }
];

export function formatDate(dateStr) {
  if (!dateStr) return '';
  const [year, month] = dateStr.split('-');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[parseInt(month) - 1]} ${year}`;
}