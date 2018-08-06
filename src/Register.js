import React from 'react';
import { Link } from 'react-router-dom'

class Register extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
      return (
         <div className="col-md-6">
            <div className="wrap">
              <p className="form-title">
                Register</p>
              <form className="login">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <Link to='/Register'>
                  <input type="submit" value="Register" onClick = {this.props.toggleDiv } className="btn btn-success btn-sm" />
                </Link>
              </form>
            </div>
       </div>
   )
  }
}

export default Register;