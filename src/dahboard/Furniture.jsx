function Furniture() {
  return (
    <>
<div className="w-full">
  <div
    className="h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full max-w-7xl mx-auto bg-no-repeat bg-cover bg-top relative"
    style={{
      backgroundImage:
        "url('https://avon-demo.myshopify.com/cdn/shop/files/chair-bnr_1296x.jpg?v=1614331382')",
    }}
  >
    {/* Overlay for better text readability (optional) */}
    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
    
    <div className="relative h-full flex items-center justify-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-lg">
        <p className="text-xs sm:text-sm lg:text-base mb-2 opacity-90">
          It's for grand living
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight sm:leading-snug">
          Different Furniture,
        </h2>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight sm:leading-snug mb-4 sm:mb-6">
          Different Stories
        </h2>
        <button className="bg-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded border border-black hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          BUY NOW
        </button>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
export default Furniture;
