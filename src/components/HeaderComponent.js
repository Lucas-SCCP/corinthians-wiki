import React from 'react';
import { Grid, Icon, DropdownMenu,
    DropdownItem,
    Dropdown } from 'semantic-ui-react';

const HeaderComponent = () => {
    return (
        <Grid.Row columns={2}>
            <Grid.Column verticalAlign='middle' style={{ padding: '10px' }}>
                <Icon name='heart' size='big' color='grey' />
            </Grid.Column>
            <Grid.Column textAlign='right' style={{ padding: '10px' }}>
            <Dropdown
                text='Lucas'
                icon='user'
                labeled
                button
                className='icon'
                direction='left'
            >
                <DropdownMenu>
                    <DropdownItem icon='setting' text='Minha conta' />
                    <DropdownItem icon='logout' text='Sair' />
                </DropdownMenu>
            </Dropdown>
            </Grid.Column>
        </Grid.Row>
    );
}

export default HeaderComponent;