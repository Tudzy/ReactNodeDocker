import { SETTING_TITLE } from '../config/constants'

const Setting = () => {
  document.title = SETTING_TITLE
  return (
    <>
      <h1>Setting</h1>
    </>
  )
}

export default Setting