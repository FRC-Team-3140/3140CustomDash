import { useState, useEffect } from 'react';
import reefBackground from '../assets/reef.png';
import '../reef.css';

const ReefComponent = () => {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const handleButtonClick = (index: number) => {
        setSelectedButton(index);
    };

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
        <div style={{width: '15vw', position: 'absolute', top: '12%', right: '0', border: '1px solid white'}}>
            <div className="reef-component" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <img src={reefBackground} alt="Reef Background" style={{ width: '100%' }} />
                </div>
                <div className="buttons">
                    {renderButtons()}
                </div>
            </div>
            <span style={{position: 'absolute', top: '10%', }}>
                <div style={{ textAlign: 'center', width: '15vw', height: '10vh', marginTop: '20px' }}>
                    <h2 style={{ fontSize: '3vw' }}>Getting Algae</h2>
                </div>
            </span>
        </div>
    );
};

export default ReefComponent;
