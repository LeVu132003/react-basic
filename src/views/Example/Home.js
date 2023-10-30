import React from "react";
import {withRouter} from 'react-router'
class Home extends React.Component {
    componentDidMount () {
        setTimeout(() => {
            console.log('check timeout')
        },3000)
    }
    render() {
        return (
            <div>Hello World</div>
        )
    }
}
export default withRouter(Home);