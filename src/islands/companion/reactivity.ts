import cat0 from '@assets/cat/0.png'
import cat1 from '@assets/cat/1.png'
import biche0 from '@assets/biche/0.png'
import biche1 from '@assets/biche/1.png'
import bird0 from '@assets/bird/0.png'
import bird1 from '@assets/bird/1.png'
import { SkinContext } from '@context/skin'

export const createSkinState = () => {
  const [state] = useContext(SkinContext)
  const currentTileset = createMemo(() => {
    switch (state.current!()) {
      case 'cat':
        return [cat0, cat1]
      case 'biche':
        return [biche0, biche1]
      case 'bird':
        return [bird0, bird1]
      default:
        return [cat0, cat1]
    }
  })

  const currentSpace = createMemo(() => {
    switch (state.current!()) {
      case 'cat':
        return { top: '35px' }
      case 'biche':
        return { left: '-30px' }
      case 'bird':
        return { left: '10px', top: '30px' }
      default:
        return { top: '35px' }
    }
  })

  const currentSize = createMemo(() => {
    const size = {
      'background-color': 'rgba(0, 0, 0, 0.1)',
      opacity: 1,
      top: '110px',
      left: '35px',
      transform: 'scaleY(0.4)',
      'border-radius': '999999px',
    }
    switch (state.current!()) {
      case 'cat':
        return { ...size, width: '140px', height: '140px' }
      case 'biche':
        return { ...size, width: '150px', height: '150px' }
      case 'bird':
        return { ...size, width: '80px', height: '80px', left: '42px', top: '85px' }
      default:
        return { ...size, width: '100px', height: '100px' }
    }
  })

  const size = createMemo(() => {
    const size = {
      width: '200px',
      height: '200px',
    }
    switch (state.current!()) {
      case 'cat':
        return { ...size, width: '200px', height: '200px' }
      case 'biche':
        return { ...size, width: '200px', height: '200px' }
      case 'bird':
        return { ...size, width: '150px', height: '150px' }
      default:
        return { ...size }
    }
  })

  return {
    currentTileset,
    currentSpace,
    currentSize,
    size,
  }
}
