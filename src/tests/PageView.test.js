import { PageView } from 'src/PageView';
import { Page } from 'src/Page';

describe('PageViewer', () => {
    it('exists', () => {
        expect(new PageView({})).toBeDefined();
    });
    describe('#render()', () => {
        it('sets the page content in the buffer property', () => {
            const page = new Page(['h1','h2'],[['c1','c2']],1,2);
            const pageView = new PageView();

            pageView.render(page);

            const expected = [
                'h1|h2|',
                '--+--+',
                'c1|c2|',
                'Page 1 of 2',
                'N(ext page, P(revious page, F(irst page, L(ast page, eX(it'
            ].join('\n');
            expect(pageView.buffer).toBe(expected);
        });
    });
});
