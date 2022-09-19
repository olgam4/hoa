import type { FlowComponent } from 'solid-js'
import { Provider as LocaleProvider } from '@locales'
import { HealthProvider } from './health'
import { ThemeProvider } from './theme'
import { WaterProvider } from './water'
import { FoodProvider } from './food'
import { TimerProvider } from './timer'
import { SkinProvider } from './skin'

const Providers: FlowComponent = (props) => {
  return (
    <>
      <SkinProvider>
        <TimerProvider>
          <LocaleProvider>
            <ThemeProvider>
              <WaterProvider>
                <FoodProvider>
                  <HealthProvider>
                    {props.children}
                  </HealthProvider>
                </FoodProvider>
              </WaterProvider>
            </ThemeProvider>
          </LocaleProvider>
        </TimerProvider>
      </SkinProvider>
    </>
  )
}

export {
  Providers as default,
}
