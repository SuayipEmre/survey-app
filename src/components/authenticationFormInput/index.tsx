import React from 'react';
import {
    Text,
    TextInput,
    View,
    useColorScheme,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'
import { Colors } from '../../style/colors';


type AuthenticationInputPropsType = {
    isSecure?: boolean;
    labelText: string;
    subText?: string;
    isIconWillShow?: boolean;
    value?: string,
    onChangeText?: (value: string) => void
}


const AuthenticationFormInput: React.FC<AuthenticationInputPropsType> = ({
    isSecure,
    labelText,
    isIconWillShow,
    subText,
    value,
    onChangeText
}) => {
    const theme = useColorScheme()
    const color = Colors[theme!]


    const c = {
        light: {
            bg: '#fff'

        },
        dark: {
            bg: '#000'
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[{ color: color.primary }, styles.label_text]}>{labelText}</Text>
            <View>
                <TextInput
                    value={value}
                    secureTextEntry={isSecure}
                    style={[{ backgroundColor: c[theme!].bg }, styles.input]}
                    selectionColor={color.primary}
                    onChangeText={onChangeText}

                />
                {isIconWillShow && (
                    <Entypo
                        name="eye-with-line"
                        size={15}
                        color='#5d5d5d'
                        style={styles.icon}
                    />
                )}
            </View>
            {subText && (
                <Text style={isSecure ? styles.forgot_password_text : styles.info_text}>
                    {subText}
                </Text>
            )}
        </View>
    )
}

export default AuthenticationFormInput;

