import { Fragment } from "react";

import Partners from "@/components/manufacturers/Partners";
import WhyChoose from "@/components/manufacturers/WhyChoose";
import MailingList from "@/components/manufacturers/MailingList";
import Testimonials from "@/components/manufacturers/Testimonials";
import LandingSection from "@/components/manufacturers/LandingSection";
import WelcomeFeatures from "@/components/manufacturers/WelcomeFeatures";
import VerifiedProducts from "@/components/manufacturers/VerifiedProducts";

export default function Page() {
  return (
    <Fragment>
      <LandingSection />
      <WelcomeFeatures />
      <VerifiedProducts />
      <WhyChoose />
      <Testimonials />
      <Partners />
      <MailingList />
    </Fragment>
  );
}