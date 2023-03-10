import { useEffect, useState } from "react";
import DesignSession from "./DesignSession";
import { Link } from "react-router-dom";
import * as api from "../NeighbourhoodPage/api/modifyDesignSessions";

export default function AllDesignSessions({
  allSessions,
  setCurrentSessionId,
}) {
  if (allSessions) {
    return allSessions
      .slice(0)
      .reverse()
      .map(({ sessionId }) => {
        return (
          <DesignSession
            id={sessionId}
            setCurrentSessionId={setCurrentSessionId}
          />
        );
      });
  }
}
