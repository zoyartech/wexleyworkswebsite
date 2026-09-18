---
datetime: 2026-09-18T14:30:00
description: "By placing three dashes at the very top of your markdown file you are inserting 'front-matter' into your markdown file. \n
This is useful because it allows these fields to be read programmatically. \n
Thereby providing information without needing to read your entire file. \n
Basically, it's used as a way to tell AI about the contents of the file without needing to load the whole thing into the context window."
anything: you can make any key value pair you want.
yaml: it renders based on simple YAML formatting
list:
  - this is how
  - you make a
  - list in yaml
---

# Markdown Guide

# This is the top largest header

## This is a sub header

### This is a sub sub header

#### And so on...

## Comments

comments are invisible when rendered.

<!-- this is a comment. it is invisible when rendered-->

## Text Styles

### Bold

**This is bold text**

### Italic

*this is italic text*

### Bold and Italic

***this is bold and italic text!***

## Embed Images

*Here is how you embed an image from an external resource:*

![isometric duo-tone orange and yellow flat plane vector illustration of some servers and a cloud symbol](https://cdn.prod.website-files.com/6863cc86499b79ce3ab28f8b/6aa97eac3ed6fad2fc769b82_Tech%20Blog%2037-p-1080.png)

*Likewise you can point to an image file located in the repository instead of the url of an image*

![a png file in the src/imports folder](/src/imports/1-1.png)

## Horizontal Lines

add three dashes

---

## Lists

what else?
Oh yeah. To make a list, add a dash at the start of a line like...

- this
- or this
- or this too

list of lists

- list-1
  - list-1b
  - list-1c
- list-2
  - list-2b

## Blockquotes

> This is how you put the text inside of a block quote

## Code

### Code Blocks

```python
instructions = "You make a fenced in code block by placing three back-ticks followed by the language you wish to show the code in."
# add three back-tics to close the code block and continue in markdown
```
### Inline Code

To display text in monotype (or whatever font is designated to render as code) use a single back-tic like `this`.

## Tables

### Normal

| This   | Is      |     An Example |     Of A     | Markdown Table |
|--------|---------|---------------:|:------------:|:--------------:|
| Notice | The     | `:` characters | in the above |      line      |
| They   | control |   how the text |  is aligned  |  in the column |
| none   | left    |          right |    center    |     center     |

### Compact

> *Results in the same as the `### Normal` version above*

| This | Is | An Example | Of A | Markdown Table |
|---|---|---:|:---:|:---:|
| Notice | The | `:` characters | in the above | line |
| The | control | how the text | is aligned | in the column |
| none | left | right | center | center |

## Getting Fancy With HTML

Most people don't realize this, but some compilers will render HTML and inline CSS directly placed within your markdown file.
For example, instead of using the `#` to designate a header you could just use an actual header tag:

<h2>This is also a header</h2>

the trick is to make sure you have a blank line both above and below any HTML tag.
This works for forcing line breaks (in case you want more space between copy or elements

<br>

<br>

<br>

This even works if you want to add inline css and control the entire layout, colors, anything that can be specified in inline CSS.

<h3 style="display: inline-block; text-align: center; color: #0047AB; font-family: serif;">
  But this only works in some renderers and not in others.
</h3>

<div class="image-container">
  <image src="/src/imports/1.png" alt="Description of image">
</div>
