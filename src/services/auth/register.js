import axios from 'axios';

export const register = async (email, password) => {
    try {
        const res = await axios.post('http://localhost/auth/register.php', {
            'email': email,
            'password': password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        return res
    }
    catch (err) {
        console.log(err);
    }
}

export default register;
