import { CompleteQuestionPropsType, _completeQuestion, _setCurrentStep, _setQuestions, _setRemainingTime, _setSurveyName } from ".";
import { QuestionDataTypes } from "../../../types/questionDataTypes";
import store from "../../app/store";

export const setQuestions  = (questions : QuestionDataTypes[]) => store.dispatch(_setQuestions(questions))
export const setCurrentStep  = (step : number) => store.dispatch(_setCurrentStep(step))
export const setCompleteQuestion  = (props : CompleteQuestionPropsType) => store.dispatch(_completeQuestion(props))
export const setRemainingTime  = (remainingTime : number) => store.dispatch(_setRemainingTime(remainingTime))
export const setSurveyName  = (surveyName :string) => store.dispatch(_setSurveyName(surveyName))