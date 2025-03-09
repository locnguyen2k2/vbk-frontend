import { gql } from '@apollo/client';
import { seatSimpleFields } from '../../fragments/seat.fragment';

export const UPDATE_SEAT_MUTATION = gql`
    ${seatSimpleFields}
    mutation updateSeat($seatId: Int!, $updateSeatArgs: UpdateSeatArgs!) {
        updateSeat(seatId: $seatId, updateSeatArgs: $updateSeatArgs) {
            ...seatDefaultFields
        }
    }
`;

export const CREATE_SEAT_MUTATION = gql`
    ${seatSimpleFields}
    mutation createSeat($createSeatArgs: CreateSeatArgs!) {
        createSeat(createSeatArgs: $createSeatArgs) {
            ...seatDefaultFields
        }
    }
`;

export const ENABLE_SEATS_MUTATION = gql`
    ${seatSimpleFields}
    mutation enableSeats($seatId: [Int!]!, $enableSeatArgs: EnableSeatArgs!) {
        enableSeats(seatId: $seatId, enableSeatArgs: $enableSeatArgs) {
            id
        }
    }
`;