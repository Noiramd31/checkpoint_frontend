import { CategoryCardProps } from "../types";
import Link from "next/link";
import React from "react";

function CountryCard({ country: { name, emoji }, link }: CategoryCardProps) {
  return (
    <Link href={link}>
      <h3 className="mt-6 text-xl text-gray-500">
        {name} - {emoji}
      </h3>
    </Link>
  );
}

export default CountryCard;
