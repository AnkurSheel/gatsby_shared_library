/* eslint-disable no-use-before-define */
import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { JssProvider, SheetsRegistry } from 'react-jss';
import Quote from '..';

describe('<Quote />', () => {
    const quote = 'Test Quote here';
    const author = 'authorName';

    /**
     * Render tests.
     */
    it('should render quote if author is missing', async () => {
        const { getByText } = render(<Quote quote={quote} />);
        const quoteElement = getByText((content) => content === quote);
        expect(quoteElement).not.toBeNull();
    });

    it('should not render author if author is missing', async () => {
        const { queryByText } = render(<Quote quote={quote} author={author} />);
        const authorElement = queryByText((content) => content === author);
        expect(authorElement).toBeNull();
    });

    it('should render quote and author', async () => {
        const { getByText } = render(<Quote quote={quote} author={author} />);
        const quoteElement = getByText((content) => content === quote);
        const authorElement = getByText((content) => content === `- ${author}`);
        expect(quoteElement).not.toBeNull();
        expect(authorElement).not.toBeNull();
    });

    /**
     * Accessibility tests.
     */
    it('should meet accessibility guidelines', async () => {
        const { container } = render(<Quote quote={quote} />);
        const actual = await axe(container);
        expect(actual).toHaveNoViolations();
    });

    it('snapshot', async () => {
        const sheets = new SheetsRegistry();
        const { container } = render(
            <JssProvider registry={sheets}>
                <Quote quote={quote} />
            </JssProvider>
        );
        expect(container).toMatchSnapshot();
        expect(sheets.toString()).toMatchSnapshot();
    });
});
