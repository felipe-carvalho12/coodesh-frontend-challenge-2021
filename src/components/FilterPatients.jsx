import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import TuneIcon from "@material-ui/icons/Tune";

export default function FilterPatients() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full h-14 flex justify-between items-center rounded-md shadow-lg p-2 bg-light">
      <input
        type="text"
        placeholder="Pesquisar paciente..."
        className="color-btn p-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Tooltip title="Filtrar pacientes" placement="top" arrow>
        <TuneIcon className="ml-auto cursor-pointer color-primary color-hover" />
      </Tooltip>
    </div>
  );
}
