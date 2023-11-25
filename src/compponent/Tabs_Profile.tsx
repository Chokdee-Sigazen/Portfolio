import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [categories] = useState({
    Skill: [
      {
        id: 1,
        title: "UI/UX",
        date: "Designing Web/App interfaces",
      },
      {
        id: 2,
        title: "Web Development",
        date: "Web app Development",
      },
    ],
    Education: [
      {
        id: 1,
        title: "2017 - 2022",
        date: "Princess Chulabhorn Science High School | GPAX:3.67",
      },
      {
        id: 2,
        title: "2023 - now",
        date: "Chulalongkorn University | Computer Engineer",
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 py-8 sm:px-0 font-inter">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }: any) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-bold leading-5",
                  "",
                  selected
                    ? "bg-[#a1ecff] text-black shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-[#333333] p-3 text-[#4FF2DF]",
                ""
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-[#282828] transition-all duration-150"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-white">
                      <li>{post.date}</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
