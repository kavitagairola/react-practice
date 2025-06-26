import React from "react";

function Hanging() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4">
      <div className="w-full sm:w-1/2">
        <img
          src="https://avon-demo.myshopify.com/cdn/shop/files/2_8e2f800a-6167-45ce-bdd3-1f053ba1eccf_400x.jpg?v=1614330853"
          alt="Drive"
          className="w-full h-64 object-cover rounded shadow"
        />
      </div>
      <div className="w-full sm:w-1/2">
        <img
          src="https://avon-demo.myshopify.com/cdn/shop/files/decorative-vase.jpg?v=1614331382"
          alt="Vase"
          className="w-full h-64 object-cover rounded shadow"
        />
      </div>
       <div className="w-full sm:w-1/2">
        <img
          src="https://avon-demo.myshopify.com/cdn/shop/files/decorative-clock.jpg?v=1614331382"
          alt="Vase"
          className="w-full h-64 object-cover rounded shadow"
        />
      </div>
    </div>
  );
}

export default Hanging;
