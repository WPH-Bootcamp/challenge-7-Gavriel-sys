import Button from "../ui/Button";

export const ContactSection = () => {
  const servicesList = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Software Development",
    "Other",
  ];

  return (
    <section className="flex flex-col gap-[64px] px-[16px] pt-[40px] pb-20 max-w-3xl mx-auto w-full">
      <div className="flex flex-col gap-[24px] w-full">
        {/* Header */}
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[28px] font-bold leading-[38px]">
            Ready to Start? Let’s Talk.
          </h2>
          <p className="text-[14px] font-medium text-[#A4A7AE] leading-[28px]">
            Tell us what you need, and we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-[20px] w-full">
          {/* Name */}
          <label className="flex flex-col gap-[6px]">
            <span className="text-[14px] font-bold leading-[28px]">Name</span>
            <input
              className="w-full h-[48px] px-[16px] rounded-[12px] border border-[#252B37] bg-transparent text-white outline-none focus:border-orange-500 transition"
              type="text"
              placeholder="Enter Your Name"
              required
            />
          </label>

          {/* Email */}
          <label className="flex flex-col gap-[6px]">
            <span className="text-[14px] font-bold leading-[28px]">Email</span>
            <input
              className="w-full h-[48px] px-[16px] rounded-[12px] border border-[#252B37] bg-transparent text-white outline-none focus:border-orange-500 transition"
              type="email"
              placeholder="Enter Your Email"
              required
            />
          </label>

          {/* Message */}
          <label className="flex flex-col gap-[6px]">
            <span className="text-[14px] font-bold leading-[28px]">
              Message
            </span>
            <textarea
              className="w-full h-[134px] px-[16px] py-3 rounded-[12px] border border-[#252B37] bg-transparent text-white outline-none focus:border-orange-500 transition resize-none"
              placeholder="Enter Your Message"
              required
            ></textarea>
          </label>

          {/* Services Checkboxes */}
          <div className="flex flex-col gap-[14px] mt-2">
            <span className="text-[14px] font-bold leading-[28px]">
              Service
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesList.map((service, index) => (
                <label
                  key={index}
                  className="flex items-center gap-[12px] cursor-pointer group"
                >
                  <div className="relative w-[20px] h-[20px] rounded-[6px] border border-[#252B37] group-hover:border-orange-500 transition">
                    <input
                      type="checkbox"
                      className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {/* Ikon Check akan muncul saat input checked (Peer CSS Logic) */}
                    <img
                      src="/assets/checklist-icon.svg"
                      alt="Check"
                      className="absolute inset-0 w-full h-full object-contain opacity-0 peer-checked:opacity-100 transition-opacity"
                    />
                  </div>
                  <span className="text-[14px] font-medium leading-[28px] text-gray-300 group-hover:text-white">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </section>
  );
};
