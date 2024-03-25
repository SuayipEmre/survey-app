import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const useQuestions = () => useSelector((state : RootState) => state.survey.questions)
export const useCurrentStep = () => useSelector((state : RootState) => state.survey.currentStep)
export const useCompletedQuestions = () => useSelector((state : RootState) => state.survey.completedQuestions)
export const useRemainingTime = () => useSelector((state : RootState) => state.survey.remainingtime)