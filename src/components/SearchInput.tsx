import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchInput() {
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // REMEMBER TO ADD... React.FormEvent<HTMLFormElement>
        event.preventDefault();

        // now when user submits the form, we need to figure out
        // a). where we want to navigate to them.
        // b). navigate using 'useNavigate()' hook
        navigate(`/search?term=${term}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} />
        </form>
    );

    // 3rd method -- FORM BASED Navigation
    /*
    return (
        <Form action="/search">
            <input name="term" />
        </Form>
    );
    */
}
