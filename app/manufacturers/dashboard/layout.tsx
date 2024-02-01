import Tabs from "@/components/manufacturers/dashboard/Tabs";

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <section className="py-10">
      <div className="container">
        <div className="space-y-10">
          <Tabs />
          <div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}