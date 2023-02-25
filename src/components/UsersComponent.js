import React, { useEffect } from 'react'
import {  fetchUsers } from '../redux'
import { connect } from 'react-redux'


function UsersComponent({userData, fetchUsers}) {
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.isLoading ? <h2>Loading Users</h2> : 
    (<div>
      <h2>Users List</h2>
      {
        userData &&  userData.users && userData.users.map(user => <p>{user.name}</p>)
      }
    </div>)
}

const mapStateToProps = (state) => {
  return {
    userData:  state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);