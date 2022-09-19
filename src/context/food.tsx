import { createStatContext, createStatProvider } from './stat'

export const FoodContext = createStatContext()
export const FoodProvider = createStatProvider(FoodContext)
