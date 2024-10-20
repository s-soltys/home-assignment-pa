# Welcome!
In this document I provide all the expected inputs for the example Micro-Frontend app home assignment.

The document consists of 3 sections:
- **How to run?** - Commands on how to "consume" the example app & navigate it
- **Preface** - Additional context neccessary to interpret my decisions / tradeoffs made within the context of this task
- **Documentation** - All the expected sections of the documentation shared in the requirements (Architecture, Developer Guide, Onboarding etc.)

---
# How to run?
### Prerequisites:
1. Install `nvm`
2. Install required `nvm` version: `nvm install`
3. Switch to required npm version: `nvm use`

### Run app
1. Install dependencies `yarn install`
2. Start the app: `yarn start`
3. Open the app: [http://localhost:9000/]()

### Testing & Linting:
1. Install dependencies `yarn install`
2. Run unit tests: `yarn test`
3. Run lint: `yarn lint`



---
# Preface

### Assumptions
Based on the description of the task, I have made the decision to use Single-SPA as the top-level router for the app. **The reasons are:**
- I have existing experience with this top-level router allowing me to minimise bootstrap work and focus work on evaluation criteria
- The technology connecting the Micro-FE is likely to be *relatively* easy to replace with another technology given we establish the right architectural constraints and avoid vendor lock-in

Alternatives I could have considered:
- Custom self-built solution - would likely entail some tradeoffs and wouldn't result in a "real" Micro-FE app given the acute time constraints
- Webpack Module Federation
- Multiple other frameworks (FrintJS, Luigi, Bit)


**Remark**: I have experience working within organisations of different sizes and maturity, therefore I always adapt my solutions to the needs of the team and organisation. In this documentation I list the factors I take into account, make my own best assumptions and then provide a recommendation based on my existing knowledge of Plan A engineering organisation. I will be happy to run such assumptions and ideas with interviewers during next stages :) 

**Reflection on the home assignment scope:**
This task is clearly designed for many more hours beyond four.
It was not clear to me whether you expected me to *timebox* my efforts or rather aim for a robust solution. This made me (and likely other candidates) feel quite uncertain, especially in light of such high barrier before the first technical interview.
I decided not to clarify and on my own initiative explore the problem with a more generous time investment, as I found this to be an interesting challenge for myself. That being said, this uncertanity might prevent some good candidates from proceeding with your process.

Recommendations:
- *Do:* Provide clear guidance on your expectations on the time candidates should invest and/or timebox strategy expectations.
- *Consider:* Have a 1h engineering manager / tech lead interview before sending out such a home assignment. Building a relationship with a candidate before asking them for such a high investment will improve the candidate experience :)




-----
# Documentation

## Architecture overview:
TODO

## Testing strategy:
My testing strategy depends on multiple factors:
- Maturity of the product & expected changes
- Maturity of the codebase
- Development team skill level & preferences
- Size of the team

**My initial proposal:**
As a baseline, my personal preference towards a testing strategy is:
- Unit tests:
    - *Do:* Primarily test business logic in state and utility code
    - *Do:* Cover critical components with unit tests (shared components, core components)
    - *Avoid:* Full test coverage of all components by default - provided that the codebase has the right separation of business logic and presentation logic, visual tests in Storybook might be sufficient to avoid visual regressions that don't introduce the risk for the user to not be able to use the app.
- Integration tests:
    - *Do:* Cover critical user-flows with integration tests - including both state *and* components. Do this *especially* for user flows that are not used daily and frequently - e.g. onboarding flows, where if broken might be discovered in production.
- e2e tests:
    - *Consider:* Using e2e smoke tests to ensure the application is *wired* correctly
    - *Avoid:* e2e tests of full user flows deep within the app. They tend to be costly, flaky and produce false positives and negatives when not robust enough.

I adapt my strategy towards the needs of the team & product. While I found a leaner and more focused strategy to work well in a scale up, I also do have experience working with Extreme Programming engineering teams following strict TDD practices and am comfortable with applying such strategies.


## Developer Guide:
I consider a good "Getting started" guide to primarily focus on:
- Encouraging developers to experiment and work the code
- Pointing to the neccessary resources and theory
- Provide a concise list of best practices learned and applied by the team


The structure of such a guide would be:
- **Entry-point** - consists of a "Warm Welcome!" message, short summary & links to all further resources (internal & external).
- **Our Values** - defines the mindset team members should demonstrate when interacting with the architecture, team and stakeholders
- **Architecture overview** - diagram, main principles - written in a way that doesn't get outdated very often = big picture, does not need to contain info about every single module.
- **Best practices**
I personally like Angular docs style of such guides, with advice grouped into *Do*, *Consider*, *Avoid*.
Such sections *should* include:
    - **Security** - list of measures documenting security practices
    - **Accessibiliy** - similar to above :)
    - **Tracking** - how do we track user behaviour & ensure it's analysable - extremely important aspect of the app, as it allows us to know how our users interact with the app. In such documents I also often list tracking events sent to tag manager solution (e.g. Google Tag Manager)
    - **Component library** - info on how to contribute / best practices etc.
    - **Dependency management** - defines how to add a new dependency, licensing strategy etc.
- **"How Tos" repository**
    - List of documents with a simple step-by-step guide. Intended as an easy-to-consume simple instructions.
    - Examples:
        - "How to create a new Micro-FE?"
        - "How to add a new dependency to be shared between Micro-FEs?"
        - "How to add a new shared component to the Component Library?"
        - etc.

