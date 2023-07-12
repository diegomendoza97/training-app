import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText} from "@ionic/react";
import './Stats.Card.css'

// TODO change prop to model
export interface StatsCardModel {
    label?: string;
    metric?: string;
    subLabel: string,
    type: string;
    values: {label: string, value: string, metric: string;}[];
}
export const StatsCard = (props: { data: StatsCardModel }) => {
    return ( props.data.type === 'label' ?
        <>
            <IonCard className="no-gap-card">
                <IonCardHeader>
                    <IonCardTitle class="ion-text-center">
                        {props.data.label}
                        <IonText className="metrics-label">{props.data.metric}</IonText>
                    </IonCardTitle>
                    <IonCardSubtitle>{props.data.subLabel}</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
        </> :
        <>
            <h1>Here</h1>
        </>
    )
}
