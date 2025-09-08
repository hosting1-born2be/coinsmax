'use client';

import { useTranslations } from 'next-intl';

import { Accordion } from '@/shared/ui/kit/accordion';
import { Title } from '@/shared/ui/kit/title';

const getHowToPlay = (t: ReturnType<typeof useTranslations>) => [
  {
    q: t('howToPay.items.0.q', {
      fallback: 'Can I use a credit card to acquire crypto?',
    }),
    a: t('howToPay.items.0.a', {
      fallback:
        'Yes. Coinsmax allows the purchase of Bitcoin or Ethereum with a credit card.',
    }),
  },
  {
    q: t('howToPay.items.1.q', {
      fallback: 'Can I make an exchange via bank transfer?',
    }),
    a: t('howToPay.items.1.a', {
      fallback:
        'Yes. Coinsmax supports exchanging Bitcoin or Ethereum using a bank transfer.',
    }),
  },
];

const getCrypto = (t: ReturnType<typeof useTranslations>) => [
  {
    q: t('crypto.items.0.q', {
      fallback: 'Which digital currencies can I exchange on Coinsmax?',
    }),
    a: t('crypto.items.0.a', {
      fallback:
        'At the moment, Coinsmax supports only Bitcoin (BTC) and Ethereum (ETH).',
    }),
  },
];

const getWallet = (t: ReturnType<typeof useTranslations>) => [
  {
    q: t('wallets.items.0.q', {
      fallback: 'Do I need a crypto wallet to use Coinsmax?',
    }),
    a: t('wallets.items.0.a', {
      fallback:
        'Yes, you’ll need your own wallet to send Bitcoin or Ethereum. Coinsmax doesn’t create or store wallets for you — we simply process your exchange transactions.',
    }),
  },
  {
    q: t('wallets.items.1.q', {
      fallback: 'How can I confirm that my crypto payment has gone through?',
    }),
    a: t('wallets.items.1.a', {
      fallback:
        'Every transaction you make is recorded on the blockchain. By entering your wallet address or transaction ID into a public blockchain explorer (for example, blockchain.com), you can see when your payment was sent, verified, and received.',
    }),
  },
];

const getExchangeRates = (t: ReturnType<typeof useTranslations>) => [
  {
    q: t('exchangeRates.items.0.q', {
      fallback: 'Can I exchange Bitcoin or Ethereum for fiat?',
    }),
    a: t('exchangeRates.items.0.a', {
      fallback:
        'Yes. Coinsmax processes exchanges directly between your wallet and the recipient, allowing you to receive fiat when exchanging Bitcoin or Ethereum.',
    }),
  },
  {
    q: t('exchangeRates.items.1.q', {
      fallback: 'How is the exchange rate calculated when I exchange crypto?',
    }),
    a: t('exchangeRates.items.1.a', {
      fallback:
        'Coinsmax uses real-time market data from leading liquidity providers to ensure your crypto payment is converted at a fair and accurate rate.',
    }),
  },
  {
    q: t('exchangeRates.items.2.q', {
      fallback: 'At what moment is the exchange rate fixed?',
    }),
    a: t('exchangeRates.items.2.a', {
      fallback:
        'The rate is locked in at the time your payment is received and confirmed on the blockchain, ensuring transparency and consistency for every transaction.',
    }),
  },
];

const getPayment = (t: ReturnType<typeof useTranslations>) => [
  {
    q: t('payment.items.0.q', {
      fallback: 'When will the cryptocurrency arrive in my wallet?',
    }),
    a: t('payment.items.0.a', {
      fallback:
        'The transaction will be processed once your transaction is confirmed on the blockchain and your KYC verification (if required) is completed. After that, Coinsmax instantly processes',
    }),
  },
  {
    q: t('payment.items.1.q', {
      fallback: 'Can I use Coinsmax without verifying my identity?',
    }),
    a: t('payment.items.1.a', {
      fallback:
        'No. To comply with international regulations, all users must complete KYC before making payments. This helps protect your transactions and ensures that invoices are paid securely and without delays.',
    }),
  },
];

