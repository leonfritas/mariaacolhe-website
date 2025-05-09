"use client";

import { useEffect, useState } from "react";
import InputGroup from "@/components/FormElements/InputGroup";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { StatTable } from "@/components/Tables/stats-table";
import { createStat, getStatById, updateStat } from "@/service/stats-service";


type Stats = {
  idEstatistica: number;
  numeroEstatistica: string;
  legendaEstatistica: string;
};



export default function StatsEditPage() {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [mode, setMode] = useState<'view' | 'edit' | 'insert'>('view');
  const [formData, setFormData] = useState<Stats>({
    idEstatistica: 0,
    numeroEstatistica: "",
    legendaEstatistica: ""
  });

  const handleInputChange = (field: keyof Stats, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [loading, setLoading] = useState(false);

   useEffect(() => {
    if (editingId !== null) {
      setLoading(true);
      getStatById(editingId)
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
        idEstatistica: 0,
        numeroEstatistica: "",
        legendaEstatistica: ""
    });
    setMode('insert');
  };

  const handleSave = async () => {
    try {
      if (mode === 'edit') {
        await updateStat(formData);
      } else {
        await createStat(formData);
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
        <StatTable 
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
            title={mode === 'edit' ? "Editar Estatística" : "Adicionar Nova Estatística"}
            className="space-y-5.5 !p-6.5 flex flex-col gap-3"
          >
            <InputGroup
              label="Número"
              placeholder="Digite o número"
              type="text"
              value={formData.numeroEstatistica}
              onChange={(e) => handleInputChange("numeroEstatistica", e.target.value)}
            />

            <InputGroup
              label="Legenda"
              placeholder="Digite a legenda"
              type="text"
              value={formData.legendaEstatistica}
              onChange={(e) => handleInputChange("legendaEstatistica", e.target.value)}
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
