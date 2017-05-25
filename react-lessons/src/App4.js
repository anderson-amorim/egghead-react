import React, { Component } from 'react';
import PropTypes from 'prop-types';

const HOC = (InnerComponent) => class extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
    }
    update() {
        this.setState({ count: this.state.count + 1 });
    }
    componentWillMount() {
        console.log('HOC WillMount');
    }
    render() {
        return (
            <InnerComponent {...this.props} {...this.state} update={this.update.bind(this)} />
        );
    }
}

class App4 extends Component {
    render() {
        return (
            <div>
                <h2>Compose React Component Behavior with Higher Order Components</h2>
                <hr /><br /><br />
                <Button>Button</Button>
                <hr />
                <LabelHOC>Label</LabelHOC>

            </div>
        );
    }
}

const Button = HOC((props) => <button onClick={props.update}>{props.children} - {props.count}</button>);

class Label extends Component {
    componentWillMount() {
        console.log('Label WillMount');
    }
    render() {
        return (
            <label onMouseOver={this.props.update}>
                {this.props.children} - {this.props.count}
            </label>
        );
    }
}

const LabelHOC = HOC(Label);

App4.propTypes = {

};

export default App4;