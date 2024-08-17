import React from 'react';
import { Grid, GridColumn, Input } from 'semantic-ui-react';

const Pesquisa = () => {
    return (
        <Grid.Row columns={1} className='no-padding-top'>
            <GridColumn className='ui fluid'>
                <Input fluid loading icon='search' placeholder='Pesquisar...' />
            </GridColumn>
        </Grid.Row>
    );
}

export default Pesquisa;