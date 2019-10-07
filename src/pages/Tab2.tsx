import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Buttons from '../components/buttonsComponent'
import { Actionsheet } from '../components/actionsheetComponent'
//import './Tab2.css'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Buttons, Alerts, Router, and More</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/tab2/details">
            <IonLabel>
              <h2>Go to Clock</h2>
            </IonLabel>
          </IonItem>
        </IonList>
        <Buttons />
        <Actionsheet />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;