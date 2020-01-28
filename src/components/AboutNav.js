import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: '#181B1B',
        textDecorationColor: '#bebebe',
        color: '#bebebe',
    },
});

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label={<span style={{ color: '#bebebe' }}>About</span>} />
                <Tab label={<span style={{ color: '#bebebe' }}>Key Terms</span>} />
                <Tab label={<span style={{ color: '#bebebe' }}>Explanation</span>} />
                <Tab label={<span style={{ color: '#bebebe' }}>Pitfalls</span>} />
                <Tab label={<span style={{ color: '#bebebe' }}>Conclusion</span>} />
            </Tabs>
        </Paper>
    );
}