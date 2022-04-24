export const useLocalizationGrid = () => {
  const localizedText = {
    // Root
    noRowsLabel: 'Даних немає',
    noResultsOverlayLabel: 'Не знайдено результатів',
    errorOverlayDefaultLabel: 'Трапилась помилка',

    // Density selector toolbar button text
    toolbarDensity: 'Density',
    toolbarDensityLabel: 'Density',
    toolbarDensityCompact: 'Compact',
    toolbarDensityStandard: 'Standard',
    toolbarDensityComfortable: 'Comfortable',

    // Columns selector toolbar button text
    toolbarColumns: 'Columns',
    toolbarColumnsLabel: 'Select columns',

    // Filters toolbar button text
    toolbarFilters: 'Фільтри',
    toolbarFiltersLabel: 'Показати фільтри',
    toolbarFiltersTooltipHide: 'Hide filters',
    toolbarFiltersTooltipShow: 'Показати фільтри',
    toolbarFiltersTooltipActive: (count: number) => (count !== 1 ? `${count} active filters` : `${count} active filter`),

    // Export selector toolbar button text
    toolbarExport: 'Export',
    toolbarExportLabel: 'Export',
    toolbarExportCSV: 'Download as CSV',
    toolbarExportPrint: 'Print',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Find column',
    columnsPanelTextFieldPlaceholder: 'Column title',
    columnsPanelDragIconLabel: 'Reorder column',
    columnsPanelShowAllButton: 'Show all',
    columnsPanelHideAllButton: 'Hide all',

    // Filter panel text
    filterPanelAddFilter: 'Add filter',
    filterPanelDeleteIconLabel: 'Delete',
    filterPanelLinkOperator: 'Logic operator',
    filterPanelOperators: 'Operator', // TODO v6: rename to filterPanelOperator
    filterPanelOperatorAnd: 'And',
    filterPanelOperatorOr: 'Or',
    filterPanelColumns: 'Columns',
    filterPanelInputLabel: 'Value',
    filterPanelInputPlaceholder: 'Filter value',

    // Filter operators text
    filterOperatorContains: 'contains',
    filterOperatorEquals: 'equals',
    filterOperatorStartsWith: 'starts with',
    filterOperatorEndsWith: 'ends with',
    filterOperatorIs: 'is',
    filterOperatorNot: 'is not',
    filterOperatorAfter: 'is after',
    filterOperatorOnOrAfter: 'is on or after',
    filterOperatorBefore: 'is before',
    filterOperatorOnOrBefore: 'is on or before',
    filterOperatorIsEmpty: 'is empty',
    filterOperatorIsNotEmpty: 'is not empty',
    filterOperatorIsAnyOf: 'is any of',

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
