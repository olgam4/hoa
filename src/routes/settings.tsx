import Layout from '@components/layout'
import { SkinContext } from '@context/skin'
import Companion from '@islands/companion'

export default function() {
  const [_, actions] = useContext(SkinContext)
  return (
    <Layout title={"hoa - settings"}>
      <Companion />
      <div class="mt-10 flex space-x-10">
        <button onClick={actions.prev}  >
          <div class="i-carbon-previous-outline w-20 h-20" />
        </button>
        <button onClick={actions.next}  >
          <div class="i-carbon-next-outline w-20 h-20" />
        </button>
      </div>
    </Layout>
  )
}
