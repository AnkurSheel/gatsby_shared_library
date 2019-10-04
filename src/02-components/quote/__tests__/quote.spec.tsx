import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import Quote from '..';

describe('<Quote />', () => {
    const quote = 'Test Quote here';
    const author = 'authorName';

    /**
     * Render tests.
     */
    it('should render quote if author is missing', async () => {
        const { getByText } = render(<Quote quote={quote} />);
        const quoteElement = getByText(content => {
            return content === quote;
        });
        expect(quoteElement).not.toBeNull();
    });

    it('should not render author if author is missing', async () => {
        const { queryByText } = render(<Quote quote={quote} author={author} />);
        const authorElement = queryByText(content => {
            return content === author;
        });
        expect(authorElement).toBeNull();
    });

    it('should render quote and author', async () => {
        const { getByText } = render(<Quote quote={quote} author={author} />);
        const quoteElement = getByText(content => {
            return content === quote;
        });
        const authorElement = getByText(content => {
            return content === `- ${author}`;
        });
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
});
