import React from 'react'
import { Header, Colecoes, Produtos, Categorias, Ilustracao, Sobre, Hashtag, Newsletter } from './components/'



const App = () => {
  return (
    <div style={{ width: '1280px', margin: '0 auto', padding: '20px', backgroundColor: '#EFEFEF'}}>
      <Header />
      <Colecoes />
      <Produtos />
      <Categorias />
      <Ilustracao />
      <Sobre />
      <Hashtag />
      <Newsletter />
    </div>
  )
}

export default App
