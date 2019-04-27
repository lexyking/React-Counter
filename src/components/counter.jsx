import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //      tags: ['tag1', 'tag2', 'tag3']
    // };
    // renderTag() {

    //     return (<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>)
    // }



    render() {


        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className={this.getButtonClasses()}>+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className={this.getButtonClasses()} >-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-sm m-2 btn-danger">Delete</button>
                {/* <div>
                    {this.state.tags.length === 0 && "There are no tags!"}
                    {this.renderTag()}

                </div> */}

            </div>
        );
    }

    getButtonClasses = () => {
        return "btn btn-secondary btn-sm m-2";
    }

    getBadgeClasses = () => {

        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
