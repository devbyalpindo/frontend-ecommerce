import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const TabContent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='w-full flex'>
      <Box sx={{ typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Semua Pesanan' value='1' />
              <Tab label='Belum Dibayar' value='2' />
              <Tab label='Sedang Dikirim' value='3' />
              <Tab label='Selesai' value='3' />
            </TabList>
          </Box>
          <TabPanel value='1'>Item One</TabPanel>
          <TabPanel value='2'>Item Two</TabPanel>
          <TabPanel value='3'>Item Three</TabPanel>
          <TabPanel value='4'>Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default TabContent;
