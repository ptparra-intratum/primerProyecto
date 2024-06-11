import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Persona from '../persona/persona';
import GetPersonas from '../../hooks/getPersonas';



export default function Main(){

    const { personas } = GetPersonas();

    return(
        <ScrollView>
            <View className="flex-1 items-center gap-4 pb-4 pt-4">
                {personas ? personas.map(persona => (
                        <View key={persona.id} className="flex-1 items-center justify-center bg-[#CED] border-2 border-red-300 w-[90%]">
                            <Persona dato={persona}></Persona>
                        </View>
                    )) : <Text>Cargando Datos...</Text>
                }
            </View>
        </ScrollView>
    );
}