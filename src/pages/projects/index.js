import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';
import CardProject from '@components/card-project';

import CastleEastImage from '@media/projects/castle-east.webp';
import CastleMineImage from '@media/projects/castle-mine.webp';
import BeaverMineImage from '@media/projects/beaver-mine.webp';
import GowgandaTailingsImage from '@media/projects/gowganda-tailings.webp';

import TTLFacilityImage from '@media/projects/ttl-facility.webp';

import TTLarticlePDF from '@media/projects/TTLarticle.pdf';

import technicalReport1PDF from '@media/projects/technical-report-2024-january.pdf';
import technicalReport2PDF from '@media/projects/technical-report-2022-august.pdf';
import technicalReport3PDF from '@media/projects/technical-report-2021-may.pdf';
import technicalReport4PDF from '@media/projects/technical-report-2020-july.pdf';
import technicalReport5PDF from '@media/projects/technical-report-2015-august.pdf';
import technicalReport6PDF from '@media/projects/technical-report-2025-december.pdf';

export default function Projects() {
  const { t } = useTranslation();


  return (
    <Layout>
      <div className='container mx-auto px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-44'>
        <p className='mb-4 text-center text-gray'>{t('subtitle')}</p>
        <h1 className='mb-16 text-center text-4xl text-secondary'>{t('title')}</h1>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <CardProject
              title={t('project1')}
              description={t('project1Description')}
              image={CastleEastImage}
              href='/projects/castle-east'
              button={t('project1Button')}
            ></CardProject>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <CardProject
              title={t('project2')}
              description={t('project2Description')}
              image={CastleMineImage}
              href='/projects/castle-mine'
              button={t('project2Button')}
            ></CardProject>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <CardProject
              title={t('project3')}
              description={t('project3Description')}
              image={BeaverMineImage}
              href='/projects/beaver-mine'
              button={t('project3Button')}
            ></CardProject>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <CardProject
              title={t('project4')}
              description={t('project4Description')}
              image={GowgandaTailingsImage}
              href='/projects/gowganda-tailings'
              button={t('project4Button')}
            ></CardProject>
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto px-5 py-20 md:px-10'>
        <h2 className='mb-16 text-4xl text-secondary'>{t('technicalReportsTitle')}</h2>

        <div className='grid gap-6 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
          >
            <div className='w-full'>
              <p className='mb-2'>{t('technicalReport6Date')}</p>
              <p className='text-3xl text-white'>{t('technicalReport6')}</p>
            </div>

            <Button className='w-full md:w-fit' external type='tertiary' href={technicalReport6PDF}>
              {t('technicalReportButton')}
            </Button>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
          >
            <div className='w-full'>
              <p className='mb-2'>{t('technicalReport5Date')}</p>
              <p className='text-3xl text-white'>{t('technicalReport5')}</p>
            </div>

            <Button className='w-full md:w-fit' external type='tertiary' href={technicalReport1PDF}>
              {t('technicalReportButton')}
            </Button>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
          >
            <div className='w-full'>
              <p className='mb-2'>{t('technicalReport4Date')}</p>
              <p className='text-3xl text-white'>{t('technicalReport4')}</p>
            </div>

            <Button className='w-full md:w-fit' external type='tertiary' href={technicalReport2PDF}>
              {t('technicalReportButton')}
            </Button>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
          >
            <div className='w-full'>
              <p className='mb-2'>{t('technicalReport3Date')}</p>
              <p className='text-3xl text-white'>{t('technicalReport3')}</p>
            </div>

            <Button className='w-full md:w-fit' external type='tertiary' href={technicalReport3PDF}>
              {t('technicalReportButton')}
            </Button>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
          >
            <div className='w-full'>
              <p className='mb-2'>{t('technicalReport2Date')}</p>
              <p className='text-3xl text-white'>{t('technicalReport2')}</p>
            </div>

            <Button className='w-full md:w-fit' external type='tertiary' href={technicalReport4PDF}>
              {t('technicalReportButton')}
            </Button>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
          >
            <div className='w-full'>
              <p className='mb-2'>{t('technicalReport1Date')}</p>
              <p className='text-3xl text-white'>{t('technicalReport1')}</p>
            </div>

            <Button className='w-full md:w-fit' external type='tertiary' href={technicalReport5PDF}>
              {t('technicalReportButton')}
            </Button>
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
          <img className='w-full rounded-lg object-cover' src={TTLFacilityImage} alt='Temiskaming Testing Labs' />

          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('temiskamingSubtitle')}</p>
            <h2 className=' text-4xl text-secondary'>{t('temiskamingTitle')}</h2>
            <Trans i18nKey='temiskamingDescription' className='mt-2'></Trans>

            <div className='my-2 flex flex-col gap-6 md:flex-row'>
              <Button className='w-full md:w-fit' type='primary' external href={TTLarticlePDF}>
                {t('temiskamingButton1')}
              </Button>
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
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('re2OxSubtitle')}</p>
            <h2 className=' text-4xl text-secondary'>{t('re2OxTitle')}</h2>
            <Trans i18nKey='re2OxDescription' className='mt-2'></Trans>

            <Button className='mt-2 w-full md:w-fit' type='primary' href='/news/2026'>
              {t('re2OxButton')}
            </Button>
          </div>

          <img className='w-full rounded-lg object-cover' src={CastleMineImage} alt='Gowganda Silver Camp' />
        </motion.div>
      </div>

    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Projects | Nord Precious Metals</title>
      <meta name='description' content='Featuring Silver, Copper, Nickel, and Gold Discoveries.' />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "projects"] }, language: { eq: $language } }) {
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