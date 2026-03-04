import { Award, Users, Heart } from "lucide-react";
import Link from "next/link";

const featuredClasses = [
  {
    name: "Power Pilates",
    description: "High-intensity reformer workout",
    difficulty: "Intermediate/Advanced",
  },
  {
    name: "Tone & Core",
    description: "Full-body toning with core focus",
    difficulty: "All Levels",
  },
  {
    name: "Form & Align",
    description: "Focus on proper alignment and technique",
    difficulty: "Beginner Friendly",
  },
  {
    name: "Tower Haus",
    description: "Unique tower-based movements",
    difficulty: "All Levels",
  },
];

const studioHours = [
  { day: "Monday / Wednesday / Friday", hours: "7am-9am, 10am-1pm, 4:30pm-8:30pm" },
  { day: "Tuesday / Thursday", hours: "10am-1pm, 5:30pm-8:30pm" },
  { day: "Saturday / Sunday", hours: "10am-2pm" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/marjanphotgraphy1_MAR0020.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative h-full max-w-[1440px] mx-auto px-6 flex flex-col justify-center">
          <h1 className="font-['Stolen_Love'] font-light text-5xl md:text-7xl text-white mb-6 max-w-3xl">
            Movement. Intention. Strength.
          </h1>
          <p className="font-['Stolen_Love'] text-xl md:text-2xl text-white/90 mb-8 max-w-2xl italic">
            Elevated Reformer Pilates in Pickering, Ontario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/classes"
              className="px-8 py-4 border-2 border-white text-white font-['Stolen_Love'] rounded-full hover:bg-white hover:text-[#82614A] transition text-center"
            >
              Explore Classes
            </Link>
            <Link
              href="/book-now"
              className="px-8 py-4 bg-[#82614A] text-white font-['Stolen_Love'] rounded-full hover:bg-[#6d5038] transition text-center"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Block */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-px w-32 bg-[#82614A] mx-auto mb-8" />
            <p className="font-['Stolen_Love'] text-2xl md:text-3xl italic leading-relaxed text-[#1A1410]">
              At Pilates Haus, our mission is to create a space where movement feels empowering,
              intentional, and accessible.
            </p>
            <div className="h-px w-32 bg-[#82614A] mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Intro Offers */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-['Stolen_Love'] text-4xl md:text-5xl text-center mb-4 text-[#1A1410]">
            Start Your Journey
          </h2>
          <p className="font-['Stolen_Love'] text-lg text-center italic text-[#A48D78] mb-12">
            Flexible packages to match where you are right now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Card 1 — March Momentum */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#82614A] flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="px-6 py-5 bg-[#82614A]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-['Stolen_Love'] text-xl text-white leading-tight">March Momentum</p>
                    <p className="font-['Stolen_Love'] text-xs text-white/75 mt-0.5">30 Days · March Only</p>
                  </div>
                  <span className="shrink-0 bg-white/20 text-white font-['Stolen_Love'] text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">March Special</span>
                </div>
              </div>
              <div className="px-6 py-6 flex flex-col flex-1">
                <div className="mb-4 pb-4 border-b border-[#EDE7DF]">
                  <span className="font-['Stolen_Love'] text-4xl text-[#82614A]">4</span>
                  <p className="font-['Stolen_Love'] text-xs text-[#9b9b9b] uppercase tracking-wide mt-0.5">classes · 1 per day</p>
                </div>
                <div className="mb-4">
                  <p className="font-['Stolen_Love'] text-3xl text-[#1A1410]">$89</p>
                  <p className="font-['Stolen_Love'] text-xs text-[#A48D78]">save $10 vs. Haus Flow</p>
                </div>
                <p className="font-['Stolen_Love'] text-sm text-[#6b6b6b] italic mb-6 leading-snug">
                  Kick-start your spring movement practice. March only.
                </p>
                <Link
                  href="/book-now"
                  className="mt-auto block w-full py-3 rounded-full font-['Stolen_Love'] text-sm text-center text-white bg-[#82614A] hover:bg-[#6d5038] transition"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Card 2 — Intro Offer */}
            <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#82614A] flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="px-6 py-5 bg-[#82614A]">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-['Stolen_Love'] text-xl text-white leading-tight">Intro Offer</p>
                    <p className="font-['Stolen_Love'] text-xs text-white/75 mt-0.5">10 Days</p>
                  </div>
                  <span className="shrink-0 bg-white/20 text-white font-['Stolen_Love'] text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">New Clients Only</span>
                </div>
              </div>
              <div className="px-6 py-6 flex flex-col flex-1">
                <div className="mb-4 pb-4 border-b border-[#EDE7DF]">
                  <span className="font-['Stolen_Love'] text-4xl text-[#82614A]">2</span>
                  <p className="font-['Stolen_Love'] text-xs text-[#9b9b9b] uppercase tracking-wide mt-0.5">classes · 1 per day</p>
                </div>
                <div className="mb-4">
                  <p className="font-['Stolen_Love'] text-3xl text-[#1A1410]">$40</p>
                  <p className="font-['Stolen_Love'] text-xs text-[#A48D78]">introductory rate</p>
                </div>
                <p className="font-['Stolen_Love'] text-sm text-[#6b6b6b] italic mb-6 leading-snug">
                  Try Pilates Haus risk-free. The perfect first step.
                </p>
                <Link
                  href="/book-now"
                  className="mt-auto block w-full py-3 rounded-full font-['Stolen_Love'] text-sm text-center text-white bg-[#82614A] hover:bg-[#6d5038] transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* March Promo Banner */}
          <div className="mt-10 max-w-4xl mx-auto bg-[#82614A] rounded-2xl p-8 text-center">
            <h3 className="font-['Stolen_Love'] text-2xl md:text-3xl text-white mb-4">
              March Special Offer
            </h3>
            <p className="font-['Stolen_Love'] text-white/90 text-lg mb-2">
              15% off Class Packs &amp; Monthly Packages
            </p>
            <div className="inline-block bg-white/20 px-6 py-3 rounded-full">
              <p className="font-['Stolen_Love'] text-white">
                Use code: <span className="font-bold">MARCHPH</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-['Stolen_Love'] text-4xl md:text-5xl text-[#1A1410]">
              Featured Classes
            </h2>
            <Link
              href="/classes"
              className="font-['Stolen_Love'] text-[#82614A] hover:text-[#6d5038] transition hidden md:block"
            >
              See All Classes →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredClasses.map((classItem, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition border border-[#D9D2C6]"
              >
                <h3 className="font-['Stolen_Love'] text-2xl mb-2 text-[#1A1410]">
                  {classItem.name}
                </h3>
                <span className="inline-block px-3 py-1 bg-[#A48D78] text-white text-sm font-['Stolen_Love'] rounded-full mb-4">
                  {classItem.difficulty}
                </span>
                <p className="font-['Stolen_Love'] text-[#1A1410] text-sm">
                  {classItem.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/classes"
            className="mt-8 font-['Stolen_Love'] text-[#82614A] hover:text-[#6d5038] transition block md:hidden text-center"
          >
            See All Classes →
          </Link>
        </div>
      </section>

      {/* Why Pilates Haus */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-['Stolen_Love'] text-4xl md:text-5xl text-center mb-16 text-[#1A1410]">
            Why Pilates Haus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#82614A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Stolen_Love'] text-2xl mb-4 text-[#1A1410]">
                Expert Instructors
              </h3>
              <p className="font-['Stolen_Love'] text-[#1A1410] leading-relaxed">
                Our certified instructors bring years of experience and passion to every class,
                ensuring proper form and personalized attention.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#82614A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Stolen_Love'] text-2xl mb-4 text-[#1A1410]">
                Small Class Sizes
              </h3>
              <p className="font-['Stolen_Love'] text-[#1A1410] leading-relaxed">
                We keep our classes intimate to provide individualized guidance and ensure everyone
                gets the support they need.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#82614A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-['Stolen_Love'] text-2xl mb-4 text-[#1A1410]">
                Community &amp; Care
              </h3>
              <p className="font-['Stolen_Love'] text-[#1A1410] leading-relaxed">
                Join a welcoming community focused on wellness, where every body is celebrated and
                supported on their fitness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Hours */}
      <section className="py-20 bg-[#CBB9A4]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-['Stolen_Love'] text-4xl md:text-5xl text-center mb-12 text-[#1A1410]">
            Studio Hours
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
            {studioHours.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between items-center py-4 ${
                  index !== studioHours.length - 1 ? "border-b border-[#D9D2C6]" : ""
                }`}
              >
                <span className="font-['Stolen_Love'] text-lg text-[#1A1410]">{item.day}</span>
                <span className="font-['Stolen_Love'] text-lg text-[#82614A]">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
