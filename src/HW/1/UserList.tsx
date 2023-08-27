type AddressType = {
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
    id: number;
    name: string;
    age: number;
    address: AddressType;
    // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
    users: UserType[] // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={user.id}
                        id={`hw01-user-${user.id}`}>
                        <span> {user.name} </span>
                        <strong> (Age: {user.age}) </strong>
                        <span> Address:{user.address.street}, {user.address.city}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
