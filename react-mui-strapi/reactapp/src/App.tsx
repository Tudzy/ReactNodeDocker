// import { Button, Stack } from "@mui/material"
// import {Delete, Send, Photo} from '@mui/icons-material'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import Login from "./pages/Login"
import BackendLayout from "./layouts/BackendLayout"
import Dashboard from "./pages/Dashboard"
import Product from './pages/Product'
import Report from "./pages/Report"
import Setting from "./pages/Setting"
import { DASHBOARD_PATH, PRODUCT_PATH, REPORT_PATH, SETTING_PATH } from './config/constants'

function App() {
  // return (
  //   <>
  //     <h1>MUI Button</h1>
  //     <Stack spacing={2} direction={"row"}>
  //       <Button variant="text">Text</Button>
  //       <Button variant="contained">Contained</Button>
  //       <Button variant="outlined">Outlined</Button>
  //     </Stack>

  //     <h1>MUT Button with Icons</h1>
  //     <Stack spacing={2} direction={"row"}>
  //       <Button variant="text" startIcon={<Delete/>}>Delete</Button>
  //       <Button variant="contained" startIcon={<Send/>}>Send</Button>
  //       <Button variant="outlined" startIcon={<Photo/>}>Photo</Button>
  //     </Stack>
  //   </>
  // )

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<BackendLayout />}>
          <Route path={DASHBOARD_PATH} element={<Dashboard />} />
          <Route path={PRODUCT_PATH} element={<Product />} />
          <Route path={REPORT_PATH} element={<Report />} />
          <Route path={SETTING_PATH} element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )


}

export default App
