import * as React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';

/**
 * Renders the approved INLINE REFERENCE beside a historic figure, linked to the
 * Historic Information Disclaimer anchor.
 *
 * Must sit inside the same content block as the figure it qualifies, at the same
 * type size — not in a footer or tooltip.
 */
export default function HistoricReference({ className = '', label }) {
  return (
    <p className={className}>
      <Link
        className='underline hover:text-primary'
        to='/historic-information-disclaimer#historic-information-disclaimer'
      >
        {label}
      </Link>
    </p>
  );
}
