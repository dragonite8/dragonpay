import Head from 'next/head'
import Signin from '../components/SigninMain'
import SigninForm from '@/components/SigninForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Snapay</title>
        <meta name="description" content="Vendor Payment Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signin />
    </>
  )
}
