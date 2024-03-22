import React from 'react';
import {
    Text,
    TextInput,
    View,
    useColorScheme,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
type AuthenticationInputPropsType = {
    isSecure?: boolean;
    labelText: string;
    subText?: string;
    isIconWillShow?: boolean;
}


const AuthenticationFormInput: React.FC<AuthenticationInputPropsType> = ({
    isSecure,
    labelText,
    isIconWillShow,
    subText,
}) => {
    const theme = useColorScheme()
    const color = Colors[theme!]
    return (
        <View style={styles.content}>
            <Text style={styles.label_text}>{labelText}</Text>
            <TextInput
                secureTextEntry={isSecure}
                style={styles.input}
                placeholder="Kullanıcı adı"
                placeholderTextColor="gray"
            />
            {isIconWillShow && (
                <Entypo
                    name="eye-with-line"
                    size={23}
                    color={'red'}
                    style={styles.icon}
                />
            )}
            {subText && (
                <Text style={isSecure ? styles.forgot_password_text : styles.info_text}>
                    {subText}
                </Text>
            )}
        </View>
    )
}

export default AuthenticationFormInput;

