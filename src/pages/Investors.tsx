import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Search, Building2, Briefcase } from 'lucide-react';

interface Investor {
  id: string;
  name: string;
  company: string;
  bio: string;
  avatar: string;
  investment_focus: string[];
  portfolio_size: string;
  check_size: string;
}

function InvestorCard({ investor }: { investor: Investor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img 
          src={investor.avatar || 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=128&h=128&fit=crop'} 
          alt={investor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{investor.name}</h3>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <Building2 className="h-4 w-4 mr-1" />
            <span>{investor.company}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm mt-1">
            <Briefcase className="h-4 w-4 mr-1" />
            <span>{investor.check_size} · {investor.portfolio_size} companies</span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{investor.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {investor.investment_focus.map((focus, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
          >
            {focus}
          </span>
        ))}
      </div>
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
        Connect
      </button>
    </div>
  );
}

export function Investors() {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFocus, setSelectedFocus] = useState('all');

  useEffect(() => {
    fetchInvestors();
  }, []);

  async function fetchInvestors() {
    try {
      const { data, error } = await supabase
        .from('investors')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setInvestors(data || []);
    } catch (error) {
      console.error('Error fetching investors:', error);
    }
  }

  const investmentFocuses = ['AI/ML', 'SaaS', 'FinTech', 'HealthTech', 'EdTech', 'DeepTech'];

  const filteredInvestors = investors.filter(investor => {
    const matchesSearch = 
      investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      investor.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFocus = 
      selectedFocus === 'all' || 
      investor.investment_focus.includes(selectedFocus);
    
    return matchesSearch && matchesFocus;
  });

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Connect with Investors</h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search investors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <select
            value={selectedFocus}
            onChange={(e) => setSelectedFocus(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="all">All Focus Areas</option>
            {investmentFocuses.map(focus => (
              <option key={focus} value={focus}>{focus}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredInvestors.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No investors found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredInvestors.map(investor => (
            <InvestorCard key={investor.id} investor={investor} />
          ))}
        </div>
      )}
    </div>
  );
}