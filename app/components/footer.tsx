import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-black text-white py-6 md:pt-10 md:pb-[60px]">
      <div className="md:hidden flex justify-between container">
        <h4>Itinerary</h4>
        <h4>Blog</h4>
        <h4>Support</h4>
      </div>
      <div className="py-6 grid md:grid-cols-2 container">
        <div className="grid grid-cols-2 justify-between gap-10 lg:gap-48">
          <div className="flex flex-col gap-1 w-[200px] md:w-[214px] lg:w-[300px] shrink-0">
            <h2 className="text-3xl font-bold">Explore Jstore</h2>
            <p className="text-gray-400 w-full text-xs md:text-sm">
              Jstore and Jstore logo are trademarks or registered trademarks of
              Bonvago, Inc. CST# 0000000-00.
            </p>
          </div>
          <div
            className="flex md:hidden flex-col ml-8 mt-4
           gap-4"
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <BsInstagram className="w-5 h-5 lg:w-8 lg:h-8" />
                <FaFacebook className="w-5 h-5 lg:w-8 lg:h-8" />
              </div>
              <p className="font-medium text-sm">1-800-000-0000</p>
            </div>
          </div>
          <div className="hidden md:flex flex-col ml-10 lg:ml-0 pt-4 gap-6">
            <div className="flex flex-col gap-2">
              <h4>Phone</h4>
              <p className="font-medium text-sm lg:text-xl">1-800-000-0000</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4>Social</h4>
              <div className="flex gap-4">
                <BsInstagram />
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-6 md:pl-10 lg:pl-60 flex-col gap-12">
          <div className="hidden md:flex justify-between w-[300px]">
            <h4>Itinerary</h4>
            <h4>Blog</h4>
            <h4>Support</h4>
          </div>
          <div className="text-gray-400 text-xs md:text-sm">
            <p>
              © 2023 Bonvago, Inc. All rights reserved. Bonvago is not
              responsible for content on external websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
