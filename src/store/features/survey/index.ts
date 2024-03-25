import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionDataTypes } from "../../../types/questionDataTypes";
import { getCurrentDate } from "../../../utils/date/getCurrentDate";
import { CompletedQuestionsType, QuestionsType } from "./types";



/*
completedSurvey = [
    {
        surveyName = "sport",
        questions = []
    }
]
*/


type CompletedSurveyType = {
    surveyName : string,
    survey : CompletedQuestionsType
}

type initialStatePropsTypes = {
    completedSurvey : CompletedSurveyType,
    surveyName: string,
    questions: QuestionDataTypes[],
    currentStep: number,
    completedQuestions: CompletedQuestionsType,
    remainingtime: number,
    questionResponseTime: number,
}

const initialState: initialStatePropsTypes = {
    completedSurvey : {} as CompletedSurveyType,
    surveyName: '',
    questions: [],
    currentStep: 0,
    completedQuestions: { completedDate: null, questions: [] },
    remainingtime: 1800,
    questionResponseTime: 0
}

export type CompleteQuestionPropsType = {
    isAdd?: boolean
    isRemove?: boolean,
    question?: QuestionsType,
    clearAll?: boolean;
    isCompletedSurvey?: boolean

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

        _completeQuestion: (state, action: PayloadAction<CompleteQuestionPropsType>) => {
            const payload = action.payload
            /*
            payload == isAdd. add question to completedQuestions
            payload == clearAll. clear completedQuestions
            payload == isRemove. remove question from completedQuestions
            */

            if (payload.isCompletedSurvey) {
                const completedDate = {
                    date: {
                        date_en: getCurrentDate().formattedDateEN,
                        date_tr: getCurrentDate().formattedDateTR,
                    },
                    time: getCurrentDate().formattedTime
                }
                state.completedQuestions = {
                    completedDate,
                    questions: state.completedQuestions.questions
                }
            }

            else if (payload?.isAdd) {
                state.completedQuestions.questions.push(action.payload.question!)
            } else if (payload?.isRemove) {
                const updatedCompletedQuestions = state.completedQuestions.questions.filter(item => item.question != payload?.question?.question)
                state.completedQuestions.questions = updatedCompletedQuestions
            } else if (payload?.clearAll) {
                state.completedQuestions.questions = []

            }



        },

        _setRemainingTime: (state, action: PayloadAction<number>) => {
            state.remainingtime = action.payload
        },

        _setSurveyName : (state, action : PayloadAction<string>) => {
        state.surveyName = action.payload
        },
        

    }
})

export const { _setQuestions, _completeQuestion, _setCurrentStep, _setRemainingTime, _setSurveyName } = surveySlice.actions
export default surveySlice.reducer