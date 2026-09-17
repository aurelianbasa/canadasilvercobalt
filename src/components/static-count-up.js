import * as React from 'react';
import CountUp from 'react-countup';

/**
 * CountUp that renders its final value in the server HTML, so the number is
 * present without JavaScript. After hydration it hands over to CountUp, which
 * animates when the counter scrolls into view.
 */
export default function StaticCountUp({ end, separator = ',', ...props }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span>{separator ? end.toLocaleString('en-US').replace(/,/g, separator) : end}</span>;
  }

  return <CountUp end={end} separator={separator} {...props} />;
}
