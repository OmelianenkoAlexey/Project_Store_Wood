import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

export function InputText({
  control,
  name,
  defaultValue = '',
  label,
  rules,
  color,
  rows,
  ...props
}) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={(({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <TextField
          color="success"
          InputLabelProps={{
            style: {
              color: '#5E6366',
              fontSize: '14px',
              fontFamily: 'Didact Gothic',
            },
          }}
          InputProps={{
            style: {
              color: color, 
              fontSize: '14px',
              fontWeight: '400',
              fontFamily: 'Didact Gothic',
            },
          }}
          type='text'
          label={label}
          value={value}
          multiline
          rows={rows}
          inputRef={ref}
          onChange={onChange}
          margin='normal'
          error={error}
          helperText={error ? error.message : ''}
          {...props}
        />
      ))}
    />
  );
}
