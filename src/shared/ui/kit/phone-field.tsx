'use client';

import {
  defaultCountries,
  PhoneInput,
  type PhoneInputProps,
} from 'react-international-phone';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { excludedCountries } from '@/shared/lib/countries';
import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

import 'react-international-phone/style.css';

const phoneFieldVariants = cva(
  '!p-6 !rounded-r-4xl transition-all !bg-[#222] !text-white/60 !border-none !text-xl !font-light duration-300 !w-full !h-full ease-in-out focus:outline-none',
  {
    variants: {},
    defaultVariants: {},
  },
);

export type PhoneFieldVariants = VariantProps<typeof phoneFieldVariants>;

export const PhoneField = ({
  country,
  label,
  hint,
  ...args
}: PhoneInputProps & {
  country?: string;
  label?: string;
  hint?: string;
} & PhoneFieldVariants) => {
  return (
    <label className="relative w-full">
      <div className="mb-2 flex items-center gap-1">
        <Text size="xl" color="white">
          {label}
        </Text>
        {hint && (
          <Text size="xl" color="danger">
            ({hint})
          </Text>
        )}
      </div>
      <PhoneInput
        defaultCountry={
          defaultCountries.some(
            ([, iso2]) => iso2 === country && !excludedCountries.includes(iso2),
          )
            ? country
            : 'sk'
        }
        className="!h-[74px] !rounded-4xl"
        inputClassName={cn(phoneFieldVariants())}
        countries={defaultCountries.filter(
          ([, iso2]) => !excludedCountries.includes(iso2),
        )}
        countrySelectorStyleProps={{
          buttonClassName: cn(
            '!h-full !bg-[#222] !rounded-l-4xl !border-none !pr-3 !pl-2.5',
          ),
          dropdownStyleProps: {
            className: '!outline-none',
          },
        }}
        {...args}
      />
    </label>
  );
};
