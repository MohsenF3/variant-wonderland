interface SectionTitleProps {
  subTitle: string;
  title: string;
}

export default function SectionTitle({ subTitle, title }: SectionTitleProps) {
  return (
    <h1 className="my-10 text-center font-bold">
      <span className="text-lg md:text-3xl mr-2">{subTitle}</span>
      <span className="button-gradient bg-clip-text text-5xl md:text-7xl text-transparent">
        {title}
      </span>
    </h1>
  );
}
