import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FlipWords } from "@/components/ui/flip-words"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { useTheme } from "@/hooks/useTheme"
import AppleOriginal from "devicons-react/lib/icons/AppleOriginal"
import LinuxOriginal from "devicons-react/lib/icons/LinuxOriginal"
import Windows11Original from "devicons-react/lib/icons/Windows11Original"
import { motion } from "framer-motion"
import { Bot, Component, Container, Download, Gem } from "lucide-react"
import CodeSnipAILogo from '@/assets/Code-Snip-AI.png';
import { NavLink } from "react-router"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import GridLines from 'react-gridlines';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import { Tabs } from "@/components/ui/tabs-motion"
import { memo } from "react"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import ReactPlayer from 'react-player'
import {Helmet} from "react-helmet-async";

const URL_PROMO = "https://youtu.be/ULaUKhFM0qU"
const CodeSnipAILanding = () => {
   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Code Snip AI | Home</title>
            
         </Helmet>

         <CodeSnipAiHero />
         <CodeSnipAiShowcase />
         <CodeSnipAiFeatures />
         <CodeSnipAiScreens />

      </>
   )
}

export default CodeSnipAILanding



const CodeSnipAiHero = memo(() => {
   const { theme } = useTheme()
   const isDark = theme === 'dark'

   return (

      <GridLines className="pt-[40%] md:pt-[10%] w-full  grid-area place-items-center relative" cellWidth={200} strokeWidth={1} cellWidth2={550} lineColor={
         isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.2)"
      } >


         <ShootingStars
            starWidth={30}
            starHeight={5}
            className='rotate-180'
         />

         <section className='size-full grid place-items-center relative'>
            <div className='absolute z-5 '>
               <img className='size-[30em] blur-[10em] opacity-30  animate-pulse animate-ease-in-out aspect-square' src={CodeSnipAILogo} />
            </div>
            <div className='z-10 md:max-w-[50%] mx-auto'>
               <NavLink to="/projects/code-snip-ai/docs" replace>
                  <Button className=' mx-auto !px-10 h-[40px] !rounded-3xl flex items-center gap-2 !justify-start !bg-slate-400/10 text-black hover:!bg-gradient-to-r hover:!from-indigo-500 hover:!via-purple-500 hover:!to-pink-500 hover:text-white'>
                     <Container size={50} className='size-[20px] dark:text-white' />
                     <span className='text-lg font-light font-poppins dark:text-white'>
                        Read Our Docs
                     </span>
                  </Button>
               </NavLink>
               <div className='mt-8 md:mt-[1.25em] text-4xl md:text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 max-w-full text-center '>
                  <span>Build</span>
                  <FlipWords words={["Better", "Prettier", "Cleaner", "Easier", "Beautiful"]} className='px-0 ms-2.5  font-bold overflow-hidden w-auto max-h-[1.5em]' />
                  <br />
                  <span>Code Snippets with AI</span>
               </div>
               <p className='mt-2 md:mt-8 font-extralight font-poppins text-xl md:text-3xl text-neutral-600 dark:text-neutral-400 max-w-full text-center'>
                  Power up your code with Code Snippets with AI
               </p>
               <div className='mt-10 md:mt-16 flex flex-wrap justify-center items-center gap-4'>
                  <NavLink to="/projects/code-snip-ai/download" >
                     <Button className='!bg-purple-500 text-white !rounded-xl !text-2xl !py-2 !px-6 h-[50px]'>
                        <Download className='size-[1.5rem]' />
                        <span>Download </span>
                     </Button>

                  </NavLink>
                  <Dialog>
                     <DialogTrigger asChild >
                        <Button className='!bg-slate-500/40 text-white !rounded-xl !text-2xl !py-2 !px-6 h-[50px]'>
                           <Gem className='size-[1.5rem]' />
                           <span>Watch Us</span>
                        </Button>
                     </DialogTrigger>
                     <DialogContent className="!p-4 !min-w-1/2">
                        <ReactPlayer
                           url={URL_PROMO}
                           playing
                           wrapper={({ children }) => <div className="relative aspect-video">{children}</div>}
                        />
                     </DialogContent>
                  </Dialog>
               </div>
            </div>
         </section>
      </GridLines>

   )
})


