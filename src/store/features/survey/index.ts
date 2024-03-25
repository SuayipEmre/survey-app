import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionDataTypes } from "../../../types/questionDataTypes";
import { getCurrentDate } from "../../../utils/date/getCurrentDate";
import { CompleteQuestionPropsType, CompletedQuestionsType, CompletedSurveyType, QuestionsType, initialStatePropsTypes } from "./types";







const initialState: initialStatePropsTypes = {
    completedSurveys: [],
    surveyName: '',
    questions: [],
    currentStep: 0,
    completedQuestions: { completedDate: null, questions: [] },
    remainingtime: 1800,
    questionResponseTime: 0
}



const surveySlice = createSlice({
    name: 'survey',
    initialState,
    reducers: {
        _setQuestions: (state, action: PayloadAction<QuestionDataTypes[]>) => {
            state.questions = action.payload
        },
        _setCurrentStep: (state, action: PayloadAction<number>) => {
            state.currentStep = action.payload
        },

        _questionOperations: (state, action: PayloadAction<CompleteQuestionPropsType>) => {
            const payload = action.payload
            /*
            payload == isAdd. add question to completedQuestions
            payload == clearAll. clear completedQuestions
            payload == isRemove. remove question from completedQuestions
            */


            if (payload?.isAdd) {
                state.completedQuestions.questions.push(action.payload.question!)
            } else if (payload?.isRemove) {
                const updatedCompletedQuestions = state.completedQuestions.questions.filter(item => item.question != payload?.question?.question)
                state.completedQuestions.questions = updatedCompletedQuestions
            } else if (payload?.clearAll) {
                state.completedQuestions.questions = []
            } else if (payload.isFinished) {
                const dateEN = getCurrentDate().formattedDateEN
                const dateTR = getCurrentDate().formattedDateTR
                const time = getCurrentDate().formattedTime
                state.completedQuestions.completedDate = {
                    date: {
                        date_en: dateEN,
                        date_tr: dateTR,
                    },
                    time
                }



            }



        },

        _setRemainingTime: (state, action: PayloadAction<number>) => {
            state.remainingtime = action.payload
        },

        _setSurveyName: (state, action: PayloadAction<string>) => {
            state.surveyName = action.payload
        },

        _setCompletedSurveys: (state, action: PayloadAction<CompletedSurveyType>) => {
            state.completedSurveys.push(action.payload)
        },

        //clear all data for next survey
        _clearAllQuestionData: (state) => {
            state.surveyName = ''
            state.remainingtime = 1800
            state.questionResponseTime = 0
            state.currentStep = 0
        }



    }
})

export const {
    _setQuestions,
    _questionOperations,
    _setCurrentStep,
    _setRemainingTime,
    _setSurveyName,
    _setCompletedSurveys,
    _clearAllQuestionData
} = surveySlice.actions
export default surveySlice.reducer

