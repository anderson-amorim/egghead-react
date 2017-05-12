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

export default App;
