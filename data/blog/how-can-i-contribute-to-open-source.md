---
date: 2022-01-11T20:27:39-06:00
layout:
- PostLayout
Draft: false
title: How Can I Contribute To Open-Source?
sub_heading: A high level guide on how to get started
summary: How you can contribute to open-source projects, what you should look for,
  and what are some of the first steps in the process.
tags:
- Software Engineer
- Software Development
- Engineering
- Open Source
- Software
authors:
- Nate Geslin
canonicalUrl: ''

---
![](https://cdn-images-1.medium.com/max/1600/0*ZITieZsqCOtO5JsT)Photo by [Ian Taylor](https://unsplash.com/@carrier_lost?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

In my very first software engineering interview I remember a question that was asked. _“What is one thing you’d like to accomplish in the next 5 years?”_

My answer was _“Contribute to open source”_. At the time, I had no idea what that even meant.

I hear about it all the time. Hell, half the internet (or more) is built on top of open source software. Surely there are projects that need help. I could help, right?

### What Is Open-Source

Wikipedia defines open-source as:

> [_Computer software_](https://en.wikipedia.org/wiki/Software "Software") _that is released under a_ [_license_](https://en.wikipedia.org/wiki/Open-source_license "Open-source license") _in which the_ [_copyright_](https://en.wikipedia.org/wiki/Copyright "Copyright") _holder grants users the rights to use, study, change, and_ [_distribute the software_](https://en.wikipedia.org/wiki/Software_distribution "Software distribution") _and its_ [_source code_](https://en.wikipedia.org/wiki/Source_code "Source code") _to anyone and for any purpose —_ [_Wikipedia_](https://en.wikipedia.org/wiki/Open-source_software)

### Find A Project

There are many different kinds of open-source projects, in all kinds of different languages. The first step to contributing to open-source is finding a project that needs help.

[GitHub](https://github.com/) suggests adding a dedicated file to a repository that documents the contributing process. If a repo has this file, it’s likely there will accept contributors. Open-source projects can be found in places other than GiHub, too.

### A Tale Of Two Projects

Open-source is a very broad definition for a wide array of unique projects. For the purpose of this article, and more specific explanation, I’m going to focus on two specific projects. One is a small [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) project and the other is an enterprise application using [Ruby on Rails](https://rubyonrails.org/) and [Go](https://go.dev/).

![](https://cdn-images-1.medium.com/max/1600/1*lFmBc34AazXbwz5ZGpofdQ.png)[openScope Air Traffic Control Simulator](http://openscope.co)

#### OpenScope

OpenScope is the first open-source project I contributed to. This type of project is a great first project. It’s small, it needs help, and the community is active.

Contributing to this project starts with reading the [Contributors Guide](https://github.com/openscope/openscope/blob/develop/CONTRIBUTING.md). In that document, we call out all the steps you need to follow to get up and running. Who you should talk to, where to reach them, and also some expectations.

Once you clone the repo and get everything running locally, you can browse through the [Open Issues](https://github.com/openscope/openscope/issues) and find one to start work on. Working on OpenScope is a little different than some projects in that we have two tracks of contributing: Airport Building and Code Changes.

We don’t really plan work, it’s pretty much first come first served. It’s also really laid back. All contributions are welcome! There is zero time crunch since we try to release once a month. If your PR doesn’t get finished by the end of the month, no worries, there is always next month.

OpenScope, and projects like it, are a great first project. Zero pressure and little chance of catastrophically breaking something.

#### Gitlab

[Gitlab](https://about.gitlab.com/) is a drastically different kind of project. Gitlab is a massive enterprise software solution. If you’ve never heard of Gitlab, it’s a major competitor to GitHub. One major difference is that you can self-deploy instances of Gitlab on your own systems. It also has built-in support for CI/CD solutions, docker registries, etc. There is a lot to it!

And they’re open-source! You can actually [contribute to Gitlab](https://about.gitlab.com/community/contribute/)!

Gitlab has an entire set of documentation dedicated to setting expectations and bringing new developers up to speed. They have dedicated setup scripts and procedures as well. This makes the setup a bit less painful than it might be for other projects of similar scale, but it’s not without challenges. The first time I attempted to get setup up, it took me a couple hours.

Contributing to Gitlab is significantly more intimidating than something like OpenScope. But, if you like a challenge, you can definitely do it! There are certainly plenty of opportunities. As I write this, there are almost [**18,000** issues](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=weight&state=opened&assignee_id=None&label_name\[\]=Accepting+merge+requests) labeled `Accepting merge requests`.

You don’t have to be a developer to contribute, either. You can contribute to other non-engineering areas of Gitlab.

No matter where you want to contribute, expect to spend time reading documentation. It’s quite good. They clearly set expectations for all kinds of things, which are great, but also make the project kinda scary for a first timer.

***

### Conclusion

At the end of the day, contributing to open-source boils down to the following: Find a project, read their documentation, follow their process(es), then open a PR. That’s all there is to it!

The hardest part is finding the right project and making that first PR. It’s really no more difficult than that.

—

_If you are interesting in contributing to open-source and want to learn more. I’d encourage everybody to on head over to_ [_The Open Source Guide_](https://opensource.guide/how-to-contribute/)_. There you will find a comprehensive how-to that will guide you, in detail, through the process._

Good luck out there!

***

#### References

* [https://en.wikipedia.org/wiki/Open-source_software](https://en.wikipedia.org/wiki/Open-source_software "https://en.wikipedia.org/wiki/Open-source_software")
* [https://github.com/](https://github.com/ "https://github.com/")
* [https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors "https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors")
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "https://developer.mozilla.org/en-US/docs/Web/JavaScript")
* [https://rubyonrails.org/](https://rubyonrails.org/ "https://rubyonrails.org/")
* [https://go.dev/](https://go.dev/ "https://go.dev/")
* [http://openscope.co](http://openscope.co "http://openscope.co")
* [https://about.gitlab.com/community/contribute/](https://about.gitlab.com/community/contribute/ "https://about.gitlab.com/community/contribute/")
* [https://gitlab.com/gitlab-org/gitlab/-/issues?sort=weight&state=opened&assignee_id=None&label_name](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=weight&state=opened&assignee_id=None&label_name "https://gitlab.com/gitlab-org/gitlab/-/issues?sort=weight&state=opened&assignee_id=None&label_name")[\[\]=Accepting+merge+requests](https://gitlab.com/gitlab-org/gitlab/-/issues?sort=weight&state=opened&assignee_id=None&label_name\[\]=Accepting+merge+requests)
* [https://opensource.guide/how-to-contribute/](https://opensource.guide/how-to-contribute/ "https://opensource.guide/how-to-contribute/")