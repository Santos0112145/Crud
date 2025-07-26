export default function Search ({busqueda, setBusqueda}) {
  return <>
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar por nombre o apellido"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-xl border border-gray-300 rounded-md p-2 m-4"
      />
    </div>
  </>
      
    
  
}