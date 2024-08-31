import { FormProvider } from "react-hook-form"
import Users from "./Users"
import { schema, Schema } from '../types/schema'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'


const UsersProvider = () => {
    const methods=useForm<Schema>({mode:'all',
        resolver:zodResolver(schema)
    })
  return (
    <FormProvider {...methods}>
        <Users/>
    </FormProvider>
  )
}

export default UsersProvider