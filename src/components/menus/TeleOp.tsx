import {
    useEntry,
    BasicFmsInfo,
    Field,
    FieldRobot,
    Canvas,
    CanvasMjpgStream,
    VoltageView
} from '@frc-web-components/react';
import React, { CSSProperties } from 'react';
import ReefComponent from '../Reef';
import { alliance, botPose, curVoltage } from '../../constants';

const TeleOp: React.FC = () => {
    const [pose] = useEntry(botPose, [0, 0, 0]);

    const [voltage] = useEntry(curVoltage, 0.0);

    const fieldStyles: CSSProperties = {
        transformOrigin: 'top left',
        transform: 'scale(2)',
        position: 'absolute',
        top: '14%',
        left: '47%'
    };

    // TODO: update to the actual FMS info key & Decide if origin should change like it is currently
    let allianceRed = useEntry(alliance, true);

    return (
        <>
            <div style={{ minWidth: 'fit-content', minHeight: 'fit-content', maxWidth: '50vw', maxHeight: '80%' }}>
                <div>
                    <Canvas backgroundColor='rgba(0, 0, 0, 0.0)'>
                        <CanvasMjpgStream origin={[0, 0]} crosshairColor="white" srcs={['SmartDashboard/Camera']} />
                    </Canvas>
                </div>
                <br />
                <div>
                    <Canvas backgroundColor='rgba(0, 0, 0, 0.0)'>
                        <CanvasMjpgStream origin={[0, 0]} crosshairColor="white" srcs={['SmartDashboard/Camera']} />
                    </Canvas>
                </div>
            </div>
            <Field
                style={fieldStyles}
                cropLeft={0.1}
                cropRight={0.9}
                rotationUnit="deg"
                origin={allianceRed ? 'red' : 'blue'}
                rotation={allianceRed ? 270 : 90}
            >
                <FieldRobot color={allianceRed ? 'red' : 'blue'} opacity={1} pose={pose} />
            </Field>
            <ReefComponent />
            <div style={{ position: 'absolute', bottom: '4vh', left: '1vw', width: '25vw', margin: '1%' }}>
                <style>{`
                    .dark {
                        --frc-voltage-view-foreground-color:rgba(0, 255, 0, 0.2);
                        --frc-bar-background: #444;
                        --frc-bar-color: white;
                        --frc-axis-text-color: white;
                        width: 100%;
                    }
                `}</style>

                <VoltageView className='dark' value={voltage} min={0} max={13} numTickMarks={13} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, 0)', margin: '1%' }}>
                <BasicFmsInfo source-key="/FMSInfo" style={{ fontSize: '1.25vw' }} />
            </div>
        </>
    );
};

export default TeleOp;