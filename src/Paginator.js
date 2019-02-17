import { Page } from 'src/Page';

function getStartingLine(pageNumber, pageSize) {
    return (pageNumber === 1)
           ? 1
           : ((pageNumber - 1) * pageSize) + 1;
}

export class Paginator {
    constructor(csvFile, pageSize) {
        this.csvFile = csvFile;
        this.pageSize = pageSize;
        this.activePage = 1;
        this.pageCount = this.getPageCount();
    }

    getFirstPage() {
        this.activePage = 1;

        return this.getPage(this.activePage);
    }

    getLastPage() {
        this.activePage = this.pageCount;

        return this.getPage(this.activePage);
    }

    getNextPage() {
        if (this.activePage !== this.pageCount) {
            this.activePage++;
        }
        return this.getPage(this.activePage);
    }

    getPrevPage() {
        if (this.activePage !== 1) {
            this.activePage--;
        }

        return this.getPage(this.activePage);
    }

    /**
     * @method getPageCount
     * @private
     */
    getPageCount() {
        return Math.ceil(this.csvFile.getContentLength() / this.pageSize);
    }

    /**
     * @method getPage
     * @private
     */
    getPage(pageNumber) {
        const header = this.csvFile.getHeader();
        const content = this.getPageContent(pageNumber);

        return new Page(
            header,
            content,
            this.activePage,
            this.pageCount
        );
    }

    /**
     * @method getPageContent
     * @private
     */
    getPageContent(pageNumber) {
        return this.csvFile.getContent(
            getStartingLine(pageNumber, this.pageSize),
            this.pageSize
        );
    }
}
