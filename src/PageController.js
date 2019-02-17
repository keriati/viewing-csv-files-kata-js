export class PageController {
    constructor(view, printer, inputHandler, paginator) {
        this.view = view;
        this.printer = printer;
        this.paginator = paginator;

        inputHandler.addHandler({
            'n': this.showNextPage.bind(this),
            'p': this.showPrevPage.bind(this),
            'f': this.showFirstPage.bind(this),
            'l': this.showLastPage.bind(this),
            'x': this.exit.bind(this)
        });
    }

    showPrevPage(){
        this.showPage(this.paginator.getPrevPage());
    }

    showNextPage() {
        this.showPage(this.paginator.getNextPage());
    }

    showFirstPage() {
        this.showPage(this.paginator.getFirstPage());
    }

    showLastPage() {
        this.showPage(this.paginator.getLastPage());
    }

    exit() {
        this.printer.print('Good Bye!');
        process.exit();
    }

    showPage(page) {
        this.printer.print(this.view.render(page));
    }
}
