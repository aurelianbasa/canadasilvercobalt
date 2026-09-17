import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export default function LiquidGlassBanner() {
  const { t } = useTranslation();

  return (
    <>
      <div className="liquid-glass-banner">
        <div className="liquidGlass-wrapper">
          {/* Subtle noise texture layer */}
          <div className="liquidGlass-noise"></div>
          
          {/* Main glass effect with refined backdrop filter */}
          <div className="liquidGlass-effect"></div>
          
          {/* Lighter tint for glass clarity */}
          <div className="liquidGlass-tint"></div>
          
          {/* Refined shine layer with softer edges */}
          <div className="liquidGlass-shine"></div>
          
          {/* Content stays on top */}
          <div className="liquidGlass-text">
            <p className='mb-4 text-3xl font-semibold'>{t('banner')}</p>
            <p className='text-lg'>{t('bannerNote')}</p>
          </div>
        </div>
      </div>

      {/* Refined SVG Filter with gentler distortion */}
      <svg style={{ display: 'none' }}>
        <filter
          id="glass-distortion"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
        >
          {/* Gentler turbulence for subtle liquid effect */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="5"
            result="turbulence"
          />
          
          {/* Soften the turbulence */}
          <feGaussianBlur in="turbulence" stdDeviation="1" result="softTurbulence" />
          
          {/* Create glass-like highlights */}
          <feSpecularLighting
            in="softTurbulence"
            surfaceScale="2"
            specularConstant="0.75"
            specularExponent="20"
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-50" y="-50" z="200" />
          </feSpecularLighting>
          
          {/* Subtle displacement for liquid effect */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="softTurbulence"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          
          {/* Composite with original for subtlety */}
          <feComposite
            in="displaced"
            in2="SourceGraphic"
            operator="over"
          />
        </filter>
      </svg>
    </>
  );
}