---
date: 2022-05-02T19:35:01.000-05:00
layout:
- PostLayout
Draft: false
title: Improve Build Times by Speeding up Jest Tests with Multiple Suites
sub_heading: By Using GitHub Actions To Run Jest Test Suites In Multiple Parts
summary: Our test suite was taking up to 30 mins to run. We split things up and brought
  our run time down to 10 mins. Read more to find out how!
tags:
- Programming
- Jest
- Software Development
- JavaScript
- JavaScript Testing
authors:
- Nate Geslin
canonicalUrl: ''

---
![](https://cdn-images-1.medium.com/max/1600/0*7kIK8Whmj1JvhGyJ)Photo by [Nicolas Hoizey](https://unsplash.com/@nhoizey?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

At [Parallax](https://www.getparallax.com/), we use [Jest](https://jestjs.io/) to test our application. One of my primary objectives is to make it easy as possible for my team to add tests.

As of this writing, we are somewhere in the neighborhood of 2,500 tests. Most of the tests are unit tests. About half of those tests are for React components. The other half are for classes and utility functions. With that number of tests, it was starting to get painful to run the entire suite in one shot. Especially in CI for pull requests. The test runs were taking 20–30 mins some days and that is **_without_** collecting coverage.

This was a problem because my team will open 5 to 20 pull requests a day, and long test runs were killing our productivity.

We needed to speed this up. We needed something faster.

### **Solution**

Before I can get to the details on how we solved this, let us first take a small detour.

#### File Naming Conventions

At Parallax, our app follows a strict file naming convention where we’ve borrowed aspects from [Angular](https://angular.io/guide/styleguide#naming). Like many [React](https://reactjs.org/) projects, ours has a mix of components, constants, models, services, stores, utils, etc.

Generally, our convention is `.concern.ts` or `.concern.tsx`. I’ll show you some examples:

    domain/department/department.utils.ts
    domain/department/department.service.ts
    domain/department/models/Department.model.ts
    components/pages/department-page/DepartmentPage.tsx
    components/pages/department-page/DepartmentPage.constants.tscomponents/pages/department-page/DepartmentPage.store.ts
    components/pages/department-page/DepartmentPage.utils.ts
    components/ui/ui-button/UiButton.tsx

Why do we care (and we care a lot) so much about this structure? It makes it easy for a person or machine to find things.

If I want to find all the page stores in the application, it’s a pretty simple glob like this: `**/components/pages/**/*.store.ts`. Or if I wanted to find all the domain utils: `**/domain/**/*.utils.ts`. Or _all_ the utils: `**/*.utils.ts`.

***

#### Back To Tests

Ok, so why does any of this naming stuff matter?

Well, [Jest exposes configuration settings](https://jestjs.io/docs/configuration) that allow you to test files that match specific patterns. Because our naming patterns allow for easy slicing and dicing, we can setup some configurations that only grab certain kinds of files.

Before I go any further, let me show you what we see in [GitHub Actions](https://github.com/features/actions):

![](https://cdn-images-1.medium.com/max/1600/1*ZOIj4GrosbiQLDe5SRZBuw.png)run_tests job in GitHub Actions

Here is a pretty simple run: We build the app then run 11 different test suites.

As you can see, we did the whole thing in about 7 minutes. If we had run the entire suite with`yarn test`, it would have taken nearly 30 mins. 😮

#### Individual Test Scripts

How do we make this happen? I’ll admit that how we got here is not exactly clean. And there are some drawbacks.

There are two things we need to make this work:

* A configuration file for a concern
* An npm script for that concern (ex: `test:components`, `test:ts`) that runs jest using a configuration file.

We end up with several runs of specific concerns (components, stores, utils, etc). Then two extra runs targeting everything else: one for typescript files and one for typescript components.

Let’s see what this actually looks like:

![package.json excerpt with test commands](https://cdn-images-1.medium.com/max/1600/1*RDUuSO8uNPpZM8XFtQ2NsA.png)package.json excerpt with test commands

The matching configuration files:

![jest configuration files with concern.config naming convention](https://cdn-images-1.medium.com/max/1600/1*0JO6oaS8TwEeSCB51Vvogw.png)jest configuration files with concern.config naming convention

Each of these configuration files extend our `.base.config`, which makes the duplication a little easier to manage. The job of each config is to find the files we want to test.

A configuration for one of the concerns tests looks pretty simple:

Most of the magic here happens via the [`testRegex`](https://jestjs.io/docs/configuration#testregex-string--arraystring) configuration setting. You can see that all we’re doing is grabbing anything with `.store.test.ts` or `GlobalStore.test.ts`.

Pretty simple, eh?

How about once of the catch-all configurations? Surely those are more complex?

Nope. We leverage an additional configuration option, [`testPathIgnorePatterns`](https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring), to ignore all the concerns we already have test runs for. The idea with this configuration is that we _should_ pick up any test file that isn’t picked up by the other configs. The `.tsx` catch-all is basically the same as this one.

### Conclusion

What did we learn? We could speed up our tests by splitting them up into smaller runs all fired off at the same time via GitHub actions. This gives us faster CI runs and also several handy tests commands that developers can use locally.

This isn’t without issues, though, and there are a few worth calling out:

* Can’t consolidate coverage
* [Jest shards](https://medium.com/@mfreundlich1/speed-up-your-jest-tests-with-shards-776e9f02f637) are going to be a thing soon, which may invalidate this entire setup
* We don’t get a complete test coverage report from these split-up runs

Setting this up this way has necessitated an additional GitHub action that runs once nightly to collect coverage of the entire ui application. This job takes about 30 minutes to run, which is why we do it on its own away from the PRs.

In the end, this was a fun exercise. The team is able to burn through PRs without waiting unnecessarily for CI. It has meant adding some duplication and fluff with extra scripts and configs, but we fell the tradeoff is worth it…

at least until Jest Shards are a thing.

***

**References**

* [https://www.getparallax.com/](https://www.getparallax.com/ "https://www.getparallax.com/")
* [https://jestjs.io/](https://jestjs.io/ "https://jestjs.io/")
* [https://angular.io/](https://angular.io/ "https://angular.io/")
* [https://angular.io/guide/styleguide#naming](https://angular.io/guide/styleguide#naming "https://angular.io/guide/styleguide#naming")
* [https://reactjs.org/](https://reactjs.org/ "https://reactjs.org/")
* [https://jestjs.io/docs/configuration](https://jestjs.io/docs/configuration "https://jestjs.io/docs/configuration")
* [https://github.com/features/actions](https://github.com/features/actions "https://github.com/features/actions")
* [https://jestjs.io/docs/configuration#testregex-string--arraystring](https://jestjs.io/docs/configuration#testregex-string--arraystring "https://jestjs.io/docs/configuration#testregex-string--arraystring")
* [https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring](https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring "https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring")
* [https://medium.com/@mfreundlich1/speed-up-your-jest-tests-with-shards-776e9f02f637](https://medium.com/@mfreundlich1/speed-up-your-jest-tests-with-shards-776e9f02f637 "https://medium.com/@mfreundlich1/speed-up-your-jest-tests-with-shards-776e9f02f637")