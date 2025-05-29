import * as React from 'react';
import { graphql } from 'gatsby';
import {
  RiToolsFill,
  RiBarChart2Line,
  RiLeafLine,
  RiFileShieldLine,
  RiRobot2Line,
  RiFlaskLine,
  RiArrowDownSLine,
} from 'react-icons/ri';
import { Fragment } from 'react';
import CountUp from 'react-countup';
import { AnimatePresence, easeOut, motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

import Quote from '@components/quote';
import Layout from '@components/layout';
import Button from '@components/button';
import DataWrapper from '@components/data-wrapper';

import RampImage from '@media/projects/castle-east/ramp.webp';
import GoldImage from '@media/projects/castle-east/gold.webp';
import SilverImage from '@media/projects/castle-east/silver.webp';
import HistoryImage from '@media/projects/castle-east/history.webp';
import GeologyImage from '@media/projects/castle-east/geology.webp';
import OverviewImage from '@media/projects/castle-east/overview.webp';
import DrillCore1Image from '@media/projects/castle-east/drill-core-1.webp';
import DrillCore2Image from '@media/projects/castle-east/drill-core-2.webp';

import ResourceEstimatePDF from '@media/projects/castle-east/resource-estimate.pdf';

export default function CastleEast() {
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

              <Button className='w-full md:w-fit' type='tertiary' external href={ResourceEstimatePDF}>
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

      <div className='bg-secondary py-20'>
        <div className='container mx-auto grid gap-16 px-5 md:px-10'>
          <h2 className='text-center text-4xl text-white'>{t('milestoneTitle')}</h2>

          <div className='grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex flex-col items-center gap-2 text-center'
            >
              <div className='mb-4 flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiToolsFill className='size-10' />
              </div>
              <p className='text-2xl text-white'>{t('milestoneItem1Title')}</p>
              <p className='text-beigeLight'>{t('milestoneItem1Description')}</p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex flex-col items-center gap-2 text-center'
            >
              <div className='mb-4 flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiBarChart2Line className='size-10' />
              </div>
              <p className='text-2xl text-white'>{t('milestoneItem2Title')}</p>
              <p className='text-beigeLight'>{t('milestoneItem2Description')}</p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex flex-col items-center gap-2 text-center'
            >
              <div className='mb-4 flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiLeafLine className='size-10' />
              </div>
              <p className='text-2xl text-white'>{t('milestoneItem3Title')}</p>
              <p className='text-beigeLight'>{t('milestoneItem3Description')}</p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex flex-col items-center gap-2 text-center'
            >
              <div className='mb-4 flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiFileShieldLine className='size-10' />
              </div>
              <p className='text-2xl text-white'>{t('milestoneItem4Title')}</p>
              <p className='text-beigeLight'>{t('milestoneItem4Description')}</p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex flex-col items-center gap-2 text-center'
            >
              <div className='mb-4 flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiRobot2Line className='size-10' />
              </div>
              <p className='text-2xl text-white'>{t('milestoneItem5Title')}</p>
              <p className='text-beigeLight'>{t('milestoneItem5Description')}</p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex flex-col items-center gap-2 text-center'
            >
              <div className='mb-4 flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiFlaskLine className='size-10' />
              </div>
              <p className='text-2xl text-white'>{t('milestoneItem6Title')}</p>
              <p className='text-beigeLight'>{t('milestoneItem6Description')}</p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-5 pb-10 pt-20 md:px-10'>
        <div className='grid grid-cols-2 gap-16 rounded-2xl bg-gray px-5 py-20 text-center md:px-10 lg:grid-cols-4'>
          <div>
            <p className='mb-2 text-6xl'>
              <mark>
                <CountUp end={60000} duration={3} enableScrollSpy scrollSpyOnce />
              </mark>
            </p>

            <p className='text-lg text-white'>{t('stats1')}</p>
          </div>

          <div>
            <p className='mb-2 text-6xl'>
              <mark>
                <CountUp end={8} duration={3} enableScrollSpy scrollSpyOnce />
              </mark>
            </p>

            <p className='text-lg text-white'>{t('stats2')}</p>
          </div>

          <div>
            <p className='mb-2 text-6xl'>
              <mark>
                <CountUp end={89853} duration={3} enableScrollSpy scrollSpyOnce />
              </mark>
            </p>

            <p className='text-lg text-white'>{t('stats3')}</p>
          </div>

          <div>
            <p className='mb-2 text-6xl'>
              <mark>
                <CountUp end={2} duration={3} enableScrollSpy scrollSpyOnce />
              </mark>
            </p>

            <p className='text-lg text-white'>{t('stats4')}</p>
          </div>
        </div>
      </div>

      <div className='container mx-auto grid gap-16 px-5 py-20 md:px-10 lg:grid-cols-2'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ x: '-80px', opacity: 0 }}
          whileInView={{ x: '0', opacity: 1 }}
          className='flex flex-col gap-4'
        >
          <p className='text-gray'>{t('rampSubtitle')}</p>
          <h2 className='text-4xl'>{t('rampTitle')}</h2>
          <Trans i18nKey='rampDescription' className='my-6 text-lg'></Trans>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ x: '80px', opacity: 0 }}
          whileInView={{ x: '0', opacity: 1 }}
        >
          <img className='w-full rounded-lg object-cover' src={RampImage} alt='Ramp' />
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
          className='mb-20 grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('geologySubtitle')}</p>
            <h2 className='text-3xl text-secondary'>{t('geologyTitle')}</h2>
            <Trans i18nKey='geologyDescription' className='mt-2 text-lg'></Trans>
          </div>

          <img className='w-full rounded-lg object-cover' src={GeologyImage} alt='Geology' />
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
        >
          <Quote quote={t('quote')} author={t('quoteAuthor')} position={t('quotePosition')}></Quote>
        </motion.div>
      </div>

      <div className='container mx-auto grid justify-center gap-10 px-5 py-10 md:px-10'>
        <h2 className='text-center text-4xl'>{t('silver')}</h2>
        <p className='max-w-[900px] text-center'>{t('silverDescription')}</p>
        <img className='w-full max-w-[960px] rounded-lg object-cover' src={SilverImage} alt='Silver' />
      </div>

      <div className='container mx-auto grid justify-center gap-10 px-5 py-10 md:px-10'>
        <h2 className='text-center text-4xl'>{t('gold')}</h2>
        <p className='max-w-[900px] text-center'>{t('goldDescription')}</p>
        <img className='w-full max-w-[960px] rounded-lg object-cover' src={GoldImage} alt='Gold' />
      </div>

      <div className='container mx-auto grid gap-10 px-5 pb-20 pt-10 md:px-10'>
        <div className='rounded-2xl bg-tertiary p-5 md:p-10'>
          <h3 className='mb-4 text-3xl text-white'>{t('estimate')}</h3>
          <p className='mb-6 text-white'>{t('estimateNote1')}</p>
          <p className='mb-2 text-white'>{t('estimateNote2')}</p>
          <p className='text-white'>{t('estimateNote3')}</p>
        </div>

        <div className='rounded-2xl bg-white p-5 md:p-10'>
          <DataWrapper title='Resource Estimate' src='https://datawrapper.dwcdn.net/F9ZAA/1/' />
        </div>

        <div className='rounded-2xl bg-white p-5 md:p-10'>
          <Disclosure as='div' className='w-full'>
            {({ open }) => (
              <>
                <DisclosureButton className='flex w-full items-center'>
                  <h4 className='flex-1 text-left text-3xl'>{t('map')}</h4>

                  <div
                    className={`flex size-12 items-center justify-center rounded-full bg-gray transition-transform hover:bg-secondary md:size-20 ${
                      open ? 'rotate-180' : ''
                    }`}
                  >
                    <RiArrowDownSLine className='size-6 text-white md:size-10' />
                  </div>
                </DisclosureButton>

                <div className='overflow-hidden'>
                  <AnimatePresence>
                    {open && (
                      <DisclosurePanel static as={Fragment}>
                        <motion.div
                          initial={{ opacity: 0, y: -24 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -24 }}
                          transition={{ duration: 0.2, ease: easeOut }}
                          className='mx-auto h-[600px] max-w-[735px] origin-top py-10'
                        >
                          <iframe
                            className='size-full'
                            title='View Drill Holes Map'
                            src='https://castle-geological-claims-map.netlify.app/'
                          ></iframe>
                        </motion.div>
                      </DisclosurePanel>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </Disclosure>
        </div>
      </div>

      <div className='bg-beige'>
        <div className='container mx-auto grid gap-20 px-5 pb-32 pt-20 md:px-10'>
          <div className='grid gap-10'>
            <h2 className='text-4xl'>{t('info1')}</h2>
            <img className='w-full rounded-2xl object-cover' src={DrillCore1Image} alt='Drill core' />
            <p className='text-2xl'>{t('info1Description')}</p>
          </div>

          <div className='grid gap-10'>
            <h2 className='text-4xl'>{t('info2')}</h2>
            <img className='w-full rounded-2xl object-cover' src={DrillCore2Image} alt='Drill core' />
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
      <title>Castle east | Nord Precious Metals</title>
      <meta
        name='description'
        content='Massive native silver grades up to 89,853 g/t (2,621 oz/ton) intersected during surface drilling at the Castle East Robinson Zone less than 2 km east of the Castle Mine shafts.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "castle-east"] }, language: { eq: $language } }) {
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
