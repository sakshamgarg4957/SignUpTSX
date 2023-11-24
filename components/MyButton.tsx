import React, { FC } from "react";
import { Text, Pressable } from "react-native";
import buttonStyles from "../styles/Button";

interface InputProps {
    title: string;
    func: Function;
}

const MyButton: FC<InputProps> = (props): JSX.Element => {
    return (
        <Pressable
            onPress={() => props.func()}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? "#57b9f9" : "#0E86D4",
                },
                buttonStyles.pressable,
            ]}
        >
            <Text style={buttonStyles.text}>{props.title}</Text>
        </Pressable>
    );
};

export default MyButton;
