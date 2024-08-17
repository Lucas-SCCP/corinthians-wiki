import React from 'react';
import { Container, Grid, GridColumn } from 'semantic-ui-react';

const ProximosJogos = () => {
    return (
        <>
            <Grid.Row columns={2}>
                <GridColumn width={4} className='proximosJogos'>
                    Último Jogo
                </GridColumn>
                <GridColumn width={12} className='proximosJogos'>
                    Próximos Jogos
                </GridColumn>
            </Grid.Row>
            <Grid.Row columns={1} className='no-padding-top'>
                <GridColumn>
                    <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li className='caixaJogos ultimoJogo'>
                            <Container>
                                <div>
                                    <span className='caixaJogosTexto'>Bragantino 1x2 Corinthians</span>
                                </div>
                                <div>
                                    <span className='caixaJogosTextoData'>13/08/2024</span>
                                </div>
                            </Container>
                        </li>
                        <li className='divisor'></li>
                        <li className='caixaJogos'>
                            <Container>
                                <div>
                                    <span className='caixaJogosTexto'>Fluminense x Corinthians</span>
                                </div>
                                <div>
                                    <span className='caixaJogosTextoData'>17/08/2024</span>
                                </div>
                            </Container>
                        </li>
                        <li className='caixaJogos'>
                            <Container>
                                <div>
                                    <span className='caixaJogosTexto'>Corinthians x Bragantino</span>
                                </div>
                                <div>
                                    <span className='caixaJogosTextoData'>20/08/2024</span>
                                </div>
                            </Container>
                        </li>
                        <li className='caixaJogos ultimoJogo'>
                            <Container>
                                <div>
                                    <span className='caixaJogosTexto'>Fortaleza x Corinthians</span>
                                </div>
                                <div>
                                    <span className='caixaJogosTextoData'>25/08/2024</span>
                                </div>
                            </Container>
                        </li>
                    </ul>
                </GridColumn>
            </Grid.Row>
        </>
    );
}

export default ProximosJogos;