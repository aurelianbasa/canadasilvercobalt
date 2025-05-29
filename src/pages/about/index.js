import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';
import ListItem from '@components/list-item';
import CardCheck from '@components/card-check';
import CheckItem from '@components/check-item';

import MapImage from '@media/about/map.webp';
import HeroImage from '@media/about/hero.webp';
import MattImage from '@media/about/matt.webp';
import FrankImage from '@media/about/frank.webp';
import HeroBgImage from '@media/about/hero-bg.webp';
import EnvironmentImage from '@media/about/environment.webp';
import FirstNationsImage from '@media/about/first-nations.webp';
import RegionalHistoryImage from '@media/about/regional-history.webp';

export default function About() {
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
        <div className='container mx-auto px-5 py-20 text-center md:px-10'>
          <p className='mb-4 text-gray'>{t('membersSubtitle')}</p>
          <h2 className='mb-10 text-4xl'>{t('membersTitle')}</h2>

          <div className='mx-auto grid max-w-[710px] gap-16 md:grid-cols-2'>
            <div>
              <img
                className='mx-auto mb-10 h-[332px] w-[322px] rounded-lg object-cover'
                src={FrankImage}
                alt='Frank Basa'
              />

              <h3 className='mb-1 text-3xl'>{t('members1Name')}</h3>
              <p className='mb-4 text-primary'>{t('members1Position')}</p>
              <p>{t('members1Note')}</p>
            </div>

            <div>
              <img
                className='mx-auto mb-10 h-[332px] w-[322px] rounded-lg object-cover'
                src={MattImage}
                alt='Matt Halliday'
              />

              <h3 className='mb-1 text-3xl'>{t('members2Name')}</h3>
              <p className='mb-4 text-primary'>{t('members2Position')}</p>
              <p>{t('members2Note')}</p>
            </div>
          </div>

          <Button className='mx-auto mt-10 w-full md:w-fit' type='primary-outlined' href='/about/management'>
            {t('membersButton')}
          </Button>
        </div>
      </div>

      <div className='bg-white'>
        <div className='container mx-auto px-5 py-20 md:px-10'>
          <p className='mb-4 text-gray'>{t('valuesSubtitle')}</p>
          <h2 className='mb-10 text-4xl'>{t('valuesTitle')}</h2>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <CardCheck
              title={t('values1Title')}
              subtitle={t('values1Subtitle')}
              description={t('values1Description')}
            />
            <CardCheck
              title={t('values2Title')}
              subtitle={t('values2Subtitle')}
              description={t('values2Description')}
            />
            <CardCheck
              title={t('values3Title')}
              subtitle={t('values3Subtitle')}
              description={t('values3Description')}
            />
            <CardCheck
              title={t('values4Title')}
              subtitle={t('values4Subtitle')}
              description={t('values4Description')}
            />
            <CardCheck
              title={t('values5Title')}
              subtitle={t('values5Subtitle')}
              description={t('values5Description')}
            />
          </div>
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
                <h2 className='text-4xl'>{t('historyTitle')}</h2>
              </div>

              <div className='my-10 grid gap-6'>
                <ListItem number='1' title={t('historyList1')} description={t('historyList1Description')} />
                <ListItem number='2' title={t('historyList2')} description={t('historyList2Description')} />
                <ListItem number='3' title={t('historyList3')} description={t('historyList3Description')} />
                <ListItem number='4' title={t('historyList4')} description={t('historyList4Description')} />
              </div>

              <Button className='w-full self-end md:w-fit' type='primary-outlined' href='/about/company-history'>
                {t('historyButton')}
              </Button>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
            >
              <img className='w-full rounded-lg object-cover' src={MapImage} alt='Map' />
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
          <img className='w-full rounded-lg object-cover' src={RegionalHistoryImage} alt='Regional history' />

          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('regionalHistorySubtitle')}</p>
            <h2 className='text-4xl text-secondary'>{t('regionalHistoryTitle')}</h2>
            <Trans i18nKey='regionalHistoryDescription' className='my-2'></Trans>

            <Button className='mt-auto w-full self-end md:w-fit' type='primary-outlined' href='/about/regional-history'>
              {t('regionalHistoryButton')}
            </Button>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='mb-10 grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('communitySubtitle')}</p>
            <h2 className='text-4xl text-secondary'>{t('communityTitle')}</h2>
            <Trans i18nKey='communityDescription' className='my-2'></Trans>

            <Button className='mt-auto w-full self-end md:w-fit' type='primary-outlined' href='/about/community'>
              {t('communityButton')}
            </Button>
          </div>

          <img className='w-full rounded-lg object-cover' src={FirstNationsImage} alt='First nations' />
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <img className='w-full rounded-lg object-cover' src={EnvironmentImage} alt='Environment' />

          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('environmentSubtitle')}</p>
            <h2 className='text-4xl text-secondary'>{t('environmentTitle')}</h2>
            <Trans i18nKey='environmentDescription' className='my-2'></Trans>

            <Button className='mt-auto w-full self-end md:w-fit' type='primary-outlined' href='/about/environment'>
              {t('environmentButton')}
            </Button>
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
      <title>About | Nord Precious Metals</title>
      <meta
        name='description'
        content='Nord Precious Metals is a Canadian junior mining company with a main focus on silver and gold but also with a valuable portfolio of critical mineral projects based in safe and ecologically responsible jurisdictions.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "about"] }, language: { eq: $language } }) {
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
