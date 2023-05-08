import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout/layout'
function MyApp({ Component, pageProps }) {
  return <Layout><Head><meta name='desc' content='globalHead'/></Head><Component {...pageProps} /></Layout>
  }

export default MyApp
