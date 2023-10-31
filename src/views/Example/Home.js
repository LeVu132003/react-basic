import React from "react";
import {withRouter} from 'react-router'
import Color from '../HOC/Color'
import logo from '../../assets/image/iphone-15.png'
import {connect} from 'react-redux'
class Home extends React.Component {
    componentDidMount () {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        //     console.log('check timeout')
        // },3000)
    }
    render() { 
        console.log('>>> check data redux', this.props.dataRedux)
        return (
            <>
                <div>Hello World</div>
                <div>
                    <img src={logo} style={{width:'100px', height:'100px'}}></img>
                </div>
            </>
        )
    }
}

const mappStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

// export default withRouter(Home);
export default connect()(Color(Home));