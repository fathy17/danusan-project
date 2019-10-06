import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography'

class Profile extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div style={{ background: 'grey', color: 'white', width: '220px', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                    <Typography>Foto</Typography>
                </div>
            </Fragment>
        );
    }
}

export default Profile;