import Layout from '@components/layout'
import Companion from '@islands/companion'
import RPS from '@islands/rps'

export default function() {
  return (
    <Layout title={"hoa - rps"}>
      <Companion />
      <div class="mt-10">
        <RPS />
      </div>
    </Layout>
  )
}
