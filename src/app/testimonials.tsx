import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  text: string;
  img: string;
}

interface TestimonialsProps {
  data?: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = (props) => {
    return (
      <div id="testimonials" className="py-[100px] bg-[#f6f6f6]">
        <div className="container mx-auto px-4">
          <div className="section-title text-center mb-12">
            <h2 className="text-5xl  font-bold leading-tight  text-blue-gray-900">
              Depoimentos          
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="w-full md:w-1/3 px-4 mb-8">
                    <div className="testimonial bg-white p-5 rounded-lg shadow-sm relative">
                      <div className="testimonial-image float-left mr-4">
                        <Image 
                          src={d.img} 
                          alt={d.name} 
                          width={100}
                          height={100}
                          className="block w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div className="testimonial-content overflow-hidden">
                        <p className="mb-0 text-sm italic lg:text-[18px]" >{d.text}</p>
                        <div className="testimonial-meta mt-2 text-sm font-semibold text-[#666] lg:text-[22px]">
                          - {d.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : <div className="w-full text-center">loading</div>}
          </div>
        </div>
      </div>
    );
  };