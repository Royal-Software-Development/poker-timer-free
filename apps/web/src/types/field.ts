import React, { ChangeEvent } from 'react';

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'value' | 'counter' | 'chips';
  label: string;
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
