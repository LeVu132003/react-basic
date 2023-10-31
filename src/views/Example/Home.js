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
    handleDeleteUser = (user) => {
        console.log('>>check user delete,', user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() { 
        console.log('>>> check data redux', this.props.dataRedux)
        let ListUsers = this.props.dataRedux;
        return (
            <>
                <div>Hello World</div>
                <div>
                    <img src={logo} style={{width:'100px', height:'100px'}}></img>
                </div>
                <div>
                    {ListUsers && ListUsers.length > 0 &&
                    ListUsers.map ((item,index) => {
                        return (
                            <div key={item.id}>
                                {index+1} - {item.name} 
                                &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                            </div>
                        )
                    })
                    }
                    <button onClick ={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch ( {type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch ( {type: 'CREATE_USER'}),
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home));