import { getTranslations } from 'next-intl/server';

import { EmptyTable } from '@/features/policies/ui/empty-table';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySectionLayout } from '@/features/policies/ui/policy-section-layout';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { Title } from '@/shared/ui/kit/title';

export default async function TemplateForTheSubmissionOfComplaintsPage() {
  const t = await getTranslations('templateForTheSubmissionOfComplaints');

  return (
    <PolicyLayout>
      <Title size="5xl" as="h1" className="text-center max-md:text-[32px]">
        {t('title', {
          fallback: 'Annex No. 3: Template for the submission of complaints ',
        })}
      </Title>
      <PolicySectionLayout
        title={t('0.title', { fallback: 'SUBMISSION OF A COMPLAINT' })}
      >
        <PolicyText>
          {t('0.0', {
            fallback: '(to be sent by the Customer to the Company)',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <div className="flex flex-col gap-6">
        <Title size="3xl">
          {t('1.title', { fallback: '1. Personal data of the complainant ' })}
        </Title>
        <EmptyTable
          headers={[
            t('1.table.0', { fallback: 'LAST NAME' }),
            t('1.table.1', { fallback: 'FIRST NAME' }),
            t('1.table.2', { fallback: 'ID NUMBER' }),
            t('1.table.3', { fallback: 'CLIENT REFERENCE (IF AVAILABLE)' }),
          ]}
        />
        <EmptyTable
          headers={[
            t('1.table2.0', { fallback: 'ADDRESS: STREET, NUMBER, FLOOR' }),
            t('1.table2.1', { fallback: 'POSTCODE' }),
            t('1.table2.2', { fallback: 'CITY' }),
            t('1.table2.3', { fallback: 'COUNTRY' }),
          ]}
        />
      </div>
      <div className="flex flex-col gap-6">
        <Title size="3xl">
          {t('2.title', {
            fallback:
              '2.a. Personal data of the legal representative (if applicable) (a power of attorney or other official document as proof of the appointment of the representative)',
          })}
        </Title>
        <EmptyTable
          headers={[
            t('2.table.0', { fallback: 'LAST NAME' }),
            t('2.table.1', { fallback: 'FIRST NAME/LEGAL ENTITY NAME' }),
            t('2.table.2', {
              fallback: 'REGISTRATION NUMBER AND LEI (IF AVAILABLE)',
            }),
          ]}
        />
        <EmptyTable
          headers={[
            t('2.table2.0', {
              fallback:
                'ADDRESS: STREET, NUMBER, FLOOR (for firms registered office)',
            }),
            t('2.table2.1', { fallback: 'POSTCODE' }),
            t('2.table2.2', { fallback: 'CITY' }),
            t('2.table2.3', { fallback: 'COUNTRY' }),
          ]}
        />
        <EmptyTable
          headers={[
            t('2.table3.0', { fallback: 'TELEPHONE' }),
            '',
            t('2.table3.1', { fallback: 'EMAIL' }),
            '',
          ]}
          withoutBody
        />
      </div>
      <div className="flex flex-col gap-6">
        <Title size="3xl">
          {t('3.title', {
            fallback: '2.b. Contact details (if different from 2.a.)',
          })}
        </Title>
        <EmptyTable
          headers={[
            t('3.table.0', { fallback: 'LAST NAME/LEGAL ENTITY NAME' }),
            t('3.table.1', { fallback: 'FIRST NAME' }),
          ]}
        />
        <EmptyTable
          headers={[
            t('3.table2.0', {
              fallback:
                'ADDRESS: STREET, NUMBER, FLOOR (for firms registered office)',
            }),
            t('3.table2.1', { fallback: 'POSTCODE' }),
            t('3.table2.2', { fallback: 'CITY' }),
            t('3.table2.3', { fallback: 'COUNTRY' }),
          ]}
        />
        <EmptyTable
          headers={[
            t('3.table3.0', { fallback: 'TELEPHONE' }),
            '',
            t('3.table3.1', { fallback: 'EMAIL' }),
            '',
          ]}
          withoutBody
        />
      </div>
      <div className="flex flex-col gap-6">
        <Title size="3xl">
          {t('4.title', { fallback: '3. Information about the complaint' })}
        </Title>
        <PolicyText>
          {t('4.0', {
            fallback:
              '3.a. Full reference of the crypto-asset service or agreement to which the complaint relates (i.e. name of the crypto-asset service provider, crypto-asset service reference number, or other references of the relevant transactions…)',
          })}
        </PolicyText>
        <Title size="3xl">
          {t('5.title', {
            fallback:
              '3.c. Date(s) of the facts that have led to the complaint',
          })}
        </Title>
        <Title size="3xl">
          {t('6.title', {
            fallback:
              '3.d. Description of damage, loss or detriment caused (where relevant)',
          })}
        </Title>
        <Title size="3xl">
          {t('7.title', {
            fallback:
              '3.e. Other comments or relevant information (where relevant)',
          })}
        </Title>
        <PolicyText>
          {t('7.0', {
            fallback: 'In ________(place) on ________ (date)',
          })}
        </PolicyText>
        <PolicyText>
          {t('8.0', { fallback: 'SIGNATURE' })}
          <br />
          <span className="text-white">
            {t('8.1', { fallback: 'COMPLAINANT/LEGAL REPRESENTATIVE' })}
          </span>
        </PolicyText>
      </div>
    </PolicyLayout>
  );
}
