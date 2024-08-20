import React from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';

const ProximosJogos = () => {
    return (
        <Grid.Row columns={4} className='flex-container no-padding-top'>
            <Grid.Column width={4} className='no-padding-right'>
                <div style={{ margin: '0 2px'}}>
                    Último Jogo
                </div>
            </Grid.Column>
            <Grid.Column width={12} className='no-padding-left'>
                <div style={{ margin: '0 2px'}}>
                    Próximos Jogos
                </div>
            </Grid.Column>

            <Grid.Column width={4} className='no-padding-right'>
                <div className='caixaJogos flex-item'>
                    <Grid className='no-padding no-margin'>
                        <Grid.Row columns={3} className='no-padding no-margin'>
                            <Grid.Column width={6} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                <Icon fitted name='question circle' />
                            </Grid.Column>
                            <Grid.Column width={4} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                1x2
                            </Grid.Column>
                            <Grid.Column width={6} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                <Image src='/images/corinthianswiki.png' avatar style={{ marginRight: '0px' }} />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding no-margin'>
                            <Grid.Column className='no-padding no-margin' style={{ fontSize: '10px' }}>
                                13/08/2024
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Grid.Column>
            <Grid.Column width={4} className='no-padding-left no-padding-right'>
                <div className='caixaJogos flex-item'>
                    <div>
                        <span>Fluminense x Corinthians</span>
                    </div>
                    <div>
                        <span>17/08/2024</span>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column width={4} className='no-padding-left no-padding-right'>
                <div className='caixaJogos flex-item'> 
                    <div>
                        <span>Corinthians x Bragantino</span>
                    </div>
                    <div>
                        <span>20/08/2024</span>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column width={4} className='no-padding-left'>
                <div className='caixaJogos flex-item'>
                    <div>
                        <span>Fortaleza x Corinthians</span>
                    </div>
                    <div>
                        <span>25/08/2024</span>
                    </div>
                </div>
            </Grid.Column>
        </Grid.Row>
    );
}

export default ProximosJogos;