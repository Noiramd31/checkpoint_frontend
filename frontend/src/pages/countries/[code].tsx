import React from "react";
import CountryCard from "@/components/CountryCard";
import { useCountryQuery } from "@/graphql/generated/schema";
import Header from "@/components/Header";
import { CountryProps } from "@/types";
import { useRouter } from "next/router";

export default function CountryDetails() {
  const router = useRouter();
  const { code } = router.query;
  const { data, loading, error } = useCountryQuery({
    variables: { code: typeof code === "string" ? code : "" },
    skip: typeof code !== "string",
  });
  const country = data?.country;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between">{country.code}</div>
      <div className="flex flex-wrap justify-between">{country.emoji}</div>
      <div className="flex flex-wrap justify-between">{country.name}</div>
      {/* <div className="flex flex-wrap justify-between">{country.continent}</div> */}
    </>
  );
}
