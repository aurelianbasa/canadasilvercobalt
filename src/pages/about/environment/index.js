import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';

import Quote from '@components/quote';
import Layout from '@components/layout';
import CheckItem from '@components/check-item';

import HeroImage from '@media/about/environment/hero.webp';
import SchemeImage from '@media/about/environment/scheme.webp';
import HeroBgImage from '@media/about/environment/hero-bg.webp';
import EnvironmentImage from '@media/about/environment/environment.webp';
import RehabilitationImage from '@media/about/environment/rehabilitation.webp';

export default function Environment() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div
        style={{ '--bg-image-url': `url(${HeroBgImage})` }}
        className={`flex items-center bg-[image:var(--bg-image-url)] bg-cover bg-center pb-16 pt-32 md:pb-20 md:pt-44`}
      >
        <div className='container mx-auto items-center px-5 md:px-10'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
          >
            <div className='flex flex-col'>
              <span className='mb-4 text-gray'>{t('heroSubtitle')}</span>
              <h1 className='mb-6 text-4xl'>{t('heroTitle')}</h1>
              <p className='mb-6'>{t('heroDescription')}</p>

              <div className='mt-auto grid gap-2'>
                <CheckItem description={t('heroList1')} />
                <CheckItem description={t('heroList2')} />
                <CheckItem description={t('heroList3')} />
              </div>
            </div>

            <img className='w-full rounded-lg object-cover' src={HeroImage} alt='Hero' />
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto px-5 pb-10 pt-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
        >
          <Quote quote={t('quote')} author={t('quoteAuthor')} position={t('quotePosition')}></Quote>
        </motion.div>
      </div>

      <div className='bg-beige'>
        <div className='container mx-auto grid gap-16 px-5 py-20 md:px-10 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col justify-between'
          >
            <div>
              <p className='mb-4 text-gray'>{t('rehabilitationSubtitle')}</p>
              <h2 className=' text-4xl'>{t('rehabilitationTitle')}</h2>
              <p className='my-6'>{t('rehabilitationDescription')}</p>
            </div>

            <div className='flex flex-wrap gap-10'>
              <div>
                <h3 className='mb-2 bg-primary text-6xl text-white'>{t('year1')}</h3>
                <Trans i18nKey='year1Note' className='text-secondary'></Trans>
              </div>

              <div>
                <h3 className='mb-2 bg-tertiary text-6xl text-white'>{t('year2')}</h3>
                <Trans i18nKey='year2Note' className='text-secondary'></Trans>
              </div>

              <div>
                <h3 className='mb-2 bg-gray text-6xl text-white'>{t('year3')}</h3>
                <Trans i18nKey='year3Note' className='text-secondary'></Trans>
              </div>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <img className='w-full rounded-lg object-cover' src={RehabilitationImage} alt='Rehabilitation' />
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto items-center px-5 py-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <img className='w-full rounded-lg object-cover' src={EnvironmentImage} alt='Environment' />

          <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
              <p className='text-gray'>{t('environment1Subtitle')}</p>
              <h2 className=' text-4xl text-secondary'>{t('environment1Title')}</h2>
              <p className='mb-6 mt-2'>{t('environment1Description')}</p>
            </div>

            <div className='mt-auto grid gap-2'>
              <CheckItem description={t('environment1List1')} />
              <CheckItem description={t('environment1List2')} />
              <CheckItem description={t('environment1List3')} />
            </div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
              <p className='text-gray'>{t('environment2Subtitle')}</p>
              <h2 className=' text-4xl text-secondary'>{t('environment2Title')}</h2>
              <p className='mb-6 mt-2'>{t('environment2Description')}</p>
            </div>

            <div className='mt-auto grid gap-2'>
              <CheckItem description={t('environment2List1')} />
              <CheckItem description={t('environment2List2')} />
              <CheckItem description={t('environment2List3')} />
            </div>
          </div>

          <img className='w-full rounded-lg object-cover' src={SchemeImage} alt='Scheme' />
        </motion.div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Environment | Nord Precious Metals</title>
      <meta
        name='description'
        content='Voluntary Rehabilitation and Agreements with First Nations mark the cornerstone of ecological responsibility.
'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "environment"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
