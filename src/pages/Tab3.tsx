import React from 'react';
import { IonHeader, IonToolbar, IonPage, IonTitle, IonContent } from '@ionic/react';
import QuotesPage from '../components/quotesPageComponent'
const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <QuotesPage />
      <IonContent />
    </IonPage>
  );
};

export default Tab3Page;
