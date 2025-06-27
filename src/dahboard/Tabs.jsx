import React, { useState } from "react";

function Tabs() {
    const [activeTab, setActiveTab] = useState("tab1");

    const tabClass = (tab) =>
        `px-4 py-2 font-semibold border-b-2 ${activeTab === tab
            ? "border-blue-500 text-blue-600"
            : "border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-300"
        }`;

    const tabImages = {
        tab1: [
            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
            "https://avon-demo.myshopify.com/cdn/shop/products/1_89404380-bfd6-4790-a27a-1abc20efd676_350x.jpg?v=1548245910",
            "https://avon-demo.myshopify.com/cdn/shop/products/a_550x.jpg?v=1548245913",
            "https://avon-demo.myshopify.com/cdn/shop/products/Untitled-2_ab80ff77-d820-4615-bfb3-e698bf51361b_350x.jpg?v=1548245906",
            "https://avon-demo.myshopify.com/cdn/shop/products/1_89404380-bfd6-4790-a27a-1abc20efd676_350x.jpg?v=1548245910",
            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
        ],
        tab2: [

            "https://avon-demo.myshopify.com/cdn/shop/products/Untitled-2_ab80ff77-d820-4615-bfb3-e698bf51361b_350x.jpg?v=1548245906",
            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
            "https://avon-demo.myshopify.com/cdn/shop/products/1_89404380-bfd6-4790-a27a-1abc20efd676_350x.jpg?v=1548245910",
            "https://avon-demo.myshopify.com/cdn/shop/products/a_550x.jpg?v=1548245913",
            "https://avon-demo.myshopify.com/cdn/shop/products/1_89404380-bfd6-4790-a27a-1abc20efd676_350x.jpg?v=1548245910",
            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
        ],
        tab3: [

            "https://avon-demo.myshopify.com/cdn/shop/products/1_89404380-bfd6-4790-a27a-1abc20efd676_350x.jpg?v=1548245910",
            "https://avon-demo.myshopify.com/cdn/shop/products/1_89404380-bfd6-4790-a27a-1abc20efd676_350x.jpg?v=1548245910",
            "https://avon-demo.myshopify.com/cdn/shop/products/a_550x.jpg?v=1548245913",
            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
            "https://avon-demo.myshopify.com/cdn/shop/products/Untitled-2_ab80ff77-d820-4615-bfb3-e698bf51361b_350x.jpg?v=1548245906",
            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
        ],
        tab4: [

            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
            "https://avon-demo.myshopify.com/cdn/shop/products/1_89404380-bfd6-4790-a27a-1abc20efd676_350x.jpg?v=1548245910",
            "https://avon-demo.myshopify.com/cdn/shop/products/a_550x.jpg?v=1548245913",
            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
            "https://avon-demo.myshopify.com/cdn/shop/products/Untitled-2_ab80ff77-d820-4615-bfb3-e698bf51361b_350x.jpg?v=1548245906",
            "https://avon-demo.myshopify.com/cdn/shop/products/2_016b3922-4da2-4f4b-a1ce-43990c2146d0_350x.jpg?v=1548245965",
        ],
    };

    return (
        <div className="w-full max-w-6xl  mt-10 px-4 justify-center" >

            <div className="flex gap-4 border-b mb-6">
                <button onClick={() => setActiveTab("tab1")} className={tabClass("tab1")}>
                    NEW ARRIVALS
                </button>
                <button onClick={() => setActiveTab("tab2")} className={tabClass("tab2")}>
                    BEST SELLER
                </button>
                <button onClick={() => setActiveTab("tab3")} className={tabClass("tab3")}>
                    TRANDING
                </button>
                <button onClick={() => setActiveTab("tab4")} className={tabClass("tab4")}>
                    SALE
                </button>
            </div>

            {/* Fixed 6-column grid (horizontal row) */}
            <div className="grid grid-cols-6 gap-4">
                {tabImages[activeTab].map((imgUrl, index) => (
                    <img
                        key={index}
                        src={imgUrl}
                        alt={`Tab ${activeTab} Image ${index + 1}`}
                        className="rounded shadow hover:scale-105 transition-transform duration-300"
                    />
                ))}
            </div>
        </div>
    );
}

export default Tabs;
