import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';

const ProximosJogos = () => {
    return (
        <Grid.Row columns={4} style={{ paddingLeft: '1rem' }}>
            <GridColumn width={4} className='proximosJogos'>
                Último Jogo
            </GridColumn>
            <GridColumn width={12} className='proximosJogos'>
                Próximos Jogos
            </GridColumn>

            <GridColumn width={4} className='proximosJogos'>
                <div className='caixaJogos'>
                    <div>
                        <span>Bragantino 1x2 Corinthians</span>
                    </div>
                    <div>
                        <span>13/08/2024</span>
                    </div>
                </div>
            </GridColumn>
            <GridColumn width={4} className='proximosJogos'>
                <div className='caixaJogos'>
                    <div>
                        <span className='caixaJogosTexto'>Fluminense x Corinthians</span>
                    </div>
                    <div>
                        <span className='caixaJogosTextoData'>17/08/2024</span>
                    </div>
                </div>
            </GridColumn>
            <GridColumn width={4} className='proximosJogos'>
                <div className='caixaJogos'> 
                    <div>
                        <span className='caixaJogosTexto'>Corinthians x Bragantino</span>
                    </div>
                    <div>
                        <span className='caixaJogosTextoData'>20/08/2024</span>
                    </div>
                </div>
            </GridColumn>
            <GridColumn width={4} className='proximosJogos'>
                <div className='caixaJogos'>
                    <div>
                        <span className='caixaJogosTexto'>Fortaleza x Corinthians</span>
                    </div>
                    <div>
                        <span className='caixaJogosTextoData'>25/08/2024</span>
                    </div>
                </div>
            </GridColumn>
        </Grid.Row>
    );
}

export default ProximosJogos;