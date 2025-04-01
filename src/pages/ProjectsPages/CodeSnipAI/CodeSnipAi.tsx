import CodeSnipAILogo from '@/assets/Code-Snip-AI.png';
import { ModeToggle } from '@/components/mode-toggle';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Ellipsis } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { Navigate, NavLink, Outlet, useLocation } from "react-router"
import { Helmet } from 'react-helmet-async';
import SeoWrapper from '@/components/seo-wrapper';



const CodeSnipAi = () => {
   const location = useLocation()

   if (location.pathname === "/projects/code-snip-ai/" || location.pathname === "/projects/code-snip-ai") {
      return <Navigate to={"/projects/code-snip-ai/landing"} />
   }
   return (
      <SeoWrapper>
         <main className="overflow-x-hidden w-screen h-screen ">
            <Helmet prioritizeSeoTags>
               <meta charSet="utf-8" />
               <title>Code Snip AI | Home</title>
               <link rel="icon" type="image/png" href="../../../assets/Code-Snip-AI.png" />
               <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>

            <CodeSnipAiNavbar />
            <Outlet />
            <CodeSnipAiFooter />
         </main>
      </SeoWrapper>
   )
}

export default CodeSnipAi

const menuItems = [
   {
      name: "Home",
      link: "/projects/code-snip-ai/landing",
   },
   {
      name: "Download",
      link: "/projects/code-snip-ai/download",
   },
   {
      name: "Vs Code",
      link: "https://marketplace.visualstudio.com/items?itemName=ofcode96.code-snip-ai"
   },
   {
      name: "Docs",
      link: "/projects/code-snip-ai/docs",
   }


]

const socialItems = [
   {
      name: "github",
      link: "https://github.com/ofcode96"
   },
   {
      name: "linkedin",
      link: "https://linkedin.com/ofcode96"
   },
   {
      name: "x",
      link: "https://x.com/ofcode96"
   }, {
      name: "youtube",
      link: "https://youtube.com/playlist?list=PLbf1GlpmmoGuVuXrtCIDviLDkP6Kl40YS&si=-3L_EbtQKXB63NQn"
   }
]

const CodeSnipAiNavbar = () => {
   return (
      <nav className="p-4 md:p-6 flex items-center justify-between bg-muted/10 absolute top-0 left-0 w-full z-50 backdrop-blur-xs ">
         <NavLink to={"/projects/code-snip-ai/landing"} id="codeSnipAiLogo" className='flex gap-1 items-center'>
            <img className="size-8 md:size-10" src={CodeSnipAILogo} />

         </NavLink>

         <section>
            <div id="mobile"
               className='md:hidden flex gap-2 items-center text-muted-foreground'
            >


               <Sheet>
                  <SheetTrigger asChild>
                     <Ellipsis />
                  </SheetTrigger>
                  <SheetContent className='w-full !h-full !bg-secondary/40'>
                     <div className='size-full flex justify-center items-center gap-4'>
                        <ul className='w-full space-y-4 text-center text-2xl'>
                           {
                              menuItems.map(({ link, name }) => (
                                 <li key={name} className='mx-auto w-[80%] after:w-full after:h-0.5 after:bg-primary/20 after:block after:mt-1 font-poppins '>
                                    <SheetClose asChild>
                                       <NavLink to={link} className='!text-white'>{name}</NavLink>
                                    </SheetClose>
                                 </li>
                              ))
                           }

                           <li>
                              <ModeToggle />
                           </li>

                           <li className='!text-white flex justify-center mt-8 gap-2'>
                              {
                                 socialItems.map(({ name, link }) => (
                                    <NavLink key={name} target='_blank' to={link}>
                                       <SocialIcon
                                          as='span'
                                          network={name} />
                                    </NavLink>))
                              }



                           </li>


                        </ul>
                     </div>
                  </SheetContent>
               </Sheet>



            </div>

            <div id="desktop"
               className='hidden md:flex items-center gap-4 pe-4'
            >


               <ul className='flex items-center gap-4'>
                  {
                     menuItems.map(({ link, name }) => (
                        <li key={name} className='ms-4 *:!text-black  dark:*:!text-white  py-2 px-4 rounded-3xl'>
                           <NavLink to={link} className=''>{name}</NavLink>
                        </li>
                     ))
                  }

                  <li className='mx-4'>
                     <ModeToggle />
                  </li>

                  <li className='text-white flex justify-center gap-2 '>
                     {
                        socialItems.map(({ name, link }) => (
                           <NavLink key={name} target='_blank' to={link}>
                              <SocialIcon as='span' className='!size-8 dark:grayscale '
                                 network={name} />
                           </NavLink>))
                     }


                  </li>

               </ul>

            </div>
         </section>
      </nav>
   )
}



const CodeSnipAiFooter = () => {
   return (


      <div className='mt-24'>
         <section className="bg-black">
            <div className="max-w-lg bg-black px-4 pt-24 py-8 mx-auto text-left md:max-w-none md:text-center">
               <h1 className=" font-extrabold leading-10 tracking-tight text-center text-white  sm:leading-none md:text-6xl text-4xl lg:text-7xl">
                  <span className="inline md:block">Join Us</span>
                  <span className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-300 md:inline-block">
                     We are
                     <span className="mx-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-400 to-purple-300">
                        Growing
                     </span>
                  </span>
               </h1>

            </div>
         </section>

         <hr className="text-white mx-5" />

         <footer className="bg-black pb-5">
            <div className="max-w-screen-xl px-4 pt-8 mx-auto sm:px-6 lg:px-8">
               <div className="sm:flex sm:items-center sm:justify-between">
                  <NavLink to="/" className="flex justify-center text-teal-300 sm:justify-start">
                     <img
                        className="rounded-full"
                        src="../../../../public/of.svg"
                        width="30"
                        height="30"
                        alt="ofCode"
                     />
                  </NavLink>
                  <p className="mt-4 text-sm text-center text-gray-400 lg:text-right lg:mt-0">
                     All Rights Reserved by ofCode &copy; {new Date().getFullYear()}
                  </p>
               </div>
            </div>
         </footer>
      </div>


   );
}
