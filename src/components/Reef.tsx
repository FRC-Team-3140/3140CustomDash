import { useState } from 'react';
import reefBackground from '../assets/reef.png';
import '../reef.css';

const ReefComponent = () => {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);

    const handleButtonClick = (index: number) => {
        setSelectedButton(index);
    };

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
        <div className="reef-component" style={{ position: 'relative' }}>
            <img src={reefBackground} alt="Reef Background" style={{ width: '100%' }} />
            <div className="buttons">
                {renderButtons()}
            </div>
        </div>
    );
};

export default ReefComponent;
