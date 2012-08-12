---
layout: post
title: Kindle SDK Addon
description: Kindle SDK Addon
tagline: Kinlde it
categories: blog
tags: [java, android]
---

Amazon has released a Kindle Fire SDK addon, the url is:

[http://kindle-sdk.s3.amazonaws.com/addon.xml](http://kindle-sdk.s3.amazonaws.com/addon.xml)

If you are manually editing the repositiories.cfg file in your hidden android  avd folder you need 
to ad a backslash between the http and the colon.

You will see after the install the AVD listed as kindlefire, note it uses GPS networking 
to simulate wifi so if you have any wifi detecting code you will get errors. Simple work around
is to chekc the deviceID for that emulator deviceID.