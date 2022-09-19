import Layout from '@components/layout'
import Companion from '@islands/companion'
import Foodbar from '@islands/foodbar'
import Healthbar from '@islands/healthbar'
import Timer from '@islands/timer'
import Waterbar from '@islands/waterbar'

export default function() {
  return (
      <Layout title={"hoa"}>
      <Companion />
      <div class="mt-10">
        <Healthbar />
        <Waterbar />
        <Foodbar />
      </div>
      <Timer />
    </Layout>
  )
}
