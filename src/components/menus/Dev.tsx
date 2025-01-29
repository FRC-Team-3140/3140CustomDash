import {
    useEntry,
    ToggleButton,
    Field,
    FieldRobot
} from '@frc-web-components/react';
import React, { CSSProperties, useEffect } from 'react';
import '../../devToggleBtn.css';

const Dev: React.FC = () => {

    const [pose] = useEntry('/SmartDashboard/Field/Robot', [0, 0, 0]);

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

    let allianceBlue = useEntry('/FMSInfo/IsBlue', true);

    const [swerveToggled, setSwerveToggled] = React.useState<boolean>(false);
    const [algaeIntakeToggled, setAlgaeIntakeToggled] = React.useState<boolean>(false);
    const [endEffectorToggled, setEndEffectorToggled] = React.useState<boolean>(false);
    const [groundIntakeToggled, setGroundIntakeToggled] = React.useState<boolean>(false);
    const [elevatorToggled, setElevatorToggled] = React.useState<boolean>(false);

    const [algaeGroundIntakeToggled, setAlgaeGroundIntakeToggled] = React.useState<boolean>(false);
    const [sourceHandoffToggled, setSourceHandoffToggled] = React.useState<boolean>(false);
    const [algaeReefToggled, setAlgaeReefToggled] = React.useState<boolean>(false);
    const [algaeGroundToggled, setAlgaeGroundToggled] = React.useState<boolean>(false);

    const [swerveEntry] = useEntry<boolean>('/Dashboard/Dev/Swerve', false);
    const [algaeIntakeEntry] = useEntry<boolean>('/Dashboard/Dev/Algae Intake', false);
    const [endEffectorEntry] = useEntry<boolean>('/Dashboard/Dev/End Effector', false);
    const [groundIntakeEntry] = useEntry<boolean>('/Dashboard/Dev/Ground Intake', false);
    const [elevatorEntry] = useEntry<boolean>('/Dashboard/Dev/Elevator', false);

    const [algaeGroundIntakeEntry] = useEntry<boolean>('/Dashboard/Dev/Ground Handoff', false);
    const [sourceHandoffEntry] = useEntry<boolean>('/Dashboard/Dev/Source Handoff', false);
    const [algaeReefEntry] = useEntry<boolean>('/Dashboard/Dev/Algae Reef', false);
    const [algaeGroundEntry] = useEntry<boolean>('/Dashboard/Dev/Algae Ground', false);

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
                        className="dark"
                        label="Test Swerve"
                        toggled={swerveToggled}
                        ontoggle={() => setSwerveToggled(!swerveToggled)}
                    />
                    <ToggleButton
                        className="dark"
                        label="Test Algae Intake"
                        toggled={algaeIntakeToggled}
                        ontoggle={() => setAlgaeIntakeToggled(!algaeIntakeToggled)} />
                    <ToggleButton
                        className="dark"
                        label="Test End Effector"
                        toggled={endEffectorToggled}
                        ontoggle={() => setEndEffectorToggled(!endEffectorToggled)} />
                    <ToggleButton
                        className="dark"
                        label="Test Ground Intake"
                        toggled={groundIntakeToggled}
                        ontoggle={() => setGroundIntakeToggled(!groundIntakeToggled)}> </ToggleButton>
                    <ToggleButton
                        className="dark"
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
                        className="dark"
                        label="Ground Handoff"
                        toggled={algaeGroundIntakeToggled}
                        ontoggle={() => setAlgaeGroundIntakeToggled(!algaeGroundIntakeToggled)}
                    />
                    <ToggleButton
                        className="dark"
                        label="Source Handoff"
                        toggled={sourceHandoffToggled}
                        ontoggle={() => setSourceHandoffToggled(!sourceHandoffToggled)} />
                    <ToggleButton
                        className="dark"
                        label="Algae Reef"
                        toggled={algaeReefToggled}
                        ontoggle={() => setAlgaeReefToggled(!algaeReefToggled)} />
                    <ToggleButton
                        className="dark"
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
                    <FieldRobot color={allianceBlue ? 'blue' : 'red'} opacity={1} pose={pose} />
                </Field>
            </div>
        </>
    );
};

export default Dev;