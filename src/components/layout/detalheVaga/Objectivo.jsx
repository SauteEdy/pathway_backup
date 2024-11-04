

export default function Objectivo({Texto}){
    return(
        <div className="w-[600px] h-auto flex flex-col text-purple-900">
            <h3 className="font-sans font-semibold text-2xl  ">Objetivo</h3>
            <p className="font-normal pt-5">{Texto}</p>
        </div>
    )
}