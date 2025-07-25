import React from 'react'

import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function  Lista ({datos, eliminarDato, editarDato}) {
  return <>
      <h1 className='text-3xl font-bold '>Lista </h1>
      <table className='table-auto border-collapse border-2 border-slate-400 w-full mb-4 mb-4 rounded-lg overflow-hidden'>
                <thead className='text-center bg-gray-700 text-white' >
                    <tr className=''>
                        <th className='text-bold text-xl'>
                            Nombre
                        </th>
                        <th className='text-bold text-xl'>
                            Apellido
                        </th>
                        <th className='text-bold text-xl'>
                            Edad
                        </th>
                        <th className='text-bold text-xl'>
                            Opciones
                        </th>
                    </tr>
                </thead>
                <tbody className='text-center space-y-2'>
                    
                    {datos.map((dato, index) => (
                        <tr key={index} className='border-b-2 border-slate-400'>
                            <td className='text-bold text-xl'>
                                {dato.nombre}
                            </td>
                            <td className='text-bold text-xl p-2'>
                                {dato.apellido}
                            </td>
                            <td className='text-bold text-xl p-2'>
                                {dato.edad}
                            </td>
                            <td className='text-bold text-xl p-2'>
                                <div className='flex justify-center '>
                                    <button
                                    onClick={() => editarDato(index)}
                                    className='flex items-center justify-center bg-blue-600 text-white  px-4 m-2 py-3 rounded-md hover:bg-green-700 transition-colors cursor-pointer w-[50px]  sm:w-[100px] duration-500'
                                >
                                    <FaPencilAlt />
                                </button>
                                 <button
                                    onClick={() => eliminarDato(index)}
                                    className='flex items-center justify-center bg-green-600 text-white px-4 m-2 py-3 rounded-md hover:bg-green-700 transition-colors cursor-pointer w-[50px]  sm:w-[100px] duration-500'
                                >
                                    <MdDelete />
                                </button>

                                </div>
                                
                            </td>
                           
                        </tr>
                    ))}
                </tbody>
                
        </table>
    </>
    
  
}



