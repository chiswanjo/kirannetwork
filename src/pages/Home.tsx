import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Rocket, Users } from 'lucide-react';
import { FeaturedCompanies } from '../components/FeaturedCompanies';

export function Home() {
  return (
    <div className="space-y-20">
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Connecting AI Founders with Visionary Investors
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the next generation of AI startups and connect with leading investors in the space.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/signup"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/startups"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50"
          >
            Browse Startups
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Brain className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI Startups</h3>
          <p className="text-gray-600">
            Showcase your AI startup to investors and partners. Build your presence in the AI ecosystem.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Investors</h3>
          <p className="text-gray-600">
            Connect with promising AI startups. Get early access to groundbreaking technologies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Rocket className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Growth</h3>
          <p className="text-gray-600">
            Access resources, mentorship, and networking opportunities to accelerate your growth.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <FeaturedCompanies />
      </section>
    </div>
  );
}