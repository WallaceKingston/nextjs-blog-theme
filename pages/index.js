import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

const agentStudios = [
  {
    name: 'Scriptforge Agent',
    model: 'Narrative-9B',
    description:
      'Turns a loose idea into shooting scripts, beat sheets, dialogue passes, and multilingual subtitles.',
  },
  {
    name: 'Frameweaver Agent',
    model: 'CineVision XL',
    description:
      'Builds storyboards, lookbooks, character references, and consistent visual language for every scene.',
  },
  {
    name: 'Motionflow Agent',
    model: 'Temporal Diffusion Pro',
    description:
      'Generates unlimited clips, interpolates camera moves, and keeps continuity locked across timelines.',
  },
  {
    name: 'Soundstage Agent',
    model: 'AudioScene 4D',
    description:
      'Creates sound design, voice direction, music stems, ambience, and final mix notes for every cut.',
  },
];

const workflow = [
  'Pitch a concept and choose a format, aspect ratio, genre, and target audience.',
  'Let the agents co-write scripts, shot lists, prompts, boards, and production schedules.',
  'Generate, revise, extend, and upscale video without credits, caps, or paid render tokens.',
  'Package trailers, social cutdowns, captions, posters, and release-ready exports from one workspace.',
];

export default function Index({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full space-y-16">
        <section className="text-center rounded-3xl border border-white border-opacity-20 bg-white bg-opacity-10 px-6 py-12 shadow-2xl backdrop-blur-lg dark:bg-black dark:bg-opacity-30 md:px-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-primary dark:text-gradient-4">
            All-in-one AI filmmaking platform
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Siquloflack makes infinite AI video creation free for every filmmaker.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-70 md:text-xl">
            Replace credit anxiety with an always-on production studio: write,
            storyboard, generate, edit, score, and publish cinematic videos with
            specialized agents powered by purpose-built filmmaking models.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#agents"
              className="rounded-full bg-primary px-8 py-4 font-bold text-white transition hover:scale-105 focus:outline-none focus:ring-4"
            >
              Meet the agents
            </a>
            <a
              href="#workflow"
              className="rounded-full border border-gray-900 border-opacity-20 px-8 py-4 font-bold transition hover:scale-105 dark:border-white dark:border-opacity-30"
            >
              Explore workflow
            </a>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {['Infinite generations', 'Free forever renders', 'No credit shortages'].map(
            (promise) => (
              <div
                key={promise}
                className="rounded-2xl border border-gray-800 border-opacity-10 bg-white bg-opacity-10 p-6 text-center backdrop-blur-lg dark:border-white dark:border-opacity-10 dark:bg-black dark:bg-opacity-30"
              >
                <p className="text-2xl font-black">{promise}</p>
              </div>
            )
          )}
        </section>

        <section id="agents" className="space-y-6">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] opacity-60">
              New agent model lineup
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              A crew of AI specialists, not a single prompt box.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {agentStudios.map((agent) => (
              <article
                key={agent.name}
                className="rounded-3xl border border-gray-800 border-opacity-10 bg-white bg-opacity-10 p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:bg-opacity-20 dark:border-white dark:border-opacity-10 dark:bg-black dark:bg-opacity-30 dark:hover:bg-opacity-50"
              >
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-gradient-4">
                  {agent.model}
                </p>
                <h3 className="mt-3 text-2xl font-black">{agent.name}</h3>
                <p className="mt-3 text-lg opacity-70">{agent.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="rounded-3xl border border-gray-800 border-opacity-10 bg-white bg-opacity-10 p-6 backdrop-blur-lg dark:border-white dark:border-opacity-10 dark:bg-black dark:bg-opacity-30 md:p-10"
        >
          <p className="font-bold uppercase tracking-[0.25em] opacity-60">
            End-to-end production
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            From idea to premiere in one unlimited workspace.
          </h2>
          <ol className="mt-8 grid gap-4">
            {workflow.map((step, index) => (
              <li
                key={step}
                className="flex gap-4 rounded-2xl bg-white bg-opacity-20 p-5 dark:bg-white dark:bg-opacity-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-black text-white">
                  {index + 1}
                </span>
                <p className="text-lg opacity-80">{step}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
