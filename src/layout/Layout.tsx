import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Container } from "./LayoutStyles";

export const Layout = ({children}) => {
    return (
        <Container>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </Container>
    )
}