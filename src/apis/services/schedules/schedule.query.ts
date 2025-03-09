import { paginatedDefaultFields } from '../../fragments/pagination.fragment';
import { gql } from '@apollo/client';
import { scheduleDefaultFields } from '../../fragments/schedule.fragment';

export const SCHEDULES_PAGINATED_QUERY = gql`
    ${scheduleDefaultFields}
    ${paginatedDefaultFields}
    query schedules($pageOptions: SchedulePageOptions) {
        schedules(pageOptions: $pageOptions) {
            data {
                ...scheduleDefaultFields
            }
            paginated {
                ...paginatedDefaultFields
            }
        }
    }
`;

export const SCHEDULE_DETAIL_QUERY = gql`
    ${scheduleDefaultFields}
    query scheduleDetail($scheduleId: Int!) {
        scheduleDetail(scheduleId: $scheduleId) {
            ...scheduleDefaultFields
        }
    }
`;
