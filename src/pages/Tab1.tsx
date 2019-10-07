import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBadge
} from '@ionic/react';
import React from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cordova Components</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard class="card" href="https://en.wikipedia.org/wiki/New_York_City">
          <img src="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-usa-jpg_header-141511.jpeg" alt="NYC" />
          <IonCardHeader>
            <IonCardSubtitle>Skyline in front of the bay.</IonCardSubtitle>
            <IonCardTitle>New York City</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            New York City is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over a land area of about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States.[10] Located at the southern tip of the state of New York, the city is the center of the New York metropolitan area, the largest metropolitan area in the world by urban landmass[11] and one of the world's most populous megacities,[12][13] with an estimated 19,979,477 people in its 2018 Metropolitan Statistical Area and 22,679,948 residents in its Combined Statistical Area.
          </IonCardContent>
        </IonCard>
        <IonBadge color="primary">911k</IonBadge>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
