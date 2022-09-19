import { createStatContext, createStatProvider, ONE_HOUR } from './stat'

export const WaterContext = createStatContext()
export const WaterProvider = createStatProvider(WaterContext, ONE_HOUR)
