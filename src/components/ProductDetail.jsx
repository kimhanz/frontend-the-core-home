import React from 'react'


const ProductDetail = () => {
  return (
    <div className="bg-white py-8">
      {/* SECTION HERO ครอบทุกเนื้อหา */}
      <div className="max-w-7xl mx-auto px-4 space-y-12">

        {/* 1. Header Section */}
        <div>
          <button className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
            <span>←</span> Back
          </button>
          <div className="mt-4">
            <p className="text-orange-700 font-medium">
              Our philosophy in every piece
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">
              The core in every detail
            </h1>
          </div>
        </div>

        {/* 2. รายละเอียดสินค้า */}
        <div className="w-[1280px] h-[606px] mx-auto px-4 md:px-0">
          <div className="w-[1280px] h-[606px] flex">

            {/* ซ้าย: โซนรูปสินค้า */}
            <div className="w-[816px] h-[606px] flex">

              {/* ซ้ายในซ้าย: Thumbnail */}
              <div className="w-[186px] h-[606px] flex flex-col gap-6">
                {/* แต่ละรูป 186×186, gap = 24px (gap-6) */}
                <img src="./src/img/Aspect-Ratio-thumbnail.png" alt="thumb" 
                    className="w-[186px] h-[186px] object-cover rounded-md border-2 border-orange-500" />
                <img src="./src/img/Aspect-Ratio-thumbnail.png" alt="thumb" 
                    className="w-[186px] h-[186px] object-cover rounded-md" />
                <img src="./src/img/Aspect-Ratio-thumbnail.png" alt="thumb" 
                    className="w-[186px] h-[186px] object-cover rounded-md" />
              </div>

              {/* รูปใหญ่ */}
              <div className="w-[590px] h-[606px] flex items-center ml-[40px]">
                {/* divครอบรูป และรูป */}
                <div className="w-[590px] h-[590px]">
                  <img src="./src/img/Aspect-Ratio-bigpic.png" alt="main" 
                      className="w-[590px] h-[590px] object-cover rounded-md" />
                </div>
              </div>
            </div>

            {/* ขวา: รายละเอียดสินค้า */}
            <div className="w-[440px] h-[556px] ml-[24px] flex flex-col">

              {/*  กล่องคอนเทนต์หลัก */}
              <div className="w-[392px] h-[300px] flex flex-col gap-4">
                
                {/* กล่องหัวเรื่อง */}
                <div className="w-[392px] h-[40px] flex items-center">
                  <h3 className="text-2xl font-bold leading-none truncate">Product name</h3>
                </div>

                {/* กล่องหมวดหมู่ */}
                <div className="w-[392px] h-[92px] flex flex-col gap-4">
                  <button className="w-[54px] h-[20px] text-[12px] bg-amber-700 text-white rounded-full flex items-center justify-center">
                    Room
                  </button>
                  <button className="w-[84px] h-[20px] text-[12px] bg-gray-200 text-gray-700 font-semibold rounded-full flex items-center justify-center">
                    Categories
                  </button>
                  <button className="w-[66px] h-[20px] text-[12px] border border-gray-300 text-black font-semibold rounded-full flex items-center justify-center">
                    Product
                  </button>
                </div>

                {/* กล่องรายละเอียด */}
                <div className="w-[392px] h-[92px]">
                  <div className='w-[392px] h-[56px]'>
                    <p className="font-medium">Product detail</p>
                  </div>
                  <div className='w-[392px] h-[36px]'>
                  <p className="text-gray-600 text-sm">This is an accordion content.</p>
                  </div>
                </div>
              </div>

              {/* ราคา */}
              <div className="w-[392px] h-[28px] gap-4 flex items-center justify-between">
                <span className="text-xl font-bold leading-none">Price</span>
                <span className="text-xl font-bold leading-none">฿50,000.00</span>
              </div>

              {/* เพิ่มจำนวน */}
              <div className="w-[152px] h-[48px] mt-8 flex items-center justify-between">
                <button className="w-[44px] h-[44px] border rounded flex items-center justify-center">-</button>
                <span className="text-base w-[44px] h-[44px] border rounded flex items-center justify-center">1</span>
                <button className="w-[44px] h-[44px] border rounded flex items-center justify-center">+</button>
              </div>

              {/* ลงตะกร้า */}
              <div className="w-[392px] h-[96px] mt-8 flex flex-col gap-2">
                <button className="h-[44px] w-full border rounded-md flex items-center justify-center gap-2">
                  Add to Cart →
                </button>
                <button className="h-[44px] w-full rounded-md bg-amber-700 hover:bg-orange-700 text-white">
                  Buy Now →
                </button>
              </div>
            </div>



          </div>
        </div>


        {/* 3. Header Section */}
        <div>
          <button className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
            <span>←</span> Back
          </button>
          <div className="mt-4">
            <p className="text-orange-700 font-medium">
              Build Your Foundation
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">
              You Might Also Like
            </h1>
          </div>
        </div>

        {/* 4. Product Card */}
        <div className="w-[313px] h-[497px]">  
          <div className="bg-white w-[313px] h-[497px] flex flex-col">
            
            {/* รูปภาพ */}
            <div className="w-[313px] h-[313px]">
              <img
                src="./src/img/Aspect-Ratio.png"
                alt="Product Image"
                className="w-full h-full object-cover rounded-md mb-4"
              />
            </div>

            {/* รายละเอียดสินค้า */}
            <div className="flex flex-col items-start text-sm flex-1 p-2">
              <h1 className="text-lg font-semibold mb-2 text-left">
                Product name
              </h1>

              <div className="flex flex-col gap-4">
                <button className="w-[54px] h-[20px] text-[12px] bg-amber-700 text-white rounded-full flex items-center justify-center">
                  Room
                </button>
                <button className="w-[84px] h-[20px] text-[12px] bg-gray-200 text-gray-700 font-semibold rounded-full flex items-center justify-center">
                  Categories
                </button>
                <button className="w-[66px] h-[20px] text-[12px] border border-gray-300 text-black font-semibold rounded-full flex items-center justify-center">
                  Product
                </button>
              </div>
            </div>

            {/* ราคา */}
            <h2 className="text-xl font-bold text-left text-[16px] mt-auto p-2">
              ฿400.00
            </h2>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ProductDetail
