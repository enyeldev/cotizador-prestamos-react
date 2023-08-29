/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Button({ operador, cantidad, configRange, setCantidad }) {


    function handleClickDecremento() {
        const valor = cantidad - configRange.setRange;
        if (valor >= configRange.valorMinRange) {
            setCantidad(valor)
            return;
        }
        alert('Cantidad no valida')
    }

    function handleClickIncremento() {
        const valor = cantidad + configRange.setRange;
        if (valor <= configRange.valorMaxRange) {
            setCantidad(valor)
            return;
        }

        alert('Cantidad no valida')
    }



    return (

        <button
            type="button"
            className="h-10 w-10 flex justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500"
            onClick={operador === 'suma' ? handleClickIncremento : handleClickDecremento}
        >
            {operador === 'resta' ? '-' : '+'}
        </button>

    )
}

export default Button