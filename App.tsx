import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
// import { Icon } from "@rneui/themed";

import Input from "./components/Input";
import Main from "./styles/Main";
import Dropdown from "./components/Dropdown";
import MyButton from "./components/MyButton";

const App = () => {
    const InputRef = {
        fullName: useRef(""),
        email: useRef(""),
        phone: useRef(""),
        password: useRef(""),
        confirmPass: useRef(""),
        job: useRef(""),
    };

    const [myState, setMyState] = useState({
        name: true,
        phone: true,
    });
    useEffect(() => {
        console.log("Use effect running");
    }, [myState.name]);

    const [fullNameValid, setFullNameValid] = useState(true);
    const [emailValid, setEmaiValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [confirmValid, setConfirmValid] = useState(true);
    const [jobValid, setJobValid] = useState(true);

    const submit = () => {
        if (InputRef.fullName.current.indexOf(" ") <= 0) {
            myState.name = false;
            console.log(myState.name);
        } else {
            myState.name = true;
            console.log(myState.name);
        }
        var em =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var ph = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (em.test(InputRef.email.current) === false) {
            setEmaiValid(false);
        } else setEmaiValid(true);
        if (ph.test(InputRef.phone.current) === false) {
            setPhoneValid(false);
        } else setPhoneValid(true);
        if (InputRef.job.current === "") {
            setJobValid(false);
        } else setJobValid(true);
        if (passw.test(InputRef.password.current) === false) {
            setPasswordValid(false);
        } else setPasswordValid(true);
        if (InputRef.password.current !== InputRef.confirmPass.current) {
            setConfirmValid(false);
        } else setConfirmValid(true);
    };

    return (
        <View style={Main.main}>
            <Input
                placeholder="Full Name"
                func={(txt: string) => {
                    InputRef.fullName.current = txt;
                }}
                invalid={myState.name}
                hidden={false}
            />
            <Input
                placeholder="Email address"
                func={(txt: string) => {
                    InputRef.email.current = txt;
                }}
                invalid={emailValid}
                hidden={false}
            />
            <Input
                placeholder="Phone number"
                func={(txt: string) => {
                    InputRef.phone.current = txt;
                }}
                invalid={phoneValid}
                hidden={false}
            />
            <Dropdown
                func={(txt: string) => (InputRef.job.current = txt)}
                invalid={jobValid}
                placeholder="Job type"
            />
            <Input
                placeholder="Create password"
                func={(txt: string) => {
                    InputRef.password.current = txt;
                }}
                invalid={passwordValid}
                hidden={true}
            />
            <Input
                placeholder="Repeat password"
                func={(txt: string) => {
                    InputRef.confirmPass.current = txt;
                }}
                invalid={confirmValid}
                hidden={true}
            />
            <MyButton title="Create Account" func={submit} />
        </View>
    );
};

export default App;