const getKyc = (t: ReturnType<typeof useTranslations>) => [
  {
    q: t('kyc.items.0.q', {
      fallback: 'Why do I need to complete KYC with Coinsmax?',
    }),
    a: t('kyc.items.0.a', {
      fallback:
        'Know Your Customer is a legal requirement for financial services, including crypto payments. At Coinsmax, we require KYC from all users to ensure compliance with regulations and to ensure secure and transparent exchange.',
    }),
  },
  {
    q: t('kyc.items.1.q', {
      fallback:
        'What is the purpose of submitting my personal details and verification documents?',
    }),
    a: t('kyc.items.1.a', {
      fallback:
        'Verification protects both you and the payment process. By confirming your identity, we prevent fraud, money laundering, and misuse of digital assets, while ensuring your transactions are processed smoothly and accepted by all parties.',
    }),
  },
  {
    q: t('kyc.items.2.q', {
      fallback: 'Does Coinsmax store my payment or wallet details?',
    }),
    a: t('kyc.items.2.a', {
      fallback:
        'No. Coinsmax operates on a non-custodial model. We do not store your credit card, wallet private keys, or funds. Your assets remain under your control, and every payment moves directly from your wallet to the recipient.',
    }),
  },
];

const getCustomerSupport = (t: ReturnType<typeof useTranslations>) => [
  {
    q: t('customerSupport.items.0.q', {
      fallback:
        'How long does it take for Bitcoin or Ethereum to be sent to my wallet?',
    }),
    a: t('customerSupport.items.0.a', {
      fallback:
        'Coinsmax processes exchange requests after completing KYC verification. Typically, the transaction is completed within several business days once all details have been confirmed.',
    }),
  },
  {
    q: t('customerSupport.items.1.q', {
      fallback: 'Can I cancel a payment after sending it?',
    }),
    a: t('customerSupport.items.1.a', {
      fallback:
        'Once a crypto transaction has been confirmed on the blockchain, it cannot be reversed or cancelled. If you notice an issue before the payment is processed, please contact our support team immediately for assistance.',
    }),
  },
  {
    q: t('customerSupport.items.2.q', {
      fallback: 'When is the Coinsmax support team available?',
    }),
    a: t('customerSupport.items.2.a', {
      fallback:
        'Our support team is here to help you Monday–Friday, from 06:00 to 22:00 GMT / 01:00 to 17:00 EST. You can reach us anytime during these hours for guidance on payments, verification, or account assistance.',
    }),
  },
];

export const QASection = () => {
  const t = useTranslations('qa.section');

  return (
    <section className="mx-auto flex w-[800px] flex-col gap-[60px] py-20 max-md:mx-0 max-md:w-full max-md:px-4 max-md:py-16">
      <QAAccordion
        title={t('howToPay.title', { fallback: 'How to Pay' })}
        items={getHowToPlay(t)}
      />
      <QAAccordion
        title={t('crypto.title', { fallback: 'Cryptocurrencies' })}
        items={getCrypto(t)}
      />
      <QAAccordion
        title={t('wallets.title', { fallback: 'Wallets & Transactions' })}
        items={getWallet(t)}
      />
      <QAAccordion
        title={t('exchangeRates.title', {
          fallback: 'Exchange Rates and Conversions',
        })}
        items={getExchangeRates(t)}
      />
      <QAAccordion
        title={t('payment.title', {
          fallback: 'Payment Processing and Verification',
        })}
        items={getPayment(t)}
      />
      <QAAccordion
        title={t('kyc.title', { fallback: 'KYC' })}
        items={getKyc(t)}
      />
      <QAAccordion
        title={t('customerSupport.title', {
          fallback: 'Payments and Customer Support',
        })}
        items={getCustomerSupport(t)}
      />
    </section>
  );
};

const QAAccordion = ({
  items,
  title,
}: {
  title: string;
  items: { q: string; a: string }[];
}) => (
  <section className="flex flex-col gap-8">
    <Title size="3xl">{title}</Title>
    {items.map(({ q, a }, i) => (
      <Accordion key={q} index={i} question={q} answer={a} />
    ))}
  </section>
);
