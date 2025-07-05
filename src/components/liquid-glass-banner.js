import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export default function LiquidGlassBanner() {
  const { t } = useTranslation();

  return (
    <>
      <div className="liquid-glass-banner">
        <div className="liquidGlass-wrapper">
          <div className="liquidGlass-effect"></div>
          <div className="liquidGlass-tint"></div>
          <div className="liquidGlass-shine"></div>
          <div className="liquidGlass-text">
            <p className='mb-4 text-3xl font-semibold'>{t('banner')}</p>
            <p className='text-lg'>{t('bannerNote')}</p>
          </div>
        </div>
      </div>

      {/* SVG Filter for distortion effect */}
      <svg style={{ display: 'none' }}>
        <filter
          id="glass-distortion"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            seed="5"
            result="turbulence"
          />

          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>

          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lighting-color="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>

          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="150"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <style jsx>{`
        .liquid-glass-banner {
          width: 100%;
          border-radius: 1rem;
          padding: 2px;
        }

        .liquidGlass-wrapper {
          position: relative;
          display: flex;
          overflow: hidden;
          cursor: default;
          box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
          border-radius: 1rem;
          padding: 2rem 2.25rem;
          background: rgba(0, 0, 0, 0.6);
        }

        .liquidGlass-effect {
          position: absolute;
          z-index: 0;
          inset: 0;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          filter: url(#glass-distortion);
          overflow: hidden;
          isolation: isolate;
        }

        .liquidGlass-tint {
          z-index: 1;
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.08);
        }

        .liquidGlass-shine {
          position: absolute;
          inset: 0;
          z-index: 2;
          overflow: hidden;
          box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.3),
            inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3);
          border-radius: 1rem;
        }

        .liquidGlass-text {
          z-index: 3;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .liquidGlass-wrapper:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.15);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .liquidGlass-wrapper {
            padding: 1.5rem 1.75rem;
          }
        }
      `}</style>
    </>
  );
}