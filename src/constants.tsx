export const robotIPAddress = '10.31.40.2';

export const autonomousChooser = '/SmartDashboard/Path planner';

export const runningCommandEntry = '/Dashboard/commands_sa';
export const runningCommandStatusEntry = '/Dashboard/commandStatuses_ia';

export const botPose = '/SmartDashboard/Field/Robot';
export const cameraPose = '/SmartDashboard/Field/RobotCamera';

export const curVoltage = '/Dashboard/DS/voltage_d';
export const minVoltage = 10;

export const alliance = '/FMSInfo/IsRed';

export const gameStage = '/Dashboard/DS/state_s';

export const manOverride = '/Dashboard/Misc/driveManualMode_b';

// Reef Entries
// TODO: Implement Coral functionality in Robot Code & in reef component
export const coralEntry = '/Dashboard/coral'
export const gettingAlgaeEntry = '/ROBOTINFO/GettingAlgae';

// Camera Streams (MJPEG)
export const cameraStream0 = '/sensors3140/streams/Camera 0 Streaming Task/url';
export const cameraStream2 = '/sensors3140/streams/Camera 2 Streaming Task/url';

export const numLogged = '/Dashboard/Dev/numOLoggedCmds_i';

export const maxVelo = '/Dashboard/Dev/maxVelo_d'
export const botRotDeg = '/Dashboard/Dev/botRotDeg_d';
export const swerveMeasuredStates_sa = '/Dashboard/Dev/measuredStates_da';
export const swerveDesiredStates_sa = '/Dashboard/Dev/desiredStates_da';

// Dev Buttons
export const devSwerve = '/Dashboard/Dev/Swerve_b';
export const devAlgaeIntake = '/Dashboard/Dev/Algae Intake_b';
export const devEndEffector = '/Dashboard/Dev/End Effector_b';
export const devGroundIntake = '/Dashboard/Dev/Ground Intake_b';
export const devElevator = '/Dashboard/Dev/Elevator_b';
export const devAlgaeGroundIntake = '/Dashboard/Dev/Ground Handoff_b';
export const devSourceHandoff = '/Dashboard/Dev/Source Handoff_b';
export const devAlgaeReef = '/Dashboard/Dev/Algae Reef_b';
export const devAlgaeGround = '/Dashboard/Dev/Algae Ground_b';
