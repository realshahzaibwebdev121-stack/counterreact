import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset({setcount}){
    return(
        <>
        <button className="reset-btn" onClick={() => setcount(0)}>
            <ResetIcon  className="reset-btn-icon"/>
        </button>
        </>
    )
}