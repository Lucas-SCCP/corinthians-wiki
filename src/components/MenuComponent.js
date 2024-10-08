import React from 'react';
import { Grid, GridRow, GridColumn, Button, ButtonContent, Icon } from 'semantic-ui-react';

const HeaderComponent = () => {
    return (
        <GridRow columns={4} className='flex-container no-padding-top'>
            <GridColumn width={4} className='no-padding-left no-padding-right'>
                <div className='flex-item first-item'>
                    <Button animated='vertical' className='botaoMenu'>
                        <ButtonContent hidden>Torcida</ButtonContent>
                        <ButtonContent visible>
                            <Icon name='users' size='big'/>
                        </ButtonContent>
                    </Button>
                </div>
            </GridColumn>
            <GridColumn width={4} className='no-padding-left no-padding-right'>
                <div className='flex-item'>
                    <Button animated='vertical' className='botaoMenu'>
                        <ButtonContent hidden>Ídolos</ButtonContent>
                        <ButtonContent visible>
                            <Icon name='chess king' size='big' />
                        </ButtonContent>
                    </Button>
                </div>
            </GridColumn>
            <GridColumn width={4} className='no-padding-left no-padding-right'>
                <div className='flex-item'>
                    <Button animated='vertical' className='botaoMenu'>
                        <ButtonContent hidden>Jogos</ButtonContent>
                        <ButtonContent visible>
                            <Icon name='soccer' size='big' />
                        </ButtonContent>
                    </Button>
                </div>
            </GridColumn>
            <GridColumn width={4} className='no-padding-left'>
                <div className='flex-item'>
                    <Button animated='vertical' className='botaoMenu'>
                        <ButtonContent hidden>Títulos</ButtonContent>
                        <ButtonContent visible>
                            <Icon name='trophy' size='big' />
                        </ButtonContent>
                    </Button>
                </div>
            </GridColumn>
        </GridRow>
    );
}

export default HeaderComponent;