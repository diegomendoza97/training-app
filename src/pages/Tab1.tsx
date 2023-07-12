import {
  IonCol,
  IonContent, IonGrid,
  IonPage, IonRow
} from "@ionic/react";
import "./Tab1.css";
import { UserCard } from "../components/UserCard/UserCard";
import {StatsCard} from "../components/StatsCard/StatsCard";

const Tab1: React.FC = () => {
  const metricsData = [
    {label: '79', metric: 'kgs', subLabel: 'Weight', type: 'label'},
    {label: '8', metric: '%', subLabel: 'Body Fat', type: 'label'},
    {label: '50', metric: 'kg', subLabel: 'Lean Body Mass', type: 'label'},
    {label: '2k', metric: 'kcal', subLabel: 'Calories', type: 'label'},
    {subLabel: 'Calories', type: 'table', values: [
        {label: 'Protein', value: '180', metric: 'gr'},
        {label: 'Fat', value: '50', metric: 'gr'},
        {label: 'Carbs', value: '180', metric: 'gr'}
      ]
    },
  ]
  return (
    <IonPage>
      <IonContent fullscreen>
        <UserCard />
          <IonContent className="d-flex">
            <IonGrid>
              <IonRow>
                {metricsData.map(data => {
                 return <IonCol key={data.label + data.subLabel} size="6">
                    <StatsCard key={data.label + data.subLabel} data={data}></StatsCard>
                  </IonCol>
                })}
              </IonRow>
            </IonGrid>
          </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
