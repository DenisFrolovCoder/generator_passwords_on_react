import React, { Component } from 'react';

import styles from './Form.module.css';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            select: '',
            chars: '0123456789abcdefghijklmnopqrstvuxyzwABCDEFGHIJKLMNOPQRSTVUXYZW',
            symbols: '!@#$%^&()_+?><:{}[]',
            checkbox: false
        }
    }

    generatePassword = (currentResult = '') => {
        const {chars, select, checkbox, symbols} = this.state;

        let addSymbols;
        checkbox ? (addSymbols = chars + symbols) : (addSymbols = chars);

        for (let i = 0; i < Number.parseInt(select); i++) {
            const randomNumber = Math.floor(Math.random() * addSymbols.length);
            currentResult += addSymbols.substring(randomNumber, randomNumber + 1);
        }
        return currentResult;
    }

    clickGeneratePassword = () => {
        const newPassword = this.generatePassword();
        this.setState({password: newPassword})
    }

    handleSelectChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleChecker = (e) => {
        this.setState({[e.target.name]: e.target.checked});
    }

    handleReset = () => {
        this.setState({password: '', select: '', checkbox: false});
    }

    render () {

        const {password, select, checkbox} = this.state;

        return (
            <div className={styles.Form}>
                <input
                    readOnly
                    type="text"
                    name="password"
                    placeholder="your password..."
                    value={password}
                />

                <div className={styles.boxSelect}>
                    <p>Size password</p>
                    <select name="select" value={select} onChange={this.handleSelectChange}>
                        <option value="" disabled/>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                    </select>
                </div>

                <div className={styles.boxCheckSymbols}>
                    <p>Special symbols</p>
                    <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.handleChecker}/>
                </div>

                <div className={styles.boxBtn}>
                    <button
                        className={styles.btnGenerate}
                        onClick={this.clickGeneratePassword}
                    >
                        Generate
                    </button>
                    <button
                        className={styles.btnReset}
                        onClick={this.handleReset}
                    >
                        Reset
                    </button>
                </div>

            </div>
        )
    }
}

export { Form }