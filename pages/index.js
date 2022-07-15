import Guests from '../components/Guests'
import Locations from '../components/Locations'
import Photos from '../components/Photos'

export default function Home() {
  return (
    <div>
      <Locations />
      <Guests />
      <Photos />
    </div>
  )
}
