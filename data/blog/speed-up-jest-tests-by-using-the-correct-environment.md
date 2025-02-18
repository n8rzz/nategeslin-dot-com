---
title: Speed Up Jest Tests By Using The Correct Environment
date: 2021-12-27T00:00:00-06:00
tags:
  - jest
  - typescript
  - reat
  - javascript
  - programming
draft: false
summary: Recently at Parallax, we noticed our UI test suite was taking longer and
  longer to finish. We found a quick way to speed this up.
subHeading: The DOM is expensive. Use it only when you need it.
images: []
layout:
  - PostLayout
canonicalUrl: ''
Draft: false
sub_heading: The DOM is expensive. Use it only when you need it.
authors:
  - Nate Geslin
---

# Speed Up Jest Tests By Using The Correct Environment

## The DOM is expensive. Use it only when you need it.

![](https://cdn-images-1.medium.com/max/1600/0*oQSqIqIb0BDsdJrg)Photo by [Stephanie LeBlanc](https://unsplash.com/@sleblanc01?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

Recently at, [Parallax](https://www.getparallax.com/), we noticed our UI test suite was taking longer and longer to finish. This was on the order of minutes, so not a major problem. At least not yet. It was a problem affecting development, though, and lengthening the feedback cycle. This was something we wanted to address sooner rather than later.

We decided to investigate and see if we could speed things up.

### Problem

As of this writing, our UI app has right around 1,600 unit tests. We use [Jest](https://jestjs.io/) [TypeScript](https://www.typescriptlang.org/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). About half of our tests are for [React](https://reactjs.org/) components that need a [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction). The other half are pure functions or [TypeScript classes](https://www.typescriptlang.org/docs/handbook/classes.html). These don’t need a DOM to test, only a [node](https://nodejs.org/en/) environment.

Jest runs via CLI using Node. Things like `window`, `document`, and the like don’t exist in Node. So, we have to provide a fake DOM to Node. As you can imagine, tests that need a DOM have that added dependency of some sort of DOM library.

[Jest documentation](https://jestjs.io/docs/configuration#testenvironment-string) of Jest testing calls out [jsdom](https://github.com/jsdom/jsdom) as the recommended tool for this job. You can set the Jest environment in two ways; globally via Jest configuration, or by using a special doc block within individual test files.

I should mention, in our configuration, the default global environment was set as `jsdom`.

![](https://cdn-images-1.medium.com/max/1600/0*nLV9ihUwb4WbqFQa)Photo by [AbsolutVision](https://unsplash.com/@freegraphictoday?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Solution

Any guesses on how we made things better? I’ve already dropped some hints. I’ll give you a minute to think about it.

---

From a high level, our solution was to set the default Jest environment to `node`. Then, within tests that needed a DOM, we added a [docblock](https://en.wikipedia.org/wiki/Docblock) to tell Jest to use the `jsdom` environment instead of `node`.

I’d like to acknowledge that we didn’t just _figure this_ out on our own. Like any good engineer, we found the answer on the interwebs first.

[**How to make your sluggish Jest v23 tests go faster**
\_Make unit tests great again_itnext.io](https://itnext.io/how-to-make-your-sluggish-jest-v23-tests-go-faster-1d4f3388bcdd 'https://itnext.io/how-to-make-your-sluggish-jest-v23-tests-go-faster-1d4f3388bcdd')

To put this fix to work in our project, we did it in three easy steps:

#### Set `node` As Default Test Environment

This had an immediate positive impact on speed. But also resulted in half of our tests failing. We expected this because, well, node doesn’t have a DOM. So the tests that needed a DOM were all now a little grumpy.

#### Add jsdom Docblock To Component Test Files

Once we moved to `node` as the default test environment, we suddenly had a collection of failing tests. Our directory structure made it pretty easy to find most of the component tests. Once a component test was located, it was a matter of adding a doc block with the correct environment to the top of the file.

```js
/** * @jest-environment jsdom */
```

Then we re-run the tests and verify things are passing again. _Easy-peasy!_

#### Update Component Generators To Include jsdom Docblock

The last step is just as important: update our generators to include the docblock. That way new component tests are created with the correct docblock.

Over the years, [Robert S (codeBelt)](https://medium.com/u/32c8aef7a385) has built up a healthy collection of [generators](https://medium.com/@robertsavian/generate-template-files-with-ease-19b320615359) that we use within our project. These generators make it dead-simple to create new files in our project.

---

### Conclusion

How much of a difference did this actually make? Our tests do run faster now. This makes sense, considering we spin up a DOM only when we need it (about half the time).

After we made this change, we went from about 120 seconds per run down to about 80 seconds. Not a massive change, but one that did make a difference.

---

#### References

- [https://www.getparallax.com/](https://www.getparallax.com/ 'https://www.getparallax.com/')
- [https://jestjs.io/](https://jestjs.io/ 'https://jestjs.io/')
- [https://www.typescriptlang.org/](https://www.typescriptlang.org/ 'https://www.typescriptlang.org/')
- [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/ 'https://testing-library.com/docs/react-testing-library/intro/')
- [https://reactjs.org/](https://reactjs.org/ 'https://reactjs.org/')
- [https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction')
- [https://www.typescriptlang.org/docs/handbook/classes.html](https://www.typescriptlang.org/docs/handbook/classes.html 'https://www.typescriptlang.org/docs/handbook/classes.html')
- [https://nodejs.org/en/](https://nodejs.org/en/ 'https://nodejs.org/en/')
- [https://jestjs.io/docs/configuration#testenvironment-string](https://jestjs.io/docs/configuration#testenvironment-string 'https://jestjs.io/docs/configuration#testenvironment-string')
- [https://github.com/jsdom/jsdom](https://github.com/jsdom/jsdom 'https://github.com/jsdom/jsdom')
- [https://en.wikipedia.org/wiki/Docblock](https://en.wikipedia.org/wiki/Docblock 'https://en.wikipedia.org/wiki/Docblock')
- [https://itnext.io/how-to-make-your-sluggish-jest-v23-tests-go-faster-1d4f3388bcdd](https://itnext.io/how-to-make-your-sluggish-jest-v23-tests-go-faster-1d4f3388bcdd 'https://itnext.io/how-to-make-your-sluggish-jest-v23-tests-go-faster-1d4f3388bcdd')
- [https://medium.com/@robertsavian/generate-template-files-with-ease-19b320615359](https://medium.com/@robertsavian/generate-template-files-with-ease-19b320615359 'https://medium.com/@robertsavian/generate-template-files-with-ease-19b320615359')
