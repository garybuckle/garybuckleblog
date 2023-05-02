---
title: "How to code"
excerpt: "Notes from a novice..."
coverImage: "/assets/blog/dynamic-routing/coding.png"
date: "2022-07-04T05:35:07.322Z"
author:
  name: Gary Buckle
  picture: "/assets/blog/authors/gb.png"
ogImage:
  url: "/assets/blog/dynamic-routing/coding.png"
---

## Why?

Well that's probably a very good question and one that you should ask yourself before starting anything that requires an investment and invest you will!

It's definitely not straightforward to learn and it might take a lot of time. Let's not kid ourselves into thinking that you can just open your laptop and start writing the next FaceBook or Twitter.
It's worth pointing out though that there are rewards and whilst you might find it demanding at first, you can write some pretty nifty stuff even after a short while.

You would be very impressed with what you can create.
Remember yourself as a kid, building your bits of lego or completing a puzzle , a jigsaw. That feeling of completion, of control, the satisfaction of you... doing something creative. That's the buzz here when you're literally messing around with software.

### What is meant by Coding?

- Coding is writing a series of instructions that your computer can understand. The computer will then do something using those instructions. That's a very obtuse description, there are many different ways you can code on a computer however...
- I am going to concentrate here on **Web Development**. You can create your own web pages and make them look and behave exactly how you want using something **HTML and CSS** (don't worry we will talk abut those in a bit). It's a nice place to start.
- You can even host your own local web server and serve out your pages from there, just like they do on the real internet.
- You will understand more about what is happening when you are browsing other people's websites because you will haver built your own.
- When you learn to code, you learn a lot about structure and process. About what it means to set up a layout or design a page. Orchestrate the way the page behaves and interacts with the user.
- You might get a career out of it.
- It's fun!...it really is!

## Where do I start?

> In the beginner's mind there are many possibilities, but in the expert's mind there are few.

- At the beginning, always start at the beginning. You might be tempted to kick off with Android or iOS programming and if you do that's fine. Personally I think it's good to start by walking before you run, if not, you will at some point realise that you missed the essentials of walking. You will have to recap it again at some stage.

- There are many blogs, articles and posts that will help you in your journey to become a programmer. I am just highlighting my experiences, I will list them out later in the article but if I missed one or two out and you discover a few interesting ones then [let me know](mailto:"buckle.g@mac.com")

No Drama!

## Start with one of these

[freecodecamp](https://www.freecodecamp.org)

[W3schools](https://www.w3schools.com)

These are absolute beginners websites, you don't need anything more than a web browser because they let you code from within the site itself.

They're great!

Covering most, if not all of the stuff that you will need to get you up to speed. There are lots of examples but you might wonder where do I start **exactly** and what does it all mean.
Start with **html**, then **css** and then **javascript**.
If you're stuck then take a look [here](https://developer.mozilla.org/en-US/), **MDN** is a great reference.

They cater for everyone from beginners to professionals.

When you're starting out don't be afraid to accept that there will be bits you don't understand. Ask yourself the questions that will challenge your understanding of the topic but don't be put off if you don't know the answers.

### What is Web Development?

So here is my take on how to look at **web development**:
A web page is very much like a word document, when you type, the words flow on to the document from left to right. As soon as they reach the end they pop out on to the next line. If you want to indent a word then you have to insert an indent. If you want to style a word then you have to select it and change it's size, colour, its type such as italic or bold. You do this by using the toolbar where all of the commands are located and nicely presented.

Essentially a web page is similar but the way in which the words, the content is displayed, is a bit different. Everything that appears on your web browser is _rendered_ in a markup language called **html - hypertext markup language**. The text is _wrapped_ in tags like `<h1>` for example,

so this text
`<h1>A Header</h1>`
will be rendered like this

## A Header

on a web page.

You can change the appearance of the content using something called **CSS (Cascading Style Sheets)**. It allows us to apply rules to the content, you tell the web browser, "This word is in red and should be centred on to the page"
It so much fun arranging the content using **CSS** to appear as you want it to on the web browser. It might look a bit tricky at first but once you learn a few of the basic rules then you're up and running.

Once you've gone through the two resources I have listed then you should be ready to start writing your own code.

## Setting up your own local development environment

This does depend on your Operating System (Windows, Mac etc) which by now you probably know a lot more about anyway, curtesy of the tutorials you have already been thorough. While we are on that note, it is worth pointing out that there is no 'de fact' standard on what is the better development environment. If you're a happy **Windows** user, **Mac** user or **Linux** user you're going to be fine. I have at some point used all three.
I have set up a local dev environment on A Mac and Linux and once, a long time ago on Windows. I doubt that experience is still relevant though. Here is a random [resource](https://betterprogramming.pub/how-to-install-apache-on-macos-10-15-catalina-using-homebrew-78373ad962eb) I saw on that process, good if you're on a **Mac**. Sorry **Windows** users I dont have a tutorial I can quickly refer you to.
An easier process is to install a Web Server using [MAMP](https://www.mamp.info/en/downloads/)

## What does this do?

Essentially it serves documents written in **HTML** to web browsers. It does it on your local machine, so instead of the documents travelling through the internet they just get rendered on your local web browser.

## What is the point?

You can run all of of the technology that a real WebServer uses, locally without any compromise. Alongside that you learn a bit more about the process by which the data is sent and rendered (displayed on the screen). If you want to just write some code and have your local browser render it locally without having to install a WebServer then you can set up a node server in your text editor. Woah!!! slow down... we aren't that far yet!

## Install a text editor.

There are many text editors but what do they do? Well they allow you to write your code without having to worry _too much_.

Text editors

[VSCode](https://code.visualstudio.com/) Any platform, used everywhere.

[Brackets](https://brackets.io/) Any platform

[Nova](https://nova.app/) Mac Only but truly beautiful

[Sublime Text](https://www.sublimetext.com/) Any platform

## And what do I do with the Text Editor?

As soon as you have installed your text editor you can write some code that you can display on your web browser **and** as you write the code you notice that the Text Editor helps you along when typing. Autocompletion, for example. Start typing something and the Text Editor tries to guess what you are trying to write. It also lets you know if what you typed is incorrect. And how does it know that? Well it adheres to something called **syntax**. Like a spellchecker or even better a grammar checker. _I are going to rite sum code_ would be spotted by a one of the many word processors and possibly even corrected.That's what will happen when something you write has incorrect syntax. So it will try to ensure that before it gets to the browser, you can avoid any errors. PLus it colours the text that is syntactically correct for you so that you know you're on the right track.

## Errors

Sometimes though some errors creep through. Get used to them! there will be many and it's absolutely fine. Errors in the computer world are often called bugs. In Ye Olden Days when computers where more _mechanical_ than they are nowadays, a computer program was prevented by a bug crawling into a machine and stopping execution. De-bugging is a very serious and a worthwhile skill to learn, one that is definitely going to take some practice and patience.

Yes... **Practice** and **Patience** are going to become your two best friends.
So throw your arms around them and start your journey.
But before you do there is one other close mate you're going to get to know.

Lets call her Madam Mistake!

You're going to make lots of mistakes so getting close and comfortable with her is in your best interests.

It's perfectly fine to **make mistakes**

So here are a couple of additional resources before you set out.

## Additional Resources

Apart from the stuff already mentioned.

[Tania Rascia](https://www.taniarascia.com/) - Such a great resource, I have learned so much from her articles.

[Flavio Copes](https://flaviocopes.com/) - Another dynamic presence, simply pumps out content and articles, fantastic teacher!

- [Computer Science Data Structure, Algorithm, Angular, React, etc.](https://practice-code.github.io) - This is a phenomenal resource!

I would encourage you to think about writing your own stuff as soon as you can, no matter how basic it looks.

Above all I would encourage anyone trying to start out as I did by making mistakes and trying to create simple things.

Good luck and happy coding!

[How was this article ?](mailto:buckle.g@mac.com)
