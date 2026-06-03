'use client';

import { useState } from 'react';
import { RegisterContext } from './RegisterContext';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { Vision } from './Vision';
import { Gallery } from './Gallery';
import { WhoWeAre } from './WhoWeAre';
import { OurHeart } from './OurHeart';
import { Conference } from './Conference';
import { PreConference } from './PreConference';
import { JoinRemnant } from './JoinRemnant';
import { Footer } from './Footer';
import { RegistrationModal } from './RegistrationModal';

export function LandingPage() {
  const [open, setOpen] = useState(false);

  return (
    <RegisterContext.Provider value={() => setOpen(true)}>
      <Nav />
      <main>
        <Hero />
        <Vision />
        <Gallery />
        <WhoWeAre />
        <OurHeart />
        <Conference />
        <PreConference />
        {/* <Testimonials /> */}
        <JoinRemnant />
      </main>
      <Footer />
      <RegistrationModal open={open} onClose={() => setOpen(false)} />
    </RegisterContext.Provider>
  );
}
