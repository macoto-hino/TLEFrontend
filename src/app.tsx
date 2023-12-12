import { useEffect, useState } from "react";

import { LocaleContext } from "./context";
import { engineCall } from "./engine";
import { defaultLocale } from "./localisations";

import MainPanel from "./components/main-panel";
import LaneDirectionTool from "./components/lane-direction-tool";

export default function App() {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    (async function () {
      const callResult = await engineCall("C2VM-TLE-Call-GetLocale");
      if (callResult) {
        const result = JSON.parse(callResult);
        if (result.locale) {
          setLocale(result.locale);
        }
      }
    })();
  }, []);

  return (
    <LocaleContext.Provider value={locale}>
      <MainPanel />
      <LaneDirectionTool />
    </LocaleContext.Provider>
  );
}