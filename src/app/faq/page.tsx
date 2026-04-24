"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What should I wear to class?",
    answer:
      "Wear comfortable, form-fitting athletic wear. Grip socks are mandatory and available for purchase at the studio.",
  },
  {
    question: "Do I need to bring anything?",
    answer:
      "Just yourself! We provide all equipment including reformers, mats, props, and water. Towels are available upon request.",
  },
  {
    question: "Do I need grip socks?",
    answer:
      "Yes! Grip socks are required for all classes for safety and hygiene. If you don&apos;t have a pair, they&apos;re available for purchase at the studio.",
  },
  {
    question: "I&apos;m new where should I start?",
    answer:
      "We recommend starting with our Form & Align or Tone & Core classes, which are perfect for beginners. Our instructors will guide you through everything so you feel comfortable and confident from your very first class.",
  },
  {
    question: "What is your cancellation and late policy?",
    answer:
      "We kindly ask that all classes be canceled or rescheduled at least 8 hours in advance. Late cancellations will result in the loss of a class credit, and no-shows will incur a $25 fee. We completely understand that things come up, but this policy allows us to offer spots to other clients and keep our schedule running smoothly.",
  },
  {
    question: "What happens if I arrive late to class?",
    answer:
      "To maintain the flow and safety of class, we allow a short grace period for late arrivals. If you arrive more than a few minutes late, you may not be permitted to join, and the class will be considered a late cancel. We always recommend arriving 5–10 minutes early to get settled.",
  },
  {
    question: "Do class packages expire?",
    answer:
      "Yes all class packages have an expiry date, which begins from your first booked class. We always recommend booking consistently to get the most out of your sessions.",
  },
  {
    question: "How do memberships work?",
    answer:
      "Our memberships are auto-renewing and designed for consistency. A minimum of 15 days&apos; written notice is required for any cancellations or changes prior to your next billing cycle.",
  },
  {
    question: "Is unlimited truly unlimited?",
    answer:
      "Yes unlimited memberships allow you to take one class per day. This helps ensure fair access for all members while keeping class sizes balanced.",
  },
  {
    question: "How does the waitlist work?",
    answer:
      "If a class is full, clients can join the waitlist. If a spot becomes available, they&apos;ll be automatically added and notified. Standard cancellation policies still apply once they are added to the class.",
  },
  {
    question: "Can instructors change?",
    answer:
      "While we do our best to keep the schedule consistent, instructors may occasionally change. All of our instructors are highly trained, and we encourage clients to experience different teaching styles.",
  },
  {
    question: "How do promotions work?",
    answer:
      "Promotional packages are available for a limited time and cannot be combined with other offers unless stated. Promo codes can be entered at checkout on our booking platform.",
  },
];

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#82614A] py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="font-heading font-light text-5xl md:text-7xl text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/90 max-w-3xl mx-auto italic">
            Find answers to common questions about our classes, packages, and policies.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#D9D2C6]">
        <div className="max-w-[1440px] mx-auto px-6">
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
          <div className="text-center mt-12">
            <p className="font-heading text-[#A48D78] mb-6">
              Didn&apos;t find what you&apos;re looking for?
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-[#82614A] text-white font-heading rounded-full hover:bg-[#6d5038] transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
