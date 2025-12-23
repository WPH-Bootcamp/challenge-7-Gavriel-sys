import { useState } from "react";
import Button from "../ui/Button";

export const FaqSection = () => {
  // State untuk melacak pertanyaan mana yang sedang terbuka (null = tertutup semua)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer Web Development, Mobile Apps, UI/UX Design, and more.",
    },
    {
      question: "How do I know if this is right for my business?",
      answer: "We provide free consultation to assess your needs.",
    },
    {
      question: "How much does a project cost?",
      answer: "It depends on the scope and complexity of your project.",
    },
    {
      question: "How long does it take?",
      answer: "Typically 2-4 months for standard projects.",
    },
    {
      question: "Can I start with a small project first?",
      answer: "Yes, we support MVP development to start small.",
    },
  ];

  // Fungsi toggle (klik buka, klik lagi tutup)
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="px-[16px] py-[40px] w-full flex flex-col lg:flex-row gap-[40px] items-start max-w-7xl mx-auto"
    >
      {/* Kolom Kiri: Daftar Pertanyaan */}
      <div className="w-full lg:w-2/3 flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[28px] font-bold leading-[38px]">
            Need Help? Start Here.
          </h2>
          <p className="text-[14px] font-medium text-[#A4A7AE] leading-[28px]">
            Everything you need to know — all in one place.
          </p>
        </div>

        <div className="w-full h-[1px] bg-[#252B37]"></div>

        <div className="flex flex-col gap-[24px]">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col">
              {/* Header Accordion (Bisa diklik) */}
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left py-2 group"
              >
                <h2
                  className={`text-[18px] font-bold leading-[32px] transition-colors ${
                    openIndex === index ? "text-orange-500" : "text-white"
                  }`}
                >
                  {faq.question}
                </h2>
                {/* Ikon Plus/Minus sederhana */}
                <span className="text-2xl font-light text-[#A4A7AE]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Isi Jawaban (Muncul jika openIndex cocok) */}
              {openIndex === index && (
                <div className="pb-4 pt-2">
                  <p className="text-[14px] font-medium text-[#A4A7AE] leading-[28px]">
                    {faq.answer}
                  </p>
                </div>
              )}

              <div className="w-full h-[1px] bg-[#252B37] mt-2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Kolom Kanan: Card Consultation */}
      <div className="w-full lg:w-1/3 bg-[#CC4E32] rounded-[16px] p-[20px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <h2 className="text-[28px] font-bold leading-[38px] text-white">
            Let’s talk it through
          </h2>
          <p className="text-[14px] font-medium leading-[28px] text-white/90">
            Book a free consultation with our team.
          </p>
        </div>

        <img
          src="/assets/consultation-image.svg"
          alt="Consultation"
          className="w-full h-auto"
        />

        {/* Tombol Putih (Custom Variant) */}
        <Button
          variant="custom"
          className="bg-white text-black hover:bg-gray-100 rounded-full w-full h-[44px]"
        >
          Free Consultation
        </Button>
      </div>
    </section>
  );
};
