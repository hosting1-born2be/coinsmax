import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySectionLayout } from '@/features/policies/ui/policy-section-layout';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { PinkMessageIcon } from '@/shared/ui/icons/pink-message';
import { PinkPhoneIcon } from '@/shared/ui/icons/pink-phone';
import { PinkWorldIcon } from '@/shared/ui/icons/pink-world';
import { List } from '@/shared/ui/kit/list';
import { Title } from '@/shared/ui/kit/title';

export default async function CookiePolicyPage() {
  const t = await getTranslations('cookiePolicy');

  return (
    <PolicyLayout>
      <Title size="5xl" as="h1" className="text-center">
        {t('title', { fallback: 'Cookie Policy' })}
      </Title>
      <PolicyText>
        {t('0.0', {
          fallback:
            'This Cookie Policy outlines the use of cookies and similar technologies on the Coinsmax website',
        })}{' '}
        <Link href="https://coinsmax.io/" className="underline">
          (https://coinsmax.io/)
        </Link>{' '}
        {t('0.1', {
          fallback:
            'by the General Data Protection Regulation (EU) 2016/679 (“GDPR”), the ePrivacy Directive (Directive 2002/58/EC), and other applicable data protection laws.',
        })}
        <br /> <br />
        {t('0.2', {
          fallback:
            'By accessing or using the Coinsmax website, you consent to cookies unless you modify your preferences via the cookie management interface or browser settings.',
        })}
      </PolicyText>
      <PolicySectionLayout
        title={t('1.title', { fallback: 'Scope and Purpose' })}
      >
        <PolicyText>
          {t('1.0', {
            fallback:
              'Coinsmax uses cookies to enable technical functionality, optimize performance, ensure regulatory compliance, and provide analytics essential for its digital infrastructure’s secure and efficient operation. This policy applies exclusively to cookies placed via the Coinsmax domain and does not cover third-party domains or services linked to our platform.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <Title size="4xl">
        {t('categoriesOfCookies', { fallback: 'Categories of Cookies' })}
      </Title>
      <PolicySectionLayout
        title={t('2.title', { fallback: 'Strictly Necessary Cookies' })}
      >
        <PolicyText>
          {t('2.0', {
            fallback:
              'These cookies are essential to ensure uninterrupted access to core services, such as session management, identity verification, and protection against unauthorized access. Without these, certain site functions would be degraded or non-operational.',
          })}
        </PolicyText>
        <List
          type="disc"
          values={[
            t('2.list.0', {
              fallback:
                'Examples: session identifiers, authentication tokens, load balancer state',
            }),
          ]}
        />
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('3.title', { fallback: 'Functional Cookies' })}
      >
        <PolicyText>
          {t('3.text', {
            fallback:
              'Used to store user-specific parameters such as language, regional settings, or interface preferences. These are stored to enhance UX continuity without compromising privacy or data minimization principles.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('4.title', { fallback: 'Analytical & Measurement Cookies' })}
      >
        <PolicyText>
          {t('4.0', {
            fallback:
              'Deployed for non-identifying telemetry and behavioral analysis. Coinsmax applies aggregation and pseudonymization to all metrics gathered. Data is used solely to optimize platform responsiveness, reduce friction in user flows, and identify systemic performance issues.',
          })}
        </PolicyText>
        <List
          type="disc"
          values={[
            t('4.list.0', {
              fallback:
                'Data points may include device type, time-on-page, and navigation pathing.',
            }),
            t('4.list.1', {
              fallback:
                'Providers: Google Analytics (with IP anonymization enabled), internal diagnostic tools',
            }),
          ]}
        />
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('5.title', { fallback: 'Regulatory and Risk Controls' })}
      >
        <PolicyText>
          {t('5.0', {
            fallback:
              'Certain cookies assist in upholding Coinsmax’s regulatory obligations, such as behavioral monitoring related to anti-money laundering (AML) checks, fraud detection, or enhanced due diligence workflows. These cookies operate within the scope of applicable financial compliance frameworks.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('6.title', { fallback: 'Legal Basis for Processing' })}
      >
        <PolicyText>
          {t('6.0', {
            fallback:
              'Deploying non-essential cookies is subject to explicit user consent under Art. 6(1)(a) GDPR. Consent is obtained via a granular cookie banner with real-time opt-in functionality. Strictly necessary cookies operate under Art. 6(1)(f) GDPR (legitimate interest), aligned with the platform’s technical and regulatory obligations.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('7.title', { fallback: 'Retention Periods' })}
      >
        <PolicyText>
          {t('7.0', { fallback: 'Cookie lifespans vary based on category:' })}
        </PolicyText>
        <List
          type="disc"
          className="gap-0"
          values={[
            t('7.list.0', {
              fallback: 'Session cookies expire upon browser termination.',
            }),
            t('7.list.1', {
              fallback:
                'Persistent cookies have fixed expiry durations, typically between 30 and 365 days.',
            }),
            t('7.list.2', {
              fallback:
                'Diagnostic and compliance-related cookies are retained only as long as strictly necessary to fulfill their operational or legal function.',
            }),
          ]}
        />
        <PolicyText>
          {t('7.1', {
            fallback:
              'Users may revoke consent or delete cookies via browser controls without impacting necessary services.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('8.title', {
          fallback: 'Third-party access and Cross-Border Transfers',
        })}
      >
        <PolicyText>
          {t('8.0', {
            fallback:
              'Where third-party service providers are employed (e.g., analytics, infrastructure monitoring), Coinsmax ensures contractual safeguards are in place, including:',
          })}
        </PolicyText>
        <List
          type="disc"
          className="gap-0"
          values={[
            t('8.list.0', {
              fallback: 'Standard Contractual Clauses (SCCs) where applicable',
            }),
            t('8.list.1', { fallback: 'Data Processing Agreements (DPAs)' }),
            t('8.list.2', {
              fallback:
                'Encryption, access control, and minimization protocols',
            }),
          ]}
        />
        <PolicyText>
          {t('8.1', {
            fallback:
              'No personal identifiers are shared without legal basis or beyond technical necessity.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout title={t('9.title', { fallback: 'User Controls' })}>
        <PolicyText>
          {t('9.0', {
            fallback: 'Users may manage their cookie preferences through:',
          })}
        </PolicyText>
        <List
          type="disc"
          className="gap-0"
          values={[
            t('9.list.0', {
              fallback:
                'Coinsmax’s on-site cookie consent tool (accessible via footer link)',
            }),
            t('9.list.1', { fallback: 'Browser-level cookie management' }),
            t('9.list.2', {
              fallback:
                'Opt-out modules for third-party cookies (e.g., via Google’s opt-out tools)',
            }),
          ]}
        />
        <PolicyText>
          {t('9.1', {
            fallback:
              'Note: Disabling certain categories may reduce platform functionality, particularly those reliant on persistent session validation.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout title={t('10.title', { fallback: 'Amendments' })}>
        <PolicyText>
          {t('10.0', {
            fallback:
              'Coinsmax reserves the right to update this policy to reflect legal or technological changes. Material modifications will be communicated via on-site notifications or via email where applicable.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout title={t('11.title', { fallback: 'Contact' })}>
        <PolicyText>
          {t('11.0', {
            fallback:
              'For further information or to exercise your data rights under the GDPR or applicable laws, contact:',
          })}
        </PolicyText>
        <div className="flex items-center gap-3">
          <PinkWorldIcon />
          <PolicyText>
            {t('11.website', { fallback: 'Website:' })}{' '}
            <Link href="https://coinsmax.io/" className="underline">
              https://coinsmax.io/
            </Link>
          </PolicyText>
        </div>
        <div className="flex items-center gap-3">
          <PinkMessageIcon />
          <PolicyText>
            {t('11.email', { fallback: 'Email:' })}{' '}
            <Link href="mailto:support@coinsmax.io" className="underline">
              support@coinsmax.io
            </Link>
          </PolicyText>
        </div>
        <div className="flex items-center gap-3">
          <PinkPhoneIcon />
          <PolicyText>
            {t('11.phone', { fallback: 'Phone:' })}{' '}
            <Link href="tel:+421233058122" className="underline">
              +421233058122
            </Link>
          </PolicyText>
        </div>
      </PolicySectionLayout>
    </PolicyLayout>
  );
}
