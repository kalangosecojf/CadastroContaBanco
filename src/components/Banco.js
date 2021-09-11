import React, { useState, useEffect } from "react"
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
import MyButton from "./MyButton"
import MyTextInput from "./MyTextInput"
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Banco() {

    const [nome, setNome] = useState(null);
    const [idade, setIdade] = useState(null);
    const [selectedValue, setSelectedValue] = useState("Masculino");
    const [limite, setLimite] = useState(1000);
    const [resetForm, setResetForm] = useState(0);
    const [isEstudante, setIsEstudante] = useState(false);
    const toggleSwitch = () => setIsEstudante(previousState => !previousState);

    useEffect(() => {
        if (resetForm == 1) {
            setResetForm(0)
            resetarFormulario();
        }
    });


    function abrirConta() {
        if (nome && idade && limite > 0) {
            alert('CADASTRO:\nNome: ' + nome + '\nIdade: ' + idade + '\Genero: ' + selectedValue + '\nLimite: ' + limite + '\nEstudante: ' + isEstudante);
        }
        else {
            setResetForm(1)
            alert('ERROR:\nFavor preencher todos os campos!!!');
        }
        setResetForm(1);

    }

    function resetarFormulario() {
        setNome('')
        setIdade('')
        setSelectedValue("Masculino")
        setLimite(1000)
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
                    onChangeText={(nome) => setNome(nome)}
                    values=''
                    placeholder="Digite o Nome do titular"
                />
                <Text style={styles.formLabel}>Idade: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(idade) => setIdade(idade)}
                    values=''
                    placeholder="Digite sua idade"
                    keyboardType='numeric'
                />
                <Text style={styles.formLabel}>Gênero:</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 30, width: 100 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Masculino" value="Masculino" />
                    <Picker.Item label="Feminino" value="Feminino" />
                </Picker>

                <Text style={styles.formLabel}>Seu limite: {parseInt(limite)}</Text>
                <Slider
                    onValueChange={(limite, itemIndex) => setLimite(limite)}
                    value={(limite)}
                    style={{ width: "80%", height: 40 }}
                    minimumValue={0}
                    maximumValue={5000}
                    minimumTrackTintColor="#F0F0F0"
                    maximumTrackTintColor="blue"
                />

                <Text style={styles.formLabel}>Estudante:
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEstudante ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="blue"
                        onValueChange={toggleSwitch}
                        value={isEstudante}
                    />
                </Text>
                <MyButton
                    title='Abrir Conta'
                    styleButton={styles.buttonAbrirConta}
                    statyText={styles.textButtonAbrirConta}
                    action={() => { abrirConta() }}
                />
                <MyButton
                    title='Resetar'
                    styleButton={styles.buttonResetar}
                    statyText={styles.textButtonResetar}
                    action={() => { resetarFormulario() }}
                />
            </Pressable>
        </View >
    );
}
