import React, { useEffect, useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import TuneIcon from "@material-ui/icons/Tune";

export default function FilterPatients({ patients, setRenderedPatients }) {
  const [search, setSearch] = useState("");

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

  return (
    <div className="w-full h-14 flex justify-between items-center rounded-md shadow-lg p-2 bg-light">
      <input
        type="text"
        placeholder="Searching..."
        className="color-paragraph p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Tooltip title="Filter patients" placement="top" arrow>
        <TuneIcon className="ml-auto cursor-pointer color-primary color-hover" />
      </Tooltip>
    </div>
  );
}
