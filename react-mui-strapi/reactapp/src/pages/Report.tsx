import { REPORT_TITLE } from '../config/constants'

const Report = () => {
  document.title = REPORT_TITLE
  return (
    <>
      <h1>Report</h1>
    </>
  )
}

export default Report