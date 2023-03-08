import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAcai } from '../contexts/AcaiContext';
import RadioInput from './inputs/select/select';

interface AcaiFlavorsProps {
  flavors?: {
    label: string;
    value: number;
  }[];
}

export function AcaiFlavors({ flavors }: AcaiFlavorsProps) {
  const {sabor, setSabor} = useAcai();
  const [saborIsolado, setSaborIsolado] = useState('');

  useEffect(() => {
    console.log(sabor, ' <-- sabor');

    setSaborIsolado(sabor);
    
  }, [sabor]);



  return (
    <StyleAcaiFlavors>
      <h2>Selecione o sabor do açaí:</h2>
      
      <RadioInput
        options={flavors?.map((flavor) => ({
          value: flavor.value,
          label: flavor.label,
        }))}
        name="flavor"
        selected={saborIsolado}
        onChange={(event) => setSabor(event.target.value)}
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
