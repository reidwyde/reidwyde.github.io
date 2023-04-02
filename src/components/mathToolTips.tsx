import {N, N0, Z, R, Q, pi, eps, Zplus} from './mathSymbols';
import {ReactNode} from 'react';
import {Tooltip} from 'antd';

export const SetTooltip = ({children}: {children: ReactNode}) => {
    const content = (
        <div>
            <p>
                A set is a collection of objects (usually numbers). Basic sets include {N}
                (natural numbers),
                {N0} (whole numbers),
                {Z} (integers),
                {Q} (rational numbers), irrational numbers, and
                {R} (real numbers),
            </p>

            <p>
                Natural numbers are the counting numbers. Examples of natural numbers include 1, 2,
                3, and 1234.
            </p>

            <p>
                Whole numbers are the natural numbers, plus 0. Examples of whole numbers include 0,
                1, 2, 3, and 1234.
            </p>

            <p>
                Integers are the whole numbers, multiplied by 1 or -1. Examples of integers include
                -2, -1, 0, 1, 2, 3, and 1234.
            </p>
        </div>
    );

    return (
        <Tooltip title={content} placement="topLeft">
            <div style={{color: 'blue'}}>{children}</div>
        </Tooltip>
    );
};
