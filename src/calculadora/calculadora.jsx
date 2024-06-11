import React from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { Formik } from "formik";

const valoresIniciales = {
    cantidad: '',
    iva: '',
    deducciones: ''
}

function resultado(datos) {
    Alert.alert('LECHUGA');
}

export default function Calculadora(){
      return(
        <Formik initialValues={valoresIniciales} onSubmit={values => resultado(values)}>
            {
                ({ handleChange, handleSubmit, values }) => {
                    return(
                        <View>
                            <TextInput
                                placeholder="Introduce tus ganancias"
                                value={values.cantidad}
                                onChangeText={handleChange('cantidad')}
                                className="w-[90%] mx-auto border-2 border-gray-400 mt-4 py-2 px-6 rounded-full bg-slate-100 focus:bg-slate-500 focus:text-white"
                            />
                            <TextInput
                                placeholder="Introduce el iva"
                                value={values.iva}
                                onChangeText={handleChange('iva')}
                                className="w-[90%] mx-auto border-2 border-gray-400 mt-4 py-2 px-6 rounded-full bg-slate-100 focus:bg-slate-500 focus:text-white"
                            />
                            <TextInput
                                placeholder="Introduce las deducciones"
                                value={values.deducciones}
                                onChangeText={handleChange('deducciones')}
                                className="w-[90%] mx-auto border-2 border-gray-400 mt-4 py-2 px-6 rounded-full bg-slate-100 focus:bg-slate-500 focus:text-white mb-4"
                            />
                            <Button onPress={handleSubmit} title="Comprobar"/>
                        </View>
                    )
                }
            }
        </Formik>
      )
}