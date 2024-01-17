"use client";

import { Fragment } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Card from "../components/app/Card";

export default function Page() {
  return (
    <Fragment>
      <Header />

      <section className="py-20">
        <div className="container space-y-20">
          <div className="text-center space-y-3">
            <div className="inline-block py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white">
              <span className="uppercase font-semibold text-xs md:text-sm">talking about number</span>
            </div>
            <div className="text-3xl md:text-5xl">
              We believe in numbers
            </div>
          </div>
          <div className="grid grid-cols-3 place-items-center gap-10">
            <div className="col-span-3 md:col-span-1">
              <Card number="110K+" title="products" subtitle="ipsum dolor sit" />
            </div>
            <div className="col-span-3 md:col-span-1">
              <div className="space-y-10">
                <Card number="110K+" title="manufacturers" subtitle="ipsum dolor sit" />
                <Card number="110K+" title="retailers" subtitle="ipsum dolor sit" />
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <Card number="110K+" title="consumers" subtitle="ipsum dolor sit" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}