import React from 'react';
import { Image, Pressable, Text, Touchable, View } from 'react-native';
import foto from '../../assets/fotoPerfil.jpg'
import { useNavigate } from 'react-router-native';
import { styled } from 'nativewind';

function traducirGenero(genero) {
    let salida;
    switch(genero){
        case "Male":
            salida = "Masculino";
            break; 
        case "Female":
            salida = "Femenino";
            break;
        case "Agender":
            salida = "No Binario";
            break;
        case "Bigender":
            salida = "Fluido";
            break;
        default:
            salida = "Desconocido";
            break;
    }
    return salida;
}

function devolverColor(genero) {
    let color;
    switch(genero){
        case "Male":
            color = "text-blue-600";
            break; 
        case "Female":
            color = "text-pink-500";
            break;
        case "Agender":
            color = "text-yellow-500";
            break;
        case "Bigender":
            color = "text-green-600";
            break;
        default:
            color = "text-red-600";
            break;
    }
    return color;
}

function redondearCapital(capital) {
    return capital >= 10000 ? Math.round((capital / 100)) / 10 + "k €" : capital + "€";
}

const TouchableView = styled(Touchable, {
    base: "flex-1 flex-row py-6",
    pressed: "bg-gray-200", // Cambia el color de fondo cuando se toca
});

export default function Persona(dato){
    const navigate = useNavigate();
    dato = dato.dato;

    return(
        <>
            <Pressable onPress={() => navigate('/informacion/' + dato.id)} className="active:bg-orange-400">
                <View className="flex-1 flex-row py-6">
                    <View className="w-1/2 flex items-center justify-center">
                        <Image className="w-[70px] h-[70px] object-contain rounded-full" source={foto}></Image>
                    </View>
                    <View className="w-1/2">
                        <Text className="text-2xl font-bold">Ciudadano {dato.id}</Text>
                        <Text className="">Nombre: <Text className="font-bold">{dato.nombre}</Text></Text>
                        <Text className="">Apellidos</Text>
                        <Text className="font-bold mb-4">{dato.apellido1} {dato.apellido2}</Text>
                        <View className="flex flex-row gap-8 mb-4">
                            <View className="flex flex-col">
                                <Text className={"text-center " + devolverColor(dato.genero)}>Genero</Text>
                                <Text className={"font-bold text-center " + devolverColor(dato.genero)}>{traducirGenero(dato.genero)}</Text>
                            </View>
                            <View className="flex flex-col">
                                <Text className="text-center">edad</Text>
                                <Text className="font-bold text-center">{dato.edad.toString()} Años</Text>
                            </View>
                        </View>
                        <Text className="">Marca de su coche: <Text className="font-bold">{dato.marca_coche}</Text></Text>
                        <Text>Capital: {redondearCapital(dato.capital)}</Text>
                    </View>
                </View>
            </Pressable>
        </>
    )
}