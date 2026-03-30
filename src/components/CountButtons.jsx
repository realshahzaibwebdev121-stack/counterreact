import { MinusIcon,PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({setcount}){
    return(
        <>

       <div className="button-container">
        <button className="count-btn"  onClick={()=>{
            setcount(prev=> prev - 1)
            }}>
            <MinusIcon className="count-btn-icon" 
            />
        </button>
        <button className="count-btn" 
        onClick={()=>{
            setcount(prev=> prev + 1)
            }}>
            <PlusIcon className="count-btn-icon"/>
        </button>
      </div>
        </>
    )
}