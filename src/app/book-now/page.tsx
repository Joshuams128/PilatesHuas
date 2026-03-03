"use client";

import { useEffect, useRef } from "react";

function BookNow() {
  const introOffers = [
    {
      name: "1 Week Unlimited",
      price: "$89",
      description: "Unlimited classes for 7 days",
    },
    {
      name: "Intro Offer",
      price: "$40",
      description: "2 visits, valid 10 days",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#82614A] py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="font-['Stolen_Love'] text-5xl md:text-7xl text-white mb-6">
            Book a Class
          </h1>
          <p className="font-['Stolen_Love'] text-xl md:text-2xl text-white/90 max-w-3xl mx-auto italic">
            Reserve your spot in our next class.
          </p>
        </div>
      </section>

      {/* New to Pilates Haus Reminder */}
      <section className="py-12 bg-[#D9D2C6]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-['Stolen_Love'] text-2xl text-center mb-8 text-[#1A1410]">
            New to Pilates Haus?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {introOffers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition"
              >
                <h3 className="font-['Stolen_Love'] text-xl mb-2 text-[#1A1410]">
                  {offer.name}
                </h3>
                <div className="font-['Stolen_Love'] text-4xl mb-2 text-[#82614A]">
                  {offer.price}
                </div>
                <p className="font-['Stolen_Love'] text-sm text-[#1A1410]">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="font-['Stolen_Love'] text-lg text-[#1A1410] mb-4">
                Select your preferred class time below to reserve your spot.
              </p>
            </div>

            {/* WellnessLiving Booking Widget */}
            <WellnessLivingWidget />

            {/* Contact Info */}
            <div className="text-center mt-12">
              <p className="font-['Stolen_Love'] text-[#1A1410]">
                Questions about booking?{" "}
                <a
                  href="mailto:info@pilateshaus.ca"
                  className="text-[#82614A] hover:text-[#6d5038] transition"
                >
                  Contact us at info@pilateshaus.ca
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Stolen_Love'] text-4xl text-center mb-12 text-[#1A1410]">
              What to Expect
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-['Stolen_Love'] text-2xl mb-3 text-[#1A1410]">
                  Before Your First Class
                </h3>
                <p className="font-['Stolen_Love'] text-[#1A1410] leading-relaxed">
                  Arrive 10-15 minutes early to complete your intake form and meet your instructor.
                  They&apos;ll walk you through the reformer and answer any questions.
                </p>
              </div>
              <div>
                <h3 className="font-['Stolen_Love'] text-2xl mb-3 text-[#1A1410]">
                  Cancellation Policy
                </h3>
                <p className="font-['Stolen_Love'] text-[#1A1410] leading-relaxed">
                  Please cancel or reschedule at least 8 hours before your class time. Late
                  cancellations may result in loss of class credit to be fair to our waitlist.
                </p>
              </div>
              <div>
                <h3 className="font-['Stolen_Love'] text-2xl mb-3 text-[#1A1410]">
                  What to Bring
                </h3>
                <p className="font-['Stolen_Love'] text-[#1A1410] leading-relaxed">
                  Just yourself! We provide all equipment. Wear comfortable athletic wear and bring
                  water. Grip socks are mandatory and available for purchase at the studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------
   WellnessLiving Widget
   Loads the official embed script and sets the non-standard `data` attribute
   that the WellnessLiving script reads to initialise the widget.
   -------------------------------------------------------------------------*/
function WellnessLivingWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Suppress postMessage errors thrown by the WellnessLiving widget when
    // running inside a sandboxed iframe (e.g. Figma preview) where the parent
    // frame is inaccessible. This does not affect real-world usage.
    const suppressWLError = (event: ErrorEvent) => {
      if (event.filename && event.filename.includes("wellnessliving.com")) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return true;
      }
    };
    window.addEventListener("error", suppressWLError, true);

    // The WellnessLiving script reads a plain `data` attribute (not data-*).
    // React won't forward unknown attributes, so we set it imperatively.
    if (widgetRef.current) {
      widgetRef.current.setAttribute("data", "k_skin=358488&k_business=729865");
    }

    // Only inject the script once (guard against React StrictMode double-invoke)
    const SCRIPT_SRC = "https://www.wellnessliving.com/rs/skin-widget-static.js";
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      window.removeEventListener("error", suppressWLError, true);
      // Remove script on unmount so HMR re-runs reinitialise cleanly
      const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
      if (existing) existing.remove();
    };
  }, []);

  return (
    /* Outer wrapper styled to match the page aesthetic */
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-sm min-h-[600px]">
      {/* The div the WellnessLiving script targets */}
      <div ref={widgetRef} className="wl-widget" />

      {/* Required WellnessLiving attribution link */}
      <div className="flex justify-end px-4 pb-4">
        <a
          href="https://www.wellnessliving.com/pilates/software/"
          rel="nofollow noreferrer"
          target="_blank"
          style={{ display: "block" }}
        >
          <img
            src="https://d1v4s90m0bk5bo.cloudfront.net/E/S.png"
            alt="Pilates management software"
            height={39}
            width={267}
            style={{ height: "39px", width: "267px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default BookNow;
