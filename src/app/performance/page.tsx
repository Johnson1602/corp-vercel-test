import Hero from '@components/hero'
import performanceImage from '@public/performance.jpg'

export default function PerformancePage() {
  return (
    <Hero
      imgUrl={performanceImage}
      imgAlt='performance'
      title='Blazing fast performance'
    />
  )
}
