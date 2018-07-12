import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, List, Button, Avatar } from 'antd';
import { PATHS } from '../../constants';

class IdList extends React.Component
{
    static defaultProps = {
        webIds : []
    }

    componentDidMount = () =>
    {
        this.getIds();
    }

    componentWillReceiveProps = ( newProps ) =>
    {
        const { idApp } = this.props;

        // didnt have app, but now we doooo....
        if ( !idApp && newProps.idApp )
        {
            this.getIds( newProps.idApp );
        }
    }


    getIds = ( passedIdApp ) =>
    {
        const { getAvailableWebIds, idApp } = this.props;

        const appToUse = passedIdApp || idApp;

        if ( appToUse )
        {
            getAvailableWebIds( { idApp: appToUse } );
        }
    }


    handleGetIds = ( newProps ) =>
    {
        this.getIds();
    }

    render = () =>
    {
        const { webIds } = this.props;

        const IdList = webIds.map( ( webId, i ) =>
        {
            const nickname = webId.nick;
            const uri = webId.uri;
            const image = webId.image;

            return (
                <List.Item key={ i }
                    actions={[ <Link to={ `${PATHS.EDIT}/${nickname}` }>edit</Link> ]}>
                    <List.Item.Meta
                        avatar={<Avatar src={image} />}
                        title={nickname}
                        description={uri}
                    />

                    {/* <div style={ { marginRight: '1rem' } }>{`${nickname}`}</div> */}
                    {/* <div style={ { marginRight: '1rem' } }>{`${uri}`}</div> */}
                    {/* <Link to={ `${PATHS.EDIT}/${nickname}` }>edit</Link> */}
                </List.Item>
            );
        } );

        return (
            <div>
                <h2>Your Current WebIds:</h2>
                <Button
                    onClick={ this.handleGetIds }
                    htmlType="submit"
                    type="primary"
                >Update
                </Button>
                <List>
                    {IdList}
                </List>
            </div>
        );
    }
}

export default IdList;
