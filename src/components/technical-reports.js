import * as React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import Button from '@components/button';

import CastleSilver2025PDF from '@media/investors/technical-report-2025-december.pdf';
import Graal2024PDF from '@media/investors/technical-report-2024-january.pdf';

// Superseded reports are no longer listed, but their existing /static/ download URLs
// stay live until the separate review of older public downloads is settled.
import '@media/investors/technical-report-2022-august.pdf';
import '@media/investors/technical-report-2015-august.pdf';

const reports = [
  { key: 'castleSilver2025', href: CastleSilver2025PDF },
  { key: 'graal2024', href: Graal2024PDF },
];

/**
 * Current technical reports, shared by the Investors and Projects pages.
 * Labels live in common.json under `technicalReports`.
 */
export default function TechnicalReports() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className='mb-16 text-4xl text-secondary'>{t('technicalReports.title')}</h2>

      <div className='grid gap-6 lg:grid-cols-2'>
        {reports.map(({ key, href }, index) => (
          <motion.div
            key={key}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 * (index + 1) }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
          >
            <div className='w-full'>
              <p className='mb-2'>{t(`technicalReports.${key}Date`)}</p>
              <p className='text-3xl text-white'>{t(`technicalReports.${key}`)}</p>
            </div>

            <Button className='w-full md:w-fit' external type='tertiary' href={href}>
              {t('technicalReports.button')}
            </Button>
          </motion.div>
        ))}
      </div>
    </>
  );
}
