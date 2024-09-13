import React from 'react'

export default function Page() {
  return (
    <div className='flex flex-col h-2/3' >
      <h1 className="text-2xl font-bold mb-4 text-center">Productos por Marca y Estatus</h1>
      <div className="flex justify-center items-center border h-full">
        <iframe className="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="100%" height="100%" src="https://charts.mongodb.com/charts-project-catalog-puuyhtf/embed/charts?id=6665b635-9fe2-4d8d-8e09-a3e713a3f1e6&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      </div>
    </div>
  )
}


