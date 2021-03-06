import React, { Component } from 'react';
import { connect } from "react-redux";
import ManagerShedule from '../containers/System/Doctor/ManagerShedule';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header/Header';

class Doctor extends Component {
    render() {
        const { isLoggedIn } = this.props;
        return (
            <React.Fragment>
                {isLoggedIn && <Header />}

                < div className="system-container" >
                    <div className="system-list">
                        <Switch>
                            <Route path="/doctor/manager-shedule" component={ManagerShedule} />
                        </Switch>
                    </div>
                </div >
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
