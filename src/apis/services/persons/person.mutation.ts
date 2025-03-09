import { gql } from '@apollo/client';
import { personDefaultFields } from '../../fragments/person.fragment';

export const UPDATE_PERSON_MUTATION = gql`
    ${personDefaultFields}
    mutation updatePerson($personId: Int!, $updatePersonArgs: UpdatePersonArgs!) {
        updatePerson(personId: $personId, updatePersonArgs: $updatePersonArgs) {
            id
        }
    }
`;

export const CREATE_PERSON_MUTATION = gql`
    ${personDefaultFields}
    mutation createPerson($createPersonArgs: CreatePersonArgs!) {
        createPerson(createPersonArgs: $createPersonArgs) {
            id
        }
    }
`;

export const ENABLE_PERSONS_MUTATION = gql`
    ${personDefaultFields}
    mutation enablePersons($personId: [Int!]!, $enablePersonArgs: EnablePersonArgs!) {
        enablePersons(personId: $personId, enablePersonArgs: $enablePersonArgs) {
            id
        }
    }
`;