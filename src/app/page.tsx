'use client';

import { useState } from 'react';
import Image from 'next/image';

const sections = [
  { id: 'illustrations', label: 'Illustrations' },
  { id: 'fine-arts', label: 'Fine Arts' },
  { id: 'fabrication', label: 'Fabrication' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

// Gallery items with image paths - update these with your actual images
const galleryItems = [
  {
    id: 1,
    section: 'illustrations',
    title: 'Illustration 1',
    image: '/images/illustrations/illustration-1.jpg',
  },
  {
    id: 2,
    section: 'illustrations',
    title: 'Illustration 2',
    image: '/images/illustrations/illustration-2.jpg',
  },
  {
    id: 3,
    section: 'illustrations',
    title: 'Illustration 3',
    image: '/images/illustrations/illustration-3.jpg',
  },
  {
    id: 4,
    section: 'fine-arts',
    title: 'Fine Art 1',
    image: '/images/fine-arts/fine-art-1.jpg',
  },
  {
    id: 5,
    section: 'fine-arts',
    title: 'Fine Art 2',
    image: '/images/fine-arts/fine-art-2.jpg',
  },
  {
    id: 6,
    section: 'fine-arts',
    title: 'Fine Art 3',
    image: '/images/fine-arts/fine-art-3.jpg',
  },
  {
    id: 7,
    section: 'fabrication',
    title: 'Fabrication 1',
    image: '/images/fabrication/fabrication-1.jpg',
  },
  {
    id: 8,
    section: 'fabrication',
    title: 'Fabrication 2',
    image: '/images/fabrication/fabrication-2.jpg',
  },
  {
    id: 9,
    section: 'fabrication',
    title: 'Fabrication 3',
    image: '/images/fabrication/fabrication-3.jpg',
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('illustrations');

  const filteredItems = galleryItems.filter(
    (item) => activeSection === 'all' || item.section === activeSection
  );

  return (
    <main className="min-h-screen bg-white">
      {/* Header with Navigation */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              Autumn Shi
            </h1>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-black'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {section.label}
                </button>
              ))}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                Instagram
              </a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.324-.225-4.125-.225-4.067 0-6.875 2.775-6.875 7.017v2.208z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <circle cx="12" cy="12" r="3.379" />
                </svg>
              </a>
              <button className="text-black hover:text-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`text-xs font-medium whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'text-black'
                    : 'text-gray-400'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-gray-100 rounded-lg hover:opacity-80 transition-opacity cursor-pointer overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback for missing images
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-600 text-sm">
          <p>&copy; 2025 Autumn Shi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
