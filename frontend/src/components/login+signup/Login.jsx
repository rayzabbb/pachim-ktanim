import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, setCurrentUser } from '../../slices/userSlice';
//import './Login.css';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        try {
            const response = await dispatch(login(formData)); // קריאה ל-thunk של login דרך dispatch
    
            if (login.fulfilled.match(response)) {
                console.log('_Login successful:', response.payload);
                // עדכון המשתמש ב-Redux אחרי התחברות מוצלחת
                dispatch(setCurrentUser(response.payload)); 
                 navigate('/'); // מעבר לדף הבית לאחר התחברות מוצלחת
            } else if (login.rejected.match(response)) {
                // בדיקה של תוכן ה-response.error
                console.error('_Error response:', response.error);
                const errorMessage = response.error.message || response.error;
    
                if (response.error.status === 400) {
                    setErrorMessage('חסר שם');
                } else if (response.error.status === 401) {
                    setErrorMessage('סיסמה שגויה');
                } else {
                    setErrorMessage(errorMessage || 'שגיאה בהתחברות');
                }
            }
        } catch (error) {
            // טיפול בשגיאות שלא הגיעו מהשרת (כגון בעיות רשת)
            setErrorMessage('שגיאה כללית בהתחברות');
            console.error('_Error during login:', error);
        }
    };

    return (
        <div>
<h1><span className="highlight"> logini</span></h1>
{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form
                onSubmit={(e) => {
                    e.preventDefault(); // מונע את התנהגות ברירת המחדל של הטופס
                    handleLogin(); // מפעיל את הפונקציה שמבצעת את ההתחברות
                }}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}    

export default Login;