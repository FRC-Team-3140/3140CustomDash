import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Auto from './menus/Auto';

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='fullWidth'
                    sx={{
                        '& .MuiTabs-textColorPrimary': { color: '#FFFFFF' },
                        '& .MuiTab-textColor': { color: '#FFFFFF' },
                        '& .MuiTab-root': { color: '#FFFFFF', fontSize: '1.5vw', fontWeight: 'bold', fontFamily: 'monospace' },
                        '& .Mui-selected': { color: '#FFFFFF', fontSize: '1.5vw', fontWeight: 'bold', fontFamily: 'monospace' },
                        '& .MuiTabs-indicator': { backgroundColor: '#FFFFFF' }
                    }}
                >
                    <Tab label="Auto" {...a11yProps(0)} />
                    <Tab label="TeleOp" {...a11yProps(1)} />
                    <Tab label="Dev" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Auto />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}
