import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { AdditionalInfoTable } from '@/features/policies/ui/additional-info-table';
import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySectionLayout } from '@/features/policies/ui/policy-section-layout';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { Button } from '@/shared/ui/kit/button';
import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('privacyPolicy');

  return (
    <PolicyLayout>
      <Title size="5xl" as="h1" className="text-center">
        {t('title', { fallback: 'Privacy Policy' })}
      </Title>
      <PolicyText>
        {t('0.0', {
          fallback:
            'Limitless Technologies s.r.o. (“Company” or “we”, “us” or “our”) is dedicated to protecting the privacy rights of our online users and customers (“users” or “you”). This Privacy and Cookie Policy (the “Policy”) applies to the on-line platform (including any applicable mobile applications used to access the same, if available) (collectively the “Platform”) and when you use or visit our website Coinsmax.io (the “Website”), or any of our products or services offered through the Platform and/or the Website (collectively, the “Service”).',
        })}
        <br /> <br />
        {t('0.1', {
          fallback:
            'This Policy is incorporated by reference and forms an integral part of our Terms of Use.',
        })}
        <br /> <br />
        {t('0.2', {
          fallback:
            'This Policy supplements the other notices and is not intended to override them. Terms used within it shall have the meaning(s) given in the Regulation (EU) 2016/679 (General Data Protection Regulation (GDPR)), as applicable.',
        })}{' '}
        <br />
        {t('0.3', {
          fallback:
            'This Policy is designed to help you understand what kind of Personal Data we collect in connection with our services and how we will process and use this Personal Data. When you use our services, you are trusting us with your Personal Data. We understand this is a big responsibility and work hard to protect your Personal Data and put you in control.',
        })}{' '}
        <br /> <br />
        {t('0.4', {
          fallback:
            'By accessing or using our Services, Website, or the Platform, or by creating a profile, you agree that you have read, understand the terms and conditions contained in this Policy. If you do not agree with or are not comfortable with any aspect of this Policy, you should immediately discontinue access or use of the Platform and our Services.',
        })}
      </PolicyText>
      <PolicySectionLayout
        title={t('1.title', {
          fallback: 'Which Personal Data Do We Collect About You?',
        })}
      >
        <PolicyText>
          {t('1.0', {
            fallback:
              'Personal Data is any information which is related to an identified or identifiable natural person. This Policy covers all Personal Data that you voluntarily submit to us and that we obtain from our partners and service providers. This Policy does not apply to anonymized data, as it cannot be used to identify you. Personal Data means any information that is unique to you such as the following personal information and documentation we, our partners or service providers may collect from you',
          })}
        </PolicyText>
        <List
          type="alpha"
          values={[
            t('1.1', {
              fallback:
                'biographical information and contact information such as full legal name, user ID, date of birth, birth place, age, nationality, citizenship, gender, signature, contact details (e.g. phone number and email address, etc.) and residential address;',
            }),
            t('1.2', {
              fallback:
                'supplemental identification information such as government-issued identity documents (e.g. passport, driver’s license, or state identification card, etc.), selfies, photographs and/or videos, social security number, employment information (e.g. company name), proof of residency, including utility bills and visa information;',
            }),
            t('1.3', {
              fallback:
                'Information collected in accordance with the requirements of the laws: Results from Politically Exposed Persons (PEP) screening & sanction screening, any additional Personal Data required for proving Source of Funds (e. g. employment contract, certificate of inheritance, etc.), AML screening, address, ID document, video and e-mail verification, Selfie check, data on the management structure and business activity, etc.',
            }),
            t('1.4', {
              fallback:
                'financial information such as bank account information, payment card primary account number, credit card details, details about your source of funds, tax identification number, information about your income, assets and liabilities, and information relating to economic and trade sanctions lists;',
            }),
            t('1.5', {
              fallback:
                'wallet information such as wallet addresses or multi-coin crypto wallet information, and information related to wallet integrations that you select, ownership information;',
            }),
            t('1.6', {
              fallback:
                'transactional information made using our Services such as digital asset preferences, payment method, date, and/or timestamp, settings, and preferences you select, your inquiries and our responses;',
            }),
            t('1.7', {
              fallback:
                'communication and referral information (including emails, text messages, correspondence sent through the “contact” section of the Platform and call recordings) or information obtained from events or public social networking platforms and your contacts’ phone or email addresses if you choose to refer people to us, along with our responses to you;',
            }),
            t('1.8', {
              fallback:
                'employment information: includes your employment history, education background and income levels;',
            }),
            t('1.9', {
              fallback:
                'marketing information includes your consent and preferences in receiving direct marketing from us and our third parties and your communication preferences;',
            }),
            t('1.10', {
              fallback:
                'other Personal Data or commercial and/or identification information including Personal Data we, in our sole discretion, deem necessary to comply with our legal obligations, such as anti-money laundering laws.',
            }),
          ]}
        />
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('2.title', {
          fallback: 'How Do We Collect Personal Data?',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('2.0', {
            fallback:
              'Personal Data is collected from your use of Services, as well as from trusted service providers who provide us with financial services, know-your-customer services and financial intelligence services We may combine the information that we collect about you from these various sources.',
          })}
        </PolicyText>
        <List
          type="decimal"
          values={[
            t('2.list.0', {
              fallback: 'apply to use our services;',
            }),
            t('2.list.1', {
              fallback: 'create a profile on our Platform;',
            }),
            t('2.list.2', {
              fallback: 'make exchange transactions;',
            }),
            t('2.list.3', {
              fallback: 'give us some feedback or lodge a query.',
            }),
          ]}
        />
        <Text size="xl" color="faded" weight={700}>
          {t('2.1', {
            fallback: 'Data We Collect Automatically',
          })}
        </Text>
        <PolicyText>
          {t('2.2', {
            fallback:
              'When you use the Platform, our servers automatically record information using cookies and other tracking technologies, including information that your browser sends whenever you visit the Platform or your mobile application sends when you are using it. This log data may include your Internet Protocol address, the address of the web page you visited before coming to the Platform, your browser type and settings, the date and time of your request, information about your browser configuration and plug-ins, language preferences, and cookie data.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.3', {
            fallback:
              'In addition to log data, we may also collect information about the device you use for the Platform, including what type of device it is, what operating system you are using, device settings, unique device identifiers, and crash data. Whether we collect some or all this information may depend on what type of device you are using and its settings.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.4', {
            fallback:
              'We may combine this information with other information that we have collected about you, including, where applicable, your full name, username, email address, and other Personal Data.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.5', {
            fallback:
              'We collect information about your current IP address to determine general location data, such as city or region. We do not collect precise physical location information (e.g., GPS coordinates). If you have any questions about how IP-based location data is used, feel free to contact us.',
          })}
        </PolicyText>
        <PolicyText>
          <span className="font-bold">
            {t('2.6', {
              fallback:
                'Information from Third Parties or publicly available sources',
            })}
          </span>{' '}
          <br />
          {t('2.7', {
            fallback:
              'In some cases, we may receive Personal Data about you from a third party, such as a data provider, credit reference agency, or other trusted source. This Personal Data may be used to verify your identity, address, or creditworthiness, and to improve the quality of our services.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.8', {
            fallback:
              'The third parties we receive Personal Data from are carefully selected and are bound by strict confidentiality agreements to protect your Personal Data. They are also subject to applicable data protection laws and regulations, such as the GDPR.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2.9', {
            fallback:
              'We may receive Personal Data about you from various third parties and public sources as set out below: ',
          })}
        </PolicyText>
        <List
          className="gap-0"
          type="decimal"
          values={[
            t('2.list2.0', {
              fallback:
                'Our partner who shares your Personal Data with us so that (a) you can use our services on their behalf; and (b) they can pay money to you (for example, your salary if you are their employee or payment for goods and/or services if you are their supplier);',
            }),
            t('2.list2.1', {
              fallback:
                'analytics providers such as Google based outside the EU;',
            }),
            t('2.list2.2', {
              fallback:
                'advertising networks such as Google based inside OR outside the EU; and',
            }),
            t('2.list2.3', {
              fallback:
                'search information providers Google based inside OR outside the EU;',
            }),
            t('2.list2.4', {
              fallback:
                'Electronic Identity Verification providers from data brokers or aggregators based inside or outside the EU;',
            }),
            t('2.list2.5', {
              fallback:
                'We may also record and verify personal identity documents such as passports electronically including screen grabs;',
            }),
            t('2.list2.6', {
              fallback:
                'Identity data and contact data from publicly availably sources based inside the EU;',
            }),
          ]}
        />
        <PolicyText>
          {t('2.10', {
            fallback:
              'In order to provide contracted services, we may need verify details with Credit Reference agencies, anti-Fraud agencies, Sanction screening and politically exposed persons (PEP) listings.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('3.title', {
          fallback:
            'What Are the Purposes of the Collection and Processing of Data?',
        })}
        className="gap6 flex flex-col"
      >
        <PolicyText>
          <span className="font-bold">
            {t('3.0', {
              fallback:
                'We collect and process your Personal Data for the following purposes:',
            })}
          </span>
        </PolicyText>
        <List
          type="alpha"
          values={[
            t('3.list.0', {
              fallback:
                'To provide and improve our services: We use your Personal Data to provide and improve the Services we offer, including processing transactions and providing customer support.',
            }),
            t('3.list.1', {
              fallback:
                'To process transactions – to allow you to make the purchase order transactions by using your payment devices and through the Platform;',
            }),
            t('3.list.2', {
              fallback:
                'To process transactions – to allow you to make the purchase order transactions by using your payment devices and through the Platform;',
            }),
            t('3.list.3', {
              fallback:
                'To perform our services and payments – we use and share your data with banking, including Electronic Money Institutions, crypto liquidity exchanges and financial service partners such as banking intermediaries, international payment services providers and regulated distribution agents;',
            }),
            t('3.list.4', {
              fallback:
                'To communicate with you: We use your Personal Data to communicate with you, such as sending you updates about your profile with us or our services, responding to your inquiries, and sending you promotional materials. For more information about opting out of certain communications, please see the “Your rights and choices in relation to your Personal Data” section below.',
            }),
            t('3.list.5', {
              fallback:
                'To comply with legal obligations: We may use your Personal Data to comply with legal obligations, such as to comply with tax laws or to respond to subpoenas and other legal requests.',
            }),
            t('3.list.6', {
              fallback:
                'To protect our rights and interests: We may use your Personal Data to protect our rights and interests, such as to enforce our terms of service, to prevent fraud and abuse, and to protect the security of our services.',
            }),
            t('3.list.7', {
              fallback:
                'To personalize your experience: We may use your Personal Data to personalize your experience, such as to provide recommendations and advertisements that are more relevant to you.',
            }),
            t('3.list.8', {
              fallback:
                'To personalize your experience. We may use your Personal Data to analyze how you interact with the Service; to monitor and analyze usage and activity trends; and for other research, analytical, and statistical purposes.',
            }),
            t('3.list.9', {
              fallback:
                'Carry out any other purpose described to you at the time the information was collected.',
            }),
          ]}
        />
      </PolicySectionLayout>
      <PolicySectionLayout
        className="gap-6"
        title={t('4.title', {
          fallback: 'Lawful Basis to Processing',
        })}
      >
        <PolicyText>
          {t('4.0', {
            fallback:
              'When we process your Personal Data, we will only do so using one of the following legal basis:',
          })}
        </PolicyText>
        <List
          type="alpha"
          values={[
            t('4.list.0', {
              fallback:
                'Consent: We have your consent to do so. When consent is the legal basis for our processing, you may withdraw such consent at any time.',
            }),
            t('4.list.1', {
              fallback:
                'Performance of a Contract: We may process your Personal Data to perform our obligations under a contract with you, such as to deliver the services you have requested or to take steps at your request before entering into such a contract.',
            }),
            t('4.list.2', {
              fallback:
                'Legal Obligation: We may process your Personal Data to comply with legal obligations, such as to comply with tax laws or to respond to subpoenas and other legal requests.',
            }),
            t('4.list.3', {
              fallback:
                'Legitimate Interest: We may process your Personal Data for our legitimate interests, such as to improve our services, to communicate with you, and to protect our rights and interests, enforce our Terms of Use and legal notices and for the establishment, exercise and defence of legal claims, conclude corporate transactions (e.g., corporate restructuring, sale or assignment of assets, merger), share your information with third party marketplaces and service providers for adverting purposes, enforce our Terms of Use and prevent fraud illegal activity and/or any violation of our intellectual property rights.',
            }),
          ]}
        />
        <PolicyText>
          {t('4.1', {
            fallback:
              'Note that we may process your Personal Data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground, we are relying on to process your Personal Data.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4.2', {
            fallback:
              'Generally, we do not rely on consent as a legal basis for processing your Personal Data other than in relation to sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        className="gap-6"
        title={t('5.title', {
          fallback: 'Sharing Personal Data with Third Parties',
        })}
      >
        <PolicyText>
          {t('5.0', {
            fallback:
              'We respect your privacy and will not disclose, share, rent, or sell your Personal Data to any third party unless the sharing of your Personal Data is made upon performance of the contract, your specific and explicit request or due to compliance with regulatory requirements or legitimate interest, as set out below.',
          })}
        </PolicyText>
        <List
          type="alpha"
          values={[
            t('5.list.0', {
              fallback:
                'Affiliates. We may disclose the information we collect from you to our affiliates or subsidiaries solely for the purpose of providing the Services and the Platform available  to you; however, if we do so, their use and disclosure of your personally identifiable information will be maintained by such affiliates and subsidiaries in accordance with this Policy.',
            }),
            t('5.list.1', {
              fallback:
                'Service Providers. We may disclose the information we collect from you to third-party vendors, service providers, contractors or agents who perform functions on our behalf (e.g. auditors, accountants, lawyers, credit-checking/reference agencies and fraud prevention agencies, banking institutions, AML and KYC providers), provided such third parties have agreed to only use such information to provide services to us. These third parties will be subject to appropriate data protection obligations and they will only use your Personal Data as described in this Privacy Policy;',
            }),
            t('5.list.2', {
              fallback:
                'Business Transfers. If we are in negotiations with, or are acquired by or merged with another company or entity, if substantially all of our assets are transferred to another company or entity, or as part of a bankruptcy proceeding, we may transfer the information we have collected from you to the other company or entity.',
            }),
            t('5.list.3', {
              fallback:
                'In Response to Legal Process. We also may disclose the information we collect from you in order to comply with the law, a judicial proceeding, court order, or other legal process, such as in response to a subpoena.',
            }),
            t('5.list.4', {
              fallback:
                'To Protect Us and Others. We also may disclose the information we collect from you if we believe it is necessary to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the safety of any person, violations of our Service Agreement or this Policy, or as evidence in litigation in which we are involved.',
            }),
            t('5.list.5', {
              fallback:
                'Aggregate and De-Identified Data. We may collect, process, analyse and share aggregate or de-identified information about Users with third parties and publicly for product development, marketing, advertising, research or similar purposes.',
            }),
          ]}
        />
        <PolicyText>
          {t('5.1', {
            fallback:
              'This list is non-exhaustive and there may be circumstances where we need to share Personal Data with other third parties, unless prohibited under law from doing so.',
          })}
        </PolicyText>
        <PolicyText>
          {t('5.2', {
            fallback:
              'Where necessary (such as when we transfer data to service providers), we put in place appropriate contractual arrangements and security mechanisms to protect the Personal Data shared and to comply with our data protection, confidentiality and security standards and obligations.',
          })}
        </PolicyText>
        <PolicyText>
          {t('5.3', {
            fallback:
              'Note that we may also disclose data to comply with authorized data requests from governmental agencies or judicial warrants. Unless prohibited under law from doing so, we shall notify you about such request.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('6.title', {
          fallback: 'Your Personal Data Rights',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('6.0', {
            fallback:
              'You have certain individual rights regarding the Personal Data that we collect and process about you through the Platform.',
          })}
        </PolicyText>
        <PolicyText>
          {t('6.1', {
            fallback:
              'Pursuant to applicable data protection laws, you may have certain legal rights in respect of the Personal Data which is processed by us including the right to:',
          })}
        </PolicyText>
        <List
          className="gap-6"
          type="disc"
          values={[
            t('6.list.0', {
              fallback:
                'Request access to your Personal Data (commonly known as a “data subject access request”). This enables you to receive a copy of the Personal Data we hold about you and to check that we are lawfully processing it.',
            }),
            t('6.list.1', {
              fallback:
                'Request correction of the Personal Data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.',
            }),
            t('6.list.2', {
              fallback:
                'Request erasure of your Personal Data. This enables you to ask us to delete or remove Personal Data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your Personal Data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your Personal Data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.',
            }),
            t('6.list.3', {
              fallback:
                'Object to processing of your Personal Data where we are relying on a legitimate interest (or those of a third party) and there is something about your situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your Personal Data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate interest to process your information which override your rights and freedoms.',
            }),
            t('6.list.4', {
              fallback:
                'Request restriction of processing of your Personal Data. This enables you to ask us to suspend the processing of your Personal Data in the following scenarios: (a) if you want us to establish the data’s accuracy; (b) where our use of the data is unlawful but you do not want us to erase it; (c) where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or (d) you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.',
            }),
            t('6.list.5', {
              fallback:
                'Request the transfer of your Personal Data to you or to a third party. We will provide to you, or a third party you have chosen, your Personal Data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.',
            }),
            t('6.list.6', {
              fallback:
                'Withdraw consent at any time where we are relying on consent to process your Personal Data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent;',
            }),
            t('6.list.7', {
              fallback:
                'Not to be the subject only to automated processing, including profiling. You have a right to demand that processing of your Personal Data would be reviewed by a real person and to object to the decision made by automated means.',
            }),
            t('6.list.8', {
              fallback:
                "To submit an appeal on the actions or inactions of us, related to the implementation of the data subject's rights to the Data Protection authority that is located in member state of the European Union where you reside; and",
            }),
            t('6.list.9', {
              fallback:
                "You are entitled to compensation, which you must apply for to the competent court that is located in member state of the European Union where you reside, if you have suffered damage as a result of a violation of the data subject's rights.",
            }),
          ]}
        />
        <PolicyText>
          {t('6.2', {
            fallback:
              'Please note that notwithstanding the foregoing, there may be circumstances in which we are unable to accommodate a request to edit, update, access, or delete an account profile or Personal Data. This includes but is not limited to:',
          })}
        </PolicyText>
        <List
          className="gap-0"
          type="disc"
          values={[
            t('6.list2.0', {
              fallback:
                'any basis where such request can be denied under applicable law;',
            }),
            t('6.list2.1', {
              fallback:
                'where we need to retain the information to comply with international or national laws or for accounting or tax purposes;',
            }),
            t('6.list2.2', {
              fallback:
                'where we need to comply with a civil, criminal, or regulatory inquiry, investigation, subpoena, or summons by state, or local authorities;',
            }),
            t('6.list2.3', {
              fallback:
                'where we need to cooperate with law enforcement agencies concerning conduct or activity that the business, service provider, or third party reasonably and in good faith believes may violate laws;',
            }),
            t('6.list2.4', {
              fallback:
                'where we need to retain information to exercise or defend legal claims;',
            }),
            t('6.list2.5', {
              fallback:
                'where the information contains legal privilege or proprietary information of another party; or where complying with the request would compromise others’ privacy or other legitimate rights.',
            }),
          ]}
        />
      </PolicySectionLayout>
      <PolicySectionLayout
        className="gap-6"
        title={t('7.title', {
          fallback: 'Exercising Your Rights',
        })}
      >
        <PolicyText>
          {t('7.0', {
            fallback:
              'We acknowledge your right to access and change the Personal Data we collect and process. If you wish to access or to correct, amend, or delete Personal Data, please send us an email to dpo@coinsmax.io',
          })}
        </PolicyText>
        <PolicyText>
          {t('7.1', {
            fallback:
              'You may also designate an authorized agent to make a request on your behalf by verifying your identity and providing the agent with a written permission to make the request on your behalf.',
          })}
        </PolicyText>
        <PolicyText>
          {t('7.2', {
            fallback:
              'Subject to applicable law, you can freely exercise these rights and choices. We will not charge you different prices or provide different quality of services unless those differences are related to your information or otherwise permitted by law. Once we receive your request from you, we may need to request additional information from you to verify your identity or process your request.',
          })}
        </PolicyText>
        <PolicyText>
          {t('7.3', {
            fallback:
              'If we determine that we cannot respond to any request in any particular instance, we will provide you with an explanation of why that determination has been made and a contact point for any further inquiries. To protect your privacy, we will take commercially reasonable steps to verify your identity before responding to any request under this provision, including complying with any applicable legal requirement for verifying your identity.',
          })}
        </PolicyText>
        <PolicyText>
          {t('7.4', {
            fallback:
              'We will respond to your requests without undue delay and in any event within one month of receipt of the request. However, period may be extended up to two months as per circumstances designated by GDPR.',
          })}
        </PolicyText>
        <PolicyText>
          {t('7.5', {
            fallback:
              'You can also complain to the State Data Protection Inspectorate (Valstybinė duomenų apsaugos inspekcija) if you are unhappy with how we have used your data. We would, however, appreciate the chance to deal with your concerns before you approach the State Data Protection Inspectorate so, please contact us in the first instance.',
          })}
        </PolicyText>
        <PolicyText>
          {t('7.6', {
            fallback: 'The State Data Protection Inspectorate’s address:',
          })}
        </PolicyText>
        <PolicyText>
          {t('7.7', {
            fallback: 'Budova Park One,',
          })}
          <br />
          {t('7.8', {
            fallback: 'Námestie 1. mája 18,',
          })}
          <br />
          {t('7.9', {
            fallback: '811 06 Bratislava, Slovakia',
          })}
          <br />
          {t('7.10', {
            fallback: 'Email: statny.dozor@pdp.gov.sk',
          })}
          <br />
          {t('7.11', {
            fallback: 'Website: https://dataprotection.gov.sk/ ',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('8.title', {
          fallback: 'Links to Other Websites',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('8.0', {
            fallback:
              'The Services may contain links to other websites. Please note that we are not responsible for the privacy or information security practices of other websites. These other websites and applications maintain their own policies regarding cookies and the collection and use of Personal Data. We encourage you to review and assess the provisions of those policies yourself.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('9.title', {
          fallback: 'Transfer of Your Personal Data',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('9.0', {
            fallback:
              'We may transfer your personal data to recipients located outside the European Economic Area (EEA) or outside your country of residence. The countries to which we may transfer your Personal Data may not have the same level of data protection as your country of residence.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.1', {
            fallback:
              'We ensure that appropriate safeguards are in place to protect your Personal Data, including the use of Standard Contractual Clauses approved by the European Commission, and Binding Corporate Rules for our group companies, where required by law.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9.2', {
            fallback:
              'If you would like to receive more information about the safeguards we have in place for international transfers, or if you have any concerns about the transfer of your Personal Data, please contact us.',
          })}
        </PolicyText>
        <div className="flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] p-6">
          <PolicyText>
            <span className="font-bold">
              {t('9.3', {
                fallback: 'International Data Transfers',
              })}
            </span>
          </PolicyText>
          <PolicyText>
            {t('9.4', {
              fallback:
                'We may transfer your Personal Data to recipients located outside the European Economic Area (EEA), including to countries that do not offer the same level of data protection as your home jurisdiction. In such cases, we ensure that appropriate safeguards are in place, as required by Chapter V of the General Data Protection Regulation (GDPR).',
            })}
          </PolicyText>
          <div className="flex flex-col">
            <PolicyText>
              {t('9.5', {
                fallback: 'These safeguards may include:',
              })}
            </PolicyText>
            <List
              type="disc"
              values={[
                t('9.6', {
                  fallback:
                    'Transfers to countries deemed by the European Commission to provide an adequate level of data protection (adequacy decisions);',
                }),
                t('9.7', {
                  fallback:
                    'The use of Standard Contractual Clauses (SCCs) adopted by the European Commission to ensure data protection obligations are met;',
                }),
                t('9.8', {
                  fallback:
                    'Where applicable, Binding Corporate Rules (BCRs) for intra-group transfers;',
                }),
                t('9.9', {
                  fallback:
                    'Your explicit consent, provided you are informed of the possible risks;',
                }),
                t('9.10', {
                  fallback:
                    'Transfers necessary for the performance of a contract with you or in your interest (e.g. payment processing, customer support).',
                }),
              ]}
            />
            <PolicyText>
              {t('9.11', {
                fallback:
                  'We conduct transfer impact assessments (TIAs) where required to evaluate the laws and practices of the destination country in relation to EU data protection standards. In cases where additional technical or organizational measures are needed to supplement SCCs, we will implement them accordingly.',
              })}
              <br />
              {t('9.12', {
                fallback:
                  'If you would like more information on the specific mechanism used for international transfers of your Personal Data, or if you would like to request a copy of the applicable safeguards (e.g., SCCs), please contact us at: dpo@coinsmax.io.',
              })}
            </PolicyText>
          </div>
        </div>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('10.title', {
          fallback: 'Use of Cookies',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('10.0', {
            fallback:
              "When you access or use our Website, we may use industry standard technologies such as “cookies” or similar technologies, which store certain information on your computer and which will allow us to enable automatic activation of certain features, thereby improving the overall user experience. You may restrict the use of certain cookies by modifying your preferences through the Website's cookie settings link. Most web browsers provide the option to erase cookies from your device, block their acceptance, or receive a warning prior to storage. However, blocking or erasing cookies may limit your online experience.",
          })}
        </PolicyText>
        <PolicyText>
          {t('10.1', {
            fallback:
              'If you do not wish your browser to allow us to use trackers, please use your browser’s “Do Not Track” option. Our system is set to respond to such signals.',
          })}
        </PolicyText>
        <PolicyText>
          {t('10.2', {
            fallback:
              'Further information on how We use cookies and other tracking mechanisms is laid out in our Cookie Policy.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('11.title', {
          fallback: 'Security',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('11.0', {
            fallback:
              'We take appropriate organizational and technical security measures to maintain the security and integrity of our service and prevent unauthorized access to it or use thereof through generally accepted industry standard technologies and internal procedures.',
          })}
        </PolicyText>
        <PolicyText>
          {t('11.1', {
            fallback:
              'Please note, however, that there are inherent risks in transmission of information over the Internet or other methods of electronic storage, and we cannot guarantee that unauthorized access or use will never occur.',
          })}
        </PolicyText>
        <PolicyText>
          {t('11.2', {
            fallback:
              'We will comply with applicable law in the event of any breach of the security, confidentiality, or integrity of your Personal Data and will inform you of such breach if required by applicable law.',
          })}
        </PolicyText>
        <PolicyText>
          {t('11.3', {
            fallback:
              'To the extent that we implement the required security measures under applicable law, we shall not be responsible or liable for unauthorized access, hacking, or other security intrusions or failure to store or the theft, deletion, corruption, destruction, damage, or loss of any data or information included in the Personal Data.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('12.title', {
          fallback: 'Data protection of using digital assets and blockchains',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('12.0', {
            fallback:
              'Your use of digital assets may be recorded on a public blockchain. Public blockchains are distributed ledgers, intended to immutably record transactions across wide networks of computer systems. Many blockchains are open to forensic analysis which can lead to re-identification of transacting individuals and the revelation of Personal Data, especially when blockchain data is combined with other data.',
          })}
        </PolicyText>
        <PolicyText>
          {t('12.1', {
            fallback:
              'As blockchains are decentralized or third-party networks which are not controlled or operated by the Company, we are not able to erase, modify, or alter Personal Data on such networks.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('13.title', {
          fallback: 'Data Retention',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('13.0', {
            fallback:
              'We retain your Personal Data as long as required under applicable law and as long as you use our Services. We will cease to retain your Personal Data, or remove the means by which the Personal Data can be associated with particular individuals, as soon as it is reasonable to assume that:',
          })}
        </PolicyText>
        <List
          type="alpha"
          values={[
            t('13.list.0', {
              fallback:
                'the purpose for which that Personal Data was collected is no longer being served by its retention; and',
            }),
            t('13.list.1', {
              fallback:
                'retention is no longer necessary for legal, accounting or business purposes.',
            }),
          ]}
        />
        <PolicyText>
          {t('13.1', {
            fallback:
              'Please note that certain laws may require us to retain records of transactions or profile for a certain period of time, for example The Law on the Prevention of Money Laundering and Terrorist Financing of the Republic of Slovakia',
          })}
        </PolicyText>
        <PolicyText>
          {t('13.2', {
            fallback:
              'To determine the appropriate retention period for Personal Data, we consider the amount, nature, and sensitivity of the Personal Data, the potential risk of harm from unauthorized use or disclosure of your Personal Data, the purposes for which we process your Personal Data and whether we can achieve those purposes through other means, and the applicable legal requirements and recommendations.',
          })}
        </PolicyText>
        <div className="flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] p-6">
          <PolicyText>
            <span className="font-bold">
              {t('13.3', {
                fallback: 'How long do we store your information?',
              })}
            </span>
          </PolicyText>
          <PolicyText>
            {t('13.4', {
              fallback:
                'We will not retain your information longer than necessary for the purposes of processing, except as required by law, which may mandate a longer retention period:',
            })}
          </PolicyText>
          <List
            type="disc"
            values={[
              t('13.list2.0', {
                fallback:
                  'We store copies of documents confirming the client’s identity (e.g., identity documents, beneficiary identity data, documentation of accounts and agreements, and other information related to the customer application and due diligence process), correspondence related to business relations, and records of monetary or crypto transactions (e.g., documents, data, and other legally valid information confirming or relating to monetary or crypto transactions) for up to 8 years from the date of the end of the business relationship with the client.',
              }),
              t('13.list2.1', {
                fallback:
                  'Recruitment Data: We process and retain Personal Data obtained through our recruitment processes only for as long as necessary to assess your application, in accordance with applicable data protection laws and regulations. With your explicit consent, we may retain your information for a longer period in order to consider you for future employment opportunities.',
              }),
              t('13.list2.2', {
                fallback:
                  'Marketing Communications: We will process your Personal Data for marketing purposes for the duration of your relationship with us and for a period of up to three (3) years thereafter, based on our legitimate interest or your prior consent, unless you opt out of receiving such communications at any time.',
              }),
            ]}
          />
        </div>
        <PolicyText>
          <span className="font-bold">
            {t('13.5', {
              fallback:
                'Additional information on the data retention period below',
            })}
          </span>
        </PolicyText>
        <AdditionalInfoTable />
        <div className="flex items-center justify-center gap-3">
          <Link href="https://exchange.coinsmax.io/register">
            <Button variant="secondary">
              {t('13.6', {
                fallback: 'Join Now',
              })}
            </Button>
          </Link>
          <Link href="/contact-us">
            <Button>
              {t('13.7', {
                fallback: 'Contact Us',
              })}
            </Button>
          </Link>
        </div>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('14.title', {
          fallback: 'Marketing And Online Communication',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('14.0', {
            fallback:
              'We may process your Personal Data to send you marketing communications (e.g., email marketing, exclusive offers, etc.). In some cases, we will obtain your explicit consent to do so. In other instances, we may rely on legitimate business interests to send you such communications, in accordance with applicable data protection laws.',
          })}
        </PolicyText>
        <PolicyText>
          {t('14.1', {
            fallback:
              'If you are a new customer, we will contact you by electronic means (email or SMS) for marketing purposes only if you have consented to such communication. If you are a current customer, we will only contact you by electronic means with information about our Services that are similar to those which were the subject of a previous sale or negotiations of a sale to you.',
          })}
        </PolicyText>
        <PolicyText>
          {t('14.2', {
            fallback:
              'If you do not want us to use your Personal Data for direct marketing purposes or to pass your Personal Data on to third parties for marketing purposes, you can withdraw your consent by logging into your account or by contacting us at dpo@coinsmax.io. Direct marketing includes any communications to you that are only based on advertising or promoting products and services',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('15.title', {
          fallback: 'Children under 18',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('15.0', {
            fallback:
              'Our Services are not intended for individuals under the age of 18. We do not knowingly collect or process personal data from individuals under 18 without appropriate legal basis, such as parental consent where required. If we become aware that we have collected personal data from a child without the necessary legal basis, we will delete such information in accordance with applicable law.',
          })}
        </PolicyText>
        <PolicyText>
          {t('15.1', {
            fallback:
              'If you have reasons to suspect that we collected Personal Data from children under the age of eighteen (18), please notify us at dpo@coinsmax.io.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('16.title', {
          fallback: 'How to Contact Us',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('16.0', {
            fallback:
              'If you have questions or concerns regarding this Policy or if you have a complaint, please contact us by our appointed Data Protection Officer (DPO) at dpo@coinsmax.io. If we are unable to satisfactorily address your concerns, you have the right to communicate with a relevant supervisory authority. We can direct you to the relevant supervisory authority in your jurisdiction.',
          })}
        </PolicyText>
        <div className="flex flex-col gap-6 border border-[rgba(255,255,255,0.1)] p-6">
          <PolicyText>
            <span className="font-bold">
              {t('16.1', {
                fallback:
                  'If you have any additional questions or concerns, you can also contact us via:',
              })}
            </span>
          </PolicyText>
          <PolicyText>
            <Link href="mailto:support@coinsmax.io">
              Email: support@coinsmax.io.
            </Link>
            <br />
            <Link href="tel:+421233058122">
              {t('16.2', {
                fallback: 'Phone number: +421233058122',
              })}
            </Link>
            <br />
            {t('16.3', {
              fallback:
                'Address: Černyševského 1287/10, 851 01 Bratislava – Petržalka, Slovak Republic',
            })}
            <br />
          </PolicyText>
          <PolicyText>
            {t('16.4', {
              fallback: 'Business Hours:',
            })}
            <br />
            {t('16.5', {
              fallback: 'Weekdays: GMT 06:00 – 23:00 | EST 01:00 – 18:00',
            })}
            <br />
            {t('16.6', {
              fallback: 'Weekends: Closed',
            })}
          </PolicyText>
        </div>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('17.title', {
          fallback: 'Updates to the Privacy Policy',
        })}
        className="gap-6"
      >
        <PolicyText>
          {t('17.0', {
            fallback:
              'We reserve the right to alter, amend or modify this Policy from time to time, in our sole discretion. We will provide you with notice of such changes by sending you an email, providing notice on the homepage of the Website and/or by posting the amended Policy on the Platform and updating the “Last Updated” date at the bottom of the Policy. The amended Policy will be deemed effective immediately upon posting on the Platform. Your continued use of the Platform and/or our Services constitutes your agreement to be bound by any such changes to this Policy. If you do not agree with this Policy or any amendment to it, you should discontinue access and use of the Platform and our Services.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicyText>
        {t('18.title', {
          fallback: 'Last updated 9 September 2025.',
        })}
      </PolicyText>
    </PolicyLayout>
  );
}
