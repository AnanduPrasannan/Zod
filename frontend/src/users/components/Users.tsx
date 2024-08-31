import { Box, Stack, TextField} from '@mui/material'

import RHFAutocomplete from '../../components/RHFAutocomplete'
import { useFormContext } from 'react-hook-form'
import { Schema } from '../types/schema'


const Users=()=>{
  const {register,formState:{errors}}=useFormContext<Schema>()
    return(
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>

        <Stack sx={{gap:2,width:300,}}>
            <TextField  {...register('name')} label="name" error={!!errors.name} helperText={errors.name?.message}/>
            <TextField {...register('email')} label="email" error={!!errors.email} helperText={errors.email?.message}/>
            <RHFAutocomplete<Schema> name='states' />
        </Stack>
        </Box>
    )
}

export default Users