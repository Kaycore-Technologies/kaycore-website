export const companyStats = [
    { id: 1, label: 'Years of Excellence', value: 15, suffix: '+' },
    { id: 2, label: 'Global Clients', value: 200, suffix: '+' },
    { id: 3, label: 'Projects Delivered', value: 500, suffix: '+' },
    { id: 4, label: 'Team Members', value: 120, suffix: '+' },
];

export const globalOffices = [
    {
        city: 'New York',
        country: 'USA',
        address: '250 Vesey Street, New York, NY 10281',
        phone: '+1 (555) 123-4567',
        image: '/assets/images/offices/newyork.jpg',
    },
    {
        city: 'London',
        country: 'UK',
        address: '1 Canada Square, Canary Wharf, London E14 5AB',
        phone: '+44 20 7946 0000',
        image: '/assets/images/offices/london.jpg',
    },
    {
        city: 'Bangalore',
        country: 'India',
        address: 'Outer Ring Road, Marathahalli, Bengaluru, KA 560037',
        phone: '+91 80 1234 5678',
        image: '/assets/images/offices/singapore.jpg', // Utilizing Singapore image as confusing fallback if Bangalore specific not downloaded, but I only downloaded 4. I should check if I have a distinct one. I'll use singapore for now or check my downloads. I downloaded newyork, london, singapore, dubai. I'll use singapore for Bangalore and Dubai for Dubai.
    },
    {
        city: 'Singapore',
        country: 'Singapore',
        address: '10 Collyer Quay, Ocean Financial Centre, Singapore 049315',
        phone: '+65 6789 0123',
        image: '/assets/images/offices/singapore.jpg',
    },
    {
        city: 'Dubai',
        country: 'UAE',
        address: 'Dubai Internet City, Building 1, Dubai, UAE',
        phone: '+971 4 123 4567',
        image: '/assets/images/offices/dubai.jpg',
    }
];

export const services = [
    {
        id: 1,
        title: 'AI & Automation Solutions',
        description: 'Custom AI dashboards, intelligent bots, and workflow automation to eliminate manual tasks and drive efficiency.',
        image: '/assets/images/services/ai-automation-real.png'
    },
    {
        id: 2,
        title: 'Software Development',
        description: 'Enterprise-grade web applications, SaaS platforms, and internal systems built for scale and performance.',
        image: '/assets/images/services/software-dev-real.png'
    },
    {
        id: 3,
        title: 'Cloud & DevOps',
        description: 'Seamless cloud migration, CI/CD pipeline automation, and scalable infrastructure architecture.',
        image: '/assets/images/services/cloud-devops-real.png'
    },
    {
        id: 4,
        title: 'Cybersecurity & Compliance',
        description: 'Comprehensive security audits, real-time monitoring, and risk mitigation strategies to protect your assets.',
        image: '/assets/images/services/cybersecurity-real.png'
    },
    {
        id: 5,
        title: 'Tech Consulting & Strategy',
        description: 'Expert architecture planning, system audits, and digital transformation roadmaps aligned with business goals.',
        image: '/assets/images/services/consulting-real.png'
    },
    {
        id: 6,
        title: 'Data Engineering & Analytics',
        description: 'High-performance data pipelines, warehousing, and real-time analytics to unlock actionable business insights.',
        image: '/assets/images/services/data-engineering-real.png'
    },
];

export const industries = [
    { name: 'Healthcare & HealthTech', description: 'HIPAA-compliant platforms and patient management systems.', image: '/assets/images/industries/healthcare-real.png' },
    { name: 'FinTech', description: 'Secure, high-frequency trading platforms and financial data analysis.', image: '/assets/images/industries/fintech-real.png' },
    { name: 'SaaS', description: 'Scalable multi-tenant architectures and subscription management.', image: '/assets/images/industries/saas-real.png' },
    { name: 'IT Services', description: 'Optimized internal tools and resource management solutions.', image: '/assets/images/industries/it-services-real.png' },
    { name: 'Startups & SMEs', description: 'MVP development and rapid scaling technology strategies.', image: '/assets/images/industries/startups-real.png' },
];

export const processSteps = [
    { num: '01', title: 'Discover & Understand', desc: 'We deep dive into your business goals and technical challenges.' },
    { num: '02', title: 'Strategy & Architecture', desc: 'Designing a robust, scalable blueprint for your solution.' },
    { num: '03', title: 'Build & Implement', desc: 'Agile development with clean, maintainable code.' },
    { num: '04', title: 'Test, Secure & Scale', desc: ' rigorous testing and security audits before launch.' },
    { num: '05', title: 'Ongoing Support', desc: 'Continuous maintenance and optimization partner.' },
];

