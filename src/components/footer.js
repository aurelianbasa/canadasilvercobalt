import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { RiCloseFill, RiTwitterXFill, RiLinkedinFill, RiFacebookFill, RiYoutubeFill } from 'react-icons/ri';

import SubscribeForm from '@components/subscribe-form';

import logo from '@media/common/logo.svg';
import logoRA from '@media/common/logo-resource-active.svg';

export default function Footer() {
  const { t } = useTranslation();

  let [isOpenDisclaimer, setIsOpenDisclaimer] = React.useState(false);
  let [isOpenDisclosure, setIsOpenDisclosure] = React.useState(false);

  return (
    <footer className='mb-10 grid gap-10 bg-white'>
      <div className='container mx-auto grid gap-10 px-5 py-10 lg:grid-cols-2 lg:gap-0 lg:px-10 lg:py-20'>
        <div className='flex flex-col items-center gap-10 lg:items-start'>
          <Link className='flex' to='/'>
            <img src={logo} alt='Nordpreciousmetals logo' />
          </Link>

          <SubscribeForm></SubscribeForm>
        </div>

        <div className='grid gap-5 lg:grid-cols-3 lg:gap-0'>
          <div className='flex flex-row items-end justify-center gap-4 self-start lg:flex-col lg:justify-start'>
            <p className='hidden text-tertiary lg:block'>{t('footer.links')}</p>

            <Link className='hover:text-primary' to='/'>
              {t('footer.home')}
            </Link>
            <Link className='hover:text-primary' to='/about'>
              {t('footer.about')}
            </Link>
            <Link className='hover:text-primary' to='/projects'>
              {t('footer.projects')}
            </Link>
            <Link className='hover:text-primary' to='/investors'>
              {t('footer.investors')}
            </Link>
          </div>

          <div className='flex flex-row items-end justify-center gap-4 self-start lg:flex-col lg:justify-start'>
            <p className='hidden text-tertiary lg:block'>{t('footer.legal')}</p>

            <Link className='hover:text-primary' to='/contact'>
              {t('footer.contact')}
            </Link>

            <button onClick={() => setIsOpenDisclaimer(true)} className='cursor-pointer hover:text-primary'>
              {t('footer.disclaimer')}
            </button>
            <button onClick={() => setIsOpenDisclosure(true)} className='cursor-pointer hover:text-primary'>
              {t('footer.disclosure')}
            </button>
          </div>

          <div className='flex flex-row items-end justify-center gap-4 self-start lg:flex-col lg:justify-start'>
            <p className='hidden text-tertiary lg:block'>{t('footer.social')}</p>
            <a
              className='flex flex-col items-center gap-2 hover:text-primary lg:flex-row'
              href='https://x.com/nordmetals'
              target='_blank'
              rel='noreferrer'
            >
              <RiTwitterXFill className='size-6' />
              {t('footer.x')}
            </a>
            <a
              className='flex flex-col items-center gap-2 hover:text-primary lg:flex-row'
              href='https://www.linkedin.com/company/nord-precious-metals/'
              target='_blank'
              rel='noreferrer'
            >
              <RiLinkedinFill className='size-6' />
              {t('footer.linkedIn')}
            </a>
            <a
              className='flex flex-col items-center gap-2 hover:text-primary lg:flex-row'
              href='https://www.facebook.com/nordpreciousmetals/'
              target='_blank'
              rel='noreferrer'
            >
              <RiFacebookFill className='size-6' />
              {t('footer.facebook')}
            </a>
            <a
              className='flex flex-col items-center gap-2 hover:text-primary lg:flex-row'
              href='https://www.youtube.com/@nordpreciousmetals'
              target='_blank'
              rel='noreferrer'
            >
              <RiYoutubeFill className='size-6' />
              {t('footer.crucible')}
            </a>
          </div>
        </div>
      </div>

      <div className='container mx-auto flex flex-col justify-center gap-2 lg:flex-row lg:gap-10'>
        <p className='text-center text-tertiary'>{`© ${new Date().getFullYear()}${t('footer.copyright')}`}</p>
        <a
          className='flex justify-center gap-2 hover:text-primary'
          href='https://www.resourceactive.com/documentation'
          target='_blank'
          rel='noreferrer'
        >
          <img className='w-4' src={logoRA} alt='Resource Active logo' />
          <p className='text-secondary'>{t('footer.resourceActive')}</p>
        </a>
      </div>

      <AnimatePresence mode='wait'>
        {isOpenDisclaimer && (
          <Dialog static open={isOpenDisclaimer} onClose={() => setIsOpenDisclaimer(false)} className='relative z-50'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/60'
            />
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className='relative max-w-2xl rounded-2xl bg-white p-8 md:p-16'
              >
                <RiCloseFill
                  className='absolute right-4 top-4 size-8 cursor-pointer md:right-8 md:top-8'
                  onClick={() => setIsOpenDisclaimer(false)}
                />

                <DialogTitle className='mb-8 text-4xl'>{t('footer.disclaimerHeader')}</DialogTitle>

                <div className='h-[70vh] overflow-hidden overflow-y-auto pr-4 md:pr-8'>
                  <Description>
                    <Trans i18nKey='footer.disclaimerText'></Trans>
                  </Description>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        {isOpenDisclosure && (
          <Dialog static open={isOpenDisclosure} onClose={() => setIsOpenDisclosure(false)} className='relative z-50'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/60'
            />
            <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className='relative max-w-2xl rounded-2xl bg-white p-8 md:p-16'
              >
                <RiCloseFill
                  className='absolute right-4 top-4 size-8 cursor-pointer md:right-8 md:top-8'
                  onClick={() => setIsOpenDisclosure(false)}
                />

                <DialogTitle className='mb-8 text-4xl'>{t('footer.disclosureHeader')}</DialogTitle>

                <div className='h-[70vh] overflow-hidden overflow-y-auto pr-4 md:pr-8'>
                  <Description>
                    <Trans i18nKey='footer.disclosureText'></Trans>
                  </Description>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </footer>
  );
}
