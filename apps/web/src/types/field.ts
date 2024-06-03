import React from 'react';

export type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'value' | 'counter' | 'chips';
  label?: string;
};
