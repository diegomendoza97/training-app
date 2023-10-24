import { useState, useEffect } from 'react';
import {
    IonContent,
    IonPage,
    IonCard,
    IonCardContent,
    IonInput,
    IonButton,
} from '@ionic/react';
import { userLoginWithEmailAndPassword } from '../services/auth';
import './Tab1.css';

const Tab1: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    return (
        <IonPage>
            <IonContent className="login-main-container">
                <IonCard>
                    <IonCardContent>
                        <IonInput
                            placeholder="Enter email"
                            value={email || undefined}
                            onIonChange={(e) => handleEmailChange(e)}
                        />
                        <IonInput
                            placeholder="Enter password"
                            type="password"
                            onIonChange={(e) => handlePasswordChange(e)}
                        />
                        <IonButton onClick={() => userLoginWithEmailAndPassword(email, password)}>Log in</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
