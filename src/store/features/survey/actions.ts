import {  _clearAllQuestionData, _questionOperations, _setCompletedSurveys, _setCurrentStep, _setQuestions, _setRemainingTime, _setSelectedAnswer, _setSurveyName } from ".";
import { QuestionDataTypes } from "../../../types/questionDataTypes";
import store from "../../app/store";
import { CompleteQuestionPropsType, CompletedSurveyType } from "./types";

export const setQuestions  = (questions : QuestionDataTypes[]) => store.dispatch(_setQuestions(questions))
export const setCurrentStep  = (step : number) => store.dispatch(_setCurrentStep(step))
export const questionOperations  = (props : CompleteQuestionPropsType) => store.dispatch(_questionOperations(props))
export const setRemainingTime  = (remainingTime : number) => store.dispatch(_setRemainingTime(remainingTime))
export const setSurveyName  = (surveyName :string) => store.dispatch(_setSurveyName(surveyName))
export const setCompletedSurveys  = (survey : CompletedSurveyType) => store.dispatch(_setCompletedSurveys(survey))
export const clearAllQuestionData  = () => store.dispatch(_clearAllQuestionData())
export const setSelectedAnswer  = (answer : string) => store.dispatch(_setSelectedAnswer(answer))