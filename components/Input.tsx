import React, { FC } from "react";
import { TextInput, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import inputStyles from "../styles/TextInput";

interface InputProps {
    icon: string;
    iconSize: number;
    placeholder: string;
    hidden: boolean;
    invalid: boolean;
    func: Function;
}

const Input: FC<InputProps> = (props): JSX.Element => {
    return (
        <View>
            <View
                style={[
                    props.invalid ? inputStyles.valid : inputStyles.invalid,
                    inputStyles.box,
                ]}
            >
                <View style={inputStyles.iconBox}>
                    <Icon
                        name={props.icon}
                        style={inputStyles.icon}
                        size={props.iconSize}
                    />
                </View>
                <TextInput
                    placeholder={props.placeholder}
                    onChangeText={(txt) => props.func(txt)}
                    secureTextEntry={props.hidden}
                    style={inputStyles.input}
                />
            </View>
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
