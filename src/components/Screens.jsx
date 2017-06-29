import React from 'react';
import Home from './screens/Home';
import RegisterSystem from './screens/registers/RegisterSystem';
import RegisterScreen from './screens/registers/RegisterScreen';
import RegisterComponent from './screens/registers/RegisterComponent';
import RegisterUser from './screens/registers/RegisterUser';
import RequestRule from './screens/requests/RequestRule';
import RequestTest from './screens/requests/RequestTest';
import RequestEvent from './screens/requests/RequestEvent';
import RequestReport from './screens/requests/RequestReport';
import RequestInfrastructure from './screens/requests/RequestInfrastructure';
import MonitoringTest from './screens/monitoring/MonitoringTest';
import MonitoringRequest from './screens/monitoring/MonitoringRequest';
import MonitoringInfrastructure from './screens/monitoring/MonitoringInfrastructure';
import ReportRules from './screens/reports/ReportRules';
import ReportTests from './screens/reports/ReportTests';
import ReportEvents from './screens/reports/ReportEvents';
import ReportRequests from './screens/reports/ReportRequests';

class Screens extends React.Component {
  render() {
    return (
        <div>
          <Home />
          <RegisterSystem />
          <RegisterScreen />
          <RegisterComponent />
          <RegisterUser />

          <RequestRule />
          <RequestTest />
          <RequestEvent />
          <RequestReport />
          <RequestInfrastructure />

          <MonitoringTest />
          <MonitoringRequest />
          <MonitoringInfrastructure />

          <ReportRules />
          <ReportTests />
          <ReportEvents />
          <ReportRequests />

        </div>
    );
  }
}

export default Screens
