"use client";

import { useEffect, useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { FaqTable } from "@/components/Tables/faq-table";
import { createFaq, getFaqById, updateFaq } from "@/service/faq-service";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";


type Faq = {
  idFaq: number;
  pergunta: string;
  resposta: string;
};



export default function FaqEditPage() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [mode, setMode] = useState<'view' | 'edit' | 'insert'>('view');
  const [formData, setFormData] = useState<Faq>({
    idFaq: 0,
    pergunta: "",
    resposta: ""
  });

  const handleInputChange = (field: keyof Faq, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [loading, setLoading] = useState(false);

   useEffect(() => {
    if (editingId !== null) {
      setLoading(true);
      getFaqById(editingId)
        .then((res) => {
          setFormData(res.data);
          setMode('edit');
        })
        .catch((err) => console.error("Erro ao carregar dados:", err))
        .finally(() => setLoading(false));
    }
  }, [editingId]);

  const handleInsertMode = () => {
    setFormData({
        idFaq: 0,
        pergunta: "",
        resposta: ""
    });
    setMode('insert');
  };

  const handleSave = async () => {
    try {
      if (mode === 'edit') {
        await updateFaq(formData);
      } else {
        await createFaq(formData);
      }
      alert("Dados salvos com sucesso!");
      setMode('view');
      setEditingId(null);
    } catch (err) {
      console.error("Erro ao salvar:", err);
    }
  };

  const handleCancel = () => {
    setMode('view');
    setEditingId(null);
  };

  return (
    <>
      {mode === 'view' ? (
        <FaqTable 
          onEdit={(id) => setEditingId(id)} 
          onInsert={handleInsertMode}
        />
      ) : loading ? (
        <div className="container mx-auto flex flex-col items-center px-4 py-10"> 
          Carregando dados...
        </div>
      ) : (
        <div className="flex flex-col gap-9">
          <ShowcaseSection
            title={mode === 'edit' ? "Editar Faq" : "Adicionar Nova Faq"}
            className="space-y-5.5 !p-6.5 flex flex-col gap-3"
          >
            <InputGroup
              label="Pergunta"
              placeholder="Digite a pergunta"
              type="text"
              value={formData.pergunta}
              onChange={(e) => handleInputChange("pergunta", e.target.value)}
            />


            <TextAreaGroup
              label="Resposta"
              placeholder="Digite a resposta"
              value={formData.resposta}
              onChange={(e) => handleInputChange("resposta", e.target.value)}
            />

            <div className="flex gap-4 mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                onClick={handleCancel}
              >
                Cancelar
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                Salvar
              </button>
            </div>
          </ShowcaseSection>
        </div>
      )}
    </>
  );
}
