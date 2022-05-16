export type Extract = {
  value: number;
  date: number | string;
  description: string;
};

export type User = {
  name: string;
  birthDate: number;
  cpf: number;
  balance: number;
  extract: [Extract];
};

export const users: User[] = [
  {
    name: "Paulo Tarso",
    birthDate: 2002,
    cpf: 12345678910,
    balance: 1000000000,
    extract: [
      {
        value: 5000,
        date: 2022,
        description: "Comprou um PS5",
      },
    ],
  },
];
