import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { StartupCard } from '../components/StartupCard';
import { Search, Filter } from 'lucide-react';

interface Startup {
  id: string;
  name: string;
  description: string;
  logo: string;
  category: string;
  funding_stage: string;
  location: string;
}

export function Startups() {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchStartups();
  }, []);

  async function fetchStartups() {
    try {
      const { data, error } = await supabase
        .from('startups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setStartups(data || []);
    } catch (error) {
      console.error('Error fetching startups:', error);
    }
  }

  const categories = ['AI/ML', 'SaaS', 'FinTech', 'HealthTech', 'EdTech'];

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || startup.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Discover AI Startups</h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search startups..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-5 w-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredStartups.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No startups found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredStartups.map(startup => (
            <StartupCard
              key={startup.id}
              name={startup.name}
              description={startup.description}
              logo={startup.logo || 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=128&fit=crop'}
              category={startup.category}
              fundingStage={startup.funding_stage}
              location={startup.location}
            />
          ))}
        </div>
      )}
    </div>
  );
}