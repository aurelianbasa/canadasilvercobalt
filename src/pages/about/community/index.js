import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Quote from '@components/quote';
import Layout from '@components/layout';
import CheckItem from '@components/check-item';

import HeroImage from '@media/about/community/hero.webp';
import Team1Image from '@media/about/community/team1.webp';
import Team2Image from '@media/about/community/team2.webp';
import HeroBgImage from '@media/about/community/hero-bg.webp';

export default function Community() {
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

      <div className='container mx-auto items-center px-5 py-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <img className='w-full rounded-lg object-cover' src={Team1Image} alt='Team' />

          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('community1Subtitle')}</p>
            <h2 className='text-4xl text-secondary'>{t('community1Title')}</h2>
            <p className='my-2'>{t('community1Description')}</p>
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
              <p className='text-gray'>{t('community2Subtitle')}</p>
              <h2 className='text-4xl text-secondary'>{t('community2Title')}</h2>
              <p className='mb-6 mt-2'>{t('community2Description')}</p>
            </div>

            <div className='mt-auto grid gap-2'>
              <CheckItem description={t('community2List1')} />
              <CheckItem description={t('community2List2')} />
              <CheckItem description={t('community2List3')} />
            </div>
          </div>

          <img className='w-full rounded-lg object-cover' src={Team2Image} alt='Team' />
        </motion.div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Community | Nord Precious Metals</title>
      <meta
        name='description'
        content='Nord Precious Metals is strongly committed to working with advanced technology and community members including First Nations to achieve the most sustainable mining operations in the area.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "community"] }, language: { eq: $language } }) {
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
