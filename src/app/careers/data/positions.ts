export type Position = {
  slug: string;
  title: string;
  price: string;
  address: string;
  description: string;
  responsibilitiesTitle: string;
  responsibilitiesList: { value: string }[];
  requirementsTitle: string;
  requirementsList: { value: string }[];
};

export const positions: Position[] = [
  {
    slug: 'aml-team-lead',
    title: 'AML Team Lead',
    price: '€2,500 - €3,500',
    address: 'Bratislava, Slovakia (Hybrid)',
    description:
      'Lead our AML compliance team and oversee all anti-money laundering operations. This senior role requires proven experience in financial crime prevention and team management.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      { value: 'Manage and develop the AML team' },
      { value: 'Oversee transaction monitoring and investigation processes' },
      { value: 'Ensure regulatory compliance and reporting' },
      { value: 'Develop and maintain AML policies and procedures' },
      { value: 'Liaise with regulators and senior management' },
      { value: 'Conduct team training and quality assurance' },
      { value: 'Handle complex cases and escalations' },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      { value: '2+ years of AML/compliance experience' },
      { value: '2+ years in team lead or management role' },
      { value: 'Strong knowledge of EU AML regulations' },
      { value: 'Experience with MiCA framework (advantage)' },
      {
        value:
          'Understanding of cryptocurrency and blockchain (strong advantage)',
      },
      { value: 'Excellent leadership and communication skills' },
      { value: 'CAMS or similar certification (preferred)' },
      { value: 'Fluent in English' },
    ],
  },
  {
    slug: 'aml-risk-analyst',
    title: 'AML Risk Analyst',
    price: '€2,200 - €3,200',
    address: 'Bratislava, Slovakia (Hybrid)',
    description:
      'Conduct AML risk assessments and help strengthen our compliance framework. This role combines analytical skills with regulatory knowledge.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      { value: 'Conduct customer and transaction risk assessments' },
      { value: 'Analyze patterns and trends in financial data' },
      { value: 'Develop risk scoring models and methodologies' },
      { value: 'Support enhanced due diligence processes' },
      { value: 'Prepare risk reports for management' },
      { value: 'Monitor regulatory changes and assess impact' },
      { value: 'Collaborate with operations and compliance teams' },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      {
        value:
          "Bachelor's degree in Finance, Economics, Risk Management, or a related field",
      },
      { value: '2–4 years of AML or risk analysis experience' },
      { value: 'Strong analytical and data interpretation skills' },
      { value: 'Knowledge of AML regulations and frameworks' },
      { value: 'Understanding of cryptocurrency (advantage)' },
      { value: 'Proficiency in Excel and data analysis tools' },
      { value: 'Fluent in English' },
    ],
  },
  {
    slug: 'aml-specialist',
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
      { value: 'Document findings and prepare reports for senior team review' },
      { value: 'Support customer due diligence (CDD) processes' },
      { value: 'Assist with Suspicious Activity Reports (SARs)' },
      { value: 'Stay updated on AML regulations and best practices' },
      { value: 'Collaborate with team members on investigations' },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      {
        value:
          "Bachelor's degree in Finance, Business, Criminal Justice, or a related field (or equivalent experience)",
      },
      { value: 'Strong attention to detail and analytical thinking' },
      { value: 'Good organizational and time management skills' },
      { value: 'Basic understanding of financial transactions' },
      { value: 'Excellent written and verbal communication' },
      { value: 'Proficiency in Microsoft Office (Excel, Word)' },
      {
        value:
          'Understanding of cryptocurrency and blockchain technology (strong advantage)',
      },
      { value: 'Fluent in English (additional EU languages a plus)' },
    ],
  },
  {
    slug: 'customer-support-team-lead',
    title: 'Customer Support Team Lead',
    price: '€2,000 - €3,000',
    address: 'Bratislava, Slovakia (Hybrid)',
    description:
      'Lead our customer support team and ensure exceptional service delivery. This role requires experience in customer service management and a passion for building great user experiences.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      { value: 'Manage and develop the customer support team' },
      { value: 'Ensure high-quality customer service across all channels' },
      { value: 'Handle escalated customer issues and complaints' },
      { value: 'Develop support procedures and quality standards' },
      { value: 'Monitor team performance and provide coaching' },
      { value: 'Analyze support metrics and identify improvements' },
      { value: 'Collaborate with product and operations teams' },
      { value: 'Contribute to knowledge base and documentation' },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      { value: '2+ years of customer support experience' },
      { value: '2+ years in a team lead or supervisory role' },
      { value: 'Strong communication and problem-solving skills' },
      { value: 'Experience with support tools and CRM systems' },
      { value: 'Knowledge of fintech or financial services (advantage)' },
      { value: 'Understanding of cryptocurrency (advantage)' },
      { value: 'Excellent organizational and leadership abilities' },
      { value: 'Fluent in English (additional EU languages a plus)' },
    ],
  },
  {
    slug: 'customer-support-specialist',
    title: 'Customer Support Specialist',
    price: '€1,500 - €2,200',
    address: 'Bratislava, Slovakia (Hybrid)',
    description:
      'Entry-level position providing excellent customer support. Perfect for someone who loves helping people and wants to grow in a fintech environment.',
    responsibilitiesTitle: 'Key Responsibilities',
    responsibilitiesList: [
      { value: 'Respond to customer inquiries via email, chat, and phone' },
      { value: 'Resolve customer issues efficiently and professionally' },
      { value: 'Document customer interactions and issues' },
      { value: 'Escalate complex issues to senior team members' },
      { value: 'Help maintain and update knowledge base' },
      { value: 'Gather customer feedback for product improvements' },
      { value: 'Support onboarding of new customers' },
    ],
    requirementsTitle: 'Requirements',
    requirementsList: [
      {
        value:
          "High school diploma or equivalent (Bachelor's degree preferred)",
      },
      { value: '0–2 years of customer service experience' },
      { value: 'Excellent communication and interpersonal skills' },
      { value: 'Strong problem-solving abilities' },
      { value: 'Patient, friendly, and professional demeanor' },
      { value: 'Basic technical aptitude' },
      { value: 'Understanding of cryptocurrency (advantage)' },
      { value: 'Fluent in English (additional EU languages a plus)' },
    ],
  },
];

export function getPositionBySlug(slug: string): Position | undefined {
  return positions.find(p => p.slug === slug);
}
