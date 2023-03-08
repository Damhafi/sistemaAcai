import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AcaiContextData {
  sabor: string;
  tamanho: string;
  itemAdicional: string;
  pedido: { sabor: string; tamanho: string; itemAdicional: string };
  setSabor: (sabor: string) => void;
  setTamanho: (tamanho: string) => void;
  setItemAdicional: (itemAdicional: string) => void;
}

const AcaiContext = createContext<AcaiContextData>({
  sabor: '',
  tamanho: '',
  itemAdicional: '',
  pedido: { sabor: '', tamanho: '', itemAdicional: '' },
  setSabor: () => {},
  setTamanho: () => {},
  setItemAdicional: () => {},
});

const AcaiProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sabor, setSabor] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [itemAdicional, setItemAdicional] = useState('');
  const [pedido, setPedido] = useState({
    sabor: '',
    tamanho: '',
    itemAdicional: '',
  });

  useEffect(() => {
    console.log(sabor, tamanho, itemAdicional, ' <-- context');

  }, [sabor, tamanho, itemAdicional]);

  return (
    <AcaiContext.Provider
      value={{
        sabor,
        tamanho,
        itemAdicional,
        pedido,
        setSabor,
        setTamanho,
        setItemAdicional,
      }}
    >
      {children}
    </AcaiContext.Provider>
  );
};

const useAcai = (): AcaiContextData => {
  const context = useContext(AcaiContext);

  if (!context) {
    throw new Error('useAcai must be used within an AcaiProvider');
  }

  return context;
};

export { AcaiProvider, useAcai };