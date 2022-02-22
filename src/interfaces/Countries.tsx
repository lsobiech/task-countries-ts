export interface countriesArrayObject {
  capital: string;
  code: string;
  currency: string;
  name: string;
  __typename: string;
}

export interface CountryListProps {
  countries: Array<countriesArrayObject>;
}

export interface CountriesProps {
  name: string;
  currency: string;
  capital: string;
  code: string;
}

export interface loadCountriesData {
  countries: Array<countriesArrayObject>;
}
