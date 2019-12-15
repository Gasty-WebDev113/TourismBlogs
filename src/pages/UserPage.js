import React from 'react'
import {UserInfo} from '../components/UserInfo'

export const UserPage = ({match})=>{

    console.log(match)
    const Info = match.params.id

    return <UserInfo username={Info}/>
}