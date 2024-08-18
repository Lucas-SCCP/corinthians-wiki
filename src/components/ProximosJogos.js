import React from 'react';
import { GridColumn, GridRow } from 'semantic-ui-react';

const ProximosJogos = () => {
    return (
        <GridRow columns={4} className='flex-container no-padding-top'>
            <GridColumn width={4}>
                Último Jogo
            </GridColumn>
            <GridColumn width={12}>
                Próximos Jogos
            </GridColumn>

            <GridColumn width={4} className='no-padding flex-item first-item'>
                <div className='caixaJogos'>
                    <div>
                        <span>Bragantino 1x2 Corinthians</span>
                    </div>
                    <div>
                        <span>13/08/2024</span>
                    </div>
                </div>
            </GridColumn>
            <GridColumn width={4} className='no-padding flex-item'>
                <div className='caixaJogos'>
                    <div>
                        <span>Fluminense x Corinthians</span>
                    </div>
                    <div>
                        <span>17/08/2024</span>
                    </div>
                </div>
            </GridColumn>
            <GridColumn width={4} className='no-padding flex-item'>
                <div className='caixaJogos'> 
                    <div>
                        <span>Corinthians x Bragantino</span>
                    </div>
                    <div>
                        <span>20/08/2024</span>
                    </div>
                </div>
            </GridColumn>
            <GridColumn width={4} className='no-padding flex-item last-item'>
                <div className='caixaJogos'>
                    <div>
                        <span>Fortaleza x Corinthians</span>
                    </div>
                    <div>
                        <span>25/08/2024</span>
                    </div>
                </div>
            </GridColumn>
        </GridRow>
    );
}

export default ProximosJogos;