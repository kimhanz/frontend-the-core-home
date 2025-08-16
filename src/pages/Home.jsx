import React from "react"
import { Button } from "@/components/ui/button"
import { categories, whyIcon, componentImage } from "../data/categories.js"
import { ArrowRight } from "lucide-react"

const Home = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-10 px-4 md:px-8 lg:px-12">
      {/* Hero Section */}
      <div className="w-full max-w-[1280px] flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col flex-1 gap-y-8 md:gap-y-10 md:ml-10">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mt-6">
            Find the Core of Your Home.
          </h1>
          <p className="text-sm sm:text-base italic">
            We believe in building a home with intention, one room at a time.
            Each space is a foundation for a part of your life. Start your
            journey by selecting a room below to discover our curated collection
            of enduring essentials.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6">
            {categories.map((item) => {
              const textColor = {
                "Living Room": "text-[#B45309]",
                "Kitchen & Dining Room": "text-[#44403C]",
                "Home Office": "text-[#6D28D9]",
                Bedroom: "text-[#0E7490]",
                Bathroom: "text-[#1D4ED8]",
                "Balcony & Garden": "text-[#047857]",
              }
              return (
                <Button
                  key={item.title}
                  className={`${
                    textColor[item.title]
                  } border border-gray-300 p-3 sm:p-4 text-sm sm:text-base`}
                >
                  {item.title}
                  <ArrowRight size={16} />
                </Button>
              )
            })}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4">
          {componentImage.map((item) => (
            <img
              key={item.title}
              src={item.href}
              alt={item.title}
              className="w-full h-auto max-h-[250px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Categories Room */}
      <div className="w-full max-w-[1280px] px-4 md:px-8 lg:px-16 flex flex-col justify-center gap-y-24 md:gap-y-48 mt-20 md:mt-40">
        {categories.map((item, index) => {
          const textColor = {
            "Living Room": "bg-[#B45309]",
            "Kitchen & Dining Room": "bg-[#44403C]",
            "Home Office": "bg-[#6D28D9]",
            Bedroom: "bg-[#0E7490]",
            Bathroom: "bg-[#1D4ED8]",
            "Balcony & Garden": "bg-[#047857]",
          }
          return (
            <div
              key={item.title}
              className={`w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <img
                  src={item.href}
                  alt={item.title}
                  className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-xl"
                />
              </div>
              <div className="flex-1">
                <div className="border-b-2 border-gray-300">
                  <h1 className="text-2xl sm:text-3xl font-semibold">
                    {item.title}
                  </h1>
                </div>
                <button
                  className={`${
                    textColor[item.title]
                  } text-white text-xs rounded-2xl px-3 py-1 my-4 sm:my-6`}
                >
                  {item.subCategory}
                </button>
                <p className="px-4 sm:px-6 italic border-l-2 border-gray-300 text-sm sm:text-base">
                  {item.descriptionHome}
                </p>
                <Button
                  variant="default"
                  className="bg-black text-white w-full h-[44px] my-6"
                >
                  Shop Now
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Why choose us */}
      <div className="w-full max-w-[1280px] px-4 md:px-8 lg:px-16 flex flex-col justify-between items-center mt-16">
        <div className="border-b-2 border-gray-300 my-8 md:my-10">
          <h1 className="text-2xl sm:text-3xl font-semibold">Why Choose us?</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-8">
          {whyIcon.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center flex-1"
            >
              <img
                src={item.href}
                alt={item.title}
                className="mb-4 w-16 h-16 sm:w-20 sm:h-20"
              />
              <h1 className="font-semibold mb-2 text-xl sm:text-2xl">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base text-[#71717A] mt-4 sm:mt-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted by */}
      <div className="w-full max-w-[1280px] px-4 md:px-8 lg:px-16 flex flex-col justify-center items-center mt-16">
        <div className="border-b-2 border-gray-300 my-8 md:my-10">
          <h1 className="text-2xl sm:text-3xl font-semibold">Trusted by</h1>
        </div>
        <img
          src="./public/images/generation-logo.svg"
          alt="logo-generation"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60 object-contain"
        />
      </div>
    </div>
  )
}

export default Home
