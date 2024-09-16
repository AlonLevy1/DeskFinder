import React from "react";
import { Button, Text, Badge } from "@fluentui/react-components";

export enum DeskStatus {
  Available = 'Available',
  Occupied = 'Occupied',
  Unknown = 'Unknown'
}

const DeskComponent = ({ name, status, onClick }: { name: string, status: DeskStatus, onClick: (deskName: string) => void }) => {
  return (
    <Button 
      onClick={() => onClick(name)} 
      disabled={status == DeskStatus.Occupied}
      style={{ display: 'flex', alignItems: 'center', padding: '25px', border: '1px solid #ccc' }}>
      <div style={{ flex: 1 }}>
        <Text>{name}</Text>
      </div>
      <Badge 
        color={status === DeskStatus.Available ? 'success' :  (status === DeskStatus.Occupied ? 'danger' : 'important')} 
        style={{ marginLeft: '10px', padding: '5px 5px', borderRadius: '12px' }}>
      </Badge>
    </Button>
  );
};

export default DeskComponent;