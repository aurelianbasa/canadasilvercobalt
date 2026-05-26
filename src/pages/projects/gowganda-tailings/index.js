import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';
import DataWrapper from '@components/data-wrapper';

import AerialImage from '@media/projects/gowganda-tailings/aerial.webp';
import RegionalMapImage from '@media/projects/gowganda-tailings/regional-map.webp';
import ClaimMapImage from '@media/projects/gowganda-tailings/claim-map.webp';
import SiteViewImage from '@media/projects/gowganda-tailings/site-view.webp';
import GradeTonnageSvg from '@media/projects/gowganda-tailings/grade-tonnage.svg';

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

        {/* Timeline — six milestones */}
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

            <div className='relative grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5'>
              <div className='flex flex-col items-start'>
                <h3 className='mb-4 inline-block bg-tertiary px-3 text-5xl text-white'>{t('timeline1Year')}</h3>
                <p className='mb-2 font-semibold text-secondary'>{t('timeline1Event')}</p>
                <Trans i18nKey='timeline1Note' className='text-sm text-gray'></Trans>
              </div>

              <div className='flex flex-col items-start'>
                <h3 className='mb-4 inline-block bg-gray px-3 text-5xl text-white'>{t('timeline2Year')}</h3>
                <p className='mb-2 font-semibold text-secondary'>{t('timeline2Event')}</p>
                <Trans i18nKey='timeline2Note' className='text-sm text-gray'></Trans>
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

        {/* Kilborn 1987 IRR sensitivity */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 grid gap-6 rounded-2xl bg-white p-5 md:p-10'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('irrSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('irrTitle')}</h2>
            <Trans i18nKey='irrDescription' className='mt-2 text-lg'></Trans>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div className='flex items-end gap-6 rounded-lg bg-gray px-6 py-4'>
              <div className='flex-1'>
                <p className='mb-2 text-white'>{t('irrStat1Label')}</p>
                <p className='text-lg text-white'>{t('irrStat1Note')}</p>
              </div>
              <p className='text-2xl text-white'>{t('irrStat1Number')}</p>
            </div>

            <div className='flex items-end gap-6 rounded-lg bg-primary px-6 py-4'>
              <div className='flex-1'>
                <p className='mb-2 text-white'>{t('irrStat2Label')}</p>
                <p className='text-lg text-white'>{t('irrStat2Note')}</p>
              </div>
              <p className='text-2xl text-white'>{t('irrStat2Number')}</p>
            </div>
          </div>

          <DataWrapper title='Kilborn 1987 IRR sensitivity' src='https://datawrapper.dwcdn.net/kf7dq/1/' />

          <div className='mt-2 flex flex-col items-end gap-6 rounded-2xl bg-secondary p-5 md:flex-row md:p-8'>
            <div className='w-full'>
              <p className='mb-2 text-white'>{t('kilbornReportDate')}</p>
              <p className='text-2xl text-white'>{t('kilbornReportTitle')}</p>
            </div>
            <Button
              className='w-full md:w-fit'
              external
              type='primary'
              href='https://prd-0420-geoontario-0000-blob-cge0eud7azhvfsf7.z01.azurefd.net/lrc-geology-documents/assessment/41P10NE0023/41P10NE0023.Pdf'
            >
              {t('reportDownloadButton')}
            </Button>
          </div>

          <p className='mt-2 text-sm text-gray'>{t('irrDisclaimer')}</p>
        </motion.div>

        {/* GeoVector 2011 grade-tonnage — SVG embed */}
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

          <div className='grid items-center gap-6 lg:grid-cols-3-9'>
            <div className='self-stretch rounded-2xl bg-tertiary p-5 md:p-8'>
              <h3 className='mb-4 text-3xl text-white'>{t('resourceEstimateTitle')}</h3>
              <p className='mb-2 text-white'>{t('resourceEstimateNote1')}</p>
              <p className='mb-2 text-white'>{t('resourceEstimateNote2')}</p>
              <p className='text-white'>{t('resourceEstimateNote3')}</p>
            </div>

            <div className='w-full rounded-lg bg-white p-4 md:p-6'>
              <img
                className='mx-auto h-auto w-full'
                src={GradeTonnageSvg}
                alt='Grade-tonnage sensitivity for the Indicated Mineral Resource at the Gowganda silver tailings, GeoVector 2011'
              />
            </div>
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

        {/* Processing Strategy (replaces Tailings Recovery Program) */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 flex flex-col gap-8 rounded-2xl bg-white p-5 md:p-10'
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

          <img
            className='mt-4 w-full rounded-lg object-cover'
            src={SiteViewImage}
            alt='Ground-level view across the Gowganda tailings surface'
          />
        </motion.div>

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
              <Button
                className='w-full md:w-fit'
                external
                type='primary'
                href='https://prd-0420-geoontario-0000-blob-cge0eud7azhvfsf7.z01.azurefd.net/lrc-geology-documents/assessment/41P10NE0023/41P10NE0023.Pdf'
              >
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
        content='Four decades of independent technical work on a 2.96 million ounce historical silver resource. Updated mineral resource estimate underway across a consolidated land package in Ontario&apos;s Gowganda-Cobalt silver district.'
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
