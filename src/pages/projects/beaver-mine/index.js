import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';

import HistoryImage from '@media/projects/beaver-mine/history.webp';
import GeologyImage from '@media/projects/beaver-mine/geology.webp';
import OverviewImage from '@media/projects/beaver-mine/overview.webp';
import BeaverMineImage from '@media/projects/beaver-mine/beaver-mine.webp';

export default function BeaverMine() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className='bg-white'>
        <div className='container mx-auto grid gap-16 px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-44 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col gap-4'
          >
            <p className='text-gray'>{t('heroSubtitle')}</p>
            <h1 className='text-4xl'>{t('heroTitle')}</h1>
            <Trans i18nKey='heroDescription' className='my-6'></Trans>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <img className='w-full rounded-lg object-cover' src={OverviewImage} alt='Hero' />
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto px-5 py-10 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
        >
          <img className='mb-20 w-full rounded-lg object-cover' src={BeaverMineImage} alt='Beaver mine' />
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <img className='w-full rounded-lg object-cover' src={HistoryImage} alt='History' />

          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('historySubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('historyTitle')}</h2>
            <Trans i18nKey='historyDescription' className='mt-2 text-lg'></Trans>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('geologySubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('geologyTitle')}</h2>
            <Trans i18nKey='geologyDescription' className='mt-2 text-lg'></Trans>
          </div>

          <img className='w-full rounded-lg object-cover' src={GeologyImage} alt='Geology' />
        </motion.div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Beaver mine | Nord Precious Metals</title>
      <meta
        name='description'
        content='The Beaver Mine was one of the deepest shafts in the Cobalt camp and advanced understanding of the regional geology.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "beaver-mine"] }, language: { eq: $language } }) {
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
