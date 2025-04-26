"use client";

function Hero() {
  return (
    <div id="home" className="relative min-h-screen w-full bg-cover bg-no-repeat
      bg-[url('/image/maria-acolhe-mobile.png')]       
      lg:bg-[url('/image/maria-acolhe-desktop.png')]">
      
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Acolher é Transformar Vidas
          </h2>
          <p className="text-xl md:text-2xl text-white mt-4 mb-12 w-full md:max-w-full lg:max-w-2xl">
            Venha fazer parte desta rede de amor, cuidado e esperança.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-white to-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              CONHEÇA O PROJETO
            </button>              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
