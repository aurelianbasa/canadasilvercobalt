import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import ListItem from '@components/list-item';
import CheckItem from '@components/check-item';

import HeroImage from '@media/about/regional-history/hero.webp';
import HeroBgImage from '@media/about/regional-history/hero-bg.webp';
import ModernImage from '@media/about/regional-history/modern.webp';
import EarlyPeakImage from '@media/about/regional-history/early-peak.webp';
import EarlyBeginningsImage from '@media/about/regional-history/early-beginnings.webp';
import RenewedInterestImage from '@media/about/regional-history/renewed-interest.webp';

export default function RegionalHistory() {
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

      <div className='bg-beige'>
        <div className='container mx-auto grid gap-20 px-5 py-20 md:px-10'>
          <div className='grid items-center gap-16 lg:grid-cols-2'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '-80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex flex-col justify-between'
            >
              <div>
                <p className='mb-4 text-gray'>{t('beginningsSubtitle')}</p>
                <h2 className=' text-4xl'>{t('beginningsTitle')}</h2>
                <p className='mb-8 mt-6'>{t('beginningsDescription')}</p>
              </div>

              <div className='grid gap-6'>
                <ListItem number='1' title={t('beginningsList1')} description={t('beginningsList1Description')} />
                <ListItem number='2' title={t('beginningsList2')} description={t('beginningsList2Description')} />
                <ListItem number='3' title={t('beginningsList3')} description={t('beginningsList3Description')} />
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
            >
              <img className='w-full rounded-lg object-cover' src={EarlyBeginningsImage} alt='Early beginnings era' />
            </motion.div>
          </div>

          <div className='grid items-center gap-16 lg:grid-cols-2'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '-80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
            >
              <img className='w-full rounded-lg object-cover' src={EarlyPeakImage} alt='An early peak era' />
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex flex-col justify-between'
            >
              <div>
                <p className='mb-4 text-gray'>{t('earlySubtitle')}</p>
                <h2 className=' text-4xl'>{t('earlyTitle')}</h2>
                <p className='mb-8 mt-6'>{t('earlyDescription')}</p>
              </div>

              <div className='grid gap-6'>
                <ListItem number='1' title={t('earlyList1')} description={t('earlyList1Description')} />
                <ListItem number='2' title={t('earlyList2')} description={t('earlyList2Description')} />
                <ListItem number='3' title={t('earlyList3')} description={t('earlyList3Description')} />
              </div>
            </motion.div>
          </div>
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
          <img className='w-full rounded-lg object-cover' src={RenewedInterestImage} alt='Renewed interest era' />

          <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
              <p className='text-gray'>{t('renewedSubtitle')}</p>
              <h2 className=' text-4xl text-secondary'>{t('renewedTitle')}</h2>
              <p className='mb-6 mt-2'>{t('renewedDescription')}</p>
            </div>

            <div className='mt-auto grid gap-2'>
              <CheckItem description={t('renewedList1')} />
              <CheckItem description={t('renewedList2')} />
              <CheckItem description={t('renewedList3')} />
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
              <p className='text-gray'>{t('modernSubtitle')}</p>
              <h2 className=' text-4xl text-secondary'>{t('modernTitle')}</h2>
              <p className='mb-6 mt-2'>{t('modernDescription')}</p>
            </div>

            <div className='mt-auto grid gap-2'>
              <CheckItem description={t('modernList1')} />
              <CheckItem description={t('modernList2')} />
              <CheckItem description={t('modernList3')} />
            </div>
          </div>

          <img className='w-full rounded-lg object-cover' src={ModernImage} alt='Modern era' />
        </motion.div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Regional history | Nord Precious Metals</title>
      <meta
        name='description'
        content='An early discovery prompted by the extension of the railway, the Silver-Cobalt Camp grew into one of the richest discoveries in history.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "regional-history"] }, language: { eq: $language } }) {
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
