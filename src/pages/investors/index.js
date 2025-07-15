import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';

import ReportsBgImage from '@media/investors/reports-bg.webp';

import technicalReport1PDF from '@media/investors/technical-report-2024-january.pdf';
import technicalReport2PDF from '@media/investors/technical-report-2022-august.pdf';
import technicalReport3PDF from '@media/investors/technical-report-2021-may.pdf';
import technicalReport4PDF from '@media/investors/technical-report-2020-july.pdf';
import technicalReport5PDF from '@media/investors/technical-report-2015-august.pdf';

import Financial2024Q1PDF from '@media/investors/financial-2024-q1.pdf';
import Financial2024Q2PDF from '@media/investors/financial-2024-q2.pdf';
import Financial2024Q3PDF from '@media/investors/financial-2024-q3.pdf';

import Financial2023Q1PDF from '@media/investors/financial-2023-q1.pdf';
import Financial2023Q2PDF from '@media/investors/financial-2023-q2.pdf';
import Financial2023Q3PDF from '@media/investors/financial-2023-q3.pdf';
import Financial2023Q4PDF from '@media/investors/financial-2023-q4.pdf';

import Financial2022Q1PDF from '@media/investors/financial-2022-q1.pdf';
import Financial2022Q2PDF from '@media/investors/financial-2022-q2.pdf';
import Financial2022Q3PDF from '@media/investors/financial-2022-q3.pdf';
import Financial2022Q4PDF from '@media/investors/financial-2022-q4.pdf';

import Financial2021Q1PDF from '@media/investors/financial-2021-q1.pdf';
import Financial2021Q2PDF from '@media/investors/financial-2021-q2.pdf';
import Financial2021Q3PDF from '@media/investors/financial-2021-q3.pdf';
import Financial2021Q4PDF from '@media/investors/financial-2021-q4.pdf';

import Financial2020Q1PDF from '@media/investors/financial-2020-q1.pdf';
import Financial2020Q2PDF from '@media/investors/financial-2020-q2.pdf';
import Financial2020Q3PDF from '@media/investors/financial-2020-q3.pdf';
import Financial2020Q4PDF from '@media/investors/financial-2020-q4.pdf';

import Financial2019Q1PDF from '@media/investors/financial-2019-q1.pdf';
import Financial2019Q2PDF from '@media/investors/financial-2019-q2.pdf';
import Financial2019Q3PDF from '@media/investors/financial-2019-q3.pdf';
import Financial2019Q4PDF from '@media/investors/financial-2019-q4.pdf';

import Financial2018Q1PDF from '@media/investors/financial-2018-q1.pdf';
import Financial2018Q2PDF from '@media/investors/financial-2018-q2.pdf';
import Financial2018Q3PDF from '@media/investors/financial-2018-q3.pdf';
import Financial2018Q4PDF from '@media/investors/financial-2018-q4.pdf';

import Management2024Q1PDF from '@media/investors/management-2024-q1.pdf';
import Management2024Q2PDF from '@media/investors/management-2024-q2.pdf';
import Management2024Q3PDF from '@media/investors/management-2024-q3.pdf';

import Management2023Q1PDF from '@media/investors/management-2023-q1.pdf';
import Management2023Q2PDF from '@media/investors/management-2023-q2.pdf';
import Management2023Q3PDF from '@media/investors/management-2023-q3.pdf';
import Management2023Q4PDF from '@media/investors/management-2023-q4.pdf';

import Management2022Q1PDF from '@media/investors/management-2022-q1.pdf';
import Management2022Q2PDF from '@media/investors/management-2022-q2.pdf';
import Management2022Q3PDF from '@media/investors/management-2022-q3.pdf';
import Management2022Q4PDF from '@media/investors/management-2022-q4.pdf';

import Management2021Q1PDF from '@media/investors/management-2021-q1.pdf';
import Management2021Q2PDF from '@media/investors/management-2021-q2.pdf';
import Management2021Q3PDF from '@media/investors/management-2021-q3.pdf';
import Management2021Q4PDF from '@media/investors/management-2021-q4.pdf';

