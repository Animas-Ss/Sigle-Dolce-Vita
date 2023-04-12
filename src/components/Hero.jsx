import React from "react";
//iconos
import { RiPlayFill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";

const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      {/**informacion */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-28">
        <div className="flex flex-col gap-8">
          <h1
            className="text-5xl xl:text-7xl drop-shadow-sm shadow-white font-bold leading-[4rem] xl:leading-[1.5rem] relative "
          >
            <span className="font-ephesis text-black block">Pasteleria</span>
            <span className="block font-Bangers xl:text-9xl text-white" style={{textShadow: '3px 3px 0 rgb(192, 132, 252), 5px 5px 1px #111', webkitTextStroke: '1.5px black'}}>ARTESANAL</span>
            {/* <span className="text-white p-2 font-KaushanScript relative  text-4xl">Exelencia en <span className="text-white">Calidad</span>
              {/* <span className="w-[30px] h-[30px] rounded-full border-8 bg-white border-primary absolute -top-4 -left-4"></span>
              <span className="w-[30px] h-[30px] rounded-full border-8 bg-white border-primary absolute -top-4 -right-4"></span>
              <span className="w-[30px] h-[30px] rounded-full border-8 bg-white border-primary absolute -bottom-4 -left-4"></span>
              <span className="w-[30px] h-[30px] rounded-full border-8 bg-white border-primary absolute -bottom-4  -right-4"></span> */}
          </h1>
          <p className="text-gray-400 text-xl leading-5">
            Un enprendimiento realizado con ezfuerzo y dedicacion , cada
            producto elborado por nosotros esta hecho bajo los mejores
            estandares de calidad y con los productos mas frescos del mercado,
            nuestro lema es mantener la maxima calidad en todo el proceso
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <button className="w-full xl:w-auto bg-purple-400 text-white rounded-xl py-2 px-8">
              Contacto
            </button>
            <button className="w-full xl:w-auto flex items-center gap-4">
              <RiPlayFill className="bg-secundary text-primary p-4 rounded-full box-content" />
              <p className="text-left">
                Mira
                <br />
                contenido
              </p>
            </button>
          </div>
        </div>
      </div>
      {/**imagen*/}
      <div className="md:col-span-3 flex items-center justify-center relative p-8">
        <div className="w-[250px] h-[250px] md:w-96 md:h-96  relative">
          <img src="Noelia-bg.png" className="w-[300px] h-[300px] md:w-96 md:h-96 object-cover absolute -mt-[70px] md:left-10" />
          <div className="absolute w-[300px] ml-[50%] -translate-x-[50%] -bottom-10">
            <div className="shadow-xl rounded-lg p-4 flex flex-col gap-2 justify-center max-w-[300px]">
              <div className="flex items-center">
                <img
                  src="hero.png"
                  className="w-10 h-10 rounded-full object-cover bg-black ring-2 ring-gray-300 "
                />
                <img
                  src="hero.png"
                  className="w-10 h-10 rounded-full object-cover bg-black ring-2 ring-gray-300 -ml-4"
                />
                <img
                  src="hero.png"
                  className="w-10 h-10 rounded-full object-cover bg-black ring-2 ring-gray-300 -ml-4"
                />
                <img
                  src="hero.png"
                  className="w-10 h-10 rounded-full object-cover bg-black ring-2 ring-gray-300 -ml-4"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                15 anios de Exelencia
              </h2>
              <div className="flex items-center gap-2 text-lg text-gray-500">
                <AiFillStar className="text-primary" /> 5.0 Calidad
              </div>
            </div>
            <span className="w-[60px] h-[60px]  bg-white absolute -bottom-2 -right-2 -z-10"></span>
            <span className="w-[80px] h-[80px] rounded-full bg-primary absolute -bottom-10 -right-10 -z-20"></span>
          </div>
          {/**logos */}
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-full object-contain  absolute border-l-8 border-gray-500 top-[15%] left-[15%] " alt="torta.png" />
        <div className="w-5 h-5 md:w-10 md:h-10 rounded-full object-contain absolute border-l-4 border-gray-500 top-[5%] left-[5%] bg-blue-300" alt="torta.png" />
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-full object-contain absolute border-l-8 border-gray-500 top-[5%] right-[10%] " alt="torta.png" />
        <div className="absolute w-[250px] h-[250px] md:w-80 md:h-80  rounded-full border-8 border-pink-200 bg-pink-200 shadow-fondo -z-10"></div>
      </div>
    </section>
  );
};

export default Hero;
