import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from "../components/Header";
import FilterPatients from "../components/FilterPatients";
import PatientsTable from "../components/PatientsTable";

export default function Home() {
  const [patients, setPatients] = useState(null);
  const [renderedPatients, setRenderedPatients] = useState(null);

  const router = useRouter();
  const { page } = Object.keys(router.query).includes("page")
    ? router.query
    : { page: 1 };

  console.log(page);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${page}&results=50&seed=abc`)
      .then((response) => response.json())
      .then((data) => {
        setPatients(data.results);
        setRenderedPatients(data.results);
      });
  }, []);

  if (!renderedPatients) {
    return <CircularProgress />;
  }

  return (
    <>
      <Head>
        <title>Pharma Inc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen min-h-screen">
        <Header />
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-1/2 p-4 pt-20 sm:p-8 sm:pt-20 md:p-20 md:pt-20 lg:pt-32">
            <div className="w-full mb-4">
              <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam, corporis totam aliquam accusamus aut saepe. Earum,
                assumenda debitis. Molestiae voluptatum odio repellendus ratione
                veritatis. Esse odio ipsam ab eius non!
              </h4>
            </div>
            <div className="w-full mb-4">
              <FilterPatients
                patients={patients}
                setRenderedPatients={setRenderedPatients}
              />
            </div>
            <div className="w-full">
              <PatientsTable renderedPatients={renderedPatients} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
