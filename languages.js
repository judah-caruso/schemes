const previews = {
   c:
`#include "stdio.h"
\t
typedef struct { float x, y; } Point;
\t
int main(int argc, char **argv) {
\tPoint p = (Point){ .x=\\u10g, .y=20f };
\treturn 0; // This is a comment
}`,

   cpp:
`#include "iostream"
\t
int main(int c, char *v[]) {
\tauto args = vector<string>(v, v + c);
\tfor (auto &arg : \\uarg )
\t\tcout << quoted(arg) << "\\n";
\treturn 0;
}`,

   go:
`import "fmt"
\t
type Point struct { X, Y float32 }
\t
func main() {
\tp := Point{ \\ux: 10, Y: 30 }
\tfmt.Printf("Point %v\\n", p)
} // This is a comment`,

   js:
`import { serve } from "server.js";
\t
const config = { port: 8080 };
\t
serve((request) => {
\tlet res = new Response("Hello!\\n");
\treturn \\urse;
}, config); // This is a comment`,

   lua:
`function main()
\tlocal point = { x = 10, y = 20 }
\tif point.x <= 10 then
\t\tprint("Hello, World\\n")
\tend
end
\t
\\umian() -- This is a comment`,

   odin:
`package main
\t
import "core:fmt"
\t
main :: proc() {
\tp := [2]f32{ 1, 2 } * 2
\t\\ufm.printf("Hellope!")
} // This is a comment`,

   py:
`from math import *
\t
class Point: # This is a comment
\tx, y = None, \\uNon
\t
\tdef __init__(self, x, y):
\t\tself.x, self.y = x, y
\t\tprint("hello, world")`,

   rust:
`#[derive(Debug)]
struct Point { x: f32, y: f32 }
\t
fn main() {
\tlet mut point = Point{ x: 10.0, y: 20.0 };
\tpoint.x += 1.0;
\tprintln!("{:?}", \\upoin);
} // This is a comment`,

   scheme:
`(defn (main [args]
\t(let
\t\t[point '(10 20)]
\t\t(display "%d %d"
\t\t\t(car point) (cdr point))
\t\t(\\unwline)))
\t
(main '()) ; This is a comment`,

   zig:
`const std = @import("std");
\t
const Point = struct { x: f32, y: f32 };
\t
pub fn main() void {
\tconst p = Point{ .x = 10, .y = 20 };
\tstd.debug.\\uprin("{}\\n", .{ p });
} // This is a comment`,
};

const languages = {
   c: {
      name: "C",
      preview: previews.c,
      keywords: [ "return", "if", "typedef" ],
      types: [ "int", "char", "float", "struct" ],
      directives: [ "\\#include" ],
      functions: [],
      operators: [ "*" ],
      strings: [ ['"', '"'], [ "<", ">" ] ],
      comment: "//",
   },
   cpp: {
      name: "C++",
      preview: previews.cpp,
      keywords: [ "using", "namespace", "for", "return" ],
      types: [ "int", "char", "auto" ],
      directives: [ "\\#include" ],
      functions: [ "quoted" ],
      operators: [ "*", "+", "&", "<<" ],
      strings: [ ['"', '"'], [ "<", ">" ] ],
      comment: "//",
   },
   go: {
      name: "Go",
      preview: previews.go,
      keywords: [ "type", "func", "package"],
      types: [ "float32", "struct" ],
      directives: [ "import" ],
      functions: [ "Printf" ],
      operators: [],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
   js: {
      name: "JavaScript",
      preview: previews.js,
      keywords: [ "const", "let", "return", "new" ],
      types: [],
      directives: [ "import", "from" ],
      functions: [ "serve" ],
      operators: [],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
   lua: {
      name: "Lua",
      preview: previews.lua,
      keywords: [ "function", "local", "if", "then", "end" ],
      types: [],
      directives: [],
      functions: [ "print" ],
      operators: [ "=", "<=" ],
      strings: [ ['"', '"'] ],
      comment: "--",
   },
   odin: {
      name: "Odin",
      preview: previews.odin,
      keywords: [ "package", "import" ],
      types: [ "f32", "proc", "struct", "Point" ],
      directives: [ ],
      functions: [ "printf", "main" ],
      operators: [ "=", "::" ],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
   py: {
      name: "Python",
      preview: previews.py,
      keywords: [ "class", "def", "self" ],
      types: [ "Point" ],
      directives: [ "from", "import", ],
      functions: [ "__init__", "print" ],
      operators: [ "*", "=" ],
      strings: [ ['"', '"'] ],
      comment: "#",
   },
   rust: {
      name: "Rust",
      preview: previews.rust,
      keywords: [ "fn", "let" ],
      types: [ "struct", "f32" ],
      directives: [ "\\#\\[derive\\(Debug\\)\\]" ],
      functions: [ "println" ],
      operators: [],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
   scheme: {
      name: "Scheme",
      preview: previews.scheme,
      keywords: [ "defn", "let", "car", "cdr" ],
      types: [],
      directives: [],
      functions: [ "display", "main" ],
      operators: [],
      strings: [ ['"', '"'] ],
      comment: ";",
   },
   zig: {
      name: "Zig",
      preview: previews.zig,
      keywords: [ "pub", "fn", "const", "try" ],
      types: [ "void", "f32", "struct" ],
      directives: [ "\\@import" ],
      functions: [ "print" ],
      operators: [ "!" ],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
};

// Uncomment when testing language preview changes
// (() => {
//    Object.keys(languages).forEach((k) => {
//       const lang = languages[k];
//       const lines = lang.preview.split('\n');
//       if (lines.length != 8) {
//          alert(`Language '${k}' has an invalid preview!`);
//       }
//    })
// })();
