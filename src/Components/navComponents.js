import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component{
    render(){
        return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link className="navbar-brand" to={"/"}>Welcome to MyPage</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    
      </div>
</nav>
        </div>
    )
}
}

 
