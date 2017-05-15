import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {increasing: false};
    }
    update() {
        ReactDOM.render(
            <App2 val={this.props.val + 1} />, document.getElementById('root2'));
    }
    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val});
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.val);
        return nextProps.val % 5 === 0;
    }
    componentDidUpdate(previousProps, PreviousState) {
        console.log(`previousProps: ${previousProps.val}`);
    }
    render() {
        console.log(this.state.increasing);
        return (
            <button onClick={this.update.bind(this)}>
                {this.props.val}
            </button>
        );
    }
}

App2.defaultProps = { val: 0 };

export default App2;
