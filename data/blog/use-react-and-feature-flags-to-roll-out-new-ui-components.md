---
date: 2021-10-31T00:00:00-05:00
layout:
- PostLayout
- PostLayout
Draft: false
title: Use React and Feature Flags To Roll Out New UI Components
summary: At Parallax we released a sweeping update to our user interface. What follows
  is an explanation of one small part that made the whole thing possible.
hero_image: ''
tags:
- React
- UI
- JavaScript
- Programming
- Web Development
authors:
- Nate Geslin
canonicalUrl: ''
sub_heading: With The Flip of A Switch

---

![](https://cdn-images-1.medium.com/max/1600/0*sViPWB4sXg5xE1TT)

Recently, at [Parallax](https://www.getparallax.com/), my team and I released a sweeping update to our user interface. We updated buttons, inputs, selects, dialogs, and many other visual elements. What follows is an explanation of one small part of that effort.

***

### Problem

In the summer of 2021, my team and I were presented with a few interesting challenges. The next set of work would entail:

* Update many of our shared components with new styles (buttons, inputs, selects, dialogs, etc)
* Many of these updates would affect design, but we would also take the opportunity to slim down component APIs
* We should plan on _not_ being able to release everything at once. Doing so would mean a massive change and a risky release
* We should be able to switch between old and new component variations without code changes

Let’s dig into this a little bit.

Updating designs isn’t anything new. This happens all the time and it’s something we plan for. Doing so much of it all at once was new and was a sizable task.

Doing so much change all at once, while also continuing to maintain the current components, added an additional layer of complexity. It was necessary otherwise we would miss the window we had to make these changes, with new feature work coming in hot shortly after this would finish. This much change would incur a significant amount of tech debt. It adds to the effort both before **_and_** after release. We were okay with this, but isn’t something to discount.

![](https://cdn-images-1.medium.com/max/1600/0*cPFx-0XPU4uapH0z)Photo by [Marek Piwnicki](https://unsplash.com/@marekpiwnicki?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Ideation

Going into this project we knew we would need some sort of [Feature Flag](https://martinfowler.com/articles/feature-toggles.html). We already use [Launch Darkly](https://launchdarkly.com/) elsewhere within the UI (and BE) so that part was already in place.

With a Feature Flag solution already in place, the next major challenge was to figure out a way to keep the current components in place while also updating each implementation to use new variations on demand. This made things interesting. Do we update in place, or do we spin up new versions next to the old ones? Both strategies have pros and cons and, after much deliberation, we determined neither was really the correct path forward. We would use both!

Now, with a general direction decided on, we needed to figure out some way to switch between an old or new component variation on demand, **without having to change any code**. Our UI is built on [React](https://reactjs.org/) ([Next.js](https://nextjs.org/) specifically), so this actually turned out to be a pretty short adventure.

***

### Solution

After quite a bit of forethought, we decided to create a new component called `UiExperiment`(we prefix our shared components with `Ui` so they are easy to pick out). This component would accept an _“old”_ component and a _“new”_ component (`ReactNode`) as props, and also a prop to determine which one should render which would be driven by a feature flag.

UiExperiment React component, with Typescript

_Note: `ExperimentName` and `Experiment` live next to this component only for easy demonstration. In real life, these live in a `*.constants.ts` and `*.types.ts` file next to the component file._

By design, this is a pretty simple component. If `isExperimentActive` is passed as `false`, render what was passed as `props.a`. If it is passed as `true`, render `props.b`. In real life, the value of `isExperimentActive` comes from a feature flag. You might see, though, how this might be super powerful beyond what we’ve done here. Perhaps leveraging a component like this for true experiments, or using this for access control, etc.

Using `UiExperiment` in the app is now quite simple. In places where we will switch out old for new, we add `UiExperiment` around the current component, then add in the new one right next to it. We can do all that work now, continue to push to production, and “_flip the switch”_ only when we are ready to release these updates to our users.

Example usage of UiExperiment component

***

Wait a minute, let’s take a look at those `props` again.

UiExperiment props and supporting types

Why would we set up the `props` this way? Well, we are doing a little future work here. We built this component to solve a single problem for today, but we realized early on that this could be used for some other cool things too. What if we wanted to do experiments on variations of more than 2 components? Or serve up a different experience based on some flag?

The original api of `UiExperiment` did not use the prop `isExperimentActive`, which is just a simple flag. Instead, we passed `ExperimentName` as a prop named `activeExperiment.` This meant we could have had `n` number of experiments _and_ it would be strongly typed!

I’ll say, though, the reason we went with a simple toggle here is because, in practice, this actually turned out to be more work than we’d planned. Instead of passing a flag, the implementing component had to do a bit of logic first to pass the correct enum, which was not ideal. It ended up being too clunky and led to code that was harder to read.

In the future we may bring back that prop, but for this project it just didn’t make sense.

![](https://cdn-images-1.medium.com/max/1600/0*KuSbG_9VWTVEbHJV)Photo by [Dmitry Ratushny](https://unsplash.com/@ratushny?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Learnings

#### Existing Component APIs

Some readers may be wondering why we didn’t put this logical switch inside of each existing UI component?

What if we used a flag on existing components?

We certainly could have done that, and in some cases we did. For the most part, though, we wanted to have something portable that would be easy to repeat throughout the app. In the cases where we used a flag on a component, it was usually because we were only switching styles and nothing more. In those cases, it made sense to put the flag on the component.

Another part of this is because most of the time the work wasn’t just updating designs, it was also updating component apis. In many cases it made more sense to spin up completely new and simple components and then leverage `UiExperiment` to switch between old and new versions.

#### Cleanup

This effort required planning to do the work before release, but also work post-release. Using `UiExperiment` would incur tech-debt and we planned to remove that ASAP after release.

One benefit of `UiExperiment` was that the new component versions would already be in place. Once we were ready to clean up and remove all the old code, we removed things _around_ the new implementations. It would be purely subtractive, which makes this a little easier. We could easily remove the wrapping `UiExperiment` and delete the old components and we were done. Typescript would guide us on the `isV1` flags, by removing the prop from a component and addressing any TS errors that popped up as a result.

#### Naming

We still aren’t happy with the prop names `a` and `b`. My team and I take naming very seriously and these two names still feel like… Well, these could have been better.

***

### Conclusion

This component turned out to be a lifesaver for us! It allowed us to work on all the UI updates while still pushing features to production. Because we planned ahead to use feature flags, we could take this one step further via [Launch Darkly](https://launchdarkly.com/) and target flags states to specific users. This meant we could beta test all the design updates behind the scenes in production before we rolled this out to all of our users!

In the end, this component did everything we needed and more, and continues to live on in our app. The tech debt we incurred by using this in, literally, hundreds of places, turned out to be less than we thought too. After we released these updates, we were able to remove all of the `UiExperiments` related to this work. We’d planned for about two whole weeks but turned out we didn’t need it, it only took a week!! 🎉

If you want to [tinker](https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459) with `UiExperiment` yourself, I have put together a simple [CodeSandbox](https://codesandbox.io/s/ui-experiment-example-eoj94) for my readers.

Have you done anything like this before? Is there a better way? I’d love to hear about it, let me know in the comments!

***

#### References

* [https://martinfowler.com/articles/feature-toggles.html](https://martinfowler.com/articles/feature-toggles.html "https://martinfowler.com/articles/feature-toggles.html")
* [https://launchdarkly.com/](https://launchdarkly.com/ "https://launchdarkly.com/")
* [https://reactjs.org/](https://reactjs.org/ "https://reactjs.org/")
* [https://nextjs.org/](https://nextjs.org/ "https://nextjs.org/")
* [https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459](https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459 "https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459")
* [https://codesandbox.io/s/ui-experiment-example-eoj94](https://codesandbox.io/s/ui-experiment-example-eoj94 "https://codesandbox.io/s/ui-experiment-example-eoj94")

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)