import {
    IonAvatar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonPage,
    IonRow, IonText
} from "@ionic/react";
import './UserCard.css';

export const UserCard = () => {
    return (
      <>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="avatar-row">
              <IonAvatar>
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
              <IonText className="username-label">
                Diego Mendoza
              </IonText>
            </IonCardTitle>
          </IonCardHeader>
  
          <IonCardContent>
            <span></span>
            <IonRow>Monday May 1st, 2023</IonRow>
            <IonRow>Coach: Hyunjin Oh</IonRow>
            <IonRow class="today-workout-link">Today's Workout</IonRow>
          </IonCardContent>
        </IonCard>
      </>
    );
  };