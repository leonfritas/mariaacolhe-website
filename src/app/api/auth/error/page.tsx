'use client';

import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div>
      <h1>Erro de autenticação</h1>
      <p>{error ?? 'Erro desconhecido'}</p>
    </div>
  );
}
