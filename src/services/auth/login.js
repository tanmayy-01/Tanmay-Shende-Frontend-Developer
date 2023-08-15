import axios from "axios";

export const login = async (email, password) => {
    try {
        const res = await axios.post('http://localhost/auth/auth.php', {
            'email': email,
            'password': password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        return res;
    }
    catch (err) {
        console.log(err);
    }
}
export default login;