import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import Layout from '@components/layout';
import CardPhoto from '@components/card-photo';
import CardVideo from '@components/card-video';
import CardArticle from '@components/card-article';

import Photo1Image from '@media/media/photo-1.webp';
import Photo2Image from '@media/media/photo-2.webp';
import Photo3Image from '@media/media/photo-3.webp';
import Photo4Image from '@media/media/photo-4.webp';
import Photo5Image from '@media/media/photo-5.webp';
import Photo6Image from '@media/media/photo-6.webp';
import Photo7Image from '@media/media/photo-7.webp';
import Photo8Image from '@media/media/photo-8.webp';
import Photo9Image from '@media/media/photo-9.webp';
import Photo10Image from '@media/media/photo-10.webp';
import Photo11Image from '@media/media/photo-11.webp';
import Photo12Image from '@media/media/photo-12.webp';
import Photo13Image from '@media/media/photo-13.webp';
import Photo14Image from '@media/media/photo-14.webp';
import Photo15Image from '@media/media/photo-15.webp';
import Photo16Image from '@media/media/photo-16.webp';
import Photo17Image from '@media/media/photo-17.webp';
import Photo18Image from '@media/media/photo-18.webp';
import Photo19Image from '@media/media/photo-19.webp';
import Photo20Image from '@media/media/photo-20.webp';
import Photo21Image from '@media/media/photo-21.webp';
import Photo22Image from '@media/media/photo-22.webp';
import Photo23Image from '@media/media/photo-23.webp';
import Photo24Image from '@media/media/photo-24.webp';
import Photo25Image from '@media/media/photo-25.webp';
import Photo26Image from '@media/media/photo-26.webp';
import Photo27Image from '@media/media/photo-27.webp';
import Photo28Image from '@media/media/photo-28.webp';
import Photo29Image from '@media/media/photo-29.webp';
import Photo30Image from '@media/media/photo-30.webp';
import Photo31Image from '@media/media/photo-31.webp';
import Photo32Image from '@media/media/photo-32.webp';
import Photo33Image from '@media/media/photo-33.webp';
import Photo34Image from '@media/media/photo-34.webp';
import Photo35Image from '@media/media/photo-35.webp';
import Photo36Image from '@media/media/photo-36.webp';

import OMRReviewImage from '@media/media/omr-review.webp';
import CBCReviewImage from '@media/media/cbc-review.webp';
import PosterImage from '@media/media/poster.webp';
import InnovationReviewImage from '@media/media/innovation-review.webp';
import TheDeepDiveReviewImage from '@media/media/thedeepdive-review.webp';
import MiningdotcomReviewImage from '@media/media/miningdotcom-review.webp';
import BNNBloombergReviewImage from '@media/media/bnnbloomberg-review.webp';
import ResourceWorldReviewImage from '@media/media/resourceworld-review.webp';
import InternationalMiningReviewImage from '@media/media/internationalmining-review.webp';
import NorthernOntarioBusinessReviewImage from '@media/media/northernontariobusiness-review.webp';

import QMRarticlePDF from '@media/media/QMRarticle.pdf';

