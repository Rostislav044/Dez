import { useContext } from "react";
import {LanguageContext} from "../routers/contexts/LanguageContext.jsx";


export default () => {
  const context = useContext(LanguageContext);

  return context;
};