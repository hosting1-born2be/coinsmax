'use client';

import { useMemo, useState } from 'react';

import { CareerApplyDialog } from './CareerApplyDialog';
import styles from './CareersPositions.module.scss';

const PREVIEW_LIST_COUNT = 2;

const items = [
  {
    id: 'position-1',
    title: 'AML Team Lead',
    price: '€2,500 - €3,500',
    address: 'Bratislava, Slovakia (Hybrid)',
    description:
      'Lead our AML compliance team and oversee all anti-money laundering operations. This senior role requires proven experience in financial crime prevention and team management.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      {
        value: 'Manage and develop the AML team',
      },
      {
        value: 'Oversee transaction monitoring and investigation processes',
      },
      {
        value: 'Ensure regulatory compliance and reporting',
      },
      {
        value: 'Develop and maintain AML policies and procedures',
      },
      {
        value: 'Liaise with regulators and senior management',
      },
      {
        value: 'Conduct team training and quality assurance',
      },
      {
        value: 'Handle complex cases and escalations',
      },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      {
        value: '2+ years of AML/compliance experience',
      },
      {
        value: '2+ years in team lead or management role',
      },
      {
        value: 'Strong knowledge of EU AML regulations',
      },
      {
        value: 'Experience with MiCA framework (advantage)',
      },
      {
        value: 'Understanding of cryptocurrency and blockchain (strong advantage)',
      },
      {
        value: 'Excellent leadership and communication skills',
      },
      {
        value: 'CAMS or similar certification (preferred)',
      },
      {
        value: 'Fluent in English',
      },
    ],
  },
  {
    id: 'position-2',
    title: 'AML Risk Analyst',
    price: '€2,200 - €3,200',
    address: 'Bratislava, Slovakia',
    description:
      'Conduct AML risk assessments and help strengthen our compliance framework. This role combines analytical skills with regulatory knowledge.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      {
        value: 'Conduct customer and transaction risk assessments',
      },
      {
        value: 'Analyze patterns and trends in financial data',
      },
      {
        value: 'Develop risk scoring models and methodologies',
      },
      {
        value: 'Support enhanced due diligence processes',
      },
      {
        value: 'Prepare risk reports for management',
      },
      {
        value: 'Monitor regulatory changes and assess impact',
      },
      {
        value: 'Collaborate with operations and compliance teams',
      },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      {
        value:
          "Bachelor's degree in Finance, Economics, Risk Management, or a related field",
      },
      {
        value: '2–4 years of AML or risk analysis experience',
      },
      {
        value: 'Strong analytical and data interpretation skills',
      },
      {
        value: 'Knowledge of AML regulations and frameworks',
      },
      {
        value: 'Understanding of cryptocurrency (advantage)',
      },
      {
        value: 'Proficiency in Excel and data analysis tools',
      },
      {
        value: 'Fluent in English',
      },
    ],
  },
  {
    id: 'position-3',
    title: 'AML Specialist',
    price: '€1,800 - €2,500',
    address: 'Bratislava, Slovakia (Hybrid)',
    description:
      "Entry-level position for someone starting their career in financial crime prevention. You'll help monitor transactions, identify suspicious activity, and ensure we meet regulatory requirements.",
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      {
        value: 'Review and analyze transactions flagged by monitoring systems',
      },
      {
        value:
          'Conduct research to verify the legitimacy of flagged activities',
      },
      {
        value: 'Document findings and prepare reports for senior team review',
      },
      {
        value: 'Support customer due diligence (CDD) processes',
      },
      {
        value: 'Assist with Suspicious Activity Reports (SARs)',
      },
      {
        value: 'Stay updated on AML regulations and best practices',
      },
      {
        value: 'Collaborate with team members on investigations',
      },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      {
        value:
          "Bachelor's degree in Finance, Business, Criminal Justice, or a related field (or equivalent experience)",
      },
      {
        value: 'Strong attention to detail and analytical thinking',
      },
      {
        value: 'Good organizational and time management skills',
      },
      {
        value: 'Basic understanding of financial transactions',
      },
      {
        value: 'Excellent written and verbal communication',
      },
      {
        value: 'Proficiency in Microsoft Office (Excel, Word)',
      },
      {
        value:
          'Understanding of cryptocurrency and blockchain technology (strong advantage)',
      },
      {
        value: 'Fluent in English (additional EU languages a plus)',
      },
    ],
  },
  {
    id: 'position-4',
    title: 'Customer Support Team Lead',
    price: '€1,800 - €2,500',
    address: 'Bratislava, Slovakia',
    description:
      'Lead our customer support team and ensure exceptional service delivery. This role requires experience in customer service management and a passion for building great user experiences.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      {
        value: 'Manage and develop the customer support team',
      },
      {
        value: 'Ensure high-quality customer service across all channels',
      },
      {
        value: 'Handle escalated customer issues and complaints',
      },
      {
        value: 'Develop support procedures and quality standards',
      },
      {
        value: 'Monitor team performance and provide coaching',
      },
      {
        value: 'Analyze support metrics and identify improvements',
      },
      {
        value: 'Collaborate with product and operations teams',
      },
      {
        value: 'Contribute to knowledge base and documentation',
      },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      {
        value: '2+ years of customer support experience',
      },
      {
        value: '2+ years in a team lead or supervisory role',
      },
      {
        value: 'Strong communication and problem-solving skills',
      },
      {
        value: 'Experience with support tools and CRM systems',
      },
      {
        value: 'Knowledge of fintech or financial services (advantage)',
      },
      {
        value: 'Understanding of cryptocurrency (advantage)',
      },
      {
        value: 'Excellent organizational and leadership abilities',
      },
      {
        value: 'Fluent in English (additional EU languages a plus)',
      },
    ],
  },
  {
    id: 'position-5',
    title: 'Customer Support Specialist',
    price: '€1,500 - €2,200',
    address: 'Bratislava, Slovakia (Hybrid)',
    description:
      'Entry-level position providing excellent customer support. Perfect for someone who loves helping people and wants to grow in a fintech environment.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      {
        value: 'Respond to customer inquiries via email, chat, and phone',
      },
      {
        value: 'Resolve customer issues efficiently and professionally',
      },
      {
        value: 'Document customer interactions and issues',
      },
      {
        value: 'Escalate complex issues to senior team members',
      },
      {
        value: 'Help maintain and update knowledge base',
      },
      {
        value: 'Gather customer feedback for product improvements',
      },
      {
        value: 'Support onboarding of new customers',
      },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      {
        value:
          "High school diploma or equivalent (Bachelor's degree preferred)",
      },
      {
        value: '0–2 years of customer service experience',
      },
      {
        value: 'Excellent communication and interpersonal skills',
      },
      {
        value: 'Strong problem-solving abilities',
      },
      {
        value: 'Patient, friendly, and professional demeanor',
      },
      {
        value: 'Basic technical aptitude',
      },
      {
        value: 'Understanding of cryptocurrency (advantage)',
      },
      {
        value: 'Fluent in English (additional EU languages a plus)',
      },
    ],
  },
];

