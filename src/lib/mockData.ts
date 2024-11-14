import { Startup, Investor } from '../types';

export const demoStartups: Startup[] = [
  {
    id: '1',
    name: 'NeuralFlow AI',
    description: 'Building the next generation of conversational AI for enterprise customer service. Our AI agents handle complex customer interactions with human-like understanding.',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=128&h=128&fit=crop',
    category: 'AI/ML',
    funding_stage: 'Seed',
    location: 'San Francisco, CA',
    team_size: '15-30',
    founded: '2022'
  },
  {
    id: '2',
    name: 'HealthAI Labs',
    description: 'Revolutionizing medical diagnosis with AI-powered imaging analysis. Our platform helps radiologists detect abnormalities with 99.9% accuracy.',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=128&h=128&fit=crop',
    category: 'HealthTech',
    funding_stage: 'Series A',
    location: 'Boston, MA',
    team_size: '30-50',
    founded: '2021'
  },
  {
    id: '3',
    name: 'EduBrain',
    description: 'Personalized learning paths powered by AI. Our platform adapts to each student's learning style and pace, ensuring optimal educational outcomes.',
    logo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=128&h=128&fit=crop',
    category: 'EdTech',
    funding_stage: 'Pre-seed',
    location: 'Austin, TX',
    team_size: '5-15',
    founded: '2023'
  },
  {
    id: '4',
    name: 'FinSense',
    description: 'AI-driven financial planning and wealth management platform. We help users make smarter investment decisions using predictive analytics.',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=128&h=128&fit=crop',
    category: 'FinTech',
    funding_stage: 'Series B',
    location: 'New York, NY',
    team_size: '50-100',
    founded: '2020'
  }
];

export const demoInvestors: Investor[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    company: 'Future Capital',
    bio: 'Investing in AI/ML and DeepTech startups. Previously founded two successful AI companies. Looking for ambitious founders solving hard technical problems.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&fit=crop',
    investment_focus: ['AI/ML', 'DeepTech'],
    portfolio_size: '12',
    check_size: '$500K-2M'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    company: 'TechVentures Partners',
    bio: 'Early-stage investor focused on B2B SaaS and AI applications. Leading seed rounds in transformative technology companies.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop',
    investment_focus: ['SaaS', 'AI/ML'],
    portfolio_size: '25',
    check_size: '$1M-5M'
  },
  {
    id: '3',
    name: 'Emily Zhang',
    company: 'Healthcare Innovations Fund',
    bio: 'Focused on HealthTech and AI applications in medicine. Looking for startups revolutionizing patient care and clinical workflows.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=128&h=128&fit=crop',
    investment_focus: ['HealthTech', 'AI/ML'],
    portfolio_size: '8',
    check_size: '$2M-10M'
  },
  {
    id: '4',
    name: 'David Park',
    company: 'EdTech Accelerator',
    bio: 'Supporting innovative education technology startups. Passionate about AI-driven personalized learning and skill development platforms.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=128&h=128&fit=crop',
    investment_focus: ['EdTech', 'AI/ML'],
    portfolio_size: '15',
    check_size: '$250K-1M'
  }
];