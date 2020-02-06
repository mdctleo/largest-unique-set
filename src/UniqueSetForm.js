import React from "react";

class UniqueSetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paragraph: '',
            uniqueSet: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Create an unique set of chars with the given string (case-sensitive)
     * that can be removed while still having the string more than 50
     * @param charString: string
     * @return array of unique values that can be removed
     */
    createUniqueSet = (charString) => {
        let setSizeLimit = charString.length - 50
        let set = new Set()
        if (setSizeLimit <= 0) {
            return Array.from(set.values())
        }

        for (let char of charString) {
            if(set.size < setSizeLimit) {
                set.add(char)
            }
        }

        console.log(Array.from(set.values()))

        return Array.from(set.values())
    }

    handleChange(event) {
        this.setState({paragraph: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({uniqueSet: this.createUniqueSet(this.state.paragraph)})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="unique-form">
                <textarea onChange={this.handleChange} rows="4" cols="50" placeholder="input your paragraph"/>
                <input type="submit" value="Submit" />
                <p>Output: {this.state.uniqueSet}</p>
                <p>Can also use console to see unique set</p>
            </form>
        );
    }
}

export default UniqueSetForm