import type { CSSProperties } from 'react';

export type VariableStyle = CSSProperties & {
  [property: `--${string}`]: string | number;
};
