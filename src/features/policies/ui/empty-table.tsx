import React from 'react';

import { cn } from '@/shared/lib/utils/cn';

export const EmptyTable = ({
  headers,
  withoutBody = false,
}: {
  headers: string[];
  withoutBody?: boolean;
}) => {
  return (
    <div className="overflow-x-auto border border-[rgba(255,255,255,0.1)]">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="bg-transparent text-base text-white/60">
            {headers.map((header, i) => (
              <th
                className={cn(
                  'min-w-[200px] border-r border-b border-[rgba(255,255,255,0.1)] p-6 font-semibold',
                  withoutBody && 'border-b-0',
                )}
                key={i}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {!withoutBody ? (
          <tbody>
            <tr className="h-[123px]">
              {headers.map(header => (
                <td
                  className="min-w-[200px] border-r border-[rgba(255,255,255,0.1)] px-4 py-2"
                  key={header}
                ></td>
              ))}
            </tr>
          </tbody>
        ) : null}
      </table>
    </div>
  );
};
