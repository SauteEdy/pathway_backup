

export default function Responsabilidades({Dados}){
    return (
      <div className="w-[600px] h-auto flex flex-col text-purple-900 mt-8">
        <h3 className="font-sans font-semibold text-2xl  ">Objetivo</h3>
        <ul className="list-disc ml-5 pt-5">
          {Dados.map((item, index) => (
            <li key={index}>{item}</li> 
          ))}
        </ul>
      </div>
    );
}