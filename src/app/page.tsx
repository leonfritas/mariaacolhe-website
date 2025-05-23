"use client";

import { Navbar, Footer } from "@/components";

import React from "react";
import Hero from "./hero";
import About from "./about";
import OurStats from "./our-stats";
import Faq from "./faq";
import { Gallery } from "./gallery";
import JsonData from "../data/data.json";
import { Testimonials } from "./testimonials";
import FloatingWhatsAppButton from "@/components/floating-wpp-button";

export default function Portfolio() {
  
  const landingPageData = JsonData;

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery data={landingPageData.Gallery} />
      <OurStats />
      <Testimonials />
      <Faq />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}