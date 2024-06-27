import { useContext } from "react";

const SessionContext = useContext();

const useSession = () => useContext(SessionContext);