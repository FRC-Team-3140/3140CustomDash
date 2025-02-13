import { useState, useEffect } from 'react';
import reefBackground from '../assets/reef.png';
import '../reef.css';
import { useEntry } from '@frc-web-components/react';
import { coralEntry, gettingAlgaeEntry } from '../constants';

const ReefComponent = () => {
    const [gettingAlgae] = useEntry(gettingAlgaeEntry, false);

    // TODO: Most likely won't need to use the reef entry for any logic on the dashboard side
    // The robot will have to check to see if it should get algae and update the networktables 
    // accordingly. The goal is if the selected position is in L2 or L3 then it can get algae, 
    // otherwise it will ignore because there can't be an algate there. - TK
    const [_, setReefPosition] = useEntry(coralEntry, '');

    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const handleButtonClick = (index: number) => {
        setSelectedButton(index);
    };

    useEffect(() => {
        if (selectedButton != null) {
            const position = `L${4 - Math.floor(selectedButton / 2)}_${selectedButton % 2 === 0 ? 'L' : 'R'}`;
            setReefPosition(position);
        }
    }, [selectedButton]);

    useEffect(() => {
        const keyMappings = [0, 2, 4, 6, 1, 3, 5, 7];

        const handleKeyPress = (event: KeyboardEvent) => {
            const key = parseInt(event.key, 10);
            if (key >= 1 && key <= 8) {
                handleButtonClick(keyMappings[key - 1]);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const renderButtons = () => {
        return (
            <div className="buttons-container">
                {Array.from({ length: 8 }).map((_, index) => (
                    <button
                        key={index}
                        className={`reef-button ${selectedButton === index ? 'green' : ''}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {`L${4 - Math.floor(index / 2)}`}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div style={{ maxWidth: '15vw', position: 'absolute', top: '12%', right: '0' }}>
            <div className="reef-component" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '100%' }}>
                    <img src={reefBackground} alt="Reef Background" style={{ width: '100%' }} />
                </div>
                <div className="buttons">
                    {renderButtons()}
                </div>
            </div>
            <div style={{ textAlign: 'center', maxWidth: '15vw', height: '10vh', marginTop: '20px' }}>
                <h2 style={{ fontSize: '2vw', width: '100%', color: gettingAlgae ? 'green' : 'transparent' }}>Getting Algae</h2>
            </div>
        </div>
    );
};

export default ReefComponent;
