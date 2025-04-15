"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1983,3349],{13349:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var i=t(1046),a=t(43640),d=t(41983),o=t(77576);let l=Object.freeze(JSON.parse('{"displayName":"Liquid","fileTypes":["liquid"],"foldingStartMarker":"\\\\{%-?\\\\s*(capture|case|comment|for|form|if|javascript|paginate|schema|style)[^(%})]+%}","foldingStopMarker":"\\\\{%\\\\s*(end(?:capture|case|comment|for|form|if|javascript|paginate|schema|style))[^(%})]+%}","injections":{"L:meta.embedded.block.js, L:meta.embedded.block.css, L:meta.embedded.block.html, L:string.quoted":{"patterns":[{"include":"#injection"}]}},"name":"liquid","patterns":[{"include":"#core"}],"repository":{"attribute":{"begin":"\\\\w+:","beginCaptures":{"0":{"name":"entity.other.attribute-name.liquid"}},"end":"(?=,|%}|}}|\\\\|)","patterns":[{"include":"#value_expression"}]},"attribute_liquid":{"begin":"\\\\w+:","beginCaptures":{"0":{"name":"entity.other.attribute-name.liquid"}},"end":"(?=[,|])|$","patterns":[{"include":"#value_expression"}]},"comment_block":{"begin":"\\\\{%-?\\\\s*comment\\\\s*-?%}","end":"\\\\{%-?\\\\s*endcomment\\\\s*-?%}","name":"comment.block.liquid","patterns":[{"include":"#comment_block"},{"match":"(.(?!\\\\{%-?\\\\s*(comment|endcomment)\\\\s*-?%}))*."}]},"core":{"patterns":[{"include":"#raw_tag"},{"include":"#doc_tag"},{"include":"#comment_block"},{"include":"#style_codefence"},{"include":"#stylesheet_codefence"},{"include":"#json_codefence"},{"include":"#javascript_codefence"},{"include":"#object"},{"include":"#tag"},{"include":"text.html.basic"}]},"doc_tag":{"begin":"\\\\{%-?\\\\s*(doc)\\\\s*-?%}","beginCaptures":{"0":{"name":"meta.tag.liquid"},"1":{"name":"entity.name.tag.doc.liquid"}},"contentName":"comment.block.documentation.liquid","end":"\\\\{%-?\\\\s*(enddoc)\\\\s*-?%}","endCaptures":{"0":{"name":"meta.tag.liquid"},"1":{"name":"entity.name.tag.doc.liquid"}},"name":"meta.block.doc.liquid","patterns":[{"include":"#liquid_doc_description_tag"},{"include":"#liquid_doc_param_tag"},{"include":"#liquid_doc_example_tag"},{"include":"#liquid_doc_fallback_tag"}]},"filter":{"captures":{"1":{"name":"support.function.liquid"}},"match":"\\\\|\\\\s*((?![.0-9])[a-zA-Z0-9_-]+:?)\\\\s*"},"injection":{"patterns":[{"include":"#raw_tag"},{"include":"#comment_block"},{"include":"#object"},{"include":"#tag_injection"}]},"invalid_range":{"match":"\\\\((.(?!\\\\.\\\\.))+\\\\)","name":"invalid.illegal.range.liquid"},"javascript_codefence":{"begin":"(\\\\{%-?)\\\\s*(javascript)\\\\s*(-?%})","beginCaptures":{"0":{"name":"meta.tag.metadata.javascript.start.liquid"},"1":{"name":"punctuation.definition.tag.begin.liquid"},"2":{"name":"entity.name.tag.javascript.liquid"},"3":{"name":"punctuation.definition.tag.begin.liquid"}},"contentName":"meta.embedded.block.js","end":"(\\\\{%-?)\\\\s*(endjavascript)\\\\s*(-?%})","endCaptures":{"0":{"name":"meta.tag.metadata.javascript.end.liquid"},"1":{"name":"punctuation.definition.tag.end.liquid"},"2":{"name":"entity.name.tag.javascript.liquid"},"3":{"name":"punctuation.definition.tag.end.liquid"}},"name":"meta.block.javascript.liquid","patterns":[{"include":"source.js"}]},"json_codefence":{"begin":"(\\\\{%-?)\\\\s*(schema)\\\\s*(-?%})","beginCaptures":{"0":{"name":"meta.tag.metadata.schema.start.liquid"},"1":{"name":"punctuation.definition.tag.begin.liquid"},"2":{"name":"entity.name.tag.schema.liquid"},"3":{"name":"punctuation.definition.tag.begin.liquid"}},"contentName":"meta.embedded.block.json","end":"(\\\\{%-?)\\\\s*(endschema)\\\\s*(-?%})","endCaptures":{"0":{"name":"meta.tag.metadata.schema.end.liquid"},"1":{"name":"punctuation.definition.tag.end.liquid"},"2":{"name":"entity.name.tag.schema.liquid"},"3":{"name":"punctuation.definition.tag.end.liquid"}},"name":"meta.block.schema.liquid","patterns":[{"include":"source.json"}]},"language_constant":{"match":"\\\\b(false|true|nil|blank)\\\\b|empty(?!\\\\?)","name":"constant.language.liquid"},"liquid_doc_description_tag":{"begin":"(@description)\\\\b\\\\s*","beginCaptures":{"0":{"name":"comment.block.documentation.liquid"},"1":{"name":"storage.type.class.liquid"}},"end":"(?=@|\\\\{%-?\\\\s*enddoc\\\\s*-?%})","patterns":[{"match":"[^@]+","name":"string.quoted.single.liquid"}]},"liquid_doc_example_tag":{"begin":"(@example)\\\\b\\\\s*","beginCaptures":{"0":{"name":"comment.block.documentation.liquid"},"1":{"name":"storage.type.class.liquid"}},"contentName":"meta.embedded.block.liquid","end":"(?=@|\\\\{%-?\\\\s*enddoc\\\\s*-?%})","patterns":[{"include":"#core"}]},"liquid_doc_fallback_tag":{"captures":{"1":{"name":"comment.block.liquid"}},"match":"(@\\\\w+)\\\\b"},"liquid_doc_param_tag":{"captures":{"1":{"name":"storage.type.class.liquid"},"2":{"name":"entity.name.type.instance.liquid"},"3":{"name":"variable.other.liquid"},"4":{"name":"string.quoted.single.liquid"}},"match":"(@param)\\\\s+(?:(\\\\{[^}]*}?)\\\\s+)?(\\\\[?[a-zA-Z_][\\\\w-]*]?)?(?:\\\\s+(.*))?"},"number":{"match":"(([-+])\\\\s*)?[0-9]+(\\\\.[0-9]+)?","name":"constant.numeric.liquid"},"object":{"begin":"(?<!comment %})(?<!comment -%})(?<!comment%})(?<!comment-%})(?<!raw %})(?<!raw -%})(?<!raw%})(?<!raw-%})\\\\{\\\\{-?","beginCaptures":{"0":{"name":"punctuation.definition.tag.begin.liquid"}},"end":"-?}}","endCaptures":{"0":{"name":"punctuation.definition.tag.end.liquid"}},"name":"meta.object.liquid","patterns":[{"include":"#filter"},{"include":"#attribute"},{"include":"#value_expression"}]},"operator":{"captures":{"1":{"name":"keyword.operator.expression.liquid"}},"match":"(?:(?<=\\\\s)|\\\\b)(==|!=|[><]|>=|<=|or|and|contains)(?:(?=\\\\s)|\\\\b)"},"range":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.section.parens.begin.liquid"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.parens.end.liquid"}},"name":"meta.range.liquid","patterns":[{"match":"\\\\.\\\\.","name":"punctuation.range.liquid"},{"include":"#variable_lookup"},{"include":"#number"}]},"raw_tag":{"begin":"\\\\{%-?\\\\s*(raw)\\\\s*-?%}","beginCaptures":{"1":{"name":"entity.name.tag.liquid"}},"contentName":"string.unquoted.liquid","end":"\\\\{%-?\\\\s*(endraw)\\\\s*-?%}","endCaptures":{"1":{"name":"entity.name.tag.liquid"}},"name":"meta.entity.tag.raw.liquid","patterns":[{"match":"(.(?!\\\\{%-?\\\\s*endraw\\\\s*-?%}))*."}]},"string":{"patterns":[{"include":"#string_single"},{"include":"#string_double"}]},"string_double":{"begin":"\\"","end":"\\"","name":"string.quoted.double.liquid"},"string_single":{"begin":"\'","end":"\'","name":"string.quoted.single.liquid"},"style_codefence":{"begin":"(\\\\{%-?)\\\\s*(style)\\\\s*(-?%})","beginCaptures":{"0":{"name":"meta.tag.metadata.style.start.liquid"},"1":{"name":"punctuation.definition.tag.begin.liquid"},"2":{"name":"entity.name.tag.style.liquid"},"3":{"name":"punctuation.definition.tag.begin.liquid"}},"contentName":"meta.embedded.block.css","end":"(\\\\{%-?)\\\\s*(endstyle)\\\\s*(-?%})","endCaptures":{"0":{"name":"meta.tag.metadata.style.end.liquid"},"1":{"name":"punctuation.definition.tag.end.liquid"},"2":{"name":"entity.name.tag.style.liquid"},"3":{"name":"punctuation.definition.tag.end.liquid"}},"name":"meta.block.style.liquid","patterns":[{"include":"source.css"}]},"stylesheet_codefence":{"begin":"(\\\\{%-?)\\\\s*(stylesheet)\\\\s*(-?%})","beginCaptures":{"0":{"name":"meta.tag.metadata.style.start.liquid"},"1":{"name":"punctuation.definition.tag.begin.liquid"},"2":{"name":"entity.name.tag.style.liquid"},"3":{"name":"punctuation.definition.tag.begin.liquid"}},"contentName":"meta.embedded.block.css","end":"(\\\\{%-?)\\\\s*(endstylesheet)\\\\s*(-?%})","endCaptures":{"0":{"name":"meta.tag.metadata.style.end.liquid"},"1":{"name":"punctuation.definition.tag.end.liquid"},"2":{"name":"entity.name.tag.style.liquid"},"3":{"name":"punctuation.definition.tag.end.liquid"}},"name":"meta.block.style.liquid","patterns":[{"include":"source.css"}]},"tag":{"begin":"(?<!comment %})(?<!comment -%})(?<!comment%})(?<!comment-%})(?<!raw %})(?<!raw -%})(?<!raw%})(?<!raw-%})\\\\{%-?","beginCaptures":{"0":{"name":"punctuation.definition.tag.begin.liquid"}},"end":"-?%}","endCaptures":{"0":{"name":"punctuation.definition.tag.end.liquid"}},"name":"meta.tag.liquid","patterns":[{"include":"#tag_body"}]},"tag_assign":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(assign|echo)\\\\b","beginCaptures":{"1":{"name":"entity.name.tag.liquid"}},"end":"(?=%})","name":"meta.entity.tag.liquid","patterns":[{"include":"#filter"},{"include":"#attribute"},{"include":"#value_expression"}]},"tag_assign_liquid":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(assign|echo)\\\\b","beginCaptures":{"1":{"name":"entity.name.tag.liquid"}},"end":"$","name":"meta.entity.tag.liquid","patterns":[{"include":"#filter"},{"include":"#attribute_liquid"},{"include":"#value_expression"}]},"tag_body":{"patterns":[{"include":"#tag_liquid"},{"include":"#tag_assign"},{"include":"#tag_comment_inline"},{"include":"#tag_case"},{"include":"#tag_conditional"},{"include":"#tag_for"},{"include":"#tag_paginate"},{"include":"#tag_render"},{"include":"#tag_tablerow"},{"include":"#tag_expression"}]},"tag_case":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(case|when)\\\\b","beginCaptures":{"1":{"name":"keyword.control.case.liquid"}},"end":"(?=%})","name":"meta.entity.tag.case.liquid","patterns":[{"include":"#value_expression"}]},"tag_case_liquid":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(case|when)\\\\b","beginCaptures":{"1":{"name":"keyword.control.case.liquid"}},"end":"$","name":"meta.entity.tag.case.liquid","patterns":[{"include":"#value_expression"}]},"tag_comment_block_liquid":{"begin":"^\\\\s*(comment)\\\\b","end":"^\\\\s*(endcomment)\\\\b","name":"comment.block.liquid","patterns":[{"include":"#tag_comment_block_liquid"},{"match":"^\\\\s*(?!(comment|endcomment)).*"}]},"tag_comment_inline":{"begin":"#","end":"(?=%})","name":"comment.line.number-sign.liquid"},"tag_comment_inline_liquid":{"begin":"^\\\\s*#.*","end":"$","name":"comment.line.number-sign.liquid"},"tag_conditional":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(if|elsif|unless)\\\\b","beginCaptures":{"1":{"name":"keyword.control.conditional.liquid"}},"end":"(?=%})","name":"meta.entity.tag.conditional.liquid","patterns":[{"include":"#value_expression"}]},"tag_conditional_liquid":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(if|elsif|unless)\\\\b","beginCaptures":{"1":{"name":"keyword.control.conditional.liquid"}},"end":"$","name":"meta.entity.tag.conditional.liquid","patterns":[{"include":"#value_expression"}]},"tag_expression":{"patterns":[{"include":"#tag_expression_without_arguments"},{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(\\\\w+)","beginCaptures":{"1":{"name":"entity.name.tag.liquid"}},"end":"(?=%})","name":"meta.entity.tag.liquid","patterns":[{"include":"#value_expression"}]}]},"tag_expression_liquid":{"patterns":[{"include":"#tag_expression_without_arguments"},{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(\\\\w+)","beginCaptures":{"1":{"name":"entity.name.tag.liquid"}},"end":"$","name":"meta.entity.tag.liquid","patterns":[{"include":"#value_expression"}]}]},"tag_expression_without_arguments":{"patterns":[{"captures":{"1":{"name":"keyword.control.conditional.liquid"}},"match":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(end(?:unless|if))\\\\b"},{"captures":{"1":{"name":"keyword.control.loop.liquid"}},"match":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(end(?:for|tablerow|paginate))\\\\b"},{"captures":{"1":{"name":"keyword.control.case.liquid"}},"match":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(endcase)\\\\b"},{"captures":{"1":{"name":"keyword.control.other.liquid"}},"match":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(capture|case|comment|for|form|if|javascript|paginate|schema|style)\\\\b"},{"captures":{"1":{"name":"keyword.control.other.liquid"}},"match":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(end(?:capture|case|comment|for|form|if|javascript|paginate|schema|style))\\\\b"},{"captures":{"1":{"name":"keyword.control.other.liquid"}},"match":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(else|break|continue)\\\\b"}]},"tag_for":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(for)\\\\b","beginCaptures":{"1":{"name":"keyword.control.for.liquid"}},"end":"(?=%})","name":"meta.entity.tag.for.liquid","patterns":[{"include":"#tag_for_body"}]},"tag_for_body":{"patterns":[{"match":"\\\\b(in|reversed)\\\\b","name":"keyword.control.liquid"},{"match":"\\\\b(offset|limit):","name":"keyword.control.liquid"},{"include":"#value_expression"}]},"tag_for_liquid":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(for)\\\\b","beginCaptures":{"1":{"name":"keyword.control.for.liquid"}},"end":"$","name":"meta.entity.tag.for.liquid","patterns":[{"include":"#tag_for_body"}]},"tag_injection":{"begin":"(?<!comment %})(?<!comment -%})(?<!comment%})(?<!comment-%})(?<!raw %})(?<!raw -%})(?<!raw%})(?<!raw-%})\\\\{%-?(?!-?\\\\s*(end(?:style|javascript|comment|raw)))","beginCaptures":{"0":{"name":"punctuation.definition.tag.end.liquid"}},"end":"-?%}","endCaptures":{"0":{"name":"punctuation.definition.tag.end.liquid"}},"name":"meta.tag.liquid","patterns":[{"include":"#tag_body"}]},"tag_liquid":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(liquid)\\\\b","beginCaptures":{"1":{"name":"keyword.control.liquid.liquid"}},"end":"(?=%})","name":"meta.entity.tag.liquid.liquid","patterns":[{"include":"#tag_comment_block_liquid"},{"include":"#tag_comment_inline_liquid"},{"include":"#tag_assign_liquid"},{"include":"#tag_case_liquid"},{"include":"#tag_conditional_liquid"},{"include":"#tag_for_liquid"},{"include":"#tag_paginate_liquid"},{"include":"#tag_render_liquid"},{"include":"#tag_tablerow_liquid"},{"include":"#tag_expression_liquid"}]},"tag_paginate":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(paginate)\\\\b","beginCaptures":{"1":{"name":"keyword.control.paginate.liquid"}},"end":"(?=%})","name":"meta.entity.tag.paginate.liquid","patterns":[{"include":"#tag_paginate_body"}]},"tag_paginate_body":{"patterns":[{"match":"\\\\b(by)\\\\b","name":"keyword.control.liquid"},{"include":"#value_expression"}]},"tag_paginate_liquid":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(paginate)\\\\b","beginCaptures":{"1":{"name":"keyword.control.paginate.liquid"}},"end":"$","name":"meta.entity.tag.paginate.liquid","patterns":[{"include":"#tag_paginate_body"}]},"tag_render":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(render)\\\\b","beginCaptures":{"1":{"name":"entity.name.tag.render.liquid"}},"end":"(?=%})","name":"meta.entity.tag.render.liquid","patterns":[{"include":"#tag_render_special_keywords"},{"include":"#attribute"},{"include":"#value_expression"}]},"tag_render_liquid":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(render)\\\\b","beginCaptures":{"1":{"name":"entity.name.tag.render.liquid"}},"end":"$","name":"meta.entity.tag.render.liquid","patterns":[{"include":"#tag_render_special_keywords"},{"include":"#attribute_liquid"},{"include":"#value_expression"}]},"tag_render_special_keywords":{"match":"\\\\b(with|as|for)\\\\b","name":"keyword.control.other.liquid"},"tag_tablerow":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(tablerow)\\\\b","beginCaptures":{"1":{"name":"keyword.control.tablerow.liquid"}},"end":"(?=%})","name":"meta.entity.tag.tablerow.liquid","patterns":[{"include":"#tag_tablerow_body"}]},"tag_tablerow_body":{"patterns":[{"match":"\\\\b(in)\\\\b","name":"keyword.control.liquid"},{"match":"\\\\b(cols|offset|limit):","name":"keyword.control.liquid"},{"include":"#value_expression"}]},"tag_tablerow_liquid":{"begin":"(?:(?<=\\\\{%)|(?<=\\\\{%-)|^)\\\\s*(tablerow)\\\\b","beginCaptures":{"1":{"name":"keyword.control.tablerow.liquid"}},"end":"$","name":"meta.entity.tag.tablerow.liquid","patterns":[{"include":"#tag_tablerow_body"}]},"value_expression":{"patterns":[{"captures":{"2":{"name":"invalid.illegal.filter.liquid"},"3":{"name":"invalid.illegal.filter.liquid"}},"match":"(\\\\[)(\\\\|)(?=[^\\\\]]*)(?=])"},{"match":"(?<=\\\\s)([+\\\\-/*])(?=\\\\s)","name":"invalid.illegal.filter.liquid"},{"include":"#language_constant"},{"include":"#operator"},{"include":"#invalid_range"},{"include":"#range"},{"include":"#number"},{"include":"#string"},{"include":"#variable_lookup"}]},"variable_lookup":{"patterns":[{"match":"\\\\b(additional_checkout_buttons|address|all_country_option_tags|all_products|article|articles|block|blog|blogs|canonical_url|cart|checkout|collection|collections|comment|content_for_additional_checkout_buttons|content_for_header|content_for_index|content_for_layout|country_option_tags|currency|current_page|current_tags|customer|customer_address|discount_allocation|discount_application|external_video|font|forloop|form|fulfillment|gift_card|handle|image|images|line_item|link|linklist|linklists|location|localization|metafield|model|model_source|order|page|page_description|page_image|page_title|pages|paginate|part|policy|powered_by_link|predictive_search|product|product_option|product_variant|recommendations|request|routes|script|scripts|search|section|selling_plan|selling_plan_allocation|selling_plan_group|settings|shipping_method|shop|shop_locale|store_availability|tablerow|tax_line|template|theme|transaction|unit_price_measurement|variant|video|video_source)\\\\b","name":"variable.language.liquid"},{"match":"((?<=\\\\w:\\\\s)\\\\w+)","name":"variable.parameter.liquid"},{"begin":"(?<=\\\\w)\\\\[","beginCaptures":{"0":{"name":"punctuation.section.brackets.begin.liquid"}},"end":"]","endCaptures":{"0":{"name":"punctuation.section.brackets.end.liquid"}},"name":"meta.brackets.liquid","patterns":[{"include":"#string"}]},{"match":"(?<=([\\\\w\\\\]])\\\\.)([-\\\\w]+\\\\??)","name":"variable.other.member.liquid"},{"match":"(?<=\\\\w)\\\\.(?=\\\\w)","name":"punctuation.accessor.liquid"},{"match":"(?i)[a-z_](\\\\w|-(?!}}))*","name":"variable.other.liquid"}]}},"scopeName":"text.html.liquid","embeddedLangs":["html","css","json","javascript"]}')),u=[...i.default,...a.default,...d.default,...o.default,l]},41983:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});let i=[Object.freeze(JSON.parse('{"displayName":"JSON","name":"json","patterns":[{"include":"#value"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.json"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.array.end.json"}},"name":"meta.structure.array.json","patterns":[{"include":"#value"},{"match":",","name":"punctuation.separator.array.json"},{"match":"[^\\\\s\\\\]]","name":"invalid.illegal.expected-array-separator.json"}]},"comments":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.documentation.json"},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.json"},{"captures":{"1":{"name":"punctuation.definition.comment.json"}},"match":"(//).*$\\\\n?","name":"comment.line.double-slash.js"}]},"constant":{"match":"\\\\b(?:true|false|null)\\\\b","name":"constant.language.json"},"number":{"match":"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[eE][+-]?\\\\d+)?)?","name":"constant.numeric.json"},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.json"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.dictionary.end.json"}},"name":"meta.structure.dictionary.json","patterns":[{"include":"#objectkey"},{"include":"#comments"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.dictionary.key-value.json"}},"end":"(,)|(?=})","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.json"}},"name":"meta.structure.dictionary.value.json","patterns":[{"include":"#value"},{"match":"[^\\\\s,]","name":"invalid.illegal.expected-dictionary-separator.json"}]},{"match":"[^\\\\s}]","name":"invalid.illegal.expected-dictionary-separator.json"}]},"objectkey":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.support.type.property-name.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.support.type.property-name.end.json"}},"name":"string.json support.type.property-name.json","patterns":[{"include":"#stringcontent"}]},"string":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.json"}},"name":"string.quoted.double.json","patterns":[{"include":"#stringcontent"}]},"stringcontent":{"patterns":[{"match":"\\\\\\\\(?:[\\"\\\\\\\\/bfnrt]|u\\\\h{4})","name":"constant.character.escape.json"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json"}]},"value":{"patterns":[{"include":"#constant"},{"include":"#number"},{"include":"#string"},{"include":"#array"},{"include":"#object"},{"include":"#comments"}]}},"scopeName":"source.json"}'))]}}]);