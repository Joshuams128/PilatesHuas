"use client";

import Link from "next/link";
import Script from "next/script";
import { Tag, Layers, Package } from "lucide-react";
import { useState } from "react";

type Tab = "packages" | "classPacks" | "promotions";

const packagePlans = [
  {
    name: "The Haus Flow",
    duration: "30 Days",
    classes: 4,
    classLabel: "classes · 1 per day",
    price: "$89",
    priceSub: "$22.25 per class",
    badge: "Most Popular",
  },
  {
    name: "The Haus Unlimited",
    duration: "Monthly",
    classes: 30,
    classLabel: "classes per month · 1 per day",
    price: "$199",
    priceSub: "unlimited access",
    badge: null,
  },
];

const classPackPlans = [
  {
    name: "5 Class Pack",
    duration: "3 Months",
    classes: 5,
    classLabel: "classes per 3 months",
    price: "$180",
    priceSub: "$36 per class",
    badge: null,
  },
  {
    name: "10 Class Pack",
    duration: "6 Months",
    classes: 10,
    classLabel: "classes per 6 months",
    price: "$320",
    priceSub: "$32 per class",
    badge: null,
  },
  {
    name: "20 Class Pack",
    duration: "6 Months",
    classes: 20,
    classLabel: "classes per 6 months",
    price: "$600",
    priceSub: "$30 per class",
    badge: null,
  },
  {
    name: "50 Class Pack",
    duration: "1 Year",
    classes: 50,
    classLabel: "classes per year",
    price: "$1,350",
    priceSub: "$27 per class",
    badge: "Best Value",
  },
];

