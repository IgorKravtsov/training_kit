export const useLocalizationGrid = () => {
  const localizedText = {
    // Root
    noRowsLabel: 'Даних немає',
    noResultsOverlayLabel: 'Не знайдено результатів',
    errorOverlayDefaultLabel: 'Трапилась помилка',

    // Density selector toolbar button text
    toolbarDensity: 'Розмір',
    toolbarDensityLabel: 'Розмір',
    toolbarDensityCompact: 'Компакт',
    toolbarDensityStandard: 'Стандарт',
    toolbarDensityComfortable: 'Комфорт',

    // Columns selector toolbar button text
    toolbarColumns: 'Колонки',
    toolbarColumnsLabel: 'Оберіть колонки',

    // Filters toolbar button text
    toolbarFilters: 'Фільтри',
    toolbarFiltersLabel: 'Показати фільтри',
    toolbarFiltersTooltipHide: 'Hide filters',
    toolbarFiltersTooltipShow: 'Показати фільтри',
    toolbarFiltersTooltipActive: (count: number) => (count !== 1 ? `${count} фільтрів` : `${count} активний фільтр`),

    // Export selector toolbar button text
    toolbarExport: 'Завантажити',
    toolbarExportLabel: 'Завантажити',
    toolbarExportCSV: 'Заватажити як CSV',
    toolbarExportPrint: 'Друк',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Знайти колонку',
    columnsPanelTextFieldPlaceholder: 'Назва колонки',
    columnsPanelDragIconLabel: 'Reorder column',
    columnsPanelShowAllButton: 'Показати всі',
    columnsPanelHideAllButton: 'Скрити всі',

    // Filter panel text
    filterPanelAddFilter: 'Додати фільтр',
    filterPanelDeleteIconLabel: 'Видалити',
    filterPanelLinkOperator: 'Логічний оператор',
    filterPanelOperators: 'Оператор', // TODO v6: rename to filterPanelOperator
    filterPanelOperatorAnd: 'Та',
    filterPanelOperatorOr: 'Або',
    filterPanelColumns: 'Колонки',
    filterPanelInputLabel: 'Значення',
    filterPanelInputPlaceholder: 'Значення фільтру',

    // Filter operators text
    filterOperatorContains: 'Містить',
    filterOperatorEquals: 'Дорівнює',
    filterOperatorStartsWith: 'Починається з',
    filterOperatorEndsWith: 'Закінчується на',
    filterOperatorIs: 'Є',
    filterOperatorNot: 'Не є',
    filterOperatorAfter: 'is after',
    filterOperatorOnOrAfter: 'is on or after',
    filterOperatorBefore: 'is before',
    filterOperatorOnOrBefore: 'is on or before',
    filterOperatorIsEmpty: 'Нічого не містить',
    filterOperatorIsNotEmpty: 'Містить щось',
    filterOperatorIsAnyOf: 'Не нажимати',
    // filterOperatorIsAnyOf: 'is any of',

    // Filter values text
    filterValueAny: 'any',
    filterValueTrue: 'true',
    filterValueFalse: 'false',

    // Column menu text
    columnMenuLabel: 'Меню',
    columnMenuShowColumns: 'Показати колонки',
    columnMenuFilter: 'Фільтр',
    columnMenuHideColumn: 'Скрити',
    columnMenuUnsort: 'Відмінити сортування',
    columnMenuSortAsc: 'Від меньшого до більшого',
    columnMenuSortDesc: 'Від більшого до меньшого',

    // Column header text
    columnHeaderFiltersTooltipActive: (count: number) => (count !== 1 ? `${count} active filters` : `${count} active filter`),
    columnHeaderFiltersLabel: 'Показати фільтри',
    columnHeaderSortIconLabel: 'Сортувати',

    // Rows selected footer text
    footerRowSelected: (count: number) => (count !== 1 ? `${count.toLocaleString()} rows selected` : `${count.toLocaleString()} row selected`),

    // Total row amount footer text
    footerTotalRows: 'Total Rows:',

    // Total visible row amount footer text
    footerTotalVisibleRows: (visibleCount: number, totalCount: number) => `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,

    // Checkbox selection text
    checkboxSelectionHeaderName: 'Checkbox selection',
    checkboxSelectionSelectAllRows: 'Select all rows',
    checkboxSelectionUnselectAllRows: 'Unselect all rows',
    checkboxSelectionSelectRow: 'Select row',
    checkboxSelectionUnselectRow: 'Unselect row',

    // Boolean cell text
    booleanCellTrueLabel: 'yes',
    booleanCellFalseLabel: 'no',

    // Actions cell more text
    actionsCellMore: 'more',

    // Column pinning text
    pinToLeft: 'Pin to left',
    pinToRight: 'Pin to right',
    unpin: 'Unpin',

    // Tree Data
    treeDataGroupingHeaderName: 'Group',
    treeDataExpand: 'see children',
    treeDataCollapse: 'hide children',

    // Grouping columns
    groupingColumnHeaderName: 'Group',
    groupColumn: (name: string) => `Group by ${name}`,
    unGroupColumn: (name: string) => `Stop grouping by ${name}`,

    // Master/detail
    expandDetailPanel: 'Expand',
    collapseDetailPanel: 'Collapse',

    // Used core components translation keys
    MuiTablePagination: {},

    // Row reordering text
    rowReorderingHeaderName: 'Row reordering',
  }
  return localizedText
}
