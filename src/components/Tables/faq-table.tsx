"use client";

import { TrashIcon } from "@/assets/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteFaq, getFaqs} from "@/service/faq-service";
import { useEffect, useState } from "react";

type Faq = {
  idFaq: number;
  pergunta: string;
  resposta: string;
};

type Props = {
  onEdit?: (id: number) => void;
  onInsert?: () => void;
};

export function FaqTable({ onEdit, onInsert  }: Props) {
  const [data, setData] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getFaqs();
        setData(response.data);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const handleEdit = (id: number) => {
    onEdit?.(id);
  };
  
  const handleDelete = async (idFaq: number) => {
    if (confirm("Tem certeza que deseja excluir este item?")) {
      try {
         await deleteFaq(idFaq);
        setData(data.filter(item => item.idFaq !== idFaq));
        console.log("Item excluído com sucesso");
      } catch (error) {
        console.error("Erro ao excluir:", error);
      }
    }
  };

  function handleComeBack() {
    window.history.back();
  }
  
  const handleInsert = () => {
    onInsert?.();
  };

  function handleComeBack() {
    window.history.back();
  }

  if (loading) return <div className="container mx-auto flex flex-col items-center px-4 py-10">Carregando...</div>;

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
            <TableHead className="max-w-[55px]">Id</TableHead>
            <TableHead>Pergunta</TableHead>
            <TableHead>Resposta</TableHead>
            <TableHead className="text-right xl:pr-7.5">Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((Faq) => (
            <TableRow key={Faq.idFaq} className="border-[#eee] dark:border-dark-3">
              <TableCell className="min-w-[55px]">
                <h5 className="text-dark dark:text-white">{Faq.idFaq}</h5>
              </TableCell>

              <TableCell>
                <p className="text-dark dark:text-white">
                  {Faq.pergunta || "Sem título"}
                </p>
              </TableCell>

              <TableCell>
                <p className="text-dark dark:text-white line-clamp-2">
                  {Faq.resposta || "Sem sub-título"}
                </p>
              </TableCell>

              <TableCell className="xl:pr-7.5">
                <div className="flex items-center justify-end gap-x-3.5">
                  <button
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => handleEdit(Faq.idFaq)}
                    title="Editar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>

                  <button
                    className="hover:text-red-600 transition-colors"
                    onClick={() => handleDelete(Faq.idFaq)}
                    title="Excluir"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex justify-end gap-5">
        
        <button
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          onClick={handleInsert}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Adicionar Novo
        </button>
        <button
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          onClick={handleComeBack}
        >      
          Voltar
        </button>
      </div>
    </div>
  );
}