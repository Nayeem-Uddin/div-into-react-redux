import React, { useEffect } from 'react';
import {usersList} from '../Services/Actions/userAction'
import {connect} from 'react-redux'

const Users = ({usersList, loading, users, error}) => {
    useEffect(()=>{
        usersList()
    },[])
    return (
        <div>
            {loading ? <h3> loading ...</h3> : error ? <h3>{error}</h3> : <div>
               {
                users.map(user => {
                    return <div>
                        <h4>{user.name}</h4>
                        <h3>{user.id}</h3>
                    </div>
                    
                })
                }
            </div>}
        </div>
    );
};
const mapStateToProps = (state) =>({
    loading: state.userReducer.loading,
    users: state.userReducer.users,
    error: state.userReducer.error,
})

export default connect(mapStateToProps,{usersList})(Users);