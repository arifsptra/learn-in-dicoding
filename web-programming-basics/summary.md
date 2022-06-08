## summary of web programming basics

- Website: A page that displays information to users in the form of text or images. The website can be accessed via the internet using a browser.
- Browser : A software that can translate HTML, CSS, and JavaScript files obtained from a web server to be displayed in the form of web pages.
- HTTP Server: Server acts on a website as a software that can accept transactions from HyperText Transfer Protocol.
- DNS Server : Server that can change/redirect website through a domain name.
- Client : A device that requests a certain service to a server.
- HTML : A markup language used to structure and display content on the World Wide Web (Website).
- CSS : Markup language used to adjust and beautify the appearance of the website.
- JavaScript : A programming language used to help websites display information dynamically.
- Text Editor: A software used to manage plain text. HTML, CSS and Javascript codes are written using this tool.
- Plain Text: Unformatted text. This text format is used in writing HTML, CSS, and Javascript files.
- Rich Text: Formatted text. This text format is used if we want to write using Microsoft Word or a text editor based on WYSIWYG (What You See Is What You Get).
- Element : An HTML component marked with an opening and closing tag.

Global Attributes that can be used:<br>

|   Attributes    |                                           Description                                           |
| :-------------: | :---------------------------------------------------------------------------------------------: |
|    accesskey    |                    Specifies a shortcut key to activate/focus on an element.                    |
|      class      |                        Specifies one or more classnames for an element.                         |
| contenteditable |           Specifies the content of the element is content that can be changed or not.           |
|     data-\*     |                 Used to save a specific personal data to a page or application.                 |
|       dir       |                   Specifies the text direction for the content on an element.                   |
|    draggable    |                        Specifies whether an element is draggable or not.                        |
|    dropzone     | Specifies whether the data being dragged is data that is copied, moved, or linked when dropped. |
|     hidden      |                Specifies whether or not an element is displayed in the browser.                 |
|       en        |                                   Sets the id on the element.                                   |
|      lang       |                        Specifies the language of the element's content.                         |
|   spellcheck    |        Specifies whether the element should be spelled and grammatically checked or not.        |
|      style      |                           Specifies one-line styling for an element.                            |
|    tabindex     |                               Specifies the order of an element.                                |
|     titles      |                       Specifies additional information about an element.                        |
|    translate    |              Specifies whether the element's content should be translated or not.               |

In HTML there are three types of lists:

- Unordered lists : the list displayed has no order.
- Ordered lists: lists that are displayed in order.
- Description lists: lists made of several terms followed by a description of the terms.

Attribute Type Table ordered lists:<br>

| Value |                  Description                  |
| :---: | :-------------------------------------------: |
|   1   |   Using numbers in order of items (default)   |
|   a   |    Use lowercase letters in order of items    |
|   A   |           Capitalize the item order           |
|   i   | Use lowercase roman letters in order of items |
|   I   | Use uppercase roman letters in order of items |

Attribute Type Table unordered lists: <br>

| Value   | Description        |
| ------- | ------------------ |
| disc    | a filled-in circle |
| squares | a square outline   |
| circles | a circle outline   |

Types of image formats that can be used: <br>

| Name                                  | File Format Extension            | Description                                                                                                                                                                                  |
| ------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Graphics Interchange Format           | .gif                             | Can be used for animated images. File sizes are usually small. Image quality is limited.                                                                                                     |
| Joint Photographic Expert Group image | .jpg, .jpeg, .jfif, .pjpeg, .pjp | The quality of text on images can be poor. The file size is quite small. On the website it is usually used for images that do not have a lot of text.                                        |
| Portable Network Graphics             | .png                             | Text is more readable than the JPEG type. The file size can become large thereby reducing the loading speed of the site.                                                                     |
| WebP                                  | .webp                            | Compared to the same quality images on jpeg or png, the file size on webp can be smaller. But not all web browsers can read webp.                                                            |
| Scalable Vector Graphics              | .svg                             | The image quality is maintained and the file size is small. However, it is not suitable for overly complex images such as photographs. On the website it is usually used for logos or icons. |

Formatted text: <br>

| tags       | function                                                                                                                                                                                            |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blockquote | Display a quote or a testimonial. In this element we can use the cite attribute to specify the URL source of a quote (if the quote is from a website).                                              |
| pre        | Displays the content according to what we wrote in the text editor                                                                                                                                  |
| figures    | Representing self-contained content such as illustrations, diagrams, photos or it could be a line of code. Inside the figure element we can write the element as a caption (title) for the content. |

- Inline Formatting Text

  - Anchor, used to create a hyperlink to another page or website, file, email address, or other URL. Using the tag `<a>...</a>`<br>
    Usable attributes:

    | Attribute | Value | Description |
    |:--------------:|:------------------------------- -------------------------------------------------- ----------------------------:|:------------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------------------:|
    | downloads | filename | Instructs the browser to download at the specified URL rather than redirecting it. |
    | href | URLs | Sets the target to be redirected/downloaded to when the user hits the hyperlink. |
    | hreflang | language_code | Sets the language of the target document. |
    | ping | list_of_URLs | Specifies the URL that will be notified by sending a post request ping in the body by the browser (running behind the scenes) when the target URL in the hyperlink is pressed. Usually this attribute is used for tracking. |
    | referrerpolicy | no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url | Sets a reference to send on the target. |
    | rail | alternate, author, bookmark, external, help, license, next, nofollow, noreferrer, noopener, prev, search, tag | Sets the relationship between the displayed page and the target. |
    | targets | \_blank, \_parent, \_self, \_top | Sets the location when opening the target for example on a tab, window or on the tab itself. |
    | media | media_type | Sets the media type used on the target. |

  - Emphasized text, use the `<em>` element to indicate which part of the word we need to emphasize. This element indicates stress emphasis or content/words that need special emphasis or attention.

  - Important text, use the `<strong>` element to indicate a text that is very important (strong importance), serious, or urgent.

  - Short quotations, use the <q> element to mark a quote in a text.

  - Citation, in addition to an attribute, `<cite>` is also an element that is used for a reference to a document, for example a book, magazine, article and others.

  - Defining terms, the `<and>` elements are used to define a term. This element must be located on another element that shelters it.

  - Subscript and Superscript, Subscript `<sub>` and superscript `<sup>` are elements that can make the displayed text appear small, with a position below (sub) or above (sup) the usual text. This element is used to indicate a chemical or mathematical formula.

  - Highlighted text, to mark or highlight a text we can use the `<mark>` element.

  - Line Break, `<br>` used to tell the browser to add a new line to a line of text.

- Semantic HTML - Organizing Content Pages
  !(Semantic)[./assets/image/semantic.png]<br>

  - Headers and Footers
    We can use these elements to:
    - A main header and footer that appears at the start and end of a `<body>` page.
    - Headers are used as an introduction or opening content in an `<article>` or `<section>` element.
    - Footers are used as footnotes to an `<article>` or `<section>` element.
  - Main
    - The `<main>` element is used to contain the main (dominant) content in the `<body>`.
  - Nav
    - The `<nav>` element is used to accommodate a navigation that is important (major), for example the main navigation on a website.
  - Article
    - The `<article>` element acts as a container for independent content on a page, meaning the full content is unrelated to any other content.
  - Aside
    - The `<aside>` element has two purposes, depending on whether we place it inside an `<article>` element or not.
  - Section
    - An element that has similar content and has a heading in it can be grouped using the `<section>` element.

- Generic Element
  - Div
    - This element is a general container to hold some content.
  - Span
    - This element provides the same benefits as `<div>`, except that it is used as phrase elements and there are no line breaks when using it.
