import React from 'react'

const ProductDetail = () => {
  return (
    <div className="bg-white py-8">

      <div>
        <div className="max-w-7xl mx-auto px-4">
          {/* ปุ่ม Back */}
          <button className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
            <span>←</span> Back
          </button>

          {/* ข้อความ */}
          <div className="mt-4">
            <p className="text-orange-700 font-medium">
              Our philosophy in every piece
            </p>
            <h1 className="text-2xl md:text-3xl font-bold">
              The core in every detail
            </h1>
          </div>
        </div>

        {/* ส่วนสินค้า */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">

          {/* รูปสินค้า */}
          <div className="md:col-span-2 flex gap-4">
            {/* Thumbnail */}
            <div className="flex flex-col gap-4">
              <img src="./src/img/Aspect-Ratio-thumbnail.png" alt="thumb" className="border-2 border-orange-500 rounded-md" />
              <img src="./src/img/Aspect-Ratio-thumbnail.png" alt="thumb" className="rounded-md" />
              <img src="./src/img/Aspect-Ratio-thumbnail.png" alt="thumb" className="rounded-md" />
            </div>

            {/* รูปใหญ่ */}
            <div className="flex-1">
              <img src="./src/img/Aspect-Ratio-bigpic.png" alt="main" className="rounded-md" />
            </div>
          </div>

          {/* รายละเอียดสินค้า */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Product name</h2>
            <div className="flex flex-col items-start gap-2 text-sm mb-2">
              <button class="w-[54px] h-[20px] text-[12px] bg-orange-700 text-white px-3 py-1 rounded-full flex items-center justify-center">Room</button>
              <button class="w-[84px] h-[20px] text-[12px] bg-gray-200 text-gray-700 font-semibold px-3 py-1 rounded-full flex items-center justify-center">Categories</button>
              <button class="w-[66px] h-[20px] text-[12px] border border-gray-300 text-black font-semibold px-3 py-1 rounded-full flex items-center justify-center">Product</button>
            </div>

            <div>
              <p className="font-medium">Product detail</p>
              <p className="text-gray-600 text-sm">This is an accordion content.</p>
            </div>

            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-lg font-bold">Price</span>
              <span className="text-lg font-bold">฿50,000.00</span>
            </div>

            {/* ปุ่มปรับจำนวน */}
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border rounded">-</button>
              <span>1</span>
              <button className="px-3 py-1 border rounded">+</button>
            </div>

            {/* ปุ่ม Add to Cart & Buy Now */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 border py-3 rounded-md">
                Add to Cart →
              </button>
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        
        {/* ปุ่ม Back + ข้อความ */}
        <div className="max-w-7xl mx-auto px-4">
            {/* ปุ่ม Back */}
            <button className="flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200">
              <span>←</span> Back
            </button>

            {/* ข้อความ */}
            <div className="mt-4">
              <p className="text-orange-700 font-medium">
                Build Your Foundation
              </p>
              <h1 className="text-2xl md:text-3xl font-bold">
                You Might Also Like
              </h1>
            </div>
        </div>

        <div>
            <div class="bg-white shadow-md rounded-lg overflow-hidden p-4 w-[313px] h-[497px]">
                <img src="./src/img/Aspect-Ratio.png" alt="Product Image" class="w-full h-48 object-cover rounded-md mb-4"/>
                <h1 class="text-lg font-semibold mb-2 text-left">Product name</h1>
        
                <div class="flex flex-col items-start gap-2 text-sm mb-2">
                    <button class="w-[54px] h-[20px] text-[12px] bg-orange-700 text-white px-3 py-1 rounded-full flex items-center justify-center">Room</button>
                    <button class="w-[84px] h-[20px] text-[12px] bg-gray-200 text-gray-700 font-semibold px-3 py-1 rounded-full flex items-center justify-center">Categories</button>
                    <button class="w-[66px] h-[20px] text-[12px] border border-gray-300 text-black font-semibold px-3 py-1 rounded-full flex items-center justify-center">Product</button>
                </div>

                <h2 class="text-xl font-bold text-left text-[16px]">฿400.00</h2>
            </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail







