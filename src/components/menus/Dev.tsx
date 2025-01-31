import {
    useEntry,
    ToggleButton,
    Field,
    FieldRobot
} from '@frc-web-components/react';
import React, { CSSProperties, useEffect } from 'react';
import '../../devToggleBtn.css';
import { alliance, botPose, devAlgaeGround, devAlgaeGroundIntake, devAlgaeIntake, devAlgaeReef, devElevator, devEndEffector, devGroundIntake, devSourceHandoff, devSwerve } from '../../constants';

const Dev: React.FC = () => {

    const [pose] = useEntry(botPose, [0, 0, 0]);

    const divStyles: CSSProperties = {
        display: 'flex',
        gap: '15px',
        alignItems: 'center',
        alignSelf: 'center',
    };

    const fieldStyles: CSSProperties = {
        margin: '1%',
        width: '70vw',
    };

    let allianceRed = useEntry(alliance, true);

    const [swerveToggled, setSwerveToggled] = React.useState<boolean>(false);
    const [algaeIntakeToggled, setAlgaeIntakeToggled] = React.useState<boolean>(false);
    const [endEffectorToggled, setEndEffectorToggled] = React.useState<boolean>(false);
    const [groundIntakeToggled, setGroundIntakeToggled] = React.useState<boolean>(false);
    const [elevatorToggled, setElevatorToggled] = React.useState<boolean>(false);

    const [algaeGroundIntakeToggled, setAlgaeGroundIntakeToggled] = React.useState<boolean>(false);
    const [sourceHandoffToggled, setSourceHandoffToggled] = React.useState<boolean>(false);
    const [algaeReefToggled, setAlgaeReefToggled] = React.useState<boolean>(false);
    const [algaeGroundToggled, setAlgaeGroundToggled] = React.useState<boolean>(false);

    const [swerveEntry] = useEntry<boolean>(devSwerve, false);
    const [algaeIntakeEntry] = useEntry<boolean>(devAlgaeIntake, false);
    const [endEffectorEntry] = useEntry<boolean>(devEndEffector, false);
    const [groundIntakeEntry] = useEntry<boolean>(devGroundIntake, false);
    const [elevatorEntry] = useEntry<boolean>(devElevator, false);

    const [algaeGroundIntakeEntry] = useEntry<boolean>(devAlgaeGroundIntake, false);
    const [sourceHandoffEntry] = useEntry<boolean>(devSourceHandoff, false);
    const [algaeReefEntry] = useEntry<boolean>(devAlgaeReef, false);
    const [algaeGroundEntry] = useEntry<boolean>(devAlgaeGround, false);

    useEffect(() => {
        setSwerveToggled(swerveEntry);
        setAlgaeIntakeToggled(algaeIntakeEntry);
        setEndEffectorToggled(endEffectorEntry);
        setGroundIntakeToggled(groundIntakeEntry);
        setElevatorToggled(elevatorEntry);
        setAlgaeGroundIntakeToggled(algaeGroundIntakeEntry);
        setSourceHandoffToggled(sourceHandoffEntry);
        setAlgaeReefToggled(algaeReefEntry);
        setAlgaeGroundToggled(algaeGroundEntry);
    }, [swerveEntry, algaeIntakeEntry, endEffectorEntry, groundIntakeEntry, elevatorEntry, algaeGroundIntakeEntry, sourceHandoffEntry, algaeReefEntry, algaeGroundEntry]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'r') {
                setSwerveToggled(false);
                setAlgaeIntakeToggled(false);
                setEndEffectorToggled(false);
                setGroundIntakeToggled(false);
                setElevatorToggled(false);
                setAlgaeGroundIntakeToggled(false);
                setSourceHandoffToggled(false);
                setAlgaeReefToggled(false);
                setAlgaeGroundToggled(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <hr />
            <div style={{ ...divStyles, width: '100%', justifyContent: 'center' }}>
                <h2>Subsystem Tests</h2>
            </div>
            <hr />
            <div style={{ ...divStyles, width: '100%', justifyContent: 'center' }}>
                <div style={{ ...divStyles, width: '65vw', justifyContent: 'space-between' }}>
                    <ToggleButton
                        className="toggle"
                        label="Test Swerve"
                        toggled={swerveToggled}
                        ontoggle={() => setSwerveToggled(!swerveToggled)}
                    />
                    <ToggleButton
                        className="toggle"
                        label="Test Algae Intake"
                        toggled={algaeIntakeToggled}
                        ontoggle={() => setAlgaeIntakeToggled(!algaeIntakeToggled)} />
                    <ToggleButton
                        className="toggle"
                        label="Test End Effector"
                        toggled={endEffectorToggled}
                        ontoggle={() => setEndEffectorToggled(!endEffectorToggled)} />
                    <ToggleButton
                        className="toggle"
                        label="Test Ground Intake"
                        toggled={groundIntakeToggled}
                        ontoggle={() => setGroundIntakeToggled(!groundIntakeToggled)}> </ToggleButton>
                    <ToggleButton
                        className="toggle"
                        label="Test Elevator"
                        toggled={elevatorToggled}
                        ontoggle={() => setElevatorToggled(!elevatorToggled)} />
                </div>
            </div>
            <hr />
            <div style={{ ...divStyles, width: '100%', justifyContent: 'center' }}>
                <h2>Function Tests</h2>
            </div>
            <hr />
            <div style={{ ...divStyles, width: '100%', justifyContent: 'center' }}>
                <div style={{ ...divStyles, width: '65vw', justifyContent: 'space-between' }}>
                    <ToggleButton
                        className="toggle"
                        label="Ground Handoff"
                        toggled={algaeGroundIntakeToggled}
                        ontoggle={() => setAlgaeGroundIntakeToggled(!algaeGroundIntakeToggled)}
                    />
                    <ToggleButton
                        className="toggle"
                        label="Source Handoff"
                        toggled={sourceHandoffToggled}
                        ontoggle={() => setSourceHandoffToggled(!sourceHandoffToggled)} />
                    <ToggleButton
                        className="toggle"
                        label="Algae Reef"
                        toggled={algaeReefToggled}
                        ontoggle={() => setAlgaeReefToggled(!algaeReefToggled)} />
                    <ToggleButton
                        className="toggle"
                        label="Algae Ground"
                        toggled={algaeGroundToggled}
                        ontoggle={() => setAlgaeGroundToggled(!algaeGroundIntakeToggled)}> </ToggleButton>
                </div>
            </div>
            <hr />
            <div style={{ ...divStyles, width: '100%', justifyContent: 'center' }}>
                <Field
                    style={fieldStyles}
                    cropLeft={0.1}
                    cropRight={0.9}
                    rotationUnit="deg"
                    rotation={0}
                >
                    <FieldRobot color={allianceRed ? 'blue' : 'red'} opacity={1} pose={pose} />
                </Field>
            </div>
        </>
    );
};

export default Dev;