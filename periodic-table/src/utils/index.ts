export const getInvertedPeriodicTable = (periodicTableData) => {
  const invertedPeriodicTable = [];

  periodicTableData.forEach((element) => {
    const { row } = element;
    const newRow = 11 - row;

    invertedPeriodicTable.push({
      ...element,
      row: newRow,
    });
  });

  return invertedPeriodicTable;
};
