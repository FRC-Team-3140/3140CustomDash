export const robotIPAddress = '10.31.40.2';

// TODO: Update these paths as needed
export const collectionChooser = '/SmartDashboard/collection';
export const climbChooser = '/SmartDashboard/climb';

export const runningCommandEntry = '/Dashboard/commands_sa';
export const runningCommandStatusEntry = '/Dashboard/commandStatuses_ia';

export const botPose = '/SmartDashboard/Field/Robot';
export const avgCameraPose = '/Dashboard/Dev/cameraPose_ad';
export const frontCameraPose = '/Dashboard/Dev/frontCameraPose_ad';
export const backCameraPose = '/Dashboard/Dev/backCameraPose_ad';

export const curVoltage = '/Dashboard/DS/voltage_d';
export const minVoltage = 8;

export const alliance = '/FMSInfo/IsRedAlliance';

export const gameStage = '/Dashboard/DS/state_s';

export const manOverride = '/Dashboard/Misc/driveModeManual_b';
export const fieldOriented = '/Dashboard/Misc/fieldOriented_b';

// Camera Streams (MJPEG)
export const cameraStream0 = 'http://photonvision.local:1181/stream.mjpg';
export const cameraStream1 = 'http://photonvision.local:1182/stream.mjpg';
export const cameraStream2 = 'http://photonvision.local:1183/stream.mjpg';

export const cameraStream0Proc = 'http://photonvision.local:1182/stream.mjpg';
export const cameraStream1Proc = 'http://photonvision.local:1183/stream.mjpg';
export const cameraStream2Proc = 'http://photonvision.local:1184/stream.mjpg';
export const numLogged = '/Dashboard/Dev/numOLoggedCmds_i';

export const maxVelo = '/Dashboard/Dev/maxVelo_d'
export const botRotDeg = '/Dashboard/Dev/botRotDeg_d';
export const swerveMeasuredStates_sa = '/Dashboard/Dev/measuredStates_da';
export const swerveDesiredStates_sa = '/Dashboard/Dev/desiredStates_da';

// Dev Buttons
export const devSwerve = '/Dashboard/Dev/Swerve_b';
export const devTurret = '/Dashboard/Dev/Turret_b';
export const devClimber = '/Dashboard/Dev/Climber_b';