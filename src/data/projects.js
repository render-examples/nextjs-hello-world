export const projects = [
  {
    slug: 'trackme-fitness',
    title: 'TrackMe Fitness',
    status: ['Completed', '#34d399'],
    summary:
      'An offline-first full-stack mobile workout tracker: Tauri + React client, Axum + Postgres server, custom background sync engine. Unifies lifting + running. Repo is private for now.',
    cover: null,
    tech: [['Rust'], ['Typescript'], ['REST'], ['Security'], ['Tokio'], ['Async Rust'], ['Tauri'], ['Axum']],
    links: {
      demo: null,
    },
    contentPath: 'content/projects/trackme-fitness.mdx',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        type: 'text',
        body:
          'TrackMe Fitness is an offline-first mobile workout tracker that unifies lifting and running in a single app. Built solo as a deliberate deep dive into Rust, async Rust, the Tauri ecosystem, and designing a real client/server system from the ground up.',
      },
      {
        id: 'architecture',
        title: 'Architecture',
        type: 'text',
        body:
          'Client (Tauri mobile app): React + MUI webview, Rust Tauri commands own all HTTP/sync logic, local SQLite database, background sync worker (tokio interval + Notify).\n\nServer (Rust): Axum REST API with Tower middleware (CORS, tracing), JWT extractor + Argon2 login, Postgres via sqlx.\n\nKey idea: The webview never talks to the network. UI only invokes Rust commands; Rust owns all HTTP, token handling, and sync. Security-sensitive logic stays in typed, testable Rust.',
      },
      {
        id: 'planning',
        title: 'Planning',
        type: 'text',
        body:
          'Development followed deliberate complexity sequencing across 8 phases:\n1. Client prototype — UI + data modeling only\n2. Local persistence — SQLite + data model (prove offline works)\n3. Backend + Sync — Axum + Postgres + batched push/pull (no auth)\n4. Local integration — Docker Postgres + native server\n5. Temporary Auth — JWT extractor + temp token endpoint (prove isolation)\n6. Real Login — Argon2 /auth/login, demo accounts\n7. Sign-out + Polish — wipe local data, immediate sync, cycle signaling\n8. Mobile + Deploy — phone build, Render deploy, multi-account test\n\nEach phase isolated variables so failures had a single cause.',
      },
      {
        id: 'demo',
        title: 'Demo',
        type: 'links',
        body: 'Repository is private (possible future monetization). Screenshots in the project page demonstrate the running application. Deployed backend runs on Render under a custom subdomain; mobile app builds and runs on physical devices against it.',
        links: [],
      },
    ],
  },
  {
    slug: 'ray-tracer-rust',
    title: 'Ray Tracer',
    status: ['Completed', '#34d399'],
    summary:
      'A CPU-based path tracer written in Rust with BVH acceleration, soft shadows, and multi-threading.',
    cover: null,
    tech: [['Rust'], ['Computer Graphics'], ['Concurrency'], ['Optimization']],
    links: {
      repo: 'https://github.com/pmistry9597/Ray_Trace-Rust',
      demo: null,
    },
    contentPath: 'content/projects/ray-tracer-rust.mdx',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        type: 'text',
        body:
          'I built this ray tracer from scratch in Rust to learn about computer graphics and low-level optimization. It supports diffuse and specular materials, soft shadows via area lights, and a bounding volume hierarchy (BVH) for fast intersection culling. Rendering is multi-threaded using Rayon.',
      },
      {
        id: 'architecture',
        title: 'Architecture',
        type: 'text',
        body:
          'The codebase is split into three crates:\n\n- `core` — vector math, ray primitives, and color math\n- `bvh` — bounding volume hierarchy construction and traversal\n- `cli` — command-line interface, image output, and scene parsing\n\nRays are traced recursively with a maximum depth to prevent infinite reflection loops. The BVH reduces the per-pixel intersection cost from O(n) to O(log n) over scene geometry.',
      },
      {
        id: 'planning',
        title: 'Planning',
        type: 'text',
        body:
          'Development was split into milestones:\n1. Basic ray-sphere intersection and PPM output\n2. Material system (Lambertian, metal, dielectric)\n3. BVH acceleration structure\n4. Multi-threaded rendering and CLI polish\n\nEach milestone was tested with a rendered scene before moving to the next.',
      },
      {
        id: 'demo',
        title: 'Demo',
        type: 'links',
        body: 'View the source and render output on GitHub.',
        links: [
          { label: 'View Repo', url: 'https://github.com/pmistry9597/Ray_Trace-Rust' },
        ],
      },
    ],
  },
  {
    slug: 'climate-hack-2022',
    title: 'Climate Hack 2022',
    status: ['Completed', '#34d399'],
    summary:
      'Submission for Climate Hack 2022 — placed 14th out of over 130 participants.',
    cover: null,
    tech: [['Python'], ['Deep Learning']],
    links: {
      repo: 'https://github.com/pmistry9597/Climate-Hack-2022',
      demo: null,
    },
    contentPath: 'content/projects/climate-hack-2022.mdx',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        type: 'text',
        body:
          'My submission for Climate Hack 2022. I built a deep learning model using PyTorch to predict solar power output from satellite imagery and weather data, helping optimize grid storage.',
      },
      {
        id: 'architecture',
        title: 'Architecture',
        type: 'text',
        body:
          'A convolutional neural network ingests satellite cloud-cover images, while a separate MLP processes numerical weather forecasts. The two branches are fused and regressed to a solar power output value.',
      },
      {
        id: 'planning',
        title: 'Planning',
        type: 'text',
        body:
          'The hackathon timeline was 48 hours. We split work into data preprocessing, model architecture, training, and submission packaging, with daily checkpoint merges.',
      },
      {
        id: 'demo',
        title: 'Demo',
        type: 'links',
        body: 'Code and trained weights are available on GitHub.',
        links: [
          { label: 'View Repo', url: 'https://github.com/pmistry9597/Climate-Hack-2022' },
        ],
      },
    ],
  },
  {
    slug: 'rl-algo-demo',
    title: 'Reinforcement Learning Algorithms Demo',
    status: ['Completed', '#34d399'],
    summary:
      'A demonstration of prominent reinforcement learning algorithms with visualizations.',
    cover: null,
    tech: [['Python'], ['Deep Learning']],
    links: {
      repo: 'https://github.com/pmistry9597/Reinforcement-Learning-Algo-Demo',
      demo: null,
    },
    contentPath: 'content/projects/rl-algo-demo.mdx',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        type: 'text',
        body:
          'Interactive demonstrations of Q-Learning, Deep Q-Networks (DQN), and Policy Gradient methods applied to classic control environments.',
      },
      {
        id: 'architecture',
        title: 'Architecture',
        type: 'text',
        body:
          'Modular Python package separating environment wrappers, agent implementations, and visualization utilities. PyTorch is used for function approximation in the deep RL agents.',
      },
      {
        id: 'planning',
        title: 'Planning',
        type: 'text',
        body:
          'Implemented as a series of notebooks first, then refactored into a reusable package for easier experimentation.',
      },
      {
        id: 'demo',
        title: 'Demo',
        type: 'links',
        body: 'Run the notebooks locally or view the repository.',
        links: [
          { label: 'View Repo', url: 'https://github.com/pmistry9597/Reinforcement-Learning-Algo-Demo' },
        ],
      },
    ],
  },
  {
    slug: 'space-explorer',
    title: 'Space Explorer',
    status: ['Completed', '#34d399'],
    summary:
      'Space game to learn about the solar system, gravity, and orbits.',
    cover: null,
    tech: [['Javascript']],
    links: {
      repo: 'https://github.com/pmistry9597/Space-Explorer',
      demo: null,
    },
    contentPath: 'content/projects/space-explorer.mdx',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        type: 'text',
        body:
          'A browser-based space exploration game that teaches solar system concepts, gravity, and orbital mechanics through interactive simulation.',
      },
      {
        id: 'architecture',
        title: 'Architecture',
        type: 'text',
        body:
          'Vanilla JavaScript with HTML5 Canvas for rendering. A simple physics integrator handles gravitational N-body dynamics between celestial objects.',
      },
      {
        id: 'planning',
        title: 'Planning',
        type: 'text',
        body:
          'Designed as an educational tool, with levels that introduce one concept at a time (gravity, escape velocity, orbital velocity).',
      },
      {
        id: 'demo',
        title: 'Demo',
        type: 'links',
        body: 'Play the game and view the source on GitHub.',
        links: [
          { label: 'View Repo', url: 'https://github.com/pmistry9597/Space-Explorer' },
        ],
      },
    ],
  },
  {
    slug: 'circuit-builder',
    title: 'Circuit Builder',
    status: ['Completed', '#34d399'],
    summary:
      'Circuit game with lessons and a simulator.',
    cover: null,
    tech: [['Javascript']],
    links: {
      repo: 'https://github.com/pmistry9597/Circuit-Builder',
      demo: null,
    },
    contentPath: 'content/projects/circuit-builder.mdx',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        type: 'text',
        body:
          'An interactive circuit simulator with built-in lessons. Users place components, wire them together, and observe current flow and voltage in real time.',
      },
      {
        id: 'architecture',
        title: 'Architecture',
        type: 'text',
        body:
          'JavaScript-based circuit simulator using a node-matrix solver for DC analysis. The UI renders components and wires on an HTML5 Canvas.',
      },
      {
        id: 'planning',
        title: 'Planning',
        type: 'text',
        body:
          'Lessons were designed to progress from basic (battery + resistor) to complex (capacitors, oscillators).',
      },
      {
        id: 'demo',
        title: 'Demo',
        type: 'links',
        body: 'Try the simulator and view the repository.',
        links: [
          { label: 'View Repo', url: 'https://github.com/pmistry9597/Circuit-Builder' },
        ],
      },
    ],
  }
];