export const partners = [
    { id: 1, name: 'Yum Brands', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Yum%21_Brands_logo.svg/1200px-Yum%21_Brands_logo.svg.png' },
    { id: 2, name: 'Hexaware', imageUrl: '/assets/partners/hexaware-v2.svg' },
    { id: 3, name: 'Franklin Templeton', imageUrl: 'https://www.franklintempleton.com/api/svg/v1/content/obm1qef7up/original/Franklin_Templeton.svg' },
    { id: 4, name: 'Fiduciary Trust International', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Fiduciary_Trust_Company_International.png' },
    { id: 5, name: 'Merkle Science', imageUrl: 'https://cdn.prod.website-files.com/6058883b1b6e85eceae76f61/6097cd679a058883a86f6d41_logo.svg' },
    { id: 6, name: 'Curve Tomorrow', imageUrl: '/assets/partners/curve-tomorrow-v2.svg' },
    { id: 7, name: 'Rocketium', imageUrl: 'https://rocketium.com/img/rocketium-logo-black.png' },
    { id: 8, name: 'EverReal', imageUrl: 'https://cdn.startbase.com/images/e1e823e4142074bdc52a4365a6fec65d/02a5f5cbbbfdc2c/' },
    { id: 9, name: 'DA Systems', imageUrl: 'https://da-systems.co.uk/wp-content/uploads/2022/01/DA-Systems-Logo-250.png' },
    { id: 10, name: 'WeGuide', imageUrl: 'https://cdn.healthtechalpha.com/static/resized/social_media_image/startup_data_images/114448.png' },
];

export const teamMembers = [
    { id: 1, name: "Sarah Jenkins", role: "CEO & Founder", bio: "Visionary leader with 15+ years in cloud architecture.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
    { id: 2, name: "David Chen", role: "CTO", bio: "Tech innovator specializing in AI and distributed systems.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" },
    { id: 3, name: "Elena Rodriguez", role: "Head of Design", bio: "Award-winning designer focused on user-centric digital experiences.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop" }
];

export const milestones = [
    { id: 1, year: '2018', title: 'Founding', description: 'Kaycore Technologies was established in New York.' },
    { id: 2, year: '2020', title: 'Global Expansion', description: 'Opened offices in London and Bangalore.' },
    { id: 3, year: '2022', title: 'AI Division', description: 'Launched dedicated AI & Machine Learning division.' },
    { id: 4, year: '2024', title: 'Industry Leader', description: 'Recognized as Top Cloud Consultant by Industry Weekly.' }
];

export const values = [
    { title: 'Excellence', copy: 'Precision in delivery, measurable outcomes, and accountability across every squad.', image: '/assets/images/about/value-excellence.jpg' },
    { title: 'Partnership', copy: 'Embedded teams that co-create with you, from strategy through run.', image: '/assets/images/about/value-partnership.jpg' },
    { title: 'Innovation', copy: 'Rapid prototyping and modern stacks to validate and scale new ideas.', image: '/assets/images/about/value-innovation.jpg' },
];

export const aboutSection = {
    mission: {
        title: 'Our Mission',
        description: 'We are committed to delivering cutting-edge cloud infrastructure, digital transformation, and technology consulting services that empower enterprises to innovate, scale, and compete in the digital economy.',
        image: '/assets/images/about/mission.jpg'
    },
    vision: {
        title: 'Our Vision',
        description: 'To become the leading cloud technology and digital transformation partner for enterprises across the globe, recognized for our technical excellence, innovation, and unwavering commitment to client success.',
        image: '/assets/images/about/vision.jpg'
    }
}

export const detailedServices = [
    {
        id: 1,
        title: 'Quality Engineering',
        description: 'Comprehensive QA solutions ensuring zero-defect delivery through automation, AI-driven testing, and performance engineering.',
        longDescription: 'In the digital-first era, quality is not just a checkpoint—it is a competitive advantage. Our Quality Engineering practice blends traditional rigor with next-gen technology. We move beyond simple bug finding to holistic system assurance, utilizing AI-driven test automation, continuous performance monitoring, and security-first validation. We ensure your platforms withstand real-world loads and resist evolving threats while accelerating your release velocity.',
        slug: 'quality-engineering',
        features: ['Test Automation (Selenium/Cypress)', 'AI-Driven Predictive Testing', 'Performance & Load Testing', 'Security & Compliance Audits'],
        image: '/assets/images/services/qa-automation.jpg',
        emoji: '🛡️',
        benefits: [
            'Reduce regression testing time by up to 70% with intelligent automation.',
            'Detect anomalies early with AI-powered predictive defect analysis.',
            'Ensure 99.99% system availability through rigorous load testing.',
            'Achieve continuous compliance with automated security guardrails.'
        ],
        process: [
            'Strategy & Assessment: Analyzing current maturity and defining QA goals.',
            'Framework Design: Building scalable automation architectures.',
            'Integration: Embedding QA into your CI/CD pipelines.',
            'Execution & Optimization: Continuous testing and feedback loops.'
        ]
    },
    {
        id: 2,
        title: 'Product Engineering',
        description: 'End-to-end digital product creation, from mobile-first applications to complex enterprise SaaS platforms.',
        longDescription: 'We build digital products that define categories. Our Product Engineering team partners with you from the napkin sketch to the global launch. We combine user-centric design with robust engineering principles to create web applications, mobile experiences, and SaaS platforms that are secure, scalable, and intuitive. Whether you need a high-performance React frontend or a distributed microservices backend, we deliver code that is ready for growth.',
        slug: 'product-engineering',
        features: ['Full-Stack Web Development', 'Native & Cross-Platform Mobile', 'SaaS Architecture Design', 'Microservices & API Strategy'],
        image: '/assets/images/services/web-mobile.jpg',
        emoji: '🚀',
        benefits: [
            'Accelerate time-to-market with agile, iterative development cycles.',
            'Scale effortlessly with cloud-native, microservices-based architectures.',
            'Engage users with pixel-perfect, consistently responsive UI/UX.',
            'Reduce technical debt through clean, maintainable, and documented code.'
        ],
        process: [
            'Discovery & Prototyping: Validating ideas with rapid wireframes.',
            'Architecture & Design: Selecting the right stack for scale.',
            'Agile Development: Sprints focused on deliverable value.',
            'Launch & Iteration: Data-driven enhancements post-release.'
        ]
    },
    {
        id: 3,
        title: 'Data & Intelligence',
        description: 'Turning raw data into strategic assets with robust pipelines, modern warehousing, and real-time analytics.',
        longDescription: 'Data is the lifeblood of modern enterprise, but raw data is noise without structure. Our Data & Intelligence services transform disparate information sources into a unified source of truth. We engineer robust ETL pipelines, architect scalable data lakes, and deploy intuitive BI dashboards. By enabling real-time analytics and ensuring data governance, we empower your leadership to make confident, evidence-based decisions.',
        slug: 'data-intelligence',
        features: ['ETL & Data Pipelines', 'Cloud Data Warehousing', 'BI & Visual Analytics', 'Big Data Processing'],
        image: '/assets/images/services/data-analytics.jpg',
        emoji: '📊',
        benefits: [
            'Unify siloed data sources for a 360-degree business view.',
            'Enable real-time decision making with sub-second query latency.',
            'Democratize access to insights with self-service BI tools.',
            'Improve data quality and compliance with automated governance.'
        ],
        process: [
            'Data Discovery: Mapping data sources and business questions.',
            'Platform Architecture: Designing the lake/warehouse ecosystem.',
            'Pipeline Engineering: Building resilient ingestion workflows.',
            'Analytics Activation: Creating dashboards and API endpoints.'
        ]
    },
    {
        id: 4,
        title: 'AI & Cognitive Tech',
        description: 'Future-proofing businesses with custom machine learning models, NLP solutions, and generative AI integration.',
        longDescription: 'Artificial Intelligence is shifting the paradigm of what is possible. We help you move beyond the hype to practical, high-value implementations. From custom Machine Learning models that predict customer churn to Generative AI solutions that automate content creation and support, we integrate intelligence into the core of your operations. Our ethical AI frameworks ensure transparency and reliability in every model we deploy.',
        slug: 'ai-cognitive-tech',
        features: ['Custom ML Models', 'Generative AI Solutions', 'Natural Language Processing', 'Computer Vision'],
        image: '/assets/images/services/ai-ml.jpg',
        emoji: '🧠',
        benefits: [
            'Automate complex cognitive tasks to reduce operational costs.',
            'Personalize customer experiences at scale using predictive ML.',
            'Unlock unstructured data value with Natural Language Processing.',
            'Accelerate innovation cycles with Generative AI assistants.'
        ],
        process: [
            'Use Case Definition: Identifying high-ROI AI opportunities.',
            'Data Preparation: Cleaning and labeling datasets for training.',
            'Model Development: Training, tuning, and validating algorithms.',
            'Deployment & MLOps: Monitoring model performance in production.'
        ]
    },
    {
        id: 5,
        title: 'Cloud & Infrastructure',
        description: 'Building resilient, scalable foundations for digital growth through automated DevOps and secure cloud architectures.',
        longDescription: 'Your infrastructure is the foundation of your digital agility. We architect cloud environments that are resilient, secure, and cost-optimized. Whether you are migrating from on-premise legacy servers or optimizing a multi-cloud setup, our DevSecOps approach ensures infrastructure involves code-enabling automated provisioning, self-healing systems, and rapid deployment pipelines that keep your business always on.',
        slug: 'cloud-infrastructure',
        features: ['Cloud Migration & Strategy', 'DevSecOps Automation', 'Kubernetes & Containerization', 'Disaster Recovery'],
        image: '/assets/images/services/cloud-infra.jpg',
        emoji: '☁️',
        benefits: [
            'Reduce infrastructure costs by 30-50% with auto-scaling and spot instances.',
            'Achieve zero-downtime deployments with advanced CI/CD pipelines.',
            'Enhance portability and efficiency with containerization (Docker/K8s).',
            'Ensure business continuity with robust disaster recovery plans.'
        ],
        process: [
            'Assessment & Roadmap: Analyzing workloads for cloud suitability.',
            'Landing Zone Setup: Establishing secure cloud foundations.',
            'Migration & Modernization: Moving applications with minimal disruption.',
            'Optimization: Continuous monitoring for cost and performance.'
        ]
    },
    {
        id: 6,
        title: 'Enterprise Modernization',
        description: 'Transforming legacy systems and implementing industry-specific solutions for agile, digital-first operations.',
        longDescription: 'Legacy systems shouldn’t hold back innovation. We specialize in untangling complex monolithic architectures and transforming them into modern, modular microservices. Our Enterprise Modernization services de-risk digital transformation by using proven strangler-fig patterns and incremental migration strategies. We breathe new life into core business systems, ensuring they are API-ready, cloud-native, and interoperable.',
        slug: 'enterprise-modernization',
        features: ['Legacy System Refactoring', 'HealthTech Compliance', 'Digital Transformation', 'Enterprise Integration'],
        image: '/assets/images/services/saas.jpg',
        emoji: '🏢',
        benefits: [
            'Extend the life and value of core legacy assets.',
            'Improve agility by decoupling monolithic dependencies.',
            'Seamlessly integrate with modern SaaS and third-party APIs.',
            'Mitigate operational risks associated with aging technology.'
        ],
        process: [
            'Portfolio Analysis: Assessing technical debt and business criticality.',
            'Modernization Strategy: Choosing between Rehost, Refactor, or Replatform.',
            'Incremental Execution: Migrating functionality module by module.',
            'Governance & Enablement: Upskilling teams on new technologies.'
        ]
    }
];

export const sectorSolutions = [
    {
        id: 1,
        title: 'Healthcare & HealthTech',
        description: 'Accelerating patient-centric care with HIPAA-compliant telemedicine platforms, IoT integration, and interoperable EHR systems.',
        slug: 'healthcare',
        features: ['Telemedicine Platforms', 'IoMT Data Integration', 'EHR Interoperability', 'HIPAA Compliance Audits'],
        image: '/assets/images/industries/healthcare.png',
        icon: 'heart-pulse'
    },
    {
        id: 2,
        title: 'Banking & FinTech',
        description: 'Securing the future of finance with high-frequency trading systems, fraud detection AI, and blockchain-enabled ledgers.',
        slug: 'fintech',
        features: ['Algorithmic Trading', 'Fraud Detection AI', 'Blockchain Solutions', 'Regulatory Reporting'],
        image: '/assets/images/industries/fintech.png',
        icon: 'landmark'
    },
    {
        id: 3,
        title: 'Marketing & Sales',
        description: 'Driving conversion with predictive lead scoring, customer sentiment analysis, and omnichannel marketing automation.',
        slug: 'marketing',
        features: ['Predictive Lead Scoring', 'Sentiment Analysis', 'Omnichannel Automation', 'Customer 360 View'],
        image: '/assets/images/industries/marketing.jpg',
        icon: 'trending-up'
    },
    {
        id: 4,
        title: 'Retail & E-commerce',
        description: 'Reimagining retail with headless commerce architectures, AR shopping experiences, and intelligent supply chain optimization.',
        slug: 'retail',
        features: ['Headless Commerce', 'AR/VR Shopping', 'Supply Chain AI', 'Personalized Recommendations'],
        image: '/assets/images/industries/retail.jpg',
        icon: 'shopping-bag'
    }
];

export const caseStudies = [
    {
        id: 1,
        title: 'E-Commerce Platform Migration to Cloud',
        industry: 'Retail',
        client: 'Leading Global Retail Chain',
        duration: '8 months',
        slug: 'ecommerce-platform-migration',
        description: 'Successfully migrated a legacy e-commerce platform to AWS, reducing infrastructure costs by 40% and improving performance.',
        overview: 'A major global retail chain was operating their e-commerce platform on legacy on-premises infrastructure, facing scalability challenges during peak seasons and high operational costs. Kaycore Technologies partnered with them to modernize their infrastructure by migrating to AWS.',
        problem: 'The client\'s existing e-commerce platform was built on aging monolithic architecture running on physical servers. They faced:\n• Inability to handle traffic spikes during holiday seasons\n• High infrastructure maintenance costs (6 full-time engineers)\n• Manual deployment processes leading to frequent downtime\n• Inability to meet global compliance requirements\n• Slow feature deployment cycles (2-3 months per release)',
        solution: 'We designed and implemented a comprehensive cloud migration strategy:\n• Architected a scalable microservices-based platform on AWS\n• Implemented auto-scaling infrastructure using ECS and Lambda\n• Deployed CI/CD pipelines for automated testing and deployment\n• Set up multi-region replication for disaster recovery and compliance\n• Migrated database to RDS with read replicas for performance\n• Implemented comprehensive monitoring and alerting with CloudWatch',
        results: {
            costReduction: '40% reduction in infrastructure costs',
            performanceImprovement: '3x faster page load times',
            uptime: '99.99% availability (vs 98.5% before)',
            deploymentTime: '10x faster feature releases (2-3 weeks)',
            scalability: 'Handles 10x traffic spikes without intervention',
        },
        keyResults: [
            'Infrastructure costs reduced from $800K to $480K annually',
            'Peak season traffic handled seamlessly with auto-scaling',
            'Manual deployments eliminated, now fully automated',
            'Global compliance requirements met (GDPR, PCI-DSS)',
            'Team reduced from 6 to 2 DevOps engineers',
        ],
        technologies: ['AWS EC2', 'AWS RDS', 'AWS S3', 'ECS', 'Lambda', 'CloudFormation', 'Docker', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2670&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'AI-Powered Fraud Detection System',
        industry: 'Financial Services',
        client: 'International Payment Processor',
        duration: '6 months',
        slug: 'ai-fraud-detection',
        description: 'Developed machine learning models to detect fraudulent transactions in real-time, reducing fraud by 87% while maintaining customer experience.',
        overview: 'A major international payment processor was losing millions annually to fraudulent transactions. We developed an advanced machine learning-based fraud detection system that identifies suspicious patterns in real-time.',
        problem: 'The payment processor\'s existing fraud detection rules-based system was:\n• Catching only 60% of fraudulent transactions\n• Generating 35% false positives, impacting customer experience\n• Processing fraud checks offline, with 2-hour delays\n• Unable to adapt to new fraud patterns\n• Costing the company $4.2M annually in fraud losses',
        solution: 'We developed a comprehensive AI/ML solution:\n• Built ensemble machine learning models combining XGBoost, Neural Networks, and Isolation Forests\n• Implemented real-time processing using Apache Kafka and Spark Streaming\n• Created feature engineering pipeline to extract patterns from transaction data\n• Deployed models as microservices with sub-100ms latency\n• Implemented continuous learning to adapt to new fraud patterns\n• Built analytics dashboard for fraud analyst insights',
        results: {
            fraudReduction: '87% reduction in successful fraudulent transactions',
            falsePositives: '65% reduction in false positives',
            costSavings: '$2.3M in annual fraud losses prevented',
            processingLatency: '<100ms average detection latency',
            accuracy: '98.7% precision in fraud detection',
        },
        keyResults: [
            'Detected and blocked 87% more fraud while reducing false positives',
            'Saved the company $2.3M in the first year',
            'Real-time processing replaced batch processing',
            'ML models continuously improve with new fraud patterns',
            'Improved customer satisfaction with fewer declined legitimate transactions',
        ],
        technologies: ['Python', 'TensorFlow', 'XGBoost', 'Apache Kafka', 'Spark', 'Kubernetes', 'PostgreSQL', 'Grafana'],
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Healthcare Data Analytics Platform',
        industry: 'Healthcare',
        client: 'Regional Hospital Network',
        duration: '10 months',
        slug: 'healthcare-data-analytics',
        description: 'Built a comprehensive data analytics platform for a healthcare provider, enabling data-driven clinical decision making.',
        overview: 'A large regional hospital network with 15 hospitals and 2000+ beds was struggling to analyze patient data across disparate systems. We built a unified data analytics platform enabling data-driven clinical decisions.',
        problem: 'The hospital network faced critical challenges:\n• Patient data fragmented across 15 different systems\n• Manual report generation took 1-2 weeks\n• No real-time visibility into hospital operations\n• Unable to identify clinical improvement opportunities\n• Compliance audits took 3+ months\n• Difficulty tracking patient outcomes across network',
        solution: 'We architected a comprehensive data platform:\n• Built unified data warehouse consolidating 15 disparate systems\n• Implemented ETL pipelines using Apache Airflow for daily data ingestion\n• Created real-time dashboards using Tableau and custom analytics\n• Developed ML models to predict patient outcomes and readmissions\n• Implemented HIPAA-compliant security and data governance\n• Built self-service analytics portal for physicians and administrators',
        results: {
            timeToInsight: '10x faster insights (1-2 days vs 1-2 weeks)',
            patientOutcomes: '22% improvement in patient readmission rates',
            dataAccuracy: '99.8% data quality across integrated systems',
            operationalEfficiency: '35% reduction in administrative overhead',
            complianceTime: '90% faster compliance audits',
        },
        keyResults: [
            'Unified data warehouse with 50M+ patient records',
            'Real-time dashboards accessed by 500+ physicians',
            'Predictive models identify high-risk patients for intervention',
            'Reduced readmissions through data-driven interventions',
            'Compliance reports now generated in 2 weeks vs 3 months',
        ],
        technologies: ['Apache Spark', 'Apache Airflow', 'Tableau', 'PostgreSQL', 'Python', 'Kubernetes', 'Airflow', 'TensorFlow'],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Global Financial System Modernization',
        industry: 'Banking',
        client: 'Multinational Investment Bank',
        duration: '18 months',
        slug: 'financial-system-modernization',
        description: 'Transformed a global bank\'s monolithic systems to microservices architecture, enabling faster feature deployment and scalability.',
        overview: 'A global investment bank operating a 25-year-old monolithic trading system needed modernization to meet market demands and regulatory requirements. We architected and implemented a microservices-based platform.',
        problem: 'The bank\'s monolithic system faced severe limitations:\n• Single deployment to entire system took 8 hours\n• New feature development took 4-6 months\n• System downtime affecting millions in transactions\n• Unable to scale components independently\n• Difficult to maintain and extend aging codebase\n• Regulatory compliance required complex workarounds',
        solution: 'We executed a strategic transformation:\n• Decomposed monolith into 45+ microservices\n• Implemented service mesh using Istio for reliability\n• Built comprehensive CI/CD pipelines with 100+ automated tests\n• Migrated to Kubernetes for orchestration and scaling\n• Implemented event-driven architecture using Kafka\n• Created API gateway for secure external integrations\n• Established comprehensive monitoring and tracing',
        results: {
            deploymentTime: '10x faster deployments (30 mins vs 8 hours)',
            systemReliability: '99.95% uptime SLA achievement',
            developmentVelocity: '5x increase in feature deployment',
            bugReduction: '60% fewer production incidents',
            timeToMarket: '4x faster new product launches',
        },
        keyResults: [
            'Microservices deployed independently, reducing risk',
            'Continuous deployment enables 50+ releases per day',
            'System handles 10x transaction volume without scaling delays',
            'Regulatory compliance automated through policy enforcement',
            'Team productivity increased significantly with parallel development',
        ],
        technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Istio', 'Apache Kafka', 'PostgreSQL', 'Redis', 'ELK Stack'],
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'Manufacturing IoT & Predictive Maintenance',
        industry: 'Manufacturing',
        client: 'Global Manufacturing Conglomerate',
        duration: '12 months',
        slug: 'manufacturing-iot-predictive',
        description: 'Implemented IoT sensors and ML models to predict equipment failures, reducing downtime and maintenance costs significantly.',
        overview: 'A global manufacturer operating 50+ facilities was experiencing frequent equipment failures causing production downtime and maintenance costs. We implemented IoT sensors and ML-based predictive maintenance.',
        problem: 'The manufacturer faced operational challenges:\n• Unplanned equipment downtime cost $2M monthly\n• Maintenance costs consuming 15% of operating budget\n• Reactive maintenance approach (fix when broken)\n• No visibility into equipment health across facilities\n• Maintenance technicians working reactively\n• Data silos preventing cross-facility optimization',
        solution: 'We deployed comprehensive IoT and AI solution:\n• Installed 5000+ IoT sensors across 50 facilities\n• Built real-time data ingestion using MQTT and Apache Kafka\n• Developed ML models predicting equipment failure 2-4 weeks in advance\n• Created mobile apps for maintenance teams with failure predictions\n• Implemented centralized monitoring dashboard\n• Built optimization algorithms to schedule maintenance efficiently\n• Integrated with existing ERP systems for spare parts planning',
        results: {
            downtime: '73% reduction in unplanned downtime',
            maintenanceCosts: '45% reduction in maintenance expenses',
            productionEfficiency: '38% improvement in OEE',
            maintenanceAccuracy: '91% accuracy in failure prediction',
            costSavings: '$8.5M annually in avoided downtime',
        },
        keyResults: [
            'Predictive maintenance prevents critical failures before they occur',
            'Unplanned downtime reduced from 5% to 1.3% of operational time',
            'Maintenance costs optimized through predictive scheduling',
            'Cross-facility insights enable best practice sharing',
            'ROI achieved in less than 14 months',
        ],
        technologies: ['IoT', 'MQTT', 'Apache Kafka', 'Python', 'TensorFlow', 'React Native'],
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop',
    },
];

export const blogPosts = [
    {
        id: 1,
        title: 'The Future of Cloud Computing: Trends to Watch in 2025',
        slug: 'future-cloud-computing-trends',
        date: '2024-12-10',
        author: 'Rajesh Kumar',
        designation: 'Principal Cloud Architect',
        category: 'Cloud Technology',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Explore the emerging trends in cloud computing that will shape enterprise technology strategies in 2025.',
        content: [
            {
                type: 'paragraph',
                text: 'Cloud computing continues to evolve at a rapid pace, and 2025 promises to be a transformative year for enterprise technology. As organizations increasingly adopt cloud-native architectures, several key trends are emerging that will reshape how we build, deploy, and manage applications. The era of "lift and shift" is effectively over; the new standard is cloud-native innovation that leverages the full spectrum of distributed computing capabilities.',
            },
            {
                type: 'paragraph',
                text: 'In this deep dive, we explore the convergence of AI, edge computing, and serverless architectures. We analyze how these technologies are not just incremental improvements but fundamental shifts in the IT landscape, necessitating a re-evaluation of current infrastructure strategies.',
            },
            {
                type: 'heading',
                text: '1. AI-Driven Cloud Operations (AIOps)',
            },
            {
                type: 'paragraph',
                text: 'Artificial intelligence is revolutionizing how cloud infrastructure is managed. Machine learning algorithms now optimize resource allocation, predict failures before they occur, and automate routine operational tasks. Cloud providers are embedding AI capabilities directly into their platforms, enabling self-healing infrastructure and intelligent autoscaling.',
            },
            {
                type: 'paragraph',
                text: 'For instance, predictive scaling uses historical traffic patterns to provision resources proactively, preventing cold starts and performance degradation during sudden spikes. Security is also a major beneficiary, with AI models detecting anomalous behavior patterns that traditional rule-based firewalls would miss.',
            },
            {
                type: 'heading',
                text: '2. Edge Computing Maturation',
            },
            {
                type: 'paragraph',
                text: 'The boundaries between cloud and edge computing are blurring. Organizations are increasingly moving compute workloads closer to data sources, reducing latency and improving performance. This hybrid model enables real-time processing for IoT applications, gaming, and autonomous systems.',
            },
            {
                type: 'list',
                items: [
                    'Reduced Latency: Processing data at the source eliminates the round-trip time to central data centers.',
                    'Bandwidth Optimization: Only aggregated insights are sent to the cloud, saving massive network costs.',
                    'Privacy and Compliance: Sensitive data can be processed locally, adhering to data residency laws.',
                ],
            },
            {
                type: 'heading',
                text: '3. Serverless Architecture Dominance',
            },
            {
                type: 'paragraph',
                text: 'Serverless computing is moving beyond simple functions to support complex, long-running workloads. With improvements in performance, cost efficiency, and developer experience, serverless is becoming the default choice for new application development. The abstraction of server management allows teams to focus purely on business logic.',
            },
            {
                type: 'quote',
                text: 'Serverless is not just about cost; it is about velocity. The ability to ship code without worrying about infrastructure provisioning is the ultimate competitive advantage.',
                citation: 'J. Doe, VP of Engineering',
            },
            {
                type: 'heading',
                text: 'Key Takeaways for CTOs',
            },
            {
                type: 'list',
                items: [
                    'AI integration will be table stakes for cloud platforms, not an optional add-on.',
                    'Edge computing will handle 30% of enterprise data processing by 2025.',
                    'Serverless will be the preferred architecture for greenfield projects, reducing TCO.',
                    'Multi-cloud strategies will become standard practice to avoid vendor lock-in.',
                ],
            },
            {
                type: 'paragraph',
                text: 'Organizations that embrace these trends early will gain significant competitive advantages in terms of agility, cost efficiency, and innovation capability. The future belongs to those who view the cloud not as a destination, but as an ever-evolving operating model.',
            },
        ],
    },
    {
        id: 2,
        title: 'Implementing Zero-Trust Security: A Practical Guide',
        slug: 'zero-trust-security-guide',
        date: '2024-12-08',
        author: 'Priya Sharma',
        designation: 'Lead Security Engineer',
        category: 'Cybersecurity',
        readTime: '12 min read',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Learn how to implement zero-trust security architecture in your organization with step-by-step guidance.',
        content: [
            {
                type: 'paragraph',
                text: 'Zero-trust security is no longer a theoretical concept—it\'s becoming a business necessity. The traditional perimeter-based security model, often described as "castle and moat," is obsolete in a world of remote work, cloud services, and mobile devices. In this guide, we walk through the practical steps of implementing a zero-trust architecture in your organization.',
            },
            {
                type: 'heading',
                text: 'Understanding Zero-Trust Principles',
            },
            {
                type: 'paragraph',
                text: 'Zero-trust operates on a simple principle: never trust, always verify. Every access request, whether from an internal user or external partner, is authenticated and authorized based on the principle of least privilege. This assumes that a breach is inevitable or has already occurred, and limits the "blast radius" of any compromised account.',
            },
            {
                type: 'heading',
                text: 'Step 1: Inventory and Asset Discovery',
            },
            {
                type: 'paragraph',
                text: 'Begin by understanding your complete IT environment. Document all users, devices, applications, and data repositories. Use automated discovery tools to identify shadow IT and unknown assets. You cannot protect what you do not know exists.',
            },
            {
                type: 'heading',
                text: 'Step 2: Implement Identity and Access Management (IAM)',
            },
            {
                type: 'paragraph',
                text: 'Identity is the new perimeter. Deploy multi-factor authentication (MFA) everywhere—no exceptions. Implement role-based access control (RBAC) and attribute-based access control (ABAC) to enforce least privilege principles. Ensure that access is granted based on context, such as device health, location, and user behavior.',
            },
            {
                type: 'heading',
                text: 'Step 3: Micro-Segmentation',
            },
            {
                type: 'paragraph',
                text: 'Divide your network into micro-segments. Unlike flat networks where lateral movement is easy, micro-segmentation acts as a series of bulkheads in a ship. If one segment is breached, the others remain secure. Use software-defined perimeter (SDP) technology to control access at the application level, not just the network level.',
            },
            {
                type: 'quote',
                text: 'Zero-trust security is an investment in your organization\'s future resilience. It shifts security from a static gateway to a dynamic, continuous evaluation.',
                citation: 'Cybersecurity Best Practices Report 2024',
            },
            {
                type: 'heading',
                text: 'Implementation Timeline',
            },
            {
                type: 'list',
                items: [
                    'Month 1-2: Assessment and planning. Identify critical assets and data flows.',
                    'Month 3-4: Identity infrastructure implementation. Roll out SSO and MFA.',
                    'Month 5-6: Network segmentation. Begin pilot programs for critical apps.',
                    'Month 7+: Continuous monitoring and optimization. Integrate SOAR tools.',
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Machine Learning for Business: Avoiding Common Pitfalls',
        slug: 'ml-for-business-pitfalls',
        date: '2024-12-05',
        author: 'Vikram Singh',
        designation: 'Head of Data Science',
        category: 'AI & ML',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Discover the most common mistakes organizations make when implementing ML projects.',
        content: [
            {
                type: 'paragraph',
                text: 'Machine learning offers tremendous potential for business transformation, yet many organizations struggle to realize value from their ML investments. The gap between a successful proof-of-concept (PoC) and a production-grade system is vast. This article explores the most common pitfalls and how to avoid them.',
            },
            {
                type: 'heading',
                text: 'Pitfall 1: Lack of Clear Business Objectives',
            },
            {
                type: 'paragraph',
                text: 'Many projects fail because they focus on technical excellence rather than business value. Data scientists might obsess over improving model accuracy by 0.1%, while the business question remains unanswered. Before building any model, define clear, measurable business objectives (KPIs) such as "reduce customer churn by 5%" or "automate 20% of support tickets."',
            },
            {
                type: 'heading',
                text: 'Pitfall 2: Poor Data Quality',
            },
            {
                type: 'paragraph',
                text: 'Models are only as good as the data they train on ("Garbage In, Garbage Out"). Invest heavily in data engineering: data cleaning, validation, and governance. A simple model trained on high-quality, relevant data will consistently outperform a complex deep learning model trained on noisy, biased data.',
            },
            {
                type: 'heading',
                text: 'Pitfall 3: Ignoring the Operations (MLOps)',
            },
            {
                type: 'paragraph',
                text: 'Deploying a model is not the end; it is the beginning. Models drift over time as real-world data changes. Without robust MLOps practices—continuous monitoring, automated retraining pipelines, and version control—models will degrade in performance. Treat ML models like perishable software artifacts.',
            },
            {
                type: 'heading',
                text: 'Best Practices for Success',
            },
            {
                type: 'list',
                items: [
                    'Start with well-defined business problems, not available data.',
                    'Build cross-functional teams with data scientists, engineers, and domain experts.',
                    'Implement robust data governance and quality processes early.',
                    'Plan for model monitoring and retraining from day one.',
                    'Ensure stakeholder alignment on success metrics and ROI expectations.',
                ],
            },
        ],
    },
    {
        id: 4,
        title: 'DevOps Best Practices: CI/CD Pipeline Optimization',
        slug: 'devops-cicd-optimization',
        date: '2024-11-30',
        author: 'Arun Desai',
        designation: 'Senior DevOps Architect',
        category: 'DevOps',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Master the techniques for optimizing your CI/CD pipelines to reduce deployment time.',
        content: [
            {
                type: 'paragraph',
                text: 'A well-optimized CI/CD pipeline is the backbone of modern software delivery. It is the factory floor of the digital age. In this article, we explore proven techniques for improving pipeline performance, reliability, and security to ensure your team ships code faster and with higher confidence.',
            },
            {
                type: 'heading',
                text: 'Pipeline Optimization Strategies',
            },
            {
                type: 'paragraph',
                text: 'Speed is essential, but not at the cost of stability. The following strategies help balance velocity with rigor:',
            },
            {
                type: 'list',
                items: [
                    'Parallelization: Run independent stages simultaneously (e.g., unit tests, linting, and security scans) to reduce total build time.',
                    'Caching: Aggressively cache dependencies (node_modules, maven repo) and build artifacts. Only rebuild what has changed.',
                    'Container Optimization: Use multi-stage builds to minimize container sizes. Smaller images pull faster and reduce attack surface.',
                    'Test Segmentation: Run critical "smoke tests" on every commit, but defer extensive E2E suites to nightly builds or merge requests.',
                    'Infrastructure as Code (IaC): Version control all pipeline configurations to ensure reproducibility and auditability.',
                ],
            },
            {
                type: 'heading',
                text: 'Measuring Pipeline Health',
            },
            {
                type: 'paragraph',
                text: 'You cannot improve what you do not measure. Track key engineering metrics such as Build Time, Success Rate, Deployment Frequency, and Mean Time to Recovery (MTTR). Use these metrics to identify bottlenecks. Is the testing stage taking 80% of the time? Is the deployment stage flaky? Data-driven optimization is the hallmark of elite DevOps teams.',
            },
        ],
    },
    {
        id: 5,
        title: 'Data Privacy Compliance: GDPR and Beyond',
        slug: 'data-privacy-compliance-gdpr',
        date: '2024-11-25',
        author: 'Neha Patel',
        designation: 'Director of Compliance',
        category: 'Compliance',
        readTime: '11 min read',
        image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Navigate the complex landscape of data privacy regulations including GDPR and CCPA.',
        content: [
            {
                type: 'paragraph',
                text: 'Data privacy regulations are becoming increasingly stringent globally. Organizations must understand and comply with multiple regulatory frameworks while maintaining business agility. The cost of non-compliance involves massive fines, but the reputational damage can be even more catastrophic.',
            },
            {
                type: 'heading',
                text: 'Major Privacy Regulations',
            },
            {
                type: 'list',
                items: [
                    'GDPR (General Data Protection Regulation) - European Union: The gold standard for privacy, emphasizing user consent and the "right to be forgotten."',
                    'CCPA (California Consumer Privacy Act) - California, USA: Focuses on consumer rights regarding the sale of personal information.',
                    'LGPD (Lei Geral de Proteção de Dados) - Brazil: Closely modeled after GDPR, affecting all companies doing business in Brazil.',
                    'Emerging regulations in Asia-Pacific (India\'s DPDP, etc.) are swiftly catching up.',
                ],
            },
            {
                type: 'heading',
                text: 'Compliance Implementation Steps',
            },
            {
                type: 'paragraph',
                text: 'Compliance is not a one-time project; it is an ongoing operational requirement. Begin with a comprehensive data audit to understand what data you collect, where it is stored, and who has access to it. Implement "Privacy by Design" principles: ensure that privacy features are embedded into the architecture of your systems from the initial design phase, rather than bolted on as an afterthought.',
            },
        ],
    },
    {
        id: 6,
        title: 'Microservices Architecture: When and How to Implement',
        slug: 'microservices-architecture-guide',
        date: '2024-11-20',
        author: 'Rajesh Kumar',
        designation: 'Principal Cloud Architect',
        category: 'Architecture',
        readTime: '13 min read',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Understand the benefits and challenges of microservices architecture.',
        content: [
            {
                type: 'paragraph',
                text: 'Microservices architecture has become the go-to approach for building scalable, maintainable applications. By breaking down a monolithic application into smaller, independent services, teams can deploy faster and scale more efficiently. However, it comes with its own set of challenges and complexities.',
            },
            {
                type: 'heading',
                text: 'When to Use Microservices',
            },
            {
                type: 'paragraph',
                text: 'Microservices are not a silver bullet. They introduce network latency and distributed system complexity. You should consider them when:',
            },
            {
                type: 'list',
                items: [
                    'You have large, complex applications requiring independent scaling components.',
                    'Your teams are organized around business capabilities (Conway\'s Law).',
                    'You need continuous deployment and fast iteration cycles.',
                    'You have a diverse technology stack where different services benefit from different languages or databases.',
                ],
            },
            {
                type: 'heading',
                text: 'Common Challenges',
            },
            {
                type: 'list',
                items: [
                    'Distributed System Complexity: Debugging across services is hard.',
                    'Data Consistency: Achieving consistency without distributed transactions (Sagas).',
                    'Operational Overhead: Requires advanced monitoring (Observability) and automation.',
                ],
            },
        ],
    },
    {
        id: 7,
        title: 'Kubernetes at Scale: Production Lessons Learned',
        slug: 'kubernetes-scale-lessons',
        date: '2024-11-15',
        author: 'Vikram Singh',
        designation: 'Head of Data Science',
        category: 'Infrastructure',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Real-world insights from running Kubernetes in production at scale.',
        content: [
            {
                type: 'paragraph',
                text: 'Running Kubernetes at scale presents unique challenges. What works for a 3-node cluster often breaks at 500 nodes. In this article, we share lessons learned from production deployments managing thousands of containers for our enterprise clients.',
            },
            {
                type: 'heading',
                text: 'Lesson 1: Resource Management Is Critical',
            },
            {
                type: 'paragraph',
                text: 'Properly configure resource requests and limits for all containers. "Requests" guarantee the resources a container gets, while "limits" cap what it can use. Without this, you\'ll face unpredictable scheduling (Noisy Neighbor problem), evictions, and performance issues. Always set memory limits to prevent OOM kills taking down the node.',
            },
            {
                type: 'heading',
                text: 'Lesson 2: Monitoring and Observability',
            },
            {
                type: 'paragraph',
                text: 'Implement comprehensive monitoring from day one. You can\'t ssh into a server to check logs anymore. Track cluster health (etcd latency, API server readiness), node status, and pod metrics. Use structured logging and distributed tracing (Jaeger/Zipkin) to follow requests across services.',
            },
        ],
    },
    {
        id: 8,
        title: 'API Design Patterns: Building Scalable APIs',
        slug: 'api-design-patterns-scalable',
        date: '2024-11-10',
        author: 'Priya Sharma',
        designation: 'Lead Security Engineer',
        category: 'Development',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Learn proven patterns and best practices for designing APIs that are scalable.',
        content: [
            {
                type: 'paragraph',
                text: 'Well-designed APIs are the foundation of modern software systems. They are the contracts between different components. This guide explores patterns and practices for building scalable, maintainable APIs that developers love to use.',
            },
            {
                type: 'heading',
                text: 'REST API Design Principles',
            },
            {
                type: 'list',
                items: [
                    'Use standard HTTP methods (GET, POST, PUT, DELETE) correctly.',
                    'Design resources, not actions/verbs. URIs should be nouns (e.g., /users/123).',
                    'Use proper HTTP status codes (200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, etc.).',
                    'Implement pagination (cursor-based is better than offset-based) for large datasets.',
                    'Version your API explicitly (e.g., /v1/...) to avoid breaking changes.',
                ],
            },
            {
                type: 'heading',
                text: 'Performance Optimization',
            },
            {
                type: 'paragraph',
                text: 'Performance features should be built-in. Implement caching strategies (ETags, Cache-Control headers). Use rate limiting (Token Bucket algorithm) to prevent abuse. Optimize response payloads using compression (gzip/brotli) and consider GraphQL if clients notoriously over-fetch data.',
            },
        ],
    },
    {
        id: 9,
        title: 'Observability in Distributed Systems',
        slug: 'observability-distributed-systems',
        date: '2024-11-05',
        author: 'Arun Desai',
        designation: 'Senior DevOps Architect',
        category: 'Operations',
        readTime: '11 min read',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Implement comprehensive observability across your distributed systems.',
        content: [
            {
                type: 'paragraph',
                text: 'Observability is the ability to understand and debug complex systems based on the data they produce. In distributed systems, where a single user request might touch 50 different services, it\'s not just important—it\'s essential for survival.',
            },
            {
                type: 'heading',
                text: 'The Three Pillars of Observability',
            },
            {
                type: 'list',
                items: [
                    'Metrics: "Is there a problem?" - Aggregatable numbers (e.g., CPU, Memory, Request Rate).',
                    'Logs: "What is the problem?" - Detailed text records of system events (errors, warnings).',
                    'Traces: "Where is the problem?" - End-to-end request flows showing latency at every hop.',
                ],
            },
            {
                type: 'heading',
                text: 'Implementation Best Practices',
            },
            {
                type: 'list',
                items: [
                    'Instrument all critical code paths using open standards like OpenTelemetry.',
                    'Use correlation IDs for request tracing to stitch logs together.',
                    'Aggregate logs and metrics centrally (ELK, Prometheus, Grafana).',
                    'Set up intelligent alerting for anomalies, avoiding alert fatigue.',
                ],
            },
        ],
    },
    {
        id: 10,
        title: 'The Future of Web Development in 2025',
        slug: 'future-web-development-2025',
        date: '2024-12-11',
        author: 'Rajesh Kumar',
        designation: 'Principal Cloud Architect',
        category: 'Web Development',
        readTime: '10 min read',
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Explore the cutting-edge trends shaping the future of web development in 2025 and beyond.',
        content: [
            {
                type: 'paragraph',
                text: 'The web development landscape is evolving faster than ever. As we look ahead to 2025, several transformative trends are reshaping how we build, deploy, and experience web applications.',
            },
            {
                type: 'heading',
                text: '1. AI-Powered Development Tools',
            },
            {
                type: 'paragraph',
                text: 'Artificial intelligence is revolutionizing the development workflow. From intelligent code completion (like GitHub Copilot) to automated testing and self-healing UI tests, AI assistants are becoming indispensable partners. They allow developers to focus on higher-level problem solving rather than syntax.',
            },
            {
                type: 'heading',
                text: '2. Edge Computing and Distributed Rendering',
            },
            {
                type: 'paragraph',
                text: 'Edge computing is moving processing closer to users, dramatically reducing latency. Modern full-stack frameworks are embracing edge-first architectures, enabling ultra-fast page loads and real-time interactivity at global scale.',
            },
            {
                type: 'heading',
                text: '3. WebAssembly (WASM) Maturation',
            },
            {
                type: 'paragraph',
                text: 'WebAssembly is enabling high-performance applications in the browser. From video editing (Adobe) to 3D modeling (Figma), tasks previously requiring native desktop apps now run seamlessly in web browsers, unlocking a new class of web software.',
            },
            {
                type: 'heading',
                text: 'Key Technologies to Watch',
            },
            {
                type: 'list',
                items: [
                    'Frameworks: Next.js and Remix leading the full-stack charge.',
                    'Reactivity: Svelte and SolidJS challenging the Virtual DOM model.',
                    'Runtimes: Deno and Bun focusing on performance and security.',
                    'Styling: Utility-first CSS (Tailwind) becoming the standard.',
                ],
            },
        ],
    },
];

export const labsProjects = [
    {
        id: 'sentiment-analyzer',
        title: 'Cognitive Sentiment',
        subtitle: 'Artificial Intelligence',
        description: 'Real-time NLP engine with neural processing visualization.',
        href: '/demos/sentiment-analyzer',
        category: 'AI & Neural Systems',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop'
    },
    {
        id: 'telehealth-monitor',
        title: 'Vitals Monitor',
        subtitle: 'Health Tech',
        description: 'Simulated IoT telemetry streaming for remote patient monitoring.',
        href: '/demos/telehealth-monitor',
        category: 'Health & BioTech',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'cloud-estimator',
        title: 'Cloud Estimator 2.0',
        subtitle: 'FinTech',
        description: 'Infrastructure modeling with AI inference cost analysis.',
        href: '/demos/cloud-estimator',
        category: 'FinTech & Cloud',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'qa-dashboard',
        title: 'QA Command Center',
        subtitle: 'DevOps / QA',
        description: 'Reliability metrics and flaky test analysis dashboard.',
        href: '/demos/qa-dashboard',
        category: 'DevSecOps & QA',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'kanban-board',
        title: 'Agile Kanban',
        subtitle: 'Productivity',
        description: 'Drag-and-drop workflow management with persistent state.',
        href: '/demos/kanban-board',
        category: 'Enterprise Productivity',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'secure-hash',
        title: 'Secure Hash',
        subtitle: 'Cybersecurity',
        description: 'Client-side cryptographic visualization and salt generation.',
        href: '/demos/secure-hash',
        category: 'DevSecOps & QA',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'token-estimator',
        title: 'AI Token Estimator',
        subtitle: 'AI Ops',
        description: 'Real-time LLM token usage and cost approximation.',
        href: '/demos/token-estimator',
        category: 'AI & Neural Systems',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'resume-matcher',
        title: 'Resume Matcher',
        subtitle: 'HR Tech',
        description: 'ATS keyword optimization analysis and matching engine.',
        href: '/demos/resume-matcher',
        category: 'Enterprise Productivity',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'loan-visualizer',
        title: 'Loan Visualizer',
        subtitle: 'FinTech',
        description: 'Mortgage amortization & interest simulator with interactive charts.',
        href: '/demos/loan-visualizer',
        category: 'FinTech & Cloud',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
    },
    {
        id: 'triage-assistant',
        title: 'Triage Assistant',
        subtitle: 'Health Tech',
        description: 'ER ESI priority & resource allocation logic engine.',
        href: '/demos/triage-assistant',
        category: 'Health & BioTech',
        image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2669&auto=format&fit=crop'
    },
    {
        id: 'voice-clone',
        title: 'Generative Voice Synths',
        subtitle: 'AI Research',
        description: 'Few-shot voice cloning and emotional speech synthesis engine.',
        href: '/demos/voice-clone',
        category: 'AI & Neural Systems',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'blockchain-vault',
        title: 'Smart Identity Vault',
        subtitle: 'Web3 / FinTech',
        description: 'Decentralized identity management with ZK-proof verification.',
        href: '/demos/blockchain-vault',
        category: 'FinTech & Cloud',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'chaos-visualizer',
        title: 'Chaos Mesh Sim',
        subtitle: 'SRE / DevOps',
        description: 'Interactive visualization of distributed system failure injection.',
        href: '/demos/chaos-visualizer',
        category: 'DevSecOps & QA',
        image: 'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'workspace-graph',
        title: 'Workspace Knowledge Graph',
        subtitle: 'Enterprise Tech',
        description: 'AI-driven organizational network analysis and insight mapper.',
        href: '/demos/workspace-graph',
        category: 'Enterprise Productivity',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop'
    },
    {
        id: 'genomic-finder',
        title: 'Genomic Pattern Finder',
        subtitle: 'Bioinformatics',
        description: 'High-throughput DNA sequence anomaly detection using CNNs.',
        href: '/demos/genomic-finder',
        category: 'Health & BioTech',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2670&auto=format&fit=crop'
    },
];

// Reordering Logic: AI -> QA -> DevOps -> Apps
const aiProjects = labsProjects.filter(p => p.category === 'AI & Neural Systems' || p.category === 'AI Ops' || p.category === 'AI Research' || p.subtitle === 'Artificial Intelligence');
const qaProjects = labsProjects.filter(p => p.category === 'DevSecOps & QA' || p.subtitle === 'DevOps / QA');
const devOpsProjects = labsProjects.filter(p => p.subtitle === 'SRE / DevOps' && !qaProjects.includes(p));
const otherProjects = labsProjects.filter(p => !aiProjects.includes(p) && !qaProjects.includes(p) && !devOpsProjects.includes(p));

export const orderedLabsProjects = [...aiProjects, ...qaProjects, ...devOpsProjects, ...otherProjects];

export interface JobOpportunity {
    id: string;
    title: string;
    type: 'Full-time' | 'Contract' | 'Remote';
    location: string;
    department: 'Engineering' | 'Design' | 'Product' | 'Marketing';
    description: string;
}

export const careerOpportunities: JobOpportunity[] = [
    {
        id: 'fe-eng',
        title: 'Senior Frontend Engineer',
        type: 'Full-time',
        location: 'Remote, India',
        department: 'Engineering',
        description: 'We are looking for a React/Next.js expert to lead our frontend architecture. You will be building complex data visualizations and responsive UIs for our enterprise clients.'
    },
    {
        id: 'ml-eng',
        title: 'Machine Learning Engineer',
        type: 'Full-time',
        location: 'Remote, India',
        department: 'Engineering',
        description: 'Help us build the next generation of predictive analytics tools. Experience with Python, TensorFlow/PyTorch, and NLP is required.'
    },
    {
        id: 'prod-des',
        title: 'Product Designer',
        type: 'Full-time',
        location: 'Remote, India',
        department: 'Design',
        description: 'Design intuitive and beautiful interfaces for complex data-heavy applications. Mastery of Figma and a strong portfolio of B2B SaaS work is essential.'
    }
];
