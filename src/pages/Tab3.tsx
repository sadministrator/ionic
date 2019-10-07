import React from 'react';
import { IonPage, IonTitle, IonHeader, IonToolbar } from '@ionic/react';
import QuotesPage from '../components/quotesPageComponent'
const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Donald Trump Inspirational Quotes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <QuotesPage />
    </IonPage>
  );
};

export default Tab3Page;
