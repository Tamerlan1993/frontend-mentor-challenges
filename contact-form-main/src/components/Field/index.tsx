import { ComponentProps, ReactNode } from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { cn } from '../../utils/cn';
import { input } from './variants';

interface IProps<T extends FieldValues> extends UseControllerProps<T> {
  label: ReactNode;
  required?: boolean;
  wrapperProps?: ComponentProps<'div'>;
}

const Field = <T extends FieldValues>({
  control,
  required,
  name,
  label,
  wrapperProps,
}: IProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div
            {...wrapperProps}
            className={cn(
              `flex gap-1 flex-col flex-1 ${wrapperProps?.className}`
            )}>
            <label className='text-grey-darker'>
              {label}
              {required && <span className='pl-2 text-green-medium'>*</span>}
            </label>
            <input
              type='text'
              className={input({ color: error?.message ? 'error' : 'normal' })}
              {...field}
            />
            {error?.message && <span>{error?.message}</span>}
          </div>
        );
      }}
    />
  );
};

export default Field;
