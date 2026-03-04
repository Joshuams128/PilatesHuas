"use client";

import Link from "next/link";
import { ChevronDown, Tag, Layers, Package } from "lucide-react";
import { useState } from "react";

type Tab = "packages" | "classPacks" | "promotions";

const packagePlans = [
  {
    name: "Drop-In",
    duration: "Per class",
    classes: 1,
    classLabel: "class",
    price: "$40",
    priceSub: "per class",
    badge: null,
  },
  {
    name: "The Haus Flow",
    duration: "30 Days",
    classes: 4,
    classLabel: "classes · 1 per day",
    price: "$99",
    priceSub: "$24.75 per class",
    badge: "Most Popular",
  },
  {
    name: "Balanced 4",
    duration: "Monthly",
    classes: 4,
    classLabel: "classes per month",
    price: "$140",
    priceSub: "$35 per class",
    badge: null,
  },
  {
    name: "Consistent 8",
    duration: "Monthly",
    classes: 8,
    classLabel: "classes per month",
    price: "$240",
    priceSub: "$30 per class",
    badge: null,
  },
  {
    name: "Dedicated 12",
    duration: "Monthly",
    classes: 12,
    classLabel: "classes per month",
    price: "$300",
    priceSub: "$25 per class",
    badge: null,
  },
  {
    name: "Signature 15",
    duration: "Monthly",
    classes: 15,
    classLabel: "classes per month",
    price: "$325",
    priceSub: "$21.67 per class",
    badge: "Best Value",
  },
  {
    name: "The Haus Unlimited",
    duration: "Monthly",
    classes: 30,
    classLabel: "classes per month · 1 per day",
    price: "$280",
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
    price: "$330",
    priceSub: "$33 per class",
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
  {
    name: "March Momentum",
    duration: "30 Days",
    classes: 4,
    classLabel: "classes · 1 per day",
    price: "$89",
    priceSub: "save $10 vs. Haus Flow",
    badge: "March Special",
    highlight: "Kick-start your spring movement practice.",
    expires: "Expires March 31, 2026",
  },
  {
    name: "Pilates Haus Founders",
    duration: "30 Days",
    classes: 30,
    classLabel: "classes · 1 per day",
    price: "$199",
    priceSub: "$6.63 per class",
    badge: "Limited Spots",
    highlight: "Exclusive founding member rate — locked in for life.",
    expires: "While spots last",
  },
  {
    name: "15% Off Any Package",
    duration: "March Only",
    classes: null,
    classLabel: "applies to all packages",
    price: "15% Off",
    priceSub: "use code MARCHPH",
    badge: "Promo Code",
    highlight: "Stack savings on any regular package this month.",
    expires: "Expires March 31, 2026",
  },
];

const faqs = [
  {
    question: "What should I wear to class?",
    answer:
      "Wear comfortable, form-fitting athletic wear. Grip socks are recommended and available for purchase at the studio.",
  },
  {
    question: "Do I need to bring anything?",
    answer:
      "Just yourself! We provide all equipment including reformers, mats, props, and water. Towels are available upon request.",
  },
  {
    question: "Can I cancel or reschedule my class?",
    answer:
      "Yes, you can cancel or reschedule up to 8 hours before your scheduled class time without penalty. Late cancellations may result in class credit loss.",
  },
  {
    question: "How do promotions work?",
    answer:
      "Promotional packages are available for a limited time and cannot be combined with other offers unless stated. Promo codes can be entered at checkout on our booking platform.",
  },
];

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<Tab>("promotions");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#82614A] py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
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
          <div className="flex justify-center mb-14">
            <div className="inline-flex rounded-full p-1.5 gap-2 bg-[#E8E2D8] shadow-inner">
              <button
                onClick={() => setActiveTab("promotions")}
                className={`flex items-center gap-2.5 px-7 py-3 rounded-full font-heading transition-all duration-300 ${
                  activeTab === "promotions"
                    ? "text-white shadow-md"
                    : "text-[#6b6b6b] hover:text-[#1A1410]"
                }`}
                style={activeTab === "promotions" ? { backgroundColor: "#A48D78" } : {}}
              >
                <Tag className="w-4 h-4" />
                Current Promotions
              </button>
              <button
                onClick={() => setActiveTab("packages")}
                className={`flex items-center gap-2.5 px-7 py-3 rounded-full font-heading transition-all duration-300 ${
                  activeTab === "packages"
                    ? "text-white shadow-md"
                    : "text-[#6b6b6b] hover:text-[#1A1410]"
                }`}
                style={activeTab === "packages" ? { backgroundColor: "#82614A" } : {}}
              >
                <Layers className="w-4 h-4" />
                Haus Packages
              </button>
              <button
                onClick={() => setActiveTab("classPacks")}
                className={`flex items-center gap-2.5 px-7 py-3 rounded-full font-heading transition-all duration-300 ${
                  activeTab === "classPacks"
                    ? "text-white shadow-md"
                    : "text-[#6b6b6b] hover:text-[#1A1410]"
                }`}
                style={activeTab === "classPacks" ? { backgroundColor: "#82614A" } : {}}
              >
                <Package className="w-4 h-4" />
                Class Packs
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
                  Exclusive deals for new clients and the month of March.
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

                      {promo.name === "15% Off Any Package" ? (
                        <div className="mt-auto block w-full py-2.5 rounded-full font-heading text-sm text-center text-white bg-[#82614A]">
                          Code: <span className="font-bold">MARCHPH</span>
                        </div>
                      ) : (
                        <Link
                          href="/book-now"
                          className="mt-auto block w-full py-2.5 rounded-full font-heading text-sm text-center text-white bg-[#82614A] hover:bg-[#6d5038] transition"
                        >
                          Claim Offer
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 max-w-3xl mx-auto rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-white bg-[#82614A]">
                <Tag className="w-8 h-8 shrink-0 opacity-80" />
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-heading text-lg italic">
                    Use code <span className="font-bold not-italic">MARCHPH</span> at checkout for 15% off any regular Haus Package this March.
                  </p>
                  <p className="font-heading text-sm opacity-75 mt-1">
                    Cannot be combined with other promotions. Valid March 2026 only.
                  </p>
                </div>
                <Link
                  href="/book-now"
                  className="shrink-0 px-6 py-2.5 rounded-full font-heading text-sm bg-white text-[#82614A] transition hover:bg-[#F5F2EC]"
                >
                  Book Now
                </Link>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#D9D2C6]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl text-center mb-12 text-[#1A1410]">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#F5F2EC] transition"
                >
                  <span className="font-heading text-xl text-[#1A1410]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#82614A] transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="font-heading text-[#1A1410] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="font-heading text-[#82614A] hover:text-[#6d5038] transition"
            >
              See Full FAQ →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
