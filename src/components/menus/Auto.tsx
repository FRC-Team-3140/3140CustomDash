import {
    useEntry,
    BasicFmsInfo,
    SendableChooser,
    Field,
    FieldRobot,
    VoltageView
} from '@frc-web-components/react';
import React, { CSSProperties } from 'react';
import { alliance, botPose, curVoltage } from '../../constants';

const Auto: React.FC = () => {
    const [pose] = useEntry(botPose, [0, 0, 0]);

    const [voltage] = useEntry(curVoltage, 0.0);

    const divStyles: CSSProperties = {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%'
    };

    const fieldStyles: CSSProperties = {
        position: 'absolute',
        bottom: '35%',
        left: '50%',
        transform: 'translate(-50%, 50%)'
    };

    let allianceRed = useEntry(alliance, true);

    return (
        <>
            <div style={divStyles}>
                <SendableChooser source-key="/Shuffleboard/Autonomous/SendableChooser[0]" style={{ width: '25vw', fontWeight: 'bold' }} />
                <BasicFmsInfo id="fmsInfo" source-key="/FMSInfo" style={{ width: '25vw', fontSize: '1.25vw' }} />
                <div style={{ width: '25vw' }} />
            </div>
            <Field
                style={fieldStyles}
                cropLeft={0.1}
                cropRight={0.9}
                rotationUnit="deg"
                origin={allianceRed ? 'red' : 'blue'}
                rotation={0}
            >
                <FieldRobot color={allianceRed ? 'red' : 'blue'} opacity={1} pose={pose} />
            </Field>
            <div style={{ position: 'absolute', bottom: '4vh', left: '1vw', width: '25vw', margin: '1%' }}>
                <style>{
                    `.volt {
                        --frc-voltage-view-foreground-color:rgba(0, 255, 0, 0.2);
                        --frc-bar-background: #444;
                        --frc-bar-color: white;
                        --frc-axis-text-color: white;
                        width: 100%;
                    }`
                }</style>

                <VoltageView className='volt' value={voltage} min={0} max={13} numTickMarks={13} />
            </div>
        </>
    );
};

export default Auto;