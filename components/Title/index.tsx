"use client";

type PageProps = {
  title: string,
  subtitle: string
}

export default function Page({ title, subtitle }: PageProps) {
  return (
    <div className="space-y-2 text-center">
      <div className="title text-2xl md:text-3xl capitalize leading-[1.5] text-white font-bold">
        {title}
      </div>
      <div className="font-semibold text-slate-300 capitalize text-base md:text-lg">
        {subtitle}
      </div>
      <style jsx>{`
        .title {
          position: relative;
          z-index: 0;
        }
        .title:after {
          top: 0%;
          left: 50%;
          z-index: -1;
          height: 100%;
          display: block;
          color: #00ffe755;
          position: absolute;
          content: "${title}";
          transform: translate(-50%, 0) scale(1.05, 1.5);
        }
      `}</style>
    </div>
  );
}