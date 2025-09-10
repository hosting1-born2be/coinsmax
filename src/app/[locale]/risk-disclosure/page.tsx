import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { PolicyLayout } from '@/features/policies/ui/policy-layout';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { Title } from '@/shared/ui/kit/title';

export default async function RiskDisclosurePage() {
  const t = await getTranslations('riskDisclosure');

  return (
    <PolicyLayout>
      <article className="flex flex-col gap-6 border border-[rgba(255,255,255,0.10)] p-6">
        <Title size="3xl">
          {t('disclaimer.title', { fallback: 'Disclaimer' })}
        </Title>
        <PolicyText>
          {t('disclaimer.0', {
            fallback:
              'Coinsmax is owned and operated by Limitless Technologies s.r.o, identification number 55165451, authorised to provide virtual currency service, with registered and operational address at Černyševského 1287/10, Bratislava, 851 01, Slovak Republic.',
          })}
        </PolicyText>
      </article>
      <Title size="5xl" as="h1" className="text-center">
        {t('title', { fallback: 'RISKS DISCLOSURE' })}
      </Title>
      <div className="flex flex-col gap-6">
        <PolicyText>
          {t('subtitle', {
            fallback:
              'You agree that you are free to choose whether or not to use the service provided to you by Coinsmax and that you do so at your sole discretion and risk. Digital currency exchange is considered a risky transaction with highly speculative outcomes. Coinsmax does not guarantee any profit from any activity associated with its services.',
          })}
        </PolicyText>
        <PolicyText>
          {t('0', {
            fallback:
              'You agree that you are free to choose whether or not to use the service provided to you by Coinsmax and do so at your sole discretion and risk. You confirm that you understand and agree that the risks associated with the Services are acceptable to you, considering your objectives and financial capabilities.',
          })}
        </PolicyText>
        <PolicyText>
          {t('1', {
            fallback:
              'You acknowledge that purchasing or selling Cryptocurrency carries significant risk. Prices can fluctuate on any given day. Because of such fluctuations, Cryptocurrency may gain or lose value at any time. Cryptocurrency may be subject to large swings in value and may even become worthless. Cryptocurrency trading has unique risks not generally shared with official currencies, goods, or commodities in a market. Unlike most currencies, backed by governments or other legal entities, or commodities such as gold or silver, Cryptocurrency is a unique kind of currency, backed by technology and trust. No central bank can take corrective measures to protect the value of Cryptocurrency in a crisis or issue more currency.',
          })}
        </PolicyText>
        <PolicyText>
          {t('2', {
            fallback:
              'You should consider whether holding digital currency suits your financial circumstances. Dealing and exchanging in cryptocurrencies involves significant risk. The value of virtual assets/currencies has high volatility (value can increase and decrease significantly in a very short period and at any given moment). Such price fluctuations bring uncertainty. The value of a virtual currency and collapse in demand may be influenced by many factors, including irrational (or rational) bubbles, loss of confidence in the currency, changes in software development, government decisions, creation of a competitive currency, technical problems, political or non-political statements, statements of influencers and news and hacker-attacks.',
          })}
        </PolicyText>
        <PolicyText>
          {t('3', {
            fallback:
              'Virtual currencies have special risks that are not generally shared with the official currencies because they are not issued by governments or with tangible commodities or goods or registered in the official registry. Virtual currencies are intangible, decentralised digital assets backed by technology and trust. No central bank or other institution can take any measures to protect the value of a virtual currency. Virtual currencies are autonomous and largely unregulated systems of firms and individuals issuing currencies. The risk of loss in buying, selling, or holding virtual assets/currencies can be substantial. You should, therefore, carefully consider whether exchanging virtual assets is suitable for you in light of your financial condition. Coinsmax uses payment providers for transfers of fiat money for rendering exchange services and operating with the fiat money, whereas assisting banks do not, by any means, represent a medium of exchange, transfer, withdrawal, deposit, or other transaction in connection to virtual currencies.',
          })}
        </PolicyText>
        <PolicyText>
          {t('4', {
            fallback:
              "Your virtual assets may be lost by losing your password, private key, or other security code. Be careful to keep your private keys, passwords, security codes, and words to yourself and change them regularly. You are responsible for creating a solid password and maintaining security and control of any and all electronic devices, IDs, passwords, hints, personal identification numbers, or any other codes that you use to access the Coinsmax Services and your wallet addresses that you enter during your buy/sell order flow. Any loss or compromise of the preceding information and/or your personal information may result in third parties' unauthorised access to your Coinsmax Profile or your wallet address and the loss or theft of your assets.",
          })}
        </PolicyText>
        <PolicyText>
          {t('5', {
            fallback:
              'You are responsible for keeping your email address and telephone number up to date in your Profile to receive any notices or alerts we may send you. You should never allow remote access or share your computer and/or computer screen with someone else when logged on to your Coinsmax Profile. Coinsmax will never ask you for your passwords or 2-factor authentication codes. We assume no responsibility for any loss you may sustain due to the compromise of profile login credentials due to no fault of Coinsmax.',
          })}
        </PolicyText>
        <PolicyText>
          {t('6', {
            fallback:
              'We take no responsibility for your failure to follow or act on any notices or alerts we may send you. In the event you believe your Coinsmax Profile information has been compromised, contact Coinsmax Support immediately at support@coinsmax.io.',
          })}{' '}
          <Link href="mailto:support@coinsmax.io" className="underline">
            support@coinsmax.io.
          </Link>
        </PolicyText>
        <PolicyText>
          {t('6', {
            fallback:
              'We take no responsibility for your failure to follow or act on any notices or alerts we may send you. In the event you believe your Coinsmax Profile information has been compromised, contact Coinsmax Support immediately at support@coinsmax.io.',
          })}
        </PolicyText>
        <PolicyText>
          {t('7', {
            fallback:
              'You acknowledge and agree that Coinsmax does not act as a financial advisor, does not provide investment advisory services or guidance, and any communication between you and Coinsmax cannot be considered investment advice. Without prejudice to our preceding obligations, in asking us to enter into any transaction, you represent that you have been solely responsible for making your independent appraisal and investigations into the risks of the transaction.',
          })}
        </PolicyText>
        <PolicyText>
          {t('8', {
            fallback:
              'You represent that you have sufficient knowledge, market sophistication, and experience to evaluate the merits and threats of any transaction and that you received professional advice thereon. We give you no warranty as to the suitability of the Services and assume no fiduciary duty in our relations with you. We may provide information on the price, range, volatility of the digital currency and events that have affected the price of digital currency, but this is not considered investment advice and should not be construed as such. Any decision to purchase or sell digital currency is your entire decision at your own risk, and Coinsmax will not be liable for any loss suffered.',
          })}
        </PolicyText>
        <PolicyText>
          {t('9', {
            fallback:
              'To the full extent permitted by the applicable law, you, as a result of this agreement to indemnify Coinsmax and its partners against any action, liability, cost, claim, loss, damage, proceeding, or expense suffered or incurred if direct or not directly arising from your use of our website, your use of the service or your violation of our terms and conditions.',
          })}
        </PolicyText>
        <PolicyText>
          {t('10', {
            fallback:
              'Coinsmax is not liable for any price fluctuations in Cryptocurrency. In the event of a market disruption, Coinsmax may suspend the Services at its discretion and in addition to any other right and remedy. Coinsmax will not be liable for any loss you suffer resulting from such action. Following any such event, when Services resume, you acknowledge that prevailing market rates may differ significantly from those available before.',
          })}
        </PolicyText>
      </div>
    </PolicyLayout>
  );
}
