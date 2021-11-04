import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'


export default function About() {
    return (
        <>
        <Layout>
             <Head>
                 <title>garybuckle {CMS_NAME} Blog</title>
            </Head>
        </Layout>

        </>
    )
}
