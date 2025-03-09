import { gql } from '@apollo/client';
import { userDefaultFields } from '../../fragments/user.fragment';

export const ACCOUNT_PROFILE_QUERY = gql`
    ${userDefaultFields}
    query profile {
        profile {
            ...userDefaultFields
        }
    }
`;
