"use client";

import { useEffect, useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { AboutTable } from "@/components/Tables/about-table";
import { createAbout, getAboutById, updateAbout } from "@/service/about-service";


type About = {
  idSobre: number;
  titulo: string;
  subTitulo: string;
  texto: string;
};



export default function AboutEditPage() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [mode, setMode] = useState<'view' | 'edit' | 'insert'>('view');
  const [formData, setFormData] = useState<About>({
    idSobre: 0,
    titulo: "",
    subTitulo: "",
    texto: "",
  });

  const handleInputChange = (field: keyof About, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [loading, setLoading] = useState(false);

   useEffect(() => {
    if (editingId !== null) {
      setLoading(true);
      getAboutById(editingId)
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
      idSobre: 0,
      titulo: "",
      subTitulo: "",
      texto: "",
    });
    setMode('insert');
  };

  const handleSave = async () => {
    try {
      if (mode === 'edit') {
        await updateAbout(formData);
      } else {
        await createAbout(formData);
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
        <AboutTable 
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
            title={mode === 'edit' ? "Editar Sobre" : "Adicionar Novo Sobre"}
            className="space-y-5.5 !p-6.5 flex flex-col gap-3"
          >
            <InputGroup
              label="Título"
              placeholder="Digite o título"
              type="text"
              value={formData.titulo}
              onChange={(e) => handleInputChange("titulo", e.target.value)}
            />

            <InputGroup
              label="Sub-Título"
              placeholder="Digite o sub-título"
              type="text"
              value={formData.subTitulo}
              onChange={(e) => handleInputChange("subTitulo", e.target.value)}
            />

            <TextAreaGroup
              label="Descrição"
              placeholder="Digite a descrição"
              value={formData.texto}
              onChange={(e) => handleInputChange("texto", e.target.value)}
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
