import React from 'react';
import { Platform, Text, View } from 'react-native';
import { Link, useLocation } from 'react-router-native';

export default function BarraNavegacion(){

    function Enlace(texto, to) {
        const { pathname } = useLocation();
        let activo = pathname === to;

        return(
            <Link to={to}>
                <Text className={"text-white text-lg " + (activo ? "font-extrabold" : "")}>{texto}</Text>
            </Link>
        )
    }

    let fondo = Platform.OS === 'android' ? "bg-green-700" : "bg-blue-500";

    
    return(
        <View className={fondo + " pb-4 w-full flex flex-row gap-4 m-0 z-50"}>
            {Enlace("Ciudadanos", '/')}
            {Enlace("Calculadora Impuestos", '/calculadora')}
        </View>
    )
}