const promotionalPlans = [
  {
    name: "Intro Offer",
    duration: "10 Days",
    classes: 2,
    classLabel: "classes · 1 per day",
    price: "$40",
    priceSub: "introductory rate",
    badge: "New Clients Only",
    highlight: "Try Pilates Haus risk-free. Perfect first step.",
    expires: null,
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<Tab>("promotions");

  return (
    <div className="w-full">
      <Script src="https://widgets.wellnessliving.com/store/widget.js" type="module" strategy="afterInteractive" />
      {/* Page Header */}
      <section className="bg-[#82614A] py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="font-heading font-light text-5xl md:text-7xl text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/90 max-w-3xl mx-auto italic">
            Choose the option that fits your lifestyle and goals.
          </p>
        </div>
      </section>

      {/* Tab Toggle Section */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-14 px-4">
            <div className="inline-flex rounded-full p-1 gap-1 sm:gap-2 bg-[#E8E2D8] shadow-inner flex-wrap sm:flex-nowrap">
              <button
                onClick={() => setActiveTab("promotions")}
                className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-7 py-2 sm:py-3 text-xs sm:text-base rounded-full font-heading transition-all duration-300 whitespace-nowrap ${
                  activeTab === "promotions"
                    ? "text-white shadow-md"
                    : "text-[#6b6b6b] hover:text-[#1A1410]"
                }`}
                style={activeTab === "promotions" ? { backgroundColor: "#A48D78" } : {}}
              >
                <Tag className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Current Promotions</span>
                <span className="sm:hidden">Promotions</span>
              </button>
              <button
                onClick={() => setActiveTab("packages")}
                className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-7 py-2 sm:py-3 text-xs sm:text-base rounded-full font-heading transition-all duration-300 whitespace-nowrap ${
                  activeTab === "packages"
                    ? "text-white shadow-md"
                    : "text-[#6b6b6b] hover:text-[#1A1410]"
                }`}
                style={activeTab === "packages" ? { backgroundColor: "#82614A" } : {}}
              >
                <Layers className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Haus Packages</span>
                <span className="sm:hidden">Packages</span>
              </button>
              <button
                onClick={() => setActiveTab("classPacks")}
                className={`flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-7 py-2 sm:py-3 text-xs sm:text-base rounded-full font-heading transition-all duration-300 whitespace-nowrap ${
                  activeTab === "classPacks"
                    ? "text-white shadow-md"
                    : "text-[#6b6b6b] hover:text-[#1A1410]"
                }`}
                style={activeTab === "classPacks" ? { backgroundColor: "#82614A" } : {}}
              >
                <Package className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Class Packs</span>
                <span className="sm:hidden">Packs</span>
              </button>
            </div>
          </div>

          {/* ── PROMOTIONS ── */}
          {activeTab === "promotions" && (
            <div>
              <div className="text-center mb-10">
                <div className="inline-block px-4 py-1 rounded-full mb-4 font-heading text-white text-sm bg-[#A48D78]">
                  Current Promotions
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-[#1A1410] mb-3">
                  Limited-Time Offers
                </h2>
                <p className="font-heading text-lg text-[#A48D78] italic max-w-xl mx-auto">
                  Exclusive deals for new clients and the month of April.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {promotionalPlans.map((promo, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-[#82614A]"
                  >
                    <div className="px-5 py-4 bg-[#82614A]">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-heading text-lg leading-tight text-white">
                            {promo.name}
                          </p>
                          <p className="font-heading text-base font-semibold mt-1 text-white">
                            {promo.duration}
                          </p>
                        </div>
                        {promo.badge && (
                          <span className="shrink-0 bg-white/20 text-white font-heading text-xs px-3 py-1 rounded-full whitespace-nowrap font-semibold">
                            {promo.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="px-5 py-5 flex flex-col flex-1">
                      {promo.classes !== null && (
                        <div className="mb-4 pb-4 border-b border-[#EDE7DF]">
                          <span className="font-heading text-4xl text-[#82614A]">
                            {promo.classes}
                          </span>
                          <p className="font-heading text-xs text-[#9b9b9b] uppercase tracking-wide mt-0.5">
                            {promo.classLabel}
                          </p>
                        </div>
                      )}

                      {promo.classes === null && (
                        <div className="mb-4 pb-4 border-b border-[#EDE7DF]">
                          <p className="font-heading text-xs text-[#9b9b9b] uppercase tracking-wide">
                            {promo.classLabel}
                          </p>
                        </div>
                      )}

                      <div className="mb-3">
                        <p className="font-heading text-3xl text-[#1A1410]">
                          {promo.price}
                        </p>
                        <p className="font-heading text-xs text-[#A48D78]">
                          {promo.priceSub}
                        </p>
                      </div>

                      <p className="font-heading text-sm text-[#6b6b6b] italic mb-4 leading-snug">
                        {promo.highlight}
                      </p>

                      {promo.expires && (
                        <p className="font-heading text-[11px] mb-4 text-[#82614A]">
                          ⏳ {promo.expires}
                        </p>
                      )}

                      <button
                          onClick={() => document.getElementById('packages-store')?.scrollIntoView({ behavior: 'smooth' })}
                          className="mt-auto block w-full py-2.5 rounded-full font-heading text-sm text-center text-white bg-[#82614A] hover:bg-[#6d5038] transition"
                        >
                          Claim Offer
                        </button>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-heading text-center text-[#A48D78] mt-8 text-sm">
                Promotions are subject to availability and cannot be combined unless stated.{" "}
                <a href="mailto:info@pilateshaus.ca" className="underline hover:text-[#82614A]">
                  info@pilateshaus.ca
                </a>
              </p>

            </div>
          )}

          {/* ── PACKAGES ── */}
          {activeTab === "packages" && (
            <div>
              <div className="text-center mb-10">
                <div className="inline-block px-4 py-1 rounded-full mb-4 font-heading text-white text-sm bg-[#82614A]">
                  Haus Packages
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-[#1A1410] mb-3">
                  Find Your Rhythm
                </h2>
                <p className="font-heading text-lg text-[#A48D78] italic max-w-xl mx-auto">
                  Flexible packages for every stage of your Pilates journey.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {packagePlans.map((plan, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-[#82614A]"
                  >
                    <div className="px-5 py-4 bg-[#82614A]">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-heading text-lg leading-tight text-white">
                            {plan.name}
                          </p>
                          <p className="font-heading text-xs mt-0.5 text-white/75">
                            {plan.duration}
                          </p>
                        </div>
                        {plan.badge && (
                          <span className="shrink-0 bg-white/20 text-white font-heading text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="px-5 py-5 flex flex-col flex-1">
                      <div className="mb-4 pb-4 border-b border-[#EDE7DF]">
                        <span className="font-heading text-4xl text-[#82614A]">
                          {plan.classes ?? "∞"}
                        </span>
                        <p className="font-heading text-xs text-[#9b9b9b] uppercase tracking-wide mt-0.5">
                          {plan.classLabel}
                        </p>
                      </div>

                      <div className="mb-5">
                        <p className="font-heading text-3xl text-[#1A1410]">
                          {plan.price}
                        </p>
                        <p className="font-heading text-xs text-[#A48D78]">
                          {plan.priceSub}
                        </p>
                      </div>

                      <Link
                        href="/book-now"
                        className="mt-auto block w-full py-2.5 rounded-full font-heading text-sm text-center text-white bg-[#82614A] hover:bg-[#6d5038] transition"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-heading text-center text-[#A48D78] mt-8 text-sm">
                All packages can be purchased online or at the studio. Questions?{" "}
                <a href="mailto:info@pilateshaus.ca" className="underline hover:text-[#82614A]">
                  info@pilateshaus.ca
                </a>
              </p>
            </div>
          )}

          {/* ── CLASS PACKS ── */}
          {activeTab === "classPacks" && (
            <div>
              <div className="text-center mb-10">
                <div className="inline-block px-4 py-1 rounded-full mb-4 font-heading text-white text-sm bg-[#82614A]">
                  Class Packs
                </div>
                <h2 className="font-heading text-4xl md:text-5xl text-[#1A1410] mb-3">
                  Pre-Pay for Multiple Classes
                </h2>
                <p className="font-heading text-lg text-[#A48D78] italic max-w-xl mx-auto">
                  Save money and plan ahead with our class packs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {classPackPlans.map((plan, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-[#82614A]"
                  >
                    <div className="px-5 py-4 bg-[#82614A]">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-heading text-lg leading-tight text-white">
                            {plan.name}
                          </p>
                          <p className="font-heading text-xs mt-0.5 text-white/75">
                            {plan.duration}
                          </p>
                        </div>
                        {plan.badge && (
                          <span className="shrink-0 bg-white/20 text-white font-heading text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="px-5 py-5 flex flex-col flex-1">
                      <div className="mb-4 pb-4 border-b border-[#EDE7DF]">
                        <span className="font-heading text-4xl text-[#82614A]">
                          {plan.classes}
                        </span>
                        <p className="font-heading text-xs text-[#9b9b9b] uppercase tracking-wide mt-0.5">
                          {plan.classLabel}
                        </p>
                      </div>

                      <div className="mb-5">
                        <p className="font-heading text-3xl text-[#1A1410]">
                          {plan.price}
                        </p>
                        <p className="font-heading text-xs text-[#A48D78]">
                          {plan.priceSub}
                        </p>
                      </div>

                      <Link
                        href="/book-now"
                        className="mt-auto block w-full py-2.5 rounded-full font-heading text-sm text-center text-white bg-[#82614A] hover:bg-[#6d5038] transition"
                      >
                        Purchase
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-heading text-center text-[#A48D78] mt-8 text-sm">
                All class packs can be purchased online or at the studio. Questions?{" "}
                <a href="mailto:info@pilateshaus.ca" className="underline hover:text-[#82614A]">
                  info@pilateshaus.ca
                </a>
              </p>
            </div>
          )}

          <section id="packages-store" className="w-full py-12">
            {/* @ts-ignore */}
            <wl-store-widget k_business="729865" k_skin="358493" k_location="" />
          </section>
        </div>
      </section>

    </div>
  );
}
