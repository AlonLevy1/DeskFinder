
export enum DailyPreference {
    AutoApprove = "AutoApprove",
    ManualApprove = "ManualApprove",
    Blocked = "Blocked"
}

export const Mock = {
    UserWithDeskSettings: {
        assignedDesk: "5B214_16",
        preferences: {
            sunday: DailyPreference.AutoApprove,
            monday: DailyPreference.Blocked,
            tuesday: DailyPreference.Blocked,
            wednesday: DailyPreference.ManualApprove,
            thursday: DailyPreference.AutoApprove,
        }
    },
    UserWithoutDeskSettings: {
        assignedDesk: null
    },
}

export interface IUserSettings {
    assignedDesk: string | null;
    preferences: {
        sunday?: DailyPreference,
        monday: DailyPreference,
        tuesday: DailyPreference,
        wednesday: DailyPreference,
        thursday: DailyPreference,
        friday?: DailyPreference
    }
}