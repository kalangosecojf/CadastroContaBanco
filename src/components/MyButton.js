import React from 'react';
import { Button } from 'react-native-paper';
import {
    Text,
    TouchableOpacity,
} from "react-native"
import styles from "./Form/style"
import stylesColor from "color"



const MyButton = ({ title, color, action }) => {
    return (
        <TouchableOpacity
            style={styles.buttonAbrirConta, { color }}
            onPress={action}
        >
            <Text style={styles.textButtonAbrirConta, { color }}>{title}</Text>
        </TouchableOpacity >
    );
}

export default MyButton;