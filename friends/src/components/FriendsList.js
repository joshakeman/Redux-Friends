import React from 'react'
import { getData, addFriend  } from '../actions'
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosAuth'


class FriendsList extends React.Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    componentDidMount() {
        console.log('calling get data')
        this.props.getData()
    }

    handleChanges = e => {
        this.setState ({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        })
    }

    addFriend = e => {
        e.preventDefault()
        const newFriend = {
            name: this.state.name,
            age: this.state.age,
            email:this.state.email
        }
        this.props.addFriend(newFriend)

    }

    render() {
        return (
            <div>
                <h1>Friends Page</h1>
                {/* <button onClick={this.props.getData()}>Retrieve Friends</button> */}
                <div>
                    {this.props.friends.map(friend => (
                        <p key={friend.id}>{friend.name}</p>)
                    )}
                </div>
                <form onSubmit={this.addFriend}>
                    <input
                        placeholder='name...'
                        name="name"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                    <input
                        placeholder='age...'
                        name="age"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    />
                    <input
                        placeholder='email...'
                        name="email"
                        value={this.state.password}
                        onChange={this.handleChanges}
                    />
                    <button type="submit">Add Friend</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        friends: state.friends
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        { getData, addFriend }
    )(FriendsList)
)