import React from 'react'
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { EditIcon } from '../../icons/editIcon'
import i18n from '../../i18n/i18n'
import Ant from 'react-native-vector-icons/AntDesign'
import styles from './styles'
import { useThemeColor } from '../../store/features/theme/hooks'


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

   const color  = useThemeColor()

    return (
        <View style={[{ backgroundColor: color.secondary }, styles.container]}>

            <View style={styles.section_lef_side}>
                <Text style={[{ color: color.primary }, isAboutUsSection ? styles.aboutUsText : styles.title]}>
                    {title}
                </Text>

                {    //If the 'about us' section or the 'application' section is true, the subText will not be visible.
                    !isAboutUsSection && !isAppSection && <Text style={[{color : color.midblue}, styles.sub_text]}>{subText ?? 'test@test'}</Text>
                }
            </View>

            {
                //If the 'about us' section or the 'application' section is true, the edit icon will not be visible.
                !isAboutUsSection && !isAppSection && <EditIcon color={color.midblue} size={17} />
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
                                <Text style={{ fontSize: 13, lineHeight: 13.38, fontFamily: 'Comfortaa-Regular', color : color.primary }}>{i18n.language}</Text>
                                <Ant name='right' color={color.primary} size={17} />
                            </> : <Ant name='logout' color={'red'} size={17} />
                        }
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default ProfileSectionItem


