import Companion from '@islands/companion'
import Foodbar from '@islands/foodbar'
import Healthbar from '@islands/healthbar'
import Menu from '@islands/menu'
import Timer from '@islands/timer'
import Waterbar from '@islands/waterbar'

export default function() {
  if(!isServer) navigator.serviceWorker.register('/sw.js')
  return (
    <div class="full bg-yellow-100 flex flex-center flex-col">
      <Title>hoa</Title>
      <Menu />
      <Companion />
      <Healthbar />
      <Waterbar />
      <Foodbar />
      <Timer />
    </div>
  )
}
