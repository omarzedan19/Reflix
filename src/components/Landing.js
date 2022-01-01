import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/home.css'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: "omar", backgroundColor: "blue" },
                { name: "odae", backgroundColor: "purple" },
                { name: "mustafa ", backgroundColor: "yellow" },
                { name: "ameer", backgroundColor: "pink" }
            ]
        }
    }
   

    render() {
        return (
            <div>

                <h1 id="home-title">users</h1>

                <div id="home-container">
                    {this.state.users.map(u => <Link to="/catalog" key={u.backgroundColor}> <div id={u.backgroundColor}><span className="main-directory-text">{u.name}</span></div></Link>)}



                </div>
            </div>
        );
    }
}

export default Landing;