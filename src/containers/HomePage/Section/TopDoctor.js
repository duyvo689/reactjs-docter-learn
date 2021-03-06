import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./TopDoctor.scss"
import Slider from "react-slick";
import * as actions from '../../../store/actions'
import { withRouter } from 'react-router';

class TopDoctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }
    componentDidMount() {
        this.props.loadTopDoctors()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.TopDoctorsRedux !== this.props.TopDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.TopDoctorsRedux
            })
        }
    }

    handleViewDetail = (user) => {

        this.props.history.push(`./user/${user.id}`);
    }

    render() {
        let arrDoctors = this.state.arrDoctors
        arrDoctors = arrDoctors.concat(arrDoctors).concat(arrDoctors)
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
        return (
            <div className="top-doctor container section">
                <h1 className="section_heading">Bác sĩ nổi bật tuần qua</h1>
                <Slider {...settings}>

                    {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                        let imageBase64 = ''
                        if (item.image) {
                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                        }
                        if (index === 0) {
                            console.log("<<<>>>>>:", item)
                        }

                        let nameVi = `${item.positionData.valueVi}, ${item.firstName} ${item.lastName}`
                        return (
                            <div className="top-doctor-card" key="item.id" onClick={() => this.handleViewDetail(item)}>
                                <div className="card_top-doctor" >
                                    <div className="card-img-top card-img" style={{ backgroundImage: `url(${imageBase64})` }}></div>
                                    <div className="card-body">
                                        <h5 className="card-title">{nameVi}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </Slider>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        TopDoctorsRedux: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctorStart())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopDoctor));
