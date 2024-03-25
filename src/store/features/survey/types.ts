import { QuestionDataTypes } from "../../../types/questionDataTypes"

export type QuestionsType = { questionResponseTimeInSeconds: number } & QuestionDataTypes


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
