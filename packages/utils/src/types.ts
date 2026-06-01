export type Positive = number & { __brand: 'positive' };
export type AssertPositive<N extends number> = number extends N ? N : `${N}` extends `-${string}` ? Positive : N extends 0 ? Positive : N;
