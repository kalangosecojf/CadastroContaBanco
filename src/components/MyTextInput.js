import React from 'react';
//import { Button } from 'react-native-paper';
import {
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native"
import styles from "./style"


const MyTextInput = ({ styleText, variableText, textPlaceholder, keyboard = '', valueText = '' }) => {
    return (
        <TextInput
            style={styleText}
            onChangeText={(variableText)}
            values={valueText}
            placeholder={textPlaceholder}
            keyboardType={keyboard}
        />
    );
}

export default MyTextInput;