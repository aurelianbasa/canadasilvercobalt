import * as React from 'react';
import { graphql } from 'gatsby';
import { Dialog, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import {
  RiPlayFill,
  RiArrowRightLine,
  RiShieldStarLine,
  RiRadarLine,
  RiBarChartLine,
  RiBuildingLine,
  RiBatteryChargeLine,
  RiCoinsLine,
  RiCpuLine,
  RiTeamLine,
  RiHandHeartLine,
} from 'react-icons/ri';

import Layout from '@components/layout';
import Button from '@components/button';
import CardNews from '@components/card-news';
import CheckItem from '@components/check-item';
import DataWrapper from '@components/data-wrapper';
import LiquidGlassBanner from '@components/liquid-glass-banner';
import TTLImage from '@media/home/ttl.webp';
import HeroImage from '@media/home/hero.webp';
import AboutImage from '@media/home/about.webp';
import CobaltImage from '@media/home/cobalt.webp';
import SilverImage from '@media/home/silver.webp';
import SilverBarsImage from '@media/home/silver-bars.webp';

import InvestorPresentationPDF from '@media/home/investor-presentation.pdf';

export default function Home({ data }) {
  const { t } = useTranslation();

  const posts = data.allPosts.nodes;
  let [isOpenHeroPopup, setIsOpenHeroPopup] = React.useState(false);

return (
    <Layout>
      <div
        style={{ '--bg-image-url': `url(${HeroImage})` }}
        className={`flex items-center bg-[image:var(--bg-image-url)] bg-cover bg-center pt-16 md:pt-24`}
      >
        <div className='container mx-auto grid gap-16 px-5 py-20 md:gap-10 md:px-10 md:py-28 lg:grid-cols-2'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ x: '-80px', opacity: 0 }}
            whileInView={{ x: '0', opacity: 1 }}
            className='flex flex-col justify-center gap-4'
          >
            <Trans parent='h1' i18nKey='heroTitle' className='text-6xl text-white'></Trans>

            <p className='text-lg text-white'>{t('heroDescription')}</p>

            <button
              className='my-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 hover:shadow-button md:w-fit'
              onClick={() => setIsOpenHeroPopup(true)}
            >
              {t('heroButton')}
              <RiPlayFill className='size-4' />
            </button>

            <LiquidGlassBanner />
          </motion.div>
        </div>
      </div>

      <div className='container mx-auto items-center px-5 pb-10 pt-20 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <img className='w-full rounded-lg object-cover' src={AboutImage} alt='Silver' />

          <div className='flex flex-col gap-4'>
            <p className='text-gray'>{t('aboutSubtitle')}</p>
            <h2 className='text-4xl text-secondary'>{t('aboutTitle')}</h2>
            <Trans i18nKey='aboutDescription' className='mt-2'></Trans>
          </div>
        </motion.div>
      </div>

      <div className='container mx-auto grid gap-6 px-5 pb-10 md:grid-cols-2 md:px-10 lg:grid-cols-3'>
        <div className='grid gap-8 rounded-2xl bg-white p-5 md:p-10'>
          <div className='flex gap-6'>
            <div className='grid flex-1 gap-2'>
              <p className='text-2xl text-secondary'>{t('infoBlock1')}</p>
              <p>{t('infoBlock1Note')}</p>
            </div>

            <div className='flex size-16 items-center justify-center rounded-full bg-beige text-tertiary'>
              <RiArrowRightLine className='size-6' />
            </div>
          </div>

          <Button className='w-full self-end' type='primary' href='/projects/castle-mine'>
            {t('infoBlock1Button')}
          </Button>
        </div>

        <div className='grid gap-8 rounded-2xl bg-white p-5 md:p-10'>
          <div className='flex gap-6'>
            <div className='grid flex-1 gap-2'>
              <p className='text-2xl text-secondary'>{t('infoBlock2')}</p>
              <p>{t('infoBlock2Note')}</p>
            </div>

            <div className='flex size-16 items-center justify-center rounded-full bg-beige text-tertiary'>
              <RiArrowRightLine className='size-6' />
            </div>
          </div>

          <Button className='w-full self-end' type='primary' href='/projects/castle-east'>
            {t('infoBlock2Button')}
          </Button>
        </div>

        <div className='grid gap-8 rounded-2xl bg-white p-5 md:p-10'>
          <div className='flex gap-6'>
            <div className='grid flex-1 gap-2'>
              <p className='text-2xl text-secondary'>{t('infoBlock3')}</p>
              <p>{t('infoBlock3Note')}</p>
            </div>

            <div className='flex size-16 items-center justify-center rounded-full bg-beige text-tertiary'>
              <RiArrowRightLine className='size-6' />
            </div>
          </div>

          <Button className='w-full self-end' external type='primary' href='https://temiskaminglabs.com/'>
            {t('infoBlock3Button')}
          </Button>
        </div>
      </div>

      <div className='container mx-auto grid gap-16 px-5 pb-20 pt-10 md:px-10'>
        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-10'
        >
          <h2 className='text-4xl'>{t('infoBlock4')}</h2>
          <img className='w-full rounded-2xl object-cover' src={SilverImage} alt='Silver' />
          <p>{t('infoBlock4Note')}</p>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='flex flex-col items-end gap-8 rounded-2xl bg-secondary p-5 md:flex-row md:p-10'
        >
          <div className='w-full'>
            <p className='mb-2'>{t('reportDate')}</p>
            <p className='text-3xl text-white'>{t('report')}</p>
          </div>

          <Button className='w-full md:w-fit' external type='tertiary' href={InvestorPresentationPDF}>
            {t('reportButton')}
          </Button>
        </motion.div>
      </div>

      <div className='bg-gray'>
        <div className='container mx-auto grid gap-10 px-5 py-20 md:px-10'>
          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
          >
            <div className='flex flex-col gap-4'>
              <h2 className='text-4xl text-secondary'>{t('silverTitle')}</h2>
              <p className='mb-10 mt-2'>{t('silverDescription')}</p>

              <div className='grid gap-4'>
                <div className='flex items-end gap-6 rounded-lg bg-gray px-6 py-4'>
                  <div className='flex-1'>
                    <p className='mb-2 text-white'>{t('silverInfo1')}</p>
                    <p className='text-lg text-white'>{t('silverInfo1Note')}</p>
                  </div>
                  <p className='text-2xl text-white'>{t('silverInfo1Number')}</p>
                </div>

                <div className='flex items-end gap-6 rounded-lg bg-gray px-6 py-4'>
                  <div className='flex-1'>
                    <p className='mb-2 text-white'>{t('silverInfo2')}</p>
                    <p className='text-lg text-white'>{t('silverInfo2Note')}</p>
                  </div>
                  <p className='text-2xl text-white'>{t('silverInfo2Number')}</p>
                </div>
              </div>
            </div>

            <img className='w-full rounded-lg object-cover' src={SilverBarsImage} alt='Silver' />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial={{ y: '80px', opacity: 0 }}
            whileInView={{ y: '0', opacity: 1 }}
            className='rounded-2xl bg-white p-5 md:p-10'
          >
            <DataWrapper title='Resource Estimate' src='https://datawrapper.dwcdn.net/1telv/2/' />
          </motion.div>
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
          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl text-secondary'>{t('temiskamingTitle')}</h2>
            <Trans i18nKey='temiskamingDescription' className='my-2'></Trans>

            <Button
              className='mt-auto w-full self-end md:w-fit'
              type='primary-outlined'
              external
              href='https://temiskaminglabs.com/'
            >
              {t('temiskamingButton')}
            </Button>
          </div>

          <img className='w-full rounded-lg object-cover' src={TTLImage} alt='Temiskaming Testing Labs' />
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ y: '80px', opacity: 0 }}
          whileInView={{ y: '0', opacity: 1 }}
          className='grid gap-16 rounded-2xl bg-white p-5 md:p-10 lg:grid-cols-2'
        >
          <img className='w-full rounded-lg object-cover' src={CobaltImage} alt='Cobalt' />

          <div className='flex flex-col gap-4'>
            <h2 className='text-4xl text-secondary'>{t('re2OxTitle')}</h2>
            <Trans i18nKey='re2OxDescription' className='my-2'></Trans>

            <div className='mt-auto grid gap-2'>
              <CheckItem title={t('re2OxInfo1')} description={t('re2OxInfo1Note')} />
              <CheckItem title={t('re2OxInfo2')} description={t('re2OxInfo2Note')} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className='bg-secondary py-20'>
        <div className='container mx-auto grid gap-16 px-5 md:px-10'>
          <h2 className='text-center text-4xl text-white'>{t('investTitle')}</h2>

          <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiShieldStarLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest1Title')}</p>
                <p className='text-beigeLight'>{t('invest1Description')}</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiRadarLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest2Title')}</p>
                <p className='text-beigeLight'>{t('invest2Description')}</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiBarChartLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest3Title')}</p>
                <p className='text-beigeLight'>{t('invest3Description')}</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiBuildingLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest4Title')}</p>
                <p className='text-beigeLight'>{t('invest4Description')}</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiBatteryChargeLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest5Title')}</p>
                <p className='text-beigeLight'>{t('invest5Description')}</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiCoinsLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest6Title')}</p>
                <p className='text-beigeLight'>{t('invest6Description')}</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiCpuLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest7Title')}</p>
                <p className='text-beigeLight'>{t('invest7Description')}</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiTeamLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest8Title')}</p>
                <p className='text-beigeLight'>{t('invest8Description')}</p>
              </div>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              initial={{ x: '80px', opacity: 0 }}
              whileInView={{ x: '0', opacity: 1 }}
              className='flex items-center gap-6'
            >
              <div className='flex size-20 items-center justify-center rounded-full bg-tertiary/10 text-white'>
                <RiHandHeartLine className='size-10' />
              </div>
              <div className='flex-1'>
                <p className='mb-2 text-2xl text-white'>{t('invest9Title')}</p>
                <p className='text-beigeLight'>{t('invest9Description')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='container mx-auto grid gap-10 px-5 py-20 md:px-10'>
        <div>
          <p className='mb-4 text-gray'>{t('newsSubtitle')}</p>
          <h2 className='text-4xl'>{t('newsTitle')}</h2>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {posts?.map((post, index) => (
            <motion.div
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              initial={{ y: '80px', opacity: 0 }}
              whileInView={{ y: '0', opacity: 1 }}
              key={index}
            >
              <CardNews
                title={post?.title}
                content={post?.content}
                publishDate={post?.publishDate}
                image={post?.heroImage?.file?.url}
                href={`/news/${post?.year?.year}/${post?.slug}`}
              ></CardNews>
            </motion.div>
          ))}
        </div>

        <Button className='mx-auto w-full md:w-fit' type='primary-outlined' href='/news/2025'>
          {t('newsButton')}
        </Button>
      </div>

      <AnimatePresence>
        {isOpenHeroPopup && (
          <Dialog static open={isOpenHeroPopup} onClose={() => setIsOpenHeroPopup(false)} className='relative z-50'>
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
                className='size-11/12 overflow-hidden rounded-lg'
              >
                <iframe
                  width='100%'
                  height='100%'
                  src='https://www.youtube.com/embed/QPWbIW3Uk6A?autoplay=1&modestbranding=1&showinfo=0&rel=0'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerpolicy='strict-origin-when-cross-origin'
                  allowfullscreen
                ></iframe>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Home | Nord Precious Metals</title>
      <meta
        name='description'
        content='Highest Silver grades in the world. Latest resource estimate at Castle East marks first grassroots discovery in decades for the Northern Ontario silver cobalt camp.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "home"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allPosts: allContentfulPost(
      limit: 3
      sort: { publishDate: DESC }
      filter: { language: { language: { eq: $language } } }
    ) {
      nodes {
        id
        title
        slug
        publishDate
        year {
          year
        }
        heroImage {
          file {
            url
          }
        }
        content {
          raw
        }
      }
    }
  }
`;
