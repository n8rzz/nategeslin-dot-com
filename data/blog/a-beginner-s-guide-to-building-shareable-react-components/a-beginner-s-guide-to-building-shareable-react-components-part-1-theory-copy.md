---
date: 2022-01-25T20:20:37-06:00
layout:
- PostLayout
Draft: true
title: 'A Beginner’s Guide To Building Shareable React Components, Part 2: Planning'
sub_heading: Let’s put some of the theory from Part 1 to work
summary: Planning for shareable components is similar no matter the library. Today
  I talk about some of the theory behind planning new React components.
tags:
- React
- Planning
- React Components
- Software Development
- JavaScript Development
authors:
- Nate Geslin
canonicalUrl: ''

---
![](https://cdn-images-1.medium.com/max/1600/0*TQcAFy76hnzWI4TS)Photo by [Johannes Plenio](https://unsplash.com/@jplenio?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

Welcome to Part 2 of **A Beginner’s Guide To Building Shareable React Components** Series. In [Part 1](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0) of this series**,** I wrote about the theory behind planning sharable react components.

[**A Beginner’s Guide To Building Shareable React Components, Part 1: Theory**  
_A solid plan leads to a solid foundation_nategeslin.medium.com](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0 "https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0")

Today, we’re going to put that theory to work and plan out a sharable react component!

### Caveats

I’ll add the same caveats here as I did in Part 1. I’m not a designer. I like to think I have a good eye for design, but I can’t design my way out of a cardboard box. I’m an engineer.

This is something of a non-sensical component. We’re going to use it here to help illustrate how we might plan this out.

Since we’re living in a bit of a fantasy world with this exercise, let’s also assume the following:

* The scope of this component is two different areas of an app
* We don’t know if there are plans to use this elsewhere, but it’s possible
* The project we are building this for is small, but growing
* There are some shared components built already
* We assume there are many more components to come, but as of yet maybe only 20 or so are built

***

### Brief

Here is what we’re going to be planning.

![](https://cdn-images-1.medium.com/max/1600/1*99Te06XzOxbaxqVa7rBg9A.png)

This super-awesome-totally-practical component can be found on [Figma](https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1). This design includes enough information for us to start planning things out. There are some gaps here, though, and we will likely end this process with some assumptions and some questions.

It’s okay that we don’t/won’t have all the answers at this stage. Remember we are _planning_, we are not building (yet). There is still time for designs to change.

Okay, let’s get started!

### Flexibility

The very first thing I see with this design is that it looks like we have two main variations.

![](https://cdn-images-1.medium.com/max/1600/1*t0LNNH5Ma8xMiOWEcskvYQ.png)Two variations of our component

Variation #1 is a basic card. Pretty straightforward, a title, an image, some copy, and a Read More link. It also looks like there is some truncation happening there.

Variation #2 appears to be an interactive accordion. When expanded, the accordion looks nearly identical to the basic card.

![](https://cdn-images-1.medium.com/max/1600/1*ZlbiTIYFagG1PYaxTK1UMw.png)Variation #1 (left) without a trigger, and variation #2 (right) with an accordion trigger

**Decision point**: Do we build two components or do we build one to handle both cases?

For now, since we’re moving fast and the use-case for this component is relatively small, we’re going to build a single component. However, our artifacts are going to call this decision out. That in the future we may want to split this up.

### Boundaries

This is a pretty basic component, at least on the surface. Most of what this component needs, we can assume, will be supplied from a parent. The accordion part is an important part to decide on, though. Should that be controlled by a parent or not?

Personally, I think it makes sense to control that from within the component itself. However, we should expose a prop that would allow for defaulting an open state on render.

    interface IProps {  isExpanded?: boolean}

We can make this optional since we might not always need it. The component will take over control of that `prop` (and subsequent `state` value) after the first render.

### Layout

Do we want **Loose Boundaries** or **Rigid Requirements**? To me, this looks like a Rigid Requirements component.

There is a very specific layout required here, with very specific contents. This makes it easy for us to expose simple props and control everything else from within the component.

Should we assume we will _always_ have a title, image, caption, and read more link? What happens if we do not have those things? This feels like a question for UX. In the mean time, we can plan to make those required props.

### Component Internals

Let’s take a look at our design variations and see if we can’t break this down into something that looks like a component API.

![](https://cdn-images-1.medium.com/max/1600/1*wL9-Kczflkzd1qRbv1Zsyw.png)Mapping sections of this component to possible props or state

I’ve highlighted the areas we care about here in pink. Some of this may be obvious while some may not.

We talked above about what should be considered required. But now that we are looking at the design, there might be another question or two. Should the `Read More` link be configurable? Will that _always_ be `Read More`? Will it _always_ be a link_?_

For now, we can make a few decisions:

* No, it will not be configurable
* Yes, it will always be `Read More`
* Yes, it will always be a link

We can also assume that if either of these were to change in the future, we may want to consider accepting JSX. That would move the footer section of the component from **Rigid Requirements** to **Loose Boundaries**. Which, by the way, is totally acceptable!

So what does our API look like? How about something like this:

    interface IProps {  articleUrl: string;  caption: string;  imageUrl: string;  isAccordion?: boolean;  isExpanded?: boolean;  title: string;}

    // state// isOpen: boolean

One other consideration to think about here. Occasionally, it’s useful to bubble events up to parent components. Sometimes there are side effects that a parent will manage that the child should not. Other times the parent needs access to the event for one reason or another.

If we wanted to bubble the event, our contract changes slightly to:

    interface IProps {  articleUrl: string;  caption: string;  imageUrl: string;  isAccordion?: boolean;  isExpanded?: boolean;  onClickAccordionTrigger: (event: React.SyntheticEvent) => void;    title: string;}

    // state

    isOpen: boolean

    // should call props.onClickAccordionTrigger() with `event`setIsOpen()

### Tests

For some, this is the hardest part. When you are first getting into planning, it’s hard to know what someone else might need to build something. This, like anything, gets easier with practice.

In [Part 1](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0) we talked about producing something close to [Gherkin](https://cucumber.io/docs/gherkin/). Personally, I tend to end up with something looks like gherkin, just a little less formal. I wrote about my variation in [Write Tests With Sentences First, Code Second](https://javascript.plainenglish.io/write-tests-with-sentences-first-code-second-e3c88d4446ef).

[**Write Tests With Sentences First, Code Second**  
_Don’t dive right in, first write an outline then translate that to code_javascript.plainenglish.io](https://javascript.plainenglish.io/write-tests-with-sentences-first-code-second-e3c88d4446ef "https://javascript.plainenglish.io/write-tests-with-sentences-first-code-second-e3c88d4446ef")

So, what does that look like for what we’re planning?

    when passed required props  then title should be visible    then the trigger icon should not be visible    and image should be visible    and caption should be visible    and read more should link to articleUrl

    when isAccordion passed as false  then the trigger icon should not be visible    and image should be visible    and caption should be visible    and read more should link to articleUrl

    when isAccordion is passed as true  and isExpanded is passed false    then the trigger icon should use down variation    and the image should not be visible    and the caption should not be visible    and the read more link should not be visible

      and accordionTrigger is clicked    then the trigger icon should use the up variation    and the image should be visible    and the caption should be visible    and the read more link should be visible

      and isExpanded is passed true    then the trigger icon should use up variation    and the image should be visible    and the caption should be visible    and the read more link should be visible

      and accordionTrigger is clicked    then the trigger icon should use down variation    and the image should not be visible    and the caption should not be visible    and the read more link should not be visible

![](https://cdn-images-1.medium.com/max/1600/0*NZasWgyzzrqlJwRP)Photo by [The Digital Marketing Collaboration](https://unsplash.com/@thedmcsa?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Artifacts

We made it! We’ve gone through the designs, asked some questions, formulated some assumptions, and created a first draft of an api. We’re ready to hand this off and move on to the next phase.

Congratulations!

Let’s review what we ended up with, we’re going to need these later in an _article-to-follow._

#### Props

    interface IProps {  articleUrl: string;  caption: string;  imageUrl: string;  isAccordion?: boolean;  isExpanded?: boolean;  // depends on if we want to bubble the event  onClickAccordionTrigger: (event: React.SyntheticEvent) => void;    title: string;}

#### State

    // state

    isOpen: boolean

    // should call props.onClickAccordionTrigger() with `event`setIsOpen()

#### Expectations

    when passed required props  then title should be visible    then the trigger icon should not be visible    and image should be visible    and caption should be visible    and read more should link to articleUrl

    when isAccordion passed as false  then the trigger icon should not be visible    and image should be visible    and caption should be visible    and read more should link to articleUrl

    when isAccordion is passed as true  and isExpanded is passed false    then the trigger icon should use down variation    and the image should not be visible    and the caption should not be visible    and the read more link should not be visible

      and accordionTrigger is clicked    then the trigger icon should use the up variation    and the image should be visible    and the caption should be visible    and the read more link should be visible

      and isExpanded is passed true    then the trigger icon should use up variation    and the image should be visible    and the caption should be visible    and the read more link should be visible

      and accordionTrigger is clicked    then the trigger icon should use down variation    and the image should not be visible    and the caption should not be visible    and the read more link should not be visible

#### Assumptions and Questions

* `articleUrl`, `caption`, `imageUrl`, and `title` props are all required and should always be passed
* When present, the accordion trigger will always be on the right side
* The accordion trigger will always use the same icon defined internally
* `Read More` will always be a link
* `Read More` will not be configurable

#### Future Considerations

* We might want to split this component in two to allow for a slimmer `Card` component
* We might update the footer to accept JSX, which give implementors complete control over the `Read More` link by overriding it entirely

### Conclusion

We’ve done the work, we’ve made some decisions, and we’ve set up a blueprint. All that is left now is to actually build (and test) the thing!

Okay, It’s not _quite_ that simple. We have done a lot of good work though. The engineer that ends up doing this work is going to be starting out on the right foot.

Coincidentally, the engineer that ends up doing the work will be me (us), in a _link-to-future-part-3-article._

Thank you for reading!

***

#### References

* [https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0 "https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0")
* [https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1](https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1 "https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1")
* [https://cucumber.io/docs/gherkin/](https://cucumber.io/docs/gherkin/ "https://cucumber.io/docs/gherkin/")
* [https://javascript.plainenglish.io/write-tests-with-sentences-first-code-second-e3c88d4446ef](https://javascript.plainenglish.io/write-tests-with-sentences-first-code-second-e3c88d4446ef "https://javascript.plainenglish.io/write-tests-with-sentences-first-code-second-e3c88d4446ef")