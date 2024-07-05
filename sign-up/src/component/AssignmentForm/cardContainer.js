
import { TittleCard } from "./Card";

export default function CardContainer({ persons ,isLoading}) {
    return (
        <div>
            {isLoading && <div>Person List is Loading </div>}
            {!isLoading && <div>
                {persons.map(({id, name, email, phone, gender,userID }) => (
                    <TittleCard key={id} tittle={name}>
                        <div>{email}</div>
                        <div>{phone}</div>
                        <div>{gender}</div>
                        <div>UserID :{userID}</div>
                    </TittleCard>
                ))}
            </div>}
        </div>
    );
}