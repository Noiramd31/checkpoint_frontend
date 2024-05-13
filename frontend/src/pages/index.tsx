import React from "react";
import CountryCard from "@/components/CountryCard";
import { useCountriesQuery } from "@/graphql/generated/schema";
import Header from "@/components/Header";
import { CountryProps } from "@/types";
import AddCountryForm from "@/components/AddCountryForm";

export default function Home() {
  const { data, loading } = useCountriesQuery();
  if (loading) return "Chargement...";
  const countries = data?.countries || [];
  return (
    <>
      <Header />
      <AddCountryForm />

      <div className="flex flex-wrap justify-between">
        <h1 className="text-3xl font-bold">Liste des pays</h1>
        {countries.map((c: CountryProps) => (
          <CountryCard key={c.id} country={c} link={`/countries/${c.code}`} />
        ))}
      </div>
    </>
  );
}
