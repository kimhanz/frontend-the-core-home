import React from 'react'

const ProductCard = () => {
  return (
    <div>
        <div class="bg-white shadow-md rounded-lg overflow-hidden p-4">
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
  )
}

export default ProductCard