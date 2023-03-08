import React, { FC, InputHTMLAttributes, useEffect, useRef } from "react";
import styled from "styled-components";
import { useAcai } from "../../../contexts/AcaiContext";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  options?: {
    value: number | string;
    label: string;
  }[];
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selected?: string;
}

const RadioInput: FC<RadioInputProps> = ({ options, label, onChange, ...rest}) => {
  const inputRefs = useRef([])
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  // console.log(options, ' <-- options');

  return (
    <StyleRadioInput>
      {label && <label>{label}</label>}
      {options?.map((option, index: number) => (
        <div key={option.value}>
          <input 
            type="radio"
            id={option.value.toString()}
            ref={ref => {
              (inputRefs as any).current[index] = ref
            }}
            name={rest.name}
            value={option.value}
            checked={rest.selected === option.value.toString()}
            onChange={(event) => handleChange(event)}
            {...rest} 
        />
          <label
            htmlFor={option.value.toString()}
          >{option.label}</label>
        </div>
      ))}
    </StyleRadioInput>
  );
};

const StyleRadioInput = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
  width: 100%;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    input{
      margin: 0 5px 5px;
    }

    label{
      text-align: center;
    }
  }


`

export default RadioInput;
