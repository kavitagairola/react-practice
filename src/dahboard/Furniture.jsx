function Furniture() {
  return (
    <>
     
      <div >
        <div
          className="h-[60vh] w-[85vw] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://avon-demo.myshopify.com/cdn/shop/files/chair-bnr_1296x.jpg?v=1614331382')",
          }}
        >
          
          <div className="max-w-7xl absolute h-full px-6 sm:px-10 md:px-20 lg:px-40 mt-44">
            <p className="text-sm sm:text-base mb-2 ">It’s for grand living</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              Different Furniture,
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              Different Stories
            </h2>
            <button className="bg-black text-white mt-4 px-6 py-2 rounded border border-black hover:bg-white hover:text-black transition-all duration-300">
  BUY NOW
</button>


          </div>
        </div>
      </div>
    </>
  );
}

export default Furniture;
