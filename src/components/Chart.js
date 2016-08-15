import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {
    let total = props.data.reduce((a,b) => {
        return a + b;
    });
    let average = Math.floor(total / props.data.length);
    return (
        <div>
            <Sparklines height={100} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type='avg' />
            </Sparklines>
            <div className="text-center">{average} {props.units}</div>
        </div>
    );
};
