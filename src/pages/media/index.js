import * as React from 'react';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import Layout from '@components/layout';
import CardPhoto from '@components/card-photo';
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
import Photo37Image from '@media/media/photo-37.webp';
import Photo38Image from '@media/media/photo-38.webp';
import Photo39Image from '@media/media/photo-39.webp';
import Photo40Image from '@media/media/photo-40.webp';
import Photo41Image from '@media/media/photo-41.webp';
import Photo42Image from '@media/media/photo-42.webp';
import Photo43Image from '@media/media/photo-43.webp';
import Photo44Image from '@media/media/photo-44.webp';
import Photo45Image from '@media/media/photo-45.webp';
import Photo46Image from '@media/media/photo-46.webp';
import Photo47Image from '@media/media/photo-47.webp';
import Photo48Image from '@media/media/photo-48.webp';
import Photo49Image from '@media/media/photo-49.webp';
import Photo50Image from '@media/media/photo-50.webp';
import Photo51Image from '@media/media/photo-51.webp';
import Photo52Image from '@media/media/photo-52.webp';
import Photo53Image from '@media/media/photo-53.webp';
import Photo54Image from '@media/media/photo-54.webp';
import Photo55Image from '@media/media/photo-55.webp';
import Photo56Image from '@media/media/photo-56.webp';
import Photo57Image from '@media/media/photo-57.webp';
import Photo58Image from '@media/media/photo-58.webp';
import Photo59Image from '@media/media/photo-59.webp';
import Photo60Image from '@media/media/photo-60.webp';

