import {
    useEntry,
    BasicFmsInfo,
    SendableChooser,
    ToggleButton
} from '@frc-web-components/react';
import React, { CSSProperties } from 'react';

const Dev: React.FC = () => {

    const divStyles: CSSProperties = {
        display: 'flex',
        gap: '15px',
        alignItems: 'start'
    };

    const [swerveToggled, setSwerveToggled] = useEntry('/dashboard/swerveToggled', false);
    const [algaeIntakeToggled, setAlgaeIntakeToggled] = useEntry('/dashboard/algaeIntakeToggled', false);
    const [endEffectorToggled, setEndEffectorToggled] = useEntry('/dashboard/endEffectorToggled', false);
    const [groundIntakeToggled, setGroundIntakeToggled] = useEntry('/dashboard/groundIntakeToggled', false);
    const [elevatorToggled, setElevatorToggled] = useEntry('/dashboard/elevatorToggled', false);

    const fieldStyles: CSSProperties = {
        width: '500px',
        height: '300px'
    };

    return (
        <>
            <div style={divStyles}>
                <SendableChooser source-key="/Shuffleboard/Autonomous/SendableChooser[0]" />
                <BasicFmsInfo source-key="/FMSInfo" />
                <div />
            </div>
            {/* TODO: Fix Copilots mistakes with Networktables for the buttons below and add red/green styling for enable disable visual comfirmation */}
            <div style={fieldStyles}>
                <ToggleButton
                    style={{ margin: '1vh', padding: '1vh' }}
                    label="Test Swerve"
                    toggled={swerveToggled}
                    ontoggle={() => setSwerveToggled(!swerveToggled)} />
                <ToggleButton
                    label="Test Algae Intake"
                    toggled={algaeIntakeToggled}
                    ontoggle={() => setAlgaeIntakeToggled(!algaeIntakeToggled)} />
                <ToggleButton
                    label="Test End Effector"
                    toggled={endEffectorToggled}
                    ontoggle={() => setEndEffectorToggled(!endEffectorToggled)} />
                <ToggleButton
                    label="Test Ground Intake"
                    toggled={groundIntakeToggled}
                    ontoggle={() => setGroundIntakeToggled(!groundIntakeToggled)} />
                <ToggleButton
                    label="Test Elevator"
                    toggled={elevatorToggled}
                    ontoggle={() => setElevatorToggled(!elevatorToggled)} />
            </div>
        </>
    );
};

export default Dev;