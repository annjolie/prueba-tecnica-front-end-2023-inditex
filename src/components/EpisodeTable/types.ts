export type EpisodeTableProps = {
  rowsData: RowsData[];
  className?: string;
};

export type RowsData = {
  title: string;
  date: string;
  duration: string;
};
