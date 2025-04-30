
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import GroupProject from '@/components/GroupProject';
import FinalProject from '@/components/FinalProject';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <GroupProject />
        <FinalProject />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
