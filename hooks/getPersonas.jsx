import { useEffect, useState } from "react";


export default function GetPersonas(){
    const [personas, setPersonas] = useState(null);
    const [cargando, setCargando] = useState(true);

    const fetchPersonas = async () => {
        try { 
            const response = await fetch('https://run.mocky.io/v3/83511ea8-3be5-49a7-9290-cb603e2c76e6');
            const json = await response.json();
            setPersonas(json);
            setCargando(false); // Cambiar estado a false cuando la carga esté completa
        } catch (error) {
            console.error("Error al obtener datos:", error);
            setCargando(false); // Asegúrate de cambiar el estado incluso si hay errores
        }
    }

    useEffect(() => {
        fetchPersonas();
    }, []);
    

    return {personas};
}