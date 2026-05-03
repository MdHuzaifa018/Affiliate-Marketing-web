import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PainPoint from "./components/PainPoint";
import ImpactSection from "./components/ImpactSection";
import WhatYouGet from "./components/WhatYouGet";
import CanYouManage from "./components/CanYouManage";
import IsThisForYou from "./components/IsThisForYou";
import MentorSection from "./components/MentorSection";
import Testimonials from "./components/Testimonials";
import Bonuses from "./components/Bonuses";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Modal from "./components/Modal";
import LiveNotification from "./components/LiveNotification";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main>
        {/* Section 1: Hero with video + event info + countdown */}
        <Hero onRegisterClick={openModal} />

        {/* Section 2: Pain Point — "You're Working Harder Than Ever" */}
        <PainPoint onRegisterClick={openModal} />

        {/* Section 3: Impact — "1300+ IDP Affiliates Already Transformed" */}
        <ImpactSection onRegisterClick={openModal} />

        {/* Section 4: What You Get — "90 min AI Masterclass" */}
        <WhatYouGet onRegisterClick={openModal} />

        {/* Section 5: Can You Manage This — pain checkbox section */}
        <CanYouManage onRegisterClick={openModal} />

        {/* Section 6: Is This For You — FOR YOU / NOT FOR YOU */}
        <IsThisForYou onRegisterClick={openModal} />

        {/* Section 7: Mentor — Mr. Aafrid Chippa */}
        <MentorSection />

        {/* Section 8: Real Testimonials — Sazia, Satya, Kejal */}
        <Testimonials onRegisterClick={openModal} />

        {/* Section 9: Before/After + Impact screenshots */}
        <ImpactSection onRegisterClick={openModal} />

        {/* Section 10: Bonuses — ₹25,000 Worth */}
        <Bonuses onRegisterClick={openModal} />

        {/* Section 11: FAQ */}
        <FAQ onRegisterClick={openModal} />

        {/* Section 12: Final CTA — "Your Affiliate Growth Is One Masterclass Away" */}
        <FinalCTA onRegisterClick={openModal} />
      </main>

      {/* Sticky bottom bar with offer countdown */}
      <Navbar onRegisterClick={openModal} />

      {/* Lead capture modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* Live social proof notifications */}
      <LiveNotification />
    </>
  );
}

export default App;
