import React from 'react'
import WebHeader from './Components/WebHeader/WebHeader'
import WebContent from './Components/WebContent/WebContent.jsx'
import WebFooter from './Components/WebFooter/WebFooter.jsx'

// npm run dev
export default App

function App()
{
    return (
        <div>
            <WebHeader/>
            <WebContent/>
            <WebFooter/>
        </div>
    )
}