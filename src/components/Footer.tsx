import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-indigo-600" />
              <span className="text-lg font-bold text-gray-900">Kiran Network</span>
            </div>
            <p className="text-gray-600">
              Connecting visionary AI founders with strategic investors.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/startups" className="text-gray-600 hover:text-indigo-600">Browse Startups</Link>
              </li>
              <li>
                <Link to="/investors" className="text-gray-600 hover:text-indigo-600">Find Investors</Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-indigo-600">Join Network</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-indigo-600">Blog</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 hover:text-indigo-600">Events</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 hover:text-indigo-600">Research</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-indigo-600">Terms</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Kiran Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}