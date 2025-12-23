import Button from "../../ui/Button"; // Mundur 2 folder untuk cari ui/Button

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center py-[61px] px-4 text-center">
      <div className="flex flex-col gap-[8px] items-center max-w-[361px]">
        {/* Judul */}
        <h1 className="text-[34px] font-bold leading-[1.29]">
          Your Tech Partner for <br className="md:hidden" />
          <span className="text-[#FF6C37]"> Smarter Growth</span>
        </h1>

        {/* Deskripsi */}
        <p className="text-md font-semibold text-gray-200">
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>
      </div>

      {/* Tombol */}
      <div className="mt-8 w-full max-w-[361px]">
        <Button>Let's Talk</Button>
      </div>

      {/* Gambar Hero */}
      <div className="mt-8 h-auto w-full max-w-md">
        <img
          src="/assets/hero-image.svg"
          alt="Hero Illustration"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