import OMRReviewImage from '@media/media/omr-review.webp';
import CBCReviewImage from '@media/media/cbc-review.webp';
import InnovationReviewImage from '@media/media/innovation-review.webp';
import TheDeepDiveReviewImage from '@media/media/thedeepdive-review.webp';
import MiningdotcomReviewImage from '@media/media/miningdotcom-review.webp';
import BNNBloombergReviewImage from '@media/media/bnnbloomberg-review.webp';
import ResourceWorldReviewImage from '@media/media/resourceworld-review.webp';
import InternationalMiningReviewImage from '@media/media/internationalmining-review.webp';
import NorthernOntarioBusinessReviewImage from '@media/media/northernontariobusiness-review.webp';
import CanadianMiningJournalReviewImage from '@media/media/cmj-review.webp';
import CIMMagazineReviewImage from '@media/media/cim-review.webp';
import MICAReviewImage from '@media/media/cemi-review.webp';
import MorningNorthReviewImage from '@media/media/morningnorth-review.webp';
import XReviewImage from '@media/media/x-review.webp';
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
      <CardPhoto image={Photo43Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo44Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo45Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo46Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo47Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo48Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo49Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo50Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo51Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo52Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo53Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo54Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo55Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo56Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo57Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo58Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo59Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo60Image}></CardPhoto>
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
      <CardPhoto image={Photo37Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo38Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo39Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo40Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo41Image}></CardPhoto>
    </motion.div>
    <motion.div variants={items}>
      <CardPhoto image={Photo42Image}></CardPhoto>
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
                <h3 className='text-center text-3xl text-secondary'>{t('tab1Category4')}</h3>

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
                <h3 className='text-center text-3xl text-secondary'>{t('tab1Category5')}</h3>

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
                  {/* NEWEST ARTICLES FIRST - Articles 15, 14, 13, 12, 11, 10 */}
                  <motion.div variants={items}>
                    <CardArticle
                      image={XReviewImage}
                      date={t('article15Date')}
                      subtitle={t('article15Subtitle')}
                      title={t('article15Title')}
                      button={t('article15Button')}
                      href='https://x.com/Sflecce/status/1985766916372283886'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={CBCReviewImage}
                      date={t('article14Date')}
                      subtitle={t('article14Subtitle')}
                      title={t('article14Title')}
                      button={t('article14Button')}
                      href='https://www.cbc.ca/news/canada/sudbury/silver-mine-boom-northern-ontario-9.6962277'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={MorningNorthReviewImage}
                      date={t('article13Date')}
                      subtitle={t('article13Subtitle')}
                      title={t('article13Title')}
                      button={t('article13Button')}
                      href='https://www.cbc.ca/listen/live-radio/1-41-morning-north/clip/16179275-mining-silver-nothern-ontario'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={MICAReviewImage}
                      date={t('article12Date')}
                      subtitle={t('article12Subtitle')}
                      title={t('article12Title')}
                      button={t('article12Button')}
                      href='https://micanetwork.ca/mica/news/mica-announces-recipients-of-cfp-4'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={CIMMagazineReviewImage}
                      date={t('article11Date')}
                      subtitle={t('article11Subtitle')}
                      title={t('article11Title')}
                      button={t('article11Button')}
                      href='https://magazine.cim.org/en/news/2025/buried-treasure-en/'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={CanadianMiningJournalReviewImage}
                      date={t('article10Date')}
                      subtitle={t('article10Subtitle')}
                      title={t('article10Title')}
                      button={t('article10Button')}
                      href='https://www.canadianminingjournal.com/news/nord-precious-metals-resumes-permitting-ahead-of-castle-silver-bulk-sample/'
                    ></CardArticle>
                  </motion.div>
                  {/* Articles from 2023 - Articles 9, 8, 7 */}
                  <motion.div variants={items}>
                    <CardArticle
                      image={OMRReviewImage}
                      date={t('article9Date')}
                      subtitle={t('article9Subtitle')}
                      title={t('article9Title')}
                      button={t('article9Button')}
                      href={QMRarticlePDF}
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={InnovationReviewImage}
                      date={t('article8Date')}
                      subtitle={t('article8Subtitle')}
                      title={t('article8Title')}
                      button={t('article8Button')}
                      href='https://www.innovationnewsnetwork.com/re-2ox-technology-revolutionises-battery-metals-processing/28926/'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={MiningdotcomReviewImage}
                      date={t('article7Date')}
                      subtitle={t('article7Subtitle')}
                      title={t('article7Title')}
                      button={t('article7Button')}
                      href='https://www.mining.com/canada-silver-cobalt-working-on-new-battery-recycling-initiative/'
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
                  {/* Articles 6, 5, 4 (More 2023 articles) */}
                  <motion.div variants={items}>
                    <CardArticle
                      image={InternationalMiningReviewImage}
                      date={t('article6Date')}
                      subtitle={t('article6Subtitle')}
                      title={t('article6Title')}
                      button={t('article6Button')}
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
                      date={t('article4Date')}
                      subtitle={t('article4Subtitle')}
                      title={t('article4Title')}
                      button={t('article4Button')}
                      href='https://thedeepdive.ca/canada-silver-cobalt-works-has-major-silver-discovery-in-northern-ontario/'
                    ></CardArticle>
                  </motion.div>
                  {/* Oldest articles - Articles 3, 2, 1 */}
                  <motion.div variants={items}>
                    <CardArticle
                      image={ResourceWorldReviewImage}
                      date={t('article3Date')}
                      subtitle={t('article3Subtitle')}
                      title={t('article3Title')}
                      button={t('article3Button')}
                      href='https://resourceworld.com/canada-cobalt-moves-to-fund-battery-sector-strategy/'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={BNNBloombergReviewImage}
                      date={t('article2Date')}
                      subtitle={t('article2Subtitle')}
                      title={t('article2Title')}
                      button={t('article2Button')}
                      href='https://www.bnnbloomberg.ca/targeting-mineralization-of-base-and-precious-metals-1.1252119'
                    ></CardArticle>
                  </motion.div>
                  <motion.div variants={items}>
                    <CardArticle
                      image={CBCReviewImage}
                      date={t('article1Date')}
                      subtitle={t('article1Subtitle')}
                      title={t('article1Title')}
                      button={t('article1Button')}
                      href='https://www.cbc.ca/news/business/cobalt-canada-batteries-1.4903276'
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
        content='Nord Precious Metals is a Canadian junior mining company with a main focus on silver and gold but also with a valuable portfolio of critical mineral projects based in safe and ecologically responsible jurisdictions.'
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