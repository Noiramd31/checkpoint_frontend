import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./client";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ClientProvider;
