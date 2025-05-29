import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { RiArrowDownSLine, RiMenuFill, RiCloseFill } from 'react-icons/ri';
import { Popover, PopoverButton, PopoverPanel, Dialog, DialogPanel } from '@headlessui/react';

import Button from '@components/button';
import AlgoliaSearch from '@components/algolia-search';

import logo from '@media/common/logo.svg';

export default function Header() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = React.useState(false);
  const [scrollYPosition, setScrollYPosition] = React.useState(0);

  function handleScroll() {
    const newScrollYPosition = window.scrollY;
    setScrollYPosition(newScrollYPosition);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 z-40 flex h-20 w-full items-center bg-white transition-shadow duration-300 md:h-24 ${
          scrollYPosition > 0 ? 'shadow-md' : ''
        }`}
        transition={{ ease: 'linear', duration: 0.3, delay: 0.2 }}
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className='container mx-auto flex justify-between px-5 md:px-10'>
          <div className='flex items-center gap-5'>
            <Link to='/'>
              <img className='h-[42px] w-[70px] md:h-[59px] md:w-[98px]' src={logo} alt='Nordpreciousmetals logo' />
            </Link>

            <div className='h-full w-[2px] bg-gray/20'></div>

            <Trans className='text-sm text-gray' i18nKey='header.code'></Trans>
          </div>

          <nav className='hidden gap-8 lg:flex'>
            <Popover>
              <PopoverButton className='relative' as='div'>
                {({ hover }) => (
                  <>
                    <div className='flex cursor-pointer items-center gap-1 py-4 hover:text-primary'>
                      <Link className='hover:text-primary' to='/about'>
                        {t('header.about')}
                      </Link>
                      <RiArrowDownSLine />
                    </div>
                    {hover && (
                      <AnimatePresence mode='wait'>
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className='absolute left-1/2 z-50 flex w-max -translate-x-1/2 !transform flex-col gap-3 rounded-lg bg-white p-6 shadow-md'
                        >
                          <Link className='py-1 hover:text-primary' to='/about'>
                            {t('header.aboutOverview')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/about/management'>
                            {t('header.aboutManagement')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/about/company-history'>
                            {t('header.aboutCompanyHistory')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/about/regional-history'>
                            {t('header.aboutRegionalHistory')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/about/community'>
                            {t('header.aboutCommunity')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/about/environment'>
                            {t('header.aboutEnvironment')}
                          </Link>
                        </PopoverPanel>
                      </AnimatePresence>
                    )}
                  </>
                )}
              </PopoverButton>
            </Popover>

            <Popover>
              <PopoverButton className='relative' as='div'>
                {({ hover }) => (
                  <>
                    <div className='flex cursor-pointer items-center gap-1 py-4 hover:text-primary'>
                      <Link className='hover:text-primary' to='/projects'>
                        {t('header.projects')}
                      </Link>
                      <RiArrowDownSLine />
                    </div>
                    {hover && (
                      <AnimatePresence mode='wait'>
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className='absolute left-1/2 z-50 flex w-max -translate-x-1/2 !transform flex-col gap-3 rounded-lg bg-white p-6 shadow-md'
                        >
                          <Link className='py-1 hover:text-primary' to='/projects/castle-east'>
                            {t('header.projectsCastleEast')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/projects/castle-mine'>
                            {t('header.projectsCastleMine')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/projects/beaver-mine'>
                            {t('header.projectsBeaverMine')}
                          </Link>
                        </PopoverPanel>
                      </AnimatePresence>
                    )}
                  </>
                )}
              </PopoverButton>
            </Popover>

            <Popover>
              <PopoverButton className='relative' as='div'>
                {({ hover }) => (
                  <>
                    <div className='flex cursor-pointer items-center gap-1 py-4 hover:text-primary'>
                      {t('header.news')}
                      <RiArrowDownSLine />
                    </div>
                    {hover && (
                      <AnimatePresence mode='wait'>
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className='absolute left-1/2 z-50 grid w-max -translate-x-1/2 !transform grid-cols-2 flex-col gap-x-6 gap-y-3 rounded-lg bg-white p-6 shadow-md'
                        >
                          <Link className='py-1 hover:text-primary' to='/news/2025'>
                            {t('header.news2025')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2024'>
                            {t('header.news2024')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2023'>
                            {t('header.news2023')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2022'>
                            {t('header.news2022')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2021'>
                            {t('header.news2021')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2020'>
                            {t('header.news2020')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2019'>
                            {t('header.news2019')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2018'>
                            {t('header.news2018')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2017'>
                            {t('header.news2017')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/news/2016'>
                            {t('header.news2016')}
                          </Link>
                        </PopoverPanel>
                      </AnimatePresence>
                    )}
                  </>
                )}
              </PopoverButton>
            </Popover>

            <Popover>
              <PopoverButton className='relative' as='div'>
                {({ hover }) => (
                  <>
                    <div className='flex cursor-pointer items-center gap-1 py-4 hover:text-primary'>
                      {t('header.media')}
                      <RiArrowDownSLine />
                    </div>
                    {hover && (
                      <AnimatePresence mode='wait'>
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className='absolute left-1/2 z-50 flex w-max -translate-x-1/2 !transform flex-col gap-3 rounded-lg bg-white p-6 shadow-md'
                        >
                          <Link className='py-1 hover:text-primary' to='/media?tab=0'>
                            {t('header.photoGallery')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/media?tab=1'>
                            {t('header.videos')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/media?tab=2'>
                            {t('header.featuredArticles')}
                          </Link>
                        </PopoverPanel>
                      </AnimatePresence>
                    )}
                  </>
                )}
              </PopoverButton>
            </Popover>

            <Popover>
              <PopoverButton className='relative' as='div'>
                {({ hover }) => (
                  <>
                    <div className='flex cursor-pointer items-center gap-1 py-4 hover:text-primary'>
                      {t('header.investors')}
                      <RiArrowDownSLine />
                    </div>
                    {hover && (
                      <AnimatePresence mode='wait'>
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className='absolute left-1/2 z-50 flex w-max -translate-x-1/2 !transform flex-col gap-3 rounded-lg bg-white p-6 shadow-md'
                        >
                          <Link className='py-1 hover:text-primary' to='/investors#stockInformation'>
                            {t('header.stockInformation')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/investors#capitalStructure'>
                            {t('header.capitalStructure')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/investors#technicalReports'>
                            {t('header.technicalReports')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/investors#financials'>
                            {t('header.financials')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/investors#AGM'>
                            {t('header.AGM')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/investors#files'>
                            {t('header.presentations')}
                          </Link>
                          <Link className='py-1 hover:text-primary' to='/investors#coniagasFMV'>
                            {t('header.coniagasFMV')}
                          </Link>
                        </PopoverPanel>
                      </AnimatePresence>
                    )}
                  </>
                )}
              </PopoverButton>
            </Popover>
          </nav>

          <div className='flex gap-5'>
            <AlgoliaSearch></AlgoliaSearch>

            <Button className='hidden self-center md:block' type='primary' href='/contact'>
              {t('header.contactUs')}
            </Button>

            <button className='lg:hidden' onClick={() => setIsOpen(true)} aria-label='Open menu'>
              <RiMenuFill className='size-7' />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <Dialog static open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/60'
            />
            <motion.div
              as={motion.div}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ ease: 'linear' }}
              className='fixed inset-0 flex w-screen items-center justify-end'
            >
              <DialogPanel className='relative flex size-full max-w-lg flex-col items-start overflow-y-auto bg-white p-10'>
                <Link className='py-2 hover:text-primary' to='/about'>
                  {t('header.about')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/about'>
                  {t('header.aboutOverview')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/about/management'>
                  {t('header.aboutManagement')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/about/company-history'>
                  {t('header.aboutCompanyHistory')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/about/regional-history'>
                  {t('header.aboutRegionalHistory')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/about/community'>
                  {t('header.aboutCommunity')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/about/environment'>
                  {t('header.aboutEnvironment')}
                </Link>

                <Link className='py-2 hover:text-primary' to='/projects'>
                  {t('header.projects')}
                </Link>

                <Link className='py-2 pl-6 hover:text-primary' to='/projects/castle-east'>
                  {t('header.projectsCastleEast')}
                </Link>

                <Link className='py-2 pl-6 hover:text-primary' to='/projects/castle-mine'>
                  {t('header.projectsCastleMine')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/projects/beaver-mine'>
                  {t('header.projectsBeaverMine')}
                </Link>

                <div className='cursor-pointer py-2 hover:text-primary'>{t('header.news')}</div>

                <Link className='py-2 pl-6 hover:text-primary' to='/news/2025'>
                  {t('header.news2025')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2024'>
                  {t('header.news2024')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2023'>
                  {t('header.news2023')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2022'>
                  {t('header.news2022')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2021'>
                  {t('header.news2021')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2020'>
                  {t('header.news2020')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2019'>
                  {t('header.news2019')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2018'>
                  {t('header.news2018')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2017'>
                  {t('header.news2017')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/news/2016'>
                  {t('header.news2016')}
                </Link>

                <div className='cursor-pointer py-2 hover:text-primary'>{t('header.media')}</div>

                <Link className='py-2 pl-6 hover:text-primary' to='/media?tab=0'>
                  {t('header.photoGallery')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/media?tab=1'>
                  {t('header.videos')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/media?tab=2'>
                  {t('header.featuredArticles')}
                </Link>

                <div className='cursor-pointer py-2 hover:text-primary'>{t('header.investors')}</div>

                <Link className='py-2 pl-6 hover:text-primary' to='/investors#stockInformation'>
                  {t('header.stockInformation')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/investors#capitalStructure'>
                  {t('header.capitalStructure')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/investors#technicalReports'>
                  {t('header.technicalReports')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/investors#financials'>
                  {t('header.financials')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/investors#AGM'>
                  {t('header.AGM')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/investors#files'>
                  {t('header.presentations')}
                </Link>
                <Link className='py-2 pl-6 hover:text-primary' to='/investors#coniagasFMV'>
                  {t('header.coniagasFMV')}
                </Link>

                <Button className='mt-8 w-full' type='primary' href='/contact'>
                  {t('header.contactUs')}
                </Button>

                <button className='absolute right-8 top-8' onClick={() => setIsOpen(false)} aria-label='Close menu'>
                  <RiCloseFill className='size-7' />
                </button>
              </DialogPanel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}
