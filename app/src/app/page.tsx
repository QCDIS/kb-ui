"use client";

import React from "react";
import Link from "next/link";

import About from "@/components/ui/about";
import AboutButton from "@/components/ui/about-button";
import Search from "@/components/ui/search";


export default function HomePage() {

  return (
    <main className="h-screen flex flex-col items-center overflow-y-scroll snap snap-y snap-mandatory">

      <section className="relative min-h-screen w-full flex flex-col items-center justify-start snap-start">
        <Search showResults={false}></Search>
        <AboutButton></AboutButton>
      </section>

      <section id="about" className="min-h-screen w-full bg-neutral p-10 snap-start">
        <About></About>
      </section>

    </main>
  )
}
