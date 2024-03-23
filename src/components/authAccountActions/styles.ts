import { StyleSheet } from "react-native";


const base_style = StyleSheet.create({

    text: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 13.38,
        fontFamily :'Comfortaa-SemiBold',
    },

})

export default StyleSheet.create({

    container: {
        flexDirection: 'row',
        alignItems:'center',
    },
    account_actions_info_text: {
    ...base_style.text,
    },
    account_actions_action_text: {
        ...base_style.text,
        color: '#0300A3',
    },
})
