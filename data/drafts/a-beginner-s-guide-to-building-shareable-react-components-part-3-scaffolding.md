---
date: 
layout:
- PostLayout
Draft: true
title: 'A Beginner’s Guide To Building Shareable React Components, Part 3: Scaffolding'
sub_heading: We spin up a place to build our component
summary: ''
tags: []
authors:
- Nate Geslin
canonicalUrl: ''

---
***

### A Beginner’s Guide To Building Shareable React Components, Part 3: Scaffolding

#### We spin up a place to build our component

![](https://cdn-images-1.medium.com/max/1600/0*FVKmgzTcMRcnkH0T)Photo by [Fleur](https://unsplash.com/@yer_a_wizard?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

Welcome to **Part 3** of **A Beginner’s Guide To Building Shareable React Components** Series! In [Part 1](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0)**,** I wrote about the theory behind planning sharable react components. In [Part 2](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-2-planning-c14e634b84c3) we put the theory to work and went through the exercise of planning out our fictional React component.

[**A Beginner’s Guide To Building Shareable React Components, Part 1: Theory**  
_A solid plan leads to a solid foundation_nategeslin.medium.com](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0 "https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0")

[**A Beginner’s Guide To Building Shareable React Components, Part 2: Planning**  
_Let’s put some of the theory from Part 1 to work_nategeslin.medium.com](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-2-planning-c14e634b84c3 "https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-2-planning-c14e634b84c3")

We are going to scaffold out our app, so we can execute on the plan we developed in [Part 2](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-2-planning-c14e634b84c3)**.** Our goal today is to have a working environment and the basic parts needed to completely build out our design.

### Tech Stack

For the code part of this series, we are going to be using the following technologies:

* [React](https://reactjs.org/)
* [Typescript](https://www.typescriptlang.org/)
* [Jest](https://jestjs.io/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

Instead of spinning up an entire project locally, we’re going to do it _in the cloud_. We’re going to use [codesandbox.io](https://codesandbox.io/). Specifically the React + Typescript template.

_Note: I find myself using these sorts of cloud-based tools for these little projects more and more. It’s quick and easy to spin something up, it’s easy to share, and it forces me to keep things small._

***

### Where To Start

[Codesandbox.io](https://codesandbox.io/) makes it super easy to get started fast. We can spin up a React and Typescript project by clicking just a few buttons.

![](https://cdn-images-1.medium.com/max/1600/1*hSGcEJC7kA_lJy9mIew-dw.png)codesandbox.io — create sandbox view. we’re going to select React Typescript temple

Let’s click the **React Typescript** option.

You should end up with something very similar to this.

![](https://cdn-images-1.medium.com/max/1600/1*wh8TejiRwzGfBzB68zKeSQ.png)Just a few button clicks and we have a React Typescript project all ready to go! 🎉

Now we have a place to write some code and build this component!

### Dependencies

There are just three dependencies that we need to add to do our work. You can do this in the lower left hand side of the view. We need to add:

* jest
* @testing-library/jest-dom
* @testing-library/react

Add these by typing each into the text box with the placeholder `Add Dependency`. Once a dependency is added, you’ll see it an it’s version number listed with the other dependencies.

![](https://cdn-images-1.medium.com/max/1600/1*mNIZqgBabaO7I2G2yHnXNw.png)

***

### Card Component

Ok, fun time!

My personal strategy for building things centers around making simple connections quickly, then iterating over those connections and adding tests. I’m sure someone much smarter than I has already come up with this. I’m sure there is a fancy name for it, too.

***

We need a card component right? In the spirit of simple let’s start with something small.

Create a new Typescript React component in the project `src` directory. Let’s call it `Card.tsx`.

This is about as basic as we can get, right? For now it’s just a simple `div` with text. Basic, but enough for us to build on.

Since we’re here, we should also add a test for this.

Codesandbox.io does some magic here for us, it will automatically detect and run our tests! If you don’t see them show up in the **Tests** tab, save and refresh.

![](https://cdn-images-1.medium.com/max/1600/1*Qog8VoKzxI47tjn6d8zcwA.png)codesandbox.io test runner

I’ll admit, this is a bit of a silly test. However, I like to start with this silly test simply because it provides a connection. It connects our component and test in a brutally simple way.

Some might say this test is nearly useless. I wouldn’t disagree. However, I’ve found I’m most efficient when I make these small connections and iterate quickly. So, useless on it’s own but very helpful during development.

### App Component

Things are happening now.

We’re setting ourselves up for some success with a basic component and a working test. Next, we are going to make a change to the view to help make further development easier.

Let’s make a new file in `src` and name it `App.tsx`. We’re going to add two implementations of our `Card` component here in a horizontal list. They are the same right now, but soon will look like our design. One will be an accordion and the other will not.

While we’re at it, let’s also update `index.tsx` to use the new `App` component and let’s add some basic styles to `styles/styles.css` to support our development layout.

Let’s pause for a moment and see where we’re at. Codesandbox.io provides a browser-like pane on the side that will show you a live preview of your code. If you’re coding along, you should see something like this.

![](https://cdn-images-1.medium.com/max/1600/1*lxhizKHDN8fvewJYhQL12w.png)

Not very pretty yet or anywhere close to our design. But it’s a solid start.

![](https://cdn-images-1.medium.com/max/1600/0*2zZDFob8a5IVUvd3)Photo by [Fons Heijnsbroek](https://unsplash.com/@fonsheijnsbroek51?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Conclusion

In real life we’d be working within an existing app and the work we needed to do in this article would already be done. Nonetheless, this is always the most exciting part of any project: a blank slate.

Now we’re ready to build!

Stay tuned for the next article where we finally build this thing!

_You can find the code referenced in this article here:_ [_https://codesandbox.io/s/friendly-bassi-mmdqe_](https://codesandbox.io/s/friendly-bassi-mmdqe "https://codesandbox.io/s/friendly-bassi-mmdqe")_._

***

#### References

* [https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0 "https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-1-theory-836488f838a0")
* [https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-2-planning-c14e634b84c3](https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-2-planning-c14e634b84c3 "https://nategeslin.medium.com/a-beginners-guide-to-building-shareable-react-components-part-2-planning-c14e634b84c3")
* [https://reactjs.org/](https://reactjs.org/ "https://reactjs.org/")
* [https://www.typescriptlang.org/](https://www.typescriptlang.org/ "https://www.typescriptlang.org/")
* [https://jestjs.io/](https://jestjs.io/ "https://jestjs.io/")
* [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/ "https://testing-library.com/docs/react-testing-library/intro/")
* [https://codesandbox.io/](https://codesandbox.io/ "https://codesandbox.io/")
* [https://codesandbox.io/s/friendly-bassi-mmdqe](https://codesandbox.io/s/friendly-bassi-mmdqe "https://codesandbox.io/s/friendly-bassi-mmdqe")