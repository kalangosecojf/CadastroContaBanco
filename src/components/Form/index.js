import React, { useState } from "react"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    Switch,
    Alert
} from "react-native"
import styles from "./style"
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Form() {

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [selectedValue, setSelectedValue] = useState("Masculino");
    const [limite, setLimite] = useState(0)
    const [isEstudante, setIsEstudante] = useState(false);
    const toggleSwitch = () => setIsEstudante(previousState => !previousState);

    const [errorMessage, setErrorMessage] = useState(null);

    /*
    useEffect(() => {
        setNome('');
        setIdade('');
        setSelectedGenero("Masculino");
        setLimite(0);
        setIsEstudante(false);
    });
    */

    function abrirConta() {
        alert('Nome' + nome + '\nIdade:' + idade + '\Genero:' + selectedGenero + '\nLimite:' + limite + '\nEstudante:' + isEstudante);
    }

    function resetarFormulario() {
        setNome("")
        setIdade("")
        setSelectedGenero("Masculino")
        setLimite(0)
        setIsEstudante(false)
    }

    return (
        <View style={styles.formContext}>
            <Pressable
                //Desativado para usar o teclado do PC/notebook
                style={styles.form}>
                <Text style={styles.formLabel}>Nome: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText=''
                    values=''
                    placeholder="Digite o Nome do titular"
                />
                <Text style={styles.formLabel}>Idade: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText=''
                    values=''
                    placeholder="Digite sua idade"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Gênero: </Text>

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                <Text style={styles.formLabel}>Seu limite: </Text>

                <Text style={styles.formLabel}>Estudante:
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEstudante ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEstudante}
                    />
                </Text>
                <TouchableOpacity
                    style={styles.buttonAbrirConta}
                    onPress={() => { abrirConta() }}
                >
                    <Text style={styles.textButtonAbrirConta}>Abrir Conta</Text>
                </TouchableOpacity >
                <TouchableOpacity
                    style={styles.buttonResetar}
                    onPress={() => { resetarFormulario() }}
                >
                    <Text style={styles.textButtonResetar}>Resetar</Text>
                </TouchableOpacity>
            </Pressable>
        </View >
    );
}


/*
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => selectedGenero(itemValue)}
                >
                    <Picker.Item label="Masculino" value="Masculino" />
                    <Picker.Item label="Feminino" value="Feminino" />
                </Picker>

                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0}
                    maximumValue={5000}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />

                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => selectedValue(itemValue)}
                >
                    <Picker.Item label="Masculino" value="Masculino" />
                    <Picker.Item label="Feminino" value="Feminino" />
                </Picker>


*/