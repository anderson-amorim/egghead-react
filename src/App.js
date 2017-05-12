import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            txt: 'This is a State TXT'
        }
    }

    update(e) {
        this.setState({ txt: e.target.value });
    }

    render() {
        return (
            <div>
                <h1>Hello darkness my old friend!</h1>
                <input type="text" onChange={this.update.bind(this)}></input>
                <p>Prop.txt: {this.props.txt}</p>
                <p>Prop.cat: {this.props.cat}</p>
                <p>State.txt: {this.state.txt}</p>
            </div>
        )
    }
}

App.propTypes = {
    txt: PropTypes.string,
    cat: PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "Hello mate, i'm here!"
}

//const App  = () => <h1>Hello Stateless Bitches</h1>

export default App;
