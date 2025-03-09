import { gql } from '@apollo/client';
import { userDefaultFields } from '../../fragments/user.fragment';

export const LOGIN_MUTATION = gql`
    ${userDefaultFields}
    mutation login($loginArgs: LoginArgs!) {
        login(loginArgs: $loginArgs) {
            profile {
                ...userDefaultFields
            }
            accessToken
            refreshToken
        }
    }
`;

export const CHANGE_PASSWORD_MUTATION = gql`
    mutation changePassword($changePasswordArgs: ChangePasswordArgs!) {
        changePassword(changePasswordArgs: $changePasswordArgs)
    }
`;