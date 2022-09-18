import type { FlowComponent } from 'solid-js'
import { Provider as LocaleProvider } from '@locales'
import { HealthProvider } from './health'
import { ThemeProvider } from './theme'
import { WaterProvider } from './water'
import { FoodProvider } from './food'

const Providers: FlowComponent = (props) => {
  return (
    <>
      <HealthProvider>
        <LocaleProvider>
          <ThemeProvider>
            <WaterProvider>
              <FoodProvider>
                {props.children}
              </FoodProvider>
            </WaterProvider>
          </ThemeProvider>
        </LocaleProvider>
      </HealthProvider>
    </>
  )
}

export {
  Providers as default,
}
