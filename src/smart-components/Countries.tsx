import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_COUNTRIES } from "../graphql/queries";
import CountriesList from "../components/CountryList";
import Pagination from "../components/Pagination";
import { countriesArrayObject, loadCountriesData } from "../interfaces/Countries";

class Statics {
  readonly loading: string;
  readonly countriesPerPage: number;
  readonly currentPage: number;
  constructor(loading: string, countriesPerPage: number, currentPage: number) {
    this.loading = loading;
    this.countriesPerPage = countriesPerPage;
    this.currentPage = currentPage;
  }
}

function Countries(): any {
  const statics = new Statics("Loading", 10, 1);
  const { error, loading, data } = useQuery<loadCountriesData>(LOAD_COUNTRIES);
  const [countries, setCountries] = useState<Array<countriesArrayObject>>([]);
  const [currentPage, setCurrentPage] = useState<number>(statics?.currentPage);
  const [countriesPerPage] = useState<number>(statics?.countriesPerPage);

  useEffect(() => {
    if (data) {
      setCountries(data?.countries);
    }
  }, [data]);

  const indexOfLastCountry: number = currentPage * countriesPerPage;
  const indexOfFirstCountry: number = indexOfLastCountry - countriesPerPage;
  const currentCountries: Array<countriesArrayObject> = countries?.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate: any = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div>
      {!error && !loading && !!countries?.length ? (
        <div>
          <CountriesList countries={currentCountries} />
          <Pagination
            currentPage={currentPage}
            totalCountries={countries?.length / countriesPerPage}
            paginate={paginate}
          />
        </div>
      ) : (
        statics?.loading
      )}
    </div>
  );
}

export default Countries;