const CodeSnipAiShowcase = () => {
   return (
      <motion.section className='py-[5em] md:py-[18em]'>
         <div className='text-4xl text-center space-y-2 pb-10'>
            <h2 className='font-bold text-6xl'>Code Snippets with AI</h2>
            <p> Make your code snippests with AI </p>
         </div>
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: .5, } }}
            className='p-1 mx-auto'>
            <BackgroundGradient containerClassName='w-11/12 md:w-8/12 mx-auto'>
               <img
                  src='https://raw.githubusercontent.com/ofcode96/code-snip-ai-release/refs/heads/main/code%20snip%20ai%20screeb%20shoot.PNG'
                  className='rounded-2xl w-full h-full '
               />
            </BackgroundGradient>
         </motion.div>



      </motion.section>
   )
}


const CodeSnipAiFeatures = () => {

   return (
      <section className='mt-[5%] h-auto pb-[20vh] w-11/12 md:w-8/12 mx-auto  relative'>
         <motion.div
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[550px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full  blur-[11em] opacity-60' />

         <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-2">
            <div className='size-full !max-h-[400px] relative  overflow-clip group p-1 rounded-[15px] transition-all duration-300 ease-in-out'>
               <div
                  className='hidden absolute -inset-1 rounded-[15px]  bg-gradient-to-tr from-transparent via-indigo-600/50 to-transparent group-hover:block group-hover:animate-spin-slow group-hover:blur-[5px]'
               />

               <Card

                  className="!bg-gradient-to-r !from-black/10 !via-yellow !to-violet-600/20 backdrop-blur-2xl !rounded-[15px] shadow-2xs border border-primary/80 relative px-3 h-full z-5 ">

                  <CardContent className=''>
                     <div className='text-start space-y-4 '>
                        <h2 className='font-bold text-2xl w-full opacity-100'>Code Snippets with AI</h2>
                        <p className='text-sm text-start   text-card-foreground/50   !w-full'>
                           powered by artificial intelligence, transforms your coding experience with smart features. It generates, refactors, and formats code effortlessly while creating stunning, shareable screenshots.


                        </p>
                     </div>
                     <div className='grid place-items-center relative mt-4'>
                        <Component strokeWidth={1} className='size-[100px]' />
                     </div>
                  </CardContent>
               </Card>

            </div>


            <div className='size-full !max-h-[400px] relative  overflow-clip group p-1 rounded-[15px] transition-all duration-300 ease-in-out'>
               <div
                  className='hidden absolute -inset-1 rounded-[15px]  bg-gradient-to-tr from-transparent via-indigo-600/50 to-transparent group-hover:block group-hover:animate-spin-slow group-hover:blur-[5px]'
               />
               <Card className="!bg-gradient-to-l !from-black/10 !via-yellow !to-violet-600/20 backdrop-blur-2xl !rounded-[15px] shadow-2xs border border-primary/80 relative px-3 h-full z-5">
                  <CardContent className=''>
                     <div className='text-start space-y-4 '>
                        <h2 className='font-bold text-2xl w-full opacity-100'>Simple To Use , Powerful To Code</h2>
                        <p className='text-sm text-start   text-card-foreground/50   !w-full'>
                           lets you capture code screenshots, customize them with themes and icons, and export them as images. Its AI also generates, refactors, and formats code instantly.



                        </p>
                     </div>
                     <div className='grid place-items-center relative mt-4'>
                        <Bot strokeWidth={1} className='size-[100px]' />
                     </div>
                  </CardContent>
               </Card>

            </div>

            <div className='md:col-span-2 size-full !min-h-[250px] relative  overflow-clip group p-1 rounded-[15px] transition-all duration-300 ease-in-out'>
               <div
                  className='hidden absolute -inset-1 rounded-[15px]  bg-gradient-to-tr from-transparent via-indigo-600/50 to-transparent group-hover:block group-hover:animate-spin-slow group-hover:blur-[5px]'
               />
               <Card className="!bg-radial-[at_40%_90%]  !from-black/10 !via-yellow !to-violet-600/30 backdrop-blur-2xl !rounded-[15px] shadow-2xs border border-primary/80 relative px-3 h-full z-5 max-w-full">
                  <CardContent className='flex flex-col md:!flex-row justify-between items-center'>
                     <div className='text-start space-y-4 '>
                        <h2 className='font-bold text-2xl w-full opacity-100'>Support Multi Platform</h2>
                        <p className='text-sm text-start   text-card-foreground/50 md:max-w-1/2   !w-full'>
                           Code Snip AI supports multiple platforms, enabling you to create and customize code screenshots seamlessly across different environments.


                        </p>
                     </div>
                     <div className='grid relative gap-4 mt-4 w-[250px]'>
                        <Button variant={"default"} className='!bg-indigo-600 text-white w-full hover:!bg-indigo-600 focus-visible:!border-none aria-invalid:!outline-none focus-visible:!ring-0 !outline-0'>
                           <Windows11Original className='me-1' /> Windows
                        </Button>
                        <Button disabled className='!bg-indigo-600 text-white w-full'><AppleOriginal className='me-1' /> MacOs</Button>
                        <Button disabled className='!bg-indigo-600 text-white w-full'><LinuxOriginal className='me-1' /> Linux</Button>
                     </div>
                  </CardContent>
               </Card>

            </div>




         </div>

      </section>
   )
}



const tabs = [
   {
      title: "Darg & Drop",
      value: "darg-drop",
      content: (
         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-900 to-slate-900">
            <p>Drag & Drop</p>
            <img
               src="https://github.com/ofcode96/code-snip-ai-release/blob/main/screen-shots/drag%20and%20drop.gif?raw=true"
               alt="Code Snip AI Drag & Drop"
               width="1000"
               height="1000"
               className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />

         </div>
      ),
   },
   {
      title: "Themes",
      value: "Themes",
      content: (
         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-900 to-slate-900">
            <p>Themes</p>
            <img
               src="https://github.com/ofcode96/code-snip-ai-release/blob/main/screen-shots/editor%20themes.gif?raw=true"
               alt="dummy image"
               width="1000"
               height="1000"
               className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
         </div>
      ),
   },
   {
      title: "Vs Code Extension",
      value: "vs-code-extension",
      content: (
         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-900 to-slate-900">
            <p>Vs Code Extension</p>
            <img
               src="https://github.com/ofcode96/code-snip-ai-release/blob/main/screen-shots/Vs%20code.gif?raw=truehttps://github.com/ofcode96/code-snip-ai-release/blob/main/screen-shots/Vs%20code.gif?raw=true"
               alt="dummy image"
               width="1000"
               height="1000"
               className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
         </div>
      ),
   },
   {
      title: "AI",
      value: "ai",
      content: (
         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-900 to-slate-900">
            <p>AI</p>
            <img
               src="https://github.com/ofcode96/code-snip-ai-release/blob/main/screen-shots/AI%20uses.gif?raw=true"
               alt="dummy image"
               width="1000"
               height="1000"
               className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
         </div>
      ),
   },

];

const CodeSnipAiScreens = () => {
   return (

      <motion.div
         initial={{ opacity: 0, scale: 0.5 }}
         whileInView={{ opacity: 1, scale: 1, transition: { duration: .5, } }}
         className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
         <Tabs
            containerClassName='gap-4 flex-wrap h-[250px] md:h-auto justify-center w-full'
            contentClassName='mt-10 w-10/12 md:w-full !mx-auto inset-0 !min-h-[250px]'
            tabClassName="!bg-slate-400/70 !text-foreground hover:bg-slate-800/70 hover:text-white"
            activeTabClassName="!bg-purple-700/70 !text-white"

            tabs={tabs} />
      </motion.div>

   )
}
