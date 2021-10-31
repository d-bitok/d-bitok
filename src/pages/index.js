import Head from 'next/head'
import Acomplishments from '../components/Acomplishments/Acomplishments'
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects/Projects"
import Technologies from '../components/Technologies/Technologies'
import Timeline from '../components/Timeline/Timeline'
import { Layout } from "../layout/Layout"
import { Section } from '../styles/GlobalComponents'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Douglas Bitok - Portfolio</title>
                <meta
                    name="keywords"
                    content="web development, programming, react js, next js, react native, vue js, app development, coding, automation, python, django, firebase, node js, web, software development"
                />
            </Head>
            {/* Header Section */}
            <Section grid>
                {/* Hero */}
                <Hero />

                {/* Background Animation */}
                <BgAnimation />
            </Section>
            
            {/* Technologies Used */}
            <Technologies />

            {/* My Projects */}
            <Projects />

            {/* Timeline Info */}
            <Timeline />

            {/* My Acomplishments */}
            <Acomplishments />

        </Layout>
    )
}