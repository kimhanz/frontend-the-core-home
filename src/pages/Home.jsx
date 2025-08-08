import React from "react"
import { Button } from "@/components/ui/button"
import { categories } from "../data/categories.js"
import { ArrowRight } from "lucide-react"
import { componentImage } from "../data/categories.js"

const Home = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[1055px] mx-auto pt-15 px-15">
      {/* <div className="w-full max-w-[1280px] flex justify-between items-start gap-x-10">
        <div className="flex flex-col flex-1 gap-y-10 ml-10">
          <h1 className="font-bold text-5xl mt-8">
            Find the Core of Your Home.
          </h1>
          <p className="text-base italic">
            We believe in building a home with intention, one room at a time.
            Each space is a foundation for a part of your life. Start your
            journey by selecting a room below to discover our curated collection
            of enduring essentials.
          </p>
          <div className="grid grid-cols-2 gap-5">
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
                  } border-1 border-gray-300 p-4`}
                >
                  {item.title}
                  <ArrowRight size={16} />
                </Button>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0">
          {componentImage.map((item) => {
            return (
              <img
                src={item.href}
                alt={item.title}
                className="min-w-[200px] min-h-[200px] w-auto h-[250px]"
              />
            )
          })}
        </div>
      </div>

      Categories Room */}
    </div>
  )
}

export default Home
