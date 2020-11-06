import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
class Badge extends React.Component{
  render(){

    const firstName = "Snoopy";
    const lastName = "Kauffman";
    return (
      <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="logo de la conferencia"></img>
      </div>
      <div  className="Badge__section-name">
        <img className="Badge__avatar" src={this.props.avatarUrl} alt="avatar"></img>
        <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
      </div>

      <div className="Badge__section-info">
        <h3>{this.props.jobTitle}</h3>
        <div>@{this.props.twitter}</div>
      </div>
      <div className="Badge__footer">#PlatziConf</div>
    </div>
    )

    
  }
}

export default Badge;