import { useState } from 'react'; 
import { LoginModal } from './LoginModal'; 

 
export const LoginButton = () => { 
    const [showLoginModal, setShowLoginModal] = useState(false); 
 
    return ( 
        <> 
            <button 
                className="login-button" 
                onClick={() => { 
                    setShowLoginModal(true); 
                }} 
            > 
                Login 
            </button> 
 
            {showLoginModal && ( 
                <LoginModal onClose={() => setShowLoginModal(false)} /> 
            )} 
        </> 
    ); 
};