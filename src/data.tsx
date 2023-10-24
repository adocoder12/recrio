//types
import { TUser } from "./utils/types";
const usersTable: TUser[] = [
  {
    id: 34325345,
    name: "John",
    lastname: "Smith",
    phone: "622322662",
    email: "john@mail.com",
    loggedIn: 20,
    totalhours: 30,
    osasto: "Tuotanto",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 20,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 90,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 10,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 0,
          },
        ],
      },
    ],
  },
  {
    id: 12345678,
    name: "Alice",
    lastname: "Johnson",
    phone: "5551234567",
    email: "alice@mail.com",
    loggedIn: 1,
    totalhours: 40,
    osasto: "Tuotanto",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 50,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 100,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 20,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 10,
          },
        ],
      },
    ],
  },
  {
    id: 98765432,
    name: "Bob",
    lastname: "Brown",
    phone: "9998887777",
    email: "bob@mail.com",
    loggedIn: 80,
    totalhours: 25,
    osasto: "Tuotanto",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 20,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 290,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 10,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 0,
          },
        ],
      },
    ],
  },

  {
    id: 87651234,
    name: "James",
    lastname: "Wilson",
    phone: "4444888899",
    email: "james@mail.com",
    loggedIn: 1,
    totalhours: 29,
    osasto: "Myynti",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 20,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 90,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 90,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 80,
          },
        ],
      },
    ],
  },
  {
    id: 33332222,
    name: "Oliver",
    lastname: "Moore",
    phone: "5555666677",
    email: "oliver@mail.com",
    loggedIn: 10,
    totalhours: 33,
    osasto: "Myynti",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 120,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 110,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 90,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 50,
          },
        ],
      },
    ],
  },
  {
    id: 12345678,
    name: "Alice",
    lastname: "Johnson",
    phone: "5551234567",
    email: "alice@mail.com",
    loggedIn: 15,
    totalhours: 40,
    osasto: "Logistics",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 25,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 50,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 10,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 10,
          },
        ],
      },
    ],
  },
  {
    id: 98765432,
    name: "Sarah",
    lastname: "Williams",
    phone: "5559876543",
    email: "sarah@mail.com",
    loggedIn: 10,
    totalhours: 35,
    osasto: "Sales",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 15,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 60,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 5,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 5,
          },
        ],
      },
    ],
  },
  {
    id: 11111111,
    name: "Eva",
    lastname: "Davis",
    phone: "5551111111",
    email: "eva@mail.com",
    loggedIn: 18,
    totalhours: 28,
    osasto: "Support",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 23,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 45,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 8,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 15,
          },
        ],
      },
    ],
  },
  {
    id: 54321987,
    name: "Emily",
    lastname: "Anderson",
    phone: "5555432198",
    email: "emily@mail.com",
    loggedIn: 8,
    totalhours: 33,
    osasto: "Marketing",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 22,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 55,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 7,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 18,
          },
        ],
      },
    ],
  },
  {
    id: 98765439,
    name: "Michael",
    lastname: "Brown",
    phone: "5559876549",
    email: "michael@mail.com",
    loggedIn: 12,
    totalhours: 42,
    osasto: "Engineering",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 18,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 70,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 12,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 25,
          },
        ],
      },
    ],
  },
  {
    id: 24681357,
    name: "Sophia",
    lastname: "Martinez",
    phone: "5552468135",
    email: "sophia@mail.com",
    loggedIn: 17,
    totalhours: 38,
    osasto: "Research",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 28,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 48,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 7,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 20,
          },
        ],
      },
    ],
  },
  {
    id: 13579246,
    name: "Oliver",
    lastname: "Davis",
    phone: "5551357924",
    email: "oliver@mail.com",
    loggedIn: 14,
    totalhours: 45,
    osasto: "Customer Service",
    workingHours: [
      {
        currentMonth: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-12"),
              new Date("2023-10-01"),
            ],
            hours: 19,
          },
        ],
        lastWeek: [
          {
            dates: [
              new Date("2023-10-17"),
              new Date("2023-10-18"),
              new Date("2023-10-19"),
            ],
            hours: 62,
          },
        ],
        currentWeek: [
          {
            dates: [
              new Date("2023-10-23"),
              new Date("2023-10-24"),
              new Date("2023-10-25"),
            ],
            hours: 9,
          },
        ],
        lastMonth: [
          {
            dates: [
              new Date("2021-09-01"),
              new Date("2021-09-02"),
              new Date("2021-09-05"),
            ],
            hours: 22,
          },
        ],
      },
    ],
  },
];
export default usersTable;
