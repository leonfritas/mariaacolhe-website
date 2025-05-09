"use client";

import { useEffect, useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TestimonialTable } from "@/components/Tables/testimonials-table";
import { createTestimonial, getTestimonialById, updateTestimonial } from "@/service/testimonials-service";


type Testimonial = {
    idDepoimento: number;
    nomeDepoente: string;
    idadeDepoente: number;
    textoDepoimento: string;
  };



export default function TestimonialEditPage() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [mode, setMode] = useState<'view' | 'edit' | 'insert'>('view');
  const [formData, setFormData] = useState<Testimonial>({
    idDepoimento: 0,
    nomeDepoente: "",
    idadeDepoente: 0,
    textoDepoimento: "",
  });

  const handleInputChange = (field: keyof Testimonial, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [loading, setLoading] = useState(false);

   useEffect(() => {
    if (editingId !== null) {
      setLoading(true);
      getTestimonialById(editingId)
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
        idDepoimento: 0,
        nomeDepoente: "",
        idadeDepoente: 0,
        textoDepoimento: "",
    });
    setMode('insert');
  };

  const handleSave = async () => {
    try {
      if (mode === 'edit') {
        await updateTestimonial(formData);
      } else {
        await createTestimonial(formData);
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
        <TestimonialTable
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
            title={mode === 'edit' ? "Editar Depoimento" : "Adicionar Novo Depoimento"}
            className="space-y-5.5 !p-6.5 flex flex-col gap-3"
          >
            <InputGroup
              label="Nome"
              placeholder="Digite o nome do depoente"
              type="text"
              value={formData.nomeDepoente}
              onChange={(e) => handleInputChange("nomeDepoente", e.target.value)}
            />

            <InputGroup
              label="Idade"
              placeholder="Digite a idade do depoente"
              type="text"
              value={formData.idadeDepoente?.toString()}
              onChange={(e) => handleInputChange("idadeDepoente", e.target.value)}
            />

            <TextAreaGroup
              label="Depoimento"
              placeholder="Digite o depoimento"
              value={formData.textoDepoimento}
              onChange={(e) => handleInputChange("textoDepoimento", e.target.value)}
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
