import Loader from '@/components/global/loader/index'


export default function Loading(){
    return (
        <div className="h-screen flex justify-center items-center">
            <Loader state={true}>...Loading</Loader>
         </div>
    )
}