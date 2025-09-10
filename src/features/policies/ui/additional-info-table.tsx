import React from 'react';

type DataRow = {
  typeOfData: string;
  fromDate: string;
  retention?: string;
};

const data: DataRow[] = [
  {
    typeOfData: 'Registers data',
    fromDate:
      'From date of termination of transaction or business relationship',
  },
  {
    typeOfData:
      'Copies of identity documents, data received during identification, account/ agreement documentation, other supporting documents obtained from Customer',
    fromDate:
      'From date of termination of transaction or business relationship',
    retention: '8 years',
  },
  {
    typeOfData:
      'Documents confirming operations/transactions, other related legal documents/data related to the execution of operations or conclusion of transactions',
    fromDate: 'From date of execution or conclusion of transaction',
  },
  {
    typeOfData: 'Information linking crypto-asset address to owner identity',
    fromDate:
      'From date of termination of transactions or business relationship',
  },
  {
    typeOfData: 'Business correspondence with the Customer',
    fromDate:
      'From date of termination of transactions or business relationship',
    retention: '5 years',
  },
  {
    typeOfData:
      'Extension for all above data for the protection of our legal interests',
    fromDate: '',
    retention: 'Up to 2 additional years',
  },
];

export const AdditionalInfoTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-[rgba(255,255,255,0.1)] text-left text-sm text-white/60">
        <thead className="bg-transparent text-xl text-white/60">
          <tr>
            <th className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-6 font-bold">
              Type of Data
            </th>
            <th className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-6 font-bold">
              Start of Retention Period
            </th>
            <th className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-6 font-bold">
              Storage Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="bg-transparent text-xl">
              <td className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-6 align-top font-normal break-words whitespace-normal">
                {row.typeOfData}
              </td>
              <td className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-6 align-top font-normal break-words whitespace-normal">
                {row.fromDate || ''}
              </td>
              {i === 0 && (
                <td
                  rowSpan={4}
                  className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-6 align-middle font-normal break-words whitespace-normal"
                >
                  8 years
                </td>
              )}
              {i >= 4 && (
                <td className="min-w-[266px] border border-[rgba(255,255,255,0.1)] p-6 align-top font-normal break-words whitespace-normal">
                  {row.retention || ''}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
