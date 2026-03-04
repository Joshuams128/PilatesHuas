import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classes | Pilates Haus - Reformer Pilates in Pickering",
  description:
    "Explore our variety of reformer pilates classes in Pickering, Ontario. From beginner-friendly to advanced. Power Pilates, Tone & Core, Tower Haus and more.",
  keywords: [
    "pilates classes",
    "reformer classes",
    "Pickering",
    "fitness classes",
    "group fitness",
  ],
  openGraph: {
    title: "Classes | Pilates Haus",
    description:
      "Explore our variety of reformer pilates classes in Pickering, Ontario.",
    url: "https://pilateshaus.ca/classes",
    type: "website",
  },
};

const classes = [
  {
    name: "Power Pilates",
    difficulty: "Intermediate/Advanced",
    description:
      "A challenging, high-intensity reformer workout that builds strength, endurance, and control. Perfect for those looking to push their limits and see transformative results.",
  },
  {
    name: "Strength & Flow",
    difficulty: "Intermediate",
    description:
      "Combines strength-building exercises with flowing sequences to create a balanced, dynamic workout. Focus on connecting breath to movement.",
  },
  {
    name: "Tone & Core",
    difficulty: "All Levels",
    description:
      "Full-body toning with an emphasis on core engagement. Sculpt and strengthen your entire body while building a solid foundation.",
  },
  {
    name: "Form & Align",
    difficulty: "Beginner Friendly",
    description:
      "Perfect for those new to Pilates. This class focuses on proper alignment, technique, and building a strong understanding of reformer fundamentals.",
  },
  {
    name: "Sculpt & Burn",
    difficulty: "Advanced",
    description:
      "High-energy, calorie-torching workout designed for experienced practitioners. Expect to sweat while sculpting lean muscle and building endurance.",
  },
  {
    name: "Tower Haus",
    difficulty: "All Levels",
    description:
      "Unique tower-based movements that challenge stability and strength. A signature class incorporating creative variations and challenging flows.",
  },
  {
    name: "Intro to Reformer",
    difficulty: "Beginner",
    description:
      "New to the reformer? Start here. This foundational class teaches the basics in a welcoming, non-intimidating environment. Learn proper form and build confidence.",
  },
  {
    name: "Jump Board Haus",
    difficulty: "Intermediate",
    description:
      "Cardio meets Pilates. Using the jump board, this class elevates your heart rate while maintaining the control and precision Pilates is known for.",
  },
];

const getDifficultyColor = (difficulty: string) => {
  if (difficulty.includes("Beginner")) return "bg-[#CBB9A4]";
  if (difficulty.includes("Intermediate")) return "bg-[#A48D78]";
  if (difficulty.includes("Advanced")) return "bg-[#82614A]";
  return "bg-[#D9D2C6]";
};

export default function ClassesPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#82614A] py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6">
            Our Classes
          </h1>
          <p className="font-heading text-xl md:text-2xl text-white/90 max-w-3xl mx-auto italic">
            From beginner-friendly to advanced, find the perfect class for your fitness journey.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition border border-[#D9D2C6]"
              >
                <h3 className="font-heading text-3xl mb-4 text-[#1A1410]">
                  {classItem.name}
                </h3>
                <span
                  className={`inline-block px-4 py-2 ${getDifficultyColor(
                    classItem.difficulty
                  )} text-white text-sm font-heading rounded-full mb-6`}
                >
                  {classItem.difficulty}
                </span>
                <p className="font-heading text-[#1A1410] leading-relaxed mb-6">
                  {classItem.description}
                </p>
                <Link
                  href="/book-now"
                  className="inline-block w-full px-6 py-3 bg-[#82614A] text-white font-heading rounded-full hover:bg-[#6d5038] transition text-center"
                >
                  Book This Class
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#D9D2C6]">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-[#1A1410]">
            Ready to Begin?
          </h2>
          <p className="font-heading text-xl mb-8 text-[#1A1410] max-w-2xl mx-auto">
            Try our intro offers and discover which class is perfect for you.
          </p>
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 bg-[#82614A] text-white font-heading rounded-full hover:bg-[#6d5038] transition"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
