import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';

export default function HistoricInformationDisclaimer() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className='bg-beige'>
        <div className='container mx-auto px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-44'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='flex flex-col gap-8 rounded-2xl bg-white p-5 md:p-10'
            id='historic-information-disclaimer'
          >
            <h1 className='text-4xl text-secondary'>{t('pageTitle')}</h1>

            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl text-secondary'>{t('castleEastHeading')}</h2>
              <p>{t('castleEastBody')}</p>
            </div>

            <div className='flex flex-col gap-2'>
              <h2 className='text-2xl text-secondary'>{t('productionHeading')}</h2>
              <p>{t('productionBody')}</p>
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
      <title>Historic Information Disclaimer | Nord Precious Metals</title>
      <meta name='description' content='Historic Information Disclaimer for Nord Precious Metals Mining Inc.' />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common", "historic-information-disclaimer"] }, language: { eq: $language } }
    ) {
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
