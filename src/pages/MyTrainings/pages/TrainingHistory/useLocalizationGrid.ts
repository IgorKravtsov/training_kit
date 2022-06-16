import { useTranslation } from 'react-i18next'

export const useLocalizationGrid = () => {
  const { t } = useTranslation(['myTrainings'])

  // console.log(t('myTrainings:trainingHistory.gridLocalization.noRowsLabel'))

  const localizedText = {
    // Root
    noRowsLabel: t('myTrainings:trainingHistory.gridLocalization.noRowsLabel'),
    noResultsOverlayLabel: t(
      'myTrainings:trainingHistory.gridLocalization.noResultsOverlayLabel',
    ),
    errorOverlayDefaultLabel: t(
      'myTrainings:trainingHistory.gridLocalization.errorOverlayDefaultLabel',
    ),

    // Density selector toolbar button text
    toolbarDensity: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarDensity',
    ),
    toolbarDensityLabel: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarDensityLabel',
    ),
    toolbarDensityCompact: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarDensityCompact',
    ),
    toolbarDensityStandard: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarDensityStandard',
    ),
    toolbarDensityComfortable: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarDensityComfortable',
    ),

    // Columns selector toolbar button text
    toolbarColumns: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarColumns',
    ),
    toolbarColumnsLabel: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarColumnsLabel',
    ),

    // Filters toolbar button text
    toolbarFilters: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarFilters',
    ),
    toolbarFiltersLabel: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarFiltersLabel',
    ),
    toolbarFiltersTooltipHide: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarFiltersTooltipHide',
    ),
    toolbarFiltersTooltipShow: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarFiltersTooltipShow',
    ),
    toolbarFiltersTooltipActive: (count: number) =>
      count !== 1 ? `${count} фільтрів` : `${count} активний фільтр`,

    // Export selector toolbar button text
    toolbarExport: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarExport',
    ),
    toolbarExportLabel: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarExportLabel',
    ),
    toolbarExportCSV: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarExportCSV',
    ),
    toolbarExportPrint: t(
      'myTrainings:trainingHistory.gridLocalization.toolbarExportPrint',
    ),

    // Columns panel text
    columnsPanelTextFieldLabel: t(
      'myTrainings:trainingHistory.gridLocalization.columnsPanelTextFieldLabel',
    ),
    columnsPanelTextFieldPlaceholder: t(
      'myTrainings:trainingHistory.gridLocalization.columnsPanelTextFieldPlaceholder',
    ),
    columnsPanelDragIconLabel: t(
      'myTrainings:trainingHistory.gridLocalization.columnsPanelDragIconLabel',
    ),
    columnsPanelShowAllButton: t(
      'myTrainings:trainingHistory.gridLocalization.columnsPanelShowAllButton',
    ),
    columnsPanelHideAllButton: t(
      'myTrainings:trainingHistory.gridLocalization.columnsPanelHideAllButton',
    ),

    // Filter panel text
    filterPanelAddFilter: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelAddFilter',
    ),
    filterPanelDeleteIconLabel: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelDeleteIconLabel',
    ),
    filterPanelLinkOperator: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelLinkOperator',
    ),
    filterPanelOperators: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelOperators',
    ), // TODO v6: rename to filterPanelOperator
    filterPanelOperatorAnd: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelOperatorAnd',
    ),
    filterPanelOperatorOr: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelOperatorOr',
    ),
    filterPanelColumns: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelColumns',
    ),
    filterPanelInputLabel: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelInputLabel',
    ),
    filterPanelInputPlaceholder: t(
      'myTrainings:trainingHistory.gridLocalization.filterPanelInputPlaceholder',
    ),

    // Filter operators text
    filterOperatorContains: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorContains',
    ),
    filterOperatorEquals: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorEquals',
    ),
    filterOperatorStartsWith:
      'myTrainings:trainingHistory.gridLocalization.filterOperatorStartsWith',
    filterOperatorEndsWith: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorEndsWith',
    ),
    filterOperatorIs: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorIs',
    ),
    filterOperatorNot: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorNot',
    ),
    filterOperatorAfter: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorAfter',
    ),
    filterOperatorOnOrAfter: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorOnOrAfter',
    ),
    filterOperatorBefore: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorBefore',
    ),
    filterOperatorOnOrBefore: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorOnOrBefore',
    ),
    filterOperatorIsEmpty: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorIsEmpty',
    ),
    filterOperatorIsNotEmpty: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorIsNotEmpty',
    ),
    filterOperatorIsAnyOf: t(
      'myTrainings:trainingHistory.gridLocalization.filterOperatorIsAnyOf',
    ),
    // filterOperatorIsAnyOf: 'is any of',

    // Filter values text
    filterValueAny: t(
      'myTrainings:trainingHistory.gridLocalization.filterValueAny',
    ),
    filterValueTrue: 'true',
    filterValueFalse: 'false',

    // Column menu text
    columnMenuLabel: t(
      'myTrainings:trainingHistory.gridLocalization.columnMenuLabel',
    ),
    columnMenuShowColumns: t(
      'myTrainings:trainingHistory.gridLocalization.columnMenuShowColumns',
    ),
    columnMenuFilter: t(
      'myTrainings:trainingHistory.gridLocalization.columnMenuFilter',
    ),
    columnMenuHideColumn: t(
      'myTrainings:trainingHistory.gridLocalization.columnMenuHideColumn',
    ),
    columnMenuUnsort: t(
      'myTrainings:trainingHistory.gridLocalization.columnMenuUnsort',
    ),
    columnMenuSortAsc: t(
      'myTrainings:trainingHistory.gridLocalization.columnMenuSortAsc',
    ),
    columnMenuSortDesc: t(
      'myTrainings:trainingHistory.gridLocalization.columnMenuSortDesc',
    ),

    // Column header text
    columnHeaderFiltersTooltipActive: (count: number) =>
      count !== 1 ? `${count} active filters` : `${count} active filter`,
    columnHeaderFiltersLabel: t(
      'myTrainings:trainingHistory.gridLocalization.columnHeaderFiltersLabel',
    ),
    columnHeaderSortIconLabel: t(
      'myTrainings:trainingHistory.gridLocalization.columnHeaderSortIconLabel',
    ),

    // Rows selected footer text
    footerRowSelected: (count: number) =>
      count !== 1
        ? `${count.toLocaleString()} rows selected`
        : `${count.toLocaleString()} row selected`,

    // Total row amount footer text
    footerTotalRows: t(
      'myTrainings:trainingHistory.gridLocalization.footerTotalRows',
    ),

    // Total visible row amount footer text
    footerTotalVisibleRows: (visibleCount: number, totalCount: number) =>
      `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,

    // Checkbox selection text
    checkboxSelectionHeaderName: t(
      'myTrainings:trainingHistory.gridLocalization.checkboxSelectionHeaderName',
    ),
    checkboxSelectionSelectAllRows: t(
      'myTrainings:trainingHistory.gridLocalization.checkboxSelectionSelectAllRows',
    ),
    checkboxSelectionUnselectAllRows: t(
      'myTrainings:trainingHistory.gridLocalization.checkboxSelectionUnselectAllRows',
    ),
    checkboxSelectionSelectRow: t(
      'myTrainings:trainingHistory.gridLocalization.checkboxSelectionSelectRow',
    ),
    checkboxSelectionUnselectRow: t(
      'myTrainings:trainingHistory.gridLocalization.checkboxSelectionUnselectRow',
    ),

    // Boolean cell text
    booleanCellTrueLabel: t(
      'myTrainings:trainingHistory.gridLocalization.booleanCellTrueLabel',
    ),
    booleanCellFalseLabel: t(
      'myTrainings:trainingHistory.gridLocalization.booleanCellFalseLabel',
    ),

    // Actions cell more text
    actionsCellMore: t(
      'myTrainings:trainingHistory.gridLocalization.actionsCellMore',
    ),

    // Column pinning text
    pinToLeft: t('myTrainings:trainingHistory.gridLocalization.pinToLeft'),
    pinToRight: t('myTrainings:trainingHistory.gridLocalization.pinToRight'),
    unpin: t('myTrainings:trainingHistory.gridLocalization.unpin'),

    // Tree Data
    treeDataGroupingHeaderName: t(
      'myTrainings:trainingHistory.gridLocalization.treeDataGroupingHeaderName',
    ),
    treeDataExpand: t(
      'myTrainings:trainingHistory.gridLocalization.treeDataExpand',
    ),
    treeDataCollapse: t(
      'myTrainings:trainingHistory.gridLocalization.treeDataCollapse',
    ),

    // Grouping columns
    groupingColumnHeaderName: t(
      'myTrainings:trainingHistory.gridLocalization.groupingColumnHeaderName',
    ),
    groupColumn: (name: string) => `Group by ${name}`,
    unGroupColumn: (name: string) => `Stop grouping by ${name}`,

    // Master/detail
    expandDetailPanel: t(
      'myTrainings:trainingHistory.gridLocalization.expandDetailPanel',
    ),
    collapseDetailPanel: t(
      'myTrainings:trainingHistory.gridLocalization.collapseDetailPanel',
    ),

    // Used core components translation keys
    MuiTablePagination: {},

    // Row reordering text
    rowReorderingHeaderName: t(
      'myTrainings:trainingHistory.gridLocalization.rowReorderingHeaderName',
    ),
  }
  return localizedText
}
