import React from 'react';
import type { InputProps } from './types';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

export default function Input({ id, sizes, label, value, type, onChange }: InputProps): JSX.Element {
  return (
    <Autocomplete
      disablePortal
      id={id}
      sx={{ width: 300 }}
      options={[]}
      renderInput={(params) => (
        <TextField {...params} type={type} size={sizes} onChange={onChange} id={id} label={label} value={value} />
      )}
    />
  );
}
