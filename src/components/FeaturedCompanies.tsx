import React from 'react';
import { ExternalLink, Github, Linkedin } from 'lucide-react';

interface FeaturedCompany {
  name: string;
  logo: string;
  description: string;
  founders: {
    name: string;
    title: string;
    linkedin?: string;
    github?: string;
  }[];
  valuation: string;
  founded: string;
  category: string;
}

const featuredCompanies: FeaturedCompany[] = [
  {
    name: 'OpenAI',
    logo: 'https://images.unsplash.com/photo-1679958157946-8c0802de8fc9?w=128&h=128&fit=crop',
    description: 'Leading AI research company focused on developing safe and beneficial artificial general intelligence.',
    founders: [
      {
        name: 'Sam Altman',
        title: 'CEO',
        linkedin: 'https://www.linkedin.com/in/samaltman'
      },
      {
        name: 'Greg Brockman',
        title: 'President',
        linkedin: 'https://www.linkedin.com/in/gregbrockman'
      }
    ],
    valuation: '$80B+',
    founded: '2015',
    category: 'AI Research'
  },
  {
    name: 'Anthropic',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=128&h=128&fit=crop',
    description: 'AI research company focused on developing safe and ethical AI systems through constitutional AI.',
    founders: [
      {
        name: 'Dario Amodei',
        title: 'CEO',
        linkedin: 'https://www.linkedin.com/in/dario-amodei'
      }
    ],
    valuation: '$4.1B',
    founded: '2021',
    category: 'AI Safety'
  },
  {
    name: 'Cohere',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=128&h=128&fit=crop',
    description: 'Building large language models and NLP solutions for enterprises.',
    founders: [
      {
        name: 'Aidan Gomez',
        title: 'CEO',
        linkedin: 'https://www.linkedin.com/in/aidan-gomez'
      }
    ],
    valuation: '$2.2B',
    founded: '2019',
    category: 'Enterprise AI'
  },
  {
    name: 'Stability AI',
    logo: 'https://images.unsplash.com/photo-1679958157946-8c0802de8fc9?w=128&h=128&fit=crop',
    description: 'Open-source artificial intelligence company focusing on generative AI models.',
    founders: [
      {
        name: 'Emad Mostaque',
        title: 'CEO',
        linkedin: 'https://www.linkedin.com/in/emadm'
      }
    ],
    valuation: '$1B',
    founded: '2020',
    category: 'Generative AI'
  }
];

export function FeaturedCompanies() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Featured AI Companies</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {featuredCompanies.map((company) => (
          <div key={company.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>{company.category}</span>
                  <span>•</span>
                  <span>Founded {company.founded}</span>
                  <span>•</span>
                  <span>{company.valuation}</span>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-gray-700">{company.description}</p>
            
            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 mb-2">Founders</h4>
              <div className="space-y-2">
                {company.founders.map((founder) => (
                  <div key={founder.name} className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{founder.name}</span>
                      <span className="text-gray-600 text-sm ml-2">{founder.title}</span>
                    </div>
                    <div className="flex space-x-2">
                      {founder.linkedin && (
                        <a
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {founder.github && (
                        <a
                          href={founder.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800">
                <span>View Details</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}