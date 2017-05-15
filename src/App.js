import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

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
                <Title txt="Song of Silence" />
                <hr />
                <h2>Hello darkness my old friend!</h2>
                <p>Prop.txt: {this.props.txt}</p>
                <p>Prop.cat: {this.props.cat}</p>
                <p>State.txt: <Widget update={this.update.bind(this)} />{this.state.txt}</p>
                <hr />
                <p><Button>I <Heart /> React</Button></p>
                <hr />
                <TextArea />
                <hr />
                <MyInput />
                <hr />
                <Wrapper />
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

const Widget = (props) => <input type="text" onChange={props.update}></input>;

const Button = (props) => <button>{props.children}</button>;

class Heart extends React.Component {
    render() {
        return <span>&hearts;</span>;
    }
}

const Title = (props) => <h1>{props.txt}</h1>;

Title.propTypes = {
    txt(props, propName, component) {
        if (!(propName in props)) {
            return new Error(`Missing ${propName} faggot!`);
        }
        if (props[propName].length < 6) {
            return new Error(`${propName} was too short... faggot!`);
        }
    }
}

class TextArea extends React.Component {
    constructor() {
        super();
        this.state = { currentEvent: '------' };
        this.update = this.update.bind(this);
    }
    update(e) {
        this.setState({ currentEvent: e.type });
    }
    render() {
        return (
            <div>
                <textArea cols="30" rows="10"
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update}
                />
                <h1>{this.state.currentEvent}</h1>
            </div>
        );
    }
}

class MyInput extends React.Component {
    constructor() {
        super();
        this.state = { a: '' }
    }
    update() {
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        });
    }
    render() {
        return (
            <div>
                <MyInputJunior ref={component => this.a = component} update={this.update.bind(this)}></MyInputJunior>
                {this.state.a}
                <br />
                <input ref="b" type="text" onChange={this.update.bind(this)}></input>
                {this.state.b}
            </div>
        );
    }
}

class MyInputJunior extends React.Component {
    render() {
        return <div><input ref="input" type="text" onChange={this.props.update}></input></div>;
    }
}


class LifecicleTest extends React.Component {
    constructor() {
        super();
        this.state = { val: 0 }
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({ val: this.state.val + 1 });
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    render() {
        console.log('Render');
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>;
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.inc = setInterval(this.update, 1000);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.inc);
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<LifecicleTest />, document.getElementById('a'));
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'));
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        );
    }
}


export default App;
