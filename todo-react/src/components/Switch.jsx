import React, { Component } from 'react';
import './Switch.css'

class Switch extends Component {
    render() {
        return (
            <div className="container">
                <input className="tgl tgl-light" id={this.props.id} type="checkbox" defaultChecked={this.props.active} />
                <label className="tgl-btn" htmlFor={this.props.id}></label>
            </div>
        );
    }
}

export default Switch;