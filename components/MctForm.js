import React from 'react'

const MCTForm = ({data, item, onChange}) => {
  return(
    <div className="w-1/3">
      <h2 className="p-4 text-3xl">{item}</h2>
      <div className="p-4">
        <label className="block">Calories</label>
        <input type="number" name={item + " Calories"} className="px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
      </div>
      <div className="p-4">
        <label className="block">Carbs</label>
        <input type="number" name={item + " Carbs"} className="px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
      </div>
      <div className="p-4">
        <label className="block">Fat</label>
        <input type="number" name={item + " Fat"} className="px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
      </div>
      <div className="p-4">
        <label className="block">Protein</label>
        <input type="number" name={item + " Protein"} className="px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded focus:outline-none focus:bg-white" onChange={(e) => onChange(e)}></input>
      </div>
    </div>
  )
}

export default MCTForm