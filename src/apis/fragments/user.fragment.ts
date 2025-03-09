import { gql } from '@apollo/client';
import { employeeDefaultFields } from './employee.fragment';
import { customerDefaultFields } from './customer.fragment';
import { fileDefaultFields } from './file.fragment';

export const userDefaultFields = gql`
    ${employeeDefaultFields}
    ${customerDefaultFields}
    ${fileDefaultFields}
    fragment userDefaultFields on UserProfile {
        firstName
        lastName
        birthDay
        email
        username
        address
        gender
        phone
        status
        roles
        permissions
        updatedAt
        avatar {
            ...fileDefaultFields
        }
        customer {
            ...customerDefaultFields
        }
        employee {
            ...employeeDefaultFields
        }
    }
`;