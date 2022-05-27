import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

class Title extends React.Component {
    // 传入自定义参数并接收
    handleOnClick(param, e) {
        console.log('click', e.target);
        console.log('this', this)
        console.log('param', param)
    }
    render() {
        console.log('render-this', this)
        return (
            <h1 onClick={this.handleOnClick.bind(this, 'abc')}>这里是H1</h1>
        )
    }
}





function App() {
    return (
        <div className="App">
            <Title ></Title>
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p>
                    hello react
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
