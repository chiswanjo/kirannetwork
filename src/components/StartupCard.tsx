import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

interface StartupCardProps {
  name: string;
  description: string;
  logo: string;
  category: string;
  fundingStage: string;
  location: string;
}

export function StartupCard({ name, description, logo, category, fundingStage, location }: StartupCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt={name} className="w-16 h-16 rounded-full object-cover" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-red-500">
          <Heart className="h-6 w-6" />
        </button>
      </div>
      <p className="mt-4 text-gray-700">{description}</p>
      <div className="mt-4 flex items-center space-x-4">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
          {category}
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          {fundingStage}
        </span>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800">
          <span>View Profile</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}