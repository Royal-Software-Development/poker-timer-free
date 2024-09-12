import React, { ChangeEvent } from 'react';

type FormFieldVariant = 'value' | 'counter' | 'chips'

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: FormFieldVariant;
  label?: string | undefined;
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined;
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
