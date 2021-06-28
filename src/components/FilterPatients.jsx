import React, { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import Tooltip from "@material-ui/core/Tooltip";
import TuneIcon from "@material-ui/icons/Tune";

export default function FilterPatients({ patients, setRenderedPatients }) {
  const [search, setSearch] = useState("");
  const [filterHeight, setFilterHeight] = useState(0);

  useEffect(() => {
    setRenderedPatients(
      patients.filter(
        (patient) =>
          `${patient.name.first} ${patient.name.last}`
            .toLowerCase()
            .slice(0, search.length) === search.toLowerCase()
      )
    );
  }, [search, patients, setRenderedPatients]);

  const nationalitiesSet = new Set(patients.map((patient) => patient.nat));

  return (
    <>
      <div className="w-full h-14 flex justify-between items-center rounded-md shadow-lg p-2 bg-light">
        <input
          type="text"
          placeholder="Searching..."
          className="color-paragraph p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Tooltip title="Filter patients" placement="top" arrow>
          <TuneIcon
            className="ml-auto cursor-pointer color-primary color-hover"
            onClick={() =>
              setFilterHeight(filterHeight === "auto" ? 0 : "auto")
            }
          />
        </Tooltip>
      </div>
      <AnimateHeight height={filterHeight}>
        <div className="w-full bg-light shadow-lg rounded-md rounded-t-none">
          <div className="w-full p-4 b-bottom-2px-bg-dark">
            <div className="w-full p-2 sticky top-0 bg-light">
              <h3>Gender</h3>
            </div>
            <div className="w-full pl-2">
              <div>
                <input type="checkbox" /> Male
              </div>
              <div>
                <input type="checkbox" /> Female
              </div>
            </div>
          </div>
          <div className="w-full max-h-36 overflow-y-auto px-4 b-bottom-2px-bg-dark">
            <div className="w-full p-2 sticky top-0 bg-light">
              <h3>Nationality</h3>
            </div>
            <div className="w-full pl-2">
              <div>
                <input type="checkbox" /> All
              </div>
              {Array.from(nationalitiesSet).map((nationality) => (
                <div key={nationality}>
                  <input type="checkbox" /> {nationality}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full p-4">
            <button className="btn-primary ml-auto">Confirm</button>
          </div>
        </div>
      </AnimateHeight>
    </>
  );
}
