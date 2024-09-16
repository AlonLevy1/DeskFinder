import React from "react";
import DeskComponent, { DeskStatus } from "./Desk";

export interface INeighborhoodProps {

}

export function Neighborhood(props: INeighborhoodProps) {
    const onClick = (deskName: string) => { 
        console.log("Desk clicked:", deskName); // TODO
    };

    return (
        <div style={{width: 700, padding: 30}}>
            <span>{"You’ve picked your neighborhood—now choose a desk that suits your needs. Explore available options and find the perfect spot to get to work!"}</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40, marginTop: 20 }}>
                <div style={{display: 'flex', flexDirection: 'row', gap: 40 }}>
                    <DeskComponent name="5B214_13" status={DeskStatus.Occupied} onClick={onClick}/>
                    <DeskComponent name="5B214_14" status={DeskStatus.Occupied} onClick={onClick}/>
                    <DeskComponent name="5B214_15" status={DeskStatus.Available} onClick={onClick}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: 40 }}>
                    <DeskComponent name="5B214_16" status={DeskStatus.Available} onClick={onClick}/>
                    <DeskComponent name="5B214_17" status={DeskStatus.Occupied} onClick={onClick}/>
                    <DeskComponent name="5B214_18" status={DeskStatus.Unknown} onClick={onClick}/>
                </div>
            </div>
        </div>
    );
}
