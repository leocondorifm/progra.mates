import { useState } from "react";

const useCargando = () => {
    const [cargando, setCargando] = useState(false);
    const mostrarCargando = () => setCargando(true);
    const ocultarCargango = () => setCargando(false);
    const pantallaDeCarga = <div>Cargando...</div>
        
    return {cargando,mostrarCargando,ocultarCargango,pantallaDeCarga}

}

export default useCargando