import {LanguageEditor} from '@taiga-ui/i18n/interfaces';

export const TUI_POLISH_LANGUAGE_ADDON_EDITOR: LanguageEditor = {
    colorSelectorModeNames: [`Kolor`, `Gradient`],
    toolbarTools: {
        undo: `Cofnij`,
        redo: `Ponów`,
        font: `Czcionka`,
        fontStyle: `Styl czcionki`,
        fontSize: `Rozmiar czcionki`,
        bold: `Pogrubienie`,
        italic: `Kursywa`,
        underline: `Podkreślenie`,
        strikeThrough: `Przekreślenie`,
        justify: `Wyrównanie`,
        justifyLeft: `Wyrównanie do lewej`,
        justifyCenter: `Wyrównanie do środka`,
        justifyRight: `Wyrównanie do prawej`,
        justifyFull: `Justowanie`,
        list: `Lista`,
        indent: `Zmniejsz wcięcie`,
        outdent: `Zwiększ wcięcie`,
        unorderedList: `Lista punktowana`,
        orderedList: `Lista numerowana`,
        quote: `Cytat`,
        foreColor: `Kolor tekstu`,
        backColor: `Kolor tła`,
        hiliteColor: `Kolor zaznaczenia`,
        clear: `Wyczyść`,
        link: `Link`,
        attach: `Załącz plik`,
        tex: `Wstaw wzór`,
        code: `Kod`,
        image: `Wstaw ilustrację`,
        insertHorizontalRule: `Wstaw separator`,
        superscript: `Indeks górny`,
        subscript: `Indeks dolny`,
        insertTable: `Wstaw tabelę`,
        insertGroup: `Insert group`,
        removeGroup: `Remove group`,
        insertAnchor: `Insert anchor`,
        mergeCells: `Scal komórki`,
        splitCells: `Podziel komórki`,
        rowsColumnsManaging: `Zarządzaj wierszami i kolumnami`,
        cellColor: `Kolor komórki`,
        setDetails: `Details`,
        removeDetails: `Remove details`,
    },
    editorEditLink: {
        urlExample: `example.com`,
        anchorExample: `anchor`,
    },
    editorTableCommands: [
        [`Wstaw kolumnę przed`, `Wstaw kolumnę po`],
        [`Wstaw wiersz przed`, `Wstaw wiersz po`],
        [`Usuń kolumnę`, `Usuń wiersz`],
    ],
    editorCodeOptions: [`Kod w tekście`, `Kod w bloku`],
    editorFontOptions: {
        small: `Small`,
        normal: `Normalny`,
        large: `Large`,
        title: `Tytuł`,
        subtitle: `Podtytuł`,
    },
};
