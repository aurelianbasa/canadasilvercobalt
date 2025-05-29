import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';

import DataImage from '@media/projects/castle-mine/data.webp';
import ResultImage from '@media/projects/castle-mine/result.webp';
import HistoryImage from '@media/projects/castle-mine/history.webp';
import GeologyImage from '@media/projects/castle-mine/geology.webp';
import OverviewImage from '@media/projects/castle-mine/overview.webp';
import BackgroundImage from '@media/projects/castle-mine/background.webp';
import CrossSection1Image from '@media/projects/castle-mine/cross-section-1.webp';
import CrossSection2Image from '@media/projects/castle-mine/cross-section-2.webp';

import TechnicalReportPDF from '@media/projects/castle-mine/technical-report.pdf';

export default function CastleMine() {
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

            <div className='mt-auto flex flex-col items-end justify-between gap-6 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'>
              <div className='flex flex-col gap-2'>
                <p className='text-tertiary'>{t('reportSubtitle')}</p>
                <p className='text-3xl text-white'>{t('reportTitle')}</p>
              </div>

              <Button className='w-full md:w-fit' type='tertiary' external href={TechnicalReportPDF}>
                {t('reportButton')}
              </Button>
            </div>
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

      <div className='container mx-auto grid gap-16 px-5 py-20 md:px-10 lg:grid-cols-2'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ x: '-80px', opacity: 0 }}
          whileInView={{ x: '0', opacity: 1 }}
          className='flex flex-col justify-between'
        >
          <div>
            <p className='mb-4 text-gray'>{t('resultsSubtitle')}</p>
            <h2 className=' text-4xl'>{t('resultsTitle')}</h2>
            <Trans i18nKey='resultsDescription' className='my-6 text-lg'></Trans>
          </div>

          <div>
            <h4 className='mb-2 text-2xl'>{t('resultsPhase1')}</h4>
            <p className='mb-6'>{t('resultsPhase1Description')}</p>

            <h4 className='mb-2 text-2xl'>{t('resultsPhase2')}</h4>
            <p>{t('resultsPhase2Description')}</p>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ x: '80px', opacity: 0 }}
          whileInView={{ x: '0', opacity: 1 }}
        >
          <img className='w-full rounded-lg object-cover' src={ResultImage} alt='Result' />
        </motion.div>
      </div>

      <div className='container mx-auto px-5 py-10 md:px-10'>
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

      <div className='container mx-auto grid gap-20 px-5 py-20 md:px-10'>
        <div className='grid gap-16 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <img className='w-full rounded-lg object-cover' src={BackgroundImage} alt='Background' />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <div>
              <p className='mb-4 text-gray'>{t('backgroundSubtitle')}</p>
              <h2 className=' text-4xl'>{t('backgroundTitle')}</h2>
              <Trans i18nKey='backgroundDescription' className='my-6 text-lg'></Trans>
            </div>

            <div>
              <h4 className='mb-2 text-2xl'>{t('backgroundInfo1')}</h4>
              <p className='mb-6'>{t('backgroundInfo1Description')}</p>

              <h4 className='mb-2 text-2xl'>{t('backgroundInfo2')}</h4>
              <p className='mb-6'>{t('backgroundInfo2Description')}</p>

              <h4 className='mb-2 text-2xl'>{t('backgroundInfo3')}</h4>
              <p>{t('backgroundInfo3Description')}</p>
            </div>
          </motion.div>
        </div>

        <div className='grid gap-16 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <div>
              <p className='mb-4 text-gray'>{t('dataSubtitle')}</p>
              <h2 className=' text-4xl'>{t('dataTitle')}</h2>
              <Trans i18nKey='dataDescription' className='my-6 text-lg'></Trans>
            </div>

            <div>
              <h4 className='mb-2 text-2xl'>{t('dataInfo1')}</h4>
              <p className='mb-6'>{t('dataInfo1Description')}</p>

              <h4 className='mb-2 text-2xl'>{t('dataInfo2')}</h4>
              <p className='mb-6'>{t('dataInfo2Description')}</p>

              <h4 className='mb-2 text-2xl'>{t('dataInfo3')}</h4>
              <p>{t('dataInfo3Description')}</p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
          >
            <img className='w-full rounded-lg object-cover' src={DataImage} alt='Data' />
          </motion.div>
        </div>
      </div>

      <div className='bg-beige'>
        <div className='container mx-auto grid gap-20 px-5 pb-32 pt-20 md:px-10'>
          <div className='grid gap-10'>
            <h2 className='text-4xl'>{t('info1')}</h2>
            <img className='w-full rounded-2xl object-cover' src={CrossSection1Image} alt='Cross section core' />
            <p className='text-2xl'>{t('info1Description')}</p>
          </div>

          <div className='grid gap-10'>
            <h2 className='text-4xl'>{t('info2')}</h2>
            <img className='w-full rounded-2xl object-cover' src={CrossSection2Image} alt='Cross section core' />
            <p className='text-2xl'>{t('info2Description')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Castle mine | Nord Precious Metals</title>
      <meta
        name='description'
        content='The past-producing silver-cobalt Castle Silver Mine property is located 85 km northwest of Cobalt, Ontario, which is the centre of the historic Silver Cobalt Mining Camp.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "castle-mine"] }, language: { eq: $language } }) {
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
