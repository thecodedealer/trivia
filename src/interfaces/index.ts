export interface ITriviaCategory {
    id: number
    name: string
}

export type QuestionType = 'any' | 'multiple' | 'boolean'
export type QuestionDifficulty = 'easy' | 'medium' | 'hard'

export interface IQuestion {
    category: string
    type: QuestionType
    difficulty: QuestionDifficulty
    question: string
    correct_answer: string
    incorrect_answers: string[]
}