**⚠️ Important: ⚠️** The most important part of documentation is the right culture around documentation. There are no *"consumers"* of documentation, we are **all** *"producers"* :muscle:
Based on this, I always communicate the following principles to colleagues:
- If you see documentation needs improvements - improve them **now!** :)
- Write ADRs for your proposals - explaining the context, evaluated tradeoffs, decision helps you organise your thoughts and obtain feedback
- When onboarding to the team, one of your most important first missions is to **improve** the documentation for the next onboardee


## Mentoring and Onboarding:
In my leadership experience I generally prefer a hands-off approach. Hiring developers with a self-starter mentality is key! In a startup phase we should always prioritise such hires.

The most important factors I focus on to ensure a good onboarding experience are:
- **Documentation** - concise and up-to-date - especially the "How to" guides for very common challenges
- **Good selection of onboarding tasks** - usually 2-3 weeks before a new developer starts, I like to curate a backlog of starter tickets that are most likely to allow the new hire to deliver value while maximising their learning opportunities
- **Onboarding checklist** - list of resources (documents, guides, videos, courses) that a new hire should consume and skills they should obtain within their first week, 30 days and 90 days
- **Engineering Levels** - a mature engineering organisation **needs** to have a well defined career path, with expectations defined for all seniority levels. Key skills related to FE architecture should be included there as well.
- **Pair programming** - it's an excellent practice that can be applied in many areas and good onboarding is definitely one of them. I recommend a quota of at least 50% of time spent pair programming especially during onboarding.
- **Build a relationship** - super important, we have various tools that ensure a new hire feels welcome and safe to ask for help. Tools I apply to ensure this:
    - Showing vulnerability by myself as a leader
    - Going out for a beer, team event, board game night after work - online or offline
    - Regular pairing sessions
    - Weekly 1:1s

**⚠️ Important:** People learn and perform best when they feel safe 🤗. I strongly emphasize for developers in my teams to not be afraid of failure and to ask questions, and to take measured risks. The same mindset should be consistently projected by the entire team :muscle:

## Stakeholder Communication:
Strongly depends on the context: *Are we presenting a concept? Are we asking to allocate resources for such a project? Are we asking for additional time in the roadmap to be allocated for the project?*

**Assumption:** that as a tech team we wish to roll-out a new architecture and would like to build momentum and excitement across the organisation.

Communication plan:

1. **Identify stakeholders**
    - Core Team - FE team, Tech Leads, CTO / Head of Engineering
    - Involved - Product & Design (leaders and/or individual contributors in such positions), any other developers who wish to be involved
    - Informed - Marketing (tracking), Business (exact stakeholder depends on context)
2. **Initial "Buy-in"**
    In this phase I would focus on gathering functional and non-functional requirements from key involved stakeholders. It is important to learn their needs and concerns as fast as possible.
3. **Kick-off**
Once the concept is crystalized, I recommend grouping stakeholders to build excitement. A 45-minute session should be sufficient. Presentation plan:
    - **Context** - explain where we are now:
        - Summarise - FE architecture & product state
        - Where are we headed - reference important aspects of the product vision & company mission; will be useful for stakeholders to understand how our Micro-FE strategy will drive us in this direction
    - **Story of how things are not *good-enough* now:**
    Give an example of a story / epic that the org struggled recently, and paint a clear picture of the challenges we faced.
    *For example:* We wanted to implement feature ABC, but we ended up introducing bugs in the process, had to spend X number of hours coordinating etc.
    - **Innovative solution**
    Explain the concept of Micro-FEs -> needs to be very simple, 1-2 slides and little jargon - just demonstrate the concept
    - **Benefits** - likely the most important point in the context of this assignment :D
    The key aspects I'd emphasize here are:
        - **:muscle: Team independence & scalability** - teams can work without unneccessary obstacles & coordination red-tape = we are ready to scale to a big and mature organisation
        - **:star: We are on the bleeding edge of tech** - connect this initiative to an innate startup desire to *push the needle*, it can resonate (of course it's culture dependent). Also communicate how we can avoid vendor lock in and evolve the codebase alongside of trends.
        - **:car: Speed of delivery** - argue how this can improve our velicity
        - **:handshake: Collaboration** - Micro-Frontends can incentivise a more streamlined collaboration between **FE & Designers** (& get Designers to argue for this architecture) and also **FE & BE** (they promote a Backend-for-Frontend collaboration model!)
    - **Roadmap** - concise list of milestones, forming the right expectations
4. **Regular check-ins**
Ensure regular updates for the wider organisation. Rough schedule:
    - Bi-weekly engineering-wide show & tells
    - Updates on roll-out progress with product & design - I'd use existing ceremonies such as `PM <> Tech sync-ups` and a `Design <> Frontend Jour Fixe`
    - Company level updates on initative whenever major milestones are reached - non-technical & used for celebrating success

**Remarks:**
- In my presentations I focus on simplicity and really scale down the technical jargon as much as possible. I apply storytelling - I would most likely tell a story on how a certain type of project would work out with Micro-FEs vs. without.
- Presentations need to be entertaining and engaging - we are hard-wired to listen to stories = if hired, expect tons of memes in my communication ;)
- Such a project is a **great** opportunity to grow team members - I would **heavily** involve other team members on all levels of such a project, including also stakeholder. Rolling out Micro-FEs is a CV-building experience for many, and I would love my colleagues to benefit from it as much as possible :muscle:


# Epilogue

Hope you enjoyed reading this documentation!
I did my best to present my actual communication style, not trying to be overly dry and professional but rather authentic and direct.
Will be happy to share more during an in-person chat! :)