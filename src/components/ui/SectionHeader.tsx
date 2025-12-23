type SectionHeaderProps = {
  title: string;
  subtitle: string;
  align?: "left" | "center"; // Opsional, default center
};

export const SectionHeader = ({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <div
      className={`flex flex-col gap-[11px] ${
        align === "center"
          ? "items-center text-center"
          : "items-start text-start"
      }`}
    >
      <h2 className="text-[28px] font-bold leading-[38px] tracking-[-2%]">
        {title}
      </h2>
      <p className="text-[#A4A7AE] text-[14px] font-medium leading-[28px]">
        {subtitle}
      </p>
    </div>
  );
};
