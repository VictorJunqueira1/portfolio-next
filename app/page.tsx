import { CarouselPlugin } from "@/components/ShadCN/CarouselPlugin";
import { Coins, Database, File, Github, Globe, Headphones, Linkedin, Smartphone } from "lucide-react";
import Image from "next/image";
import { projects } from "./utils/projects";

export default function Home() {
  return (
    <div className="flex-wrap">
      <div className="bg-gradient-to-r from-neutral-950 to-neutral-900 w-screen">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between text-white h-24">
            <h1 className="hover:text-green-500 hover:shadow-sm text-lg transition duration-300 ease-in">Portfólio</h1>
            <ul className="flex flex-row gap-12 text-lg">
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300 ease-in">Início</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300 ease-in">Sobre</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300 ease-in">Habilidades</a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition duration-300 ease-in">Contato</a>
              </li>
            </ul>
          </nav>

          <section style={{ height: "calc(100vh - 96px)" }} className="w-full flex justify-center items-start flex-col relative">
            <div className="flex flex-col gap-2 -mt-24">
              <h4 className="font-light text-white text-2xl">Olá!</h4>
              <h1 className="text-white font-semibold text-5xl">Eu sou desenvolvedor...</h1>
              <p className="font-light text-white text-2xl">Especializado em Sites Responsivos</p>
              <div className="gap-6 flex">
                <a href="https://www.linkedin.com/in/victor-junqueira-789004281/" className=" hover:border-green-500 w-36 shadow-md hover:shadow-stone-700 border-gray-400 hover:bg-black border-2 transition-all ease-in-out duration-500 hover:text-white h-12 flex justify-center items-center color-white rounded-sm bg-transparent text-white text-lg gap-4"> <div className=""> <Linkedin> </Linkedin></div>  LinkedIn</a>
                <a href="https://github.com/VictorJunqueira1" className=" hover:border-green-500 w-36 shadow-md hover:shadow-stone-700 border-gray-400 border-2 hover:bg-black transition-all ease-in-out duration-500 hover:text-white h-12 flex justify-center items-center color-white rounded-sm bg-transparent text-white text-lg gap-4"> <div> <Github></Github> </div>Github</a>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 text-white flex gap-6">
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-md font-light">victorjunqueira.prog@gmail.com</p>
              </div>
              <div className="h-18 w-0.5 bg-white"></div>
              <div>
                <h3 className="text-lg font-semibold">Telefone</h3>
                <p className="text-md font-light">+55 (19) 99716-8299</p>
              </div>
              <div className="h-18 w-0.5 bg-white"></div>
              <div>
                <h3 className="text-lg font-semibold">Localização</h3>
                <p className="text-md font-light">Mogi-Guaçu, SP</p>
              </div>
            </div>
          </section>
        </div>

        <section className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12">
            <div className="text-white w-1/3 ">
              <img src="/img/Profile.jpeg" alt="Perfil do Autor" className="w-full h-96 object-cover" />
            </div>

            <div className="text-white w-2/3 ml-12">
              <h2 className="text-green-500 text-xl mb-2">Sobre mim</h2>
              <h1 className="font-semibold text-2xl mb-2">Eu sou Victor Junqueira, sou desenvolvedor front-end...</h1>
              <p>Olá! Meu nome é Victor Gustavo Junqueira, e estou trilhando meu caminho no empolgante mundo da tecnologia. Ainda estou nos estágios iniciais da minha carreira, sem experiência profissional direta na área, mas trago comigo um conjunto robusto de habilidades técnicas desenvolvidas através do meu curso tecnólogo em Análise e Desenvolvimento de Sistemas na ETEC Pedro Ferreira Alves, além de aprimoramento contínuo por meio de cursos na plataforma B7WEB, focada em desenvolvimento web e mobile.</p>
              <div className="h-0.5 w-full bg-green-500 my-6"></div>

              <div className="grid grid-cols-2 mb-6 gap-3">
                <h3 className="text-white"><strong>Nome: </strong>Victor Junqueira</h3>
                <h3 className="text-white"><strong>Idade: </strong>17 anos</h3>
                <h3 className="text-white"><strong>Email: </strong>victorjunqueira.prog@gmail.com</h3>
                <h3 className="text-white"><strong>Telefone: </strong>+55 (19) 99716-8299</h3>
              </div>

              <a href="#" className="px-4 py-2 color-white rounded-sm bg-green-500 text-black w-max text-lg">Download CV</a>

            </div>
          </div>
        </section>
        <section className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-3xl font-semibold">Meus Serviços</h1>
              <div className="grid grid-cols-3 gap-4 my-4">
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Globe className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Desenvolvimento Web</h1>
                  <p>Plataformas on-line, lojas virtuais e blogs.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Smartphone className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Desenvolvimento Mobile</h1>
                  <p>Aplicativos educacionais, plataformas de gerenciamento de conteúdo e entretenimento.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Database className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Banco de Dados</h1>
                  <p>Gerenciar e construir esquemas de bancos de dados relacionais e não relacionais.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Headphones className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Suporte</h1>
                  <p>Atendimento ao cliente dedicado e especializado.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <File className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Documentação e Artigos</h1>
                  <p>Desenvolvimento de artigos de pesquisas e editais.</p>
                </div>
                <div className="bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700">
                  <Coins className="text-green-500 w-12 h-12" />
                  <h1 className="text-2xl font-semibold my-2">Vendas</h1>
                  <p>Alavanque sua unidade de negócio com técnicas de vendas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-3xl font-semibold">Tecnologias</h1>
              <div className="grid grid-cols-6 gap-4 my-4">
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/javascript.png"} alt="" />
                  <p className="text-xl">Javascript</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/typescript.png"} alt="" />
                  <p className="text-xl">Typescript</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={100} height={100} src={"/img/react.png"} alt="" />
                  <p className="text-xl">ReactJS</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/next.png"} alt="" />
                  <p className="text-xl">NextJS</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={90} height={90} src={"/img/tailwind.png"} alt="" />
                  <p className="text-xl">TailwindCSS</p>
                </div>
                <div className="h-full w-full bg-neutral-900 p-8 rounded-md shadow-sm shadow-neutral-700 flex flex-col gap-4 items-center justify-center">
                  <Image width={65} height={65} src={"/img/sql.png"} alt="" />
                  <p className="text-xl">SQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-neutral-950 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-3xl font-semibold">Projetos</h1>
              <div className="flex items-center justify-center flex-col my-4">
                <CarouselPlugin projects={projects} />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-neutral-900 h-max">
          <div className="mx-auto max-w-7xl flex flex-row py-12 text-white">
            <div className="w-full h-full">
              <h1 className="text-5xl">Contato</h1>
              <p className="mt-6 text-xl flex-col flex">Bem-vindo à seção de contato! <span className="mt-1">Se gostou do meu trabalho, é só me chamar!  </span></p>
              <div className="mt-10">
                <form action="" className="">
                  <div>
                    Nome:
                    <input type="password" placeholder="Insira sua senha" className="p-2 mt-2 flex flex-col bg-transparent border-b hover:border-green-500 text-white focus:border-green-500 focus:outline-none mb-10" />
                  </div>
                  <div>
                    Sobrenome:
                    <input type="password" placeholder="Insira sua senha" className="p-2 mt-2 flex flex-col bg-transparent border-b hover:border-green-500 text-white focus:border-green-500 focus:outline-none mb-10" />
                  </div>
                  <div>
                    Email:
                    <input type="email" placeholder="Insira seu email" className="p-2 mt-2 flex flex-col bg-transparent border-b hover:border-green-500 text-white focus:border-green-500 focus:outline-none mb-10" />
                  </div>
                  <div>
                    Senha:
                    <input type="password" placeholder="Insira sua senha" className="p-2 mb-10 mt-2 flex flex-col bg-transparent border-b hover:border-green-500 text-white focus:border-green-500 focus:outline-none " />
                  </div>
                </form>
                <a href="#" className="w-36 border-gray-400 hover:border-green-700 hover:bg-neutral-950 shadow-md hover:shadow-stone-700 border-2 transition-all ease-in-out duration-500 hover:text-white h-12 flex justify-center items-center color-white rounded-sm bg-transparent text-white text-lg gap-4">Enviar</a>
              </div>
            </div>
          </div>
        </section>
        <nav>
          <footer className="bg-neutral-950 text-white py-6 flex-wrap">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center">
                <div className="text-lg">
                  <p>© 2024 Victor Junqueira. Todos os direitos reservados.</p>
                </div>
                <div className="text-lg">
                  <p>Contato: <a href="mailto:victorjunqueira.prog@gmail.com" className="text-white transition duration-500 hover:text-green-500">victorjunqueira.prog@gmail.com</a></p>
                </div>
                <div>
                  <a href="#" className="text-white transition duration-500 mx-2 hover:text-green-500">Página Inicial</a>
                  <a href="https://www.linkedin.com/in/victor-junqueira-789004281/" className="text-white transition duration-500 mx-2 hover:text-green-500">LinkedIn</a>
                  <a href="https://github.com/VictorJunqueira1" className="text-white transition duration-500 mx-2 hover:text-green-500">GitHub</a>
                </div>
              </div>
            </div>
          </footer>
        </nav>
      </div>
    </div>
  );
}

// Linha na área de tecnologias
// Projetos, Carousel
// Área de Contato

// Funcionalidades de Rolagem (cabeçalho)
// Reescrita no desenvolvedor
// Rever textos escritos
// Responsividade