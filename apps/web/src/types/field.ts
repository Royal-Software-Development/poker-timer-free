import React from 'react';

export type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'value' | 'counter';
  label: string;
};
