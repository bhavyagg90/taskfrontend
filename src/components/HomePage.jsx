import React, { useEffect, useState } from 'react'
import Login from "../components/Auth/Login"
import SignUp from "../components/Auth/SignUp"
import { Box, color, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const style = {
  box: {
    boxShadow: "5px 3px 4px 2px #ccc",
    color: "black",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "white",
    width: "100%",
    margin: "40px 0 15px 0",
    borderRadius: "10px",
    borderWidth: "1px"
  },
  mainBox: {
    boxShadow: "5px 3px 4px 2px #ccc",
    color: "black",
    padding: "10px",
    backgroundColor: "white",
    width: "100%",
    margin: "40px 0 15px 0",
    borderRadius: "10px",
    borderWidth: "1px"
  },
  text: {
    fontWeight: "700",
    fontSize: "20px",


  },
  card: {
    backgroundColor: "#fff"
  }
}
function HomePage() {
  const [show, shetShow] = useState(false)
  const history = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfo'))
    if (user) {
      history('/home')
    }
   

  }, [history])
  return (
    <Container
      style={style.card}
      maxW="xl" centerContent>
      <Box className='box' style={style.mainBox}>
        <Tabs variant='soft-rounded'>
          <TabList mb={"1em"}>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Container>
  )
}

export default HomePage