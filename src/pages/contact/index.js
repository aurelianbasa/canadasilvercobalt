import * as React from 'react';
import { graphql } from 'gatsby';
import {
  RiHotelLine,
  RiPhoneLine,
  RiMailSendLine,
  RiHomeOfficeLine,
  RiFileTransferLine,
  RiErrorWarningLine,
  RiGitRepositoryLine,
  RiCheckboxCircleLine,
  RiAccountPinCircleLine,
} from 'react-icons/ri';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

import Layout from '@components/layout';
import Button from '@components/button';

import OverviewImage from '@media/contact/overview.webp';

export default function Contact() {
  const { t } = useTranslation();

  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isFormVisible, setIsFormVisible] = React.useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('form-name', 'Contact');

    try {
      const response = await fetch('https://formspree.io/f/maykwkyq', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      setIsFormVisible(false);

      if (response.status === 200) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error.message);
      setIsError(true);
    }
  };

  return (
    <Layout>
      <div className='container mx-auto grid gap-16 px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-44 lg:grid-cols-2'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ x: '-80px', opacity: 0 }}
          whileInView={{ x: '0', opacity: 1 }}
          className='flex flex-col justify-between gap-10 py-0 lg:min-h-[832px] lg:py-10'
        >
          <div className='grid gap-4'>
            <p className='text-gray'>{t('contactSubtitle')}</p>
            <h2 className='mb-4 text-4xl text-secondary'>{t('contactTitle')}</h2>
            <p className='text-tertiary'>{t('contactDescription')}</p>
          </div>
          <div className='grid gap-4'>
            <div className='flex items-center gap-6'>
              <div className='flex size-10 items-center justify-center rounded-full bg-beige md:size-20'>
                <RiAccountPinCircleLine className='size-5 text-tertiary md:size-10' />
              </div>

              <Trans i18nKey='contactName' className='font-semibold text-secondary'></Trans>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex size-10 items-center justify-center rounded-full bg-beige md:size-20'>
                <RiPhoneLine className='size-5 text-tertiary md:size-10' />
              </div>
              <a className='font-semibold text-secondary hover:text-primary' href='tel:416-710-2410'>
                {t('contactPhone')}
              </a>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex size-10 items-center justify-center rounded-full bg-beige md:size-20'>
                <RiMailSendLine className='size-5 text-tertiary md:size-10' />
              </div>
              <a className='font-semibold text-secondary hover:text-primary' href='mailto:waynecheveldayoff@gmail.com'>
                {t('contactEmail')}
              </a>
            </div>
          </div>

          {/* The magnificently oversized subscribe button */}
          <motion.a
            href='https://us15.list-manage.com/subscribe?u=9609677b5d7b4f5074f5f896f&id=322055171a'
            target='_blank'
            rel='noopener noreferrer'
            className='relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-secondary to-primary px-8 py-8 text-center text-2xl font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] md:px-12 md:py-10 md:text-3xl lg:text-4xl'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className='relative z-10 flex items-center justify-center gap-4'>
              {/* Pulsing dot animation */}
              <span className='absolute -left-8 flex h-3 w-3 md:-left-12 md:h-4 md:w-4'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75'></span>
                <span className='relative inline-flex h-3 w-3 rounded-full bg-white md:h-4 md:w-4'></span>
              </span>
              {t('subscribeButton').toUpperCase()}
              <span className='absolute -right-8 flex h-3 w-3 md:-right-12 md:h-4 md:w-4'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75'></span>
                <span className='relative inline-flex h-3 w-3 rounded-full bg-white md:h-4 md:w-4'></span>
              </span>
            </span>
            {/* Animated background effect */}
            <div className='absolute inset-0 -z-10 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 hover:opacity-100'></div>
            {/* Shimmer effect */}
            <div className='absolute inset-0 -top-2 h-full w-full rotate-180 bg-gradient-to-r from-transparent via-white to-transparent opacity-10'></div>
          </motion.a>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ x: '80px', opacity: 0 }}
          whileInView={{ x: '0', opacity: 1 }}
          className='flex min-h-[600px] flex-col gap-6 rounded-2xl bg-white p-5 md:p-10 lg:min-h-[832px]'
        >
          <div className='grid gap-4'>
            <p className='text-gray'>{t('formSubtitle')}</p>
            <Trans parent='h2' i18nKey='formTitle' className='mb-4 text-4xl text-secondary'></Trans>
            <p className='text-tertiary'>{t('formDescription')}</p>
          </div>

          <div className='grid grow'>
            {isFormVisible && (
              <form className='grid gap-4' onSubmit={handleSubmit}>
                <input
                  className='w-full rounded-lg border border-gray bg-transparent px-6 py-4 outline-0 placeholder:text-gray focus:border-primary'
                  name='name'
                  placeholder={t('formName')}
                  required
                />

                <input
                  className='w-full rounded-lg border border-gray bg-transparent px-6 py-4 outline-0 placeholder:text-gray focus:border-primary'
                  name='_replyto'
                  placeholder={t('formEmail')}
                  type='email'
                  required
                />

                <input
                  className='w-full rounded-lg border border-gray bg-transparent px-6 py-4 outline-0 placeholder:text-gray focus:border-primary'
                  name='location'
                  placeholder={t('formLocation')}
                  required
                />

                <input
                  className='w-full rounded-lg border border-gray bg-transparent px-6 py-4 outline-0 placeholder:text-gray focus:border-primary'
                  name='subject'
                  placeholder={t('formSubject')}
                  required
                />

                <textarea
                  className='min-h-36 rounded-lg border border-gray px-6 py-4 outline-0 placeholder:text-gray focus:border-primary'
                  name='message'
                  placeholder={t('formMessage')}
                  required
                ></textarea>

                <button
                  className='mt-2 rounded-lg bg-primary px-6 py-4 text-white hover:shadow-button md:w-fit'
                  type='submit'
                >
                  {t('formButton')}
                </button>
              </form>
            )}

            {isSuccess && (
              <div className='flex grow flex-col items-center justify-center gap-6 text-center'>
                <RiCheckboxCircleLine className='size-20 text-primary' />
                {t('formSuccessMessage')}
              </div>
            )}

            {isError && (
              <div className='flex grow flex-col items-center justify-center gap-6 text-center'>
                <RiErrorWarningLine className='size-20 text-primary' />
                {t('formErrorMessage')}
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <div
        style={{ '--bg-image-url': `url(${OverviewImage})` }}
        className={`bg-[image:var(--bg-image-url)] bg-cover bg-center py-20`}
      >
        <div className='container mx-auto grid gap-6 px-5 md:grid-cols-2 md:px-10 xl:grid-cols-4'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-lg bg-white p-5 text-white md:p-10'
          >
            <div className='mb-4 flex items-center justify-between gap-6'>
              <p className='text-2xl text-secondary'>{t('office')}</p>
              <div className='flex size-12 min-w-12 items-center justify-center rounded-full bg-beige text-tertiary'>
                <RiHotelLine className='size-5 text-tertiary' />
              </div>
            </div>

            <div className='mb-6'>
              <p className='font-semibold text-secondary'>{t('officeAddress')}</p>
              <p>{t('officeAddressNote')}</p>
            </div>

            <p>
              <span className='text-tertiary'>{t('officePhoneTitle')}</span>
              <a className='text-secondary hover:text-primary' href='tel:604-828-1475'>
                {t('officePhone')}
              </a>
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-lg bg-secondary p-5 md:p-10'
          >
            <div className='mb-4 flex items-center justify-between gap-6 text-white'>
              <p className='text-2xl text-white'>{t('miningOffice')}</p>
              <div className='flex size-12 min-w-12 items-center justify-center rounded-full bg-beige'>
                <RiHomeOfficeLine className='size-5 text-tertiary' />
              </div>
            </div>

            <div className='mb-6'>
              <p className='font-semibold text-white'>{t('miningOfficeAddress')}</p>
              <p>{t('miningOfficeAddressNote')}</p>
            </div>

            <p>
              <span className='text-tertiary'>{t('miningOfficePhoneTitle')}</span>
              <a className='text-white hover:text-primary' href='tel:819-797-4144'>
                {t('miningOfficePhone')}
              </a>
            </p>
            <p>
              <span className='text-tertiary'>{t('miningOfficeFaxTitle')}</span>
              <a className='text-white hover:text-primary' href='tel:819-762-2306'>
                {t('miningOfficeFax')}
              </a>
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-lg bg-white p-5 md:p-10'
          >
            <div className='mb-4 flex items-center justify-between gap-6 text-secondary'>
              <p className='text-2xl text-secondary'>{t('auditors')}</p>
              <div className='flex size-12 min-w-12 items-center justify-center rounded-full bg-beige'>
                <RiGitRepositoryLine className='size-5 text-tertiary' />
              </div>
            </div>

            <div className='mb-6'>
              <p className='font-semibold text-secondary'>{t('auditorsAddress')}</p>
              <Trans i18nKey='auditorsAddressNote'></Trans>
            </div>

            <p>
              <span className='text-tertiary'>{t('auditorsPhoneTitle')}</span>
              <a className='text-secondary hover:text-primary' href='tel:416-496-1234'>
                {t('auditorsPhone')}
              </a>
            </p>
            <p>
              <span className='text-tertiary'>{t('auditorsFaxTitle')}</span>
              <a className='text-secondary hover:text-primary' href='tel:416-496-0125'>
                {t('auditorsFax')}
              </a>
            </p>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            initial={{ x: '80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='rounded-lg bg-white p-5 md:p-10'
          >
            <div className='mb-4 flex items-center justify-between gap-6 text-secondary'>
              <p className='text-2xl text-secondary'>{t('transfer')}</p>
              <div className='flex size-12 min-w-12 items-center justify-center rounded-full bg-beige'>
                <RiFileTransferLine className='size-5 text-tertiary' />
              </div>
            </div>

            <div className='mb-6'>
              <p className='font-semibold text-secondary'>{t('transferAddress')}</p>
              <Trans i18nKey='transferAddressNote'></Trans>
            </div>

            <p>
              <span className='text-tertiary'>{t('transferPhoneTitle')}</span>
              <a className='text-secondary hover:text-primary' href='tel:604-661-9400'>
                {t('transferPhone')}
              </a>
            </p>
            <p>
              <span className='text-tertiary'>{t('transferFaxTitle')}</span>
              <a className='text-secondary hover:text-primary' href='tel:604-661-9401'>
                {t('transferFax')}
              </a>
            </p>
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
      <title>Contact | Nord Precious Metals</title>
      <meta
        name='description'
        content='Highest Silver grades in the world. Latest resource estimate at Castle East marks first grassroots discovery in decades for the Northern Ontario silver cobalt camp.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "contact"] }, language: { eq: $language } }) {
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