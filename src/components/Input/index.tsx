import React from 'react';
import type { InputProps } from './types';
import { TextField } from '@mui/material';

export default function Input({ id, sizes, label, value, type, onChange }: InputProps): JSX.Element {
  return <TextField  type={type} size={sizes} onChange={onChange} id={id} label={label} value={value} />;
}
