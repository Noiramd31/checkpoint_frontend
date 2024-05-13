import React, { useState } from "react";
import { useAddCountryMutation } from "@/graphql/generated/schema";
import client from "@/graphql/client";

export default function AddCountryForm() {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");

  const [addCountry, { loading, error }] = useAddCountryMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await addCountry({
        variables: {
          data: { name, emoji, code },
        },
      });

      setName("");
      setEmoji("");
      setCode("");

      alert("Pays ajouté avec succès !");
    } catch (err) {
      console.error("Erreur lors de l'ajout du pays:", err);
      alert("Erreur lors de l'ajout du pays. Veuillez réessayer.");
    } finally {
      client.resetStore();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h1> Ajouter un nouveau pays</h1>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Nom du pays
        </label>
        <div className="mt-1">
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="Entrer le nom du pays"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="emoji"
          className="block text-sm font-medium text-gray-700"
        >
          Emoji
        </label>
        <div className="mt-1">
          <input
            id="emoji"
            name="emoji"
            type="text"
            required
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            className="input"
            placeholder="Entrer l'Emoji du pays"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="code"
          className="block text-sm font-medium text-gray-700"
        >
          Code du pays
        </label>
        <div className="mt-5">
          <input
            id="code"
            name="code"
            type="text"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="input"
            placeholder="Entrer le code du pays"
            maxLength={3}
          />
        </div>
      </div>

      <div>
        <button type="submit" className="button">
          AJOUTER
        </button>
      </div>

      {loading && <p>Chargement...</p>}
      {error && <p className="text-red-500">Erreur : {error.message}</p>}
    </form>
  );
}
