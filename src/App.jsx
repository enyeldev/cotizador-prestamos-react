import { useState, useEffect } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import { formatearDinero, calcularTotalPagar, calcularPagoMensual } from "./helpers"

function App() {

  const configRange = {
    valorMaxRange: 20000,
    valorMinRange: 100,
    valorIncialRange: 10000,
    setRange: 100
  }
  // useState del range
  const [cantidad, setCantidad] = useState(configRange.valorIncialRange);

  // useState select
  const [meses, setMeses] = useState(6);

  //useState Total a pagar
  const [total, setTotal] = useState(0);

  // useState pago mensual
  const [mensualidad, setMensualidad] = useState(calcularPagoMensual(total, meses))

  //detercar cambios en los parametros y reasignar valores
  useEffect(() => {
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar)
  }, [cantidad, meses]);


  useEffect(() => {
    const resultadoMensualidad = formatearDinero(calcularPagoMensual(total, meses));

    setMensualidad(resultadoMensualidad);
  }, [total, meses])

  //funcion evento change del range
  function handleChange(e) {
    const valor = parseInt(e.target.value);
    setCantidad(valor)


  }

  function handleChangeSelect(e) {
    const valor = parseInt(e.target.value);
    setMeses(valor)
  }



  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button
          operador='resta'
          cantidad={cantidad}
          configRange={configRange}
          setCantidad={setCantidad}
        />
        <Button
          operador='suma'
          cantidad={cantidad}
          configRange={configRange}
          setCantidad={setCantidad}
        />
      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-line-600"
        min={configRange.valorMinRange}
        max={configRange.valorMaxRange}
        step={configRange.setRange}
        value={cantidad}
        onChange={handleChange}
      />

      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>


      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Palzo </span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        onChange={handleChangeSelect}
        value={meses}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
        <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</p>
        <p className="text-xl text-gray-500 text-center font-bold">{mensualidad} Mensuales</p>
      </div>
    </div>
  )
}

export default App
