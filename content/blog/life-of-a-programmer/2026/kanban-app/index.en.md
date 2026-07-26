---
title: "New App Idea: Kanban App"
date: 2026-07-25T21:17:40-06:00
author: Deimos Hall
showAuthor: true
draft: false
section: "post"
cover: "https://drive.google.com/thumbnail?id=1Wsj7IQ8Co9uOsFJNHuOqT4vNi3Ev3pOx&sz=w1424-h873"
useRelativeCover: false
CoverCaption: "Planify"
toc: false
showReadingTime: true
---

Yes. Another kanban app.

## Description

Project management tool with a self-hosted backend and a desktop application targeting Linux.

What I'd like to build is:

- Backend written in Rust
- GUI app written in GTK + Rust (Linux only for now)
- Mobile app (maybe in the future)

## Motivation

Kanban + time tracking is a setup I had when I worked in Electronic Cats. They used [kanbanflow](https://kanbanflow.com/) for that purpose and I really fell in love with that workflow.

Then I used Obsidian with plugins for a couple of years. I had kanban boards and timer plugins to track the time I spent on each project/task and it worked fine. However, I'm trying to move all my workflow to open source apps, and Obsidian isn't.

Right now I'm using [Planify](https://useplanify.com/). It's an open source GTK app made for Linux. It has plain to-do lists as the primary experience with an optional kanban view, and of course it's the one I'm using. It works great to be honest, but it lacks a really important feature for me; time tracking.

Time tracking has became part of my workflow. It gives me some kind of dopamine and I feel motivated to avoid distractions while the timer is running. It's a must-have for me.

Can it be implemented on Planify? I'd like to say yes, but it's not a priority for the developer. I'm pretty sure about it because I checked the issues of the project and I found a couple of them requesting that feature since years ago. So, why not implement it myself? Well, I'm not interested in learning the Vala programming language.

The solution? My own alternative.

## Why Rust?

At the beginning I mentioned I'd like to build a self-hosted backend in Rust. The reason is simple; I'd like to get a job where I use it and having non-trivial experience is something I'm focusing on right now.

I'm a big fan of GNOME and Linux. In fact, I have two apps in production that are written in Rust and use GTK as the framework. They look great, and they integrate well in my system. Planify also uses GTK, so I'd like to borrow its design for my app.

About the backend. I'm very interested in designing a full system from scratch. From the database design to the backend architecture.

My primary experience with backend development is with Java, so I hope I can re-use the knowledge I have about working with REST APIs.

I'm very excited to start with this project. Wish me luck.
