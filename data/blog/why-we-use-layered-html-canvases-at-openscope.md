---
date: 2021-11-22T23:01:28-06:00
layout:
- PostLayout
Draft: false
title: Why We Use Layered HTML Canvases At OpenScope
sub_heading: ''
summary: For years, we faced performance issues. We solved some of them by using stacked
  HTML canvas elements and rendering to multiple canvases.
tags:
- JavaScript
- Programming
- HTML
- Web Development
- Coding
authors:
- Nate Geslin
canonicalUrl: ''

---

![](https://cdn-images-1.medium.com/max/1600/1*dfcbfU7ViLNq7vk8G2vrlg.png)OpenScope Air Traffic Control Simulator

For several years, I was an active maintainer of a project called [OpenScope](https://www.openscope.co/). OpenScope is a browser-based air traffic control simulator driven by JavaScript, HTML canvas, and JSON. There is no back end, it’s all done in the browser. It’s also open-source, anybody can [contribute](https://github.com/openscope/openscope/blob/develop/CONTRIBUTING.md) as long as you follow the guidelines and can speak aviation.

### Problem

When I first started contributing to the project, there were issues with performance.

***

Before I continue, let’s cover some basics.

**Canvas:** The [canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) provides a way to draw graphics using javascript and the HTML `canvas` element.

**Animate**: to give (a movie, character, or drawing) the _appearance_ of movement using animation techniques.

Animating in code is like drawing a flip book.

In order for things to appear to move, they must be redrawn making only small changes. A collection of these small changes, drawing over time, make the _appearance_ of movement.

This is the same concept only done with code instead of pen and paper.

One other thing of note here is that with code, between each frame (page), we must do math to calculate exactly where the next drawing should go.

#### **Game Loop:**

> The **game loop** is the overall flow control for the entire game program. It’s a loop because the game keeps doing a series of actions over and over again until the user quits. Each iteration of the game loop is known as a **frame**. Most real-time games update several times per second: 30 and 60 are the two most common intervals. If a game runs at 60 FPS (**frames per second**), this means that the game loop completes 60 iterations every second.

_— source:_ [_https://www.informit.com/articles/article.aspx?p=2167437&seqNum=2_](https://www.informit.com/articles/article.aspx?p=2167437&seqNum=2 "https://www.informit.com/articles/article.aspx?p=2167437&seqNum=2")

### Brief Introduction To OpenScope UI

Running a simulator of any kind requires animation. In order to animate with code, you need to have a [**Game Loop**](http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing)**.** In order to do that on a browser with javascript and in a performant way, you need to use [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame).

We draw **_a lot_** of things on the HTML canvas: Navaids, terrain, moving aircraft, text, aircraft routes, SIDs, STARs, runways, etc.

![](https://cdn-images-1.medium.com/max/1600/1*2UiCn6TKhY7OVYB0Hmkxyg.png)OpenScope view with all the visualizations on: Navaids, Runways, Airport, SIDs, STARs, and a selected aircraft route

As you can see, there is a lot going on here. The menubar at the bottom and the flyout on the right are both HTML elements and not part of the canvas or the animation loop.

### Performance Problem

We continued to get reports of choppy animation, or computer fans whirring louder than normal after playing for a bit. So we decided to investigate.

It didn’t take long for us to discover we were doing too much between frames and were “_dropping frames”_. Dropping frames means that a calculation from one frame is carrying over to the next, meaning we don’t have enough time to render the next frame on time. Imagine taking random pages out of the flip book above, that’s a dropped frame.

One pass through the `performance` tab on Chrome and it was painfully obvious we were dropping a ton of frames.

The simple cause was we were doing too much between frames. Looking at the image above, I’m sure you can see why. Everything in that view needed to be redrawn between each frame.

***

Up till this point in my career, I had touched the canvas api only twice. I’d never had a chance to dive deep into canvas problems before, so I was looking forward to this challenge.

After some research, I discovered two things:

* The `canvas` element is an HTML element (duh) that can receive styles via CSS. Things like `background-color` and stuff. This seems obvious now, but was a bit of a revelation at the time.
* The `canvas` element _can_ have a transparent background.

### Stack The Canvases

For this next realization, I don’t know if I saw this in an article or came up with it myself. I’m not usually this clever, so let's say I read it somewhere.

If we could identify the elements that changed frequently and those that did not, we could better separate things to redraw only when needed. Furthermore, if we could make that determination, we could draw each on their own HTML canvas.

We could stack HTML canvases!

![](https://cdn-images-1.medium.com/max/1600/1*876yWGk1JlzpYqJ2uEltSA.png)

Borrowing two terms from React `shallowRender` and `deepRender` to describe what each canvas would do, we got to work coding it up.

We broke renderable things up into two groups:

* Things that need to change every frame
* Things that need to change when the view changes (pan/zoom). Aircraft path, terrain, navaids, SIDS/STARS, airspace, etc.

It’s not a surprise that the expensive items are all part of the `deepRender` group. Only updating each of those when needed was the big breakthrough and really made a huge difference in performance.

You can see how we manage drawing to multiple HTML canvases [here](https://github.com/openscope/openscope/blob/develop/src/assets/scripts/client/canvas/CanvasController.js#L402) in the [CanvasController](https://github.com/openscope/openscope/blob/develop/src/assets/scripts/client/canvas/CanvasController.js#L402).

![](https://cdn-images-1.medium.com/max/1600/0*iFGcJaKAlIDmCbwT)Photo by [Sandie Clarke](https://unsplash.com/@honeypoppet?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Conclusion

The morals of this story are:

* HTML `canvas` elements can have a transparent background and can be stacked on top of each other
* only re-draw expensive items when you need to

See this code in action at [OpenScope](http://openscope.co) or visit our [repo](https://github.com/openscope/openscope).

***

#### References

* [https://www.openscope.co/](https://www.openscope.co/ "https://www.openscope.co/")
* [https://github.com/openscope/openscope/blob/develop/CONTRIBUTING.md](https://github.com/openscope/openscope/blob/develop/CONTRIBUTING.md "https://github.com/openscope/openscope/blob/develop/CONTRIBUTING.md")
* [https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API")
* [https://www.informit.com/articles/article.aspx?p=2167437&seqNum=2](https://www.informit.com/articles/article.aspx?p=2167437&seqNum=2 "https://www.informit.com/articles/article.aspx?p=2167437&seqNum=2")
* [http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing](http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing "http://isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing")
* [https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame "https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame")
* [https://github.com/openscope/openscope](https://github.com/openscope/openscope "https://github.com/openscope/openscope")
* [https://github.com/openscope/openscope/blob/develop/src/assets/scripts/client/canvas/CanvasController.js#L402](https://github.com/openscope/openscope/blob/develop/src/assets/scripts/client/canvas/CanvasController.js#L402 "https://github.com/openscope/openscope/blob/develop/src/assets/scripts/client/canvas/CanvasController.js#L402")

_More content at_ [_plainenglish.io_](http://plainenglish.io/)_. Sign up for our_ [_free weekly newsletter_](http://newsletter.plainenglish.io/)_. Get exclusive access to writing opportunities and advice in our_ [_community Discord_](https://discord.gg/GtDtUAvyhW)_._