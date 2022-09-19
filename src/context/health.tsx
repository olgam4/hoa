import { createStatContext, createStatProvider } from './stat'

export const HealthContext = createStatContext()
export const HealthProvider = createStatProvider(HealthContext, 'health')
