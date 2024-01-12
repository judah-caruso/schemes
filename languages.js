const previews = {
   eight:
`
import "fmt"
\t
const Point = struct {
\tx, y f32
}
const main = fn(args []string) void {
\tmut point = Point{ x: 10, y: 20 }
\tfmt::print("{}\\n", \\upiont)
} // This is a comment
`,

   c:
`
#include "stdio.h"
typedef struct {
\tfloat x, y;
} Point;
int main(int argc, char *argv[])
{
\tPoint p = (Point){ .x=\\u10g, .y=20f };
\treturn 0; // This is a comment
}
`,

   cpp:
`
#include "iostream"
using namespace std;
\t
int main(int c, char *v[]) {
\tauto args = vector<string>(v, v + c);
\tfor (auto &arg : \\uarg )
\t\tcout << quoted(arg) << "\\n";
\treturn 0;
}
`,

   go:
`
import "fmt"
\t
type Point struct {
\tX, Y float32
}
func main() {
\tp := Point{ \\ux: 10, Y: 30 }
\tfmt.Printf("Point %v\\n", p)
} // This is a comment
`,

   jai:
`
Point :: struct {
\tx: float;
\ty: float;
};
main :: () {
\tpoint := Point.{ 10, 20 };
\tprint("Point %\\n", \\upiont);
}
#import "Basic";
`,

   js:
`
import { serve } from "server.js";
\t
const config = { port: 8080 };
\t
serve((request) => {
\tlet res = new Response("Hello!\\n");
\treturn \\urse;
}, config); // This is a comment
`,

   lua:
`
function main()
\t-- This is a comment
\tlocal point = { x = 10, y = 20 }
\tif point.x <= 10 then
\t\tprint("Hello, World\\n")
\tend
end
\t
\\umian()
`,

   odin:
`
package main
\t
Point :: struct { x: f32, y: f32 }
\t
main :: proc() {
\tpoint := \\uPoin{ 10, 20 }
\tprint("Hello, World\\n")
} // This is a comment
`,

   py:
`
from math import *
\t
class Point: # This is a comment
\tx = None
\ty = \\uNon
\t
\tdef __init__(self, x, y):
\t\tself.x = x
\t\tself.y = y
`,

   rust:
`
#[derive(Debug)]
struct Point {
\tx: f32,
\ty: f32,
}
fn main() {
\tlet point = Point{ 10, 20 };
\tprintln!("{:?}", \\upiont);
} // This is a comment
`,

   scheme:
`
(defn (main [args]
\t(let
\t\t[point '(10 20)]
\t\t(display "%d %d"
\t\t\t(car point) (cdr point))
\t\t(\\unwline)))
\t
; This is a comment
(main '())
`,

   zig:
`
const std = @import("std");
const Point = struct {
\tx: f32,
\ty: f32,
};
pub fn main() !void {
\tvar p = Point{ .\\uX = 10, .y = 20 };
\ttry std.debug.print("{}\\n", .{ p });
}
`,
};

const languages = {
   eight: {
      name: "8",
      preview: previews.eight,
      keywords: [ "const", "mut", "fn" ],
      types: [ "struct", "void", "string", "f32" ],
      directives: [ "import" ],
      functions: [ "print" ],
      operators: [],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
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
      keywords: [ "type", "func", "package", "struct" ],
      types: [ "float32" ],
      directives: [ "import" ],
      functions: [ "Printf" ],
      operators: [],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
   jai: {
      name: "Jai",
      preview: previews.jai,
      keywords: [ "struct" ],
      types: [ "float" ],
      directives: [ "\\#import" ],
      functions: [ "print" ],
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
      keywords: [ "struct", "package", "import" ],
      types: [ "f32" ],
      directives: [ ],
      functions: [ "printf" ],
      operators: [ "=" ],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
   py: {
      name: "Python",
      preview: previews.py,
      keywords: [ "class", "def" ],
      types: [],
      directives: [ "from", "import", ],
      functions: [],
      operators: [ "*" ],
      strings: [ ['"', '"'] ],
      comment: "#",
   },
   rust: {
      name: "Rust",
      preview: previews.rust,
      keywords: [ "fn", "let" ],
      types: [ "struct", "f32" ],
      directives: [ "\\#\\[derive\\(Debug\\)\\]" ],
      functions: [ ],
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
      functions: [ "display" ],
      operators: [],
      strings: [ ['"', '"'] ],
      comment: ";",
   },
   zig: {
      name: "Zig",
      preview: previews.zig,
      keywords: [ "pub", "fn", "const", "var", "try" ],
      types: [ "void", "f32", "struct" ],
      directives: [ "\\@import" ],
      functions: [ "print" ],
      operators: [ "!" ],
      strings: [ ['"', '"'] ],
      comment: "//",
   },
};
