import React from "react";
import cars  from "./cars"


function App() {

  const [honda, tesla]= cars;

// const { coloursByPopularity: teslaColor, speedStats: teslaSpeed } = tesla;
// const { topSpeed: teslaTopSpeed } = teslaSpeed;
// const [teslaTopColour] = teslaColor;

// const { coloursByPopularity: hondaColor, speedStats: hondaSpeed } = honda;
// const { topSpeed: hondaTopSpeed } = hondaSpeed;
// const [hondaTopColour] = hondaColor;

  const {coloursByPopularity : [teslaTopColor], speedStats : {topSpeed : teslaTopSeed}} = tesla;
  const {coloursByPopularity : [hondaTopColor], speedStats : {topSpeed : hondaTopSpeed}} = honda;

  return (
    <>
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSeed}</td>
        <td>{teslaTopColor}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColor}</td>
      </tr>
    </table>
    </>
  )
}

export default App
