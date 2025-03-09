import { gql } from '@apollo/client';
import { captchaDefaultFields } from '../../fragments/captcha.fragment';

export const LOGIN_CAPTCHA_QUERY = gql`
    ${captchaDefaultFields}
    query reCaptCha {
        reCaptCha {
            ...captchaDefaultFields
        }
    }
`;