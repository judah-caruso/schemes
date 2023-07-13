# Schemes

Minimal editor-agnostic color scheme framework.


## Specification

Schemes are small, human readable `svg` files that can be shared with code examples
"baked" into the scheme itself. This lets you see real world examples before
installing it, while also making the process of sharing as easy as copying an image.

Each scheme is limited to **8 colors** *(this will not change)*:

```
c0: Background
c1: Foreground, Operators
c2: Types
c3: Procedures, Keywords
c4: Constants, Strings
c5: Pre-Processor, Special (annotations, escape sequences, etc.), VCS (Addition)
c6: Errors, VCS (Removal)
c7: Comments
```

A scheme file (Nordic):

```xml
<svg width="288px" height="140px" xmlns="http://www.w3.org/2000/svg" baseProfile="full" version="1.1">
   <title>Nordic</title>
   <style>
      #c0 { fill: #2E3440; } <!-- Background -->
      #c1 { fill: #D8DEE9; } <!-- Foreground, Operators -->
      #c2 { fill: #88C0D0; } <!-- Types -->
      #c3 { fill: #81A1C1; } <!-- Procedures, Keywords -->
      #c4 { fill: #A3BE8C; } <!-- Constants, Strings -->
      #c5 { fill: #5E81AC; } <!-- Pre-Processor, Special -->
      #c6 { fill: #BF616A; } <!-- Errors -->
      #c7 { fill: #616E88; } <!-- Comments -->
   </style>

   <!-- Language Preview -->
   <rect width="288px" height="140px" rx="10px" id="c0"></rect>
   <text style="font-family:ui-monospace,monospace;font-size: 12px;font-weight:400;" id="c1"><tspan x="5px" y="19px"><tspan id="c5">import</tspan> <tspan id="c3">"fmt"</tspan></tspan><tspan x="19px" y="33px"></tspan><tspan x="5px" y="47px"><tspan id="c3">type</tspan> Point <tspan id="c2">struct</tspan> {</tspan><tspan x="19px" y="61px">X, Y <tspan id="c2">float32</tspan></tspan><tspan x="5px" y="75px">}</tspan><tspan x="5px" y="89px"><tspan id="c3">func</tspan> <tspan id="c3">main</tspan>() {</tspan><tspan x="19px" y="103px">p := Point{ <tspan id="c6" style="text-decoration: underline wavy">x</tspan>: <tspan id="c3">10</tspan>, Y: <tspan id="c3">30</tspan> }</tspan><tspan x="19px" y="117px">fmt.printf(<tspan id="c3">"Point %v<tspan id="c5">\n</tspan>"</tspan>, p)</tspan><tspan x="5px" y="131px">} <tspan id="c7">// This is a comment</tspan></tspan></text>
</svg>
```

How it looks:

![nordic](previews/nordic.svg)


To edit a theme, simply modify the file by hand or drag and drop it into [the editor](https://judahcaruso.com/schemes).


## Usage/Installation

Scheme files can be easily converted to your editor's color scheme format
with [this tool](https://judahcaruso.com/schemes). Just drag and drop a scheme
and click on your preferred editor.


## Example Schemes

### Light

![hub-light](previews/hub-light.svg)
![utopian](previews/utopian.svg)
![paperwhite](previews/paperwhite.svg)


### Dark

![nordic](previews/nordic.svg)
![pale](previews/pale.svg)
![andromeda](previews/andromeda.svg)
![sublunary](previews/sublunary.svg)
![one](previews/one.svg)
![hub-dim](previews/hub-dim.svg)
![ice](previews/ice.svg)
![hub-dark](previews/hub-dark.svg)

![to-you](previews/to-you.svg)
![redline-dim](previews/redline-dim.svg)
![EX](previews/EX.svg)
![groovy](previews/groovy.svg)
![fusion](previews/fusion.svg)
![EY](previews/EY.svg)
![greenery](previews/greenery.svg)

![spice](previews/spice.svg)
![minimal-dark](previews/minimal-dark.svg)
![blue-in-green](previews/blue-in-green.svg)
![redline](previews/redline.svg)


## Ecosystem

If you've written something that uses schemes, add it below and submit a pull request!

### Libraries

- [schemes.jai](https://github.com/judah-caruso/schemes.jai) - Jai library for working with schemes
- [schemes.go](https://github.com/judah-caruso/schemes.go) - Go library for working with schemes
- [schemes.lua](https://github.com/judah-caruso/schemes.lua) - Lua53+ library for working with schemes


## Reasoning

Porting color schemes between editors is often a time consuming and inconsistent
process as each editor has its own system for highlighting code. Because of this,
color scheme creators end up designing their own frameworks to specify which
colors map to which syntax groups within any/all editors. However, even with
frameworks in place, most ports are still rough approximations of the original.

The idea behind schemes is to provide a simple, limited palette that maps
consistently between editors and can be converted automatically.

As syntax groups of programming languages are already consistent (identifiers, keywords, constants, etc.),
color schemes should be as well.


## Inspirations

- [Themes by 100r](https://github.com/hundredrabbits/Themes)
- [Colors for lite](https://github.com/rxi/lite-colors)


## Contributing

If you've created a new scheme, simply add it to the `Previews` section of 
this file (following the same format) and submit a pull request.

As this project is new, ideas are also welcome.


## Updates

### 23/07/12 (v2)
   - Format: Schemes now use pixels to have better display consistency between platforms.
   - Format: Changed font to use `ui-monospace` by default and `monospace` as a fallback.
   - Format: Added a `<version>` tag so tools can better support future updates.
   - Format: Made border more round.
   - Editor: Added on-the-fly syntax highlighting so new language preview options can be add more easily. See `languages.js` for more info.
   - Editor: Removed unimplemented VIM and VS Code export options.
   - Editor: Improved error handling around clipboard copy failure. Now what would've been exported is printed to the console if it can't be copied.
   - Editor: Improved Sublime Text highlighting
   - Editor: Added link to this GitHub page.

### 22/27/03 - (v1)
   - Initial release
