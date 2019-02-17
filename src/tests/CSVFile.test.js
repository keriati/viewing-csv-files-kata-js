import { CSVFile } from 'src/CSVFile';

const CSV_DATA = ['header1;header2;header3',
                  'content11;content12;content13',
                  'content21;longestWord;content23',
                  'content31;content32;content33'].join('\n');

describe('CSVFile', () => {
    describe('#getHeader()', () => {
        it('returns the header line', () => {
            const csvFile = new CSVFile(CSV_DATA);

            const headerLine = csvFile.getHeader();

            expect(headerLine).toEqual(['header1', 'header2', 'header3']);
        });
    });
    describe('#getContent()', () => {
        it('returns the first line when passing parameter 0', () => {
            const csvFile = new CSVFile(CSV_DATA);

            const content = csvFile.getContent(2, 1);

            expect(content).toEqual([['content21', 'longestWord', 'content23']]);
        });
    });
    describe('#getContentLength()', () => {
        it('returns the length of the content', () => {
            const csvFile = new CSVFile(CSV_DATA);

            const contentLength = csvFile.getContentLength();

            expect(contentLength).toEqual(3);
        });
    });
});
