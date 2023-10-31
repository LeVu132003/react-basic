import React from 'react';
import axios from 'axios';
import  {withRouter} from'react-router-dom';
class ListUser extends React.Component {

    state = {
        listUsers:[]
    }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then (res => {
        //         console.log('>>> check res: ',res.data.data)
        //     })

        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    handleViewDetailUser = (user) => {
        // Change link /user to /user/id...
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let {listUsers} = this.state;
        return(
            <div className='list-user-container'>
                <div className = 'title'>
                        Fetch all list users
                </div>
                <div className='list-user-content'>
                    {listUsers && listUsers.length > 0 &&
                    listUsers.map ((item,index ) => {
                        return (
                            <div className='child' key= {item.id} 
                                onClick = {() => this.handleViewDetailUser(item)}
                            >
                                {item.id} - {item.first_name} {item.last_name}
                            </div>
                        )
                    })
                    }
                    
                </div>
            </div>
        )
    }
}
// withRouter will link to the other page if you click the component
export default withRouter(ListUser);