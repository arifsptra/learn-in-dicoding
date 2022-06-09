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
