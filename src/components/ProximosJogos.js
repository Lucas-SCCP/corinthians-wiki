import React, { useEffect, useState } from 'react';
import { Grid, Image, Icon } from 'semantic-ui-react';

const ProximosJogos = () => {
    const [lastMatchPlayed, setLastMatchPlayed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLastMatchPlayed = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await fetch(apiUrl + '/team/1/lastMatchPlayed');
                if (!response.ok) {
                    throw new Error('Erro ao buscar o último jogo disputado');
                }
                const result = await response.json();
                setLastMatchPlayed(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false)
            } 
        };

        fetchLastMatchPlayed();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
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
                            <Grid.Column width={7} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                {lastMatchPlayed.team_principal}
                                <Image src='/images/corinthianswiki.png' avatar style={{ marginRight: '0px' }} />
                            </Grid.Column>
                            <Grid.Column width={2} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                x
                            </Grid.Column>
                            <Grid.Column width={7} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                <Icon fitted name='question circle' />
                            </Grid.Column>
                            <Grid.Column width={7} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: '10px' }}>
                                    (5)
                                </span>
                                1
                            </Grid.Column>
                            <Grid.Column width={2} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                x
                            </Grid.Column>
                            <Grid.Column width={7} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                2
                                <span style={{ fontSize: '10px' }}>
                                    (4)
                                </span>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding no-margin'>
                            <Grid.Column className='no-padding no-margin' style={{ fontSize: '10px' }}>
                                <span>13/08/2024</span>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Grid.Column>
            <Grid.Column width={4} className='no-padding-left no-padding-right'>
                <div className='caixaJogos flex-item'>
                    <Grid className='no-padding no-margin'>    
                        <Grid.Row columns={3} className='no-padding no-margin'>
                            <Grid.Column width={7} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                <Icon fitted name='question circle' />
                            </Grid.Column>
                            <Grid.Column width={2} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                x
                            </Grid.Column>
                            <Grid.Column width={7} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                <Image src='/images/corinthianswiki.png' avatar style={{ marginRight: '0px' }} />
                            </Grid.Column>
                            <Grid.Column width={7} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                
                            </Grid.Column>
                            <Grid.Column width={2} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                x
                            </Grid.Column>
                            <Grid.Column width={7} className='no-padding no-margin' style={{ textAlign: 'center' }}>
                                
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding no-margin'>
                            <Grid.Column className='no-padding no-margin' style={{ fontSize: '10px' }}>
                                <span>17/08/2024</span>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
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