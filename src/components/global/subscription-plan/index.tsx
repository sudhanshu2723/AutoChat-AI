import React from "react"



type Props={
    type:'FREE' | 'PRO'
    children:React.ReactNode
}

export default function SubscriptionPlan({type,children}:Props) {

    return (
        children
    )

}