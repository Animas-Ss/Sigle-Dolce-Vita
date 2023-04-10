import React from "react";

export const Works = () => {
  return (
    <div className="p-8 xl:p-20">
      <div className="mb-8">
        <h1 className="text-[40px] font-bold ">Algunas de nuestros trabajos, Personalizados para cada evento</h1>
        <p className="text-xl text-gray-500">Todo producto realizado con la exigencia de nuestros clientes y el mayor gusto</p>
      </div>
      {/**Trabajos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
           <img src="pastel-1.jpg" className="w-full h-[500px] object-cover rounded-3xl shadow-sm" alt="pastel" />
           <p className="text-gray-500">Pastel de fiesta-09/04/2023</p>
           <h3 className="text-2xl font-bold">Tortas para eventos</h3>
           <p className="text-gray-500">Todo evento necesita ser recordado de la mejor manera por eso nos especializamos no solo en la calidad de la elaboracion sino tambien en la decoracion sobre nuestros productos</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <img src="brownie-t.jpg" alt="imagen de brownie" className="w-full h-56 object-cover rounded-3xl shadow-sm" />
              <p className="text-gray-500">Brownies-09/04/2023</p>
              <h3 className="text-2xl font-bold">Brownies mesas dulces</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src="rosca.jpg" alt="imagen de brownie" className="w-full h-56 object-cover rounded-3xl shadow-sm" />
              <p className="text-gray-500">Brownies-09/04/2023</p>
              <h3 className="text-2xl font-bold">Brownies mesas dulces</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src="cake.png" alt="imagen de brownie" className="w-full h-56 object-cover rounded-3xl shadow-sm" />
              <p className="text-gray-500">Brownies-09/04/2023</p>
              <h3 className="text-2xl font-bold">Brownies mesas dulces</h3>
            </div>
            <div className="flex flex-col gap-2">
              <img src="brownie-t.jpg" alt="imagen de brownie" className="w-full h-56 object-cover rounded-3xl shadow-sm" />
              <p className="text-gray-500">Brownies-09/04/2023</p>
              <h3 className="text-2xl font-bold">Brownies mesas dulces</h3>
            </div>
        </div>
      </div>
    </div>
  );
};
