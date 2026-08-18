const getWeekday = () => {
    return new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long'
    }).format(new Date());
}

type Person = {
    name: string;
    age: number;
    roles: string[];
}
export const Person = ({ name, age, roles }: Person) => {

    return (
        <div>
            <h2 className="" style={{ color: "red" }}>Nome: {name}</h2>
            <h2 className="">Idade: {age}</h2>
            <h2 className="">Dia da semana: {getWeekday()}</h2>

            <h3 className="text-blue-500 font-medium">Roles</h3>
            <ol>
                {roles.map((role) => (
                    <li key={role}>{role}</li>
                ))}
            </ol>
        </div>
    )

}