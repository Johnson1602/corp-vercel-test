import Hero from '@components/hero'
import homeImage from '@public/home.jpg'

export default function HomePage() {
  return (
    <Hero
      imgUrl={homeImage}
      imgAlt='car factory'
      title='Professional Cloud Hosting'
    />
  )
}
