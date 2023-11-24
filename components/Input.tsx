import React, { FC } from "react";
import { TextInput, View, Text } from "react-native";

import inputStyles from "../styles/TextInput";

interface InputProps {
    placeholder: string;
    hidden: boolean;
    invalid: boolean;
    func: Function;
}

const Input: FC<InputProps> = (props): JSX.Element => {
    return (
        <View>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={(txt) => props.func(txt)}
                style={[
                    props.invalid ? inputStyles.valid : inputStyles.invalid,
                    inputStyles.input,
                ]}
                secureTextEntry={props.hidden}
            />
            {props.invalid ? (
                <View style={inputStyles.errorText}></View>
            ) : (
                <Text style={inputStyles.errorText}>
                    Invalid {props.placeholder}
                </Text>
            )}
        </View>
    );
};

export default Input;
