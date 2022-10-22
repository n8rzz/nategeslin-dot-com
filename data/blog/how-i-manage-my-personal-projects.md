---
date: 2021-11-28T20:45:49-06:00
layout:
- PostLayout
Draft: false
title: How I Manage My Personal Projects
sub_heading: Free Your Mind To focus On How, Not What
summary: From simple to complex, today we cover several strategies to effectively
  keep a personal project moving efficiently
tags:
- Software Engineering
- Personal Growth
- Project Management
- Git
- Side Project
authors:
- Nate Geslin
canonicalUrl: ''

---

![](https://cdn-images-1.medium.com/max/1600/0*NjUAs199sd1RB0Gr)Photo by [Andrew Neel](https://unsplash.com/@andrewtneel?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

Do you find yourself [tinkering](https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459) with something new? Do you find yourself working on some cool new idea in your free time?

Yeah, me too.

Do you keep track of what you want to work on next? You are keeping track of the work, right?

[**Tinker With Purpose**  
_Have a Goal In Mind Before Tinkering_medium.com](https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459 "https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459")

***

Over the years I have worked on many personal projects. I’m a builder and I like to build things. I also have two young children. So when I have some time to work on my projects, I don’t want to spend time remembering what the heck I wanted to work on. I want to jump right in and get working right away.

#### Write It Down!

Someone told me once:

> Ideas come and go. Write down your ideas and remove the need to remember them.

Writing things down makes it much easier to focus on the work. When you start, you don’t have to spend time _remembering_ what to work on. It’s so much easier to finish work when you know what that work actually is.

I have found success when I run my personal projects more like a Project Manager. Where I take time to write out bits of work, setup segments of work (sprints, if you will 😉), and estimate that work. This way I am able to do the work more efficiently. Not only that, I have a place to practice estimation, scoping, delivery and other things I do during my day job.

![](https://cdn-images-1.medium.com/max/1600/0*qOdd1TFDP0kdkEiM)Photo by [Elizaveta Dushechkina](https://unsplash.com/@kallyua?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

#### Where Do I Start?

I will start by saying I don’t do all this for every project. Sometimes it doesn’t make sense. I’m working on something small, I’m messing around, or it’s a thing that I know won’t live long, etc.

However, for the more involved projects, these are the things I do to keep it running smoothly.

***

### Version Control

> Put your project in version control!

I start every project the same way: I use [Git](https://git-scm.com/). This was a habit I really started to practice after going through [The Ruby On Rails Tutorial](https://www.railstutorial.org/) (by Michael Hartl) a couple times, back in the early 2010’s. I was still pretty new to git, so it was good practice to continue doing it.

You should always practice good habits, even with personal projects. We use version control in our work, we should use it in our own projects too. This has the added benefit of proving a sandbox to play in. It’s way less risky to play with git on a personal project.

This doesn’t mean I always push to a remote. It does mean each project I’m working on is _ready_ to be pushed to a remote if I decide to do that at some point in the future.

### Remote Repository

> Create a remote git repository

This could be with any number of the available Git providers: [Github](https://github.com/), [Gitlab](https://about.gitlab.com/), [Azure Repos](https://azure.microsoft.com/en-us/services/devops/repos/), etc.

I usually go with Github or Gitlab, but the choice here isn’t so much about git. The choice here is about other features available like issues, projects, CI/CD options, registries, etc.

### Issues

> Use issues management to keep track of tasks

Most remote git services like [Github](https://github.com/features/issues/) or [Gitlab](https://docs.gitlab.com/ee/user/project/issues/) support some form of issue management. This is extremely useful for popular projects because it provides a place for users to call out bugs or request new features.

![](https://cdn-images-1.medium.com/max/1600/1*zNVEGhzDMKiHf7xCAwB5Dg.png)GitHub Issues

![](https://cdn-images-1.medium.com/max/1600/1*saaQwto5ZUVnGWAWUeNEKw.png)Gitlab Issues

For your own projects, you can use these too! It’s a great way to organize work. You start this phase by writing things down. Thats it, you don’t need to add labels or effort or anything like that. Just write it down!

You can take this one step further by adding labels like `Bug` or `Feature` or `Enhancement`, etc.

![](https://cdn-images-1.medium.com/max/1600/1*Cv87GZBvbmwBbUHSglV1ug.png)[https://github.com/n8rzz/chess-stats/issues](https://github.com/n8rzz/chess-stats/issues "https://github.com/n8rzz/chess-stats/issues")

This provides something to build on. If you’re using only titles, thats cool, you now have a todo list. If you’re using labels, even better because now you can easily group work. Most of the time I try to keep things simple. I use each issue to store links related to a topic.

![](https://cdn-images-1.medium.com/max/1600/1*zFLL7zAKaLV-by09TZSm_Q.png)[https://github.com/n8rzz/chess-stats/issues/30](https://github.com/n8rzz/chess-stats/issues/30 "https://github.com/n8rzz/chess-stats/issues/30")

Sometimes I use checkboxes to build a list of things to do for a single feature or bug.

![](https://cdn-images-1.medium.com/max/1600/1*Mir3bLV6leeTIlwwPXISTA.png)[https://github.com/n8rzz/chess-stats/issues/26](https://github.com/n8rzz/chess-stats/issues/26 "https://github.com/n8rzz/chess-stats/issues/26")

Your goal should be to leverage issues for information storage. Use issues to store ideas, bugs, and any pertinent information related to each item.

Write it down.

Once it is written down you no longer need to remember it.

### Issue Management

> Use tools to manage groups of issues and sequence work

If you’ve made it this far you have a remote git repository and a list of issues related to your project. These issues might be bugs, ideas for features, or enhancements, or possibly just notes. We have a new problem, though; How and when do we do all this work?

Well, with Github you can use [Github Projects](https://github.com/features/issues/).

![](https://cdn-images-1.medium.com/max/1600/1*zNpIKSlnyHmz1-I1n7IYmg.png)Github issues — [https://github.com/features/issues/](https://github.com/features/issues/ "https://github.com/features/issues/")

Gitlab has something similar called [Boards](https://docs.gitlab.com/ee/user/project/issues/).

![](https://cdn-images-1.medium.com/max/1600/1*F01pRnwwiHguhGRczmreOw.png)Gitlab Boards — [https://gitlab.com/gitlab-org/gitlab/-/boards](https://gitlab.com/gitlab-org/gitlab/-/boards "https://gitlab.com/gitlab-org/gitlab/-/boards")

Both are excellent ways to manage larger efforts. This could be as simple creating groups of items to tackle over a long weekend, to something as complex as assigning work for a large team.

***

Github and Gitlab didn’t always have Projects or Boards. So, naturally, there are open-source alternatives out there too. Personally, I’ve had great luck with one called [Zube](https://zube.io/). We use Zube on [OpenScope](https://www.openscope.co/) and it’s awesome!

![](https://cdn-images-1.medium.com/max/1600/1*iue7XSMznfLDxkcVRWYWtg.png)zube.io

Zube allows you to create higher level groupings of issues like Epics and Releases. There are a whole host of [features](https://zube.io/docs/components) that can help super-charge your development planning.

At the end of the day, all of these options are simply another layer on top of issues. As long as you create issues, you can leverage any of these options to plan tactically.

***

There are two applications I have not mentioned here: [Jira](https://www.atlassian.com/software/jira) and [Azure Devops](https://azure.microsoft.com/en-us/services/devops/boards/). I wouldn’t recommend either for most personal projects. They are great systems, but both are complex and require a lot of setup. If our goal is to efficiently use our time by planning work, it makes little sense to spend that time planning how to plan. I’ll just say avoid Jira and Azure Devops for personal projects unless you know what you’re getting into.

***

### Conclusion

Whew, you made it!

We talked about many different ways to manage a personal project. We start small and each step builds on the last. We establish good habits from the beginning and continue to build on them as things get more complex.

If you remember anything from this article I’d like it to be this:

> Establish good habits that build on the previous good habits

This goes back to the age-old phrase: **_Baby Steps_**. As long as you’re moving in the right direction, even if it’s slowly, you’re going to improve.

***

![](https://cdn-images-1.medium.com/max/1600/0*tQlVCtcTqlWvXhcC)Photo by [Cesar Carlevarino Aragon](https://unsplash.com/@carlevarino?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

#### References

**Tools**

We covered quite a few tools in this article. Here is a quick recap.

**Remote Git Repositories and basic Issue Tracking**

* [Github](https://github.com/)
* [Gitlab](https://about.gitlab.com/)

**Project Management Integrations**

* [Zube](https://zube.io/)
* [Jira](https://www.atlassian.com/software/jira)
* [Azure Devops](https://azure.microsoft.com/en-us/services/devops/boards/)

#### Links

* [https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459](https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459 "https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459")
* [https://git-scm.com/](https://git-scm.com/ "https://git-scm.com/")
* [https://github.com/](https://github.com/ "https://github.com/")
* [https://about.gitlab.com/](https://about.gitlab.com/ "https://about.gitlab.com/")
* [https://azure.microsoft.com/en-us/services/devops/repos/](https://azure.microsoft.com/en-us/services/devops/repos/ "https://azure.microsoft.com/en-us/services/devops/repos/")
* [https://github.com/features/issues/](https://github.com/features/issues/ "https://github.com/features/issues/")
* [https://docs.gitlab.com/ee/user/project/issues/](https://docs.gitlab.com/ee/user/project/issues/ "https://docs.gitlab.com/ee/user/project/issues/")
* [https://zube.io/](https://zube.io/ "https://zube.io/")
* [https://www.openscope.co/](https://www.openscope.co/ "https://www.openscope.co/")
* [https://zube.io/docs/components](https://zube.io/docs/components "https://zube.io/docs/components")
* [https://www.atlassian.com/software/jira](https://www.atlassian.com/software/jira "https://www.atlassian.com/software/jira")
* [https://azure.microsoft.com/en-us/services/devops/boards/](https://azure.microsoft.com/en-us/services/devops/boards/ "https://azure.microsoft.com/en-us/services/devops/boards/")
* [https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459](https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459 "https://medium.com/counterarts/tinker-with-purpose-9fb4f5a52459")