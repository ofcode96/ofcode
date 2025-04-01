import { HeroParallax } from "@/components/ui/hero-parallax"
import products from "../projects/projects"
const Projects = () => {
   
   return (

      <section className="w-screen h-screen ">
         <HeroParallax
         header={{
            title: "An Overview of My Projects",
            subtitle: "Here are some of the projects I have worked on."
         }}
         products={products} />
      </section>

   )
}

export default Projects