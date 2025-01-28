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
                        {`L${Math.floor(index / 2) + 1}`}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="reef-component">
            <img src={reefBackground} alt="Reef Background" style={{ width: '100%' }} />
            <div className="buttons">
                {renderButtons()}
            </div>
        </div>
    );
};

export default ReefComponent;
