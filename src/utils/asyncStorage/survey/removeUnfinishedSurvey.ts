import AsyncStorage from "@react-native-async-storage/async-storage";

/*

remove unfinished survey from async storage when user completed the survey

*/
export const removeUnfinishedSurveyFromStorage = async (surveyName : string) => {

    try {
        try {
            await AsyncStorage.removeItem(`unfinished/${surveyName}`);
        } catch (error) {
            console.log("AsyncStorage'den veri silinirken bir hata oluştu: ", error);
        }
    } catch (error) {

    }
}