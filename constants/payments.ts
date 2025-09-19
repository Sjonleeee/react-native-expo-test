export type Payment = {
  date: string;
  month: string;
  du: string;
  retenue: string;
  recu: string;
};

export const paymentSections = [
  {
    title: "Juillet 2015",
    rows: [
      { date: "01/07", month: "07/2015", du: "500,00", retenue: "100,00", recu: "0,00" },
      { date: "15/07", month: "07/2015", du: "750,00", retenue: "50,00", recu: "0,00" },
      { date: "28/07", month: "07/2015", du: "320,00", retenue: "20,00", recu: "0,00" },
    ],
  },
  {
    title: "Juin 2015",
    rows: [
      { date: "03/06", month: "06/2015", du: "600,00", retenue: "60,00", recu: "0,00" },
      { date: "12/06", month: "06/2015", du: "450,00", retenue: "30,00", recu: "0,00" },
      { date: "21/06", month: "06/2015", du: "800,00", retenue: "80,00", recu: "0,00" },
      { date: "29/06", month: "06/2015", du: "200,00", retenue: "10,00", recu: "0,00" },
    ],
  },
  {
    title: "Mai 2015",
    rows: [
      { date: "05/05", month: "05/2015", du: "1000,00", retenue: "100,00", recu: "0,00" },
      { date: "25/05", month: "05/2015", du: "350,00", retenue: "25,00", recu: "0,00" },
    ],
  },
  {
    title: "Avril 2015",
    rows: [
      { date: "10/04", month: "04/2015", du: "420,00", retenue: "20,00", recu: "0,00" },
      { date: "22/04", month: "04/2015", du: "600,00", retenue: "60,00", recu: "0,00" },
    ],
  },
  {
    title: "Mars 2015",
    rows: [
      { date: "02/03", month: "03/2015", du: "800,00", retenue: "80,00", recu: "0,00" },
      { date: "14/03", month: "03/2015", du: "250,00", retenue: "10,00", recu: "0,00" },
      { date: "18/03", month: "03/2015", du: "900,00", retenue: "90,00", recu: "0,00" },
      { date: "23/03", month: "03/2015", du: "400,00", retenue: "40,00", recu: "0,00" },
      { date: "30/03", month: "03/2015", du: "150,00", retenue: "5,00", recu: "0,00" },
    ],
  },
];
