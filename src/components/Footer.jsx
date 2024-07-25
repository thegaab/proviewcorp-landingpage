import { importantLinks, contactLinks, socialsLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700" >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4" id="contact-section">
            <div>
                <h3 className="text-md font-semibold mb-4">Redes Sociais</h3>
                <ul className="space-y-2">
                    {socialsLinks.map((link, index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-md font-semibold mb-4">Contato</h3>
                <ul className="space-y-2">
                    {contactLinks.map((link, index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-md font-semibold mb-4">Dados importantes</h3>
                <ul className="space-y-2">
                    {importantLinks.map((link, index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer