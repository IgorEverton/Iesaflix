import BannerMain from "./components/BannerMain";
import Menu from "./components/Menu/menu";
import dadosIniciais from './data/dados_iniciais.json'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import styled from 'styled-components'


const AppWrapper = styled.div`
  background: #141414;

`

function App() {
  return (
    <AppWrapper>
      <Menu/>
      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"IESAFLIX é tipo Netflix só que melhor "}
      />
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />

      <Carousel
      category={dadosIniciais.categorias[1]}
      />

      <Carousel
      category={dadosIniciais.categorias[2]}
      />

      <Carousel
      category={dadosIniciais.categorias[3]}
      /> 

      <Carousel
      category={dadosIniciais.categorias[4]}
      /> 

      <Carousel
      category={dadosIniciais.categorias[5]}
      />
      <Footer/>
    </AppWrapper>
  );
}

export default App;
