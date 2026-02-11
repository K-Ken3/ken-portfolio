
import { Service, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Modern Web Apps',
    description: 'Building blazing fast, SEO-optimized SPAs using React, Next.js, and TypeScript with a focus on performance.',
    icon: '🚀',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js']
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design Systems',
    description: 'Crafting intuitive, accessible, and high-fidelity interfaces that prioritize user experience and consistency.',
    icon: '🎨',
    tags: ['Tailwind CSS', 'Framer Motion', 'Figma', 'A11y']
  },
  {
    id: 'ai-integration',
    title: 'AI Solutions',
    description: 'Integrating Generative AI capabilities into products, from LLM chatbots to intelligent automation.',
    icon: '🤖',
    tags: ['Gemini API', 'LangChain', 'Prompt Engineering']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Professional visual branding, identity design, and marketing assets tailored for digital and print media.',
    icon: '✨',
    tags: ['Illustrator', 'Photoshop', 'Branding']
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'High-quality post-production, motion graphics, and storytelling for social media and commercial content.',
    icon: '🎬',
    tags: ['Premiere Pro', 'After Effects', 'Color Grade']
  },
  {
    id: 'social-mgmt',
    title: 'Social Management',
    description: 'Strategic content planning and community management to grow your presence and engagement online.',
    icon: '📱',
    tags: ['Strategy', 'Analytics', 'Growth']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Video Summarizer AI',
    description: 'An AI-powered application that analyzes video content and generates concise summaries automatically. It helps users quickly understand long videos by extracting key points, improving content consumption efficiency.',
    image: 'vid-sum.png',
    tags: ['React', 'D3.js', 'AI'],
    link: '#'
  },
  {
    id: '2',
    title: 'Stock & Expense Management System',
    description: 'A web-based financial tracking system that manages stock items, expenses, payment status (paid/unpaid), and date filtering, designed to improve business record accuracy and control.',
    image: 'stock-man.png', 
    tags: ['Next.js', 'Stripe', 'Zustand'],
    link: '#'
  },
  {
    id: '3',
    title: 'Responsive News Reporter Platform',
    description: 'A dynamic, database-driven news website with categorized content, reporter dashboard, and publishing features, built for scalability and real-world deployment.',
    image: 'news-repo.png', 
    tags: ['TypeScript', 'Firebase', 'Tailwind'],
    link: '#'
  }
];