export default function Media({ location }) {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const params = new URLSearchParams(location.search);
  const activeTab = params.get('tab');

  React.useEffect(() => {
    setSelectedIndex(activeTab);
  }, [activeTab]);

  const container = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const items = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'linear',
      },
    },
    hidden: { opacity: 0, x: 80 },
  };

  return (
    <Layout>
      <div className='container mx-auto px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-44'>
        <TabGroup className='grid gap-10' selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList className='mx-auto flex w-fit rounded-lg bg-white'>
            <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
              {t('tabItem1')}
            </Tab>
            <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
              {t('tabItem2')}
            </Tab>
            <Tab className='px-6 py-4 text-sm outline-none data-[selected]:rounded-lg data-[selected]:bg-secondary data-[selected]:text-white md:text-base'>
              {t('tabItem3')}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel className='flex flex-col gap-16'>
              <div className='grid gap-4 self-center'>
                <p className='text-center text-gray'>{t('tab1Subtitle')}</p>
                <h2 className='text-center text-4xl text-secondary'>{t('tab1Title')}</h2>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab1Category1')}</h3>

                <motion.div
                  className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                  initial='hidden'
                  animate='visible'
                  variants={container}
                >
                  <motion.div variants={items}>
                    <CardPhoto image={Photo1Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo2Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo3Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo4Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo5Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo6Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo7Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo8Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo9Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo10Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo11Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo12Image}></CardPhoto>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab1Category2')}</h3>

                <motion.div
                  className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                  initial='hidden'
                  animate='visible'
                  variants={container}
                >
                  <motion.div variants={items}>
                    <CardPhoto image={Photo13Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo14Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo15Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo16Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo17Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo18Image}></CardPhoto>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab1Category3')}</h3>

                <motion.div
                  className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                  initial='hidden'
                  animate='visible'
                  variants={container}
                >
                  <motion.div variants={items}>
                    <CardPhoto image={Photo19Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo20Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo21Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo22Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo23Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo24Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo25Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo26Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo27Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo28Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo29Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo30Image}></CardPhoto>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab1Category4')}</h3>

                <motion.div
                  className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                  initial='hidden'
                  animate='visible'
                  variants={container}
                >
                  <motion.div variants={items}>
                    <CardPhoto image={Photo31Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo32Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo33Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo34Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo35Image}></CardPhoto>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardPhoto image={Photo36Image}></CardPhoto>
                  </motion.div>
                </motion.div>
              </div>
            </TabPanel>

            <TabPanel className='flex flex-col gap-16'>
              <div className='grid gap-4 self-center'>
                <p className='text-center text-gray'>{t('tab2Subtitle')}</p>
                <h2 className='text-center text-4xl text-secondary'>{t('tab2Title')}</h2>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab2Category1')}</h3>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2'
                >
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2025_07_02_Date')}
                      subtitle={t('video_2025_07_02_Subtitle')}
                      title={t('video_2025_07_02_Title')}
                      src='https://www.youtube.com/embed/0Q5iFKJXMak?si=184dGTYNjPLkbjk_'
                    ></CardVideo>
                  </motion.div>
                    <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2025_05_29_Date')}
                      subtitle={t('video_2025_05_29_Subtitle')}
                      title={t('video_2025_05_29_Title')}
                      src='https://www.youtube.com/embed/4-_1G0wH3pA?si=rahdaRfazGzSqlwI'
                    ></CardVideo>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab2Category2')}</h3>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2'
                >
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2024_05_09_Date')}
                      subtitle={t('video_2024_05_09_Subtitle')}
                      title={t('video_2024_05_09_Title')}
                      src='https://www.youtube.com/embed/iedb8wC-w4c?si=2PJRVTeRO1iRZVJX'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2024_04_24_Date')}
                      subtitle={t('video_2024_04_24_Subtitle')}
                      title={t('video_2024_04_24_Title')}
                      src='https://www.youtube.com/embed/k0ijVAXKJDI?si=mF6yf4NvO0Or9BZI'
                    ></CardVideo>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab2Category7')}</h3>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2'
                >
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_12_09_Date')}
                      subtitle={t('video_2023_12_09_Subtitle')}
                      title={t('video_2023_12_09_Title')}
                      src='https://www.commodity-tv.com/embed/watch&v=3441'
                      poster={PosterImage}
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_12_07_Date')}
                      subtitle={t('video_2023_12_07_Subtitle')}
                      title={t('video_2023_12_07_Title')}
                      src='https://www.youtube.com/embed/JUqYwzBBjW8?si=GrFsqgxHyau-qomQ'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_11_22_Date')}
                      subtitle={t('video_2023_11_22_Subtitle')}
                      title={t('video_2023_11_22_Title')}
                      src='https://www.youtube.com/embed/ean-8z-8lC0?si=zJBA2h0Iw7cF8Kq4'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_07_24_Date')}
                      subtitle={t('video_2023_07_24_Subtitle')}
                      title={t('video_2023_07_24_Title')}
                      src='https://www.youtube.com/embed/8NxE8Kk-XKo?si=iQJ1Cb4YGav1gLwG'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_07_10_Date')}
                      subtitle={t('video_2023_07_10_Subtitle')}
                      title={t('video_2023_07_10_Title')}
                      src='https://www.youtube.com/embed/oSImXDkyRtg?si=IRbQOqsNyTNI6t-_'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_06_02_Date')}
                      subtitle={t('video_2023_06_02_Subtitle')}
                      title={t('video_2023_06_02_Title')}
                      src='https://www.youtube.com/embed/-P9_mFXczSU?si=QP7TB-G-XuflJtzK'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_04_26_Date')}
                      subtitle={t('video_2023_04_26_Subtitle')}
                      title={t('video_2023_04_26_Title')}
                      src='https://www.youtube.com/embed/0ybRr-67QIk?si=iwD85NKRGtjVOh1u'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_04_13_Date')}
                      subtitle={t('video_2023_04_13_Subtitle')}
                      title={t('video_2023_04_13_Title')}
                      src='https://www.youtube.com/embed/uXxTiqo-XMk?si=EaFUbneLCk9EBcwu'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2023_02_17_Date')}
                      subtitle={t('video_2023_02_17_Subtitle')}
                      title={t('video_2023_02_17_Title')}
                      src='https://www.youtube.com/embed/yGk7lC5qwoY?si=7LmuAD_r5LRlPSLk'
                    ></CardVideo>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab2Category3')}</h3>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2'
                >
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_12_07_Date')}
                      subtitle={t('video_2022_12_07_Subtitle')}
                      title={t('video_2022_12_07_Title')}
                      src='https://www.youtube.com/embed/gBdQHfDYbIk?si=KehEIRKFzO3FTb7D'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_12_06_Date')}
                      subtitle={t('video_2022_12_06_Subtitle')}
                      title={t('video_2022_12_06_Title')}
                      src='https://www.youtube.com/embed/DbFKidn6npY?si=xuELBTQANwNoBrLC'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_11_30_Date')}
                      subtitle={t('video_2022_11_30_Subtitle')}
                      title={t('video_2022_11_30_Title')}
                      src='https://www.youtube.com/embed/AKfYxf2Iqdo?si=KSHbfJ6twzR2d4-p'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_11_28_Date')}
                      subtitle={t('video_2022_11_28_Subtitle')}
                      title={t('video_2022_11_28_Title')}
                      src='https://www.youtube.com/embed/y0kdPicDhEo?si=iRwBR8rwg1lNnS97'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_11_24_Date')}
                      subtitle={t('video_2022_11_24_Subtitle')}
                      title={t('video_2022_11_24_Title')}
                      src='https://www.youtube.com/embed/MkqXP7m2GUg?si=GFmylCYdGU80-uV_'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_11_15_Date')}
                      subtitle={t('video_2022_11_15_Subtitle')}
                      title={t('video_2022_11_15_Title')}
                      src='https://www.youtube.com/embed/5chnujw7JVo?si=4Ubh25prtANyCWOX'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_10_07_Date')}
                      subtitle={t('video_2022_10_07_Subtitle')}
                      title={t('video_2022_10_07_Title')}
                      src='https://www.youtube.com/embed/gSjgaiMMPxM?si=kWydxJ-_GjyjKC1q'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_09_21_Date')}
                      subtitle={t('video_2022_09_21_Subtitle')}
                      title={t('video_2022_09_21_Title')}
                      src='https://www.youtube.com/embed/cFfYSiGIRlw?si=jVDlS-of-GPh43mw'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_09_20_Date')}
                      subtitle={t('video_2022_09_20_Subtitle')}
                      title={t('video_2022_09_20_Title')}
                      src='https://www.youtube.com/embed/FWKZTvgS4Yk?si=_bbZtwcC7Q9kZ_OK'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_06_21a_Date')}
                      subtitle={t('video_2022_06_21a_Subtitle')}
                      title={t('video_2022_06_21a_Title')}
                      src='https://www.youtube.com/embed/mU3XJmhecB4?si=nnzEk_TgwU1etYVN'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_06_21b_Date')}
                      subtitle={t('video_2022_06_21b_Subtitle')}
                      title={t('video_2022_06_21b_Title')}
                      src='https://www.youtube.com/embed/EmkDKJ5t89Y?si=r4_7LsUiHaZAQXzv'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_06_07_Date')}
                      subtitle={t('video_2022_06_07_Subtitle')}
                      title={t('video_2022_06_07_Title')}
                      src='https://www.youtube.com/embed/4VP1I7d89Ak?si=4H97K5R2dVg-9IOb'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_06_06_Date')}
                      subtitle={t('video_2022_06_06_Subtitle')}
                      title={t('video_2022_06_06_Title')}
                      src='https://www.youtube.com/embed/E8KkXwK4Hgk?si=bMlzwj04UybKGN3y'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_06_02_Date')}
                      subtitle={t('video_2022_06_02_Subtitle')}
                      title={t('video_2022_06_02_Title')}
                      src='https://www.youtube.com/embed/5nO4SoN7ZX0?si=g3LH7sED5jwemkbG'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_05_31_Date')}
                      subtitle={t('video_2022_05_31_Subtitle')}
                      title={t('video_2022_05_31_Title')}
                      src='https://www.youtube.com/embed/KDMtBSKSTQc?si=dsE262KHJmiVEPAa'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_04_29_Date')}
                      subtitle={t('video_2022_04_29_Subtitle')}
                      title={t('video_2022_04_29_Title')}
                      src='https://www.youtube.com/embed/bFCUMqaLhcA?si=1ul_TB13mcDw26MX'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_03_15_Date')}
                      subtitle={t('video_2022_03_15_Subtitle')}
                      title={t('video_2022_03_15_Title')}
                      src='https://www.youtube.com/embed/fqzSj8PooME?si=2XMRIIFP0VKP_ZXf'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_03_14_Date')}
                      subtitle={t('video_2022_03_14_Subtitle')}
                      title={t('video_2022_03_14_Title')}
                      src='https://www.youtube.com/embed/tfkfyXiOtwU?si=zwffV2o_OabqJ4zq'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_02_23_Date')}
                      subtitle={t('video_2022_02_23_Subtitle')}
                      title={t('video_2022_02_23_Title')}
                      src='https://www.youtube.com/embed/JudIsG-UTJ8?si=-BlTonJb8vCakokw'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_01_24_Date')}
                      subtitle={t('video_2022_01_24_Subtitle')}
                      title={t('video_2022_01_24_Title')}
                      src='https://www.youtube.com/embed/VEm5arhVwLs?si=eyrNYIPFPSsQjnfM'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2022_01_13_Date')}
                      subtitle={t('video_2022_01_13_Subtitle')}
                      title={t('video_2022_01_13_Title')}
                      src='https://www.youtube.com/embed/qoxIJoM9AOA?si=B26GT7p2pUpK5F2i'
                    ></CardVideo>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab2Category4')}</h3>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2'
                >
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2021_11_25_Date')}
                      subtitle={t('video_2021_11_25_Subtitle')}
                      title={t('video_2021_11_25_Title')}
                      src='https://www.youtube.com/embed/p7Uz4z8HltE?si=etCC9jPnLTqZwoQb'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2021_11_12_Date')}
                      subtitle={t('video_2021_11_12_Subtitle')}
                      title={t('video_2021_11_12_Title')}
                      src='https://www.youtube.com/embed/eTXve7dpCGc?si=Xzf9yzRVsXatrM0z'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2021_09_12_Date')}
                      subtitle={t('video_2021_09_12_Subtitle')}
                      title={t('video_2021_09_12_Title')}
                      src='https://www.youtube.com/embed/x6nLBiwzA6A?si=sI_JAYIYYnLXwhb7'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2021_06_30_Date')}
                      subtitle={t('video_2021_06_30_Subtitle')}
                      title={t('video_2021_06_30_Title')}
                      src='https://www.youtube.com/embed/XHVxhVhyG9c?si=z-iCDY4-vhzH4czP'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2021_06_08_Date')}
                      subtitle={t('video_2021_06_08_Subtitle')}
                      title={t('video_2021_06_08_Title')}
                      src='https://www.youtube.com/embed/YcVMDDi1KY8?si=1ad8mBoEiL6wTSdV'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2021_01_28_Date')}
                      subtitle={t('video_2021_01_28_Subtitle')}
                      title={t('video_2021_01_28_Title')}
                      src='https://www.youtube.com/embed/L7_zlBba2Ak?si=1_biOcL1wOmKNrFl'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2021_01_05_Date')}
                      subtitle={t('video_2021_01_05_Subtitle')}
                      title={t('video_2021_01_05_Title')}
                      src='https://www.youtube.com/embed/ZsFOsBtBafc?si=7P1XliBZf2K9MDlF'
                    ></CardVideo>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab2Category5')}</h3>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2'
                >
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2020_12_18_Date')}
                      subtitle={t('video_2020_12_18_Subtitle')}
                      title={t('video_2020_12_18_Title')}
                      src='https://www.youtube.com/embed/1-2cSkQc6Rg?si=Pn14uzMvr6YKgC8S'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2020_09_02_Date')}
                      subtitle={t('video_2020_09_02_Subtitle')}
                      title={t('video_2020_09_02_Title')}
                      src='https://www.youtube.com/embed/2j4SAmn7nvg?si=BuRPp61J1d7oDzKK'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2020_08_21_Date')}
                      subtitle={t('video_2020_08_21_Subtitle')}
                      title={t('video_2020_08_21_Title')}
                      src='https://www.youtube.com/embed/epLimjSvLhU?si=2e1mN_Z2FGB1vGYm'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2020_08_19_Date')}
                      subtitle={t('video_2020_08_19_Subtitle')}
                      title={t('video_2020_08_19_Title')}
                      src='https://www.youtube.com/embed/aD61Qukn-ec?si=IA6i3-vtbXgXNtco'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2020_04_15_Date')}
                      subtitle={t('video_2020_04_15_Subtitle')}
                      title={t('video_2020_04_15_Title')}
                      src='https://www.youtube.com/embed/Lhkl4-BSxjo?si=82WDbcCvXLxhTmGC'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2020_03_10_Date')}
                      subtitle={t('video_2020_03_10_Subtitle')}
                      title={t('video_2020_03_10_Title')}
                      src='https://www.youtube.com/embed/zvVXEAg8Edo?si=nrBJw5iLIv2wvqtf'
                    ></CardVideo>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab2Category6')}</h3>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2'
                >
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2018_09_11_Date')}
                      subtitle={t('video_2018_09_11_Subtitle')}
                      title={t('video_2018_09_11_Title')}
                      src='https://www.youtube.com/embed/q9KB5607mds?si=K46gnGMV4ZhqGSDM'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2018_06_28_Date')}
                      subtitle={t('video_2018_06_28_Subtitle')}
                      title={t('video_2018_06_28_Title')}
                      src='https://www.youtube.com/embed/-irBTYjUG8c?si=8qov_bVEgf05jsPl'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2018_06_14_Date')}
                      subtitle={t('video_2018_06_14_Subtitle')}
                      title={t('video_2018_06_14_Title')}
                      src='https://www.youtube.com/embed/nm8ztnqh2Cs?si=v7ad6Njqwx1f1mdG'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2018_05_27_Date')}
                      subtitle={t('video_2018_05_27_Subtitle')}
                      title={t('video_2018_05_27_Title')}
                      src='https://www.youtube.com/embed/eG396WtEves?si=sLlNCJWEqHE9uNB6'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2017_10_11a_Date')}
                      subtitle={t('video_2017_10_11a_Subtitle')}
                      title={t('video_2017_10_11a_Title')}
                      src='https://www.youtube.com/embed/CzaYLIj_SP8?si=Tuf2-Pc2j6uAQ714'
                    ></CardVideo>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardVideo
                      date={t('video_2017_10_11b_Date')}
                      subtitle={t('video_2017_10_11b_Subtitle')}
                      title={t('video_2017_10_11b_Title')}
                      src='https://www.youtube.com/embed/r0CROGP80h0?si=3Gz5Tc-y2MytLpd_'
                    ></CardVideo>
                  </motion.div>
                </motion.div>
              </div>
            </TabPanel>

            <TabPanel className='flex flex-col gap-16'>
              <div className='grid gap-4 self-center'>
                <p className='text-center text-gray'>{t('tab3Subtitle')}</p>
                <h2 className='text-center text-4xl text-secondary'>{t('tab3Title')}</h2>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab3Category1')}</h3>
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                >
                  <motion.div variants={items}>
                    <CardArticle
                      image={OMRReviewImage}
                      date={t('article1Date')}
                      subtitle={t('article1Subtitle')}
                      title={t('article1Title')}
                      button={t('article1Button')}
                      href={QMRarticlePDF}
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={InnovationReviewImage}
                      date={t('article2Date')}
                      subtitle={t('article2Subtitle')}
                      title={t('article2Title')}
                      button={t('article2Button')}
                      href='https://www.innovationnewsnetwork.com/re-2ox-technology-revolutionises-battery-metals-processing/28926/'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={MiningdotcomReviewImage}
                      date={t('article3Date')}
                      subtitle={t('article3Subtitle')}
                      title={t('article3Title')}
                      button={t('article3Button')}
                      href='https://www.mining.com/canada-silver-cobalt-working-on-new-battery-recycling-initiative/'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={InternationalMiningReviewImage}
                      date={t('article4Date')}
                      subtitle={t('article4Subtitle')}
                      title={t('article4Title')}
                      button={t('article4Button')}
                      href='https://im-mining.com/2021/01/18/canada-silver-cobalt-works-enlists-sgs-canada-for-re-2ox-pilot-plant-build/'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={NorthernOntarioBusinessReviewImage}
                      date={t('article5Date')}
                      subtitle={t('article5Subtitle')}
                      title={t('article5Title')}
                      button={t('article5Button')}
                      href='https://www.northernontariobusiness.com/industry-news/mining/gowganda-silver-cobalt-explorer-starting-pilot-plant-to-make-electric-vehicle-battery-material-3274935'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={TheDeepDiveReviewImage}
                      date={t('article6Date')}
                      subtitle={t('article6Subtitle')}
                      title={t('article6Title')}
                      button={t('article6Button')}
                      href='https://thedeepdive.ca/canada-silver-cobalt-works-has-major-silver-discovery-in-northern-ontario/'
                    ></CardArticle>
                  </motion.div>
                </motion.div>
              </div>

              <div className='grid gap-10'>
                <h3 className='text-center text-3xl text-secondary'>{t('tab3Category2')}</h3>

                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={container}
                  className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
                >
                  <motion.div variants={items}>
                    <CardArticle
                      image={ResourceWorldReviewImage}
                      date={t('article7Date')}
                      subtitle={t('article7Subtitle')}
                      title={t('article7Title')}
                      button={t('article7Button')}
                      href='https://resourceworld.com/canada-cobalt-moves-to-fund-battery-sector-strategy/'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={CBCReviewImage}
                      date={t('article8Date')}
                      subtitle={t('article8Subtitle')}
                      title={t('article8Title')}
                      button={t('article8Button')}
                      href='https://www.cbc.ca/news/business/cobalt-canada-batteries-1.4903276'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={BNNBloombergReviewImage}
                      date={t('article9Date')}
                      subtitle={t('article9Subtitle')}
                      title={t('article9Title')}
                      button={t('article9Button')}
                      href='https://www.bnnbloomberg.ca/targeting-mineralization-of-base-and-precious-metals-1.1252119'
                    ></CardArticle>
                  </motion.div>
                </motion.div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang='en' />
      <title>Media | Nord Precious Metals</title>
      <meta
        name='description'
        content='Highest Silver grades in the world. Latest resource estimate at Castle East marks first grassroots discovery in decades for the Northern Ontario silver cobalt camp.'
      />
    </>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["common", "media"] }, language: { eq: $language } }) {
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