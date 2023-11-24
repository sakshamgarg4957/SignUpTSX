import { SelectList } from "react-native-dropdown-select-list";
import React, { FC } from "react";
import { View, Text } from "react-native";

import inputStyles from "../styles/TextInput";

interface InputProps {
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
            <SelectList
                setSelected={(val: any) => setSelected(val)}
                onSelect={() => props.func(selected)}
                data={data}
                save="value"
                placeholder="Select job type"
                boxStyles={[
                    props.invalid ? inputStyles.valid : inputStyles.invalid,
                    inputStyles.dropbox,
                ]}
                inputStyles={{
                    fontSize: 18,
                }}
                dropdownTextStyles={{
                    fontSize: 18,
                }}
                dropdownStyles={inputStyles.dropdown}
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

export default Dropdown;
