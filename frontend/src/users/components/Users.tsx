import {useForm} from 'react-hook-form'
import {Stack, TextField} from '@mui/material'
import { schema, Schema } from '../types/schema'
import {zodResolver} from '@hookform/resolvers/zod'


const Users=()=>{
    const {register}=useForm<Schema>({mode:'all',
        resolver:zodResolver(schema)
    })
    return(
        <Stack sx={{gap:2}}>
            <TextField {...register('name')} label="name" />
            <TextField {...register('email')} label="email"/>
        </Stack>
    )
}

export default Users