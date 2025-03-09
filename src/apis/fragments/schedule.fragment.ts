import { gql } from '@apollo/client';

export const scheduleDefaultFields = gql`
    fragment scheduleDefaultFields on ScheduleDetail {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        date
        status
        showTimes {
            id,
            startTime
        }
    }
`;
