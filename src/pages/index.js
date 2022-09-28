import * as React from "react"
import {SEO} from "../components/SEO";
import Header from "../components/header";
import "../assets/style/index.scss"

const App = () => {
    return (
        <main>
            <SEO title={"App page"}/>
            <Header/>
            <h1>Welcome to my Gatsby site!</h1>
            <p>I'm making this by following the Gatsby Tutorial.</p>
        </main>
    )
}

export default App

