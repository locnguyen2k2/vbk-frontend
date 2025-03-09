import { gql } from '@apollo/client';
import { scheduleDefaultFields } from '../../fragments/schedule.fragment';

export const CREATE_SCHEDULE_MUTATION = gql`
    ${scheduleDefaultFields}
    mutation createSchedule($createScheduleArgs: CreateScheduleArgs!) {
        createSchedule(createScheduleArgs: $createScheduleArgs) {
            ...scheduleDefaultFields
        }
    }
`;

export const UPDATE_SCHEDULE_MUTATION = gql`
    ${scheduleDefaultFields}
    mutation updateSchedule($scheduleId: Int!, $updateScheduleArgs: UpdateScheduleArgs!) {
        updateSchedule(scheduleId: $scheduleId, updateScheduleArgs: $updateScheduleArgs) {
            ...scheduleDefaultFields
        }
    }
`;

export const ENABLE_SCHEDULES_MUTATION = gql`
    ${scheduleDefaultFields}
    mutation enableSchedules($scheduleId: [Int!]!, $enableScheduleArgs: EnableScheduleArgs!) {
        enableSchedules(scheduleId: $scheduleId, enableScheduleArgs: $enableScheduleArgs) {
            id
        }
    }
`;