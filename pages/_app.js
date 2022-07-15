import Head from 'next/head'
import Header from '../components/Header'
import '../styles/globals.css'
import bg from '../public/rainbow.jpg'
import H4 from '../components/H4'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ backgroundImage: `url(${bg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
      <div className='flex flex-col justify-center items-center mx-auto max-w-screen-md px-2'>
        <main className="">
          <Header />
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
