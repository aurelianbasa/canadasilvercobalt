import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';
import StaticCountUp from '@components/static-count-up';

import AerialImage from '@media/projects/gowganda-tailings/aerial.webp';
import RegionalMapImage from '@media/projects/gowganda-tailings/regional-map.webp';
import ClaimMapImage from '@media/projects/gowganda-tailings/claim-map.webp';
import SiteViewBgImage from '@media/projects/gowganda-tailings/site-view-bg.webp';
import ResourceModelImage from '@media/projects/gowganda-tailings/resource-model-plan-view.webp';

const RELEASE_URL =
  'https://www.nordpreciousmetals.com/news/2026/updated-gowganda-tailings-indicated-mineral-resource-of-2-814-million-ounces-of-silver-at-47-4-g-t/';

const SEDAR_2011_REPORT_URL =
  'https://www.sedarplus.ca/csfsprod/data120/filings/01756596/00000002/k%3A%5Cfilings%5Clivework%5Cwkout%5C32176%5CTech_.pdf';

const TIMELINE_COLORS = ['bg-tertiary', 'bg-brown', 'bg-secondary', 'bg-tertiary', 'bg-brown', 'bg-primary'];

export default function GowgandaTailings() {
  const { t } = useTranslation();

  const timeline = TIMELINE_COLORS.map((color, i) => ({ id: i + 1, color }));
  const timelineRows = [timeline.slice(0, 3), timeline.slice(3)];
  const headers = t('resourceTableHeaders', { returnObjects: true });

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
            <Trans i18nKey='heroDescription' className='mt-6'></Trans>
            <Trans
              i18nKey='heroNote'
              className='mb-6 text-sm text-gray'
              components={{
                link: (
                  <a className='underline hover:text-primary' href={RELEASE_URL} target='_blank' rel='noreferrer'>
                    news release
                  </a>
                ),
              }}
            ></Trans>
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

          <div className='flex flex-col gap-10'>
            {timelineRows.map((row, rowIndex) => (
              <div key={rowIndex} className='relative'>
                {/* Horizontal connector line behind the year markers, desktop only */}
                <div className='absolute inset-x-[8%] top-5 hidden h-1 bg-primary/30 lg:block' />

                <div className='relative grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3'>
                  {row.map(({ id, color }) => (
                    <div key={id} className='flex flex-col items-start'>
                      <h3 className={`mb-4 inline-block px-3 text-3xl text-white ${color}`}>{t(`timeline${id}Year`)}</h3>
                      <p className='mb-2 font-semibold text-secondary'>{t(`timeline${id}Event`)}</p>
                      <p className='text-sm text-gray'>{t(`timeline${id}Note`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mineral Resource Estimate, effective August 1, 2026 */}
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 flex flex-col gap-8 rounded-2xl bg-beige p-5 md:p-10'
          id='mineral-resource-estimate'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('resourceSubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('resourceTitle')}</h2>
            <p className='mt-2 text-lg'>{t('resourceDescription')}</p>
          </div>

          <div className='flex flex-col gap-3'>
            <p className='font-semibold text-secondary'>{t('resourceTableTitle')}</p>
            <div className='hidden overflow-x-auto rounded-lg bg-white md:block'>
              <table className='w-full text-left'>
                <thead className='bg-secondary text-white'>
                  <tr>
                    {headers.map((header, i) => (
                      <th key={header} scope='col' className={`p-3 font-semibold md:px-5 ${i > 1 ? 'text-right' : ''}`}>
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {t('resourceTableRows', { returnObjects: true }).map((row) => (
                    <tr key={row[0]} className='border-b border-beige'>
                      {row.map((cell, i) => (
                        <td key={i} className={`p-3 md:px-5 ${i > 1 ? 'text-right tabular-nums' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className='font-semibold text-secondary'>
                    {t('resourceTableTotal', { returnObjects: true }).map((cell, i) => (
                      <td key={i} className={`p-3 md:px-5 ${i > 1 ? 'text-right tabular-nums' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Stacked version of Table 1 for narrow screens */}
            <div className='grid gap-3 md:hidden'>
              {[...t('resourceTableRows', { returnObjects: true }), t('resourceTableTotal', { returnObjects: true })].map(
                (row, rowIndex, rows) => (
                  <dl
                    key={row[0]}
                    className={`grid grid-cols-2 gap-x-4 gap-y-1 rounded-lg p-4 text-sm ${
                      rowIndex === rows.length - 1 ? 'bg-secondary text-white' : 'bg-white'
                    }`}
                  >
                    <dt className='sr-only'>{headers[0]}</dt>
                    <dd className='font-semibold'>{row[0]}</dd>
                    <dt className='sr-only'>{headers[1]}</dt>
                    <dd className='text-right'>{row[1]}</dd>
                    {row.slice(2).map((cell, i) => (
                      <React.Fragment key={i}>
                        <dt>{headers[i + 2]}</dt>
                        <dd className='text-right tabular-nums'>{cell}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                ),
              )}
            </div>
            <p className='text-sm text-gray'>{t('resourceTableSource')}</p>
          </div>

          <div className='flex flex-col gap-3'>
            <h3 className='text-2xl text-secondary'>{t('resourceNotesTitle')}</h3>
            <ol className='flex list-decimal flex-col gap-2 pl-5 text-sm text-secondary'>
              {t('resourceNotes', { returnObjects: true }).map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ol>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-2xl text-secondary'>{t('modellingTitle')}</h3>
            <p className='text-lg'>{t('modellingBody1')}</p>
            <p className='text-lg'>{t('modellingBody2')}</p>
          </div>

          <figure className='flex flex-col gap-3'>
            <img
              className='w-full rounded-lg bg-white object-contain'
              src={ResourceModelImage}
              alt={t('figure1Alt')}
              loading='lazy'
              width='1602'
              height='1308'
            />
            <figcaption className='text-sm text-gray'>{t('figure1Caption')}</figcaption>
          </figure>

          <p className='text-sm text-gray'>{t('priorEstimate')}</p>

          <div className='flex flex-col gap-4 border-t-2 border-white pt-6 md:flex-row md:items-center md:gap-8'>
            <Button className='w-full md:w-fit' external type='primary' href={RELEASE_URL}>
              {t('releaseLink')}
            </Button>
            <p className='text-sm text-gray'>{t('technicalReportPending')}</p>
          </div>
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
            alt='Detailed claim map of the Castle Mine property showing the newly acquired BMR leases, Gowganda Silver Tailings, and the acquired BMR leases (Miller Lake-O&apos;Brien, Millerett and Bonsall) and the adjacent Capitol past producer'
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
                  <StaticCountUp end={43200000} duration={3} separator=',' enableScrollSpy scrollSpyOnce />
                </mark>
              </p>
              <p className='text-lg text-white'>{t('counterMine1')}</p>
            </div>

            <div>
              <p className='mb-2 text-4xl md:text-5xl xl:text-6xl'>
                <mark>
                  <StaticCountUp end={9410095} duration={3} separator=',' enableScrollSpy scrollSpyOnce />
                </mark>
              </p>
              <p className='text-lg text-white'>{t('counterMine2')}</p>
            </div>

            <div>
              <p className='mb-2 text-4xl md:text-5xl xl:text-6xl'>
                <mark>
                  <StaticCountUp end={611822} duration={3} separator=',' enableScrollSpy scrollSpyOnce />
                </mark>
              </p>
              <p className='text-lg text-white'>{t('counterMine3')}</p>
            </div>

            <div>
              <p className='mb-2 text-4xl md:text-5xl xl:text-6xl'>
                <mark>
                  <StaticCountUp end={600000} duration={3} separator=',' enableScrollSpy scrollSpyOnce />
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
              <p className='mt-2 text-lg'>{t('processingLead1')}</p>
              <p className='text-lg'>{t('processingLead2')}</p>
              <p className='text-lg'>{t('processingLead3')}</p>
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
                <p className='mb-2 text-white'>{t('docReleaseSource')}</p>
                <p className='text-2xl text-white'>{t('docReleaseTitle')}</p>
              </div>
              <Button className='w-full md:w-fit' external type='primary' href={RELEASE_URL}>
                {t('documentsButton')}
              </Button>
            </div>

            <div className='flex flex-col items-end gap-6 rounded-2xl bg-secondary p-5 md:flex-row md:p-8'>
              <div className='w-full'>
                <p className='mb-2 text-white'>{t('docReport2026Source')}</p>
                <p className='text-2xl text-white'>{t('docReport2026Title')}</p>
              </div>
              <p className='w-full whitespace-nowrap text-white md:w-fit'>{t('docReport2026Status')}</p>
            </div>

            <div className='flex flex-col items-end gap-6 rounded-2xl bg-secondary p-5 md:flex-row md:p-8'>
              <div className='w-full'>
                <p className='mb-2 text-white'>{t('doc1Source')}</p>
                <p className='text-2xl text-white'>{t('doc1Title')}</p>
                <p className='mt-2 text-primary'>{t('doc1Status')}</p>
              </div>
              <Button className='w-full md:w-fit' external type='primary' href={SEDAR_2011_REPORT_URL}>
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
        content='Indicated Mineral Resource of 1,845,000 tonnes at 47.4 g/t silver containing 2,814,000 ounces (10 g/t cut-off, effective August 1, 2026) in historical tailings at surface, consolidated under Nord in Ontario&apos;s Gowganda-Cobalt silver district.'
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