import Management2020Q1PDF from '@media/investors/management-2020-q1.pdf';
import Management2020Q2PDF from '@media/investors/management-2020-q2.pdf';
import Management2020Q3PDF from '@media/investors/management-2020-q3.pdf';
import Management2020Q4PDF from '@media/investors/management-2020-q4.pdf';

import Management2019Q1PDF from '@media/investors/management-2019-q1.pdf';
import Management2019Q2PDF from '@media/investors/management-2019-q2.pdf';
import Management2019Q3PDF from '@media/investors/management-2019-q3.pdf';
import Management2019Q4PDF from '@media/investors/management-2019-q4.pdf';

import Management2018Q1PDF from '@media/investors/management-2018-q1.pdf';
import Management2018Q2PDF from '@media/investors/management-2018-q2.pdf';
import Management2018Q3PDF from '@media/investors/management-2018-q3.pdf';
import Management2018Q4PDF from '@media/investors/management-2018-q4.pdf';

import agmProxyPDF from '@media/investors/proxy.pdf';
import agmCircularPDF from '@media/investors/circular.pdf';

import FactSheetPDF from '@media/investors/fact-sheet.pdf';
import PresentationPDF from '@media/investors/presentation.pdf';

export default function Investors() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className='pt-32 md:pt-44'>
        <div id='stockInformation' className='container mx-auto px-5 pb-10 text-center md:px-10'>
          <p className='text-gray'>{t('stockSubtitle')}</p>
          <h1 className='my-4 text-4xl text-secondary'>{t('stockTitle')}</h1>
          <p>{t('stockDescription')}</p>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
          >
            <iframe
              className='mt-16 h-[450px] w-full'
              title='NORD PRECIOUS METALS MNG INC'
              src='https://www.tradingview-widget.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22TSXV%3ANTH%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A400%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22light%22%2C%22trendLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%201)%22%2C%22underLineColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200.3)%22%2C%22underLineBottomColor%22%3A%22rgba(41%2C%2098%2C%20255%2C%200)%22%2C%22isTransparent%22%3Afalse%2C%22autosize%22%3Afalse%2C%22largeChartUrl%22%3A%22%22%2C%22utm_source%22%3A%22www.nordpreciousmetals.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22www.nordpreciousmetals.com%2Finvestors%2F%23stock-information-chart%22%7D'
            ></iframe>
          </motion.div>
        </div>

        <div className='container mx-auto grid gap-6 px-5 pb-10 pt-5 md:grid-cols-2 md:px-10 lg:grid-cols-3'>
          <div className='grid gap-8 rounded-2xl bg-white p-5 md:p-10'>
            <div className='grid gap-2'>
              <p className='text-2xl text-secondary'>{t('exchange1Title')}</p>
              <p>{t('exchange1Description')}</p>
            </div>

            <Button className='w-full' external type='primary' href='https://money.tmx.com/en/quote/NTH'>
              {t('exchange1Button')}
            </Button>
          </div>

          <div className='grid gap-8 rounded-2xl bg-white p-5 md:p-10'>
            <div className='grid gap-2'>
              <p className='text-2xl text-secondary'>{t('exchange2Title')}</p>
              <p>{t('exchange2Description')}</p>
            </div>

            <Button className='w-full' external type='primary' href='https://www.otcmarkets.com/stock/CCWOF/quote'>
              {t('exchange2Button')}
            </Button>
          </div>

          <div className='grid gap-8 rounded-2xl bg-white p-5 md:p-10'>
            <div className='grid gap-2'>
              <p className='text-2xl text-secondary'>{t('exchange3Title')}</p>
              <p>{t('exchange3Description')}</p>
            </div>

            <Button
              className='w-full'
              external
              type='primary'
              href='https://www.boerse-frankfurt.de/equity/nord-precious-metals-mining'
            >
              {t('exchange3Button')}
            </Button>
          </div>
        </div>

        <div className='bg-secondary py-20'>
          <div id='capitalStructure' className='container mx-auto px-5 text-center md:px-10'>
            <p className='text-gray'>{t('capitalSubtitle')}</p>
            <h2 className='mb-16 mt-4 text-4xl text-white'>{t('capitalTitle')}</h2>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='rounded-lg bg-white p-10 text-center'
              >
                <p className='mb-2 text-3xl text-secondary'>{t('capitalStats1Value')}</p>
                <p className='text-gray'>{t('capitalStats1')}</p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='rounded-lg bg-white p-10 text-center'
              >
                <p className='mb-2 text-3xl text-secondary'>{t('capitalStats2Value')}</p>
                <p className='text-gray'>{t('capitalStats2')}</p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='rounded-lg bg-white p-10 text-center'
              >
                <p className='mb-2 text-3xl text-secondary'>{t('capitalStats3Value')}</p>
                <p className='text-gray'>{t('capitalStats3')}</p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='rounded-lg bg-white p-10 text-center'
              >
                <p className='mb-2 text-3xl text-secondary'>{t('capitalStats4Value')}</p>
                <p className='text-gray'>{t('capitalStats4')}</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div id='technicalReports' className='container mx-auto px-5 pt-20 md:px-10'>
          <h2 className='mb-16 text-4xl text-secondary'>{t('technicalReportsTitle')}</h2>

          <div className='grid gap-6 lg:grid-cols-2'>
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

        <div id='financials' className='container mx-auto grid gap-6 px-5 py-20 md:px-10 xl:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-2xl bg-white p-5 pb-16 md:p-10'
          >
            <p className='text-gray'>{t('financialSubtitle')}</p>
            <Trans parent='h2' i18nKey='financialTitle' className='mb-6 mt-4 text-4xl text-secondary'></Trans>

            <div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('financial2024')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2024Q1PDF}
                  >
                    {t('financial2024Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2024Q2PDF}
                  >
                    {t('financial2024Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2024Q3PDF}
                  >
                    {t('financial2024Q3')}
                  </a>
                   <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2024Q4PDF}
                  >
                    {t('financial2024Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('financial2023')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2023Q1PDF}
                  >
                    {t('financial2023Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2023Q2PDF}
                  >
                    {t('financial2023Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2023Q3PDF}
                  >
                    {t('financial2023Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2023Q4PDF}
                  >
                    {t('financial2023Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('financial2022')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2022Q1PDF}
                  >
                    {t('financial2022Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2022Q2PDF}
                  >
                    {t('financial2022Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2022Q3PDF}
                  >
                    {t('financial2022Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2022Q4PDF}
                  >
                    {t('financial2022Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('financial2021')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2021Q1PDF}
                  >
                    {t('financial2021Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2021Q2PDF}
                  >
                    {t('financial2021Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2021Q3PDF}
                  >
                    {t('financial2021Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2021Q4PDF}
                  >
                    {t('financial2021Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('financial2020')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2020Q1PDF}
                  >
                    {t('financial2020Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2020Q2PDF}
                  >
                    {t('financial2020Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2020Q3PDF}
                  >
                    {t('financial2020Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2020Q4PDF}
                  >
                    {t('financial2020Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('financial2019')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2019Q1PDF}
                  >
                    {t('financial2019Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2019Q2PDF}
                  >
                    {t('financial2019Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2019Q3PDF}
                  >
                    {t('financial2019Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2019Q4PDF}
                  >
                    {t('financial2019Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('financial2018')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2018Q1PDF}
                  >
                    {t('financial2018Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2018Q2PDF}
                  >
                    {t('financial2018Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2018Q3PDF}
                  >
                    {t('financial2018Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Financial2018Q4PDF}
                  >
                    {t('financial2018Q4')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-2xl bg-white p-5 pb-16 md:p-10'
          >
            <p className='text-gray'>{t('managementSubtitle')}</p>
            <h2 className='mb-6 mt-4 text-4xl text-secondary'>{t('managementTitle')}</h2>

            <div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('management2024')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2024Q1PDF}
                  >
                    {t('management2024Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2024Q2PDF}
                  >
                    {t('management2024Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2024Q3PDF}
                  >
                    {t('management2024Q3')}
                  </a>
                   <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2024Q4PDF}
                  >
                    {t('management2024Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('management2023')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2023Q1PDF}
                  >
                    {t('management2023Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2023Q2PDF}
                  >
                    {t('management2023Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2023Q3PDF}
                  >
                    {t('management2023Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2023Q4PDF}
                  >
                    {t('management2023Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('management2022')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2022Q1PDF}
                  >
                    {t('management2022Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2022Q2PDF}
                  >
                    {t('management2022Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2022Q3PDF}
                  >
                    {t('management2022Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2022Q4PDF}
                  >
                    {t('management2022Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('management2021')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2021Q1PDF}
                  >
                    {t('management2021Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2021Q2PDF}
                  >
                    {t('management2021Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2021Q3PDF}
                  >
                    {t('management2021Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2021Q4PDF}
                  >
                    {t('management2021Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('management2020')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2020Q1PDF}
                  >
                    {t('management2020Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2020Q2PDF}
                  >
                    {t('management2020Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2020Q3PDF}
                  >
                    {t('management2020Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2020Q4PDF}
                  >
                    {t('management2020Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('management2019')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2019Q1PDF}
                  >
                    {t('management2019Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2019Q2PDF}
                  >
                    {t('management2019Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2019Q3PDF}
                  >
                    {t('management2019Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2019Q4PDF}
                  >
                    {t('management2019Q4')}
                  </a>
                </div>
              </div>
              <div className='flex items-center justify-between border-b-2 border-gray/10 py-5 md:px-6 md:py-10'>
                <p className='text-3xl text-secondary'>{t('management2018')}</p>

                <div className='flex gap-2'>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2018Q1PDF}
                  >
                    {t('management2018Q1')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2018Q2PDF}
                  >
                    {t('management2018Q2')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2018Q3PDF}
                  >
                    {t('management2018Q3')}
                  </a>
                  <a
                    className='rounded-lg border-2 border-primary px-3 py-2 text-primary hover:bg-primary hover:text-white md:px-6 md:py-4'
                    target='_blank'
                    rel='noreferrer'
                    href={Management2018Q4PDF}
                  >
                    {t('management2018Q4')}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='bg-beige'>
          <div id='AGM' className='container mx-auto px-5 py-20 md:px-10'>
            <h2 className='mb-16 text-4xl text-secondary'>{t('agmTitle')}</h2>

            <div className='grid gap-6 lg:grid-cols-2'>

              <motion.div
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                initial={{ x: '80px', opacity: 0 }}
                whileInView={{ x: '0', opacity: 1 }}
                className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
              >
                <div className='w-full'>
                  <p className='mb-2'>{t('agmProxyFormDate')}</p>
                  <p className='text-3xl text-white'>{t('agmProxyForm')}</p>
                </div>

                <Button className='w-full md:w-fit' external type='tertiary' href={agmProxyPDF}>
                  {t('agmProxyFormButton')}
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
                  <p className='mb-2'>{t('agmManagementDate')}</p>
                  <p className='text-3xl text-white'>{t('agmManagement')}</p>
                </div>

                <Button className='w-full md:w-fit' external type='tertiary' href={agmCircularPDF}>
                  {t('agmManagementButton')}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div
          id='files'
          style={{ '--bg-image-url': `url(${ReportsBgImage})` }}
          className={`bg-[image:var(--bg-image-url)] bg-cover bg-center py-20`}
        >
          <div className='container mx-auto grid gap-6 px-5 md:grid-cols-2 md:px-10'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '-80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center justify-between rounded-2xl bg-white p-5 md:p-10'
            >
              <p className='text-2xl text-secondary'>{t('factSheet')}</p>

              <Button external type='secondary' href={FactSheetPDF}>
                {t('factSheetButton')}
              </Button>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center justify-between rounded-2xl bg-secondary p-5 md:p-10'
            >
              <p className='text-2xl text-white'>{t('presentation')}</p>

              <Button external type='tertiary' href={PresentationPDF}>
                {t('presentationButton')}
              </Button>
            </motion.div>
          </div>
        </div>

        <div id='coniagasFMV' className='container mx-auto px-5 py-20 md:px-10'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='rounded-2xl bg-tertiary p-5 md:p-10'
          >
            <p className='text-white'>{t('fmvSubtitle')}</p>
            <h3 className='mb-6 mt-4 text-3xl text-white'>{t('fmvTitle')}</h3>
            <p className='text-white'>{t('fmvDescription')}</p>
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
      <title>Investors | Nord Precious Metals</title>
      <meta
        name='description'
        content='Highest Silver grades in the world. Latest resource estimate at Castle East marks first grassroots discovery in decades for the Northern Ontario silver cobalt camp.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "investors"] }, language: { eq: $language } }) {
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
