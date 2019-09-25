import React from 'react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import ReactDOMServer from 'react-dom/server';
import Quote from '..';

describe('<Quote />', () => {
    const quote = `
  Lorem ipsum dolor amet echo park activated charcoal banjo deep
  crucifix pinterest yr af tumeric literally. Tbh four loko tattooed
  kickstarter artisan.
  `;

    /**
     * Accessibility tests.
     */
    it('should meet accessibility guidelines', async () => {
        const html = ReactDOMServer.renderToString(<Quote quote={quote} />);
        const actual = await axe(html);
        expect(actual).toHaveNoViolations();
    });
});
