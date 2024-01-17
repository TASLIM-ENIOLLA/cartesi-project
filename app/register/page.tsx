"use client";

import { Fragment } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { categories } from "./categories";

export default function Page() {
  return (
    <Fragment>
      <Header />
      <div className="py-20">
        <div className="container">
          <div className="space-y-10">
            <div className="space-y-1">
              <div className="text-center text-2xl md:text-3xl font-semibold">
                Register
              </div>
              <div className="text-center text-gray-600 text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <div className="max-w-[500px] mx-auto">
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">Company&apos;s name *</div>
                  <input className="p-3 border border-gray-300 rounded-md block w-full" type="text" />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">Company&apos;s category *</div>
                  <select className="p-3 border border-gray-300 rounded-md block w-full">
                    {categories.map((category: string, index: number) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">Physical address *</div>
                  <input className="p-3 border border-gray-300 rounded-md block w-full" type="text" />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">Email address *</div>
                  <input className="p-3 border border-gray-300 rounded-md block w-full" type="email" />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">CAC certificate number *</div>
                  <input className="p-3 border border-gray-300 rounded-md block w-full" type="text" />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">Company&apos;s description *</div>
                  <textarea rows={4} className="p-3 border border-gray-300 rounded-md block w-full resize-none"></textarea>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">Enter password *</div>
                  <input className="p-3 border border-gray-300 rounded-md block w-full" type="password" />
                </div>
                <div className="space-y-2">
                  <div className="text-gray-600 font-semibold">Confirm password *</div>
                  <input className="p-3 border border-gray-300 rounded-md block w-full" type="password" />
                </div>
                <div className="pt-5">
                  <input
                    type="submit"
                    value="register"
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