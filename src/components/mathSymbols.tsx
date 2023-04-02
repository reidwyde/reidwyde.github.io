/*
Natural numbers: ℕ (U+2115)
Integers: ℤ (U+2124)
Rational numbers: ℚ (U+211A)
Real numbers: ℝ (U+211D)
Complex numbers: ℂ (U+2102)
Prime numbers: ℙ (U+2119)
Odd integers: ℤℝ (U+2124 U+211D)
Even integers: ℤℕ (U+2124 U+2115)
Positive integers: ℤ⁺ (U+2124 U+207A)
Negative integers: ℤ⁻ (U+2124 U+207B)
Whole numbers: U+1D54A.
*/

import {ReactNode} from 'react';

const color = '#696969';
const Color = ({children}: {children: ReactNode}) => (
    <div style={{color: color, margin: 0, padding: 0}}>{children}</div>
);

export const N = <Color>{'\u2115'}</Color>;
export const N0 = (
    <Color>
        {'\u2115'}
        {`\u2080`}
    </Color>
);
export const Z = <Color>{`\u2124`}</Color>;
export const Q = <Color>{`\u211A`}</Color>;
export const R = <Color>{`\u211D`}</Color>;
export const eps = <Color>{`\u2208`}</Color>;
export const Zplus = (
    <Color>
        {`\u2124`}
        {`\u207A`}
    </Color>
);
export const pi = <Color>{`\u03C0`}</Color>;
