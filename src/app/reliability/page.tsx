import Hero from '@components/hero'
import reliabilityImage from '@public/reliability.jpg'

export default function ReliabilityPage() {
  return (
    <Hero
      imgUrl={reliabilityImage}
      imgAlt='reliability'
      title='Reliability is our number one priority'
    />
  )
}
