import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useAcai } from '../contexts/AcaiContext';
import RadioInput from './inputs/select/select';

interface AcaiSizeProps {
  additionals?: {
    label: string;
    value: number;
  }[];
}

export function AcaiAdditional({ additionals }: AcaiSizeProps) {
  const { itemAdicional, setItemAdicional } = useAcai();  

  return (
    <StyleAcaiFlavors>
      <h2>Selecione o adicional</h2>
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
        options={additionals?.map((size) => ({
          value: size.value,
          label: size.label,
        }))}
        name="additional"
        selected={itemAdicional && itemAdicional}
        onChange={(event) => setItemAdicional(event.target.value)}
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