export default function CareersPositions() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedPositionId, setSelectedPositionId] = useState<string | null>(
    null,
  );
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const selectedPosition = useMemo(
    () => items.find(i => i.id === selectedPositionId) ?? null,
    [selectedPositionId],
  );

  const toggleExpanded = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className={styles.careers_positions}>
      <div className="container">
        <h2 className={`${styles.careers_positions__title}`}>Open Positions</h2>

        <ul className={styles.careers_positions__list}>
          {items.map(item => (
            <li key={item.id} className={styles.careers_positions__item}>
              <p
                className={`${styles.careers_positions__item_title} text-style`}
              >
                {item.title}
              </p>
              <p className={styles.careers_positions__item_price}>
                {item.price}
              </p>
              <p
                className={`${styles.careers_positions__item_address} text-style`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 1.5C7.85953 1.5 4.5 4.52391 4.5 8.25C4.5 14.25 12 22.5 12 22.5C12 22.5 19.5 14.25 19.5 8.25C19.5 4.52391 16.1405 1.5 12 1.5ZM12 12C11.4067 12 10.8266 11.8241 10.3333 11.4944C9.83994 11.1648 9.45542 10.6962 9.22836 10.1481C9.0013 9.59987 8.94189 8.99667 9.05764 8.41473C9.1734 7.83279 9.45912 7.29824 9.87868 6.87868C10.2982 6.45912 10.8328 6.1734 11.4147 6.05764C11.9967 5.94189 12.5999 6.0013 13.1481 6.22836C13.6962 6.45542 14.1648 6.83994 14.4944 7.33329C14.8241 7.82664 15 8.40666 15 9C14.9991 9.79538 14.6828 10.5579 14.1204 11.1204C13.5579 11.6828 12.7954 11.9991 12 12Z"
                    fill="white"
                    fillOpacity="0.6"
                  />
                </svg>

                {item.address}
              </p>
              <p
                className={`${styles.careers_positions__item_description} text-style`}
              >
                {item.description}
              </p>
              <div className={styles.careers_positions__item_list_wrapper}>
                <div>
                  <p
                    className={
                      styles.careers_positions__item_responsibilities_list_title
                    }
                  >
                    {item.responsibilitiesTitle}
                  </p>
                  <ul
                    className={
                      styles.careers_positions__item_responsibilities_list
                    }
                  >
                    {(expanded[`${item.id}-resp`]
                      ? item.responsibilitiesList
                      : item.responsibilitiesList.slice(0, PREVIEW_LIST_COUNT)
                    ).map((responsibilitiesItem, index) => (
                      <li key={index}>
                        <p>{responsibilitiesItem.value}</p>
                      </li>
                    ))}
                  </ul>

                  {item.responsibilitiesList.length > PREVIEW_LIST_COUNT && (
                    <button
                      type="button"
                      className={styles.careers_positions__item_see_more}
                      onClick={() => toggleExpanded(`${item.id}-resp`)}
                      aria-expanded={!!expanded[`${item.id}-resp`]}
                    >
                      {expanded[`${item.id}-resp`] ? 'See less' : 'See more'}
                    </button>
                  )}
                </div>

                <div>
                  <p
                    className={
                      styles.careers_positions__item_responsibilities_list_title
                    }
                  >
                    {item.requirementsTitle}
                  </p>
                  <ul
                    className={
                      styles.careers_positions__item_responsibilities_list
                    }
                  >
                    {(expanded[`${item.id}-req`]
                      ? item.requirementsList
                      : item.requirementsList.slice(0, PREVIEW_LIST_COUNT)
                    ).map((requirementsItem, index) => (
                      <li key={index}>
                        <p>{requirementsItem.value}</p>
                      </li>
                    ))}
                  </ul>

                  {item.requirementsList.length > PREVIEW_LIST_COUNT && (
                    <button
                      type="button"
                      className={styles.careers_positions__item_see_more}
                      onClick={() => toggleExpanded(`${item.id}-req`)}
                      aria-expanded={!!expanded[`${item.id}-req`]}
                    >
                      {expanded[`${item.id}-req`] ? 'See less' : 'See more'}
                    </button>
                  )}
                </div>
              </div>

              <button
                type="button"
                className="btn btn-white"
                onClick={() => {
                  setSelectedPositionId(item.id);
                  setIsApplyOpen(true);
                }}
              >
                Apply Now
              </button>
            </li>
          ))}
        </ul>

        <CareerApplyDialog
          open={isApplyOpen}
          onOpenChangeAction={setIsApplyOpen}
          positionTitle={selectedPosition?.title ?? 'Apply'}
        />
      </div>
    </section>
  );
}
