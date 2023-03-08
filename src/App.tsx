// REACT
import { useState, useEffect } from "react";

// COMPONENTS
import Layout from "./components/Layout";
import { AcaiFlavors } from "./components/AcaiFlavors";

// CONTEXT
import { AcaiProvider, useAcai } from "./contexts/AcaiContext";
import { AcaiSizes } from "./components/AcaiSizes";
import { AcaiAdditional } from "./components/AcaiAdditional";

const App = () => {
  const [step, setStep] = useState(1);
  const [disableStep, setDisableStep] = useState(false);

  const [sabores, setSabores] = useState<{ label: string; value: number }[]>(
    []
  );
  const [tamanhos, setTamanhos] = useState<{ label: string; value: number }[]>(
    []
  );
  const [itensAdicionais, setItensAdicionais] = useState<
    { label: string; value: number }[]
  >([]);
  const [pedido, setPedido] = useState<{ sabor: string; tamanho: string; itemAdicional: string; tempo?: string}>();

  const { sabor, tamanho, itemAdicional } = useAcai();

  useEffect(() => {
    if (step === 1) {
      setDisableStep(sabor !== "");
    } else if (step === 2) {
      setDisableStep(tamanho !== "");
    } else if (step === 3) {
      setDisableStep(true);
    }
  }, [sabor, tamanho, itemAdicional]);

  useEffect(() => {
    fetch("http://localhost:3001/acaiSabores")
      .then((response) => response.json())
      .then((data) => {
        setSabores(
          data.map((item: { id: number; nome: string }) => ({
            label: item.nome,
            value: item.id,
          }))
        );
      });
    fetch("http://localhost:3001/acaiTamanhos")
      .then((response) => response.json())
      .then((data) => {
        setTamanhos(
          data.map((item: { id: number; nome: string }) => ({
            label: item.nome,
            value: item.id,
          }))
        );
      });
    fetch("http://localhost:3001/acaiAdicionais")
      .then((response) => response.json())
      .then((data) => {
        setItensAdicionais(
          data.map((item: { id: number; nome: string }) => ({
            label: item.nome,
            value: item.id,
          }))
        );
      });
  }, []);

  
  const handleFinishOrder = () => {
    const saborLabel = sabores.find((item) => item.value.toString() === sabor)?.label || '';
    const tamanhoLabel = tamanhos.find((item) => item.value.toString() === tamanho)?.label || '';
    const itemAdicionalLabel = itensAdicionais.find((item) => item.value.toString() === itemAdicional)?.label || '';

    const tempo = tamanhoLabel === 'Pequeno 300ml' ? '5 minutos' : tamanhoLabel === 'Médio 500ml' ? '10 minutos' : '15 minutos';
  
    setPedido({
      ...pedido,
      sabor: saborLabel,
      tamanho: tamanhoLabel,
      itemAdicional: itemAdicionalLabel,
      tempo: tempo,
    });    

    setStep(4);
  };

  return (
    <Layout>
      <h1>Passo {step}</h1>

      {step === 1 ? (
        <AcaiFlavors flavors={sabores} />
      ) : step === 2 ? (
        <AcaiSizes sizes={tamanhos} />
      ) : step === 3 ? (
        <AcaiAdditional additionals={itensAdicionais} />
      ) : (
        <div>
          <h1>Seu pedido foi finalizado! 🚚</h1>

          <div>
            <h2>Seu pedido 🤤 </h2>
            <p><strong>Seu pedido será entregue em:</strong> {pedido?.tempo}</p>
            <p><strong>Sabor:</strong> {pedido?.sabor}</p>
            <p><strong>Tamanho:</strong> {pedido?.tamanho}</p>
            <p><strong>Item Adicional:</strong> {pedido?.itemAdicional}</p>
          </div>
        </div>
      )}

      <div className="buttons-steps">
        {step > 1 && <button onClick={() => setStep(step - 1)}>Voltar</button>}

        {step < 3 && (
          <button onClick={() => setStep(step + 1)} disabled={!disableStep}>
            Próximo
          </button>
        )}

        {step === 3 && (
          <button 
            onClick={() => 
              handleFinishOrder()
            }
          >
            Finalizar
          </button>
        )}
      </div>
    </Layout>
  );
};

export default App;
