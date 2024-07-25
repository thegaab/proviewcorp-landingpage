import { CheckCircle2 } from "lucide-react"
import CertificationImg from "../assets/Certifications.jpg"
import { checklistItems } from "../constants"

const Certifications = () => {
  return (
    <div className="mt-20" id="certifications">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6">
            Nossas
            <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text">
                {" "}certificações.
            </span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
                <img className="rounded-md mt-14" src={CertificationImg} alt="Nossos certificados" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item, index)=>(
                    <div key={index} className="flex mb-6">
                        <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2/>
                        </div>
                        <div className="">
                            <h5 className="mt-1 mb-1 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Certifications