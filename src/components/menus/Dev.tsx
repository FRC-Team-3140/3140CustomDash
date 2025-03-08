import {
    useEntry,
    ToggleButton,
    Field,
    FieldRobot,
    Logger,
    Swerve,
} from '@frc-web-components/react';
import React, { CSSProperties, useEffect } from 'react';
import '../../devToggleBtn.css';
import { alliance, botPose, avgCameraPose, frontCameraPose, backCameraPose, devAlgaeGround, devAlgaeGroundIntake, devAlgaeIntake, devAlgaeReef, devElevator, devEndEffector, devGroundIntake, devSourceHandoff, devSwerve, runningCommandEntry, runningCommandStatusEntry, numLogged, swerveMeasuredStates_sa, swerveDesiredStates_sa, botRotDeg, maxVelo, devElevatorHome } from '../../constants';

const Dev: React.FC = () => {

    const [pose] = useEntry(botPose, [0, 0, 0]);
    const [avgCamPose] = useEntry(avgCameraPose, [0, 0, 0]);
    const [frontCamPose] = useEntry(frontCameraPose, [0, 0, 0]);
    const [backCamPose] = useEntry(backCameraPose, [0, 0, 0]);

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
    const [elevatorHomeToggled, setElevatorHomeToggled] = React.useState<boolean>(false);

    const [swerveValue, swerveEntry] = useEntry<boolean>(devSwerve, false);
    const [algaeIntakeValue, algaeIntakeEntry] = useEntry<boolean>(devAlgaeIntake, false);
    const [endEffectorValue, endEffectorEntry] = useEntry<boolean>(devEndEffector, false);
    const [groundIntakeValue, groundIntakeEntry] = useEntry<boolean>(devGroundIntake, false);
    const [elevatorValue, elevatorEntry] = useEntry<boolean>(devElevator, false);

    const [algaeGroundIntakeValue, algaeGroundIntakeEntry] = useEntry<boolean>(devAlgaeGroundIntake, false);
    const [sourceHandoffValue, sourceHandoffEntry] = useEntry<boolean>(devSourceHandoff, false);
    const [algaeReefValue, algaeReefEntry] = useEntry<boolean>(devAlgaeReef, false);
    const [algaeGroundValue, algaeGroundEntry] = useEntry<boolean>(devAlgaeGround, false);
    const [elevatorHomeValue, elevatorHomeEntry] = useEntry<boolean>(devElevatorHome, false);

    useEffect(() => {
        setSwerveToggled(swerveValue);
        setAlgaeIntakeToggled(algaeIntakeValue);
        setEndEffectorToggled(endEffectorValue);
        setGroundIntakeToggled(groundIntakeValue);
        setElevatorToggled(elevatorValue);
        setAlgaeGroundIntakeToggled(algaeGroundIntakeValue);
        setSourceHandoffToggled(sourceHandoffValue);
        setAlgaeReefToggled(algaeReefValue);
        setAlgaeGroundToggled(algaeGroundValue);
        setElevatorHomeToggled(elevatorHomeValue);
    }, [swerveValue, algaeIntakeValue, endEffectorValue, groundIntakeValue, elevatorValue, algaeGroundIntakeValue, sourceHandoffValue, algaeReefValue, algaeGroundValue, elevatorHomeValue]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'r') {
                // States 
                setSwerveToggled(false);
                setAlgaeIntakeToggled(false);
                setEndEffectorToggled(false);
                setGroundIntakeToggled(false);
                setElevatorToggled(false);
                setAlgaeGroundIntakeToggled(false);
                setSourceHandoffToggled(false);
                setAlgaeReefToggled(false);
                setAlgaeGroundToggled(false);
                setElevatorHomeToggled(false);

                // Networktable Entries
                swerveEntry(false);
                algaeIntakeEntry(false);
                endEffectorEntry(false);
                groundIntakeEntry(false);
                elevatorEntry(false);
                algaeGroundIntakeEntry(false);
                sourceHandoffEntry(false);
                algaeReefEntry(false);
                algaeGroundEntry(false);
                elevatorHomeEntry(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const runningCommand = useEntry(runningCommandEntry, [])[0];
    const runningCommandStatus = useEntry(runningCommandStatusEntry, [])[0];

    const [numOLoggedCmds, setNumOLoggedCmds] = useEntry(numLogged, 50);

    useEffect(() => {
        // 0 - ended, 1 - running, 2 - interrupted
        if (runningCommand.length > 0) {
            const commandsLog = document.getElementById('commandsLog');

            if (commandsLog) {
                commandsLog.innerHTML = '';
                for (let i = 0; i < runningCommand.length; i++) {
                    const commandElement = document.createElement('p');
                    commandElement.textContent = `${runningCommand[i]}`;
                    commandElement.style.color = runningCommandStatus[i] === 0 ? 'white' : (runningCommandStatus[i] === 1 ? 'green' : 'red');
                    commandElement.style.margin = '1vh';
                    commandsLog.appendChild(commandElement);
                }
            }

            if (commandsLog) {
                commandsLog.scrollTop = commandsLog.scrollHeight;
            }
        }
    }, [runningCommand, runningCommandStatus]);

    const [botRotate, setBotRotate] = React.useState<boolean>(true);

    useEffect(() => {
        console.log(botRotate);
    }, [botRotate]);

    const [maxSpeed] = useEntry(maxVelo, 0.0);
    const [botRot] = useEntry(botRotDeg, 0.0);
    const [measured] = useEntry(swerveMeasuredStates_sa, [0, 0, 0, 0, 0, 0, 0, 0]);
    const [desired] = useEntry(swerveDesiredStates_sa, [0, 0, 0, 0, 0, 0, 0, 0]);

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
                        ontoggle={() => { setSwerveToggled(!swerveToggled); swerveEntry(!swerveToggled) }} />
                    <ToggleButton
                        className="toggle"
                        label="Test Algae Intake"
                        toggled={algaeIntakeToggled}
                        ontoggle={() => { setAlgaeIntakeToggled(!algaeIntakeToggled); algaeIntakeEntry(!algaeIntakeToggled) }} />
                    <ToggleButton
                        className="toggle"
                        label="Test End Effector"
                        toggled={endEffectorToggled}
                        ontoggle={() => { setEndEffectorToggled(!endEffectorToggled); endEffectorEntry(!endEffectorToggled) }} />
                    <ToggleButton
                        className="toggle"
                        label="Test Ground Intake"
                        toggled={groundIntakeToggled}
                        ontoggle={() => { setGroundIntakeToggled(!groundIntakeToggled); groundIntakeEntry(!groundIntakeToggled) }} />
                    <ToggleButton
                        className="toggle"
                        label="Test Elevator"
                        toggled={elevatorToggled}
                        ontoggle={() => { setElevatorToggled(!elevatorToggled); elevatorEntry(!elevatorToggled) }} />
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
                        ontoggle={() => { setAlgaeGroundIntakeToggled(!algaeGroundIntakeToggled); algaeGroundIntakeEntry(!algaeGroundIntakeToggled) }} />
                    <ToggleButton
                        className="toggle"
                        label="Source Handoff"
                        toggled={sourceHandoffToggled}
                        ontoggle={() => { setSourceHandoffToggled(!sourceHandoffToggled); sourceHandoffEntry(!sourceHandoffToggled) }} />
                    <ToggleButton
                        className="toggle"
                        label="Algae Reef"
                        toggled={algaeReefToggled}
                        ontoggle={() => { setAlgaeReefToggled(!algaeReefToggled); algaeReefEntry(!algaeReefToggled) }} />
                    <ToggleButton
                        className="toggle"
                        label="Algae Ground"
                        toggled={algaeGroundToggled}
                        ontoggle={() => { setAlgaeGroundToggled(!algaeGroundToggled); algaeGroundEntry(!algaeGroundToggled) }} />
                    <ToggleButton
                        className="toggle"
                        label="Home Elevator"
                        toggled={elevatorHomeToggled}
                        ontoggle={() => { setElevatorHomeToggled(!elevatorHomeToggled); elevatorHomeEntry(!elevatorHomeToggled) }} />
                </div>
            </div>
            <hr />
            <div style={{ ...divStyles, width: '100%', justifyContent: 'center' }}>
                <Field
                    style={fieldStyles}
                    cropLeft={0.1}
                    cropRight={0.9}
                    rotationUnit="deg"
                    origin="blue"
                    rotation={0}
                >
                    <FieldRobot color={allianceRed ? 'red' : 'blue'} opacity={1} pose={pose} />
                    <FieldRobot color={'orange'} opacity={0.5} pose={avgCamPose} />
                    <FieldRobot color={'green'} opacity={0.5} pose={frontCamPose} />
                    <FieldRobot color={'yellow'} opacity={0.5} pose={backCamPose} />
                </Field>
            </div>
            <hr />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label htmlFor="numberInput" style={{ marginBottom: '5px', color: 'white' }}>Commands to log:</label>
                <input
                    id="numberInput"
                    type="number"
                    defaultValue={numOLoggedCmds}
                    onChange={(e) => setNumOLoggedCmds(Number(e.target.value))}
                    style={{ textAlign: 'center', width: '8vw', color: 'white', backgroundColor: 'black', border: '1px solid white', borderRadius: '5px' }}
                />
            </div>
            <div style={{ ...divStyles, width: '100%', justifyContent: 'center', margin: '4vh 0 4vh 0' }}>
                <div id='commandsLog' style={{ height: '50vh', width: '40vw', backgroundColor: 'black', border: '1px solid white', borderRadius: '5px', maxHeight: '50vh', overflow: 'auto', fontFamily: 'monospace', color: 'white', padding: '1vw' }}>
                    {/* VV Will get cleared when the network tables connect and commands are sent accross VV */}
                    <p>=== Commands Log ===</p>
                </div>
                <div style={{ height: '50vh', width: '40vw', backgroundColor: 'black', border: '1px solid white', borderRadius: '5px', maxHeight: '50vh', overflow: 'auto', fontFamily: 'monospace', color: 'white', padding: '1vw' }}>
                    <Logger title="Robot Logger" maxLogCount={numOLoggedCmds} level="debug" />
                </div>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
                <h2 style={{ position: 'absolute', left: '50%', transform: 'translate(-50%, 0)' }}>{botRotate ? botRot : 0} deg</h2>
                <ToggleButton label='Allow Bot Rotate' style={{ width: '10vw', marginLeft: '65%' }} toggled={botRotate} ontoggle={() => setBotRotate(!botRotate)} />
            </div>
            <div style={divStyles}>
                <div style={{ ...divStyles, width: '100%', justifyContent: 'center', margin: '4vh 0 4vh 0' }}>
                    <Swerve moduleCount={4} wheelLocations={[1, 1, 1, -1, -1, 1, -1, -1]} measuredStates={measured} desiredStates={desired} robotRotation={botRotate ? botRot : 0} maxSpeed={maxSpeed} rotationUnit="degrees" sizeLeftRight={4} sizeFrontBack={4} />
                </div>
            </div>
        </>
    );
};

export default Dev;