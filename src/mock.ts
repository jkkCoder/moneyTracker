const mockTransaction = {
    expenses: [
        {
            id : 1,
            date: "2023-06-29",
            category: "food",
            title: "chole bhature",
            description: "had bhature with my friend",
            amount: 200,
            year: 2023,
            month: 6,
            day: 29,
        },
        {
            id : 2,
            date: "2023-06-29",
            category: "grocery",
            title: "milk",
            description: "milk for morning breakfast",
            amount: 26,
            year: 2023,
            month: 6,
            day: 29,
        },
        {
            id:3,
            date:"2023-06-28",
            category: "household",
            title: "powder",
            description: "nycil cool powder",
            amount: 90,
            year:2023,
            month:6,
            day:28,
        }
    ],
    income: [
        {
            id:3,
            date: "2023-06-01",
            category: "salary",
            title: "monthly salary",
            description: "",
            amount: 35000,
            year:2023,
            month:6,
            day:1,
        }
    ]
}

export default mockTransaction;