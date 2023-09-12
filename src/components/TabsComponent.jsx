import {
    ProgressBar,
    Card,
    Flex,
    Text,
    Metric,
    TabList,
    Tab,
    TabGroup,
    TabPanels,
    TabPanel,
    Title,
} from "@tremor/react";

import { Bars3Icon, ChartPieIcon} from "@heroicons/react/24/solid";
import DonutChartComponent from "./DonutChartComponent";
import ScoreListComponent from "./ScoreListComponent";
const TabsComponent = () => {
    return (
        <Card className="w-full">

            <TabGroup>
                
                    <Title>Overview</Title>
                    <TabList className="mt-8">
                        <Tab icon={ChartPieIcon}>Chart</Tab>
                        <Tab icon={Bars3Icon}>List</Tab>
                    </TabList>
                    <Title className="my-3">Sales in cities</Title>
                <TabPanels>
                    <TabPanel>
                        <DonutChartComponent />
                    </TabPanel>
                    <TabPanel>
                        <ScoreListComponent />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </Card>
    )
}

export default TabsComponent
