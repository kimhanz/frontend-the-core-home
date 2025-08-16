import React from 'react'

const ProductCard = () => {
  return (
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
  );
};

export default ProductCard;