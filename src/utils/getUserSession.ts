import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserSession = async () => {
    try {
        const userData = await AsyncStorage.getItem('userSession');
        return JSON.parse(userData as string);
    } catch (error) {
        console.log("Oturum getirilirken bir hata oluştu: ", error);
    }
}