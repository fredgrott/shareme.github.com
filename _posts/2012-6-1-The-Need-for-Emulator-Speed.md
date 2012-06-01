---
layout: post
title: The Need for Emulator Speed
tagline: can haz fast
description: how toe speed up the android emulator in the sdk
categories: articles
tags: [android, java, emulator, SDK, avd, mobile]
---

Want a real simple technique to speed up the emulator?  No really.

# Other Programs memory footprint

First figure out the other programs you will normally have running and their footprint.
For most develoers this will be the IDE, Eclipse, and the browser. If you are 
only storing projects your currently work on in your IDE workspace this will be 
about 3 gigs of ram.

# Setting proper AVD settings

Now create anew AVD called speedy and you will set this to the HVGA screen size.
Under device ram size in the hardware settings you will set 512 as the Megabyte 
setting, if you have higher physical ram than 4 gig you will increase this figure.

If you emulate openGL 2.0 than turn on GPU emulation. Yes, its fast even with 
GPU emulation.

# Results

The settings work to speed up the emulator as the screen size you are emulating 
is smaller. How fast? On a slow machine like mine at 32-bits and only dual-core 
the start-up time is about 47 seconds and tthat is with GPU emulation set to yes. 
But on the new machines it should be around 20 seconds This was tested using the 
new SDk tools release 20 preview which has some emulator speed improvements.

You can get that preview at:

[ android SDK 20 preview](http://tools.android.com/download/adt-20-preview)

That new SDK toolset shoudl be fully out the few days before Google IO 2012
if you want to wiat until thaqn and do thenormal install.
