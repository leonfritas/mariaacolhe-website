import React from "react";


type GalleryItem = {
  title: string;
  largeImage: string;
  smallImage: string;
};

type GalleryProps = {
  data?: GalleryItem[];
};

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <div id="gallery" className="text-center">
      <div className="flex flex-col items-center justify-center py-[100px] bg-[#f6f6f6]">
        <div className="section-title">
          <h1 className="text-5xl text-center font-bold leading-tight text-blue-gray-900">
              Galeria
          </h1>
          <p className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500 px-10">
            &quot;Além dos microfones e cadeiras, há mãos que se estendem, 
            olhos que brilham com aprendizado e silêncios que falam de conquistas.&quot;
          </p>
        </div>
        <div className="row">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data ? (
              data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="w-full overflow-hidden rounded-lg shadow-md">
                  <img 
                    src={d.smallImage} 
                    alt={d.title} 
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))
            ) : (
              "Loading..."
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
