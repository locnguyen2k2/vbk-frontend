import { gql } from '@apollo/client';

export const captchaDefaultFields = gql`
    fragment captchaDefaultFields on ReCaptCha {
        captchaId
        captcha
    }
`;
