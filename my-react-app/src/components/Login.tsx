import { ChangeEvent, FormEvent, useState } from "react";
interface State {
    email: string;
    password: string;
}
export default function Login() {
    const [state, setState] = useState<State>({
        email: "",
        password: ""
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={state.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}
