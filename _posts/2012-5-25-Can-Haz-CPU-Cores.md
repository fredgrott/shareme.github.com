---
layout:post
title: Can haz CPU Cores
tagline: All our CPUS belong to Android
description: count number of CPU cores
categories: articles
tags: [android, java, linux, unix, cpu]
---

As we adjust to having a large market share of devices with more than one 
CPU core in the market we find that we have more openGL configuration
settings and options. With a little Linux/Unix knowledge we can get the
number of CPU cores used on your android device.

# Unix/Linux, everything is a file

All you need to remember is that on Unix and Linux systems everything is a file.
This means each CPU core will, guess come on guess, have its own file. Thus
all we need to do is count the number of cpu core files in a directory,
measure the length and that wil give us the number of CPU cores.

# The code

<script src="https://gist.github.com/2786791.js?file=NumCPUCores.java"></script>

Easy, huh? 