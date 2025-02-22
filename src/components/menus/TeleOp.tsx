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
import { alliance, botPose, cameraStream, curVoltage } from '../../constants';

const TeleOp: React.FC = () => {
    const [pose] = useEntry(botPose, [0, 0, 0]);

    const [voltage] = useEntry(curVoltage, 0.0);

    const fieldStyles: CSSProperties = {
        height: '35vh'
    };

    // TODO: update to the actual FMS info key & Decide if origin should change like it is currently
    let allianceRed = useEntry(alliance, true);

    return (
        <>
            <div style={{ position: 'absolute', left: '0', bottom: '50%', minWidth: 'fit-content', minHeight: 'fit-content', maxWidth: '50vw', transform: 'translate(0%, 50%)', marginLeft: '2%', display: 'flex' }}>
                <div style={{ paddingRight: '2%', margin: '0' }}>
                    <Canvas backgroundColor='rgba(0, 0, 0, 0.0)'>
                        <CanvasMjpgStream origin={[0, 0]} crosshairColor="white" srcs={[cameraStream]} />
                    </Canvas>
                </div>
                <div style={{ padding: '0', margin: '0' }}>
                    <Canvas backgroundColor='rgba(0, 0, 0, 0.0)'>
                        <CanvasMjpgStream origin={[0, 0]} crosshairColor="white" srcs={[cameraStream]} />
                    </Canvas>
                </div>
            </div>
            <div style={{ transformOrigin: 'center', transform: 'rotate(90deg) translate(-25%, -25%)', width: 'fit-content', height: 'fit-content', position: 'absolute', top: '50%', right: '8%' }}>
                <Field
                    style={fieldStyles}
                    cropLeft={0.1}
                    cropRight={0.9}
                    rotationUnit="deg"
                    origin={allianceRed ? 'red' : 'blue'}
                    rotation={allianceRed ? 0 : 180}
                >
                    <FieldRobot color={allianceRed ? 'red' : 'blue'} opacity={1} pose={pose} />
                </Field>
            </div>
            <ReefComponent />
            <div style={{ position: 'absolute', bottom: '4vh', left: '1vw', width: '25vw', margin: '1%' }}>
                <style>{`
                    .volt {
                        --frc-voltage-view-foreground-color:rgba(0, 255, 0, 0.2);
                        --frc-bar-background: #444;
                        --frc-bar-color: white;
                        --frc-axis-text-color: white;
                        width: 100%;
                    }
                `}</style>

                <VoltageView className='volt' value={voltage} min={0} max={13} numTickMarks={13} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, 0)', margin: '1%' }}>
                <BasicFmsInfo source-key="/FMSInfo" style={{ fontSize: '1.25vw' }} />
            </div>
        </>
    );
};

export default TeleOp;