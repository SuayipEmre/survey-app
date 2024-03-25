import { StyleSheet } from "react-native";

export default StyleSheet.create({
    information_item: {
        width: '90%',
        height: 61,
        borderRadius:5,
        gap:9,
        marginTop:12,
        padding:9,
      },
      information_item_top_content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      information_item_bottom_content:{
        flexDirection:'row',
        alignItems:'center',
        gap:6,
      },
      date: {
        fontWeight: '300',
        fontSize: 10,
        lineHeight: 11.15,
        fontFamily: 'Comfortaa-Light',
      },
      time_text: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 11.15,
        fontFamily: 'Comfortaa-Light',
      },
    
})