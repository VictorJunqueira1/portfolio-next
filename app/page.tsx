export default function Home() {
  return (
    <div>
      <div className="bg-stone-800 w-screen">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between text-white h-24">
            <h1>Portfólio</h1>
            <ul className="flex flex-row gap-12 text-lg">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Habilidades</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>

          <section className="w-full h-dynamic flex justify-center items-start flex-col relative">
            <div className="flex flex-col gap-2 -mt-24">
              <h4 className="font-light text-white text-2xl">Olá!</h4>
              <h1 className="text-white font-semibold text-5xl">Eu sou desenvolvedor...</h1>
              <p className="font-light text-white text-2xl">Especializado em Sites Responsivos</p>
              <a href="#" className="px-4 py-2 color-white bg-emerald-600 text-white w-max text-lg">Fale comigo</a>
            </div>

            <div className="absolute bottom-10 left-0 text-white flex gap-6">
              <div>
                <h5>Email</h5>
                <p>victorjunqueira.prog@gmail.com</p>
              </div>
              <div className="h-18 w-0.5 bg-white"></div>
              <div>
                <h5>Telefone</h5>
                <p>+55 (19) 99716-8299</p>
              </div>
              <div className="h-18 w-0.5 bg-white"></div>
              <div>
                <h5>Localização</h5>
                <p>Mogi-Guaçu, SP</p>
              </div>
            </div>
          </section>

          <section className="flex flex-row bg-black w-full">
            <div className="text-white 1/3">
              ...
            </div>
            
            <div className="text-white 2/3 bg-red-500">
              ...
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}
