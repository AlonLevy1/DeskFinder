// https://fluentsite.z22.web.core.windows.net/quick-start
import {
  FluentProvider,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
  Spinner,
  tokens,
} from "@fluentui/react-components";
import { ThemeProvider, PartialTheme } from '@fluentui/react';
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useTeamsUserCredential } from "@microsoft/teamsfx-react";
import Tab from "./Tab";
import { TeamsFxContext } from "./Context";
import config from "./sample/lib/config";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
export default function App() {
  const { loading, theme, themeString, teamsUserCredential } = useTeamsUserCredential({
    initiateLoginEndpoint: config.initiateLoginEndpoint!,
    clientId: config.clientId!,
  });
  return (
    <TeamsFxContext.Provider value={{ theme, themeString, teamsUserCredential }}>
      <ThemeProvider theme={theme as PartialTheme}>
        <FluentProvider
          theme={
            themeString === "dark"
              ? teamsDarkTheme
              : themeString === "contrast"
              ? teamsHighContrastTheme
              : {
                  ...teamsLightTheme,
                  colorNeutralBackground3: "#eeeeee",
                }
          }
          style={{ background: tokens.colorNeutralBackground3 }}
        >
          <Router>
            {loading ? (
              <Spinner style={{ margin: 100 }} />
            ) : (
              <Routes>
                <Route path="/tab" element={<Tab />} />
                <Route path="*" element={<Navigate to={"/tab"} />}></Route>
              </Routes>
            )}
          </Router>
        </FluentProvider>
      </ThemeProvider>
    </TeamsFxContext.Provider>
  );
}
