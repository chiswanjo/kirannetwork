import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, Users } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Kiran Network</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8 ml-10">
              <Link to="/startups" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                <Search className="h-4 w-4" />
                <span>Discover</span>
              </Link>
              <Link to="/investors" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
                <Users className="h-4 w-4" />
                <span>Investors</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}