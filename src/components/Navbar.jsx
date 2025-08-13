import { Button, buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CiSearch } from "react-icons/ci"
import "../index.css"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AlignJustify, ArrowRight, ChevronDownIcon } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { categories } from "../data/categories.js"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="w-full max-w-[1440px] min-h-[96px] px-4 md:px-[40px] lg:px-[80px] py-[16px] md:py-[24px] mx-auto">
      <div className="w-full max-w-[1280px] flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/images/Logo.svg"
              alt="logo"
              className="w-[200px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 flex-1">
          <div className="text-base whitespace-nowrap">
            <Link to="/about">About us</Link>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-normal">
                  Our categories
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white m-[16px]">
                    {categories.map((item) => (
                      <li
                        key={item.title}
                        className="flex justify-start gap-x-6 w-full hover:bg-gray-100 rounded-md p-2"
                      >
                        <img
                          src={item.href}
                          alt={item.title}
                          className="w-[67px] h-[67px]"
                        />
                        <div className="flex-1">
                          <h1 className="font-semibold text-sm">
                            {item.title}
                          </h1>
                          <p className="text-sm text-[#71717A]">
                            {item.descriptionMenu}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="flex items-center border-b-2 border-gray-300 p-2 flex-1 max-w-xl">
            <CiSearch size={24} className="text-black" />
            <input
              type="text"
              placeholder="Searching.....something"
              className="ml-2 outline-none flex-1 text-base placeholder-gray-500"
            />
          </div>
        </div>

        {/* Sign in Button (always visible on desktop) */}
        <div className="hidden lg:block">
          <Button
            variant="default"
            className="bg-black text-white w-[133px] h-[44px]"
          >
            Sign in
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center bg-[#F4F4F5] rounded-md">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-[12px] "
          >
            <AlignJustify />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          {/* Mobile Search */}
          <div className="flex items-center border-b-2 border-gray-300 p-2">
            <CiSearch size={24} className="text-black" />
            <input
              type="text"
              placeholder="Searching.....something"
              className="ml-2 outline-none flex-1 text-base placeholder-gray-500"
            />
          </div>

          {/* Mobile Sign in */}
          <Button
            variant="default"
            className="bg-black text-white w-full h-[44px]"
          >
            Sign in
            <ArrowRight size={16} />
          </Button>
          <div className="flex justify-between items-center gap-x-4 w-full">
            <Button
              variant="default"
              className="bg-white text-base border-1 border-gray-300 w-full h-[40px] flex-1"
            >
              About us
              <ArrowRight size={16} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={buttonVariants({
                  variant: "default",
                  className:
                    "inline-flex w-full flex-1 border-gray-300 border-1 h-[40px]",
                })}
              >
                Our categories
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 size-3 transition duration-300 data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="grid w-full max-w-[300px]! gap-2 bg-white lg:hidden">
                {categories.map((item) => (
                  <DropdownMenuItem key={item.title}>
                    <img
                      src={item.href}
                      alt={item.title}
                      className="w-[67px] h-[67px]"
                    />
                    <div className="flex-1">
                      <h1 className="font-semibold text-sm">{item.title}</h1>
                      <p className="text-sm text-[#71717A]">
                        {item.descriptionMenu}
                      </p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
