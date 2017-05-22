import React, { Component } from 'react';

class App5 extends Component {
    render() {
        return (
            <div>
                <h2>Understand React.Children Utilities</h2><hr /><br /><br />
                <Parent>
                    <div className="childA"></div>
                    <div className="childB"></div>
                    <div className="childC"></div>
                    <div className="childD"></div>
                </Parent>

            </div>
        );
    }
}

class Parent extends Component {
    render() {
        let itemsMap = React.Children.map(this.props.children, child => child);
        console.log(itemsMap);

        let itemsToArray = React.Children.toArray(this.props.children);
        console.log(itemsToArray)

        let itemsForEach = React.Children.forEach(this.props.children, child => console.log(child.props.className));
        return null;
    }
}

export default App5;
