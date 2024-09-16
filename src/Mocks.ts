
export enum DailyPreference {
    AutoApprove = "AutoApprove",
    ManualApprove = "ManualApprove",
    Blocked = "Blocked"
}

export const Mock = {
    UserWithDeskSettings: {
        assignedDesk: "5B214_16",
        preferences: {
            Sunday: DailyPreference.AutoApprove,
            Monday: DailyPreference.Blocked,
            Tuesday: DailyPreference.Blocked,
            Wednesday: DailyPreference.ManualApprove,
            Thursday: DailyPreference.AutoApprove,
        }
    },
    UserWithoutDeskSettings: {
        assignedDesk: null
    },
}

export interface IUserSettings {
    assignedDesk: string | null;
    preferences?: IPreferences;
}

export interface IPreferences {
    Sunday?: DailyPreference;
    Monday: DailyPreference;
    Tuesday: DailyPreference;
    Wednesday: DailyPreference;
    Thursday: DailyPreference;
    Friday?: DailyPreference;
}