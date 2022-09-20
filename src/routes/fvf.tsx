import Layout from '@components/layout'
import Companion from '@islands/companion'
import Fvf from '@islands/fvf'

export default function() {
  return (
    <Layout title={"hoa - rps"}>
      <Companion />
      <div class="mt-10">
        <Fvf />
      </div>
    </Layout>
  )
}

