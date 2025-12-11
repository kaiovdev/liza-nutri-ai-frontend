"use client";

import { Card } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Utensils } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import TextType from "@/components/TextType";

export const formSchema = z.object({
  nome: z.string().min(2, "O nome é obrigatório"),
  idade: z.number().positive(),
  altura_cm: z.number().positive(),
  peso_kg: z.number().positive(),
  nivel_atividade: z.enum(["sedentario", "2x_semana", "4x_semana"], { error: "Selecione nivel de atividade" }),
  sexo: z.enum(["masculino", "feminino"], { error: "Selecione o sexo" }),
  objetivo: z.enum(["perda_de_peso", "hipertrofia", "manter_massa_muscular"], { error: "Selecione o objetivo" }),
});

type SchemaFormData = z.infer<typeof formSchema>;

interface FormProps {
  onSubmit: (data: SchemaFormData) => void;
}

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export function FormData({ onSubmit }: FormProps) {
  const form = useForm<SchemaFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      idade: undefined,
      altura_cm: undefined,
      peso_kg: undefined,
      nivel_atividade: undefined,
      sexo: undefined,
      objetivo: undefined,
    },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <TextType
        text={["Olá, bem vindo(a), eu sou a Liza, sua Nutri I.A!", "Vou te ajudar a construir sua dieta! Só preciso de algumas informações."]}
        className="bg-gradient-to-r from-green-500 via-green-500 to-green-600 shadow p-2 text-white rounded-lg text-xl mb-6 font-medium text-center"
        typingSpeed={20}
        pauseDuration={2000}
        showCursor={false}
        loop={false}
      />
      <Card className="w-full max-w-2xl border-0 z-1">
        <div className="p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4 mx-auto">
              <Utensils className="w-14 h-14 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold text-green-500 mb-2">Monte sua dieta - Liza A.I</h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">Informações Pessoais</h3>
              </div>

              {/* Nome e Idade em grid responsivo */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Digite seu nome..." />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="idade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Idade:</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="any"
                          {...form.register("idade", {
                            setValueAs: (value) => (value === "" ? undefined : Number(value)),
                          })}
                          placeholder="Ex: 28"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Sexo, Peso e Altura */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="idade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Peso (em kg)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="any"
                          {...form.register("peso_kg", {
                            setValueAs: (value) => (value === "" ? undefined : parseFloat(value)),
                          })}
                          placeholder="Ex: 75,8kg"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="idade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Altura (em cm)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          step="any"
                          {...form.register("altura_cm", {
                            setValueAs: (value) => (value === "" ? undefined : Number(value)),
                          })}
                          placeholder="Ex: 183cm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sexo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sexo:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione o sexo" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="feminino">Feminino</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              {/* Atividade, nível */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="nivel_atividade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nível de atividade:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione nível de atividade" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="sedentario">Sedentário</SelectItem>
                          <SelectItem value="2x_semana">2 vezes por semana</SelectItem>
                          <SelectItem value="4x_semana">4 vezes por semana</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="objetivo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objetivo:</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione nível de atividade" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="perda_de_peso">Perda de Peso</SelectItem>
                          <SelectItem value="hipertrofia">Hipertrofia</SelectItem>
                          <SelectItem value="manter_massa_muscular">Manter massa muscular</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <Button className="w-full p-5 mt-4 cursor-pointer">Confirmar minhas informações</Button>
            </form>
          </Form>
        </div>
      </Card>
    </div>
  );
}
