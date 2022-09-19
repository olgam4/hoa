import Companion from '@islands/companion'
import Menu from '@islands/menu'
import RPS from '@islands/rps'

export default function() {
  return (
    <div class="full bg-yellow-100 flex flex-center flex-col">
      <Title>hoa - rps</Title>
      <Menu />
      <Companion />
      <div class="mt-10">
      <RPS />
      </div>
    </div>
  )
}
