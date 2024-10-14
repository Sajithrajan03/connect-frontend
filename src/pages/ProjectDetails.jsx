//IMAGE IMPORT USE ACTUAL BG LATER
import b1 from "../assets/b1.jpeg";

// ICONS IMPORT
import { FaReact, FaNodeJs, FaEye } from "react-icons/fa";
import { TbProgressBolt } from "react-icons/tb";
import { SiTypescript, SiMongodb } from "react-icons/si";

export default function ProjectDetails() {
  return (
    <div>
      <div className="flex flex-col container mx-auto">
        <div
          className="h-[500px] rounded-2xl shadow-2xl"
          style={{
            backgroundImage: `url(${b1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="h-[500px] rounded-2xl flex flex-col justify-center shadow-2xl"
            style={{
              backgroundImage:
                "linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,0.8),rgba(0,0,0,0.4),rgba(0,0,0,0.2))",
            }}
          >
            <div className="p-4 font-bold text-2xl text-slate-300">
              Project Title
            </div>
            <div className="p-4 text-slate-300">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              scelerisque justo ipsum, eu dignissim velit ornare ac. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Vestibulum quis
              iaculis urna. Etiam libero lorem, consectetur quis pharetra ac,
              placerat nec sapien. Curabitur ac commodo risus. Aenean dui
              ligula, consectetur quis nibh et, fermentum venenatis eros. Donec
              at malesuada eros. Fusce vitae sollicitudin est. Nullam non elit
              efficitur, eleifend turpis vitae, egestas tellus. Cras quis nulla
              sit amet lorem porta facilisis ac at urna. Vestibulum interdum leo
              eu iaculis malesuada. Nullam ut tempus massa, eget accumsan
              mauris. Aliquam erat volutpat. Mauris in congue est. Sed nunc
              arcu, laoreet malesuada elementum et, fringilla ut eros. In hac
              habitasse platea dictumst. Aliquam accumsan aliquet massa, id
              varius quam placerat vel. Sed sed malesuada urna, non rutrum
              mauris.
            </div>
          </div>
        </div>
        <div className="text-4xl my-8 flex gap-4 items-center">
          <span>
            <FaEye />
          </span>
          Project Overview{" "}
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 flex flex-col gap-2">
            <div>
              <span className="font-bold text-xl text-black">
                Project Mentor
              </span>{" "}
              : Timothy
            </div>
            <div className="font-bold text-xl text-black">Prerequisites</div>
            <div>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </div>
            <div className="font-bold text-xl text-black">Tech Stack</div>
            <div className="flex gap-4 mb-4 ">
              <div className="flex gap-2 text-blue-500 items-center border rounded-xl shadow-md bg-slate-200 p-2 w-fit cursor-pointer hover:shadow-2xl transform transition duration-500 hover:scale-105  ">
                <FaReact size={15} />
                <div>React</div>
              </div>
              <div className="flex gap-2 text-blue-900 items-center border rounded-xl shadow-md bg-slate-200 p-2 w-fit cursor-pointer hover:shadow-2xl transform transition duration-500 hover:scale-105">
                <SiTypescript size={15} />
                <div>TypeScript</div>
              </div>
              <div className="flex gap-2 text-green-500 items-center border rounded-xl shadow-md bg-slate-200 p-2 w-fit cursor-pointer hover:shadow-2xl transform transition duration-500 hover:scale-105">
                <SiMongodb size={15} />
                <div>MongoDB</div>
              </div>
              <div className="flex gap-2 text-green-700 items-center border rounded-xl shadow-md bg-slate-200 p-2 w-fit cursor-pointer hover:shadow-2xl transform transition duration-500 hover:scale-105">
                <FaNodeJs size={15} />
                <div>NodeJS</div>
              </div>
            </div>
            <div className="text-lg font-bold text-black mb-2">
              Project Tags
            </div>
            <ul className="list-disc pl-4">
              <li>Full Stack Development</li>
              <li>AWS</li>
              <li>Database</li>
              <li>Web Application</li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col">
            <div className="font-bold text-black text-xl">Project Members</div>
          </div>
        </div>
        <div className="text-4xl my-8 flex gap-4 items-center">
          <span>
            <TbProgressBolt />
          </span>
          Progress{" "}
        </div>
      </div>
    </div>
  );
}
