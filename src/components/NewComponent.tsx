import React from 'react';

type StudentType = {
    id: number,
    name: string,
    age: number
}

type NewComponentPropsType = {
    students: Array<StudentType>
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <h4>Students:</h4>
            <ul>
                {props.students.map((s, index) => <li key={s.id}>name = {s.name}, age
                    = {s.age}</li>)}
            </ul>
        </div>
    );
}


type CarType = {
    manufacturer: string
    model: string
}

type NewComponentForCarsPropsType = {
    cars: Array<CarType>
}


export const NewComponentForCars = (props: NewComponentForCarsPropsType) => {

    const tableStyle = {
        marginLeft: "auto",
        marginRight: "auto"
    }

    return (
        <div>
            <h4>Cars:</h4>

            <table style={tableStyle}>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                </thead>
                <tbody>
                {props.cars.map((car, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

        </div>
    );
}