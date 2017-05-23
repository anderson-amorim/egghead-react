import React, { Component } from 'react';

class App6 extends Component {
    render() {
        return (
            <div>
                <h2>Use React.cloneElement to Extend Functionality of Children Components</h2><hr /><br /><br />
                <Buttons>
                    <button value="A">A</button>
                    <button value="B">B</button>
                    <button value="C">C</button>
                    <button value="D">D</button>
                    <button value="E">E</button>
                    <button value="F">F</button>
                    <button value="G">G</button>
                </Buttons>
            </div>
        );
    }
}

class Buttons extends Component {
    constructor() {
        super();
        this.state = { selected: 'None' };
    }
    selectItem(selected) {
        this.setState({ selected });
    }
    render() {
        let items = React.Children.map(this.props.children,
            child => React.cloneElement(child, {
                onClick: this.selectItem.bind(this, child.props.value)
            }));
        return (
            <div>
                <h2>You have selected {this.state.selected}</h2>
                {items}
            </div>
        );
    }
}


export default App6;