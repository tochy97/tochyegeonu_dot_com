import { buildSchema } from 'graphql';

export const schema = buildSchema(`
    input DateInput {
        id: Int!
        day: Int!
        monht: Int!
        year: Int!
        data: String
    }
    
    input WeekInput {
        id: Int!
        value: Int!
        days: [DateInput]!
        monht: Int!
        year: Int!
    }

    input MonthInput {
        id: Int!
        name: String!
        value: Int!
        weeks: [WeekInput]!
        year: Int!
    }

    input YearInput {
        id: Int!
        value: Int!
        months: [MonthInput]!
        leap: Boolean
    }

    input LifeInput {
        id: Int!
        name: String!
        year: [YearInput]!
    }

    type Date {
        id: Int!
        day: Int!
        monht: Int!
        year: Int!
        data: String
    }
    
    type Week {
        id: Int!
        value: Int!
        days: [Date]!
        monht: Int!
        year: Int!
    }

    type Month {
        id: Int!
        name: String!
        value: Int!
        weeks: [Week]!
        year: Int!
    }

    type Year {
        id: Int!
        value: Int!
        months: [Month]!
        leap: Boolean
    }

    type Life {
        id: Int!
        name: String!
        year: [Year]!
    }

    type Query {
        getDate(id: Int!) : Date
        getWeek(id: Int!) : Week
        getMonth(id: Int!) : Month
        getYear(id: Int!) : Year
        getLife(id: Int!) : Life
    }

    type Mutation {
        addDate(input: DateInput!) : Date
        addWeek(input: WeekInput!) : Week
        addMonth(input: MonthInput!) : Month
        addYear(input: YearInput!) : Year
        addLife(input: LifeInput!) : Life
    }
`);

