import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const CustomTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#1890ff',
    },
})(Tabs);
  
const CustomTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      minWidth: 0,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabSection() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <CustomTabs value={value} onChange={handleChange} aria-label="ant example">
                    <CustomTab label="All" />
                    <CustomTab label="Images" />
                    <CustomTab label="News" />
                    <CustomTab label="Videos" />
                    <CustomTab label="More" />
                </CustomTabs>
            </Grid>
            <Grid item xs={4}>
                <CustomTabs aria-label="ant example">
                    <CustomTab label="Settings" />
                    <CustomTab label="Tools" />
                </CustomTabs>
            </Grid>
        </Grid>
        </>
    )
}

export default TabSection
