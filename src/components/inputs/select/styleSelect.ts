import styled from 'styled-components'

const SelectComponent = styled.div`
    margin-bottom: 20px;
    width: 100%;

    label {
        color: #3a3a3a;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 0;
        display: inline-flex;
    }

    input {
        width: 100%;
        height: 30px;
        border-radius: 4px;
        border: 1px solid #d5d;
        background-color: transparent;
        padding: 0 25px;
        font-size: 13px;
    }

    .error-message {
        color: #ff0000;
        font-size: 12px;
        font-weight: 600;
    }

    @media only screen and (max-width: 1400px) {
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 1200px) {
        margin-bottom: 18px;
    }

    @media only screen and (max-width: 1024px) {
        margin-bottom: 16px;
    }

    @media only screen and (max-width: 768px) {
        margin-bottom: 15px;
    }
`
export default SelectComponent
