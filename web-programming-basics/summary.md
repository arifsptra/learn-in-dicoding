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

    |   Attribute    |                                                     Value                                                     |                                                                                                         Description                                                                                                         |
    | :------------: | :-----------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
    |   downloads    |                                                   filename                                                    |                                                                     Instructs the browser to download at the specified URL rather than redirecting it.                                                                      |
    |      href      |                                                     URLs                                                      |                                                                      Sets the target to be redirected/downloaded to when the user hits the hyperlink.                                                                       |
    |    hreflang    |                                                 language_code                                                 |                                                                                          Sets the language of the target document.                                                                                          |
    |      ping      |                                                 list_of_URLs                                                  | Specifies the URL that will be notified by sending a post request ping in the body by the browser (running behind the scenes) when the target URL in the hyperlink is pressed. Usually this attribute is used for tracking. |
    | referrerpolicy |             no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url             |                                                                                           Sets a reference to send on the target.                                                                                           |
    |      rail      | alternate, author, bookmark, external, help, license, next, nofollow, noreferrer, noopener, prev, search, tag |                                                                              Sets the relationship between the displayed page and the target.                                                                               |
    |    targets     |                                       \_blank, \_parent, \_self, \_top                                        |                                                                Sets the location when opening the target for example on a tab, window or on the tab itself.                                                                 |
    |     media      |                                                  media_type                                                   |                                                                                           Sets the media type used on the target.                                                                                           |

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

- Basic Structure of a Table <br>
  Tables in HTML are composed of three elements, namely `<table>`, `<tr>` as "table row", and `<td>` as "table data" or `<th>` as "Table head". The <table> element is used to indicate the start and end of a table's contents as well as a container for the table itself. Then, the `<tr>` element is used to create a new row containing the `<td>` or `<th>` elements so as to produce a cell.
- Spanning Cell

  - Column Spans, To span a column (column spanning) we can use the colspan attribute on the `<td>` or `<th>` elements. Here's an example for using the colspan attribute so that a header spans two columns.
  - Row Spans, To span a row (row spanning) we can use the rowspan attribute. Same as column spanning, but this attribute will stretch a cell down.

    - Elements and Attributes in the Table

    | Elements and Attributes |                                      |                             Description                             |
    | :---------------------: | :----------------------------------: | :-----------------------------------------------------------------: |
    |          table          |                                      |                       Defines table elements.                       |
    |           td            |                                      |                  Specifies a cell in a table row.                   |
    |                         |           colspan=”number”           |             The number of columns covered by the cell.              |
    |                         |           rowspan=”number”           |               The number of rows covered by the cell.               |
    |                         |        headers="header name"         |                 Associating cell data with headers.                 |
    |           th            |                                      |       Specifies the header associated with the row or column.       |
    |                         |           colspan=”number”           |            The number of columns covered by the header.             |
    |                         |           rowspan=”number”           |              The number of rows covered by the header.              |
    |                         |        headers="header name"         |               Associating headers with other headers.               |
    |                         | scope=”row\|col\|rowgroup\|colgroup” | Associate the header with a row, row group, column or column group. |
    |           tr            |                                      |                    Specifies a row in the table.                    |
    |        captions         |                                      |                      Give a title to a table.                       |
    |           col           |                                      |                         Specifies a column.                         |
    |        colgroup         |                                      |                       Defines a column group.                       |
    |          tbody          |                                      |                    Identify a body in the table.                    |
    |          tfoot          |                                      |                   Identify a footer in the table.                   |
    |          thead          |                                      |                   Identify a header in the table.                   |

<br><hr>

