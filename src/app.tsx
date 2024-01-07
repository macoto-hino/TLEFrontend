import { useEffect, useState } from "react";

import { LocaleContext } from "./context";
import { engineCall, isEngine } from "./engine";
import { cultures, defaultLocale } from "./localisations";

import MainPanel from "./components/main-panel";
import LaneDirectionTool from "./components/lane-direction-tool";

export default function App() {
  const [locale, setLocale] = useState(defaultLocale);
  const [ldtOpenedPanel, setLdtOpenedPanel] = useState(-1);

  const updateLocale = async () => {
    const callResult = await engineCall("C2VM-TLE-Call-GetLocale");
    if (callResult) {
      const result = JSON.parse(callResult);
      if (result.locale) {
        if (result.locale in cultures && cultures[result.locale].includes(result.culture)) {
          setLocale(result.culture);
        } else {
          setLocale(result.locale);
        }
      }
    }
  };

  useEffect(() => {
    updateLocale();
    if ("engine" in window && isEngine(window.engine)) {
      const listener = window.engine.on("l10n.activeDictionaryChanged.update", (_result) => updateLocale());
      return () => {
        listener.clear();
      };
    }
  }, []);

  useEffect(() => {
    if (ldtOpenedPanel < 0) {
      const keyDownHandler = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key == "S") {
          engineCall("C2VM-TLE-Call-KeyPress", JSON.stringify({ctrlKey: event.ctrlKey, key: event.key}));
        }
      };
      document.addEventListener("keydown", keyDownHandler);
      return () => document.removeEventListener("keydown", keyDownHandler);
    }
  }, [ldtOpenedPanel]);

  return (
    <LocaleContext.Provider value={locale}>
      <MainPanel />
      <LaneDirectionTool onChange={setLdtOpenedPanel} />
    </LocaleContext.Provider>
  );
}