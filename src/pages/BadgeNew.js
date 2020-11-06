import React from 'react';

import Navbar from '../components/Navbar';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName="Russel" 
                lastName="Quiam" 
                twitter="russelqp" 
                jobTitle="Frontend Enginer" 
                avatarUrl="http://0.gravatar.com/avatar/c5b6c22728257d1a7e22e4fca8be5c58"/>
            </div>
            <div className="col-6">
              <BadgeForm />
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BadgeNew;