- Special Character<br>
  The following is a list of special characters with their reference characters.<br>

  | Character |       Description        | Named Entity | Numeric Entity |
  | --------- | :----------------------: | :----------: | :------------: |
  |           |    non-breaking space    |              |    `&#160;`    |
  | &         |        Ampersand         |   `&amp;`    |    `&#038;`    |
  | '         |        Apostrophe        |   `&apos;`   |    `&#039;`    |
  | <         |  Less than (less-than)   |    `&lt;`    |    `&#060;`    |
  | >         | More than (greater-than) |    `&gt;`    |    `&#062;`    |
  | ©         |  Copyright (copyright)   |   `&copy;`   |    `&#169;`    |
  | ®         |   Registered trademark   |   `&reg;`    |    `&#174;`    |
  | ™         |        Trademark         |  `&trade;`   |   `&#8482;`    |
  | £         |          Pounds          |  `&pound;`   |    `&#163;`    |
  | ¥         |           Yen            |   `&yen;`    |    `&#165;`    |
  | €         |           Euro           |   `&euro;`   |   `&#8364;`    |
  | –         |         En-dash          |  `&ndash;`   |   `&#8211;`    |
  | —         |         Em-dash          |  `&mdash;`   |   `&#8212;`    |
  | '         |    Single quote left     |  `&lsquo;`   |   `&#8216;`    |
  | '         |    Single quote right    |  `&rsquo;`   |   `&#8217;`    |
  | “         |    Double quote left     |  `&ldquo;`   |   `&#8221;`    |
  | ”         |    Double quote right    |  `&rdquo;`   |   `&#8221;`    |
  | •         |          Bullet          |   `&bull;`   |   `&#8226;`    |
  | ...       |   Horizontal ellipsis    |  `&hellip;`  |   `&#8230;`    |

- Rule : A styling rule that must be applied to HTML elements. A rule contains a selector and a styling property declaration.
- Selector : A subset of the rule, which identifies the target element for specifying a rule.
- Declaration : A part of the rule, which consists of a property and a value pair.
- External Style Sheet: A separate file in which there is only a rule that will be used on the website.
- Embedded Style Sheet: A collection of rules written in an HTML file using the `<style>` element.
- Inline Style: styling that is applied to HTML elements using the style attribute.

CSS Conception:

- Inheritance, HTML styling is inheritance which means it can inherit "certain" style properties on the elements it contains.
- Group Selector, If we apply the same rule to several different selectors, in CSS we can combine these selectors so as to minimize writing repetitive code. Use a comma (,) to separate each selector.
- Order Rules, True to its name, cascading means “to flow.” Likewise with the CSS workflow in reading code that flows from top to bottom.

- Basic Selectors

  - Type Selector
  - Class Selector
  - ID Selector
  - Attribute Selector <br>
    Conditions that can be applied to the attribute selector:

|    Syntax     |                                       Description                                       |
| :-----------: | :-------------------------------------------------------------------------------------: |
|    [attr]     |                     Targets elements that apply the attr attribute.                     |
| [attr=value]  |           Targets elements that apply the attr attribute with a value value.            |
| [attr~=value] | Targets an element that applies the attr attribute with one of its values being value.  |
| [attr^=value] | Targets elements that apply the attr attribute whose values begin with the value value. |
| [attr$=value] |        Targets elements that apply the attr attribute whose values end in value.        |
| [attr*=value] |      Targets elements that apply the attr attribute whose value contains a value.       |

- Universal Selector

- Combinators<br>
  We already know some of the basic selectors in CSS. Not only that, CSS Selector can contain more than one basic selector. Among the basic selectors, we can include a combinator. There are four combinators that we can use, namely: Adjacent Sibling Selector, General Sibling Selector, Child Selector, and Descendant Selector.

  - Adjacent Sibling Selector (+)<br>
    The Adjacent Sibling Selector combines two basic selectors by using a + sign between them. `img + p { ... }`

  - General Sibling Selector (~)<br>
    Similar to the Adjacent Sibling Selector but the rules will be applied to all second elements that are after the first element. Note that the parent is the same, even though the position of the second element is not immediately after it. `img ~ p { ... }`

  - Child Selector (>)<br>
    The Child Selector combines two basic selectors by using a greater than (>) sign between the basic selectors. `div > p { ... }`

  - Descendant Selector (space)<br>
    Descendant Selector is similar to child selector but the hierarchy is wider, because the rule will be applied to all elements that become its descendants, even if indirectly. The first basic selector written in this selector becomes the parent and the second basic selector is the element that will apply the rule. `div p { ... }`

- Pseudo Selector<br>
  In addition to some of the selectors that we have studied, CSS still has two more selectors that we can use to help select elements in applying a rule, namely Pseudo-class and Pseudo-element.

  - Pseudo-class Selector <br>
    Pseudo-class is a "pseudo" class that actually exists in every HTML element To use a pseudo-class, we use a colon `:` in the basic selector followed by the pseudo-class. <br> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

  - Pseudo-element Selector <br>
    Just like a pseudo-class, a pseudo-element is a "pseudo" element that actually exists but doesn't appear as written in the HTML file. This selector is usually used when we want to add content right before and after a paragraph element. As a result we do not need to write the structure of these elements in the HTML file. To use pseudo-elements, we use two colons `::` followed by the pseudo-elements. <br> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

