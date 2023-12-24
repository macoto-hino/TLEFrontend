import { useEffect, useState } from "react";

import { LocaleContext } from "./context";
import { engineCall, isEngine } from "./engine";
import { cultures, defaultLocale } from "./localisations";

import MainPanel from "./components/main-panel";
import LaneDirectionTool from "./components/lane-direction-tool";

export default function App() {
  const [locale, setLocale] = useState(defaultLocale);

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

  return (
    <LocaleContext.Provider value={locale}>
      <MainPanel />
      <LaneDirectionTool />
    </LocaleContext.Provider>
  );
}