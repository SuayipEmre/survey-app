import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { EditIcon } from '../../icons/editIcon'
import i18n from '../../Services/i18next'
import Ant from 'react-native-vector-icons/AntDesign'
type ProfileSectionItemPropsTypes = {
    title: string,
    subText?: string,
    isAboutUsSection?: boolean
    isAppSection?: boolean,
    isLogOutButton?: boolean,
    onPress?: () => void | Promise<void>
}
const ProfileSectionItem: React.FC<ProfileSectionItemPropsTypes> = ({
    subText,
    title,
    isAboutUsSection,
    isAppSection,
    onPress,
    isLogOutButton
}) => {
    const theme = useColorScheme()
    const color = Colors[theme!]
    return (
        <View style={[{ backgroundColor: '#E5E4E2' }, styles.container]}>

            <View style={styles.section_lef_side}>
                <Text style={[{ color: color.primary }, isAboutUsSection ? styles.aboutUsText : styles.title]}>
                    {title}
                </Text>

                {
                    !isAboutUsSection && !isAppSection && <Text style={styles.sub_text}>{subText ?? 'test@test'}</Text>
                }
            </View>

            {
                !isAboutUsSection && !isAppSection && <EditIcon color='#0300A3' size={17} />
            }

            {
                isAppSection && (
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        gap: 4,
                        width: 200,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        height: '100%'

                    }}
                        activeOpacity={.8}
                        onPress={onPress}
                    >
                        {
                            !isLogOutButton ? <>

                                <Text style={{ fontSize: 13, lineHeight: 13.38, fontFamily: 'Comfortaa-Regular', }}>{i18n.language}</Text>
                                <Ant name='right' color={'#000'} size={17} />
                            </> : <Ant name='logout' color={'red'} size={17}/>
                        }
                    </TouchableOpacity>
                )
            } 
        </View>
    )
}

export default ProfileSectionItem


const base_style = StyleSheet.create({

    title_text: {
        fontSize: 12,
        lineHeight: 13.38,
    },




})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 61,
        paddingHorizontal: 7,
        borderRadius: 5,

    },

    section_lef_side: {
        height: '100%',
        justifyContent: 'center',
    },

    title: {
        ...base_style.title_text,
        fontWeight: '500',
        fontFamily: 'Comfortaa-Medium',

    },
    aboutUsText: {
        ...base_style.title_text,
        color: '#0300A3',
        fontWeight: '400',
        fontFamily: 'Comfortaa-Regular',
    },
    sub_text: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 11.15,
        marginTop: 4,
    }
})