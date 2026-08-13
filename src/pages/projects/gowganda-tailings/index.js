import * as React from 'react';
import { graphql } from 'gatsby';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';

import AerialImage from '@media/projects/gowganda-tailings/aerial.webp';
import RegionalMapImage from '@media/projects/gowganda-tailings/regional-map.webp';
import ClaimMapImage from '@media/projects/gowganda-tailings/claim-map.webp';
import SiteViewBgImage from '@media/projects/gowganda-tailings/site-view-bg.webp';
import LeslieEngineeringPDF from '@media/projects/gowganda-tailings/leslie-engineering-cost-estimate-2000.pdf';

export default function GowgandaTailings() {
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
            <img
              className='w-full rounded-lg object-cover'
              src={AerialImage}
              alt='Aerial view of the Gowganda Tailings with Miller Lake O&apos;Brien mine in the background'
            />
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto px-5 py-10 md:px-10'>
        {/* Regional context — full-width map below text */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 flex flex-col gap-8 rounded-2xl bg-beige p-5 md:p-10'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('regionalSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('regionalTitle')}</h2>
            <Trans i18nKey='regionalDescription' className='mt-2 text-lg'></Trans>
          </div>

          <img
            className='w-full rounded-lg object-contain'
            src={RegionalMapImage}
            alt='Regional map showing Gowganda Silver Tailings, Castle Mine, and the Temiskaming Testing Lab within the Cobalt-Gowganda camp'
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 flex flex-col gap-10 rounded-2xl bg-beige p-5 md:p-10'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('timelineSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('timelineTitle')}</h2>
            <Trans i18nKey='timelineDescription' className='mt-2 text-lg'></Trans>
          </div>

          <div className='relative'>
            {/* Horizontal connector line behind the year markers, desktop only */}
            <div className='absolute left-[8%] right-[8%] top-10 hidden h-1 bg-primary/30 lg:block' />

            <div className='relative grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
              <div className='flex flex-col items-start'>
                <h3 className='mb-4 inline-block bg-tertiary px-3 text-5xl text-white'>{t('timeline1Year')}</h3>
                <p className='mb-2 font-semibold text-secondary'>{t('timeline1Event')}</p>
                <Trans i18nKey='timeline1Note' className='text-sm text-gray'></Trans>
              </div>

              <div className='flex flex-col items-start'>
                <h3 className='mb-4 inline-block bg-brown px-3 text-5xl text-white'>{t('timeline3Year')}</h3>
                <p className='mb-2 font-semibold text-secondary'>{t('timeline3Event')}</p>
                <Trans i18nKey='timeline3Note' className='text-sm text-gray'></Trans>
              </div>

              <div className='flex flex-col items-start'>
                <h3 className='mb-4 inline-block bg-secondary px-3 text-5xl text-white'>{t('timeline4Year')}</h3>
                <p className='mb-2 font-semibold text-secondary'>{t('timeline4Event')}</p>
                <Trans i18nKey='timeline4Note' className='text-sm text-gray'></Trans>
              </div>

              <div className='flex flex-col items-start'>
                <h3 className='mb-4 inline-block bg-primary px-3 text-5xl text-white'>{t('timeline5Year')}</h3>
                <p className='mb-2 font-semibold text-secondary'>{t('timeline5Event')}</p>
                <Trans i18nKey='timeline5Note' className='text-sm text-gray'></Trans>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GeoVector 2011 technical report */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 grid gap-6 rounded-2xl bg-beige p-5 md:p-10'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('resourceSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('resourceTitle')}</h2>
            <Trans i18nKey='resourceDescription' className='mt-2 text-lg'></Trans>
          </div>

          <div className='mt-2 flex flex-col items-end gap-6 rounded-2xl bg-secondary p-5 md:flex-row md:p-8'>
            <div className='w-full'>
              <p className='mb-2 text-white'>{t('temexReportDate')}</p>
              <p className='text-2xl text-white'>{t('temexReportTitle')}</p>
            </div>
            <Button
              className='w-full md:w-fit'
              external
              type='primary'
              href='https://www.sedarplus.ca/csfsprod/data120/filings/01756596/00000002/k%3A%5Cfilings%5Clivework%5Cwkout%5C32176%5CTech_.pdf'
            >
              {t('reportDownloadButton')}
            </Button>
          </div>

          <p className='mt-2 text-sm text-gray'>{t('resourceDisclaimer')}</p>
        </motion.div>

        {/* Leases & geology — combined History + Geology with full-width claim map */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 flex flex-col gap-8 rounded-2xl bg-white p-5 md:p-10'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('leasesSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('leasesTitle')}</h2>
            <Trans i18nKey='leasesDescription' className='mt-2 text-lg'></Trans>
          </div>

          <img
            className='w-full rounded-lg object-contain'
            src={ClaimMapImage}
            alt='Detailed claim map of the Castle Mine property showing the newly acquired BMR leases, Gowganda Silver Tailings, and adjacent past producers including Miller Lake-O&apos;Brien, Millerette, Capitol, and Bonsall'
          />
        </motion.div>

        {/* Consolidation at scale — combined past production counter */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 flex flex-col gap-8 rounded-2xl bg-white p-5 md:p-10'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('consolidationSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('consolidationTitle')}</h2>
            <Trans i18nKey='consolidationDescription' className='mt-2 text-lg'></Trans>
          </div>

          <div className='grid grid-cols-1 gap-10 rounded-2xl bg-gray px-5 py-16 text-center md:grid-cols-2 md:px-10'>
            <div>
              <p className='mb-2 text-4xl md:text-5xl xl:text-6xl'>
                <mark>
                  <CountUp end={43200000} duration={3} separator=',' enableScrollSpy scrollSpyOnce />
                </mark>
              </p>
              <p className='text-lg text-white'>{t('counterMine1')}</p>
            </div>

            <div>
              <p className='mb-2 text-4xl md:text-5xl xl:text-6xl'>
                <mark>
                  <CountUp end={9410095} duration={3} separator=',' enableScrollSpy scrollSpyOnce />
                </mark>
              </p>
              <p className='text-lg text-white'>{t('counterMine2')}</p>
            </div>

            <div>
              <p className='mb-2 text-4xl md:text-5xl xl:text-6xl'>
                <mark>
                  <CountUp end={611822} duration={3} separator=',' enableScrollSpy scrollSpyOnce />
                </mark>
              </p>
              <p className='text-lg text-white'>{t('counterMine3')}</p>
            </div>

            <div>
              <p className='mb-2 text-4xl md:text-5xl xl:text-6xl'>
                <mark>
                  <CountUp end={600000} duration={3} separator=',' enableScrollSpy scrollSpyOnce />
                </mark>
              </p>
              <p className='text-lg text-white'>{t('counterMine4')}</p>
            </div>
          </div>

          <p className='text-sm text-gray'>{t('consolidationDisclaimer')}</p>
        </motion.div>
      </div>

      {/* Processing Strategy — sits on a blurred site-view backdrop */}
      <div
        style={{ '--bg-image-url': `url(${SiteViewBgImage})` }}
        className='bg-[image:var(--bg-image-url)] bg-cover bg-center py-10 md:py-16'
      >
        <div className='container mx-auto px-5 md:px-10'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='flex flex-col gap-8 rounded-2xl bg-white p-5 md:p-10'
          >
            <div className='flex flex-col gap-4'>
              <p className='text-gray'>{t('processingSubtitle')}</p>
              <h2 className='text-3xl text-secondary'>{t('processingTitle')}</h2>
              <Trans i18nKey='processingBody1' className='mt-2 text-lg'></Trans>
              <Trans i18nKey='processingBody2' className='text-lg'></Trans>
            </div>

            <div className='flex flex-col gap-4 border-t-2 border-beige pt-6'>
              <h3 className='text-2xl text-secondary'>{t('processingSubHeading')}</h3>
              <Trans i18nKey='processingBody3' className='text-lg'></Trans>
              <Trans i18nKey='processingBody4' className='text-lg'></Trans>
              <Trans i18nKey='processingBody5' className='text-lg'></Trans>
            </div>
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto px-5 py-10 md:px-10'>
        {/* Path Forward — 2x2 grid of next steps */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 flex flex-col gap-8 rounded-2xl bg-beige p-5 md:p-10'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('pathForwardSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('pathForwardTitle')}</h2>
          </div>

          <div className='grid gap-6 md:grid-cols-2'>
            <div className='flex flex-col gap-3 rounded-lg bg-white p-5 md:p-6'>
              <p className='text-sm font-semibold uppercase tracking-wider text-primary'>{t('step1Label')}</p>
              <h3 className='text-2xl text-secondary'>{t('step1Title')}</h3>
              <Trans i18nKey='step1Description' className='text-gray'></Trans>
            </div>

            <div className='flex flex-col gap-3 rounded-lg bg-white p-5 md:p-6'>
              <p className='text-sm font-semibold uppercase tracking-wider text-primary'>{t('step2Label')}</p>
              <h3 className='text-2xl text-secondary'>{t('step2Title')}</h3>
              <Trans i18nKey='step2Description' className='text-gray'></Trans>
            </div>

            <div className='flex flex-col gap-3 rounded-lg bg-white p-5 md:p-6'>
              <p className='text-sm font-semibold uppercase tracking-wider text-primary'>{t('step3Label')}</p>
              <h3 className='text-2xl text-secondary'>{t('step3Title')}</h3>
              <Trans i18nKey='step3Description' className='text-gray'></Trans>
            </div>

            <div className='flex flex-col gap-3 rounded-lg bg-white p-5 md:p-6'>
              <p className='text-sm font-semibold uppercase tracking-wider text-primary'>{t('step4Label')}</p>
              <h3 className='text-2xl text-secondary'>{t('step4Title')}</h3>
              <Trans i18nKey='step4Description' className='text-gray'></Trans>
            </div>
          </div>
        </motion.div>

        {/* Key Documents — reference list */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='flex flex-col gap-6 rounded-2xl bg-white p-5 md:p-10'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('documentsSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('documentsTitle')}</h2>
          </div>

          <div className='grid gap-4'>
            <div className='flex flex-col items-end gap-6 rounded-2xl bg-secondary p-5 md:flex-row md:p-8'>
              <div className='w-full'>
                <p className='mb-2 text-white'>{t('doc1Source')}</p>
                <p className='text-2xl text-white'>{t('doc1Title')}</p>
              </div>
              <Button
                className='w-full md:w-fit'
                external
                type='primary'
                href='https://www.sedarplus.ca/csfsprod/data120/filings/01756596/00000002/k%3A%5Cfilings%5Clivework%5Cwkout%5C32176%5CTech_.pdf'
              >
                {t('documentsButton')}
              </Button>
            </div>

            <div className='flex flex-col items-end gap-6 rounded-2xl bg-secondary p-5 md:flex-row md:p-8'>
              <div className='w-full'>
                <p className='mb-2 text-white'>{t('doc2Source')}</p>
                <p className='text-2xl text-white'>{t('doc2Title')}</p>
              </div>
              <Button className='w-full md:w-fit' external type='primary' href={LeslieEngineeringPDF}>
                {t('documentsButton')}
              </Button>
            </div>

          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Gowganda Silver Tailings | Nord Precious Metals</title>
      <meta
        name='description'
        content='Four decades of independent technical work at the Gowganda silver tailings. Updated mineral resource estimate underway across a consolidated land package in Ontario&apos;s Gowganda-Cobalt silver district.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "gowganda-tailings"] }, language: { eq: $language } }) {
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
