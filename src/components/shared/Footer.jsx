import React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[366px] mx-auto pt-15 px-15">
      <div className="w-full max-w-[1280px] flex flex-col justify-center items-center">
        <div className="border-b-2 border-gray-300">
          <h1 className="text-3xl/normal font-semibold">
            More than just furniture.
          </h1>
        </div>
        <div className="py-10">
          <Button
            variant="default"
            className="bg-black text-white w-[133px] h-[44px] rounded-md"
          >
            Our Story
            <ArrowRight size={16} />
          </Button>
        </div>
        <div className="pb-10">
          <p className="text-sm text-[#71717A] text-center">
            Behind every piece is a philosophy of enduring quality and timeless
            design. We invite you to discover the story and principles that
            guide The Core Home.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-sm text-[#71717A] w-full">
            © 2025 The Core Home. All Rights Reserved.
          </p>

          <img
            src="./public/images/social-media.svg"
            alt="social-media"
            className="text-[#71717A]"
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
