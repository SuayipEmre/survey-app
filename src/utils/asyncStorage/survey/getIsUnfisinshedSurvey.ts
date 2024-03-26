import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCurrentStep } from "../../../store/features/survey/actions";


/*
If the survey is already stored as unfinished in the storage, the function gets the step number where the survey left off.
*/
export const getIsUnfinishedSurvey = async (surveyName: string) => {
  try {
    const data = await AsyncStorage.getItem(`unfinished/${surveyName}`)
    if (data != null) {
      const parsedData = await JSON.parse(data)
      const stepFromStorage = parsedData.step;
      setCurrentStep(stepFromStorage)
    } else{
      setCurrentStep(0)
    }

  } catch (error) {
    console.log("an error occured", error)
  }
}