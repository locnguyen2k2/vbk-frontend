import dayjs from 'dayjs';
import { Pagination, SortedEnum } from '../generated/graphql';

export const InitialPaginated: Pagination = {
  fromDate: `${dayjs()}`,
  page: 0,
  take: 10,
  pages: 0,
  keyword: '',
  hasNext: false,
  hasPrev: false,
  numberRecords: 0,
  sort: 'created_at',
  sorted: SortedEnum.Asc,
  toDate: `${dayjs()}`,
};
