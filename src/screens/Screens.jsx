import React from 'react';
import Home from './Home';
import RegisterSystem from './registers/RegisterSystem';
import RegisterScreen from './registers/RegisterScreen';
import RegisterComponent from './registers/RegisterComponent';
import RegisterUser from './registers/RegisterUser';
import RequestRule from './requests/RequestRule';
import RequestTest from './requests/RequestTest';
import RequestEvent from './requests/RequestEvent';
import RequestReport from './requests/RequestReport';
import RequestInfrastructure from './requests/RequestInfrastructure';
import MonitoringTest from './monitoring/MonitoringTest';
import MonitoringRequest from './monitoring/MonitoringRequest';
import MonitoringInfrastructure from './monitoring/MonitoringInfrastructure';
import ReportRules from './reports/ReportRules';
import ReportTests from './reports/ReportTests';
import ReportEvents from './reports/ReportEvents';
import ReportRequests from './reports/ReportRequests';

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
