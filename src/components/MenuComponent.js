import React from 'react';
import { Grid, GridColumn, Button, ButtonContent, Icon } from 'semantic-ui-react';

const HeaderComponent = () => {
    return (
        <Grid.Row columns={1}>
            <GridColumn>
                <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                    <li>
                        <Button animated='vertical'>
                            <ButtonContent hidden>Torcida</ButtonContent>
                            <ButtonContent visible>
                                <Icon name='users' size='big'/>
                            </ButtonContent>
                        </Button>
                    </li>
                    <li>
                        <Button animated='vertical'>
                            <ButtonContent hidden>Ídolos</ButtonContent>
                            <ButtonContent visible>
                                <Icon name='chess king' size='big' />
                            </ButtonContent>
                        </Button>
                    </li>
                    <li>
                        <Button animated='vertical'>
                            <ButtonContent hidden>Jogos</ButtonContent>
                            <ButtonContent visible>
                                <Icon name='soccer' size='big' />
                            </ButtonContent>
                        </Button>
                    </li>
                    <li>
                        <Button animated='vertical'>
                            <ButtonContent hidden>Títulos</ButtonContent>
                            <ButtonContent visible>
                                <Icon name='trophy' size='big' />
                            </ButtonContent>
                        </Button>
                    </li>
                </ul>
            </GridColumn>
        </Grid.Row>
    );
}

export default HeaderComponent;