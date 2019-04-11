import React from 'react'
import { getData } from '../actions' 
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class FriendsList extends React.Component {
    compoonentDidMount() {
        console.log('calling get data')
        this.props.getData()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Friends Page</h1>
                <button onClick={this.props.getData()}>Retrieve Friends</button>
                <div>
                    {this.props.friends.map(friend => (
                        <p key={friend.id}>{friend.name}</p>)
                    )}
                </div>
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
        { getData }
    )(FriendsList)
)