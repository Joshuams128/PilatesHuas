"use client";

import { Target, Heart, Users } from "lucide-react";

function About() {
  const values = [
    {
      icon: Target,
      title: "Empowerment",
      description:
        "We believe in empowering every individual to discover their strength, both physical and mental, through intentional movement.",
    },
    {
      icon: Heart,
      title: "Intentional Movement",
      description:
        "Every exercise, every breath, every moment in our studio is designed with purpose and precision to help you move better.",
    },
    {
      icon: Users,
      title: "Accessibility",
      description:
        "Pilates is for every body. We create an inclusive environment where all fitness levels are welcomed and supported.",
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#82614A] py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="font-['Stolen_Love'] text-5xl md:text-7xl text-white mb-6">
            Our Story
          </h1>
          <p className="font-['Stolen_Love'] text-xl md:text-2xl text-white/90 max-w-3xl mx-auto italic">
            Building a community through movement, intention, and strength.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Stolen_Love'] text-5xl md:text-6xl text-[#1A1410] mb-8 leading-tight">
                Movement that transforms
              </h2>
              <p className="font-['Stolen_Love'] text-xl text-[#1A1410] leading-relaxed mb-6 italic">
                Pilates Haus was founded on the belief that movement should feel empowering,
                accessible, and intentional. We're not just a studio—we're a community dedicated to
                helping you discover strength you didn't know you had.
              </p>
              <p className="font-['Stolen_Love'] text-[#1A1410] leading-relaxed">
                Located in the heart of Pickering, Ontario, we offer premium reformer Pilates
                classes in a warm, welcoming environment. Our expert instructors bring years of
                experience and a genuine passion for helping you achieve your wellness goals—whether
                you're brand new to Pilates or a seasoned practitioner.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/marjanphotgraphy1_MAR0101.jpg"
                alt="Pilates Haus Studio Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Values */}
      <section className="py-20 bg-[#D9D2C6]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-['Stolen_Love'] text-4xl md:text-5xl text-center mb-16 text-[#1A1410]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 bg-[#82614A] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Stolen_Love'] text-2xl mb-4 text-[#1A1410]">
                    {value.title}
                  </h3>
                  <p className="font-['Stolen_Love'] text-[#1A1410] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Photos */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="font-['Stolen_Love'] text-4xl md:text-5xl text-center mb-12 text-[#1A1410]">
            Our Space
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                src="/images/marjanphotgraphy1_MAR0015.jpg"
                alt="Studio Photo 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                src="/images/marjanphotgraphy1_MAR0103.jpg"
                alt="Studio Photo 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-80">
              <img
                src="/images/marjanphotgraphy1_MAR0018.jpg"
                alt="Studio Photo 3"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#CBB9A4]">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-['Stolen_Love'] text-4xl md:text-5xl mb-6 text-[#1A1410]">
            Ready to Join Us?
          </h2>
          <p className="font-['Stolen_Love'] text-xl mb-8 text-[#1A1410] max-w-2xl mx-auto italic">
            Experience the Pilates Haus difference. Book your first class today.
          </p>
          <a
            href="/book-now"
            className="inline-block px-8 py-4 bg-[#82614A] text-white font-['Stolen_Love'] rounded-full hover:bg-[#6d5038] transition"
          >
            Book Your First Class
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
