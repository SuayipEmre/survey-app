import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCurrentStep } from "../../../store/features/survey/actions";


/*
If the step is between 0 and 9, it means that the user has not finished the survey.
The survey is saved in the storage as an unfinished survey.
*/


export const saveunfinishedSurveyToStorage = async (step : number, surveyName : string) => {
    try {
      await AsyncStorage.setItem(`unfinished/${surveyName}`, JSON.stringify({ step: step }))
      setCurrentStep(0)
    } catch (error) {
      console.log("error : ", error);
      
    }
  }