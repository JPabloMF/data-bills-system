const LOGIN = {
  email: "admin@admin.com",
  password: "admin123@",
};

const HOME = {
  latestBill: "$15.400",
  savedMoney: "$255.670",
  freeMoney: "$22.050",
  table: [
    { id: 0, name: "Spotify", value: "$36.000", duedate: "06/21/2023" },
    { id: 1, name: "Amazon", value: "$257.000", duedate: "06/28/2023" },
    { id: 2, name: "Car", value: "$36.000", duedate: "07/12/2023" },
    { id: 3, name: "Apartment", value: "$36.000", duedate: "07/25/2023" },
  ],
};

const BILLS = {
  amountOfExpenses: "4 Expenses",
  availableMoney: "$250.000",
  savedMoney: "$0",
  expenses: {
    home: [
      {
        name: "Broken roof",
        description: "Fix the roof, our house is full of water",
        total: "$350.000"
      },
      {
        name: "Fix garage",
        description: "Fix the garage, we need it for our car",
        total: "$32.800"
      },
    ],
    transportation: [
      {
        name: "Helmet",
        description: "We need a helmet asap",
        total: "$1.350.000"
      },
      {
        name: "New tyres",
        description: "New tyres for motorcycle please",
        total: "$50.600"
      },
    ],
  },
};

module.exports = { LOGIN, HOME, BILLS };
