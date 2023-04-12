import React from "react";

import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8">
      <h1 className="text-[40px] text-center font-black">
        Dolce Vita una suenio hecho realidad
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          assumenda quibusdam temporibus incidunt tempore magnam minus vitae.
          Eveniet voluptates earum omnis, odit nostrum, natus perferendis,
          tempore architecto neque maiores veritatis.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-6 md:gap-12">
          <img
            src="portada.jpg"
            alt="Noelia Mansilla"
            className="w-16 h-16 rounded-full"
          />
          <img
            src="portada.jpg"
            alt="Noelia Mansilla"
            className="w-20 h-20 rounded-full ring-4 ring-primary p-1 bg-white"
          />
          <img
            src="portada.jpg"
            alt="Noelia Mansilla"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div className="text-center">
            <h3 className="text-[20px] font-bold">Noelia Mansilla</h3>
            <h5 className="text-[20px] text-gray-500">Fundadora</h5>
        </div>
      </div>
    </div>
  );
};
