import { BackgroundLines } from "@/components/ui/background-lines"
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router";

const Home = () => {
  return (
    <BackgroundLines 
  
    className="flex items-center justify-center w-screen h-screen flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
       ofCode Home Page is Not Ready
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
       As You See This Page Is Under Construction
      </p>
      <Button className="mt-4 z-20">
        <NavLink to="/projects" className="!text-white">You Can See My Projects 💪</NavLink>
      </Button>
    </BackgroundLines>
  )
}

export default Home