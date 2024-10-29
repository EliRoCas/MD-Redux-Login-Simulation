import "./register.scss"

function Register() {
    // const handleSubmit = ($event) => {
    //     $event.preventDefault();
    // };

    return (
        <div className="register">
            <form className="registerForm">
                <h2>Sign Up</h2>
                <div className="name">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div className="lastname">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" id="lastname" name="lastname" />
                </div>
                <div className="documentType">
                    <label htmlFor="documentType">Document Type</label>
                    <select name="documentType" id="documentType">
                        <option value="cc">Citizenship Card</option>
                        <option value="ti">Identity Card</option>
                        <option value="passport">Passport</option>
                    </select>
                </div>
                <div className="documentNumber">
                    <label htmlFor="documentNumber">Document Number</label>
                    <input type="text" id="documentNumber" name="documentNumber" />
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="confirmPassword">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" />
                </div>

                <button type="submit"> Sign Up</button>
            </form>
        </div>
    )
}

export default Register;