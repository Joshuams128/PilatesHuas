export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#F5F2EC]">
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <h1 className="font-['Stolen_Love'] text-5xl md:text-6xl text-[#1A1410] mb-4">
          Contact Us
        </h1>
        <p className="font-['Stolen_Love'] text-xl italic text-[#A48D78] mb-12">
          We&apos;d love to hear from you.
        </p>
        <div className="font-['Stolen_Love'] text-[#1A1410] space-y-2">
          <p>2460 Brock Rd Unit C 303</p>
          <p>Pickering, ON</p>
          <p className="mt-4">
            <a href="mailto:info@pilateshaus.ca" className="text-[#82614A] hover:text-[#6d5038] transition">
              info@pilateshaus.ca
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
