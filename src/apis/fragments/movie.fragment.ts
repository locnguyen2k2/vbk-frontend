import { gql } from '@apollo/client';

export const movieSimpleFields = gql`
    fragment movieSimpleFields on MovieDetail {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        description
        durationMin
        language
        narrative
        subtitle
        categories {
            id
            name
        }
        casts {
            id
            firstName
            lastName
        }
        director {
            id
            firstName
            lastName
        }
        thumbnail {
            id
            type
            path
        }
    }
`;

export const movieDefaultFields = gql`
    fragment movieDefaultFields on MovieSchedulesDetail {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        description
        durationMin
        language
        narrative
        subtitle
        categories {
            name
        }
        casts {
            firstName
            lastName
        }
        director {
            firstName
            lastName
        }
        thumbnail {
            type
            path
        }
        showTimes {
            startTime
            sector {
                name
                description
                status
            }
            schedule {
                date
            }
        }
    }
`;
