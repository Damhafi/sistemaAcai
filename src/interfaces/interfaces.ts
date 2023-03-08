// adicionar interfaces
interface AcaiContextData {
  sabores: Sabor[];
  tamanhos: Tamanho[];
  adicionais: Adicional[];
  tempoEspera: number;
  setSabor: (sabor: Sabor) => void;
  setTamanho: (tamanho: Tamanho) => void;
  setAdicional: (adicional: Adicional) => void;
}

interface Sabor {
  nome: string;
  valor: {
    pequeno: number;
    medio: number;
    grande: number;
  };
}

interface Tamanho {
  nome: string;
  ml: number;
  tempoPreparo: number;
}

interface Adicional {
  nome: string;
}


export type { AcaiContextData, Sabor, Tamanho, Adicional };
