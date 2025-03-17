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

export const REGISTER_MUTATION = gql`
    mutation register($registerArgs: RegisterArgs!) {
        register(registerArgs: $registerArgs)
    }
`;

export const CHANGE_PASSWORD_MUTATION = gql`
    mutation changePassword($changePasswordArgs: ChangePasswordArgs!) {
        changePassword(changePasswordArgs: $changePasswordArgs)
    }
`;