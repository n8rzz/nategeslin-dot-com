---
date: 2021-11-05T23:07:24-05:00
layout:
- PostLayout
Draft: false
title: Write Tests With Sentences First, Code Second
sub_heading: Don’t dive right in, first write an outline then translate that to code
summary: I see people struggle writing tests when they are first starting out because
  they don't have any guardrails or strategies to start with.
tags:
- JavaScript
- Programming
- Software Testing
- Software Development
- Coding
authors:
- Nate Geslin
canonicalUrl: ''

---
![](https://cdn-images-1.medium.com/max/1600/0*vbD6ltLelofYS52D)Photo by [Ben White](https://unsplash.com/@benwhitephotography?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Problem

In software, naming is often said to be one of the [hardest parts](https://martinfowler.com/bliki/TwoHardThings.html). From what I’ve seen, writing tests is right up there too! I see people struggle with tests all the time. They get overwhelmed or frustrated and just skip it, which is a bad thing for everybody.

Naming is hard because developers are rarely given a _guide to naming._ Over time, they learn tips and tricks and develop strategies to make naming easier. The same can be said about testing.

What follows is a strategy I like to use when writing tests. It’s one I’ve encouraged my team to use as well with great success.

***

#### _Prelude_

First, the strategies outlined here work with most languages. The examples below are presented in Javascript and the code examples assume [Jest](https://jestjs.io/) is the test library.

Second, this is not [TDD](https://en.wikipedia.org/wiki/Test-driven_development). TDD is a whole other animal and beyond the scope of this article.

Third, the more seasoned developers may notice this looks very similar to [gherkin](https://cucumber.io/docs/gherkin/reference/). Your eyes are not lying to you, this strategy uses similar words.

Fourth, I’m sure people much smarter than I have already coined these strategies. I, and those around me, can’t be the only ones who think about writing tests this way. If you know of a better source, or you’ve seen this before, please let me know in the comments.

***

### Define

Naming is hard because there are so many options. Tests are hard because people rarely talk about strategy, guidelines, or even where to start. Sure, there is information out there, but I’ve found it difficult for beginners to understand and actually put it to work. Frequently they get scared off by the foreign-looking syntax and if that doesn’t scare them off, they get stuck on what to write for `describe` or `test` blocks.

I have found success by breaking tests up into sentences first. Before we write a single line of code, we first write down what we want to cover. We should concentrate on the logical branches and not get bogged down with code. At least, not just yet.

***

Each group of tests should have three sections: `topic`, `state(s)`, and `expected result(s)`.

**Topic:** The thing we are testing. This could be a function, a class method, a React component, etc

**States:** These are the variations a _Topic_ might expect to handle. There will be any number of these and there may be extensions of `States`, too.

**Expected Result**: Given specific inputs, we should expect a specific result.

![](https://cdn-images-1.medium.com/max/1600/0*a0jdH-XJKYHbfBXO)Photo by [Kelly Sikkema](https://unsplash.com/@kellysikkema?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Start With Sentences

I encourage my team to start with sentences that look somewhat like pseudo-code. This is helpful for those who are not as comfortable writing tests. This exercise allows you to focus on identifying what to test before worrying about how to write any code to do the test.

Let’s see what this structure looks like.

    topic
    	- when (a specific state)  
    		- should (the expected result)

For more complex states, we extend this a bit to look like this

    topic
    	- when (a specific state)  
    		- and (and extension to this state)    
    			- should (the expected result)  
    		- and (and extension to this state)    
     			- should (the expected result)

There are some keywords here that we haven’t talked about yet. These words are important and should always be used to start each sentence.

**When:** This is the first variation of a `State`.   
_example: “when passed a negative number”, “when prop is undefined”, “when the moon is full”, etc._

**And:** This is an extension of the parent `State`. An additional concern or logical branch that might occur in `State`.  
_example: “and #currentSearchTerm is an empty string”, “and #currentSearchTerm includes #name”, etc_

**Should:** The expectation. What do we expect to happen here? This sentence will probably look similar to your final assertion.   
_example: “should not throw”, or “should return and instance of Foo”, “should return an error”, etc._

Sentences for each of these should be short and unique. If you find your test descriptions going past 120 characters, they are too long.

In my opinion, you really don’t need much more in terms of structure. I’d encourage you to nest `when` and `and` no deeper than 3–4 levels. With this you have readability, context, and simplicity. Its easy to maintain and there are built-in expectations for _everyone_ as they write tests. This leads to sameness, which then leads to maintainability. 🎉

***

![](https://cdn-images-1.medium.com/max/1600/0*SQkL1MZei5vaU6ih)Photo by [AltumCode](https://unsplash.com/@altumcode?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

#### Write Some Tests

Now that we’ve gone over the theory, let’s put it to work! Look at the small function below. We will use this function as a `Topic` in some tests so we can see how this all might work in real life.

A simple max function. _Yes, there is a javascript built-in that does this already. For demonstration purposes only._

Here we have a simple function called `max` that takes in two values, compares them, and returns the maximum of the two. There is some logic in this function that we need to test. Using _sentences and not code_, let’s begin.

***

First think about some of the possible logical branches here and then use the words we talked about above to explain them. Starting is frequently the hardest part, so let’s start small. We won’t even care about the `expectations` here, only some of the `states`.

What are some of the logical branches we should care about here? This doesn’t need to be perfect, or even complete, we just need somewhere to start.

    max
    	- when `valueOne` is equal to `valueTwo`
        - when `valueOne` is less than `valueTwo`
        - when `valueOne` is greater than `valueTwo`

That seems a little too easy right? Let us continue by adding some of the `expectations` that go along with these states.

    max
    	- when `valueOne` is equal to `valueTwo`  
        	- should return `valueOne`

    - when `valueOne` is less than `valueTwo`  
    	- should return `valueTwo`

    - when `valueOne` is greater than `valueTwo`  
    	- should return `valueOne`

There you have it! We have some sentences that we can translate to code. These sentences **_read like english_** and not pseudo code. Go ahead, read one of those blocks to yourself right now.

Reads nice doesn’t it 😉

Are there any conditions here I missed? (_Hint:_ **yes**). Can you find them and write your own sentence(s)?

#### Translate Sentences To Tests

Using the sentences we already wrote we can now translate those into something that looks like a real test file:

Believe it or not, this is just enough code to run! Jest will output different colors for [`test.todo()`](https://jestjs.io/docs/api#testtodoname) blocks, so this is actually valid code! Personally, I like to scaffold out my tests this way.

Using `todo` doesn’t give us much other than a list of todos, though, so let’s fill these in with some real tests:

You can see, there isn’t much code required to make these tests test things. We’ve already done the hard part by writing sentences to determine most of what we wrote here in code. Doing that part first, makes writing the test pretty simple.

There are a few other things I’ll call out here as personal preferences, your mileage may vary:

* use a variable named `result` to store the output of the item under test
* when it makes sense, use a variable named `expectedResult` to store, you guessed it, the expected result

Doing this makes your tests read _really_ well_:_

    expect(result).toEqual(expectedResult)

This has the added benefits of A) having a reliable place to change an expectation if the code changes in the future, and B) keeps the assertion super clean.

What we have is a pretty good start! These tests read well and give you some decent test coverage. However, there is some room for improvement. In the interest of making our tests **_read well_**, instead of using magic numbers we should add some meaning to those numbers.

Moving the inputs to variables gives them context. Those numbers now _mean_ something. Giving these things names makes it easy to understand what is going on and, more importantly, what the context is. It makes it easy for anyone to look at these tests and understand what is happening.

#### Conclusion

There you have it! Write tests with sentences first, then move them into code. It makes the process predictable, less scary, and easy to teach.

    topic -> when -> should

Every time I write tests I start this way. I flesh out the logical branches, then the expectation blocks, then start filling in the test code. I do this same exercise when scoping out new work for my team, too, and in some new cases, have included these sentences in the actual tickets. I’m anxious to see how that plays out, stay tuned!

***

#### References

* [https://martinfowler.com/bliki/TwoHardThings.html](https://martinfowler.com/bliki/TwoHardThings.html "https://martinfowler.com/bliki/TwoHardThings.html")
* [https://en.wikipedia.org/wiki/Test-driven_development](https://en.wikipedia.org/wiki/Test-driven_development "https://en.wikipedia.org/wiki/Test-driven_development")
* [https://cucumber.io/docs/gherkin/reference/](https://cucumber.io/docs/gherkin/reference/ "https://cucumber.io/docs/gherkin/reference/")
* [https://jestjs.io/](https://jestjs.io/ "https://jestjs.io/")
* [https://jestjs.io/docs/api#testtodoname](https://jestjs.io/docs/api#testtodoname "https://jestjs.io/docs/api#testtodoname")

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)