import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//Form Validation
import * as Yup from "yup";

export default function App() {
  const PasswordSchema = Yup.object().shape({
    passwordlenght: Yup.number()
      .min(4, "Should be min 4 characters")
      .max(16, "Should be max 16 characters")
      .required("Lenght is required"),
  });

  const [password, setPassword] = useState("");
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let charcatersList = "";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "!@#$%^&*()_+";

    if (upperCase) {
      charcatersList += upperCaseChars;
    }
    if (lowercase) {
      charcatersList += lowerCaseChars;
    }
    if (numbers) {
      charcatersList += digitChars;
    }
    if (symbols) {
      charcatersList += specialChars;
    }

    const passwordResult = createPassword(charcatersList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordlength: number) => {
    let result = "";
    for (let i = 0; i < passwordlength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword("");
    setUpperCase(false);
    setLowerCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
