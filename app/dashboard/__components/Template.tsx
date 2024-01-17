"use client";

type ComponentPropsType = {
	children: React.ReactNode,
	title: string,
	subtitle: string
}

export default function Component({ children, title, subtitle }: ComponentPropsType) {
	return (	
    <div className="h-full overflow-y-auto">
      <div className="p-5">
        <div className="space-y-5 pb-20">
          <div className="pt-10 pb-5">
            <div className="font-extrabold text-3xl capitalize">
            	{title}
            </div>
            <div className="capitalize">
              {subtitle}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
	);
}