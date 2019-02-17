export class PageView {
    constructor() {
        this.buffer = '';
    }

    render(page) {
        this.buffer = '';

        this.addToBuffer(
            this.renderHeader(page)
        );
        this.addToBuffer(
            this.renderContent(page)
        );
        this.addToBuffer(
            this.renderFooter(page),
        );

        return this.buffer;
    }

    /**
     * @method renderHeader
     * @private
     */
    renderHeader(page) {
        const paddedHeader = page.header.map(
            (headerValue, columnNumber) => headerValue.padEnd(page.columnWidths[columnNumber]),
        );

        const headerString = paddedHeader.join('|') + '|';
        const headerBorder = page.columnWidths.reduce((acc, column) => acc + ''.padEnd(column, '-') + '+', '');

        return (`${headerString}\n${headerBorder}`);
    }

    /**
     * @method renderContent
     * @private
     */
    renderContent(page) {
        const paddedContent = page.content.map(
            (a) => a.map(
                (content, i) => content.padEnd(page.columnWidths[i])
            )
        );
        return paddedContent.reduce((result, paddedFields) => {
            return `${result}\n${paddedFields.join('|')}|`;
        },'');
    }

    /**
     * @method renderFooter
     * @private
     */
    renderFooter(page) {
        const pageLine = `Page ${page.pageNumber} of ${page.pageCount}`;
        const helpText = `N(ext page, P(revious page, F(irst page, L(ast page, eX(it`;

        return `\n${pageLine}\n${helpText}`;
    }

    /**
     * @method addToBuffer
     * @private
     */
    addToBuffer(string) {
        this.buffer += string;
    }
}
