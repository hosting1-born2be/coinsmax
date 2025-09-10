import { getTranslations } from 'next-intl/server';

import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicySectionLayout } from '@/features/policies/ui/policy-section-layout';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { List } from '@/shared/ui/kit/list';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export default async function ComplaintsProcedurePage() {
  const t = await getTranslations('complaintsProcedure');

  return (
    <PolicyLayout>
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <Title size="5xl" as="h1" className="text-center max-md:text-[32px]">
          {t('title', { fallback: 'Complaints Handling Procedures' })}
        </Title>
        <Text size="xl" color="faded">
          {t('effectiveFrom', { fallback: 'Effective from September 9, 2025' })}
        </Text>
      </div>
      <PolicySectionLayout
        className="gap-6"
        title={t('0.title', { fallback: 'INTRODUCTION' })}
      >
        <PolicyText>
          {t('0.0', {
            fallback:
              'Limitless Technologies s.r.o. (“Limitless” or “Company”, “we”, “us”, “our”) is a crypto-asset service provider based in the Slovak Republic. We provide high-quality crypto-assets exchange services focusing on crypto-asset wallets, enabling the exchange between fiat currency and crypto-assets, as well as among different crypto-assets (“Services”). We give top priority to your experience, and we are committed to paying due regard to the interests and needs of each and all of you, including fair, clear and not misleading communication. Our complaints handling procedure adheres (where relevant) to the Markets in Crypto-Assets (MiCA) Regulation (EU) 2023/1114, effective January 1, 2025, as well as to the Company’s Terms and Conditions, which are governed by and shall be interpreted in accordance with:',
          })}
        </PolicyText>
        <List
          type="disc"
          values={[
            t('0.list.0', {
              fallback:
                'the Civil Code of the Slovak Republic (Act No. 40/1964 Coll.),',
            }),
            t('0.list.1', {
              fallback:
                'the Act on Consumer Protection (Act No. 250/2007 Coll.),',
            }),
            t('0.list.2', {
              fallback:
                'the Act on the Prevention of Money Laundering and Terrorist Financing (Act No. 297/2008 Coll.),',
            }),
            t('0.list.3', {
              fallback: 'the Act on Payment Services (Act No. 492/2009 Coll.),',
            }),
            t('0.list.4', {
              fallback:
                'resolutions and instructions of the National Bank of Slovakia (Národná banka Slovenska – NBS),',
            }),
            t('0.list.5', {
              fallback:
                'the Financial Intelligence Unit of the Slovak Republic (Finančná spravodajská jednotka – FSJ),',
            }),
            t('0.list.6', {
              fallback:
                'the Tax authorities of the Slovak Republic (Finančná správa SR),',
            }),
            t('0.list.7', {
              fallback:
                'as well as any other applicable legal acts and regulatory requirements updated from time to time.',
            }),
          ]}
        />
        <PolicyText className="pl-6" flex>
          <span>1.1.1</span>
          {t('0.1', {
            fallback:
              'As part of these arrangements, we employed complaints handling procedures to ensure that any complaints are resolved as quickly as possible and, where necessary, trigger an internal review into the quality of Service being provided and whether or not it can be improved.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>1.2</span>
          {t('0.2', {
            fallback:
              'Below you will find a procedure, that indicates main principles and guidance to be followed in the event you are not satisfied with our Services and would like to file a complaint to us.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        className="gap-6"
        title={t('1.title', { fallback: '2. INITIATION OF COMPLAINT' })}
      >
        <PolicyText flex>
          <span>2.1</span>
          {t('1.0', {
            fallback:
              'We consider a Complaint as an expression of dissatisfaction of our Services, irrespective of whether it is justified or not, related to our products / Services or the complaints handling process itself, where a response or resolution is explicitly or implicitly expected.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.2</span>
          {t('1.1', {
            fallback:
              'An eligible Complaint may be made by any person who is directly affected by the way we have provided our Services and who can make a complaint in respect thereof. Therefore, you may file the complaint respectively to us, if you are:',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>2.2.1</span>
          {t('1.2', {
            fallback:
              'individual client (natural person/consumer) that uses our Services, or',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>2.2.2</span>
          {t('1.3', {
            fallback:
              'a legal representative of any individual client (of consumer) of ours.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span>2.3</span>
          {t('1.4', {
            fallback:
              'Our employees are always conscious that, although an ineligible complaint may be made, the issue raised may still have an impact on the quality of our Services, therefore on such a Complaint and, our respective employees will still seek to review and to respond to all of such Complaints on a case-by-case basis.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        className="gap-6"
        title={t('2.title', { fallback: '3. COMPLAINTS HANDLING PROCEDURE' })}
      >
        <PolicyText flex>
          <span className="text-white">3.1</span>
          <span className="text-white">
            {t('2.0', {
              fallback: 'File a complaint',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.1.1</span>
          {t('2.1', {
            fallback:
              'If such situation would occur under which you find yourself dissatisfied with our Services, at all times you are able to express your Complaints via the following means:',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.1.1</span>
          {t('2.2', {
            fallback:
              'Via E-mail: as a first instance for simple daily and / or operational questions / issues via e-mail: complaints@coinsmax.io. The complaints received in this instance are addressed by our Customer Support Team Lead. If the Customer Support Team Lead cannot assist you with a variety of issues quickly and efficiently or, on the rare occasions they are not able to assist directly, the complaint you filed will be able to escalated to our Chief Compliance Officer / Compliance Officer;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.1.2</span>
          {t('2.3', {
            fallback:
              'Via the Customer service portal on the web  ticketing system;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.1.3</span>
          {t('2.4', {
            fallback:
              'Via post by sending the complaint in paper form to our address at: Černyševského 1287/10, 851 01 Bratislava, Slovak Republic',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.1.4</span>
          {t('2.5', {
            fallback:
              'If You have questions or concerns regarding data protection or Privacy Policy or if you have a related Complaint, please contact us by our appointed Data Protection Officer (DPO) at dpo@coinsmax.io or via the standard contact methods listed above. When handling complaints related to data protection, we act in accordance with both the GDPR and the applicable national legal acts enforced by supervisory authorities in the field of data protection. Therefore, our handling of data protection-related complaints (including the outcomes of such reviews) may also change in line with best market practices and the requirements of supervisory authorities.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.1.2</span>
          {t('2.6', {
            fallback:
              'To help us investigate and resolve Complaints effectively, competently, diligently and impartially, you will be instructed to provide the following information:',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.2.1</span>
          {t('2.7', {
            fallback: 'Fill the Complaint Form.',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.2.2</span>
          {t('2.8', {
            fallback:
              'your full name, address, e-mail address and contact phone number(s);',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.2.3</span>
          {t('2.9', {
            fallback:
              'a description of the Complaint (i.e., a description of the issue, the date and time that the issue occurred, your willingness on how it would consider the Complaint would have to be resolved, etc.);',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.2.4</span>
          {t('2.10', {
            fallback:
              'full reference of the crypto-asset service or agreement to which the Complaint relates (i.e. name of the crypto-asset service provider, crypto-asset service reference number (if any), or other references of the relevant transactions',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.2.5</span>
          {t('2.11', {
            fallback:
              'any additional documentation, facts or information that may support the complaint;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.2.6</span>
          {t('2.12', {
            fallback:
              'Description of damage, loss or detriment caused (where relevant);',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.1.2.7</span>
          {t('2.13', {
            fallback:
              'personal data of the legal representative (if applicable) (a power of attorney or other official document as proof of the appointment of the representative)',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.1.3</span>
          {t('2.14', {
            fallback:
              'Aiming for the most efficient Complaint handling procedure, we recommend submitting your Complaint using the complaint form, which can be accessed here. However, we may also accept other form for complaints purposes as it may be deemed convenient for you. In such case, please make sure that you indicate all circumstance in detail, as specified in the Complaint form, for you to understand the subject matter and other key details as well as the main problem(s) of the complaint, aiming to provide feedback to you.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.1.4</span>
          {t('2.15', {
            fallback:
              'Your complaint will be communicated to our Customer Support Team Lead and the Chief Compliance Officer immediately or as soon as practicable, upon receipt of the complaint. If the Complaint is related to data protection or concerns our Privacy Policy, it will be communicated additionally to our  Data Protection Officer.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.1.5</span>
          {t('2.16', {
            fallback:
              'You may file the complaint in Slovakian, English or in any official language of the European Union, which is also an official language of the Member State of the European Union where our Services are provided.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.1.6</span>
          {t('2.17', {
            fallback:
              'Filing of the Complaint is free of charge. Should you require assistance in making / filing the complaint, reasonable assistance may be provided from our side free of charge and in a timely manner by our Customer Support Team.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">3.2</span>
          <span className="text-white">
            {t('2.18', {
              fallback: '3.2 Send acknowledgement to the complaint',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.2.1</span>
          {t('2.19', {
            fallback:
              'Upon receipt of any complaint, our respective department will be responsible for acknowledging your complaint within 5 business days. You will receive a written acknowledgment of the complaint received. Such acknowledgment will include information about estimated timeframes for our response to your complaint also the contact details of the Company representative to be contacted for any queries related to the Complaint. Where a complaint has been found to be inadmissible, the Company should inform You of its decision and provide the You with the reasons for the inadmissibility. By informing You about the acknowledged Complaint, the Company ensures that the received Complaints are recorded in the Complaints Registry',
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">3.3</span>
          <span className="text-white">
            {t('2.20', {
              fallback: 'Reviewing / Assessment of complaint',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.3.1</span>
          {t('2.21', {
            fallback:
              'We will carefully evaluate the Complaint along with related departments, if any, to ensure a high-quality response within an appropriate time, which will include the consideration of the Complaint and whether this can be resolved immediately or whether an investigation is required.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.3.2</span>
          {t('2.22', {
            fallback:
              'When reviewing your Complaint, we will pay due regard to the interests of yours and treat you fairly, assessing the following matters:',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.3.2.1</span>
          {t('2.23', {
            fallback:
              'whether Complaint is clear and contains all relevant information necessary for the handling;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.3.2.2</span>
          {t('2.24', {
            fallback: 'subject of the Complaint;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.3.2.3</span>
          {t('2.25', {
            fallback: 'whether the Complaint should be upheld;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.3.2.4</span>
          {t('2.26', {
            fallback:
              'that remedial action and / or redress may be appropriate for you;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.3.2.5</span>
          {t('2.27', {
            fallback: 'the root cause of the Complaint; and',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.3.2.6</span>
          {t('2.28', {
            fallback: 'whether the Complaint could have been prevented.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.3.3</span>
          {t('2.29', {
            fallback:
              'If the investigation results shows that the root cause of the Complaint is because of our system or operational flaws, this should be identified and acknowledged and, where appropriate, a restitution may be offered to You.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.3.4</span>
          {t('2.30', {
            fallback:
              'If the investigation concludes that the subject matter of the Complaint was not caused by any negligence, willful misconduct or default of ours or it was caused by inevitable and unpredictable factors, we will explain this to you by providing You with the relevant information or facts on which the investigation conclusion has based.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">3.4</span>
          <span className="text-white">
            {t('2.31', {
              fallback: 'Prioritization of complaints',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.4.1</span>
          {t('2.32', {
            fallback:
              'To ensure a structured and effective complaint handling process, we prioritize complaints based on their potential impact on our Services, You and our regulatory obligations. Complaints that pose a higher risk, such as legal violations, data breaches, fraud or significant financial losses, are handled with urgency, while lower-risk complaints follow our standard complaint resolution process.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">3.5</span>
          <span className="text-white">
            {t('2.33', {
              fallback: 'Communication with you',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.5.1</span>
          {t('2.34', {
            fallback:
              'After assessing the complaint and / or conduction of an investigation against the complaint, we will issue a final response with its findings and the proposed solutions (if any) to you via the same communication channel that you used to submit the complaint, unless you will request us to use a different method (form) of response.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.5.2</span>
          {t('2.35', {
            fallback:
              'Notably, you will always be answered in writing. We aim to provide a response to your Complaint within 15 business days starting from the date of receiving the complaint. However, if your complaint relates to a potential fraud case, it will be prioritized, and a response will be provided within soon as possible, if feasible, within 10 (ten) business days or 15 business days. In exceptional cases, where the Complaint cannot be resolved within the standard timeframes as indicated earlier, we will notify you thereof and indicate the circumstances of the delay in submitting the complaint, as well as the term by which the complaint will be examined and provided to you. In any event, the total resolution period will not exceed 35 business days from the date of submission your complaint.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.5.3</span>
          {t('2.36', {
            fallback:
              'In case when the resolution provided and your Complaint is rejected or partially satisfied, we oblige to state the reasons for the refusal to satisfy the Complaint, indicate other means of protection of the interests of your, if possible, including but not limited to possible means of dispute settlement and courts.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.5.4</span>
          {t('2.37', {
            fallback:
              'Although a transitional period for obtaining a MICA-related license is currently in effect in Slovakia, in the interest of maximum transparency, we inform you that in certain cases National Bank of Slovakia also provides opinions/answers on matters related to cryptocurrencies. You therefore have the right to contact the National Bank of Slovakia; however, during the transitional period, National Bank of Slovakia, acting in accordance with applicable legislation, may determine that such a complaint does not meet its admissibility criteria. Please be informed, that Customers, who are not satisfied with the Company’s response, may report their Complaint to the local governmental authority, which acts as a supervisory authority of the Company according MICA, i.e., National Bank of Slovakia. The Complainant may submit a complaint to National Bank of Slovakia, in Slovakian or English language, by filling in the application form as specified in the website of the National Bank of Slovakia and sending it in writing or by electronic means to National Bank of Slovakia to this address: Imricha Karvaša 1, 813 25 Bratislava, or via email: nbs@nbs.sk. Therefore, this information is provided for transparency purposes only, and we cannot guarantee that National Bank of Slovakia will accept your complaint or dispute as falling within its competence. Nevertheless, you may, in all cases, address National Bank of Slovakia with general inquiries.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.5.5</span>
          {t('2.38', {
            fallback:
              'However, you should be aware that depending on the background of the complaint, different governmental authorities may be responsible for handling such complaints (i.e., Slovak Trade Inspection (SOI) – consumer protection, Address: Prievozská 32, 827 99 Bratislava 27; Email: info@soi.sk.).',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.5.6</span>
          {t('2.39', {
            fallback:
              'If the Complaint is related to Data Protection / GDPR, please be informed that Customers who are not satisfied with the Company’s response are entitled to report their Complaint to theOffice for Personal Data Protection (ÚOOÚ SR). The following contact details shall be provided to the Customer: Hraničná 12, 820 07 Bratislava 27; Email: statny.dozor@pdp.gov.sk; website: https://dataprotection.gov.sk. When handling complaints related to data protection, we act in accordance with both the GDPR and the applicable national legal acts enforced by supervisory authorities in the field of data protection. Therefore, our handling of data protection-related complaints (including the outcomes of such reviews) may also change in line with best market practices and the requirements of supervisory authorities.',
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">3.6.1</span>
          <span className="text-white">
            {t('2.40', {
              fallback: 'Closing the Complaint & Record keeping',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.6.1.1</span>
          {t('2.41', {
            fallback: 'We will consider a complaint as resolved, when:',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.1.1</span>
          {t('2.42', {
            fallback: 'we have sent a final response; or',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.1.2</span>
          {t('2.43', {
            fallback: 'you have accepted any redress offered, in writing;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.1.3</span>
          {t('2.44', {
            fallback:
              'The Supervisory Authority has provided a final decision regarding the specific complaint; or',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.1.4</span>
          {t('2.45', {
            fallback:
              'The court has issued a final decision regarding the specific complaint.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.6.2</span>
          {t('2.46', {
            fallback:
              'We keep and maintain a complaint registry each complaint received. The information kept on record includes:',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.1</span>
          {t('2.47', {
            fallback: 'your name;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.2</span>
          {t('2.48', {
            fallback: 'date and description of the complaint;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.3</span>
          {t('2.49', {
            fallback:
              'email address associated with you and your user profile;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.4</span>
          {t('2.50', {
            fallback:
              'in certain  cases, your user profile ID number and phone number associated with your user’s profile;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.5</span>
          {t('2.51', {
            fallback:
              'when applicable, personal data of your legal representative;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.6</span>
          {t('2.52', {
            fallback: 'date and method of receipt of the complaint;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.7</span>
          {t('2.53', {
            fallback: 'date of the reply to you;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.8</span>
          {t('2.54', {
            fallback: 'ongoing status report;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.9</span>
          {t('2.55', {
            fallback:
              'general information about the complaint, with short content;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.10</span>
          {t('2.56', {
            fallback: 'Service or products addressed in the complaint;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.11</span>
          {t('2.57', {
            fallback: 'any redress offered by us;',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.12</span>
          {t('2.58', {
            fallback: 'final decision; and',
          })}
        </PolicyText>
        <PolicyText className="pl-12" flex>
          <span>3.6.2.13</span>
          {t('2.59', {
            fallback:
              'the  copies of documentation(s) and all relevant communication with you.',
          })}
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.6.3</span>
          {t('2.60', {
            fallback:
              "We will resolve the complaint and will ensure to keep copies of relevant electronic correspondence in our record keeping system, the material related to the complaint and its examination, the document indicating the specific result of the examination of the complaint and the answer provided to you. Such records shall be kept within our date base for at least 5 (five) years from the date of submission of the final answer to you,  unless longer time limits are required under the applicable legal acts, or in order to properly protect the Company's legitimate interests.",
          })}
        </PolicyText>
        <PolicyText flex>
          <span className="text-white">3.7</span>
          <span className="text-white">
            {t('2.61', {
              fallback: 'Learning from experience',
            })}
          </span>
        </PolicyText>
        <PolicyText className="pl-6" flex>
          <span>3.7.1</span>
          {t('2.62', {
            fallback:
              'Any specific findings from Complaints which can be directly addressed and used to increase your satisfaction will be considered. Root cause analysis, correction and enhancement will be implemented, where applicable,into system products and / or operational procedures to prevent future errors and increase your satisfaction. Where complaints involve personal data or data protection matters, we will ensure that all corrective and preventive actions are carried out in full compliance with applicable data protection laws and, where relevant, include the implementation of additional safeguards, particularly in the case of international data transfers.',
          })}
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout
        title={t('3.title', { fallback: '4. REDRESS AND COMPENSATION' })}
      >
        <PolicyText flex>
          <span>4.1</span>
          <span>
            {t('3.0', {
              fallback:
                'In cases where complaint is upheld, we acknowledge our responsibility and we may issue an apology as an appropriate redress, in accordance with applicable legal acts.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
      <PolicySectionLayout title={t('4.title', { fallback: '5. OTHER' })}>
        <PolicyText flex>
          <span>5.1</span>
          <span>
            {t('4.0', {
              fallback:
                'In case any questions arise, you can always contact us via email support@coinsmax.io,   or on our web https://coinsmax.io/.',
            })}
          </span>
        </PolicyText>
        <PolicyText flex>
          <span>5.2</span>
          <span>
            {t('4.1', {
              fallback:
                'The Company shall not be held liable for the actions, omissions, or decisions of third parties that are not directly related to the provision of our services, unless otherwise expressly required by applicable laws or explicitly stipulated in a contractual agreement between the parties. This exclusion of liability applies, without limitation, to the acts or negligence of third-party service providers, business partners, intermediaries, or other external entities whose activities fall outside the scope of our direct control. Clients acknowledge and accept that the use of such third-party services is at their own risk, and that any disputes, claims, or losses arising from such third-party activities should be addressed directly with the respective third party, unless binding legislation or a contractual obligation provides otherwise.',
            })}
          </span>
        </PolicyText>
      </PolicySectionLayout>
    </PolicyLayout>
  );
}
