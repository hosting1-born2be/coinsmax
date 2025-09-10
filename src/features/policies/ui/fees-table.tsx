import React from 'react';
import { useTranslations } from 'next-intl';

export const FeesTable = () => {
  const t = useTranslations('feesTable');

  return (
    <div className="w-full overflow-x-auto border border-[rgba(255,255,255,0.1)] text-base text-white/60">
      <table className="w-full overflow-x-auto">
        <thead>
          <tr className="bg-transparent">
            <th className="border-r border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-6 text-left text-lg font-semibold">
              {t('feeType', { fallback: 'Fee type' })}
            </th>
            <th className="border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-6 text-left text-lg font-semibold">
              {t('fee', { fallback: 'Fee' })}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={2}
              className="border-b border-[rgba(255,255,255,0.1)] bg-transparent p-6 font-semibold"
            >
              {t('additionalFees', { fallback: 'Additional fees' })}
            </td>
          </tr>
          <tr className="border-b border-[rgba(255,255,255,0.1)]">
            <td className="border-r border-[rgba(255,255,255,0.1)] p-6">
              {t('processingFee', {
                fallback:
                  'Processing fee for debit / credit cards and alternative payment methods',
              })}
            </td>
            <td className="p-6">
              {t('3percent', { fallback: '3% from the transaction value' })}
            </td>
          </tr>
          <tr className="border-b border-[rgba(255,255,255,0.1)]">
            <td className="border-r border-[rgba(255,255,255,0.1)] p-6">
              {t('blockchainFee', { fallback: 'Blockchain fee' })}
            </td>
            <td className="p-6">
              {t('variable', {
                fallback:
                  'Variable and depends on network congestion, transaction complexity, and the blockchain used. The exact blockchain fee applicable to a transaction will be displayed to the client before confirming the transaction',
              })}
            </td>
          </tr>
          <tr>
            <td
              colSpan={2}
              className="border-b border-[rgba(255,255,255,0.1)] p-6 font-semibold"
            >
              {t('otherFees', { fallback: 'Other fees' })}
            </td>
          </tr>
          <tr className="border-b border-[rgba(255,255,255,0.1)]">
            <td className="border-r border-[rgba(255,255,255,0.1)] p-6">
              {t('refundFee', { fallback: 'Refund fee' })}
            </td>
            <td className="p-6">
              {t('50Eur', { fallback: '50 EUR + 4% from transaction value' })}
            </td>
          </tr>
          <tr>
            <td className="border-r border-[rgba(255,255,255,0.1)] p-6">
              {t('chargebackFee', { fallback: 'Chargeback fee' })}
            </td>
            <td className="p-6">{t('100Eur', { fallback: '100 EUR' })}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
