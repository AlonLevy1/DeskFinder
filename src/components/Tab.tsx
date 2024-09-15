import { useContext } from "react";
import { Welcome } from "./sample/Welcome";
import { TeamsFxContext } from "./Context";
import config from "./sample/lib/config";
import { IUserSettings, Mock } from "../Mocks";
import { DeskOwnerSettings } from "./desk-owner/DeskOwnerSettings";

const showFunction = Boolean(config.apiName);

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  const userSettings: IUserSettings = Mock.UserWithDeskSettings;

  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      {userSettings.assignedDesk ? 
        <DeskOwnerSettings userSettings={userSettings} /> :
         <Welcome showFunction={showFunction} />}
    </div>
  );
}
