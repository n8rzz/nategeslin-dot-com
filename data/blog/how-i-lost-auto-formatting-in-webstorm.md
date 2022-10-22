---
date: 2022-04-19T19:42:10-05:00
layout:
- PostLayout
Draft: false
title: How I Lost Auto Formatting In WebStorm!
sub_heading: " …And How I Got It Back Again"
summary: I switched from VSCode to WebStorm and prettier would not auto-format. After
  months of manually using a shortcut, a colleague helped me fix it in 2 mins
tags:
- Webstorm
- Development
- Software Development
- Engineering
- Tools
authors:
- Nate Geslin
canonicalUrl: ''

---

![](https://cdn-images-1.medium.com/max/1600/0*igMZqR6B08uPgHKL)Photo by [Eric Krull](https://unsplash.com/@ekrull?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

I switched from [VSCode](https://code.visualstudio.com/) to [WebStorm](https://www.jetbrains.com/webstorm/) and I couldn’t, for the life of me, get [prettier](https://www.jetbrains.com/help/webstorm/prettier.html) to auto-format. After months of using a keyboard shortcut, one of my colleagues was able to find the issue and we got it fixed.

***

### TL;DR

Are you using WebStorm with the VSCode Keymap and auto format on save doesn’t work?

Auto format only works with _“Save All”_ actions and the VSCode Keymap remaps that to `ctrl + k, s`. Remapping `cmd + s` to the `Save All` action in WebStorm will allow your documents to auto format on save again.

_see:_ [https://youtrack.jetbrains.com/issue/WEB-51914#focus=Comments-27-5103686.0-0](https://youtrack.jetbrains.com/issue/WEB-51914#focus=Comments-27-5103686.0-0 "https://youtrack.jetbrains.com/issue/WEB-51914#focus=Comments-27-5103686.0-0")

***

### History

I’m a VSCode guy. I have been for several years now and it’s been awesome! In the real world I work on a medium-sized Typescript project. About a year ago, VSCode started to struggle mightily.

Our app was (and still is) growing and my editor was slowing down my productivity. Autocomplete was taking _forever_, auto-imports were frequently incorrect, and it was starting to become a bad experience.

So, much to the joy of one [Robert S (codeBelt)](https://medium.com/u/32c8aef7a385), I finally switched to WebStorm. This wasn’t my first foray into WebStorm, so I wasn’t completely lost. This time around I had a better idea of what I wanted, what I did not want, and things should look.

#### Setup

I won’t get too deep into my WebStorm setup, quite frankly that is a topic for another post.

The thing that made WebStorm usable for me this time around was the [VSCode Keymap](https://plugins.jetbrains.com/plugin/12062-vscode-keymap). Over the years I’ve worked hard to leverage shortcuts as much as possible. The VSCode Keymap is comfortable to me and I don’t want to learn another one at the moment, unless it’s Vim.

### Problem

Like many UI projects, we leverage an array of linting and code formatting tools. Prettier is one of the tools my team uses the most.

When Prettier is prettifying, things are great! You can code fast and maybe a little sloppy, and Prettier makes things all better.

Soon after I made the switch to WebStorm, Prettier stopped auto formatting. I’d hit save and nothing would happen. The file would not auto format.

![](https://cdn-images-1.medium.com/max/1600/0*KB61ZEFAfTRoIsQJ)Photo by [Noah Buscher](https://unsplash.com/@noahbuscher?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

I spent some time going over settings with my colleagues and everything I had, they had. We were all stumped.

Thankfully, there is a shortcut that I could use to manually format each file.

    cmd + alt + shift + p

Not exactly an easy one to remember, or perform.

### Solution

I worked this way within WebStorm for probably 6 months. Generally, my experience in WebStorm this time around was way better than the last. The VSCode Keymap made a big difference for me.

One day a colleague asked if I was still having issues with prettier and WebStorm.

![](https://cdn-images-1.medium.com/max/1600/1*jaDBMw6UePpIO8xy7Wu7DA.png)

It worked! It was the darn keymap!

As you can see from the exchange, I can have my cake and eat it too with a slight keymap modification.

Two minutes later I was back on track auto formatting like a big boy!

***

### Conclusion

The people I work with are awesome! We rarely give up on a problem and, if we do, we only set it down for a bit to rest and come back to it later. Without Casey’s help, I doubt I would have found this one.

Using the shortcut worked but it was a pain. I wouldn’t always remember to use it either, and I’d still miss things. So it lead to extra work now and then.

I’m so happy this was such an easy fix!

—

**References**

* [https://code.visualstudio.com/](https://code.visualstudio.com/ "https://code.visualstudio.com/")
* [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/ "https://www.jetbrains.com/webstorm/")
* [https://plugins.jetbrains.com/plugin/12062-vscode-keymap](https://plugins.jetbrains.com/plugin/12062-vscode-keymap "https://plugins.jetbrains.com/plugin/12062-vscode-keymap")
* [https://www.jetbrains.com/help/webstorm/prettier.html](https://www.jetbrains.com/help/webstorm/prettier.html "https://www.jetbrains.com/help/webstorm/prettier.html")
* [https://youtrack.jetbrains.com/issue/WEB-51914#focus=Comments-27-5103686.0-0](https://youtrack.jetbrains.com/issue/WEB-51914#focus=Comments-27-5103686.0-0 "https://youtrack.jetbrains.com/issue/WEB-51914#focus=Comments-27-5103686.0-0")