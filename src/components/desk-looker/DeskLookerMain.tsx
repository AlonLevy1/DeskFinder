import React from "react";
import { Button } from "@fluentui/react-components";
import { Neighborhood } from "./Neighborhood";

export function DeskLookerMain() {
    const [showNeighborhood, setShowNeighborhood] = React.useState(false);
    const lookForTable = () => {
        // Implement save logic here
        setShowNeighborhood(true);
        console.log("Book a desk!:"); // TODO
    };

    return showNeighborhood ? 
        <Neighborhood /> : 
        <>
            <div style={{width: "100%", padding: 30 }}>
                <p style={{ margin: 0 }}>Looking for a desk to work from? Find a space that's available and ready for you to use.</p>
                <p style={{ margin: 0 }}>Please be considerate and leave the desk clean and organized for the next person.</p>
                <p style={{ margin: 0 }}>Make sure to remove any personal items, dispose of trash properly, and tidy up the area before you go.</p>
                <p style={{ margin: 0 }}>Your cooperation ensures a pleasant and efficient workspace for everyone.</p>
                <footer style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
                    {/* Add dropdown to select neighborhood */}
                    <Button onClick={lookForTable} appearance="primary">Book a desk!</Button>
                </footer>
            </div>
        </>;
        
}
