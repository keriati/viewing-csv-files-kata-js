import { PageController } from 'src/PageController';

function getMockView() {
    return {
        render: jest.fn(),
    };
}

function getMockPrinter() {
    return {
        print: jest.fn(),
    };
}

function getMockInputHandler() {
    return {
        addHandler: jest.fn(),
    };
}

function getMockPaginator() {
    return {
        getPrevPage: jest.fn(),
        getNextPage: jest.fn(),
        getFirstPage: jest.fn(),
        getLastPage: jest.fn(),
    };
}

function getFakePage() {
    return {
        header: ['h1', 'h2'],
        content: [['c1', 'c2']],
        pageNumber: 1,
        pageCount: 2,
        columnWidths: [2, 2],
    };
}

describe('PageController', () => {
    describe('#showPrevPage()', () => {
        it('invokes getPrevPage from the paginator to get the previous page', () => {
            const mockPaginator = getMockPaginator();
            const mockView = getMockView();
            const mockPrinter = getMockPrinter();
            const mockInputHandler = getMockInputHandler();
            const controller = new PageController(
                mockView,
                mockPrinter,
                mockInputHandler,
                mockPaginator,
            );

            controller.showPrevPage();

            expect(mockPaginator.getPrevPage.mock.calls.length).toBe(1);
        });
    });
    describe('#showNextPage()', () => {
        it('invokes getNextPage from the paginator to get the previous page', () => {
            const mockPaginator = getMockPaginator();
            const mockView = getMockView();
            const mockPrinter = getMockPrinter();
            const mockInputHandler = getMockInputHandler();
            const controller = new PageController(
                mockView,
                mockPrinter,
                mockInputHandler,
                mockPaginator,
            );

            controller.showNextPage();

            expect(mockPaginator.getNextPage.mock.calls.length).toBe(1);
        });
    });
    describe('#showFirstPage()', () => {
        it('invokes getFirstPage from the paginator to get the previous page', () => {
            const mockPaginator = getMockPaginator();
            const mockView = getMockView();
            const mockPrinter = getMockPrinter();
            const mockInputHandler = getMockInputHandler();
            const controller = new PageController(
                mockView,
                mockPrinter,
                mockInputHandler,
                mockPaginator,
            );

            controller.showFirstPage();

            expect(mockPaginator.getFirstPage.mock.calls.length).toBe(1);
        });
    });
    describe('#showLastPage()', () => {
        it('invokes getLastPage from the paginator to get the previous page', () => {
            const mockPaginator = getMockPaginator();
            const mockView = getMockView();
            const mockPrinter = getMockPrinter();
            const mockInputHandler = getMockInputHandler();
            const controller = new PageController(
                mockView,
                mockPrinter,
                mockInputHandler,
                mockPaginator,
            );

            controller.showLastPage();

            expect(mockPaginator.getLastPage.mock.calls.length).toBe(1);
        });
    });
    describe('#showPage()', () => {
        it('invokes the PageView render method with a page passed to it', () => {
            const fakePage = getFakePage();
            const mockView = getMockView();
            const controller = new PageController(
                mockView,
                getMockPrinter(),
                getMockInputHandler(),
                getMockPaginator(),
            );

            controller.showPage(fakePage);

            expect(mockView.render.mock.calls[0][0]).toBe(fakePage);
        });
    });
});