- Font Styling

  - font-family : Specifies the font type to be applied to the target.<br>
    To write more than one font value, the following rules must be observed:<br>
    `p{ font-family: Arial, Verdana, sans-serif }`<br>
    `span{ "Open Sans", Verdana, sans-serif }`<br>
  - All font values ​​that are not generic font families must be capitalized. For example "Arial" is not written "arial".
  - Use a comma (,) to separate the values ​​of the font used.
  - Always quote (") to wrap font values ​​that have spaces in their names (eg “Open Sans”).<br>
    Here are generic font families values ​​that we can use for the fallback mechanism:

    - serif: a type of font that has a point at the end of the character line. Times New Roman is a type of serif font.
    - sans-serif: a type of font that does not taper at the end of the character line. For example “Open Sans”, “Fira Sans” and others.
    - monospace: a font type that has the same width for each character. Consolas are one of its kind.
    - cursive: a type of font that looks like handwriting or handwritten results.
    - fantasy : a type of font that represents fun characteristics.
    - system-ui : if you apply this value then the applied font will be the same as the font used on our operating system.
    - math : the type of font used for writing mathematical formulas.
    - emoji : the type of font used to display emoji.
    - fangsong : a typeface that displays the Chinese writing style.<br>

    In choosing the type of font there is a term called web safe font. Web safe fonts are fonts that are generally readily available on most computers. So you can be sure that the website will look as it should in the browser. Here are some examples of fonts that fall into this category:

    - Arial (sans-serif)
    - Verdana (sans-serif)
    - Helvetica (sans-serif)
    - Tahoma (sans-serif)
    - Trebuchet MS (sans-serif)
    - Times New Roman (serif)
    - Georgia (serif)
    - Garamond (serif)
    - Courier New (monospace)
    - Brush Script MT (cursive)

  - font-size : Specifies the size of the text.<br>
    The following is a unit value that we can use in setting the font size and its function: <br>

    - Relative Units<br>

    | Unit  |   Relative to   |                                                              Function                                                               |
    | :---: | :-------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
    |  em   |    Font size    | Units relative to the size of the font currently in use on the element (for example, 2em means 2 times the font size it should be). |
    |  ex   |   Font height   |                              Units relative to the current font height, this unit is very rarely used                               |
    | brake |    Font size    |                           Similar to em, but rem is a unit relative to the font size of the root element.                           |
    |  ch   |   Font width    |                                     Units relative to the width of the character “0” are zero.                                      |
    |  vw   | Viewport width  | Units relative to 1% viewport width. Example 1vw = 1% of the viewport width. This unit is not supported on browsers IE8 and below.  |
    |  vh   | Viewport height |  Units relative to 1% viewport height. Example 1vh = 1% of viewport height. This unit is not supported on browsers IE8 and below.   |

    - Absolute Unit<br>

    | Unit |                      Function                       |                                                              Function                                                               |
    | :--: | :-------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
    |  px  |         Sets font value based on pixel size         | Units relative to the size of the font currently in use on the element (for example, 2em means 2 times the font size it should be). |
    |  pt  |   Sets font value by points (1/72 inch in CSS2.1)   |                              Units relative to the current font height, this unit is very rarely used                               |
    |  pc  | Sets font value based on picas (1 pica = 12 points) |                           Similar to em, but rem is a unit relative to the font size of the root element.                           |
    |  mm  |        Sets font value based on millimeters         |                                     Units relative to the width of the character “0” are zero.                                      |
    |  cm  |        Sets font value based on centimeters         | Units relative to 1% viewport width. Example 1vw = 1% of the viewport width. This unit is not supported on browsers IE8 and below.  |
    |  in  |           Sets font value based on inches           |  Units relative to 1% viewport height. Example 1vh = 1% of viewport height. This unit is not supported on browsers IE8 and below.   |

    <br>In addition to setting the value and unit directly, to set the font size we can also use a percentage value. example `h1{ font-size: 150% }` <br>And lastly we can also determine the font size by writing specific keywords that are available in CSS. The keywords are: `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, and `xx-large`. <br>These keywords have nothing to do with a specific measure (not an absolute measure) but their values ​​change consistently with each other.

  - font-weight : Specifies the thickness of the text.<br>
    Used to set the thickness of the displayed font. The value of this property can be determined using numeric values (100 to 900) or by using descriptive terms (normal, bold, bolder, and lighter). <br>The font-weight property can be applied to all elements in HTML and its value can be passed down to child elements.

  - font-style : Specifies the styling applied to the text.<br>
    Used to determine the posture of the displayed text, whether the shape is vertical (normal) or italic (italic and oblique). <br>Italic and oblique both display italic text. The difference is that italic applies the italic font version of a font while oblique is a normal font that is only made italic. <br>The font-style property can be applied to any element in HTML and its value can be passed down to its child elements.

  - font-variant : Specifies the text to use the small caps style.<br>
    This feature can make text capitalized but written in small and close. <br>To make text like the picture above, we can use the `font-variant` property with the `small-caps` value in the property. <br>The font-variant property can be applied to any element in HTML and its value can be passed down to its child elements.

  - font : Shorthand of an existing font property.
    Specifying each font property value will result in a lot of repetitive code. That way CSS provides a "shortcut" to write these properties into one property, namely font. <br>By using the font property we can write several properties in only one property in one rule.<br>
    `target{ font: style weight variant size font-family }`<br>
    The value of the font property is the value of all the font properties. Each value is separated by a space. In this property the order of values is important, so don't get the wrong order in writing them. Writing errors or sequences cause the entire rule structure to be invalid. <br>Even so we can not write down all the existing property values, but the values of the font-size and font-family properties must be present when using this property.

- Text Styling

  - Line Height <br>
    Property `line-height` digunakan untuk mengatur jarak minimal dari garis dasar ke garis dasar dalam menampilkannya teks pada halaman.<br>`line-height: 2em (dua kali lebih besar dari ukuran text)`
  - Text Indent <br>
    Dalam membuat sebuah dokumen tidak jarang kita membutuhkan jarak/lekuk di awal paragraf. Hal tersebut dapat dilakukan pada website dengan menerapkan properti `text-indent`. Kita dapat menentukan nilai properti ini melalui perhitungan panjang dalam px, em, dan in atau bisa menggunakan nilai persentase (%). Nilai persentase dihitung berdasarkan lebar dari induk elemen. <br>Nilai properti ini dapat diberikan nilai negatif. Jika kita menggunakannya, maka baris pertama pada paragraf akan keluar dari batas elemen yang menampungnya (biasa disebut hanging indent).
  - Text Align <br>
    Berikut ini nilai yang dapat digunakan pada properti text-align:<br>

  |   Nilai Properti    |                           Fungsi                            |
  | :-----------------: | :---------------------------------------------------------: |
  |  text-align: left   |            Membuat perataan teks pada ujung kiri            |
  |  text-align: right  |           Membuat perataan teks pada ujung kanan            |
  | text-align: center  |            Membuat perataan teks secara menengah            |
  | text-align: justify | Membuat perataan teks yang setara pada ujung kiri dan kanan |

  - Text Decoration <br>
    Detailnya sebagai berikut: <br>

  |        Nilai properti         |                      Fungsi                      |
  | :---------------------------: | :----------------------------------------------: |
  |  text-decoration: underline   |   Memberikan garis bawah (underline) pada teks   |
  |   text-decoration: overline   |    Memberikan garis atas (overline) pada teks    |
  | text-decoration: line-through | Memberikan efek tulisan dicoret (strikethrough)  |
  |     text-decoration: none     | Menghilangkan dekorasi teks yang ada pada elemen |

  - Text Transform <br>
    Properti ini dapat berisikan nilai sebagai berikut: <br>

  |       Nilai Properti       |                       Fungsi                       |
  | :------------------------: | :------------------------------------------------: |
  |    text-transform: none    | Teks yang ditampilkan sama seperti yang dituliskan |
  | text-transform: capitalize |   Membuat huruf pertama besar pada tiap katanya    |
  | text-transform: lowercase  |    Membuat seluruh teks menggunakan huruf kecil    |
  | Text-transform: uppercase  |    Membuat seluruh teks menggunakan huruf besar    |

  - Letter Spacing and Word Spacing <br>
    Properti selanjutnya yang bisa kita gunakan untuk formating teks adalah `letter-spacing` dan `word-spacing`. Seperti namanya, properti ini digunakan untuk mengatur spasi atau jarak pada teks. Properti `letter-spacing` digunakan untuk mengatur jarak antar huruf, sedangkan `word-spacing` digunakan untuk mengatur jarak antar kata.

  - Text Shadow <br>
    Memberikan bayangan pada teks.<br>
    Nilai dari properti ini membutuhkan tiga buah nilai dan satu buah nilai warna sehingga membutuhkan empat nilai dalam satu properti untuk menentukan bayangannya.<br>
    `text-shadow: value1 value2 value3 color`<br>
    example `text-shadow: 1px 2px 3px #0088b9`<br>
  - Nilai pertama : menunjukkan seberapa jauh ke kiri atau kanan (horizontal) bayangan harus ditampakkan.
  - Nilai kedua : menunjukkan jarak ke atas atau ke bawah (vertical) bayangan harus ditampakkan.
  - Nilai Ketiga (opsional) : menentukan tingkat keburaman yang harus diterapkan pada bayangan.
  - Nilai Keempat : menentukan warna yang digunakan pada bayangan.

- Determining Color <br>
  Values ​​Each color on our computer screen consists of a mixture of red, green, and blue. Computer screens are made of thousands of tiny squares called pixels.

  - Numeric Value

  ```
  /* Green color uses RGB format */
  color: rgb(78,231,23);

  /* Green color Using HEX format */
  colors: #4ee717;

  /* Green color using HSL format (only in CSS3)*/
  color: hsl(104, 82%, 50%);
  ```

  - Predefined Color Name

  ```
  color: black;
  ```

  - Opacity
    CSS3 introduces the opacity property which can specify transparent values ​​for HTML elements. The value of the opacity property is a decimal number between 0.0 to 1.0, if we set the value to 0.5 it means 50% transparent.

  ```
  div#opacity {
    background-color: red;
    opacity: 0.5;
  }
  ```

  In addition to elements, we can also set opacity for colors. To do this, you can use the rgba and hsla formats, where this format is the rgb format with an alpha value added. In addition, it can also be done using the hex format by providing two digits behind the hexadecimal code.

  ```
  p {
    color: rgba(78,231,23, 0.5);
    color: hsla(104, 82%, 50%, 0.5);
    color: #4ee717ee; /*ee is an additional digit to apply opacity*/
  }
  ```

- Box Element

  - Content : Is a core of the element box which is the content of the element itself
  - Padding: The area that is the distance between the element's border and the displayed content. When we apply a background-color then that color is applied to the padding area. Applying padding sizes to elements is optional.
  - Border : Is the outermost line that surrounds the content and padding. Applying a border to an element is optional.
  - Margin: Unlike padding, margin is the area of ​​the distance outside the border. In the illustration above, the margins are shown in pink but in the original they are always transparent and applying margins to elements is optional.
  - Edge of element : is the limit of an element. It contains margins, borders, padding and content. In the illustration above, the element boundaries are indicated by dashes but in the original the element boundaries are always invisible.

- Box Dimensions <br>
  We can set the dimension value of the box with the width and height properties.<br>
  The most widely used way of determining the dimensions of a box is to use pixels, percentages, or ems. Traditionally, pixels have been the most popular way because we can design and control the size accurately.<br>
  Unlike when we use percentages, the size of the box will be relative or adjust from other sizes, such as the size of the browser window or the size of the parent that houses it. Meanwhile, when using ems, the box dimension value will adjust based on the size of the text displayed on the content of the element.

- Limiting Dimension
  To do this we make use of the min-width and max-width properties.

  - min-width : is a property used to set the minimum width value that the element must have.
  - max-width : is a property used to set the maximum width value that an element should have.

- Overflowing Content
  The dimensions of the resulting box elements are always sufficient to hold the content but this is not the case if we set the length and width manually.<br>
  Usable properties:

  - visible : This is the default value for this property. Content that is not accommodated (overflow) will still be displayed as by default.
  - hidden : If overflow occurs, then the content that is not accommodated will be hidden.
  - scroll : Brings up a scroll bar at the edge of the element, so content that is not accommodated will be displayed with a scroll bar. If you use this value, the scroll bar will still appear even if the content does not overflow.
  - auto : Same as scroll, the difference is that if there is no overflow, the visible value will be applied.

- Box Size
  After CSS3 we can choose another type of measurement in determining the dimensions of the element. By using the box-sizing property we can determine it based on the border box, where the size of the element includes content, padding and borders. With this method, the resulting elements displayed (including padding and borders) will have the exact same dimensions as we specified.<br>
  `box-sizing: border-box`

- Border <br>
  The border is a line that surrounds the content and padding area (optional).

  - Border Width <br>
    The border-width property is used to set the thickness of the border. The value of this property can be a pixel or use a predefined name value such as thin, medium, and thick. We cannot use percentage value (%) on this property.
  - Border Style <br>
    We can set the border type by using the border-style property. The following values ​​can be used for this property: <br>

    | Property Value |                                                                 Explanation                                                                 |
    | -------------- | :-----------------------------------------------------------------------------------------------------------------------------------------: |
    | solid          |                                                         Solid line type (unbroken)                                                          |
    | dotted         | The line that forms from the points (if the line is 2px thick, the dots will be 2px in size and have a distance of 2px between the points). |
    | dotted         |                                                    A line that forms from a short line.                                                     |
    | double         |                                                      A line formed by two solid lines.                                                      |
    | groove         |                                                        Line type shaped like a frame                                                        |
    | hidden         |                                                       Model to hide line elements on.                                                       |

  - Border Color <br>
    The last property is border-color. This property is used to specify the line color by using an RGB value, Hex value, or a CSS color name.
  - Shorthand <br>
    To apply a border to an element we must define all the existing border properties. Starting from setting the thickness (border-width), type (border-style), and color (border-color). If we forget to set one of these properties, the line will not appear on the element.
    ```
    .box {
      border: 4px dashed #00a2c6;
    }
    ```

- Padding <br>
  Padding is the distance between the content area and the border. <br>
  We can define different padding values ​​for each side of the element by using:
  ```
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
  ```
  Or by using a shorthand like this:
  ```
  padding: 10px 15px 10px 15px;
  ```
- Margin <br>
  Like padding, margin is the space or distance in an element. But the distance is outside of the content and border of the element. <br>
  We can define different margin values ​​for each side of the element by using:
  ```
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-left: 25px;
  ```
  But we can also use shorthand to set all four values ​​in one property
  ```
  margins: 10px 15px 20px 25px;
  ```
  We can also use just two values ​​to specify the vertical and horizontal margin values.
  ```
  margins: 10px 15px; /* top and bottom are 10px, left and right are 15px */
  ```
- Centering Content <br>
  How to put a box right in the middle of a page or inside its parent element? Set the right and left margins with auto values. Furthermore, we must also specify the width of the box (using the width property). Otherwise, the box will take up the full width of the page or element's parent. <br>
  After we determine the width of the box and set the left and right margins to auto, the browser will automatically give the same distance on each horizontal side of the box, thus making the box in the middle of the page.

- Display Roles
  Each HTML element has two types, namely block and inline. The properties of block and inline elements:

  - inline elements: <br>
    An HTML element that does not add a newline by default when it is created. <br>
    The inline element's width and height values ​​are as large as the content in it, and cannot be changed. <br>
    Margins and padding only affect elements horizontally, not vertically.
  - block elements:
    HTML elements by default add a newline when created. <br>
    If the width is not set, the width of the block element will meet the width of the browser or the element that houses it. <br>
    We can set the dimensions of the block elements. <br>
    Inside the block element, we can store the tags of other HTML elements. <br>
    By using the display property, we can turn an inline element into a block, and vice versa. In this case, this property can also be used to hide the displayed element. <br>
    The value of this property can be:
    - inline : used to change block elements to behave like inline elements.
    - block : used to change inline elements to behave like block elements.
    - inline-block : makes a block element not add a newline when it is created, but retains the - other properties of the block element.
    - none : used to hide elements from the page. <br>
      The value and operation of the box-shadow property is similar to that of text-shadow, in that it determines the vertical and horizontal spacing, the degree of blur, and the color of the shadow. In the box shadow, we can also determine the level of shadow spread. The larger the value, the wider the visible shadow. Here's an example of applying box shadow to CSS:
    ```
    box-shadow: 6px 6px 5px 10px #666666;
    ```
    The following explains each value of its property:
    - The first value : indicates how far to the left or right (horizontally) the shadow should be shown.
    - Second value : indicates the distance up or down (vertical) the shadow should be shown.
    - Third Value (optional): specifies the level of blur that should be applied to the shadow.
    - Fourth Value (optional): determines the level of shadow spread. The larger the specified value, the wider the visible shadow.
    - Fifth Value: determines the color used in the shadow.

- Rounded Corner <br>
  CSS3 introduced the ability to create rounded corners on boxes by using the `border-radius` property. The value of this property is the degree of curvature of the border in pixels.

  ```
  .rounded {
    border-radius: 10px;
  }
  ```

  We can assign values ​​to individual squares by using separate properties, like this:

  ```
  .rounded {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 10px;
  }
  ```

  Or we can use shorthand so we can set all four values ​​in one property.

  ```
  .rounded {
    border-radius: 10px 5px 10px 5px;
  }
  ```

- Positioning <br>
  The positioning schema is useful when we want to move an element without disturbing the position of other elements and controlling the location of the element. Here are the values ​​for the position property in CSS:

  - Normal Flow / Static Flow : This is the default behavior of elements, where each block element will be displayed in a new line when created. So that each block element always appears below the previous block element. Even if there is still some free space next to the elements, they won't appear next to each other.
  - Relative Positioning : Makes an element move up, right, down, or left from its original position or the position where the element should be. This position shift will not affect the position of the surrounding elements because when using relative positioning, the element will be moved from normal flow.
  - Absolute Positioning: Just like relative, the element will be moved out of normal flow so that we can move the element's position up, right, down, or left freely without disturbing the surrounding elements. However, its position is relative to the browser window and the element's parent as long as the parent element is also outside of normal flow.
  - Fixed Positioning: It is an absolute position but its position is always relative to the browser window. Even when the user scrolls, his position on the screen will remain unchanged.

- Difference between Static Flow and Non-Static Flow

  - Elements that apply static flow will affect the position of the elements below them.
  - Elements that implement non-static flow will be lifted from outside the static flow. So that these elements can freely move positions without affecting the elements that are in static flow. <br>
    To change the position of elements that are in a non-static flow, we can use the top, right, bottom, and left properties. <br>
    We need to remember, yes, that the top, left, right, and bottom properties in CSS will only affect elements that apply non-static flow (elements that apply relative, absolute, and fixed values to the position property).

- Normal Flow <br>
  Dalam flow normal, setiap elemen block ditempatkan di bawah elemen sebelumnya. Karena ini merupakan cara standar browser memperlakukan elemen HTML, kita tidak perlu menetapkan nilai properti position ketika ingin membuat perilaku seperti ini tetapi secara sintaks perilaku ini ditetapkan dengan nilai static.

- Relative Positioning <br>
  By setting `relative` on the `position` property, we can move the element's position up, right, down, or left. The position shift that is carried out will not affect the position of the surrounding elements because with relative positioning, the element will be moved from normal flow.

- Absolute Positioning <br>
  When the `position` property is assigned an `absolute` value, it behaves the same as relative. The element will be removed from normal flow so that if the element is moved its position will not affect other elements around it. <br>
  But what distinguishes it is that this element is not considered to exist by elements in normal flow. As a result, the initial location of the element given an absolute value will be occupied by the element below it.

- Fixed Positioning <br>
  Fixed positioning is an absolute position but its position is always relative to the browser window (even if it is placed inside the parent element outside of normal flow), even when the user scrolls the position will still appear in its position on the screen.

- Float implementation problem <br>
  If a parent element has only one element by applying the float property, it will have a height value of 0px. <br>
  This indicates that the element that applies float is "not considered to exist" by the parent element that houses it because if you use float, the element will be removed from normal flow. <br>
  This can be handled in two ways which we will discuss, namely by first, using the clear property and second, setting the overflow: auto value on the container.
  - Clear Properties <br>
    The clear property enforces the float property to return "presumed to exist". However to apply this property we need to create an empty element (usually using a div with no content) which applies the clear property. <br>
    The value of the clear property is the value used in the float property because the clear property will delete the float property according to the specified value. <br>
    If there are two elements that apply different float values (left and right)? There is one more value that can eliminate the two properties of float, namely the value of both. Use that value if we want to completely eliminate float on the element.
  - overflow: auto; <br>
    This method is more practical and does not need to create new elements when using it.
