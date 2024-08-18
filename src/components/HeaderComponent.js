import React from 'react';
import { Grid, Image, DropdownMenu,
    DropdownItem,
    Dropdown } from 'semantic-ui-react';

const HeaderComponent = () => {
    return (
        <Grid.Row columns={2}>
            <Grid.Column verticalAlign='middle'>
                <Image src='/images/corinthianswiki-horizontal.png' style={{ width: '60%' }} />
            </Grid.Column>
            <Grid.Column textAlign='right'>
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