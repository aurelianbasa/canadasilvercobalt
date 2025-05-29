import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import ListItem from '@components/list-item';
import CheckItem from '@components/check-item';

import TTLImage from '@media/about/company-history/ttl.webp';
import HeroImage from '@media/about/company-history/hero.webp';
import GoldImage from '@media/about/company-history/gold.webp';
import DenisImage from '@media/about/company-history/st-denis.webp';
import HeroBgImage from '@media/about/company-history/hero-bg.webp';
import HistoryImage from '@media/about/company-history/history.webp';
import BatteryImage from '@media/about/company-history/battery.webp';

export default function CompanyHistory() {
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
                <CheckItem description={t('heroList4')} />
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
                <p className='mb-4 text-gray'>{t('historySubtitle')}</p>
                <h2 className=' text-4xl'>{t('historyTitle')}</h2>
                <p className='mb-8 mt-6'>{t('historyDescription')}</p>
              </div>

              <div className='grid gap-6'>
                <ListItem number='1' title={t('historyList1')} description={t('historyList1Description')} />
                <ListItem number='2' title={t('historyList2')} description={t('historyList2Description')} />
                <ListItem number='3' title={t('historyList3')} description={t('historyList3Description')} />
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
            >
              <img className='w-full rounded-lg object-cover' src={HistoryImage} alt='Castle East and Castle Mine' />
            </motion.div>
          </div>
        </div>
      </div>

      <div className='container mx-auto grid items-center justify-center px-5 py-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
        >
          <div className='max-w-[900px] text-center'>
            <p className='mb-4 text-gray'>{t('temiskamingSubtitle')}</p>
            <h2 className='mb-10 text-4xl text-secondary'>{t('temiskamingTitle')}</h2>
            <p className='mb-10'>{t('temiskamingDescription')}</p>
          </div>

          <img
            className='w-full max-w-[960px] rounded-lg object-cover'
            src={TTLImage}
            alt='Temiskaming Testing Laboratories'
          />
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
          <img className='w-full rounded-lg object-cover' src={BatteryImage} alt='Battery metals' />

          <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
              <h2 className=' text-4xl text-secondary'>{t('batteryTitle')}</h2>
              <p className='mb-6 mt-2'>{t('batteryDescription')}</p>
            </div>

            <div className='mt-auto grid gap-2'>
              <CheckItem description={t('batteryList1')} />
              <CheckItem description={t('batteryList2')} />
              <CheckItem description={t('batteryList3')} />
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
              <h2 className=' text-4xl text-secondary'>{t('goldTitle')}</h2>
              <p className='mb-6 mt-2'>{t('goldDescription')}</p>
            </div>

            <div className='mt-auto grid gap-2'>
              <CheckItem description={t('goldList1')} />
              <CheckItem description={t('goldList2')} />
              <CheckItem description={t('goldList3')} />
            </div>
          </div>

          <img className='w-full rounded-lg object-cover' src={GoldImage} alt='Eby-otto gold' />
        </motion.div>
      </div>

      <div className='container mx-auto grid items-center justify-center px-5 py-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
        >
          <div className='max-w-[900px] text-center'>
            <p className='mb-4 text-gray'>{t('denisSubtitle')}</p>
            <h2 className='mb-10 text-4xl text-secondary'>{t('denisTitle')}</h2>
            <p className='mb-10'>{t('denisDescription')}</p>
          </div>

          <img
            className='w-full max-w-[960px] rounded-lg object-cover'
            src={DenisImage}
            alt='The St. Denis Lithium Acquisition'
          />
        </motion.div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Company history | Nord Precious Metals</title>
      <meta
        name='description'
        content='A detailed review of acquisitions and advancement. Castle Mine Property. Temiskaming Testing Labs. Quebec Battery Metal Properties. Eby-Otto Gold Exploration.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "company-history"] }, language: { eq: $language } }) {
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
