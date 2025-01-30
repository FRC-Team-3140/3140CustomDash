import {
    useEntry,
    BasicFmsInfo,
    SendableChooser,
    Field,
    FieldRobot
} from '@frc-web-components/react';
import React, { CSSProperties } from 'react';

const Auto: React.FC = () => {
    const [pose] = useEntry(botPose, [0, 0, 0]);

    const divStyles: CSSProperties = {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
    };

    const fieldStyles: CSSProperties = {
        transformOrigin: 'top left',
        transform: 'scale(2)',
        position: 'absolute',
        top: '50%',
        left: '50%'
    };

    let allianceRed = useEntry(alliance, true);

    return (
        <>
            <div style={divStyles}>
                <SendableChooser source-key="/Shuffleboard/Autonomous/SendableChooser[0]" style={{ width: '25vw', fontWeight: 'bold' }} />
                <BasicFmsInfo source-key="/FMSInfo" style={{ width: '25vw', fontSize: '1.25vw' }} />
                <div style={{ width: '25vw' }} />
            </div>
            <Field
                style={fieldStyles}
                cropLeft={0.1}
                cropRight={0.9}
                rotationUnit="deg"
                rotation={90}
            >
                <FieldRobot color={allianceRed ? 'blue' : 'red'} opacity={1} pose={pose} />
            </Field>
        </>
    );
};

export default Auto;