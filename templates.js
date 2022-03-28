// This file contains theme templates for each editor

const templates = {
   sublime_text:
`{
    "name": "**TITLE**",
    "variables":
    {
**VARIABLES**
    },
    "globals":
    {
        "background"     : "var(c0)", 
        "foreground"     : "var(c1)",
        "caret"          : "var(c1)",
        "block_caret"    : "color(var(c1) alpha(0.20))",
        "selection"      : "color(var(c1) alpha(0.20))",
        "misspelling"    : "var(c6)",
        "line_highlight" : "#00000000",
        "shadow"         : "#00000000",
        "shadow_width"   : "1",
    },
    "rules":
    [
        {
            "name"       : "Operators",
            "scope"      : "keyword.operator",
            "foreground" : "var(c1)",
        },
        {
            "name"       : "Types",
            "scope"      : "storage.type, storage.modifier",
            "foreground" : "var(c2)",
        },
        {
            "name"       : "Procedures, Keywords",
            "scope"      : "entity.name.function, keyword, keyword.declaration.type",
            "foreground" : "var(c3)",
        },
        {
            "name"       : "Constants, Strings",
            "scope"      : "constant, string, string.unquoted",
            "foreground" : "var(c4)",
        },
        {
            "name"       : "Pre-Processor, Special",
            "scope"      : "meta.preprocessor, meta.annotation, keyword.other.import, keyword.control.import, markup.inserted, constant.character",
            "foreground" : "var(c5)",
        },
        {
            "name"       : "Errors",
            "scope"      : "invalid.deprecated",
            "foreground" : "var(c6)",
        },
        {
            "name"       : "Comment",
            "scope"      : "comment",
            "foreground" : "var(c7)",
        },
    ]
}`,

   lite:
`local style  = require "core.style"
local common = require "core.common"

local scheme = {
**VARIABLES**
}

style.background     = scheme.c0
style.background2    = scheme.c0 
style.background3    = scheme.c0 
style.text           = scheme.c1
style.caret          = scheme.c1
style.accent         = scheme.c3
style.dim            = scheme.c3
style.divider        = scheme.c0
style.selection      = scheme.c7
style.line_number    = scheme.c1
style.line_number2   = scheme.c3
style.line_highlight = scheme.c0
style.scrollbar      = scheme.c1
style.scrollbar2     = scheme.c3

style.syntax["normal"]   = scheme.c1
style.syntax["symbol"]   = scheme.c1
style.syntax["comment"]  = scheme.c7
style.syntax["keyword"]  = scheme.c3
style.syntax["keyword2"] = scheme.c2
style.syntax["number"]   = scheme.c4
style.syntax["literal"]  = scheme.c4
style.syntax["string"]   = scheme.c4
style.syntax["operator"] = scheme.c1
style.syntax["function"] = scheme.c3`,
}