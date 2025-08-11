import React from 'react'

import { useState } from 'react';
{/* Iconos */}
import { AiOutlineExclamationCircle } from 'react-icons/ai';

{/* Pages */}
import Search from './search';
import Lista from './Lista'
export default function Pagina1 () {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    const [datos, setDatos] = useState([])
    const [editIndex, setEditIndex] = useState(null);
    {/* Modal para confirmar la eliminación de un usuario */}
    const [mostrarModal, setMostrarModal] = useState(false);
    const [usuarioAEliminar, setUsuarioAEliminar] = useState(null);
    {/* Barra de Busqueda */}
    const [busqueda, setBusqueda] = useState('');
    const datosFiltrados = datos.filter((dato) =>
    `${dato.nombre} ${dato.apellido}`.toLowerCase().includes(busqueda.toLowerCase())
    );

    const manejarSubmit = (e) => {
        e.preventDefault();
        const nuevoDato = { nombre, apellido, edad };
        if (editIndex !== null) {
            const datosActualizados = datos.map((dato, index) =>
                index === editIndex ? nuevoDato : dato
            );
            setDatos(datosActualizados);
            setEditIndex(null);
        } else {
            setDatos([...datos, nuevoDato]);
            
        }
        setNombre('');
        setApellido('');
        setEdad('');


    };
    {/* Eliminar usuario */}
    const eliminarDato = (index) => {
        setUsuarioAEliminar(index);
        setMostrarModal(true);
    };
    const confirmarEliminacion = () => {
        const datosFiltrados = datos.filter((_, i) => i !== usuarioAEliminar);
        setDatos(datosFiltrados);
        setMostrarModal(false);
        setUsuarioAEliminar(null);
    };
    const editarDato = (index) => {
        const dato = datos[index];
        setNombre(dato.nombre);
        setApellido(dato.apellido);
        setEdad(dato.edad);
        setEditIndex(index);
    };
  return <div>
    <h1 className='text-3xl font-bold text-amber-800'>GESTION DE DATOS</h1>
    <Search busqueda={busqueda} setBusqueda={setBusqueda} />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  grid-rows-4 gap-4 p-4">
        <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-4 ">
            <form onSubmit={manejarSubmit} className="max-w-md mx-auto p-4 ">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-lg font-medium text-gray-700 mb-1 text-start">
                    Nombre
                    </label>
                    <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese su nombre"
                    className="w-full border border-gray-300 rounded-md p-2 "
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="Apellido" className="block text-lg font-medium text-gray-700 mb-1 text-start">
                    Apellido
                    </label>
                    <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    id="apellido"
                    name="apellido"
                    placeholder="Ingrese su apellido"
                    className="w-full border border-gray-300 rounded-md p-2 "
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="Edad" className="block text-lg font-medium text-gray-700 mb-1 text-start">
                    Edad
                    </label>
                    <input
                    type="number"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    id="edad"
                    name="edad"
                    min={5}
                    max={100}
                    placeholder="Ingrese su edad"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-green-700 transition-colors cursor-pointer w-[100px]  sm:w-[300px] duration-500"
                >
                    {editIndex !== null ? 'Actualizar' : 'Enviar'}
                </button>
            </form>
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-2 row-span-4 md:col-start-3  m-2">
            {/* Lista de Datos */}   
            <Lista datos={datosFiltrados} eliminarDato={eliminarDato} editarDato={editarDato} />
        </div>
    </div>

    {mostrarModal && (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-sm text-center">
        <div className="flex flex-col items-center space-y-4">
            <AiOutlineExclamationCircle className="text-6xl text-orange-400" />
            <h2 className="text-2xl font-semibold text-gray-800">¿Estás seguro?</h2>
            <p className="text-gray-600 text-sm">
            El usuario <strong>{datos[usuarioAEliminar]?.nombre}</strong> será eliminado y no podrá ser recuperado.
            </p>
            <div className="flex justify-center gap-4 mt-4 w-full">
            <button
                onClick={() => setMostrarModal(false)}
                className="w-1/2 bg-gray-300 text-gray-800 py-2 rounded hover:bg-gray-400 cursor-pointer"
            >
                Cancelar
            </button>
            <button
                onClick={confirmarEliminacion}
                className="w-1/2 bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer"
            >
                Sí, borrar ahora!
            </button>
            </div>
        </div>
        </div>
    </div>
    
    )}
</div>
}


