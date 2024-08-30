import {z} from 'zod'

 export const schema=z.object({

   name:z.string().min(1,{message:"Atleast 1 character required"}),
   email:z.string().min(1,{message:"Email is required"})

})

export type Schema=z.infer<typeof schema>