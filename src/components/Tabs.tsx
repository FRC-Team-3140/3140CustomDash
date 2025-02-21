import * as React from 'react';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CSSProperties, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Auto from './menus/Auto';
import TeleOp from './menus/TeleOp';
import Dev from './menus/Dev';
import { useEntry } from '@frc-web-components/react';
import { gameStage } from '../constants';

function CustomTabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#4d4dff',
            },
            secondary: {
                main: '#f44336',
            },
        },
    });

    let allianceBlue = true;

    const [value, setValue] = React.useState(0);

    const handleChange = (_event: any, newValue: React.SetStateAction<number>) => {
        setValue(newValue);
    };

    const [gameStageValue] = useEntry(gameStage, "");

    useEffect(() => {
        switch (gameStageValue) {
            case "AUTO":
                setValue(0);
                break;
            case "TELEOP":
                setValue(1);
                break;
            case "Dev":
                setValue(2);
                break;
            default:
                break;
        }
    }, [gameStageValue]);

    const tabPanelStyles: CSSProperties = {
        height: 'fit-content',
        width: '100%'
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: '100vw', height: '100vh', margin: '0', padding: '0' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant='fullWidth'
                        textColor={allianceBlue ? 'primary' : 'secondary'}
                        indicatorColor={allianceBlue ? 'primary' : 'secondary'}
                    >
                        <Tab label="Auto" {...a11yProps(0)} sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '2vw', color: 'white', backgroundColor: 'rgba(0, 0, 0, .3)' }} />
                        <Tab label="TeleOp" {...a11yProps(1)} sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '2vw', color: 'white', backgroundColor: 'rgba(0, 0, 0, .3)' }} />
                        <Tab label="Dev" {...a11yProps(2)} sx={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '2vw', color: 'white', backgroundColor: 'rgba(0, 0, 0, .3)' }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0} style={tabPanelStyles}>
                    <Auto />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1} style={tabPanelStyles}>
                    <TeleOp />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2} style={tabPanelStyles}>
                    <Dev />
                </CustomTabPanel>
            </Box>
        </ThemeProvider>
    );
}
