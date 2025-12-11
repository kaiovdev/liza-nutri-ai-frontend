export interface FormProps {
  nome: string;
  idade: number;
  altura_cm: number;
  peso_kg: number;
  nivel_atividade: "sedentario" | "2x_semana" | "4x_semana";
  sexo: "masculino" | "feminino";
  objetivo: "perda_de_peso" | "hipertrofia" | "manter_massa_muscular";
}
