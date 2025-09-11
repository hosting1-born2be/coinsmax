import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { FeesTable } from '@/features/policies/ui/fees-table';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySectionLayout } from '@/features/policies/ui/policy-section-layout';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export default async function TermsAndConditionsPage() {
  const t = await getTranslations('termsAndConditions');

  return (
    <PolicyLayout>
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <Title size="5xl" as="h1" className="text-center max-md:text-[32px]">
          {t('title', { fallback: 'Terms and Conditions' })}
        </Title>
        <Text size="xl" color="faded">
          {t('lastUpdate', { fallback: 'Last updated on September 9, 2025' })}
        </Text>
      </div>
      <PolicySectionLayout
        title={t('0.title', { fallback: 'Table of Contents:' })}
        className="flex flex-col"
      >
        <div className="flex flex-col gap-0">
          <Link href="#summary">
            <PolicyText>{t('0.0', { fallback: '1. Summary' })}</PolicyText>
          </Link>
          <Link href="#keyDefinitions">
            <PolicyText>
              {t('0.1', { fallback: '2. Key Definitions' })}
            </PolicyText>
          </Link>
          <Link href="#eligibility">
            <PolicyText>{t('0.2', { fallback: '3. Eligibility' })}</PolicyText>
          </Link>
          <Link href="#generalObligationsAndRestrictions">
            <PolicyText>
              {t('0.3', {
                fallback: '4. General Obligations and Restrictions',
              })}
            </PolicyText>
          </Link>
          <Link href="#exchangeTerms">
            <PolicyText>
              {t('0.4', { fallback: '5. Exchange Terms' })}
            </PolicyText>
          </Link>
          <Link href="#kycAndReversalTransactionPolicy">
            <PolicyText>
              {t('0.5', { fallback: '6. KYC and Reversal Transaction Policy' })}
            </PolicyText>
          </Link>
          <Link href="#riskDisclosureStatement">
            <PolicyText>
              {t('0.6', { fallback: '7. Risk Disclosure Statement' })}
            </PolicyText>
          </Link>
          <Link href="#intellectualProperty">
            <PolicyText>
              {t('0.7', { fallback: '8. Intellectual Property' })}
            </PolicyText>
          </Link>
          <Link href="#thirdPartyContent">
            <PolicyText>
              {t('0.8', { fallback: '9. Third-Party Content' })}
            </PolicyText>
          </Link>
          <Link href="#customerComplaintsProcedure">
            <PolicyText>
              {t('0.9', { fallback: '10. Customer Complaints Procedure' })}
            </PolicyText>
          </Link>
          <Link href="#discontinuanceOfServiceSuspensionAndTermination">
            <PolicyText>
              {t('0.10', {
                fallback:
                  '11. Discontinuance of Service, Suspension and Termination',
              })}
            </PolicyText>
          </Link>
          <Link href="#limitationOfLiabilityDisclaimerOfWarranties">
            <PolicyText>
              {t('0.11', {
                fallback:
                  '12. Limitation of Liability, Disclaimer of Warranties',
              })}
            </PolicyText>
          </Link>
          <Link href="#applicableLaw">
            <PolicyText>
              {t('0.12', { fallback: '13. Applicable Law' })}
            </PolicyText>
          </Link>
          <Link href="#miscellaneous">
            <PolicyText>
              {t('0.13', { fallback: '14. Miscellaneous' })}
            </PolicyText>
          </Link>
        </div>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('1.title', { fallback: '1. Summary' })}
        titleId="summary"
      >
        <PolicyText flex>
          <span className="text-white">1.1</span>
          <span className="text-white">
            {t('1.0', { fallback: 'Introduction.' })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.1.1</span>
          <span>
            {t('1.1.0', {
              fallback:
                'These Terms of Use and any terms expressly incorporated herein (hereinafter the',
            })}{' '}
            <span className="font-bold">
              {t('1.1.1', { fallback: '"Terms"' })}
            </span>
            {t('1.1.2', { fallback: ') apply to your (hereinafter' })}{' '}
            <span className="font-bold">
              {t('1.1.3', { fallback: '"customer", "client", "you"' })}
            </span>{' '}
            {t('1.1.4', {
              fallback:
                ') access to and use of the Services available within the website provided by Coinsmax.com (hereinafter the',
            })}{' '}
            <span className="font-bold">
              {t('1.1.5', { fallback: '"Website"' })}
            </span>{' '}
            {t('1.1.6', {
              fallback:
                '). Coinsmax.com is owned and operated by Limitless Technologies s.r.o. reg. number 55165451,with registered  address at Černyševského 1287/10, 851 01 Bratislava – Petržalka, Slovak Republic (hereinafter the',
            })}{' '}
            <span className="font-bold">
              {t('1.1.7', { fallback: '"Coinsmax"' })}
            </span>{' '}
            {t('1.1.8', { fallback: 'the' })}{' '}
            <span className="font-bold">
              {t('1.1.9', { fallback: '"Company"' })}
            </span>{' '}
            {t('1.1.10', { fallback: 'and' })}{' '}
            <span className="font-bold">
              {t('1.1.11', { fallback: '"us", "we"' })}
            </span>
            {').'}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.1.2</span>
          {t('1.2', {
            fallback:
              'By clicking the “create profile” button or using the Services within the Website, you agree to be legally bound by these Terms and all terms incorporated by reference.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.1.3</span>
          {t('1.3', {
            fallback:
              'By visiting or accessing the Website, you agree that you have read and accepted these Terms, as well as our Privacy Policy and other documents that may be related to the Service provision, published on the Website.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.1.4</span>
          {t('1.4', {
            fallback:
              'We reserve the right to change, modify, or otherwise update the terms and conditions contained in these Terms, including but not limited to any policy or guideline of the Website that forms part of these Terms, at any time and at our sole discretion (hereinafter the “Updated Terms”). The Updated Terms will be effective upon actual, constructive, or inquiry notice (hereinafter the “Notice Date”). We will inform you of any upcoming amendments through the Website at least 30 (thirty) days in advance.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.1.5</span>
          {t('1.5', {
            fallback:
              'If You do not agree to be bound by the Updated Terms, your sole and exclusive remedy will be to close your profile within 30 (thirty) days of the Notice Date and your access or use of the Services will be permitted only to the extent necessary to immediately close your profile. You acknowledge that you may close your profile without making any transactions using the Service, and that any such actions are not necessary to close your profile. Your non-termination or continued use of the Website or Service after such a 30 (thirty) days period will constitute your acceptance of the Updated Terms as of the Notice Date.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">1.2</span>
          <span className="text-white">
            {t('1.6', {
              fallback: 'Eligibility.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.2.1</span>
          {t('1.7', {
            fallback:
              'You must meet eligibility criteria to use the Services of Coinsmax. You must be at least 18 (eighteen) years old. Some locations are not available. ',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.2.2</span>
          {t('1.8', {
            fallback:
              'You may not engage in illegal activities using our Service.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">1.3</span>
          <span className="text-white">
            {t('1.9', {
              fallback: 'Service.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.3.1</span>
          {t('1.10', {
            fallback:
              'The Coinsmax facilitates exchange services (buy/sell) encompassing Fiat currencies (including EUR) and Crypto-assets (such as BTC or ETH) (the Services).',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.3.2</span>
          {t('1.11', {
            fallback:
              'The Coinsmax may suspend your profile temporarily or permanently if you are not eligible to use Service or breach these Terms.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">1.4</span>
          <span className="text-white">
            {t('1.12', {
              fallback: 'Risks.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.4.1</span>
          {t('1.13', {
            fallback:
              'Engaging in any exchange operation in the Crypto-asset market can be risky and potentially have significant losses. By accepting these Terms you acknowledge that VALUE OF CRYTPO-ASSETS MAY FLUCTUATE SIGNIFICANTLY AND THERE IS A SUBSTANTIAL RISK OF ECONOMIC LOSSES RELATED WITH CRYTPO-ASSETS. BY MAKING USE OF THE SERVICES, YOU ACKNOWLEDGE AND AGREE THAT: (1) YOU ARE AWARE OF THE RISKS ASSOCIATED WITH TRANSACTIONS OF CRYTPO-ASSETS; (2) YOU SHALL ASSUME ALL RISKS RELATED TO THE USE OF THE THE SERVICES AND TRANSACTIONS OF CRYTPO-ASSETS; AND (3) WE SHALL NOT BE LIABLE FOR ANY SUCH RISKS ATTACHED THERETO OR ADVERSE OUTCOMES.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.4.2</span>
          {t('1.14', {
            fallback:
              'You, therefore, should carefully consider whether using the Services is suitable for you, in view of your financial resources and other circumstances.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.4.3</span>
          {t('1.15', {
            fallback:
              'The Crypto-assets are inherently unpredictable and unstable, will continue to be such for the foreseeable future, and entail an inherent risk with hacks, transfer errors and government sanctions out of control of Coinsmax.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.4.4</span>
          {t('1.16', {
            fallback: 'Do not exchange funds you cannot afford to lose.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.4.5</span>
          {t('1.17', {
            fallback:
              'Coinsmax is not a trading site. Coinsmax does not endorse, support or recommend any trading platform. The Coinsmax is not liable for any loss or damage, including any loss of funds or profit of yours.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>1.4.6</span>
          {t('1.18', {
            fallback:
              'Please do not use the Services if you do not understand these risks.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('2.title', { fallback: '2. Key Definitions' })}
        titleId="keyDefinitions"
      >
        <PolicyText flex>
          <span>2.1</span>
          {t('2.0', {
            fallback:
              'Capitalised terms not otherwise defined in these Terms will have the following meaning:',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.2</span>
          {t('2.1', {
            fallback:
              '“Crypto-asset” shall mean BTC, ETH, and any digital assets that may be purchased, sold via the Service.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.3</span>
          {t('2.2', {
            fallback:
              '“Coinsmax Profile” shall mean a personal, non-transferable account created by you through the Website for the purpose of accessing and utilizing the Services provided by us.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.4</span>
          {t('2.3', {
            fallback:
              '“Exchange Fees” shall mean fees charged in connection with the Service at the applicable rates and computation methods specified in the Fee Schedule.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.5</span>
          {t('2.4', {
            fallback:
              '“External Account” shall mean any financial and / or Crypto-asset account / wallet of which you are the beneficial owner and which is maintained by a third-party payment service of a financial institution (in the event of Fiat currency account) or by third-party crypto-asset service provider or by yourself (in the event of Crypto-asset account / wallet).',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.6</span>
          {t('2.5', {
            fallback:
              '“Force Majeure Event” shall mean an event beyond the Coinsmax`s reasonable control, including but not limited to blockchain network failure, equipment for software malfunction, communications or power failure, the action of government, labour dispute, accident, riot, insurrection, war, fire, an act of God such as extraordinary weather conditions, earthquake, flood, or any other cause beyond the Coinsmaxs’ reasonable control.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.7</span>
          {t('2.6', {
            fallback: '“Funds” shall mean the Crypto-assets or Fiat currency.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.8</span>
          {t('2.7', {
            fallback:
              '“Market Exchange Rate” shall mean the prevailing market exchange rate, as determined by our liquidity providers.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.9</span>
          {t('2.8', {
            fallback:
              '“Actual Exchange Rate” shall mean the exchange rate at which an exchange order was executed.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.10</span>
          {t('2.9', {
            fallback:
              '“Wallet” shall mean any Crypto-asset address or account owned, controlled by you only and operated outside of the Service.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.11</span>
          {t('2.10', {
            fallback:
              '“Service” shall mean the exchange of Fiat currency to the Crypto-assets and the Crypto-assets to Fiat currency by executing your order on behalf of you with the liquidity provider we use.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('3.title', { fallback: '3. Eligibility' })}
        titleId="eligibility"
      >
        <PolicyText flex>
          <span>3.1</span>
          {t('3.0', {
            fallback:
              'Coinsmax may not make the Service available in all markets and jurisdictions. The list of such restricted or excluded jurisdictions may be amended by the Company from time to time, in accordance with applicable laws and regulations and at the Company’s sole discretion.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>3.2</span>
          {t('3.1', {
            fallback: 'You represent and warrant that you:',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.2.1</span>
          {t('3.2', {
            fallback:
              'are of legal age to form a binding contract; You are 18 (eighteen) years of age or older (and at least in the legal age in your jurisdiction);',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.2.2</span>
          {t('3.3', {
            fallback:
              'have full power and authority to enter into this agreement and, in doing so, will not violate any other agreement to which you are a party;',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.2.3</span>
          {t('3.4', {
            fallback:
              'will not use our Service if any applicable laws in your country prohibit you from doing so in accordance with these Terms;',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.2.4</span>
          {t('3.5', {
            fallback:
              'are not on any trade or economic, financial sanctions list, such as the European Union Consolidated Sanctions list, UN Security Council Sanctions list or the Office of Foreign Assets Control (OFAC) list or in breach of applicable law;',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.2.5</span>
          {t('3.6', {
            fallback:
              'have not previously been suspended or removed from using our Service;',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.3</span>
          {t('3.7', {
            fallback:
              'The Coinsmax may condition your access or continued access to Service by imposing eligibility requirements.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.4</span>
          {t('3.8', {
            fallback:
              'The Coinsmax may require that you demonstrate that you continue to meet eligibility requirements.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('4.title', {
          fallback: '4. General Obligations and Restrictions',
        })}
        titleId="generalObligationsAndRestrictions"
      >
        <PolicyText flex>
          <span>4.1</span>
          {t('4.0', {
            fallback: 'Introduction.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>4.1.1</span>
          {t('4.1', {
            fallback: 'These Terms apply to users of the Website.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>4.1.2</span>
          {t('4.2', {
            fallback:
              'By using any of the Services available via the Website, you acknowledge that you have read, understood, and agreed to these Terms, as updated and amended from time to time. If you disagree to be bound by these Terms, you may not access or use any of the Services.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>4.1.3</span>
          {t('4.3', {
            fallback:
              'Only eligible Persons are permitted to use the Services. Any person that is not eligible to access the Website will be in breach of these Terms.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>4.2</span>
          <span>
            {t('4.4', {
              fallback: 'The Coinsmax Profile.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.2.1</span>
          <span>
            {t('4.5', {
              fallback:
                'You may have only one Coinsmax Profile per user of Service.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.2.2</span>
          <span>
            {t('4.6', {
              fallback: 'When you create the Coinsmax Profile, you agree to:',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>4.2.2.1</span>
          <span>
            {t('4.7', {
              fallback: 'Provide accurate, current and truthful information;',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>4.2.2.2</span>
          <span>
            {t('4.8', {
              fallback:
                'Create a strong password that you do not use for other online services;',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>4.2.2.3</span>
          <span>
            {t('4.9', {
              fallback:
                'Maintain the security of your Coinsmax Profile by not sharing your password with third parties;',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>4.2.2.4</span>
          <span>
            {t('4.10', {
              fallback:
                'Promptly notify Coinsmax if you detect any suspicious activity on your Coinsmax Profile;',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>4.2.2.5</span>
          <span>
            {t('4.11', {
              fallback:
                'Take responsibility for all activities that occur under your Coinsmax Profile.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>4.3</span>
          <span>
            {t('4.12', {
              fallback: 'Transfer of the Funds.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.1</span>
          <span>
            {t('4.13', {
              fallback:
                'You may transfer Funds from an External Account of which you are the beneficial owner. This includes, but is not limited to, payment service accounts, deposit accounts by a financial institution, or Crypto-asset accounts / wallets.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.2</span>
          <span>
            {t('4.14', {
              fallback:
                'An External Account may be used to transfer funds for the services of exchanging fiat funds to crypto-assets by using the Company’s Profile or for receiving funds following the  exchanging  crypto-assets into  fiat currency.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.3</span>
          <span>
            {t('4.15', {
              fallback:
                'The External Account must comply with all regulatory AML/KYC requirements.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.4</span>
          <span>
            {t('4.16', {
              fallback:
                'You can transfer the Funds by credit card. Your transfer of the Fundsby credit card confirms that you have read, understood, and accepted these Terms. Your credit card payments may be delayed or rejected.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.5</span>
          <span>
            {t('4.17', {
              fallback:
                'Your credit card company or a third-party processor may reject your credit card payment. The Coinsmax will not be liable for any losses, fees, or charges connected to your credit card used.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.6</span>
          <span>
            {t('4.18', {
              fallback:
                'Using your credit card is subject to additional terms set forth by your credit card agreement, including additional fees.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.7</span>
          <span>
            {t('4.19', {
              fallback:
                'In case of a chargeback, you will be liable for any resulting costs and fees.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.8</span>
          <span>
            {t('4.20', {
              fallback:
                'When making a credit card transaction, please note that we initially place a temporary hold on funds (authorization) until all requirements, such as KYC/AML, are met. Only after successful completion of these requirements will we capture the transaction. If the capture fails, the order will be cancelled.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.3.9</span>
          <span>
            {t('4.21', {
              fallback:
                'By accepting these Terms you acknowledge that the Coinsmax Profile is not a payment nor electronic money account.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>4.4</span>
          <span>
            {t('4.22', {
              fallback: 'Communications.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.4.1</span>
          <span>
            {t('4.23', {
              fallback:
                'You consent to receive electronically all communications, agreements, documents, invoices, notices, and disclosures the Coinsmax provides in connection with the Service.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.4.2</span>
          <span>
            {t('4.24', {
              fallback:
                'You consent that Coinsmax may provide these communications to you by posting such on the Website , emailing them to you at the email address you provide, and / or sending a text message to a mobile phone number you provide. In the latter case, the carrier’s messaging, data or other fees may apply.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.4.3</span>
          <span>
            {t('4.25', {
              fallback:
                'To access electronic communications, you must use a computer or mobile phone with an internet connection with a current web browser and software to read PDF files.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.4.4</span>
          <span>
            {t('4.26', {
              fallback:
                'You must keep a current and valid email address and mobile phone number on the Profile with Coinsmax. By doing so, you consent to receive electronic communications from Coinsmax. If a communication is sent but you do not receive it due to incorrect or outdated contact details, interference from your service provider, or any other issue preventing receipt, the communication will still be considered delivered by Coinsmax.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.4.5</span>
          <span>
            {t('4.27', {
              fallback:
                'If your email address or mobile phone number becomes invalid, such that electronic communications sent to you are returned, the Coinsmax may deem your profile  to be inactive.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.4.6</span>
          <span>
            {t('4.28.0', {
              fallback:
                'You may withdraw your consent to receive electronic communications by sending a withdrawal notice to the Coinsmax support via e-mail',
            })}{' '}
            <Link
              href="mailto:support@coinsmax.io"
              className="text-warning font-semibold underline"
            >
              support@coinsmax.io
            </Link>
            .{' '}
            {t('4.28.1', {
              fallback:
                'In some cases the company will need to communicate with the client for additional KYC docs or other material communication. Please note that if such communications are essential for the provision of the Services, Coinsmax reserves the right to suspend or terminate your access to the Services upon withdrawal of consent.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>4.5</span>
          <span>{t('4.29', { fallback: 'Nature of Relationship.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.5.1</span>
          <span>
            {t('4.30', {
              fallback:
                'Nothing herein contained shall be deemed to create any other form of relationship. Coinsmax is not acting as your agent, advisor, broker, trader, intermediary, or in any fiduciary capacity.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.5.2</span>
          <span>
            {t('4.31', {
              fallback:
                'All communication provided to you shall not be construed as advice of any kind, to perform or refrain from performing any action.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>4.6</span>
          <span>{t('4.32', { fallback: 'Taxes.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.6.1</span>
          <span>
            {t('4.33', {
              fallback:
                'It is your full responsibility to determine if any taxes apply in relation to the Services you utilize via the Website.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.6.2</span>
          <span>
            {t('4.34', {
              fallback:
                'It is your full responsibility to report and remit the correct tax to the appropriate tax authority.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.6.3</span>
          <span>
            {t('4.35', {
              fallback:
                'Coinsmax cannot be responsible for determining whether any taxes apply to your usage of the Services.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>4.7</span>
          <span>{t('4.36', { fallback: 'Fair Use.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.1</span>
          <span>
            {t('4.37', {
              fallback:
                'By using the Services, you agree that you will not violate any law, contract, intellectual property or other third-party right or commit a wrongful act, a crime or a tort. You are solely responsible for your conduct while using our Service.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.2</span>
          <span>
            {t('4.38', {
              fallback:
                'Without limiting the generality of the foregoing, you agree that you will not use the Service in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying the Services or that could damage, disable, overburden or impair the functioning of Services.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.3</span>
          <span>
            {t('4.39', {
              fallback:
                'You agree that you will not use the Services to pay for, support or otherwise engage in any illegal gambling activities, money-laundering, financing terrorist activities, fraud, sanctions evasion or other illegal activities.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.4</span>
          <span>
            {t('4.40', {
              fallback:
                'You agree that you will not use any robot, spider, crawler, scraper or other automated means or interface not provided by Coinsmax to access the Services or extract data.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.5</span>
          <span>
            {t('4.41', {
              fallback:
                'You agree that you will not use or attempt to use another user’s profile or engage in any fraud-related activities.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.6</span>
          <span>
            {t('4.42', {
              fallback:
                'You agree that you will not attempt to circumvent any content-filtering techniques or attempt to access any service or area of the Services that you are not authorised to access.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.7</span>
          <span>
            {t('4.43', {
              fallback:
                'You agree that you will not develop any third-party applications that interact with the Services.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.8</span>
          <span>
            {t('4.44', {
              fallback:
                'You agree that you will not use the Services to provide false, inaccurate, or misleading information.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.7.9</span>
          <span>
            {t('4.45', {
              fallback:
                'You agree that you will not use the Services to encourage or induce any third party to engage in any of the activities above.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>4.8</span>
          <span>{t('4.46', { fallback: 'Unclaimed Property.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>4.8.1</span>
          <span>
            {t('4.47', {
              fallback:
                'If Coinsmax is unable, for any reason, to return your Funds to your External Account after a reasonable period of inactivity, Coinsmax may report and remit such Funds in accordance with applicable unclaimed property laws.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('5.title', { fallback: '5. Exchange Terms.' })}
        titleId="exchangeTerms"
      >
        <PolicyText flex>
          <span>5.1</span>
          <span>{t('5.0', { fallback: 'Definition of Service.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.1.1</span>
          <span>
            {t('5.1', {
              fallback:
                'By submitting an order via the Website, you authorise Coinsmax to execute an order on your behalf with the liquidity provider we use and to charge you all applicable fees.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.1.2</span>
          <span>
            {t('5.2', {
              fallback:
                'If we execute an order for You, we will be required to provide the best execution. We always aim at taking all steps necessary to obtain, while executing orders of yours, the best possible result considering factors of price, costs, speed, likelihood of execution and settlement, size, nature, or any other consideration relevant to the execution of the order.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.2</span>
          <span>{t('5.3', { fallback: 'Accuracy of Information.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.2.1</span>
          <span>
            {t('5.4', {
              fallback:
                'You must provide all required information per the instructions presented on the Website.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.2.2</span>
          <span>
            {t('5.5', {
              fallback:
                'You represent and warrant that any information you provide is accurate and complete.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.3</span>
          <span>{t('5.6', { fallback: 'Restrictions.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.3.1</span>
          <span>
            {t('5.7', {
              fallback:
                'Coinsmax may at any time and in its sole discretion refuse any order submitted, impose limits on the order amount or impose any other condition or restriction upon your use of the Services, unless otherwise required by applicable law. However, such restrictions must comply with the Civil Code of the Slovak Republic (Act No. 40/1964 Coll.), the Act No. 250/2007 Coll. on Consumer Protection, must not conflict with the MICA Regulation, the resolutions of the National Bank of Slovakia , the resolutions of the Financial Intelligence Unit (FIU) of the Slovak Republic, as well as the instructions of the Financial Administration of the Slovak Republic and applicable tax legislation. They must also comply with the Act No. 297/2008 Coll. on the Prevention of the Legalization of the Proceeds of Crime and the Financing of Terrorism, and the instructions of supervisory authorities of the Slovak Republic (and, where applicable, the instructions of supervisory authorities of other Member States), as well as any other applicable legal acts.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.4</span>
          <span>{t('5.8', { fallback: 'Order Fees.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.4.1</span>
          <span>
            {t('5.9', {
              fallback:
                'By using the Services, you agree to pay Coinsmax the fees for the execution of your orders on your behalf and any orders completed using the Services, which we may change from time to time. For specific fees applied please find the table below.',
            })}
          </span>
        </PolicyText>
        <FeesTable />
        <PolicyText className="pl-6" flex>
          <span>5.4.2</span>
          <span>
            {t('5.10', {
              fallback:
                'All applicable fees and exchange rates are disclosed to the Client on the purchase order form prior to the Client’s approval of the transaction. By submitting an Order, the Client is deemed to have provided explicit consent to the applicable fees and exchange rate.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.4.3</span>
          <span>
            {t('5.11', {
              fallback:
                'In addition to the order fees, your External Account operator may impose fees in connection with your use of your External Account. Any fees imposed by your External Account operator will not be reflected on the order information provided by Coinsmax. You are solely responsible for paying any fees imposed by the External Account operator.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.4.4</span>
          <span>
            {t('5.12', {
              fallback:
                'By using the Service, you authorise Coinsmax, or a designated payment processor, to charge or deduct your Funds for any applicable fees owed in connection with the orders you complete by using the Services.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.4.5</span>
          <span>
            {t('5.13', {
              fallback:
                'Upon your failure to make any payment of fees, commissions, charges or other expenses due to Coinsmax, Coinsmax may at any time and in its sole discretion refuse any execution of order submitted, impose limits on the order amount or impose any other condition or restriction upon your use of the Services.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.5</span>
          <span>{t('5.14', { fallback: 'Exchange Rate.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.5.1</span>
          <span>
            {t('5.15', {
              fallback:
                'Coinsmax will attempt, on a commercially reasonable basis, to execute the order on or close to the prevailing market exchange rate, as determined by Coinsmax`s  liquidity providers.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.5.2</span>
          <span>
            {t('5.16', {
              fallback:
                'You acknowledge that the actual exchange rate may differ from prevailing exchange rates.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.5.3</span>
          <span>
            {t('5.17', {
              fallback:
                'You acknowledge that during periods of volatility in the marketplace for any Crypto-assets, the actual exchange rate may differ from your exchange order’s prevailing market exchange rate.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.5.4</span>
          <span>
            {t('5.18', {
              fallback:
                'Coinsmax will use commercially reasonable efforts to execute orders as soon as possible on a spot basis and up to two (2) days of the date upon which you completed all required KYC and AML procedures.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.6</span>
          <span>
            {t('5.19', { fallback: 'Payment for an External Account.' })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.6.1</span>
          <span>
            {t('5.20', {
              fallback:
                'Only payment methods specified by Coinsmax may be used to purchase and sell Crypto-assets. By submitting an order, you represent and warrant that you are authorised to use the designated payment method and authorise Coinsmax or Coinsmax`s  payment processor to charge your designated payment method.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.6.2</span>
          <span>
            {t('5.21', {
              fallback:
                'If the payment method is invalid or unacceptable, your order may be suspended or cancelled.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.7</span>
          <span>{t('5.22', { fallback: 'Disruption of Service.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.7.1</span>
          <span>
            {t('5.23', {
              fallback:
                'In the event of an error in providing the Service, in order confirmation, in executing the order, or otherwise, the Coinsmax reserves the right to correct such error and revise your order accordingly or to cancel the purchase and refund any amount received, after deduction of applicable fees.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.7.2</span>
          <span>
            {t('5.24', {
              fallback:
                'In a market disruption or Force Majeure event (see Key Definitions above), such as blockchain network failure, Coinsmax may suspend access to the Services.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.7.3</span>
          <span>
            {t('5.25', {
              fallback:
                'Following any such event, you acknowledge that prevailing market exchange rates may differ from the rates available prior to such event.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.8</span>
          <span>
            {t('5.26', { fallback: 'Cancellation of order (buying/selling).' })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.8.1</span>
          <span>
            {t('5.27', {
              fallback:
                'You may cancel an order initiated via transaction order form only if such cancellation occurs before Coinsmax initiates execution of the order.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.8.2</span>
          <span>
            {t('5.28', {
              fallback:
                'Once your order has been executed, you may not change or cancel your authorization for Coinsmax to complete the order.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.8.3</span>
          <span>
            {t('5.29', {
              fallback:
                'If an order has been partially filled, you may cancel the unfilled remainder.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.8.4</span>
          <span>
            {t('5.30', {
              fallback:
                'If an order may not be completed due to insufficient Funds, Coinsmax may cancel the entire order.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.9</span>
          <span>{t('5.31', { fallback: 'No Refunds.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.9.1</span>
          <span>
            {t('5.32', {
              fallback:
                'All order execution operations, sales and purchases of the Crypto-assets via the Website are final and non-refundable.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.9.2</span>
          <span>
            {t('5.33', {
              fallback:
                'Coinsmax does not accept any returns and will not provide any refunds unless specifically provided in these Terms.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.10</span>
          <span>
            {t('5.34', { fallback: 'Safeguarding of your FIAT funds.' })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.10.1</span>
          <span>
            {t('5.35', {
              fallback:
                'In the event you initiate the order to buy Crypto-assets for FIAT funds, any FIAT funds received for order execution purposes will be placed within a separate client account opened with the payment service provider. Such a client FIAT funds account is used solely for segregating your FIAT funds and no FIAT funds of Coinsmax are commingled there.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.10.2</span>
          <span>
            {t('5.36', {
              fallback:
                'If your order for any reason is not executed within the next business day upon receipt of your FIAT funds in a client FIAT funds account with payment service provider as indicated above, then such FIAT funds of yours are transferred to a separate clients’ FIAT funds segregation account opened with a credit institution. That is, we have taken the appropriate steps of safeguarding your and other clients’ of our FIAT funds by segregating and placing them in protected clients’ funds bank account. You shall retain the ownership of the FIAT funds transferred to us for execution of orders until the order is fully executed. FIAT funds placed on our clients’ funds bank account are protected against any claims made by creditors of ours.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.10.3</span>
          <span>
            {t('5.37', {
              fallback:
                'When we execute the order on behalf of you, any Crypto-assets purchased on your behalf within the liquidity provider (execution venue) are placed within a separate wallet to ensure no commingle of your Crypto-assets and ours. Once the order is completed, the Crypto-assets are transferred to your Crypto-asset wallet upon the details of such provided by you.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.10.4</span>
          <span>
            {t('5.38', {
              fallback:
                'By accepting these Terms, you are aware that we do not provide Crypto-asset custody to any extent. It is your responsibility to indicate an accurate external wallet address, where purchased Crypto-assets as a result of order execution of yours shall be transferred.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>5.10.5</span>
          <span>
            {t('5.39', {
              fallback:
                'Whenever possible, when performing financial (fiat) transactions, using a payment card, or accessing our services, you should use multi-factor authentication and relevant strong customer authentication methods. We are not liable if you transfer funds (fiat) improperly without using secure methods as required by your payment service provider, or if you disclose your banking credentials or payment card details to third parties. More detailed information on how to protect yourself from fraud can be found in the Fraud Prevention section of our website. We regularly update this section in line with best market practices and applicable legal requirements, also taking into account the best practices outlined in the National Bank of Slovakia’s Fraud Prevention Guidelines. In all cases, we place particular emphasis on ensuring that clients use strong customer authentication methods and we also implement measures aimed at reducing fraud risk.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('6.title', { fallback: '6. KYC and Reversal Transaction' })}
        titleId="kycAndReversalTransaction"
      >
        <PolicyText flex>
          <span>6.1</span>
          <span>
            {t('6.0', {
              fallback:
                'Pursuant to Regulatory Guidance, a completion of a successful “Know Your Client” (“KYC”) procedure is a necessary condition to use Service. Documents and media files will be uploaded to your Coinsmax profile and stored per Coinsmax Privacy Policy.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>6.2</span>
          <span>
            {t('6.1', {
              fallback:
                'A successful KYC procedure allows a client to use Service and settle the client’s exchange order per clause V.5.4.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>6.3</span>
          <span>
            {t('6.2', {
              fallback:
                'You acknowledge that, as part of the verification process and background checks conducted in accordance with our KYC procedures and AML policies, the Company may carry out inquiries either directly or via authorized third-party providers. These checks are intended to prevent fraud, suspicious behavior, identity fraud, money laundering, or other unlawful activities.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>6.4</span>
          <span>
            {t('6.3', {
              fallback:
                'By using the Services, you agree and consent to the Company sharing your information as necessary for legitimate business purposes, including but not limited to fulfilling KYC and AML obligations.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>6.5</span>
          <span>
            {t('6.4', {
              fallback:
                'We implement internal procedures to carry out individual ML/TF risk assessments and assign You to risk groups (categories).',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>6.6</span>
          <span>
            {t('6.5', {
              fallback:
                "Company's Customers are classified with a risk level: low, medium, high risk. Accordingly you may be subject to enhanced due diligence. We assess the customer's risk as high using our risk scoring matrix.",
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>6.7</span>
          <span>
            {t('6.6', {
              fallback:
                'You will be assigned to the risk group (category) based on various criteria, e.g., the country of registration, the type of activity, the actual place of business, Your place of residence, nationality, source of funds/wealth, the nature and size of the transactions performed. The foregoing list is not exhaustive.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>6.8</span>
          <span>
            {t('6.7', {
              fallback:
                'You will be assigned to the risk group (category) based on various criteria, e.g., the country of registration, the type of activity, the actual place of business, Your place of residence, nationality, source of funds/wealth, the nature and size of the transactions performed. The foregoing list is not exhaustive.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.8.1</span>
          <span>
            {t('6.8', {
              fallback:
                'Based on your risk level we will require different KYC documents and procedures and we may also not accept you as our client and may not allow you to use the Services. The documents and media files requested may include, but are not limited to:',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.8.2</span>
          <span>
            {t('6.9', {
              fallback:
                'Government-issued ID. The ID is subject to an automatic verification to confirm its validity and authenticity. A facial similarity analysis between the selfie and ID for You is conducted as well to ensure that You are who you claim to be.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.8.3</span>
          <span>
            {t('6.10', {
              fallback:
                'Proof of Address - KYC requirement where you must submit a valid document showing your current residential address. Acceptable documents include utility bills, bank statements, or official government correspondence dated within the last three months. The purpose is to confirm your declared residence to assess jurisdictional compliance and detect possible fraud. It also supports AML obligations and helps in accurate client risk profiling.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.8.4</span>
          <span>
            {t('6.11', {
              fallback: 'Questionnaire/confirmation Form 101',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.8.5</span>
          <span>
            {t('6.12', {
              fallback: 'Questionnaire/confirmation Form 102',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.8.6</span>
          <span>
            {t('6.13', {
              fallback: 'Source of Funds',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.8.7</span>
          <span>
            {t('6.14', {
              fallback: 'Video Call',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.8.8</span>
          <span>
            {t('6.15', {
              fallback:
                'We also act in accordance with the Act No. 297/2008 Coll. on the Prevention of the Legalization of the Proceeds of Crime and the Financing of Terrorism, Civil Code of the Slovak Republic (Act No. 40/1964 Coll.) , the Act No. 250/2007 Coll. on Consumer Protection, the MICA Regulation (where relevant), the resolutions of the National Bank of Slovakia, the resolutions of the Financial Intelligence Unit (FIU), as well as the instructions of the Financial Administration of the Slovak Republic and applicable tax legislation, and the instructions of supervisory authorities of the Slovak Republic (and, where applicable, the instructions of supervisory authorities of other EU Member States), as well as any other applicable legal acts that we, as a company engaged in crypto-asset activities, are obliged to comply with, and these Terms and Conditions, which we update regularly. In this context, we may request additional data, documents, evidence, or explanations from you, and you undertake to provide them within the reasonable time period specified by us, in accordance with prevailing market standards.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>6.9</span>
          <span>
            {t('6.16', {
              fallback:
                'If a user refuses to complete KYC process for any reason, the User shall:',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.9.1</span>
          <span>
            {t('6.17', {
              fallback:
                'Inform Coinsmax of refusal to complete the KYC process in writing to Coinsmax customer service.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.9.2</span>
          <span>
            {t('6.18', {
              fallback:
                'Provide a valid personal account/wallet for reversal of the transaction. Coinsmax shall then initiate a transaction reversal. The user’s FIAT funds/cryptocurrency shall be returned to the user’s account/wallet five (5) days after the date upon which a user submitted a refusal to complete the KYC statement.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.9.3</span>
          <span>
            {t('6.19', {
              fallback:
                'If pursuant to a KYC process, Coinsmax will refuse to provide services to a user due to AML policy, compliance directive or any other reason, Coinsmax shall initiate a reversal of the transaction, and the user’s FIAT funds/cryptocurrency shall be returned to the user’s account/wallet up to five (5) days of the date upon which a user-submitted an exchange order.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.9.4</span>
          <span>
            {t('6.20', {
              fallback:
                'The Company reserves the right to take any measures it considers appropriate following the completion of its KYC/AML assessments including but not limited to comply with any relevant reporting obligations related to the prevention of money laundering and terrorist financing.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.9.5</span>
          <span>
            {t('6.21', {
              fallback:
                'We may disclose relevant findings and your personal data to the relevant  authorities as required by laws and regulations.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>6.9.6</span>
          <span>
            {t('6.22', {
              fallback:
                'You acknowledge that the Company has full discretion over these decisions and is not obligated to explain or disclose the specific reasons behind the outcome of such reviews.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('7.title', { fallback: 'Risk Disclosure Statement.' })}
        titleId="riskDisclosureStatement"
      >
        <PolicyText flex>
          <span>7.1</span>
          <span>
            {t('7.0', {
              fallback:
                'You agree that you shall access and use the Service at your own risk.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.2</span>
          <span>
            {t('7.1', {
              fallback:
                'Please note that this brief statement cannot disclose all the risks associated with the Crypto-asset market. The list outlined in these Terms is aimed to provide general information regarding the risks associated with the Services and the use of them. However, it is not intended to provide an exhaustive disclosure of all the risks associated with using the Services and there may be additional risk factors that are not disclosed in this section because they are either unknown or considered insignificant at the time of publication. Additionally, this information does not address how these risks may relate to the personal circumstances, financial status, or risk tolerance of yours. It should not be construed as a definitive evaluation of the risks associated with the Services, therefore, the decision to use our Services should not be made solely on the basis of the indicated risk factors.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.3</span>
          <span>
            {t('7.2', {
              fallback:
                'Any operation in Crypto-assets involves a high degree of risk and the potential for significant losses. You, therefore, should carefully consider whether using the Services is suitable for you, in view of your financial resources and other circumstances.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.4</span>
          <span>
            {t('7.3', {
              fallback:
                'The Coinsmax and none of its agents or employees are investment or trading advisors.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.5</span>
          <span>
            {t('7.4', {
              fallback:
                'Any communication between the Client and the Company shall not be considered investment advice.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.6</span>
          <span>
            {t('7.5', {
              fallback:
                'The Company makes no warranty as to the suitability of the Services to the Client and the Client is fully aware of the risk associated with the Crypto-assets market.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.7</span>
          <span>
            {t('7.6', {
              fallback:
                'By using the Services, you acknowledge that the Crypto-assets are inherently unpredictable and unstable and will continue to be for the foreseeable future.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.8</span>
          <span>
            {t('7.7', {
              fallback:
                'The Crypto-assets entail an inherent risk with hacks, transfer errors, and government sanctions out of the control of Coinsmax.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.9</span>
          <span>
            {t('7.8', {
              fallback:
                'The Coinsmax is not responsible for communicating, anticipating or detecting all known or unknown risks inherent in the Crypto-asset markets.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.10</span>
          <span>
            {t('7.9', {
              fallback:
                'You must carefully consider your capabilities, experience level and risk tolerance before performing any operations with the Crypto-assets.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.11</span>
          <span>
            {t('7.10', {
              fallback: 'Do not exchange funds you cannot afford to lose.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.12</span>
          <span>
            {t('7.11', {
              fallback:
                'Coinsmax is not a trading site. Coinsmax does not endorse, support or recommend any trading platform. Furthermore, you acknowledge that risks are inherent to and associated with utilising Internet-based trading systems. Coinsmax is not liable for any loss or damage, including any loss of funds or profit.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.13</span>
          <span>
            {t('7.12', {
              fallback:
                'You acknowledge that there are inherent risks associated with utilising an Internet-based exchange service, such as hardware or software failure and Internet connection failure. You acknowledge that Coinsmax shall not be responsible for any disruptions, errors, delays or communication failures you may experience when using the Services, however, caused.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.14</span>
          <span>
            {t('7.13', {
              fallback:
                'The Crypto-assets constitute a rapidly changing and unpredictable environment with an endless number of variables and factors outside your or Coinsmax control. New risks emerge at every moment, which creates market risk and uncertainty. Coinsmax is not responsible for anticipating, detecting or communicating all known or unknown risks in the Crypto-asset market.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.15</span>
          <span>
            {t('7.14', {
              fallback:
                'Some factors that could cause negative performance on operations are market volatility, government policies and regulations, hacks and security breaches resulting in the theft of funds, price manipulation, and general economic or market conditions.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.16</span>
          <span>
            {t('7.15', {
              fallback:
                'Risk is the exposure to the chance of loss. You confirm that even though it seems unlikely, there is a real chance of realising risk that may result in the total loss of your Funds.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>7.17</span>
          <span>
            {t('7.16', {
              fallback:
                'In certain market conditions, the market can reach a daily price fluctuation limit or insufficient liquidity, in which case your exchange order execution might be impossible.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('8.title', { fallback: 'Intellectual Property' })}
        titleId="intellectualProperty"
      >
        <PolicyText flex>
          <span>8.1</span>
          <span>{t('8.0', { fallback: 'Intellectual Property Rights.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.1</span>
          <span>
            {t('8.1', {
              fallback:
                'Unless otherwise indicated, all copyright and other intellectual property rights in all content and other materials contained on our website or provided in connection with the Services, are the proprietary property of Coinsmax and are protected by international copyright laws and other intellectual property rights laws.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.2</span>
          <span>
            {t('8.2', {
              fallback:
                'Content and materials may include the Coinsmax logo, designs, text, graphics, pictures, information, data, software, files and the selection and arrangement.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.3</span>
          <span>
            {t('8.3', {
              fallback:
                'Coinsmax does not permit any use of the content and materials other than for their intended purposes.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.4</span>
          <span>
            {t('8.4', {
              fallback:
                'Coinsmax grants you a limited, non-exclusive and non-sublicensable licence to access and use the Coinsmax content and materials for your personal or internal business use.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.5</span>
          <span>
            {t('8.5', {
              fallback:
                'Such licence does not permit any resale of the content or materials. It forbids the distribution, public performance or public display, modifying or otherwise making any derivative use of content or materials.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.6</span>
          <span>
            {t('8.6', {
              fallback:
                'Any suggestions, feedback, ideas, proposals, or other materials that you submit or communicate to Coinsmax—whether through support correspondence, use of the Services, or any other means—shall become the sole and exclusive property of Coinsmax. Coinsmax shall own all rights, title, and interest in such submissions without any obligation to compensate you.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.7</span>
          <span>
            {t('8.7', {
              fallback:
                'Coinsmax will own exclusive rights to any information submitted as suggestions, ideas or feedback to change or improve service. Such suggestions are non-confidential and shall become the sole property of Coinsmax.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.8</span>
          <span>
            {t('8.8', {
              fallback:
                'Coinsmax will be entitled to the unrestricted use and dissemination of the feedback for any purpose, commercial or otherwise, without acknowledgement or compensation to you. You waive any rights you may have to the suggestions, ideas or feedback, including copyright and moral rights.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.1.9</span>
          <span>
            {t('8.9', {
              fallback:
                'Coinsmax reserves the right to disclose your identity to any third party who is claiming that content posted by you constitutes a violation of their intellectual property privacy rights.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>8.2</span>
          <span>{t('8.10', { fallback: 'Trademarks.' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.2.1</span>
          <span>
            {t('8.11', {
              fallback:
                '“Coinsmax” and Coinsmax’ logo are trademarks of Coinsmax, and may not be copied, imitated or used, in whole or in part, without Coinsmax’s prior written permission.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.2.2</span>
          <span>
            {t('8.12', {
              fallback:
                'You may not use any trademark, product or service name of Coinsmax without prior written permission.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.2.3</span>
          <span>
            {t('8.13', {
              fallback:
                'Use above includes meta tags or hidden text utilising any trademark, product or service name of Coinsmax.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.2.4</span>
          <span>
            {t('8.14', {
              fallback:
                'The look and feel of Coinsmax Site and Service, including all page headers, custom graphics, button icons and scripts, is the service mark, trademark and/or trade dress of Coinsmax and may not be copied, imitated or used, in whole or in part, without prior written permission.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>8.2.5</span>
          <span>
            {t('8.15', {
              fallback:
                'All other trademarks, registered trademarks, product names and company names or logos mentioned through the Service are the property of their respective owners. Reference to any products, services, processes or other information, by name, trademark or otherwise does not constitute or imply endorsement, sponsorship or recommendation by Coinsmax.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('9.title', { fallback: 'Third-Party Content' })}
        titleId="thirdPartyContent"
      >
        <PolicyText flex>
          <span>9.1</span>
          <span>
            {t('9.1', {
              fallback:
                'While using the Services, you may view content provided by third parties, including links to web pages of such parties, including but not limited to Facebook links.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>9.2</span>
          <span>
            {t('9.2', {
              fallback:
                'The Coinsmax does not control, endorse or adopt any such third-party content and shall have no responsibility for such content, including material that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>9.3</span>
          <span>
            {t('9.3', {
              fallback:
                'The Coinsmax is not responsible or liable for any loss or damage of any sort incurred from any dealings with third parties.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>9.4</span>
          <span>
            {t('9.4', {
              fallback:
                'Interaction and use of third party content are at your own risk.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>9.5</span>
          <span>
            {t('9.5', {
              fallback:
                'Before using our services or any third-party services, please carefully review the applicable Terms and Conditions, as well as the risks associated with the use of such services and information. We kindly ask you to thoroughly compare our Terms and Conditions with those of any third party in order to clearly understand which services are provided by us and which are provided by the third party. As a company engaged in crypto-asset activities, we operate in accordance with the current and applicable laws and regulations of the Republic of Slovakia and the European Union, including restrictions related to sanctions, limitations on the provision of certain services in specific jurisdictions, restrictions applicable to specific client segments, and the current decisions of supervisory authorities. Therefore, when using third-party services, you assume the risks associated with such use.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('10.title', { fallback: 'Customer Complaints Procedure' })}
        titleId="customerComplaintsProcedure"
      >
        <PolicyText flex>
          <span>10.1</span>
          <span>
            {t('10.0', {
              fallback: 'General notes.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.1.1</span>
          <span>
            {t('10.1', {
              fallback:
                'Any dissatisfaction with Services, irrespective of whether it is justified or not, related to our products / Services or the complaints handling process itself, feedback or voicing the client’s opinion can be registered as a complaint. See instructions below and our',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.1.2</span>
          <span>
            {t('10.2.0', {
              fallback:
                'Any dissatisfaction with Services, irrespective of whether it is justified or not, related to our products / Services or the complaints handling process itself, feedback or voicing the client’s opinion can be registered as a complaint. See instructions below and our',
            })}{' '}
            <Link
              href="/complains-procedure"
              className="font-semibold underline"
            >
              {t('10.2.1', { fallback: 'Complaints Procedure.' })}
            </Link>
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.1.3</span>
          <span>
            {t('10.3', {
              fallback:
                'Coinsmax is committed to treating you with respect and transparency, handling the complaint fairly, and providing a timely response. An eligible complaint Complaint may be made by any person who is directly affected by the way we have provided our Services and who can make a complaint in respect thereof. Therefore, you may file the complaint respectively to us, if you are: i) individual client (natural person/consumer) that uses our Services, or ii) a legal representative of any individual client (of consumer) of ours.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.1.4</span>
          <span>
            {t('10.4', {
              fallback:
                'The response shall strive to be constructive, and include an explanation and reasoning.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>10.2</span>
          <span>
            {t('10.5', {
              fallback: 'How to register a complaint?',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.2.1</span>
          <span>
            {t('10.6', {
              fallback:
                'Prepare identifying information about yourself and the transaction in the subject of the complaint. The identifying information should include:',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>10.2.1.1</span>
          <span>
            {t('10.7', { fallback: 'Your Coinsmax profile number (if any).' })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>10.2.1.2</span>
          <span>
            {t('10.8', {
              fallback:
                'Full name and address, as provided when you have registered your Order number (if any).',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>10.2.1.3</span>
          <span>{t('10.9', { fallback: 'Order number (if any).' })}</span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>10.2.1.4</span>
          <span>
            {t('10.10', {
              fallback:
                'The completed Complaint Form, along with relevant additional information, can be found together with the Complaints Procedure on our website.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.2.2</span>
          <span>
            {t('10.11.0', {
              fallback: 'Send your complaint by email to:',
            })}{' '}
            <Link
              href="mailto:complaints@coinsmax.io"
              className="text-warning font-semibold underline"
            >
              complaints@coinsmax.io
            </Link>
            .{' '}
            {t('10.11.1', {
              fallback: 'Please state “complaint” in the subject.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.2.3</span>
          <span>
            {t('10.12', {
              fallback:
                'You can also send your complaint in paper form to our address at: Černyševského 1287/10, 851 01 Bratislava – Petržalka, Slovak Republic ',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.2.4</span>
          <span>
            {t('10.13', {
              fallback:
                'Via the Customer service portal on the web ticketing system.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.2.5</span>
          <span>
            {t('10.14', {
              fallback:
                'If You have questions or concerns regarding data protection or Privacy Policy or if you have a related Complaint, please contact us by our appointed Data Protection Officer (DPO) at dpo@coinsmax.io or via the standard contact methods listed above. For more information, please also refer to our Privacy Policy. When handling complaints related to data protection, we act in accordance with both the GDPR and the applicable national legal acts enforced by supervisory authorities in the field of data protection. Therefore, our handling of data protection-related complaints (including the outcomes of such reviews) may also change in line with best market practices and the requirements of supervisory authorities. Before launching products or providing services, as well as when data is transferred either within Slovakia or beyond its borders, we conduct a Data Protection Impact Assessment to ensure proper data protection and compliance with Slovakian legal requirements. To keep your data safe and secure, do not disclose it to unauthorized third parties and provide it only through our official systems or via the contact channels we specify. In cases of international data transfers, we may apply additional security measures and take supplementary actions.',
            })}
          </span>
        </PolicyText>
        <PolicyText>
          {t('10.15.0', {
            fallback:
              'For the detailed information on how you can file the complaint, how we handle your complaint and on other related matters, please refer to our',
          })}{' '}
          <Link href="/complains-procedure" className="font-semibold underline">
            {t('10.15.1', { fallback: 'Complaints Handling Procedure.' })}
          </Link>{' '}
          {t('10.15.2', {
            fallback: 'which can be accessed here.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>10.2.6</span>
          <span>
            {t('10.16', {
              fallback:
                'Although a transitional period for obtaining a MICA-related license is currently in effect in Slovakia, in the interest of maximum transparency, we inform you that in certain cases the National Bank of Slovakia also provides opinions/answers on matters related to cryptocurrencies. You therefore have the right to contact the National Bank of Slovakia; however, during the transitional period, the National Bank of Slovakia, acting in accordance with applicable legislation, may determine that such a complaint does not meet its admissibility criteria. Please be informed, that Customers, who are not satisfied with the Company’s response, may report to the National Bank of Slovakia. The Complainant may submit a complaint to the National Bank of Slovakia, in Slovak or English language, by filling in the application form as specified in the website of the National Bank of Slovakia and sending it in writing or by electronic means to the National Bank of Slovakia to this address: Imricha Karvaša 1 813 25 Bratislava, Slovakia, or via email: info@nbs.sk.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('11.title', {
          fallback: 'Discontinuance of Service, Suspension and Termination.',
        })}
        titleId="discontinuanceOfServiceSuspensionAndTermination"
      >
        <PolicyText flex>
          <span>11.1</span>
          <span>
            {t('11.1', {
              fallback:
                'Coinsmax may, in its sole discretion, without liability to you, at any time and without prior notice, discontinue, temporarily or permanently, access to any Coinsmax Services, unless otherwise required by applicable law.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>11.2</span>
          <span>
            {t('11.2', {
              fallback:
                'In the event of any breach of these Terms by you, the Force Majeure Event, or any other event that would make provision of the Services commercially unreasonable for the Coinsmax, the Coinsmax may, in its sole discretion and without liability to you, without prior notice, suspend your access to the Services.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>11.3</span>
          <span>
            {t('11.3', {
              fallback:
                'Following such an event, the Coinsmax may terminate your access to the Services, deactivate your Coinsmax Profile and delete all related information.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('12.title', {
          fallback: 'Limitation of Liability, Disclaimer of Warranties',
        })}
        titleId="limitationOfLiabilityDisclaimerOfWarranties"
      >
        <PolicyText flex>
          <span>12.1</span>
          <span>
            {t('12.0', {
              fallback: 'Limitation of Liability.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>12.1.1</span>
          <span>
            {t('12.1', {
              fallback:
                'Except as otherwise required by law, in no event shall Coinsmax, its suppliers, service providers, directors, members, employees or agents be liable for any special, indirect or consequential damages, or any other damages of any kind, including but not limited to loss of use, loss of profits or loss of data, whether in an action in contract, tort, negligence or otherwise, arising out of or in any way connected with the use of or inability to use our services, including without limitation any damages caused by or resulting from reliance by any user on any information obtained from Coinsmax, or that result from mistakes, omissions, interruptions, deletion or loss of files or information, errors, defects, viruses, delays in operation or transmission or any failure of performance, whether or not resulting from a Force Majeure Event, communications failure, theft, destruction or unauthorised access to records, programs or services.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>12.2</span>
          <span>
            {t('12.2', {
              fallback: 'Disclaimer of Warranties.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>12.2.1</span>
          <span>
            {t('12.3', {
              fallback:
                'Coinsmax provides services on an “as is” and “as available” basis.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>12.2.2</span>
          <span>
            {t('12.4', {
              fallback:
                'The Coinsmax expressly disclaim, and you waive, all warranties of any kind, whether express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, including the information, content and materials contained therein.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>12.2.3</span>
          <span>
            {t('12.5', {
              fallback:
                'You are aware that information you store or transfer through the Coinsmax Services may become irretrievably lost, corrupted, or temporarily unavailable due to various causes, including but not limited to software failures, protocol changes, Force Majeure Events, denial-of-service attacks, maintenance, or other causes. You acknowledge the above-stated risk and confirm you are solely responsible for backing up any information you store or transfer through the Services.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('13.title', {
          fallback: 'Applicable Law',
        })}
        titleId="applicableLaw"
      >
        <PolicyText flex>
          <span>13.1</span>
          <span>
            {t('13.0', {
              fallback: 'Jurisdiction.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>13.1.1</span>
          <span>
            {t('13.1', {
              fallback:
                'The Terms of Use shall be governed by, construed and enforced according to the laws of Slovakia, without giving effect to the principles of conflicts of law.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('14.title', {
          fallback: 'Miscellaneous',
        })}
        titleId="miscellaneous"
      >
        <PolicyText flex>
          <span>14.1</span>
          <span>
            {t('14.0', {
              fallback: 'Entire Agreement.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.1.1</span>
          <span>
            {t('14.1', {
              fallback:
                'These Terms contain the entire agreement between you and Coinsmax, and supersede all prior and contemporaneous understandings between the parties regarding the Services.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>14.2</span>
          <span>{t('14.2', { fallback: 'Amendment' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.2.1</span>
          <span>
            {t('14.3', {
              fallback:
                'Coinsmax reserves the right to make changes or modifications to these Terms from time to time, in Coinsmax’s sole discretion, by posting the amended Terms of Use on the website, and by communicating these changes through any written or other contact methods, we have established with you.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.2.2</span>
          <span>
            {t('14.4', {
              fallback:
                'Changes to the Terms and Conditions are communicated 30 days prior to their effective date. In such cases, you have the right to terminate your agreement with us before the changes take effect. However, if you do not terminate the agreement within this period, the updated Terms and Conditions will apply to you.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>14.3</span>
          <span>
            {t('14.5', {
              fallback: 'Waiver',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.3.1</span>
          <span>
            {t('14.6', {
              fallback:
                'To ensure that consumers can effectively exercise their rights, we will publish both the current and previous versions of the Terms and Conditions on our website.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>14.4</span>
          <span>{t('14.7', { fallback: 'Severability' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.4.1</span>
          <span>
            {t('14.8', {
              fallback:
                'The invalidity or unenforceability of any of these Terms shall not affect the validity or enforceability of any other Terms, all of which shall remain in full force and effect.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>14.5</span>
          <span>{t('14.9', { fallback: 'Descriptive Headings' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.5.1</span>
          <span>
            {t('14.10', {
              fallback:
                'The descriptive headings of the Terms are inserted for convenience only and do not constitute a part of the Terms.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>14.6</span>
          <span>{t('14.11', { fallback: 'Assignment' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.6.1</span>
          <span>
            {t('14.12', {
              fallback:
                'You may not assign or transfer any of your rights or obligations under these Terms, including in connection with any change of control, unless otherwise required by applicable law.',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.6.2</span>
          <span>
            {t('14.13', {
              fallback:
                'Coinsmax may assign or transfer any or all of its rights under these Terms, in whole or in part, without obtaining your consent or approval.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>14.7</span>
          <span>{t('14.14', { fallback: 'Survival' })}</span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>14.7.1</span>
          <span>
            {t('14.15', {
              fallback:
                'The following clauses shall survive termination or expiration of these Terms:',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>14.7.1.1</span>
          <span>
            {t('14.16', {
              fallback: '(3) Eligibility',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>14.7.1.2</span>
          <span>
            {t('14.17', {
              fallback:
                '(4) General Obligations and Restrictions: (2) Account, (4) Taxes, (5) Unclaimed Property',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>14.7.1.3</span>
          <span>
            {t('14.18', {
              fallback: '(5) Exchange Terms',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>14.7.1.4</span>
          <span>
            {t('14.19', {
              fallback: '(7) Risk disclosure statement',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>14.7.1.5</span>
          <span>
            {t('14.20', {
              fallback: '(8) Intellectual Property',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>14.7.1.6</span>
          <span>
            {t('14.21', {
              fallback: '(12) Limitation of liability',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>14.7.1.7</span>
          <span>
            {t('14.22', {
              fallback: '(13) Applicable law, dispute resolution',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>14.7.1.8</span>
          <span>
            {t('14.23', {
              fallback: '(14) Miscellaneous',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
    </PolicyLayout>
  );
}
