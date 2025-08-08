import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function App() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-around">
        <div className="pb-5">
        <img src="./public/Logo.svg"></img>
      </div>

        <div>
          <p>About Us</p>
        </div>

        <div>
  
<select>
  <option value="" disabled selected hidden>Our Categories</option>
  <option value="living">Living Room</option>
  <option value="bedroom">Bedroom</option>
  <option value="kitchen">Kitchen</option>
</select>

      </div>

        <Input type="text" placeholder="Searching.....something"
        className="w-60 h-8 px-2"/>

        <img src="./public/div.svg"></img>

      </div>
      <div className="flex justify-center">
        <div>
        <h2 className="text-3xl font-bold ">Find the Core of your<br></br>
    Home.</h2>
    <p className="mt-6 border-s-2 pl-3">We believe in building a home with intention, one room at a time. Each space is<br></br>
        a foundation for a part of your life. Start your journey by selecting a room below<br></br>
        to discover our curated collection of enduring essentials.
    </p>
    <div>
        <ul className="grid grid-cols-2 gap-4 my-5">
              <li>
                <Button
                  className="px-20 bg-white-50 border rounded-sm border-gray-300 text-orange-400">
                  Living Room
                </Button>
              </li>

              <li>
                <Button
                  className="px-11.5 bg-white-50 border rounded-sm border-gray-300 text-gray-600">
                  Kitchen & Dining Room
                </Button>
                </li>

              <li>
                <Button
                  className="px-20 bg-white-50 border rounded-sm border-gray-300 text-purple-500">
                  Home Office
                </Button>
              </li>

              <li>
                <Button
                  className="px-22.5 bg-white-50 border rounded-sm border-gray-300 text-sky-400">
                  BedRoom
                </Button>
              </li>

              <li>
                <Button
                  className="px-22 bg-white-50 border rounded-sm border-gray-300 text-indigo-500">
                  BathRoom
                </Button>
              </li>

              <li>
                <Button
                  className="px-16 bg-white-50 border rounded-sm border-gray-300 text-teal-500">
                  Balcony & Garden
                </Button>
              </li>
            </ul>
    </div>
      </div>
      <div>
        <img src="./public/div.png"></img>
    </div>
      </div>

    <div className="flex justify-center">
      <div>
      <img src="./public/living_room.png"></img>
      </div>
      <div className="pt-20">
        <h2 className="font-medium text-xl mb-5 border-b-2 pb-2">Living Room</h2>
      <button className="rounded-full bg-amber-700 text-white px-3">The core of Connection</button>
        <p className="mt-6 border-s-2 pl-3">
        The heart of the home where stories unfold. Discover enduring pieces designed<br></br>
         for gathering, sharing, and creating lasting memories.
        </p>
      <div>
        <button className="mt-5 bg-black rounded-sm text-white px-61">Shop Now</button>
      </div>
      </div>
    </div>

    <div className="flex justify-center">
      <div>
        <h2 className="font-medium text-xl mb-5 border-b-2 pb-2">BedRoom</h2>
        <button
        className="rounded-full bg-sky-600 text-white px-3">
          The core of Sanctuary
          </button>
        <p className="mt-6 border-s-2 pl-3">
        A personal space to recharge your body and mind. We curate essentials for<br></br>
         rest, focusing on quality materials and serene designs.
        </p>
        <button className="mt-5 bg-black rounded-sm text-white px-61">Shop Now</button>
      </div>
      <div>
        <img src="./public/bedroom.png"></img>
      </div>
    </div>

    <div className="flex justify-center">
      <div>
      <img src="./public/kitchen.png"></img>
    </div>
      <div className="pt-10">
        <h2 className="font-medium text-xl mb-5 border-b-2 pb-2">Kitchen&Dining Room</h2>
        <button className="rounded-full bg-gray-600 text-white px-3"
        >The core of Nourishment
        </button>
        <p className="mt-6 border-s-2 pl-3">
        The studio for the art of cooking. Explore durable, functional, and safe<br></br>
         tableware to honor the meals you create with intention.
        </p>
    <button className="mt-5 bg-black rounded-sm text-white px-61">Shop Now</button>
      </div>
    </div>

    <div className="flex justify-center">
      <div>
        <h2 className="font-medium text-xl mb-5 border-b-2 pb-2">BathRoom</h2>
        <button className="rounded-full bg-blue-600 text-white px-3">The Core of Ritual</button>
        <p className="mt-6 border-s-2 pl-3">
        Transform your daily routines into moments of calm. We select essentials<br></br> 
        defined by their simple function and clean design.
        </p>
        <button className="mt-5 bg-black rounded-sm text-white px-61">Shop Now</button>
      </div>
      <div>
        <img src="./public/bathroom.png"></img>
      </div>
    </div>

    <div className="flex justify-center">
      <div>
         <img src="./public/home_office.png"></img>
      </div>
      <div className="pt-10">
        <h2 className="font-medium text-xl mb-5 border-b-2 pb-2">Home Office</h2>
      <button className="rounded-full bg-purple-600 text-white px-3">The Core of Focus</button>
          <p className="mt-6 border-s-2 pl-3">
          A serene, organized environment is the foundation of exceptional work. Build<br></br>
          the space for your most productive days.
          </p>
      <button className="mt-5 bg-black rounded-sm text-white px-61">Shop Now</button>
      </div>
    </div>

    <div className="flex justify-center">

    <div>
        <h2 className="font-medium text-xl mb-5 border-b-2 pb-2">Balcony & Garden</h2>
        <button className="rounded-full bg-teal-700 text-white px-3">
          The Core of Nature
        </button>
        <p className="mt-6 border-s-2 pl-3">
        Your personal retreat for a connection with the outdoors. We curate enduring,<br></br>
        weather-resistant pieces for your green sanctuary.
        </p>
        <button className="mt-5 bg-black rounded-sm text-white px-61">Shop Now</button>
      </div>
      <div>
        <img src="./public/balcony.png"></img>
    </div>
  </div>
      <div>
        <h3 className="flex justify-center font-bold text-4xl mb-5">Why choose us?</h3>
      <div className="grid grid-cols-3">

        <div>
          <div className="flex justify-center">
            <img src="./public/Enduring_materials.svg"></img>
            </div>
            <h3  className="flex justify-center font-bold my-2 text-2xl">
              Enduring materials
              </h3>
            <p className="flex justify-center text-gray-500">
              We exclusively select robust, natural materials,<br></br>
              chosen for their inherent strength and designed to<br></br>
              last for generations.
              </p>
        </div>

        <div>
          <div className="flex justify-center">
            <img src="./public/Timeless_design.svg"></img>
            </div>
            <h3 className="flex justify-center font-bold my-2 text-2xl">Timeless design</h3>
          
            <p className="flex justify-center text-gray-500">
                Our aesthetic focuses on clean lines and balanced<br></br>
                proportions, creating timeless pieces that transcend<br></br>
                trends and remain beautiful for years to come.
            </p>
        </div>

        <div>
          <div className="flex justify-center">
            <img src="./public/Thoughtful _craftsmanship.svg"></img>
          </div>
            <h3 className="flex justify-center font-bold my-2 text-2xl">Thoughtful craftsmanship</h3>
            <p className="flex justify-center text-gray-500">
              Every piece is the result of a meticulous process,<br></br>
              with skilled artisans paying close attention to every<br></br>
              detail to ensure the highest standard of quality.
            </p>
        </div>
    </div>
      </div>

            <div className="m-5">
                <h4 className="flex justify-center pb-5 border-b-2 mb-5 text-xl font-bold">Trusted by</h4>
              <div className="flex justify-center p-5">
                <img src="./public/generation_logo.svg" width="300px"></img>
              </div>
                <h5 className="flex justify-center pb-5 border-b-2 mb-5 text-xl font-bold">More than just furniture.</h5>
              <div className="flex justify-center">
              <button
              className=" bg-black text-white py-1 px-6 rounded-sm">
                Our Story
                </button>
            </div>
            </div>

            <div>
            <p className="flex justify-center text-sm text-gray-400">
                Behind every piece is a philosophy of enduring quality and timeless design. We invite you to discover the story and principles that guide The Core Home.
            </p>
            <div className="flex justify-start text-sm text-gray-400">
              <p>
                © 2025 The Core Home. All Rights Reserved.
            </p>
            </div>
            <div className="flex flex-row-reverse">
              <img src="./public/Social Media.svg"></img>
            </div>
        </div>

  </div>
  )
}

export default App
