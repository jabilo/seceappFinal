import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function MultiTabs(props) {

    const { type,name,description,rules,contact } = props.contest;

    return (

        <Tabs sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}
            variant="scrollable"
            scrollbuttons="true"
            scrolling='false'
        >
            <TabList>
                <Tab>Description</Tab>
                <Tab>Rules</Tab>
                <Tab>Contact</Tab>
                <Tab>Registration</Tab>
            </TabList>

            <TabPanel>
            <h2>Quiz</h2>
                {description}
            </TabPanel>
            <TabPanel >
            <pre style={{"color" : "white", "textAlign" : "left"}}>
                {rules}
            </pre>
                
            </TabPanel>
            <TabPanel>
                {contact}
            </TabPanel>
            <TabPanel>
                <p> Register amt : 100</p>
                <button> Register here </button>
            </TabPanel>
    </Tabs>
    );
}