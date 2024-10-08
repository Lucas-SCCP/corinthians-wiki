import React from 'react';
import { Container, Grid, GridColumn, Input } from 'semantic-ui-react';

const Pesquisa = () => {
    return (
        <Grid.Row columns={1} className='caixaPesquisa' style={{ display: 'none' }}>
            <Container>
                <GridColumn className='ui fluid' style={{ textAlign: 'center' }}>
                    <Input fluid icon='search' placeholder='Pesquisar...' style={{ marginBottom: '20px' }}/>
                    <span style={{ color: '#A9A9A9', display: 'none' }}>Teste</span>
                </GridColumn>
            </Container>
        </Grid.Row>
    );
}

export default Pesquisa;