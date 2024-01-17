"use client";

import { Fragment } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Page() {
  return (
    <Fragment>
      <Header />
      <div className="py-20">
        <div className="container">
          <div className="space-y-10">
            <div className="space-y-1">
              <div className="text-center text-2xl md:text-3xl font-semibold">
                Log In
              </div>
              <div className="text-center text-gray-600 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <div className="max-w-[400px] mx-auto">
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">CAC certificate number *</div>
                  <input className="p-3 border border-gray-300 rounded-md block w-full" type="text" />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">Enter password *</div>
                  <input className="p-3 border border-gray-300 rounded-md block w-full" type="password" />
                </div>
                <div className="pt-5">
                  <input
                    type="submit"
                    defaultValue="log in"
                    className="p-4 text-white font-semibold capitalize bg-gradient-to-r from-blue-600 to-purple-600 border-none rounded-md block w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}