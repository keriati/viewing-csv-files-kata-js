import { Paginator } from 'src/Paginator';
import { CSVFile } from 'src/CSVFile';

const CSV_DATA = [
    'header1;header2;header3',
    'content11;content12;content13',
    'content21;longestWord;content23',
    'content31;content32;content33'
].join('\n');

describe('Paginator', () => {
    describe('#getPageCount()', () => {
        it('returns the number of pages in the csv file', () => {
            const PAGE_SIZE = 1;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);

            const pageCount = paginator.getPageCount();

            expect(pageCount).toBe(3);
        });
        it('returns the number of pages in the csv file when lines don\'t result in round number', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);

            const pageCount = paginator.getPageCount();

            expect(pageCount).toBe(2);
        });
        it('returns 0 when there are no pages', () => {
            const PAGE_SIZE = 1;
            const paginator = new Paginator(new CSVFile(''), PAGE_SIZE);

            const pageCount = paginator.getPageCount();

            expect(pageCount).toBe(0);
        });
    });
    describe('#getFirstPage()', () => {
        it('returns a page object with first page data', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);

            const page = paginator.getFirstPage();

            expect(page.content).toEqual([
                ["content11", "content12", "content13"],
                ["content21", "longestWord", "content23"]
            ]);
        });
        it('sets the active page property to 1', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);

            paginator.getFirstPage();

            expect(paginator.activePage).toBe(1);
        });
    });
    describe('#getLastPage()', () => {
        it('returns a page object with last page data', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);

            const page = paginator.getLastPage();

            expect(page.content).toEqual([
                ["content31", "content32", "content33"]
            ]);
        });
        it('sets the active page property to the last page numer', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);

            paginator.getLastPage();

            expect(paginator.activePage).toBe(2);
        });
    });
    describe('#getNextPage()', () => {
        it('returns the content of the next page', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);

            const page = paginator.getNextPage();

            expect(page.content).toEqual([
                ["content31", "content32", "content33"]
            ]);
        });
        it('increases the activePage property by one', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);

            paginator.getNextPage();

            expect(paginator.activePage).toBe(2);
        });
    });
    describe('#getPrevPage()', () => {
        it('returns the content of the previous page', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);
            paginator.activePage = 2;

            const page = paginator.getPrevPage();

            expect(page.content).toEqual([
                ["content11", "content12", "content13"],
                ["content21", "longestWord", "content23"]
            ]);
        });
        it('decreases the activePage property by one', () => {
            const PAGE_SIZE = 2;
            const paginator = new Paginator(new CSVFile(CSV_DATA), PAGE_SIZE);
            paginator.activePage = 2;

            paginator.getPrevPage();

            expect(paginator.activePage).toBe(1);
        });
    });
});
