---
date: 2021-12-03T20:40:24-06:00
layout:
- PostLayout
Draft: false
title: Have Slack Tell You When External Services Hiccup
sub_heading: Use a single slash command and have Slack do all the work
summary: At Parallax, we depend on many external services. We use Slack to notify
  us when services go down or experience issues.
tags:
- Slack
- Sass Tools
- Status
- Software Engineering
- Customer Success
authors:
- Nate Geslin
canonicalUrl: ''

---
![](https://cdn-images-1.medium.com/max/1600/0*mmHYSm446dGq_58i)Photo by [John Cafazza](https://unsplash.com/@john_cafazza?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

At [Parallax](https://www.getparallax.com/), we depend on many external services. Some of these services are things that we use internally for development like [LaunchDarkly](https://launchdarkly.com/) or [GitHub](https://github.com/). Others are services that our customers depend on for their business like [HubSpot](https://www.hubspot.com/).

***

Did you know many SaaS providers have webpages dedicated to publishing current status of their service(s)? If you’re an engineer, I’m sure you’ve stumbled on to a status page or two trying to figure out why something wasn’t working.

At [Parallax](https://www.getparallax.com/), we were tired of having to look for a status page when we thought something might be wrong. We wanted to be able to be proactive. We wanted to be able to have alerts come to us. As opposed to tracking down alerts after we heard something might be wrong.

In order to solve this problem, I was preparing to build an app. It would be a fun little side project. As luck would have it, I didn’t need to. I discovered we could get most of what we wanted by using [Slack](https://slack.com/) and a single [slash command](https://api.slack.com/interactivity/slash-commands)!

### Status Pages

Before we dive into the nuts and bolts, let’s first start with what is a **status page**?

I mentioned in the introduction that many SaaS providers publish status pages.

**GitHub Status**

![](https://cdn-images-1.medium.com/max/1600/1*4WRxfu_ItRxpSg0832VhqQ.png)[https://www.githubstatus.com/](https://www.githubstatus.com/ "https://www.githubstatus.com/")

**LaunchDarkly Status**

![](https://cdn-images-1.medium.com/max/1600/1*H4k3Zb95ZLcnuhYNmS_kKw.png)[https://status.launchdarkly.com/](https://status.launchdarkly.com/ "https://status.launchdarkly.com/")

**HubSpot Status**

![](https://cdn-images-1.medium.com/max/1600/1*ac1NI-HKbxch0SdNnVD5dQ.png)[https://status.hubspot.com/](https://status.hubspot.com/ "https://status.hubspot.com/")

Status pages follow a similar format. They show current status of major features of their service(s). Some will have another page for incident history or even history of individual components.

Finding a status page, if one exists, is as easy as searching by the provider name and the keyword **status**.

### Slack and Slash Commands

Slack is an über popular messaging app. We use it internally at [Parallax](https://www.getparallax.com/), and I use it personally with several other groups I’m involved with.

Slack also provides a feature called _slash commands_. What are slash commands? Slack describes them this way:

> **Slash Commands** allow users to invoke your app by typing a string into the message composer box.

A slash command can be something fun like `\giphy alrighty then`, which is used to find and post an image from the internet related to the words _“alrighty then” (_you can imagine what we’re looking for here). Or this could be something more serious like `\hangout`, which will create a new [Google Hangout](https://hangouts.google.com/) and post the meeting link wherever the command was originally run.

Slack has [many built in slash commands](https://slack.com/help/articles/201259356-Slash-commands-in-Slack) available right out of the box, for free.

![](https://cdn-images-1.medium.com/max/1600/0*PDRoR2RG-wBl20UP)Photo by [Solaiman Hossen](https://unsplash.com/@sh_sumon?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)

### Connect Slack To Status Pages

Now that we’ve covered the basics, let’s get down to the business of how this actually works. What I’m about to cover is what we’ve done at [Parallax](https://www.getparallax.com/). This is simply _an approach_ that has worked for us. Your mileage may vary.

#### Create a New Channel

First we need to [create a new channel](https://slack.com/help/articles/201402297-Create-a-channel). We are going to need a place to house alerts from our providers, a new channel is a great place to put them all.

This keeps them in one place and allows for better notification management. Because it’s a channel it means others can join if they want to. It also means you can tag people that should know when something happens.

#### Find a Status Feed — GitHub

GitHub is a great first example of a status feed. Their status page provides a lot of things you will see on other status pages; a way to subscribe to status updates.

You can subscribe to updates via several different means vehicles. However, what we are after is the RSS feed.

![](https://cdn-images-1.medium.com/max/1600/1*eNFuiQR-e4wQmhW1XzdHIg.gif)githubstatus.com — history.rss

As you can see above, we end up with a url to an RSS feed for githubstatus.com: [`https://www.githubstatus.com/history.rss`](https://www.githubstatus.com/history.rss "https://www.githubstatus.com/history.rss").

#### Find a Status Feed — HubSpot

Most status pages are going to look like the GitHub status page. They will usually have a way to subscribe to updates and RSS is typically one of the options.

There are some status pages that have an RSS feed available, but you have to search around a bit to find it. HubSpot is a great example of this. HubSpot has a wonderful status page. Subscribing to a feed, though, isn’t exactly obvious.

If you navigate to the [HubSpot status page](https://status.hubspot.com/) you won’t see any options for subscribing, even if you click **Past Incidents.** You’ll see a history of events, but again no subscribe option.

Did you notice the url? `/history`. What happens if you add `.rss` at the end of that url?

![](https://cdn-images-1.medium.com/max/1600/1*2TYNg6DKQojgJ7TxJs8-gw.gif)[https://status.hubspot.com/history.rss](https://status.hubspot.com/history.rss "https://status.hubspot.com/history.rss")

Bingo!

You will find status pages that have a history page, typically also publish that url as RSS feed that you can get to by adding `.rss`.

#### Add The Feed To Slack

This is where the magic happens.

Remember how we talked about Slack [slash commands](https://api.slack.com/interactivity/slash-commands)? We’re going to use one now. In order to follow along, you will need a status page RSS url and Slack.

First, navigate to your new channel in Slack.

Then, in the message bar at the bottom, type.

`/feed subscribe RSS_FEED_URL` where `RSS_FEED_URL` is the status feed you wish to subscribe to.

![](https://cdn-images-1.medium.com/max/1600/1*I3anRStWIyjdTMCucUzHkQ.gif)Use slack to subscribe to RSS status page feeds

Thats all there is to it!

You have now subscribed to an RSS feed. Slack will automatically poll for new updates on that feed. And, depending on your notifications settings, will trigger a new message popup when a new event is triggered on any of the feeds you’re subscribed to.

Pretty cool, huh?

At any point you can list the feeds you have subscribed to via the `/feed list` command

![](https://cdn-images-1.medium.com/max/1600/1*k1rjr4Xf7VlKnUFvFvxKCg.png)list of status rss feed subscriptions using slack \`/feed list\`

### Cool Trick, Why Should I Care?

This does a few things for us, some of which I’ve mentioned already. This gives us a built-in way to manage status of multiple external integrations. We get to leverage Slack’s notification system and built-in subscription system for free to do the work of checking RSS feeds for updates. When there is an issue of note, we have an easy place to thread messages and built in links (from the RSS feed) to more information.

I’ll give you an example. Remember the [Great Facebook Outage](https://engineering.fb.com/2021/10/04/networking-traffic/outage/) from October of 2021? Well, we started seeing things popping up and that put us on high alert.

![](https://cdn-images-1.medium.com/max/1600/1*g1tFnETvrPuTz5XGybi8gw.png)

### Conclusion

Consolidating status feeds to a single Slack channel, and letting Slack do all the hard work has made it easier for us to be proactive instead of reactive. Issue warnings come to us and we no longer have to track them down.

***

#### References

* [https://www.getparallax.com/](https://www.getparallax.com/ "https://www.getparallax.com/")
* [https://launchdarkly.com/](https://launchdarkly.com/ "https://launchdarkly.com/")
* [https://www.hubspot.com/](https://www.hubspot.com/ "https://www.hubspot.com/")
* [https://github.com/](https://github.com/ "https://github.com/")
* [https://slack.com/](https://slack.com/ "https://slack.com/")
* [https://api.slack.com/interactivity/slash-commands](https://api.slack.com/interactivity/slash-commands "https://api.slack.com/interactivity/slash-commands")
* [https://www.githubstatus.com/](https://www.githubstatus.com/ "https://www.githubstatus.com/")
* [https://status.launchdarkly.com/](https://status.launchdarkly.com/ "https://status.launchdarkly.com/")
* [https://status.hubspot.com/](https://status.hubspot.com/ "https://status.hubspot.com/")
* [https://hangouts.google.com/](https://hangouts.google.com/ "https://hangouts.google.com/")
* [https://slack.com/help/articles/201259356-Slash-commands-in-Slack](https://slack.com/help/articles/201259356-Slash-commands-in-Slack "https://slack.com/help/articles/201259356-Slash-commands-in-Slack")
* [https://slack.com/help/articles/201402297-Create-a-channel](https://slack.com/help/articles/201402297-Create-a-channel "https://slack.com/help/articles/201402297-Create-a-channel")
* [https://engineering.fb.com/2021/10/04/networking-traffic/outage/](https://engineering.fb.com/2021/10/04/networking-traffic/outage/ "https://engineering.fb.com/2021/10/04/networking-traffic/outage/")