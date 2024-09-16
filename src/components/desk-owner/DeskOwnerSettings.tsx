import React, { useCallback, useState } from "react";
import { DailyPreference, IPreferences, IUserSettings } from "../../Mocks";
import { DayConfig } from "./DayConfig";
import { isEqual } from "lodash"
import { Button } from "@fluentui/react-components";

export function DeskOwnerSettings(props: { userSettings: IUserSettings }) {
  const [userPreferences, setUserPreferences] = useState<IPreferences>(props.userSettings.preferences || {} as IPreferences);  
  const onChange = useCallback((key: string , value: any) => {
    setUserPreferences({ ...userPreferences, [key]: value });
  }, [userPreferences]);

  const getPreference = (key: keyof IPreferences): DailyPreference => {
    return userPreferences[key] as DailyPreference;
  };

  const handleSave = () => {
    // Implement save logic here
    console.log("Preferences saved:", userPreferences); // TODO
  };

  const disableSaveButton = isEqual(props.userSettings.preferences, userPreferences);

  return (
    <div style={{width: 700, padding: 30 }}>
      <span>{"Manage your week effectively and coordinate with others by sharing your desk schedule when you're away. This helps everyone plan their office days and ensures smooth alignment of schedules."}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: 20}}>
        {Object.keys(userPreferences).map((key) => 
          <DayConfig 
            key={key} 
            day={key as keyof IPreferences} 
            preference={getPreference(key as keyof IPreferences)} 
            onChange={onChange} />)}
      </div>
      <footer style={{ marginTop: 30 }}>
        <Button onClick={handleSave} appearance="primary" disabled={disableSaveButton}>Save preferences</Button>
      </footer>
    </div>
  );
}
