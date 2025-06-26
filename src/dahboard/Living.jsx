import React from "react";

function Living() {
  const imageZoomClass =
    "transition-transform duration-500 ease-in-out hover:scale-110";
  const imageWrapperClass = "overflow-hidden";

  return (
    <>
      <div className="flex flex-col lg:flex-row mt-4 gap-4">
  
        <div className={`relative flex justify-center ${imageWrapperClass}`}>
          <img
            src="https://avon-demo.myshopify.com/cdn/shop/files/1.1.jpg?v=1614330853"
            alt="img 1"
            className={`w-full sm:w-[80%] md:w-[60%] lg:w-auto ${imageZoomClass}`}
          />
          <button className="absolute top-10 left-4 bg-#fff text-#333 px-4 py-2 rounded shadow-lg">
            LIVING ROOM
          </button>
        </div>

    
        <div className="flex flex-col gap-4 w-full">
        
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <div className={` relative flex justify-center ${imageWrapperClass}`}>
              <img
                src="https://avon-demo.myshopify.com/cdn/shop/files/2_8e2f800a-6167-45ce-bdd3-1f053ba1eccf_400x.jpg?v=1614330853"
                alt="img 2"
                className={`w-full sm:w-[95%] ${imageZoomClass}`}
              />
               <button className="absolute top-10 left-4 bg-#fff text-#333 px-4 py-2 rounded shadow-lg">
            TABLEWARE
          </button>
            </div>
            <div className={`relative flex justify-center ${imageWrapperClass}`}>
              <img
                src="https://avon-demo.myshopify.com/cdn/shop/files/decorative-clock.jpg?v=1614331382"
                alt="img 3"
                className={`w-full  object-cover ${imageZoomClass}`}
              />
              <button className="absolute top-10 left-4 bg-#fff text-#333 px-4 py-2 rounded shadow-lg">
            WATCH
          </button>
            </div>
          </div>

   
          <div className={`relative flex justify-center h-[30.5vh] ${imageWrapperClass}`}>
            <img
              src="https://avon-demo.myshopify.com/cdn/shop/files/4_9882be1e-b689-44ce-b67c-327a99e35602.jpg?v=1614330853"
              alt="img 4"
              className={`w-full sm:w-[90%] md:w-[60%] lg:w-auto ${imageZoomClass}`}
            />
            <button className="absolute top-10 left-4 bg-#fff text-#333 px-4 py-2 rounded shadow-lg">
            WAll ARTS
          </button>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Living;
