import Head from 'next/head'
import React, { useState } from 'react'
import { Box,
  Typography,
  TextField,
  Button } from '@mui/material'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [apiId, setapiId] = useState("")
  const [apiHash, setapiHash] = useState("")
  const [phoneNumber, setphoneNumber] = useState("")
  const [apiIdError, setapiIdError] = useState(false)
  const [apiHashError, setapiHashError] = useState(false)
  const [phoneNumberError, setphoneNumberError] = useState(false)
  const submit = () => {
    setapiIdError(false)
    setapiHashError(false)
    setphoneNumberError(false)
    if (apiId == '') return setapiIdError(true);
    if (apiHash == '') return setapiHashError(true);
    if (phoneNumber == '') return setphoneNumberError(true);
    if(apiId && apiHash && phoneNumber) return console.log(apiId, apiHash, phoneNumber);
  }
  return (
    <React.Fragment>
      <Head>
        <title>Telegram Scrapper</title>
      </Head>
      <Box className={styles.container}>
        <Box className={styles.header}>
          <Typography className={styles.headerText}>Telegram Scrapper</Typography>
        </Box>
        <Box className={styles.content}>
          <Box className={styles.inputBox}>
            <Typography className={styles.apiId}>Enter Your API Id :-</Typography>
            <TextField className={styles.apiIdInput} id="outlined-apiId" label="Api Id" variant="outlined" value={apiId} onChange={(e) => {setapiId(e.target.value)}} error={apiIdError} sx={{ "& .MuiInputLabel-root": { color: 'white'}, "& .MuiOutlinedInput-root": { "& > fieldset": { border: '2px solid', borderColor: 'white'}}}} required/>
          </Box>
          <Box className={styles.inputBox}>
            <Typography className={styles.apiHash}>Enter Your API Hash :-</Typography>
            <TextField className={styles.apiHashInput} id="outlined-apiHash" label="Api Hash" variant="outlined" value={apiHash} onChange={(e) => {setapiHash(e.target.value)}} error={apiHashError}  sx={{ "& .MuiInputLabel-root": { color: 'white'}, "& .MuiOutlinedInput-root": { "& > fieldset": { border: '2px solid', borderColor: 'white'}}}} required/>
          </Box>
          <Box className={styles.inputBox}>
            <Typography className={styles.phoneNumber}>Enter Your Phone Number :-</Typography>
            <TextField className={styles.phoneInput} id="outlined-phoneInput" label="Phone Number" variant="outlined" value={phoneNumber} onChange={(e) => {setphoneNumber(e.target.value)}} error={phoneNumberError}  sx={{ "& .MuiInputLabel-root": { color: 'white'}, "& .MuiOutlinedInput-root": { "& > fieldset": { border: '2px solid', borderColor: 'white'}}}}required/>
          </Box>
          <Button variant="contained" sx={{ width: "150px"}} onClick={() => submit()}> Submit </Button>
        </Box>
      </Box>
    </React.Fragment>
  )
}
