'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import CardSection from './components/CardSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Secciones principales con IDs */}
      <main style={{ padding: '20px' }}>
        <section id="about">
          <AboutSection />
        </section>
        <section id="video">
          <VideoSection />
        </section>
        <section id="apps">
          <CardSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
