import React from 'react'
import MyComponent from './Components/MyComponent/MyComponent'
import ProductCard from './Components/ProductCard/ProductCard'
// npm run dev

export default App

class WebHeader extends React.Component
{
    render()
    {
        return null;
    }
}

function App() {
    return (
        <div>
            <WebHeader />
            <h1>Hola mundo</h1>
            <MyComponent />
            <MyComponent />
            <ProductCard
                title="TV"
                content="OLed 26 pulgadas"
                price="1500"
            />
            <ProductCard
                title="Monitor"
                content="Led 30 pulgadas"
                price="1700"
            />
            <ProductCard
                title="PC"
                content="Con todo lo ultimo que esperas..."
                price="2000"
            />
        </div>
    )
}