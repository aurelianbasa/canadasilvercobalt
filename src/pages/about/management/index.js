import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import CheckItem from '@components/check-item';

import HeroImage from '@media/about/management/hero.webp';
import HeroBgImage from '@media/about/management/hero-bg.webp';
import Member1 from '@media/about/management/member1.webp';
import Member2 from '@media/about/management/member2.webp';
import Member3 from '@media/about/management/member3.webp';
import Member4 from '@media/about/management/member4.webp';
import Member5 from '@media/about/management/member5.webp';

export default function Management() {
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
        <div className={`container mx-auto min-h-screen px-10 py-20`}>
          <h2 className=' mb-10 text-4xl text-secondary'>{t('heroTitle2')}</h2>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='mb-20 flex flex-col gap-8 md:flex-row md:gap-16'
          >
            <img className='max-w-[322px] rounded-[10px] object-cover' src={Member1} alt='Member' />

            <div className='flex flex-col justify-center md:self-center'>
              <h3 className='mb-3 text-3xl'>{t('memberName1')}</h3>
              <span className='mb-6 text-base uppercase text-primary'>{t('memberPosition1')}</span>
              <p className='text-base'>{t('memberStory1')}</p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='mb-20 flex flex-col gap-8 md:flex-row md:gap-16'
          >
            <img className='max-w-[322px] rounded-[10px] object-cover' src={Member2} alt='Member' />

            <div className='flex flex-col justify-center md:self-center'>
              <h3 className='mb-3 text-3xl'>{t('memberName2')}</h3>
              <span className='mb-6 text-base uppercase text-primary'>{t('memberPosition2')}</span>
              <p className='text-base'>{t('memberStory2')}</p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='mb-20 flex flex-col gap-8 md:flex-row md:gap-16'
          >
            <img className='max-w-[322px] rounded-[10px] object-cover' src={Member3} alt='Member' />

            <div className='flex flex-col justify-center md:self-center'>
              <h3 className='mb-3 text-3xl'>{t('memberName3')}</h3>
              <span className='mb-6 text-base uppercase text-primary'>{t('memberPosition3')}</span>
              <p className='text-base'>{t('memberStory3')}</p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='mb-20 flex flex-col gap-8 md:flex-row md:gap-16'
          >
            <img className='max-w-[322px] rounded-[10px] object-cover' src={Member4} alt='Member' />

            <div className='flex flex-col justify-center md:self-center'>
              <h3 className='mb-3 text-3xl'>{t('memberName4')}</h3>
              <span className='mb-6 text-base uppercase text-primary'>{t('memberPosition4')}</span>
              <p className='text-base'>{t('memberStory4')}</p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='flex flex-col gap-8 md:flex-row md:gap-16'
          >
            <img className='max-w-[322px] rounded-[10px] object-cover' src={Member5} alt='Member' />

            <div className='flex flex-col justify-center md:self-center'>
              <h3 className='mb-3 text-3xl'>{t('memberName5')}</h3>
              <span className='mb-6 text-base uppercase text-primary'>{t('memberPosition5')}</span>
              <p className='text-base'>{t('memberStory5')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Management | Nord Precious Metals</title>
      <meta
        name='description'
        content='Our team reflects a commitment to diversity of approaches, critically necessary to succeed.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "management"] }, language: { eq: $language } }) {
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
