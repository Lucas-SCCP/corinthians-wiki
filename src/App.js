import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MenuComponent from './components/MenuComponent';
import ProximosJogos from './components/ProximosJogos';
import Pesquisa from './components/Pesquisa';
import { Container, Grid } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Grid columns={4} style={{ paddingTop: '1rem' }}>
        <HeaderComponent />
        <MenuComponent />
        <ProximosJogos />
        <Pesquisa />
      </Grid>
    </Container>
  );
}

export default App;
