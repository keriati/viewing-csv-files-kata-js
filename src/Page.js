function transposeMatrix(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}

function selectLongestString(currentLength, candidate) {
    if (!candidate) {
        return currentLength;
    }
    return (candidate.length > currentLength)
           ? candidate.length
           : currentLength;
}

export class Page {
    constructor(header, content, pageNumber, pageCount) {
        this.header = header;
        this.content = content;
        this.pageNumber = pageNumber;
        this.pageCount = pageCount;
        this.columnWidths = this.getColumnWidths();
    }

    /**
     * @method getColumnWidths
     * @private
     */
    getColumnWidths() {
        const linesMatrix = [[...this.header], ...this.content];

        const transposedLinesMatrix = transposeMatrix(linesMatrix);

        return transposedLinesMatrix
            .map(columnArray =>
                columnArray.reduce(selectLongestString, 0));
    }
}
