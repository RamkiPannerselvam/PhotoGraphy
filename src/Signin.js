import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Register from './Register'
import { Link } from 'react-router-dom'

class Signin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-md-6">
            <div className="wrap">
              <p className="form-title">
                Sign In</p>
              <form className="login">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <Link to='/signin'>
                <input type="submit" value="Sign In" className="btn btn-success btn-sm" />
                </Link>
                <div className="remember-forgot">
                  <div className="row">
                    <div className="col-md-6 forgot-pass-content">
                      <Link to='/RegisterNow'>
                         <button type="button" class="btn btn-primary" onClick = {this.props.toggleDiv } > Register Now </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
       </div>
    ) 
  }
}

export default Signin;