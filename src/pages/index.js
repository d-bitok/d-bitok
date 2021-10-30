import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation"
import Hero from "../components/Hero/Hero"
import { Layout } from "../layout/Layout"
import { Section } from '../styles/GlobalComponents'

export default function Home() {
    return (
        <Layout>
            {/* Header Section */}
            <Section grid>
                {/* Hero */}
                <Hero />

                {/* Background Animation */}
                <BgAnimation />
            </Section>
            {/* My Projects */}
            
            {/* Technologies Used */}

            {/* Timeline Info */}

            {/* My Acomplishments */}

        </Layout>
    )
}