import { useContext } from "react";
import { TeamsFxContext } from "./Context";
import { IUserSettings, Mock } from "../Mocks";
import { DeskOwnerSettings } from "./desk-owner/DeskOwnerSettings";
import { DeskLookerMain } from "./desk-looker/DeskLookerMain";

export default function Tab() {
  const { themeString } = useContext(TeamsFxContext);
  const userSettings: IUserSettings = Mock.UserWithoutDeskSettings;

  return (
    <div
      className={themeString === "default" ? "light" : themeString === "dark" ? "dark" : "contrast"}
    >
      {userSettings.assignedDesk ? 
        <DeskOwnerSettings userSettings={userSettings} /> :
        <DeskLookerMain/>}
    </div>
  );
}
