import { SectionHeader } from "../ui/SectionHeader";

export const TestimonialSection = () => {
  return (
    <section
      id="testimonial"
      className="px-[16px] py-[40px] flex flex-col gap-[48px] items-center"
    >
      <div className="max-w-2xl text-center">
        <SectionHeader
          title="What Partners Say About Working With Us"
          subtitle="Trusted voices. Real experiences. Proven results."
        />
      </div>

      {/* Testimonial Card */}
      <div className="flex flex-col gap-[16px] pb-[48px] px-[16px] rounded-[16px] border border-[#181D27] w-full max-w-[361px] bg-[#0A0D12] mt-8 relative">
        {/* Ikon Kutip (Floating) */}
        <img
          src="/assets/kutip-icon.svg"
          alt="Quote"
          className="w-[50.67px] h-[37.33px] absolute -top-[20px] left-1/2 transform -translate-x-1/2"
        />

        <div className="flex flex-col items-center mt-[35px] gap-[12px]">
          {/* Rating Stars */}
          <img
            src="/assets/Rating.svg"
            alt="5 Stars"
            className="w-[136px] h-[24px]"
          />

          {/* Quote Text */}
          <p className="text-center text-[14px] leading-[28px] font-semibold text-white">
            “The team delivered exactly what we needed — on time and with
            outstanding quality. Their attention to detail and communication
            were top-notch.”
          </p>
        </div>

        {/* Author Info */}
        <div className="flex flex-col items-center">
          <p className="text-center text-[14px] leading-[28px] font-semibold text-white">
            Sarah Tan
          </p>
          <p className="text-center text-[14px] leading-[28px] font-semibold text-[#FF623E]">
            Product Manager at Finovate
          </p>
        </div>

        {/* Avatar (Floating Bottom) */}
        <div className="absolute -bottom-[30px] left-1/2 transform -translate-x-1/2">
          <img
            src="/assets/sarah-tan.svg"
            alt="Sarah Tan"
            className="w-[60px] h-[60px]"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="mt-4">
        <img
          src="/assets/pagination.svg"
          alt="Pagination"
          className="w-[36px] h-[8px]"
        />
      </div>
    </section>
  );
};
