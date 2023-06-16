import {SYSTEM_NAME, DASHBOARD_TITLE,} from '../config/constants.ts'
const Dashboard = () => {
  // set title
  document.title = DASHBOARD_TITLE + "|" + SYSTEM_NAME
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard