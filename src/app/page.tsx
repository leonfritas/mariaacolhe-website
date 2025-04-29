"use client";

// components
import { Navbar, Footer } from "@/components";

// sections
import React from "react";
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import Faq from "./faq";
import { Gallery } from "./gallery";
import JsonData from "../data/data.json";
import { Testimonials } from "./testimonials";

export default function Portfolio() {
  // Carrega os dados diretamente sem useEffect
  const landingPageData = JsonData;

  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <Gallery data={landingPageData.Gallery} />
      <OurStats />
      <Testimonials data={landingPageData.Testimonials} />
      <Faq />
      {/* <SponsoredBy /> */}
      <Footer />
    </>
  );
}