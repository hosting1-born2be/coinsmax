import { getTranslations } from 'next-intl/server';

import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySectionLayout } from '@/features/policies/ui/policy-section-layout';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export default async function AMLPolicyPage() {
  const t = await getTranslations('amlPolicy');

  return (
    <PolicyLayout>
      <div className="flex flex-col gap-3 text-center">
        <Title size="5xl" as="h1" className="text-center max-md:text-[32px]">
          {t('title', { fallback: 'AML Policy' })}
        </Title>
        <Text size="xl" color="faded">
          {t('lastUpdate', { fallback: 'Last updated: 15.09.2025' })}
        </Text>
      </div>
      <PolicySectionLayout
        title={t('0.title', { fallback: 'About the Company' })}
      >
        <PolicyText>
          {t('0.0', {
            fallback:
              'Coinsmax.io is owned and operated by Limitless Technologies s.r.o. (hereinafter – the Company), a virtual currency exchange, acting in accordance with the laws of the Republic of Slovakia. The Company provides crypto-asset services in line with applicable national and European Union legislation.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('1.title', { fallback: 'AML/CTF Commitment' })}
      >
        <PolicyText>
          {t('1.0', {
            fallback:
              'Money laundering (ML) and terrorist financing (TF) continue to pose substantial challenges to the integrity and stability of the crypto-asset sector. Coinsmax acknowledges the serious risks that ML and TF activities present to its business operations, reputation, and the wider financial ecosystem. In alignment with the Markets in Crypto-Assets Regulation (MiCA) and other relevant legislative frameworks of the European Union, the company has developed and implemented a robust Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) Policy.',
          })}
        </PolicyText>
        <PolicyText>
          {t('1.1', {
            fallback:
              'This Policy is grounded in binding legal obligations, supervisory expectations, and internationally recognised standards and best practices. Through this framework, Coinsmax ensures that effective controls, monitoring mechanisms, and risk-based measures are in place to detect, prevent, and report any suspicious activities. The company remains firmly committed to maintaining the highest standards of transparency, accountability, and regulatory compliance in the provision of its crypto-asset services.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('2.title', { fallback: 'Legal and Regulatory Framework' })}
      >
        <PolicyText>
          {t('2.0', {
            fallback:
              'The Company conducts its business in accordance with the provisions of Act No. 297/2008 Coll. on the Prevention of Money Laundering and Terrorist Financing, Act No. 566/2001 Coll. on Securities and Investment Services, and other applicable legislation of the Slovak Republic. In addition, the Company adheres to the requirements of Regulation (EU) 2023/1114 of the European Parliament and of the Council on Markets in Crypto-assets (MiCA), as well as the provisions of Directive (EU) 2015/849 and its subsequent amendments (4th and 5th AML Directives). The Company is subject to the supervision of the Financial Intelligence Unit of the Slovak Republic and maintains internal policies, procedures, and controls designed to ensure full compliance with anti-money laundering (AML), counter-terrorist financing (CTF), and international sanctions obligations applicable within the European Union.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('3.title', { fallback: 'AML/CTF Policy Overview' })}
      >
        <PolicyText>
          {t('3.0', {
            fallback:
              'The AML/CTF Policy establishes internal procedures and control measures for identifying, assessing, managing, and mitigating ML/TF risks. It includes client due diligence (CDD), enhanced due diligence (EDD), ongoing due dilligence (ODD), sanctions screening,  transaction monitoring, and reporting of suspicious activities.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('4.title', {
          fallback: 'Customer Responsibilities and Obligations',
        })}
      >
        <PolicyText>
          {t('4.0', {
            fallback:
              'Coinsmax is committed to ensuring a secure and compliant buy and sell services environment in line with Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) regulations. To maintain the integrity of our services, all customers must adhere to the following operational rules:',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.1', {
            fallback:
              '– No Cash Purchases or Sales: Coinsmax does not accept cash for performing the exchnage Order. All transactions must be conducted using digital means to ensure traceability and transparency.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.2', {
            fallback:
              '– No Third-Party Transactions: Coinsmax does not accept deposits from third parties into a user’s profile, nor does it allow profile management by third parties. Additionally, we do not support joint or shared profiles, ensuring that all accounts remain strictly personal and private.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.3', {
            fallback:
              '– Service Restrictions to Personal Wallets Only: Coinsmax provides buy and sell services exclusively to customers’ personal wallet addresses. Transactions to or from third-party wallets are prohibited, ensuring that each transaction is conducted by the account holder themselves.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.4', {
            fallback:
              '– Documentation Requirements: Coinsmax maintains strict documentation standards. We do not allow exceptions regarding the documents required from users. All customers are required to provide accurate and legitimate identification and supporting documents for verification purposes.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.5', {
            fallback:
              '– Right to Refuse Transactions: Coinsmax reserves the right to refuse any transaction if there is any suspicion of involvement in Money Laundering (ML) or Terrorist Financing (TF).',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.6', {
            fallback:
              '– Transactions will be monitored for suspicious activity, and the company retains the right to act in accordance with its regulatory obligations to protect the system from illicit activity.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.7', {
            fallback:
              '– Suspicious Activity Reporting: In accordance with international law and regulatory guidelines, Coinsmax is not obligated to inform customers if their behavior is reported as suspicious to the relevant authorities. As part of our compliance framework, any suspicious activity may be reported to the appropriate authorities, and actions may be taken without prior customer notification.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('5.title', { fallback: 'Customer Identification (KYC)' })}
      >
        <PolicyText>
          {t('5.0', {
            fallback:
              'Prior to establishing any business relationship, the Company conducts a Know Your Customer (KYC) process.',
          })}
        </PolicyText>
        <PolicyText>
          {t('5.1', {
            fallback:
              'Coinsmax applies a structured and risk-based KYC process for all clients, in accordance with MiCAR and relevant AML/CFT regulations. We are required to verify the identity of every individual authorized to transact on our platform beyond a reasonable doubt.',
          })}
        </PolicyText>
        <PolicyText>
          {t('5.2', {
            fallback:
              'To ensure this, customers must complete an automated identity verification process, which includes biometric checks comparing the ID photo to a live image. This process is supported by trusted external providers. If the verification is inconclusive, our compliance or support team may conduct a manual review and request additional information.',
          })}
        </PolicyText>
        <PolicyText>
          {t('5.3', {
            fallback:
              'If we are unable to confirm the authenticity and ownership of submitted documents, access to services will be restricted.',
          })}
        </PolicyText>
        <PolicyText>
          {t('5.4', {
            fallback:
              'Enhanced Due Diligence (EDD) is applied in cases that present elevated risk, including but not limited to Politically Exposed Persons (PEPs), adverse media findings, and high-risk jurisdictions. Business relationships shall not be established or continued where the risk level is deemed unacceptable. This approach ensures the integrity and compliance of our operations.',
          })}
        </PolicyText>
        <PolicyText>
          {t('5.5', {
            fallback:
              'Anonymous or fictitious accounts are strictly prohibited. Customers from prohibited countries or under sanctions are not accepted.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('6.title', { fallback: 'Ongoing Monitoring' })}
      >
        <PolicyText>
          {t('6.0', {
            fallback:
              'All customer transactions are monitored in real time and retrospectively. Monitoring ensures that transactions are consistent with the customer’s profile and legitimate purpose. Where higher risks are identified, enhanced due diligence is applied.',
          })}
        </PolicyText>
        <PolicyText>
          {t('6.1', {
            fallback:
              'Any activity that raises suspicion is escalated to the Money Laundering Reporting Officer (MLRO) and, if required, reported to the Financial Intelligence Unit (FIU) of Slovakia.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('7.title', {
          fallback: 'Sanctioned Countries and High-Risk Jurisdictions',
        })}
      >
        <PolicyText>
          {t('7.0', {
            fallback:
              'Sanctions Compliance: The Company adheres to all applicable international sanctions, including those imposed by the European Union, United Nations, and other relevant authorities. As part of our AML/CTF compliance, we do not process transactions from countries subject to sanctions or jurisdictions identified as high risk for money laundering or terrorist financing.',
          })}
        </PolicyText>
        <PolicyText>
          {t('7.1', {
            fallback:
              'High-Risk Jurisdictions: We also take into consideration countries with significant AML/CTF risks, such as those identified by FATF, European Commission, and those with weak regulatory frameworks. Customers from such jurisdictions may be subject to enhanced due diligence, or their access to services may be restricted.',
          })}
          <br />
          {t('7.2', {
            fallback:
              'Suspicious Activity and Transactions: Transactions flagged as suspicious or those originating from high-risk jurisdictions will be subject to further scrutiny and, if necessary, suspended or reported to relevant authorities',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('8.title', { fallback: 'Transaction Monitoring' })}
      >
        <PolicyText>
          {t('8.0', {
            fallback:
              'As part of its Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) framework, the Company actively monitors customer activity to detect and assess any potentially suspicious behavior or transactions. In accordance with regulatory requirements, any identified suspicions are promptly reported to the relevant authorities.',
          })}
        </PolicyText>
        <PolicyText>
          {t('8.1', {
            fallback:
              'The Company complies with mandatory reporting thresholds and implements safeguards to prevent tipping off or compromising any ongoing investigations. All processes are handled in line with internal procedures and applicable laws to ensure full regulatory compliance.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('9.title', { fallback: 'Reporting Obligations' })}
      >
        <PolicyText>
          {t('9.0', {
            fallback:
              'In compliance with the applicable legal and regulatory requirements, any identified suspicious activity is promptly reported to the Financial Intelligence Unit (FIU) of the Slovak Republic. The Company shall monitor transactions to detect unusual or suspicious activity. The MLRO is responsible for assessing the report and, where appropriate, filing a Suspicious Transaction Report (STR) with the relevant authority, in accordance with applicable laws and reporting obligations. This includes any transactions or operations that raise concerns related to potential money laundering (ML) or terrorist financing (TF).',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.1', {
            fallback:
              'The Company ensures that reports are submitted without undue delay, and no later than within one business day of detecting such suspicious activity. Additionally, should any transactions meet the threshold defined by relevant regulations, further detailed reports, including customer identity data and transaction details, are provided to the FCIS. These measures are in place to ensure full adherence to anti-money laundering (AML) and counter-terrorist financing (CTF) obligations and to help prevent illegal activities.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.2', {
            fallback:
              'The Company also cooperates fully with regulatory authorities in the investigation and analysis of suspicious transactions to mitigate risks and ensure a secure financial ecosystem.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('10.title', { fallback: 'Customer Obligations' })}
      >
        <PolicyText>
          {t('10.0', {
            fallback: 'Customers are required to:',
          })}
        </PolicyText>
        <List
          className="gap-0"
          values={[
            t('10.1.0', {
              fallback:
                'Provide accurate, complete, and up-to-date information when requested.',
            }),
            t('10.1.1', {
              fallback:
                'Cooperate with any AML/CTF checks or requests for documentation.',
            }),
            t('10.1.2', {
              fallback:
                'Refrain from using the Company’s services for any unlawful, fraudulent, or prohibited activities.',
            }),
          ]}
        />
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('11.title', { fallback: 'Record Keeping & Confidentiality' })}
      >
        <PolicyText>
          {t('11.0', {
            fallback:
              'The Company retains customer identification records, transaction data, and due diligence information for the period required by law. All data is stored securely and processed in compliance with the General Data Protection Regulation (GDPR) and local data protection laws.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('12.title', { fallback: 'Governance and Training' })}
      >
        <PolicyText>
          {t('12.0', {
            fallback:
              'The Company retains customer identification records, transaction data, and due diligence information for the period required by law. All data is stored securely and processed in compliance with the General Data Protection Regulation (GDPR) and local data protection laws.',
          })}
        </PolicyText>
        <PolicyText>
          {t('12.1', {
            fallback:
              'A designated Money Laundering Reporting Officer (MLRO) is responsible for implementing AML/CTF obligations and acting as the contact point with competent authorities.',
          })}
        </PolicyText>
        <PolicyText>
          {t('12.2', {
            fallback:
              'To ensure that all employees and individuals acting on behalf of the Company are equipped with the knowledge to meet the regulatory requirements, the Company conducts regular training on Anti-Money Laundering (AML), Counter-Terrorist Financing (CTF), and Sanctions compliance. This training ensures that all staff members who interact with customers or monitor transactions understand their responsibilities in customer identification, reporting suspicious activity, and maintaining accurate records. The Company is committed to maintaining a well-informed workforce to uphold the highest standards of compliance and security.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('13.title', { fallback: 'Policy Review and Updates' })}
      >
        <PolicyText>
          {t('13.0', {
            fallback:
              'The Company’s AML/CTF Policy is subject to regular review to ensure its continued effectiveness and compliance with applicable laws and regulations. The policy is reviewed at least annually and updated as needed to reflect any changes in relevant legislation, regulatory requirements, business operations, or emerging risks. In addition, any significant developments within the company, such as new products, services, or market expansions, are considered during the review process. The updates are implemented to maintain the highest standards of compliance and to mitigate the risk of money laundering and terrorist financing effectively. This ongoing process ensures that the Company remains fully aligned with evolving regulatory frameworks and industry best practices.',
          })}
        </PolicyText>
        <PolicyText>
          {t('13.1', {
            fallback:
              'Contact Information for Compliance Inquiries: For compliance-related inquiries, please contact our AML Department at: support@coinsmax.io',
          })}
        </PolicyText>
        <PolicyText>
          {t('13.2', {
            fallback:
              'Contact Information for Compliance Inquiries: For compliance-related inquiries, please contact our AML Department at: support@coinsmax.io',
          })}
        </PolicyText>
      </PolicySectionLayout>
    </PolicyLayout>
  );
}
