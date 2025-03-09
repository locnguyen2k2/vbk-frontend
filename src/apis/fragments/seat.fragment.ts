import { gql } from '@apollo/client';
import { rowSimpleFields } from './row.fragment';

export const seatSimpleFields = gql`
    fragment seatSimpleFields on SeatModel {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        price
        status
    }
`;

export const seatDefaultFields = gql`
    ${rowSimpleFields}
    fragment seatDefaultFields on SeatDetail {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy

        name
        price
        status
        
        row {
            ...rowSimpleFields
        }
    }
`;
