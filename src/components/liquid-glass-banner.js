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
            lighting-color="white"
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

      <style jsx>{`
        .liquid-glass-banner {
          width: 100%;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(145deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 50%, 
            rgba(255, 255, 255, 0.02) 100%
          );
        }

        .liquidGlass-wrapper {
          position: relative;
          display: flex;
          overflow: hidden;
          cursor: default;
          border-radius: 1rem;
          padding: 2rem 2.25rem;
          background: rgba(255, 255, 255, 0.02);
          
          /* Layered shadows for depth */
          box-shadow: 
            0 0 0.75px hsla(205, 20%, 10%, 0.2),
            0.7px 0.8px 1.2px -0.4px hsla(205, 20%, 10%, 0.1),
            1.3px 1.5px 2.2px -0.8px hsla(205, 20%, 10%, 0.1),
            2.3px 2.6px 3.9px -1.2px hsla(205, 20%, 10%, 0.1),
            3.9px 4.4px 6.6px -1.7px hsla(205, 20%, 10%, 0.1),
            6.5px 7.2px 10.9px -2.1px hsla(205, 20%, 10%, 0.1),
            8px 9px 14px -2.5px hsla(205, 20%, 10%, 0.2);
          
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        /* Subtle noise texture for glass realism */
        .liquidGlass-noise {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          background-size: 100px 100px;
          background-repeat: repeat;
          pointer-events: none;
        }

        .liquidGlass-effect {
          position: absolute;
          z-index: 2;
          inset: 0;
          backdrop-filter: blur(5px) brightness(0.95) saturate(1.2);
          -webkit-backdrop-filter: blur(5px) brightness(0.95) saturate(1.2);
          filter: url(#glass-distortion);
          overflow: hidden;
          isolation: isolate;
        }

        .liquidGlass-tint {
          z-index: 3;
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            hsla(200, 80%, 90%, 0.02) 0%,
            hsla(200, 80%, 80%, 0.01) 50%,
            transparent 100%
          );
          mix-blend-mode: screen;
        }

        .liquidGlass-shine {
          position: absolute;
          inset: 0;
          z-index: 4;
          overflow: hidden;
          border-radius: 1rem;
          
          /* Subtle glass edge highlights */
          box-shadow: 
            inset 2px 2px 1px -3px hsla(205, 20%, 90%, 0.8),
            inset 4px 4px 2px -6px hsla(205, 20%, 90%, 0.3),
            inset 1.5px 1.5px 1.5px -0.75px hsla(205, 20%, 90%, 0.15),
            inset 1.5px 1.5px 0.25px hsla(205, 20%, 90%, 0.03),
            inset 0 0 0.25px 0.5px hsla(205, 20%, 90%, 0.03),
            inset -1px -1px 1px -0.5px hsla(205, 20%, 60%, 0.1);
        }

        .liquidGlass-text {
          z-index: 5;
          color: white;
          text-shadow: 
            0 1px 2px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .liquidGlass-wrapper:hover {
          transform: scale(1.015);
          background: rgba(255, 255, 255, 0.03);
          
          box-shadow: 
            0 0 0.75px hsla(205, 20%, 10%, 0.25),
            0.7px 0.8px 1.2px -0.4px hsla(205, 20%, 10%, 0.15),
            1.3px 1.5px 2.2px -0.8px hsla(205, 20%, 10%, 0.15),
            2.3px 2.6px 3.9px -1.2px hsla(205, 20%, 10%, 0.15),
            3.9px 4.4px 6.6px -1.7px hsla(205, 20%, 10%, 0.15),
            6.5px 7.2px 10.9px -2.1px hsla(205, 20%, 10%, 0.15),
            8px 9px 14px -2.5px hsla(205, 20%, 10%, 0.25),
            0 0 30px rgba(255, 255, 255, 0.05);
        }
        
        /* Add subtle animation on hover */
        .liquidGlass-wrapper:hover .liquidGlass-effect {
          filter: url(#glass-distortion) brightness(1);
        }
        
        /* Subtle breathing animation for the shine */
        @keyframes shimmer {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .liquidGlass-shine {
          animation: shimmer 4s ease-in-out infinite;
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