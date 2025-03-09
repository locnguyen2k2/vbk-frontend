import { gql } from '@apollo/client';

export const employeeDefaultFields = gql`
    fragment employeeDefaultFields on EmployeeModel {
        id
        createdAt
        updatedAt
        enable
        createBy
        updateBy
        startDateOfWork
        endDateOfWork
    }
`;