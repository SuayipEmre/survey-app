import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCurrentStep } from "../../../store/features/survey/actions";

export const saveunfinishedSurveyToStorage = async (step : number, surveyName : string) => {
    try {
      // Save user session data to storage
      await AsyncStorage.setItem(`unfinished/${surveyName}`, JSON.stringify({ step: step }))
      console.log(`unfinished survey was saved to storage as unfinished/${surveyName}`)
      setCurrentStep(0)
    } catch (error) {
      console.log("an error occured", error);
    }
  }