import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import NotificationContextProvider from '../store/notification-context'
function MyApp({ Component, pageProps }) {
  return(
    
    <NotificationContextProvider>
      {
       ()=><Layout>
            <Head><meta name='desc' content='globalHead'/></Head>
            <Component {...pageProps} />
        </Layout>
      } 
    
    </NotificationContextProvider>
    
    )

  

  }

export default MyApp
