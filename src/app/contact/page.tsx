"use client";

import { useState } from "react";
import { MapPin, Mail, Clock } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const studioHours = [
    { day: "Monday / Wednesday / Friday", hours: "7am-9am, 10am-1pm, 4:30pm-8:30pm" },
    { day: "Tuesday / Thursday", hours: "10am-1pm, 5:30pm-8:30pm" },
    { day: "Saturday / Sunday", hours: "10am-2pm" },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-[#82614A] py-20">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h1 className="font-['Stolen_Love'] text-5xl md:text-7xl text-white mb-6">
            Get In Touch
          </h1>
          <p className="font-['Stolen_Love'] text-xl md:text-2xl text-white/90 max-w-3xl mx-auto italic">
            We&apos;d love to hear from you. Reach out with any questions.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-[#F5F2EC]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-['Stolen_Love'] text-4xl mb-8 text-[#1A1410]">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-['Stolen_Love'] text-lg mb-2 text-[#1A1410]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D9D2C6] bg-white font-['Stolen_Love'] focus:outline-none focus:ring-2 focus:ring-[#82614A]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-['Stolen_Love'] text-lg mb-2 text-[#1A1410]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D9D2C6] bg-white font-['Stolen_Love'] focus:outline-none focus:ring-2 focus:ring-[#82614A]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-['Stolen_Love'] text-lg mb-2 text-[#1A1410]"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#D9D2C6] bg-white font-['Stolen_Love'] focus:outline-none focus:ring-2 focus:ring-[#82614A]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-['Stolen_Love'] text-lg mb-2 text-[#1A1410]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[#D9D2C6] bg-white font-['Stolen_Love'] focus:outline-none focus:ring-2 focus:ring-[#82614A] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#82614A] text-white font-['Stolen_Love'] rounded-full hover:bg-[#6d5038] transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Studio Info */}
            <div>
              <h2 className="font-['Stolen_Love'] text-4xl mb-8 text-[#1A1410]">
                Visit Our Studio
              </h2>
              
              {/* Address */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#82614A] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-['Stolen_Love'] text-xl mb-2 text-[#1A1410]">Location</h3>
                    <p className="font-['Stolen_Love'] text-[#1A1410]">
                      2460 Brock Rd Unit C 303
                      <br />
                      Pickering, ON
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#82614A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-['Stolen_Love'] text-xl mb-3 text-[#1A1410]">Get in Touch</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-['Stolen_Love'] text-sm text-[#1A1410] mb-1">
                          For bookings & membership support:
                        </p>
                        <a
                          href="mailto:info@pilateshaus.ca"
                          className="font-['Stolen_Love'] text-[#82614A] hover:text-[#6d5038] transition"
                        >
                          info@pilateshaus.ca
                        </a>
                      </div>
                      <div>
                        <p className="font-['Stolen_Love'] text-sm text-[#1A1410] mb-1">
                          For partnerships, collaborations, and general inquiries:
                        </p>
                        <a
                          href="mailto:admin@pilateshaus.ca"
                          className="font-['Stolen_Love'] text-[#82614A] hover:text-[#6d5038] transition"
                        >
                          admin@pilateshaus.ca
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#82614A] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Stolen_Love'] text-xl mb-4 text-[#1A1410]">
                      Studio Hours
                    </h3>
                    <div className="bg-white rounded-xl p-6 border border-[#D9D2C6]">
                      {studioHours.map((item, index) => (
                        <div
                          key={index}
                          className={`flex justify-between items-center py-3 ${
                            index !== studioHours.length - 1 ? "border-b border-[#D9D2C6]" : ""
                          }`}
                        >
                          <span className="font-['Stolen_Love'] text-[#1A1410]">{item.day}</span>
                          <span className="font-['Stolen_Love'] text-[#82614A]">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-[#D9D2C6] rounded-2xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#82614A] mx-auto mb-4" />
                  <p className="font-['Stolen_Love'] text-xl text-[#1A1410] italic">
                    Google Maps Embed
                  </p>
                  <p className="font-['Stolen_Love'] text-sm text-[#1A1410] mt-2">
                    2460 Brock Rd Unit C 303, Pickering, ON
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-[#D9D2C6]">
        <div className="max-w-[1440px] mx-auto px-6 text-center">
          <h2 className="font-['Stolen_Love'] text-4xl md:text-5xl mb-6 text-[#1A1410]">
            Have Questions?
          </h2>
          <p className="font-['Stolen_Love'] text-xl mb-8 text-[#1A1410] max-w-3xl mx-auto italic">
            Whether you&apos;re new to Pilates or an experienced practitioner, we&apos;re here to help. Don&apos;t
            hesitate to reach out with any questions about our classes, pricing, or studio policies.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
