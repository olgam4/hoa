import { HealthContext } from '@context/health'
import Companion from '@islands/companion'
import Foodbar from '@islands/foodbar'
import Healthbar from '@islands/healthbar'
import Waterbar from '@islands/waterbar'

export default function() {
  return (
    <div class="full bg-yellow-100 flex flex-center flex-col">
      <Title>hoa</Title>
      <Companion />
      <Healthbar />
      <Waterbar />
      <Foodbar />
    </div>
  )
}
