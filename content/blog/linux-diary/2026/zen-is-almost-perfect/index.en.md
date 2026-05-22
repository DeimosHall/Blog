---
title: Zen is...
date: 2026-05-22T08:05:53-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=19c_D0BDs8C0B72UMbRiMJLBnO3_9k_XZ&sz=w1920-h1080
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

I was a Firefox user for a long time, even before I started using Linux. I still like it, but I don't like what Mozilla does, so using a different browser is my way of protesting.

Then, I knew the Zen browser. It's Firefox based, elegant, and it has the new vertical tabs trending that started some time ago. I've been using it for maybe year, maybe a little more, and everything went fine until a week ago.

{{< image
src="https://drive.google.com/thumbnail?id=1zL4-2355Iaz93--99dWdZgnzPDJI38dn&sz=w1250-h850"
caption="Zen recent update"
alt="Zen recent update"
style="width: auto; border-radius: 10px;" >}}

Is it a coincidence with this update? Who knows.

The situation is GitHub started to fail to load the CSS, it looks like this.

{{< image
src="https://drive.google.com/thumbnail?id=16vsl0xU88x4-B-VKLtLqeKqKkdRh7GCv&sz=w1920-h1048"
caption="GitHub fails to load"
alt="GitHub fails to load"
style="width: auto; border-radius: 10px;" >}}

I first thought, well, it's GitHub, it has been failing since months ago, and it wouldn't surprise me that this is just another issue. I was pretty busy on my work this week, so I didn't have much time to work on [my side project](https://github.com/DeimosHall/Metamorphosis) and in consequence to use GitHub that often.

Surprisingly, I was not the only one with this problem. I found [this issue](https://github.com/zen-browser/desktop/issues/13682) on the Zen repo a couple of days ago, and the user describes exactly what I'm experiencing.

{{< image
src="https://drive.google.com/thumbnail?id=1gPbsSDuVN74QnS7-WmFA9Ei1AVxyzh_2&sz=w1920-h1048"
caption="GitHub issue"
alt="GitHub issue"
style="width: auto; border-radius: 10px;" >}}

I commented this:

> I open the exact same GitHub url on another browser and it loads correctly, but Zen still refuses to load it.

And this:

> Ctrl + Shift + R and clearing cookies don't work. The only thing that works is closing and re-opening the browser. But it's only a matter of time before it happens again.

One dev tried to help me, but nothing worked.

This morning I discovered something new. While one GitHub page refuses to load in a certain tab, it loads if I open it in another tab. Strange. I'm not a web dev, so I really have no idea how to continue debugging this, and the advices I get from AI about touching things on the developer tools just don't work. At this point I can only wait for a new update to see if the error it's still there.

{{< image
src="https://drive.google.com/thumbnail?id=1Gy5qwK_K_fWtJ63baBJLk862jYj4Hhft&sz=w1920-h1048"
caption="GitHub load success"
alt="GitHub load success"
style="width: auto; border-radius: 10px;" >}}

I even tested a browser called [Helium](https://helium.computer/), just in case I have to switch from Zen. I liked it, it's also good-looking, has vertical tabs, and it's privacy focused. Sadly it's Chromium based, I really would like to stay in the Firefox forks ecosystem.

Anyway, I'll continue trying to figure out how to fix it, and if I do, I'll comment it on the GitHub issue I just referenced.

Have a good day and remember to be happy.
