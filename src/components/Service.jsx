import React from "react";
import { MdMail } from "react-icons/md";

const Service = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-8 xl:p-20">
      <div className="flex flex-col gap-4 p-16">
        <h1 className="text-[40px] font-bold">Como podemos ayudarte</h1>
        <p className="text-[20px] text-gray-500">
          presupuestos cargo y todo lo que necesites saber podemos asesorarte
          sin ninguna molestia, no dudes en contactarnos
        </p>
        <form>
          <div className="bg-gray-200 flex justify-between items-center rounded-xl py-2 px-4 w-[500px] gap'8">
            <div className="flex items-center justify-start gap-2 w-full">
              <MdMail className="inline-block text-[40px] text-gray-700" />
              <input
                type="text"
                placeholder="Coloca tu email para saber las promociones"
                className=" bg-transparent outline-none w-full text-sm"
              />
            </div>
            <button
              type="submit"
              className="text-lg font-semibold py-2 px-6 bg-primary text-white rounded-xl border-none"
            >
              Contactame
            </button>
          </div>
        </form>
      </div>
      {/**Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h3>Mesas Dulces</h3>
          <p>Para todo tipo de eventos</p>
        </div>
        <div>
          <h3>Postres</h3>
          <p>Para eventos , cumpleanios, regalos</p>
        </div>
        <div>
          <h3>Desayunos</h3>
          <p>Para hacer sentir a esa persona especial en su dia</p>
        </div>
        <div>
          <h3>Tortas Personalizadas</h3>
          <p>
            Diferentes sabores, y decoraciones nos ajustamos a tus exigencias
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
