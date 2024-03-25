import React from 'react'
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { EditIcon } from '../../icons/editIcon'
import i18n from '../../Services/i18next'
import Ant from 'react-native-vector-icons/AntDesign'
import styles from './styles'


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

                {    //If the 'about us' section or the 'application' section is true, the subText will not be visible.
                    !isAboutUsSection && !isAppSection && <Text style={styles.sub_text}>{subText ?? 'test@test'}</Text>
                }
            </View>

            {
                //If the 'about us' section or the 'application' section is true, the edit icon will not be visible.
                !isAboutUsSection && !isAppSection && <EditIcon color='#0300A3' size={17} />
            }


            {
                //the content on the below is only  will be visible if content is app section
                isAppSection && (
                    <TouchableOpacity style={styles.app_section_button}
                        activeOpacity={.8}
                        onPress={onPress}
                    >
                        {
                            !isLogOutButton ? <>
                                {
                                    //if log out button is true, logut icon will be visible, otherwise language informations will be visible.
                                }
                                <Text style={{ fontSize: 13, lineHeight: 13.38, fontFamily: 'Comfortaa-Regular', }}>{i18n.language}</Text>
                                <Ant name='right' color={'#000'} size={17} />
                            </> : <Ant name='logout' color={'red'} size={17} />
                        }
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default ProfileSectionItem


