import { gql } from '@apollo/client';
import { userDefaultFields } from '../../fragments/user.fragment';

export const ACCOUNT_UPDATE_MUTATION = gql`
    ${userDefaultFields}
    mutation updateProfile($updateProfileArgs: UpdateProfileArgs!) {
        updateProfile(updateProfileArgs: $updateProfileArgs) {
            ...userDefaultFields
        }
    }
`;
