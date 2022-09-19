import { createStatContext, createStatProvider } from './stat'

export const WaterContext = createStatContext()
export const WaterProvider = createStatProvider(WaterContext, 'water')
