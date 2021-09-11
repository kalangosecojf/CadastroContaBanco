import React from 'react';
//import { Button } from 'react-native-paper';
import {
    Text,
    TouchableOpacity,
} from "react-native"
import styles from "./style"


const MyButton = ({ title, styleButton, statyText, action }) => {
    return (
        <TouchableOpacity
            style={styleButton}
            onPress={action}
        >
            <Text style={statyText}>{title}</Text>
        </TouchableOpacity >
    );
}

export default MyButton;