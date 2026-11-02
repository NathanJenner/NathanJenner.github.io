import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import CardBase from "@/components/card/card";
import SkillButton from "@/components/skillbutton/skillbutton";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {}

        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-xl text-center justify-center">
            <span className={title({ color: "violet" })}>About me&nbsp;</span>
          </div>
          <div className="inline-block max-w-5xl text-center justify-center">
            <p>
              Hey there! I’m a junior developer with a solid background in the
              full software development life cycle (SDLC). While I’m still early
              in my dev journey, I’ve had plenty of hands-on experience working
              through everything from planning and design to testing and
              deployment.
            </p>
            <br />
            <p>
              My main focus has been C# and the .NET stack, but I’ve also dipped
              my toes into TypeScript and React—just enough to get a feel for
              frontend development and how it all connects.
            </p>
            <br />
            <p>
              I enjoy writing clean, maintainable code and love solving problems
              that make systems run smoother. Right now, I’m focused on growing
              my backend skills, learning more about cloud technologies, and
              continuing to explore modern development tools and frameworks.
            </p>
          </div>
        </section>

        

        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <span className={title({ color: "violet" })}>Projects&nbsp;</span>
          </div>
        </section>

        <section id="myProjects">
          <div>
            <CardBase />
          </div>
        </section>

        <section>
          <div className="mt-8 flex justify-center">
            <SkillButton
              download="Nathan_Jenner_Junior_Developer_Resume.pdf" href="/Nathan_Jenner_Junior_Developer_Resume.pdf"
              label="Download Resume"
            />
          </div>
        </section>

        <section>
          <div className="inline-block max-w-xl text-center justify-center mt-24">
            <span className={title({ color: "violet" })}>Skills&nbsp;</span>
          </div>
        </section>

        <section>
          <div>
          <SkillButton />
          </div>
        </section>

        <section>
          <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>
                Powered by <Code color="success">curiosity/learning.tsx</Code>
              </span>
            </Snippet>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
