import React, { Component } from "react";
import { connect } from "react-redux";
import "./DoctorSchedule.scss";
import moment from "moment";
import { getScheduleDoctorByDate } from '../../../services/userService'

class DoctorSchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allDays: [],

        }
    }


    async componentDidMount() {

        let arrDate = []
        for (let i = 0; i < 3; i++) {
            let object = {};
            object.label = moment(new Date()).add(i, 'days').format('ddd - DD/MM')
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf()

            arrDate.push(object)
        }

        this.setState({
            allDays: arrDate
        })

    }

    handleOnChangeSelect = async (event) => {
        if (this.props.doctorIdFromPatient && this.props.doctorIdFromPatient !== -1) {
            let doctorId = this.props.doctorIdFromPatient
            let date = event.target.value
            let res = await getScheduleDoctorByDate(doctorId, date)
            console.log("check res >> : ", res)
        }
    }

    render() {
        let { allDays } = this.state
        return (
            <>
                <div className='grid'>
                    <select onChange={(event) => this.handleOnChangeSelect(event)}>
                        {allDays && allDays.length > 0 &&
                            allDays.map((item, index) => {
                                return (
                                    <option key={index}
                                        value={item.value}
                                    >
                                        {item.label}
                                    </option>

                                )
                            })}
                    </select>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);
