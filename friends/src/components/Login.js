import React from 'react'
import { connect } from 'react-redux'

import { login } from '../actions'

class  Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    login = e => {
        e.preventDefault()
        console.log('logging in')
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected')
        })
    }

    handleChanges = e => {
        this.setState ({
            credentials: {
                ...this.state.credentials,
                [e.target.name] : e.target.value
            }
        })
    }

    render(){
    return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={this.login}>
            <input
            placeholder='username...'
            name="username"
            value = {this.state.username}
            onChange= {this.handleChanges}
            />
            <input 
            placeholder='password...'
            name="password"
            value={this.state.password}
            onChange= {this.handleChanges}
            />
            <button type="submit">Login</button>
        </form>
    </div>
    )
    }
}

export default connect(null, { login })(Login)