#!/usr/bin/env node
import * as fs from 'fs';
import { FileReader } from 'src/FileReader';
import { ArgumentParser } from 'src/ArgumentParser';
import { CSVFile } from 'src/CSVFile';
import { PageView } from 'src/PageView';
import { Paginator } from 'src/Paginator';
import { ConsolePrinter } from 'src/ConsolePrinter';
import { PageController } from 'src/PageController';
import { KeyBoardHandler } from 'src/KeyBoardHandler';

const argumentParser = new ArgumentParser(process.argv);
const fileName = argumentParser.getFileName();
const pageSize = argumentParser.getPageSize();

const myFileReader = new FileReader(fs);

const fileContent = myFileReader.readFile(fileName);

const pageController = new PageController(
    new PageView(),
    new ConsolePrinter(),
    new KeyBoardHandler(process),
    new Paginator(
        new CSVFile(fileContent),
        pageSize,
    )
);

pageController.showFirstPage();
