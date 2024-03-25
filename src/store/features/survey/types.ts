import { QuestionDataTypes } from "../../../types/questionDataTypes"

export type QuestionsType = {
    questionResponseTimeInSeconds?: number,
    selectedAnswer?:  string
} & QuestionDataTypes


export type completedDateItemType = {
    date_en: string,
    date_tr: string
}



export type CompletedDateType = {
    date: completedDateItemType
    time: string
}

export type CompletedQuestionsType = {
    completedDate: CompletedDateType | null,
    questions: QuestionsType[]
}



export type CompleteQuestionPropsType = {
    isAdd?: boolean
    isRemove?: boolean,
    question?: QuestionsType,
    clearAll?: boolean;
    isFinished?: boolean
}


export type CompletedSurveyType = {
    surveyName: string,
    survey: CompletedQuestionsType,
}

export type initialStatePropsTypes = {
    completedSurveys: CompletedSurveyType[],
    surveyName: string,
    questions: QuestionDataTypes[],
    currentStep: number,
    completedQuestions: CompletedQuestionsType,
    remainingtime: number,
    questionResponseTime: number,
    selectedAnswer: string
}
