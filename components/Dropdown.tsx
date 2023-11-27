import { SelectList } from "react-native-dropdown-select-list";
import React, { FC } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import inputStyles from "../styles/TextInput";

interface InputProps {
    icon: string;
    invalid: boolean;
    placeholder: string;
    func: Function;
}

const Dropdown: FC<InputProps> = (props): JSX.Element => {
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: "1", value: "IT" },
        { key: "2", value: "Banking" },
        { key: "3", value: "Human Resources" },
        { key: "4", value: "Law" },
        { key: "5", value: "Marketing" },
    ];

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
                        size={36}
                    />
                </View>
                <SelectList
                    setSelected={(val: any) => setSelected(val)}
                    onSelect={() => props.func(selected)}
                    data={data}
                    save="value"
                    placeholder="Select job type"
                    // boxStyles={inputStyles.dropbox}
                    inputStyles={{
                        fontSize: 18,
                    }}
                    dropdownTextStyles={{
                        fontSize: 18,
                    }}
                    boxStyles={{ width: 320, borderWidth: 0 }}
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

export default Dropdown;
