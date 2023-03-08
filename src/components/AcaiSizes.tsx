import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useAcai } from '../contexts/AcaiContext';
import RadioInput from './inputs/select/select';

interface AcaiSizeProps {
  sizes?: {
    label: string;
    value: number;
  }[];
}

export function AcaiSizes({ sizes }: AcaiSizeProps) {
  const { tamanho, setTamanho } = useAcai();  

  return (
    <StyleAcaiFlavors>
      <h2>Selecione o tamanho do açaí:</h2>
      {/* <ul>
        {sizes.map((size) => (
          <li key={size}>
            <label>
              <input
                type="radio"
                name="size"
                value={size}
                checked={tamanho === size}
                onChange={(event) => setTamanho(event.target.value)}
              />
              {size}
            </label>
          </li>
        ))}
      </ul> */}

      <RadioInput
        options={sizes?.map((size) => ({
          value: size.value,
          label: size.label,
        }))}
        name="flavor"
        selected={tamanho && tamanho}
        onChange={(event) => setTamanho(event.target.value)}
      />
    </StyleAcaiFlavors>
  );
}

const StyleAcaiFlavors = styled.div`
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    li {
        flex: 1 1 200px;
    }
    
    label {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    input {
        width: 1.5rem;
        height: 1.5rem;
    }

    input[type="radio"] {
        border-radius: 50%;
    }


`
