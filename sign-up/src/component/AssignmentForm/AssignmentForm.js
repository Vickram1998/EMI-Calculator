import SignupForm from "./Sign-up";
import DisplayUser from "./DisplayUser";
import './Form.css';
import { useEffect, useState } from "react";
import { createPerson, getApiError, getPersons } from "./apiutil";
import CardContainer from "./cardContainer";

function AssignmentForm() {
    const [userName, setUserName] = useState('');
    const [persons, setPersons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadPersonList = () => {
        setIsLoading(true);
        getPersons()
            .then((personList) => {
                setIsLoading(false);
                setPersons(personList);
            })
            .catch((error) => {
                console.error('Error loading persons:', error);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        loadPersonList();
    }, []);

    return (
        <div className="container">
            <SignupForm onPersonAdd={(personData) => {
                // Handle form submission
                loadPersonList() 
            }} />
            {console.log(persons)}
            <CardContainer persons={persons} isLoading={isLoading} />
        </div>
    );
}

export { AssignmentForm };
