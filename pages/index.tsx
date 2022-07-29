import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import CharacterCard from "../components/CharacterCard";
import { Person } from "../typings";
import axios from "axios";

interface Props {
  characters: Person[];
}

const Home = ({ characters }: Props) => {
  // Setting the Pokemon to State
  const [pokemon, setPokemon] = useState<[]>([])
  // Fetching the Pokemon from "/api/getPokemon"
  useEffect(() => {
    const fetchPokemon = async () => {
      const { data } = await axios.get("/api/getPokemon");
      setPokemon(data.pokemon)
    };
    fetchPokemon()
  }, []);

  console.log(pokemon)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Star Wars Stats App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-10 text-center">
        <h1 className="text-6xl font-bold">Star Wars</h1>
        <p className="mt-3 text-2xl font-semibold">Character Stats</p>
        <div className="mt-6 flex max-w-6xl flex-wrap items-center justify-around sm:w-full">
          {characters.map((character) => (
            <CharacterCard key={character.name} character={character}>
              <Button homeworld={character.homeworld} />
            </CharacterCard>
          ))}
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t mt-8">
        <a
          className="flex items-center justify-center gap-2"
          href="https://www.starwars.com/"
          target="_blank"
          rel="noopener noreferrer">
          Powered by <span className="font-extrabold italic">STAR WARS</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = new ApolloClient({
    uri: process.env.STAR_WARS_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetCharacterStats {
        allPeople(first: 10) {
          people {
            name
            birthYear
            gender
            eyeColor
            hairColor
            homeworld {
              diameter
              population
              name
            }
          }
        }
      }
    `,
  });

  console.log(data.allPeople.people);

  return {
    props: {
      characters: data.allPeople.people,
    },
  };
};
