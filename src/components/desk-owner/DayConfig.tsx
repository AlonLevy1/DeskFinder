import React from "react";
import { DailyPreference } from "../../Mocks";
import { Dropdown, Option } from "@fluentui/react-components";

export interface IDayConfigProps {
    day: string;
    preference: DailyPreference;
    onChange: (day: string, value: DailyPreference) => void;
}

const options = [
    { key: DailyPreference.AutoApprove, text: 'Auto approve' },
    { key: DailyPreference.ManualApprove, text: 'Ask me before approval' },
    { key: DailyPreference.Blocked, text: "I'm in the office" },
];

function getOptionText(key: DailyPreference): string {
  return options.find(option => option.key === key)?.text || '';
}

export function DayConfig(props: IDayConfigProps) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: 350, justifyContent: 'space-between' }}>
        <span style={{ marginRight: '10px' }}>{props.day}:</span>
        <Dropdown
          style={{ marginLeft: '10px', width: 200 }}
          defaultSelectedOptions={[props.preference || DailyPreference.Blocked]}
          defaultValue={getOptionText(props.preference || DailyPreference.Blocked)}
          onOptionSelect={(e, data) => { props.onChange(props.day, data.optionValue as DailyPreference) }}
        >
          {options.map(option => (
            <Option key={option.key} value={option.key}>
              {option.text}
            </Option>
          ))}
        </Dropdown>
      </div>
    </>
  );
}