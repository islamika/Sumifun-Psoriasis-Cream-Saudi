/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Ingredients from "./components/Ingredients";
import HowToUse from "./components/HowToUse";
import VideoSection from "./components/VideoSection";
import BeforeAfter from "./components/BeforeAfter";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";
import StickyControls from "./components/StickyControls";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfdfb] text-[#1a1a1a] flex flex-col overflow-x-hidden">
      {/* Sticky Header Floating on top */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Problem Section detailing psoriasis discomfort */}
        <ProblemSection />

        {/* Core Benefits - 8 rich cards */}
        <Benefits />

        {/* Trust Features and KSA statistics */}
        <Features />

        {/* Natural Herb Ingredients with zoom detail */}
        <Ingredients />

        {/* Clinic-like Step by step application guide */}
        <HowToUse />

        {/* Interactive Simulated Video Section showing mechanism */}
        <VideoSection />

        {/* Interactive Before & After drag visualizer */}
        <BeforeAfter />

        {/* Tabular transparency comparison checklist */}
        <WhyChooseUs />

        {/* 20 realistic Arabic reviews and ratings */}
        <Reviews />

        {/* 10 detailed FAQ items in accordions */}
        <FAQ />

        {/* Cash On Delivery checkout/order form */}
        <OrderForm />
      </main>

      {/* Branded Footer with legal modals */}
      <Footer />

      {/* Floating supports and back to top controls */}
      <StickyControls />
    </div>
  );
}
