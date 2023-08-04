export type Itinerary = {
  portCode: string;
  countryCode: string;
  Port: string;
};

export type CardData = {
  id: string;
  code: string;
  title: string;
  departure: {
    portCode: string;
    countryCode: string;
    Port: string;
  };
  arrival: {
    portCode: string;
    countryCode: string;
    Port: string;
  };
  budget: {
    currencyCode: string;
    value: number;
    costType: string;
  };
  itinerary: Itinerary[];
  numberOfDays: number;
  reservationsAvailable: number;
  reservations: number;
  reservationsType: string;
  boatType: string;
  departureDate: string;
  arrivalDate: string;
};
