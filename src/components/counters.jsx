import React, { Component } from 'react';
import Counter from './counter';

export class Counters extends Component {

    render() {
        const { onReset, onDelete, onDecrement, onIncrement, counters } = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter =>
                    <Counter key={counter.id} counter={counter}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement} />)}
            </div>
        )
    }
}

export default Counters
