export type CountryProps = {
  id: number;
  name: string | null;
  emoji: string;
  code: string;
};

export type CategoryCardProps = {
  country: CountryProps;
  link: string;
};
