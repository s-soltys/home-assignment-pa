Rough questions:  
Do you already have Micro-FE?



## Assumptions:
Based on the description of the task, I have made the decision to use Single-SPA as the top-level router for the app.
Reasons:
I have existing experience with this top-level router
The technology connecting the Micro-FE is likely to be easy to replace with another (e.g. Module federation) and allowed me to focus on the implementation




## Comments:
This task is clearly designed for many more hours beyond 4.
Additionally, you ask candidates to spend this amount of time, before even having a technical screening.
Recommendation:
Have a 1h engineering manager / tech lead interview before sending out such a home assignment
Ask explicitly for candidates to timebox their efforts






-----
# Documentation

## Architecture overview:


## Testing strategy:
My testing strategy depends on multiple factors:
- Maturity of the product & expected changes
- Maturity of the codebase
- Development team skill level & preferences

As a baseline, my personal preference towards a testing strategy is:
- Focus on unit testing:
    - Primarily test business logic in state and utility code
    - Cover critical components (shared components, core components)
- Integration testing of user & onboarding flows
- Avoid e2e tests - tend to be costly and flaky -> consider using as smoke tests

I adapt my strategy towards the needs of the team & product.


## Developer Guide:
I consider a good "Getting started" guide to primarily focus on:
- Encouraging developers to experiment and work the code
- Pointing to the neccessary resources and theory
- Provide a concise list of best practices learned and applied by the team


The structure of such a guide would be:
- Entry-point - consists of a "Warm Welcome!" message, short summary & links to all further resources (internal & external)
- Architecture overview - diagram, main principles - written in a way that doesn't get outdated very often (big picture, does not need to contain info about every single module)
- "How Tos" repository
    - List of documents with a simple step-by-step guide
    - Likely list would be:
        - "How to add a new Micro-FE?"
        - "How to add a new dependency to be shared between Micro-FE?"
        - "How to "...
- Best practices
    - Written in a simple way - I personally like Angular docs style of such guides, with advice grouped into *Do*, *Consider*, *Avoid*
- ADR - concise document explaining the context, evaluated tradeoffs, decision

**⚠️ Important:** The most important part of documentation is the right culture around documentation. There are no "consumers" of documentation, we are all also "producers" :)



## Mentoring and Onboarding:
In my leadership experience I generally prefer a hands-off approach.

The most important factors I focus on to ensure a good onboarding experience are:
- Documentation - concise and up-to-date - especially "How to" guides for very common challenges
- Good selection of onboarding tasks - usually 2-3 weeks before a new developer starts, I like to curate a backlog of starter tickets that are most likely to allow the new hire to deliver value while maximising their learning opportunities
- Onboarding checklist - list of resources (documents, guides, videos, courses) that a new hire should consume and skills they should obtain within their first week, 30 days and 90 days
- Pair programming - 


**⚠️ Important:** Hiring developers with a self-starter mentality is key! In a startup phase we should always prioritise such hires.

**⚠️ Important:** People learn and perform best when they feel safe 🤗. I strongly emphasize for developers in my teams to not be afraid of failure and to ask questions, and to take measured risks. The same mindset should be consistently projected by the entire team.

## Stakeholder Communication:
- 


