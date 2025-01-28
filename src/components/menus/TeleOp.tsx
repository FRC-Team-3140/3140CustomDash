import {
    useEntry,
    BasicFmsInfo,
    Field,
    FieldRobot,
    Canvas,
    CanvasMjpgStream,
} from '@frc-web-components/react';
import React, { CSSProperties } from 'react';
import ReefComponent from '../Reef';

const TeleOp: React.FC = () => {
    const [pose] = useEntry('/SmartDashboard/Field/Robot', [0, 0, 0]);

    const divStyles: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    };

    const fieldStyles: CSSProperties = {
        transformOrigin: 'top left',
        transform: 'scale(2)',
        position: 'absolute',
        top: '50%',
        left: '20%'
    };

    let allianceBlue = useEntry('/FMSInfo/IsBlue', true);

    return (
        <>
            <div style={divStyles}>
                <BasicFmsInfo source-key="/FMSInfo" style={{ width: '25vw', fontSize: '1.25vw' }} />
            </div>
            <Canvas backgroundColor='#111015'>
                <CanvasMjpgStream origin={[0, 0]} crosshairColor="white" srcs={['SmartDashboard/Camera']} />
            </Canvas>
            <Field
                style={fieldStyles}
                cropLeft={0.1}
                cropRight={0.9}
                rotationUnit="deg"
                rotation={90}
            >
                <FieldRobot color={allianceBlue ? 'blue' : 'red'} opacity={1} pose={pose} />
            </Field>
            <ReefComponent />
        </>
    );
};

export default TeleOp;