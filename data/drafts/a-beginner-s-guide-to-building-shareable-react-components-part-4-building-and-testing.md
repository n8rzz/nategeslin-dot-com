---
date: 
layout:
- PostLayout
Draft: true
title: 'A Beginner’s Guide To Building Shareable React Components, Part 4: Building
  and Testing'
sub_heading: ''
summary: ''
tags: []
authors:
- Nate Geslin
canonicalUrl: ''

---
### A Beginner’s Guide To Building Shareable React Components, Part 4: Building and Testing

#### Enough chit-chat, let’s build!

Series review

### Design Review

As the engineer doing the work, your very first step should be to review the planning that has already been done. Someone put time and effort into thinking about how this thing should go together. They possibly made some assumptions.

First things first: are those assumptions still valid and are there any gaps in the plan? Were there any questions that still need answers?

Something else to consider is the gap of time between when planning occurred and today. Was this thing planned months ago? Years ago? As plans age so do assumptions. Decisions may have been made in a plan from a year ago that the team has since changed. Possibly several times.

If a plan is old be cautious.

#### Assumptions And Questions From Planning

Lucky for us our plan is relatively fresh. We are building [this thing](https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1):

![](https://cdn-images-1.medium.com/max/1600/1*99Te06XzOxbaxqVa7rBg9A.png)[https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1](https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1 "https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1")

Let’s review the assumptions and questions we had left over from planning. Now that work is beginning, we have some (fictional) answers to our assumptions and questions!

* `articleUrl`, `caption`, `imageUrl`, and `title` props are all required and should always be passed — **true**
* The accordion trigger, when present, will always be on the right side — **true**
* The accordion trigger will always use the same icon defined internally — **true**
* `Read More` will always be a link — **true**
* `Read More` will not be configurable, it should always be `Read More` — **true**

Seems whoever did the planning was in synch with UX 😉. Seriously, though, on good teams this happens. The lead, or person doing the planning, develops a good handle on what the design is and what it should do. They also learn how the UX team likes to solve problems.

It’s like any kind of team; over time you learn tendencies and it makes things _way_ easier because you can make good guesses on direction.

Iterate

### Conclusion

***

#### References

* [https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1](https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1 "https://www.figma.com/file/IUAl0fGpSOBYzwSIfAnWXs/shareable-react-components?node-id=0%3A1")