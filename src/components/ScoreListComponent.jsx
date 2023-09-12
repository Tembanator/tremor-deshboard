import { Card, List, ListItem, Title } from "@tremor/react";
const cities = [
    {
        name: "New York",
        sales: 9800,
    },
    {
        name: "London",
        sales: 4567,
    },
    {
        name: "Hong Kong",
        sales: 3908,
    },
    {
        name: "San Francisco",
        sales: 2400,
    },
    {
        name: "Singapore",
        sales: 1908,
    },
    {
        name: "Zurich",
        sales: 1398,
    },
];

const valueFormatter = (number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;
const ScoreListComponent = () => {
    return (
        <>
            <List>
                {cities.map((item) => (
                    <ListItem key={item.name}>
                        <span>{item.name}</span>
                        <span>{"$ "+item.sales}</span>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ScoreListComponent
