---
title: Firmware development is not for me
date: 2025-08-16T17:08:06-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: post
cover: https://drive.google.com/thumbnail?id=105jOxOFphuQFif7l0sO-b_37skf0X_IM&sz=w1920-h1080
useRelativeCover: false
CoverCaption:
toc: false
showReadingTime: true
---

Yesterday was my last day as a firmware engineer. I was at that job for a little more than two years or almost three years if I consider my internship time, but despite I enjoyed it, it's time for me to say good bye.

I studied Electronics Engineering, so I would consider I was working on something related to it on this time, although I honestly prefer programming over circuits design or whatever an Electronics Engineer is supposed to do.

Just as many others, when I chose my university career I made it in a lazy way and without thinking so much on future, I only told to myself "hey, I liked an Arduino project I made at high school, I think I should study Electronics Engineering". I never reviewed the course subjects I'll take to see if I really was interested in or neither to evaluate my other option at that moment, Computer Systems Engineering.

At the end, I ended choosing Electronics Engineering mainly because people said Computer Systems Engineering was more in demand and I didn't want to have a big chance of being left out of the college just because not being smart enough for the admission exam compared to others. Electronics, on the other hand, struggled and I think it continues to struggle to attract enough students, at least in my experience and in my university, so I took my decision and everything worked out fine.

To be honest, I never had the intention of working as an Electronics Engineer. My goal was only to get an university degree and work as a programmer. I already started to watch content on social media about programming in that moment, and I remember that the idea of being hired without an university degree was very popular and it seamed to be something very easy. That's why my career choice was something I thought I liked enough to take it as a hobby and learn to code by myself at the same time.

It was a foolproof plan according to my teenage self, but the realty is that looking back, that plan was almost ruined during the covid 19 pandemic. At that time, I was very close of dropping out the university, mostly due to unmet expectations, but I think it could be worth talking about another time.

The point is, I got a job as a developer, but I think the luck factor played a very important role. Right now, I think in so many coincidences and crazy situations that in case of they didn't happen or if they happened in a different way, I wouldn't be able to be here in this point of my life.

During my time at university, what I most enjoyed were the subjects related to embedded software development, which means coding for microcontrollers using C and C++. I was excited about it the first months or even the first year. I enjoyed a lot every project and I felt I was learning a lot.
~`
\
In the beginning, I had to work with Arduino projects (yes, Arduino is used in the industry for those who hate it). This basically means working with C++, but with the Arduino API as an extra and a huge and friendly libraries ecosystem created by the community. I remember very well I preferred C++ over C at that time, I guess it was because of the large number of abstractions C++ has to make it easier to manage complex data types with classes, in addition to things like vectors or the Arduino library ecosystem.

Time passed and little by little I got into projects that required only C as the programming language. I wasn't happy at the beginning, but I had to do it. I can't remember what was that first C project right now, but I remember the one where I worked the most. I started that project from scratch by myself using the ESP-IDF framework from Espressif, the manufacturer of the famous ESP32. 

I have on my mind the following SDK/Frameworks that I have worked with:

- Arduino
- ESP-IDF
- Micropython
- Raspberry Pi Pico C/C++ SDK
- Puya SDK
- WCH with ch32fun and MounRiver Studio

Unfortunately, I can only say I only liked the first two ones and here is where my complaints begin.

I want to begin with Micropython because I have to say, I don't like Python. The funniest thing is if you ask me why I couldn't give you a specific reason, I just don't like its syntax, the way code is structured, and how script-orientated it is. If you like it, enjoy it and don't be offended by what a random says on the internet.

Of the rest of the list, I think I accidentally put them in order of what I liked least, starting from top to bottom. I think the API from the Raspberry Pi Pico SDK is very good, in that sense, I don't have major complaints. On the contrary, I think the last two ones are bad designed, in my personal opinion, starting with little details such as they use a kind of a pascal case that I find very disgusting to read (`void This_Is_A_Function();`), or the own API design, and the fact they don't provide clear explanations of how things works.

However, the frameworks and the SDKs weren't the worst part as I could use my wrappers and fix the inconveniences I had with them. The real problem was the rest of the firmware out there I had to use as a code base to build the projects. When I say the rest of the firmware I mean to a lot of open source projects of libraries or examples of how to do or use something. I really don't want to say this, but much of firmware is poorly designed, not because it doesn't work, but because it's difficult to understand o even impossible if you don't have enough context.

As an example of this, I'd like to mention the common use of registers calls. I really don't understand why it is so difficult to wrap those instructions with macros and put them descriptive names instead of guessing or reading datasheets to know what it does, because they even don't write comments for that kind of code.

Another important aspect I have on mind right now is the excessive use of poorly named variables. It's so common to find firmware projects with variables like `crf 39`, `ui_p = false`, or `a = 1`. Without context is impossible to know what they mean, and this kind of decisions are extrapolated to the project in general. That's why I say much of the firmware I have found is complicated to understand and it's because of poorly design decisions.

In my experience over the last years, finding a well designed project has been the exception rather than the rule. I don't ask perfection, just a minimum level of quality, but unfortunately it's very hard to find it. And let me clarify that I don't think my code is perfect, if I look back to my beginnings, I'll see a lot of these things I criticize today, but I can't believe much of the firmware I find out there it's at the level of my work as an intern. Again, not because it doesn't work, but because it doesn't follow good practices in terms of code quality.

I still have few experience in the firmware field, maybe I still haven't understand the real reason why things are done in this way, but what I can say is I don't feel comfortable programming in this field anymore.

On top of all this, the reality is firmware development as well as Electronics Engineering, was never my favorite programming field. I started in the industry this way, but only because of the circumstances helped me, and I couldn't pass up that first job opportunity. However, I'm ready to make a change on my career and I have no problem switching stacks.

Yesterday was my last day as a firmware engineer, and one of my reasons was my weariness towards everything I already mentioned. However, I still have hope for the field, now I'll take firmware entirely as a hobby, I'll be working with Rust, my favorite programming language.

Without further ado, goodbye. Have a great day, and remember to be happy.