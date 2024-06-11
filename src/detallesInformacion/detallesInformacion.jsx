import React from "react";
import { Image, Platform, Pressable, Text, View } from "react-native";
import { useNavigate, useParams } from "react-router-native";
import Persona from '../persona/persona'
import { datos } from "../data/MOCK_DATA";
import foto from '../../assets/fotoPerfil.jpg'

export default function DetallesInformacion(){

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

    const { id } = useParams();


    function buscarPersona(personas, id) {
        return personas.find(persona =>  persona.id === parseInt(id));
    }

    const navigate = useNavigate();

    let fondoBoton = Platform.OS === 'android' ? "bg-blue-500" : "bg-green-700";

    function renderizar(p) {
        return(
            <View>
                <Pressable onPress={() => navigate(-1)} className={fondoBoton + " w-[90%] py-1 mt-6 mx-auto"}><Text className="text-white text-center text-xl font-bold">Volver</Text></Pressable>       
                <View className="flex items-center justify-center bg-[#CED] border-2 border-red-300 w-[90%] h-[60%] gap-4 m-auto">
                    <View className="flex-1 flex-row items-center justify-center">
                        <View className="w-[40%] flex items-center justify-center">
                            <Image className="w-[70px] h-[70px] object-contain rounded-full" source={foto}></Image>
                        </View>
                        <View className="w-[60%]">
                            <Text className="text-2xl font-bold">Ciudadano {id}</Text>
                            <Text className="">Nombre: <Text className="font-bold">{p.nombre}</Text></Text>
                            <Text className="">Apellidos</Text>
                            <Text className="font-bold mb-4">{p.apellido1} {p.apellido2}</Text>
                            <View className="flex flex-row gap-8 mb-4">
                                <View className="flex flex-col">
                                    <Text className={"text-center " + devolverColor(p.genero)}>Genero</Text>
                                    <Text className={"font-bold text-center " + devolverColor(p.genero)}>{traducirGenero(p.genero)}</Text>
                                </View>
                                <View className="flex flex-col">
                                    <Text className="text-center">edad</Text>
                                    <Text className="font-bold text-center">{p.edad.toString()} Años</Text>
                                </View>
                            </View>
                            <Text className="">Marca de su coche</Text>
                            <Text className="font-bold mb-6">{p.marca_coche}</Text>
                            <Text>Capital: {redondearCapital(p.capital)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    let persona = buscarPersona(datos, id);

    return(
        renderizar(persona)
    )
}