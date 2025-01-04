import { usePathname } from "next/navigation";



export default function usePaths(){
    const pathname=usePathname();
    const paths=pathname.split("/");
    const page=paths[paths.length-1];
    return {pathname,page};
}