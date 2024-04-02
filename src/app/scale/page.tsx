import Hero from '@components/hero'
import scaleImage from '@public/scale.jpg'

export default function ScalePage() {
  return <Hero imgUrl={scaleImage} imgAlt='scale' title='Scale to infinity' />
}
