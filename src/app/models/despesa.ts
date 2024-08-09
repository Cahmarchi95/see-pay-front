export interface Despesa {
  id?: string;
  despesa: string;
  data: Date;
  valor: string;
  userId?: string; // Adicionar o campo userId
}
