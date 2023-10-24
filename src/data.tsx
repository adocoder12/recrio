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
];
export default usersTable;
