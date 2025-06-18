export default function Projects() {
    return <div className="mt-24">
        <div className="text-blue-500 text-2xl">
            Projects
        </div>
        
        <div className="text-white mt-4 text-slate-400">
            A collection of my word spanning from full stack application to standalone frontend 
            projects, both personal and professional.
        </div>

        <div className="flex flex-col">
            <Card 
            title="TextHood"
            color={1}
            description="Real-time chat application enabling users to exchange messages instantly."
            techstack={["WebSocket", "Nodejs", "Typescript", "PostgreSQL", "React"]}
              />

              <Card 
            title="ProctorFlow"
            color={2}
            description="A secure, malpractice-free online platform where teachers can upload MCQ files and administer tests to students.."
            techstack={["Nodejs", "Typescript", "PostgreSQL", "React", "Tailwind", "Express"]}
              />

              <Card 
            title="PayMe"
            color={0}
            description="Letting people send and receive money and make payments online."
            techstack={["Nodejs", "Javascript", "MongoDB", "React", "Express"]}
              />
        </div>
        
    </div>
}

function Card({title, color, description, techstack}: {title: string; color: number; description: string; techstack: string[];}) {

    let colors = [
        "hover:bg-gradient-to-r from-orange-600 via-amber-900 to-amber-950",
        "hover:bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900",
        "hover:bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400"
    ]

    
    return <div className={`mt-4 text-white pt-8 pl-8 pr-10 pb-8 rounded-xl bg-[#1a1a1a] transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-lg ${colors[color]} cursor-pointer`} >
        <div className="text-xl font-medium">
            {title}
        </div>

        <div className="mt-2">
            {description}
        </div>

        <div className="mt-4 flex flex-wrap gap-3 ">
            {techstack.map((value, idx) => (
                <Button key={idx} value={value} />
            ))}
        </div>
    </div>
}

function Button({value}: {value: string}) {
    return <div className="border flex flex-wrap px-2 py-1 font-semibold gap-3 text-xs rounded-md">
        {value}
    </div>
}
//bg -->#0f0c12