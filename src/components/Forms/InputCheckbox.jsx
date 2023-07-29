import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

export function InputCheckbox({
    control,
    name,
    defaultValue = false,
    label,
    rules,
    ...props
}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field: { onChange, value } }) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                color: '#19772E',
                                '&.Mui-checked': {
                                    color: '#19772E',
                                },
                            }}
                            checked={value}
                            onChange={(e) => onChange(e.target.checked)}
                            {...props}
                        />
                    }
                    label={label}
                    labelPlacement="end"
                />
            )}
        />
    );
}
