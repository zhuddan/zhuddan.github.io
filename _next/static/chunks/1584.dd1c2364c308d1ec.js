"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1584,4129,5175],{21584:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(25175),r=t(44129);let i=Object.freeze(JSON.parse('{"displayName":"GDResource","name":"gdresource","patterns":[{"include":"#embedded_shader"},{"include":"#embedded_gdscript"},{"include":"#comment"},{"include":"#heading"},{"include":"#key_value"}],"repository":{"comment":{"captures":{"1":{"name":"punctuation.definition.comment.gdresource"}},"match":"(;).*$\\\\n?","name":"comment.line.gdresource"},"data":{"patterns":[{"include":"#comment"},{"begin":"(?<!\\\\w)(\\\\{)\\\\s*","beginCaptures":{"1":{"name":"punctuation.definition.table.inline.gdresource"}},"end":"\\\\s*(})(?!\\\\w)","endCaptures":{"1":{"name":"punctuation.definition.table.inline.gdresource"}},"patterns":[{"include":"#key_value"},{"include":"#data"}]},{"begin":"(?<!\\\\w)(\\\\[)\\\\s*","beginCaptures":{"1":{"name":"punctuation.definition.array.gdresource"}},"end":"\\\\s*(])(?!\\\\w)","endCaptures":{"1":{"name":"punctuation.definition.array.gdresource"}},"patterns":[{"include":"#data"}]},{"begin":"\\"\\"\\"","end":"\\"\\"\\"","name":"string.quoted.triple.basic.block.gdresource","patterns":[{"match":"\\\\\\\\([btnfr\\"\\\\\\\\\\\\n/ ]|u\\\\h{4}|U\\\\h{8})","name":"constant.character.escape.gdresource"},{"match":"\\\\\\\\[^btnfr/\\"\\\\\\\\\\\\n]","name":"invalid.illegal.escape.gdresource"}]},{"match":"\\"res://[^\\"\\\\\\\\]*(?:\\\\\\\\.[^\\"\\\\\\\\]*)*\\"","name":"support.function.any-method.gdresource"},{"match":"(?<=type=)\\"[^\\"\\\\\\\\]*(?:\\\\\\\\.[^\\"\\\\\\\\]*)*\\"","name":"support.class.library.gdresource"},{"match":"(?<=NodePath\\\\(|parent=|name=)\\"[^\\"\\\\\\\\]*(?:\\\\\\\\.[^\\"\\\\\\\\]*)*\\"","name":"constant.character.escape.gdresource"},{"begin":"\\"","end":"\\"","name":"string.quoted.double.basic.line.gdresource","patterns":[{"match":"\\\\\\\\([btnfr\\"\\\\\\\\\\\\n/ ]|u\\\\h{4}|U\\\\h{8})","name":"constant.character.escape.gdresource"},{"match":"\\\\\\\\[^btnfr/\\"\\\\\\\\\\\\n]","name":"invalid.illegal.escape.gdresource"}]},{"match":"\'.*?\'","name":"string.quoted.single.literal.line.gdresource"},{"match":"(?<!\\\\w)(true|false)(?!\\\\w)","name":"constant.language.gdresource"},{"match":"(?<!\\\\w)([+-]?(0|([1-9](([0-9]|_[0-9])+)?))(?:(?:\\\\.(0|([1-9](([0-9]|_[0-9])+)?)))?[eE][+-]?[1-9]_?[0-9]*|\\\\.[0-9_]*))(?!\\\\w)","name":"constant.numeric.float.gdresource"},{"match":"(?<!\\\\w)([+-]?(0|([1-9](([0-9]|_[0-9])+)?)))(?!\\\\w)","name":"constant.numeric.integer.gdresource"},{"match":"(?<!\\\\w)([+-]?inf)(?!\\\\w)","name":"constant.numeric.inf.gdresource"},{"match":"(?<!\\\\w)([+-]?nan)(?!\\\\w)","name":"constant.numeric.nan.gdresource"},{"match":"(?<!\\\\w)(0x((\\\\h((\\\\h|_\\\\h)+)?)))(?!\\\\w)","name":"constant.numeric.hex.gdresource"},{"match":"(?<!\\\\w)(0o[0-7](_?[0-7])*)(?!\\\\w)","name":"constant.numeric.oct.gdresource"},{"match":"(?<!\\\\w)(0b[01](_?[01])*)(?!\\\\w)","name":"constant.numeric.bin.gdresource"},{"begin":"(?<!\\\\w)(Vector2|Vector2i|Vector3|Vector3i|Color|Rect2|Rect2i|Array|Basis|Dictionary|Plane|Quat|RID|Rect3|Transform|Transform2D|Transform3D|AABB|String|Color|NodePath|Object|PoolByteArray|PoolIntArray|PoolRealArray|PoolStringArray|PoolVector2Array|PoolVector3Array|PoolColorArray|bool|int|float|StringName|Quaternion|PackedByteArray|PackedInt32Array|PackedInt64Array|PackedFloat32Array|PackedFloat64Array|PackedStringArray|PackedVector2Array|PackedVector2iArray|PackedVector3Array|PackedVector3iArray|PackedColorArray)(\\\\()\\\\s?","beginCaptures":{"1":{"name":"support.class.library.gdresource"}},"end":"\\\\s?(\\\\))","patterns":[{"include":"#key_value"},{"include":"#data"}]},{"begin":"(?<!\\\\w)(ExtResource|SubResource)(\\\\()\\\\s?","beginCaptures":{"1":{"name":"keyword.control.gdresource"}},"end":"\\\\s?(\\\\))","patterns":[{"include":"#key_value"},{"include":"#data"}]}]},"embedded_gdscript":{"begin":"(script/source) = \\"","beginCaptures":{"1":{"name":"variable.other.property.gdresource"}},"end":"\\"","patterns":[{"include":"source.gdscript"}]},"embedded_shader":{"begin":"(code) = \\"","beginCaptures":{"1":{"name":"variable.other.property.gdresource"}},"end":"\\"","name":"meta.embedded.block.gdshader","patterns":[{"include":"source.gdshader"}]},"heading":{"begin":"\\\\[([a-z_]*)\\\\s?","beginCaptures":{"1":{"name":"keyword.control.gdresource"}},"end":"]","patterns":[{"include":"#heading_properties"},{"include":"#data"}]},"heading_properties":{"patterns":[{"match":"(\\\\s*[A-Za-z_-][A-Za-z0-9_-]*\\\\s*=)(?=\\\\s*$)","name":"invalid.illegal.noValue.gdresource"},{"begin":"\\\\s*([A-Za-z_-]\\\\S*|\\".+\\"|\'.+\'|[0-9]+)\\\\s*(=)\\\\s*","beginCaptures":{"1":{"name":"variable.other.property.gdresource"},"2":{"name":"punctuation.definition.keyValue.gdresource"}},"end":"($|(?==)|,?|\\\\s*(?=}))","patterns":[{"include":"#data"}]}]},"key_value":{"patterns":[{"match":"(\\\\s*[A-Za-z_-][A-Za-z0-9_-]*\\\\s*=)(?=\\\\s*$)","name":"invalid.illegal.noValue.gdresource"},{"begin":"\\\\s*([A-Za-z_-]\\\\S*|\\".+\\"|\'.+\'|[0-9]+)\\\\s*(=)\\\\s*","beginCaptures":{"1":{"name":"variable.other.property.gdresource"},"2":{"name":"punctuation.definition.keyValue.gdresource"}},"end":"($|(?==)|,|\\\\s*(?=}))","patterns":[{"include":"#data"}]}]}},"scopeName":"source.gdresource","embeddedLangs":["gdshader","gdscript"]}')),c=[...n.default,...r.default,i]},25175:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});let n=[Object.freeze(JSON.parse('{"displayName":"GDShader","fileTypes":["gdshader"],"name":"gdshader","patterns":[{"include":"#any"}],"repository":{"any":{"patterns":[{"include":"#comment"},{"include":"#enclosed"},{"include":"#classifier"},{"include":"#definition"},{"include":"#keyword"},{"include":"#element"},{"include":"#separator"},{"include":"#operator"}]},"arraySize":{"begin":"\\\\[","captures":{"0":{"name":"punctuation.bracket.gdshader"}},"end":"]","name":"meta.array-size.gdshader","patterns":[{"include":"#comment"},{"include":"#keyword"},{"include":"#element"},{"include":"#separator"}]},"classifier":{"begin":"(?=\\\\b(?:shader_type|render_mode)\\\\b)","end":"(?<=;)","name":"meta.classifier.gdshader","patterns":[{"include":"#comment"},{"include":"#keyword"},{"include":"#identifierClassification"},{"include":"#separator"}]},"classifierKeyword":{"match":"\\\\b(?:shader_type|render_mode)\\\\b","name":"keyword.language.classifier.gdshader"},"comment":{"patterns":[{"include":"#commentLine"},{"include":"#commentBlock"}]},"commentBlock":{"begin":"/\\\\*","end":"\\\\*/","name":"comment.block.gdshader"},"commentLine":{"begin":"//","end":"$","name":"comment.line.double-slash.gdshader"},"constantFloat":{"match":"\\\\b(?:E|PI|TAU)\\\\b","name":"constant.language.float.gdshader"},"constructor":{"match":"\\\\b(?:[a-zA-Z_]\\\\w*(?=\\\\s*\\\\[\\\\s*\\\\w*\\\\s*]\\\\s*\\\\()|[A-Z]\\\\w*(?=\\\\s*\\\\())","name":"entity.name.type.constructor.gdshader"},"controlKeyword":{"match":"\\\\b(?:if|else|do|while|for|continue|break|switch|case|default|return|discard)\\\\b","name":"keyword.control.gdshader"},"definition":{"patterns":[{"include":"#structDefinition"}]},"element":{"patterns":[{"include":"#literalFloat"},{"include":"#literalInt"},{"include":"#literalBool"},{"include":"#identifierType"},{"include":"#constructor"},{"include":"#processorFunction"},{"include":"#identifierFunction"},{"include":"#swizzling"},{"include":"#identifierField"},{"include":"#constantFloat"},{"include":"#languageVariable"},{"include":"#identifierVariable"}]},"enclosed":{"begin":"\\\\(","captures":{"0":{"name":"punctuation.parenthesis.gdshader"}},"end":"\\\\)","name":"meta.parenthesis.gdshader","patterns":[{"include":"#any"}]},"fieldDefinition":{"begin":"\\\\b[a-zA-Z_]\\\\w*\\\\b","beginCaptures":{"0":{"patterns":[{"include":"#typeKeyword"},{"match":".+","name":"entity.name.type.gdshader"}]}},"end":"(?<=;)","name":"meta.definition.field.gdshader","patterns":[{"include":"#comment"},{"include":"#keyword"},{"include":"#arraySize"},{"include":"#fieldName"},{"include":"#any"}]},"fieldName":{"match":"\\\\b[a-zA-Z_]\\\\w*\\\\b","name":"entity.name.variable.field.gdshader"},"hintKeyword":{"match":"\\\\b(?:source_color|hint_(?:color|range|(?:black_)?albedo|normal|(?:default_)?(?:white|black)|aniso|anisotropy|roughness_(?:[rgba]|normal|gray))|filter_(?:nearest|linear)(?:_mipmap(?:_anisotropic)?)?|repeat_(?:en|dis)able)\\\\b","name":"support.type.annotation.gdshader"},"identifierClassification":{"match":"\\\\b[a-z_]+\\\\b","name":"entity.other.inherited-class.gdshader"},"identifierField":{"captures":{"1":{"name":"punctuation.accessor.gdshader"},"2":{"name":"entity.name.variable.field.gdshader"}},"match":"(\\\\.)\\\\s*([a-zA-Z_]\\\\w*)\\\\b(?!\\\\s*\\\\()"},"identifierFunction":{"match":"\\\\b[a-zA-Z_]\\\\w*(?=(?:\\\\s|/\\\\*(?:\\\\*(?!/)|[^*])*\\\\*/)*\\\\()","name":"entity.name.function.gdshader"},"identifierType":{"match":"\\\\b[a-zA-Z_]\\\\w*(?=(?:\\\\s*\\\\[\\\\s*\\\\w*\\\\s*])?\\\\s+[a-zA-Z_]\\\\w*\\\\b)","name":"entity.name.type.gdshader"},"identifierVariable":{"match":"\\\\b[a-zA-Z_]\\\\w*\\\\b","name":"variable.name.gdshader"},"keyword":{"patterns":[{"include":"#classifierKeyword"},{"include":"#structKeyword"},{"include":"#controlKeyword"},{"include":"#modifierKeyword"},{"include":"#precisionKeyword"},{"include":"#typeKeyword"},{"include":"#hintKeyword"}]},"languageVariable":{"match":"\\\\b[A-Z][A-Z_0-9]*\\\\b","name":"variable.language.gdshader"},"literalBool":{"match":"\\\\b(?:false|true)\\\\b","name":"constant.language.boolean.gdshader"},"literalFloat":{"match":"\\\\b(?:\\\\d+[eE][-+]?\\\\d+|(?:\\\\d*\\\\.\\\\d+|\\\\d+\\\\.)(?:[eE][-+]?\\\\d+)?)[fF]?","name":"constant.numeric.float.gdshader"},"literalInt":{"match":"\\\\b(?:0[xX]\\\\h+|\\\\d+[uU]?)\\\\b","name":"constant.numeric.integer.gdshader"},"modifierKeyword":{"match":"\\\\b(?:const|global|instance|uniform|varying|in|out|inout|flat|smooth)\\\\b","name":"storage.modifier.gdshader"},"operator":{"match":"<<=?|>>=?|[-+*/\\\\&|<>=!]=|&&|\\\\|\\\\||[-+~!*/%<>\\\\&^|=]","name":"keyword.operator.gdshader"},"precisionKeyword":{"match":"\\\\b(?:low|medium|high)p\\\\b","name":"storage.type.built-in.primitive.precision.gdshader"},"processorFunction":{"match":"\\\\b(?:vertex|fragment|light|start|process|sky|fog)(?=(?:\\\\s|/\\\\*(?:\\\\*(?!/)|[^*])*\\\\*/)*\\\\()","name":"support.function.gdshader"},"separator":{"patterns":[{"match":"\\\\.","name":"punctuation.accessor.gdshader"},{"include":"#separatorComma"},{"match":";","name":"punctuation.terminator.statement.gdshader"},{"match":":","name":"keyword.operator.type.annotation.gdshader"}]},"separatorComma":{"match":",","name":"punctuation.separator.comma.gdshader"},"structDefinition":{"begin":"(?=\\\\bstruct\\\\b)","end":"(?<=;)","patterns":[{"include":"#comment"},{"include":"#keyword"},{"include":"#structName"},{"include":"#structDefinitionBlock"},{"include":"#separator"}]},"structDefinitionBlock":{"begin":"\\\\{","captures":{"0":{"name":"punctuation.definition.block.struct.gdshader"}},"end":"}","name":"meta.definition.block.struct.gdshader","patterns":[{"include":"#comment"},{"include":"#precisionKeyword"},{"include":"#fieldDefinition"},{"include":"#keyword"},{"include":"#any"}]},"structKeyword":{"match":"\\\\bstruct\\\\b","name":"keyword.other.struct.gdshader"},"structName":{"match":"\\\\b[a-zA-Z_]\\\\w*\\\\b","name":"entity.name.type.struct.gdshader"},"swizzling":{"captures":{"1":{"name":"punctuation.accessor.gdshader"},"2":{"name":"variable.other.property.gdshader"}},"match":"(\\\\.)\\\\s*([xyzw]{2,4}|[rgba]{2,4}|[stpq]{2,4})\\\\b"},"typeKeyword":{"match":"\\\\b(?:void|bool|[biu]?vec[234]|u?int|float|mat[234]|[iu]?sampler(?:3D|2D(?:Array)?)|samplerCube)\\\\b","name":"support.type.gdshader"}},"scopeName":"source.gdshader"}'))]},44129:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});let n=[Object.freeze(JSON.parse('{"displayName":"GDScript","fileTypes":["gd"],"name":"gdscript","patterns":[{"include":"#statement"},{"include":"#expression"}],"repository":{"annotated_parameter":{"begin":"\\\\s*([a-zA-Z_]\\\\w*)\\\\s*(:)\\\\s*([a-zA-Z_]\\\\w*)?","beginCaptures":{"1":{"name":"variable.parameter.function.language.gdscript"},"2":{"name":"punctuation.separator.annotation.gdscript"},"3":{"name":"entity.name.type.class.gdscript"}},"end":"(,)|(?=\\\\))","endCaptures":{"1":{"name":"punctuation.separator.parameters.gdscript"}},"patterns":[{"include":"#expression"},{"match":"=(?!=)","name":"keyword.operator.assignment.gdscript"}]},"annotations":{"captures":{"1":{"name":"entity.name.function.decorator.gdscript"},"2":{"name":"entity.name.function.decorator.gdscript"}},"match":"(@)(export|export_group|export_color_no_alpha|export_custom|export_dir|export_enum|export_exp_easing|export_file|export_flags|export_flags_2d_navigation|export_flags_2d_physics|export_flags_2d_render|export_flags_3d_navigation|export_flags_3d_physics|export_flags_3d_render|export_global_dir|export_global_file|export_multiline|export_node_path|export_placeholder|export_range|export_storage|icon|onready|rpc|tool|warning_ignore|static_unload)\\\\b"},"any_method":{"match":"\\\\b([A-Za-z_]\\\\w*)\\\\b(?=\\\\s*\\\\()","name":"entity.name.function.other.gdscript"},"any_property":{"captures":{"1":{"name":"punctuation.accessor.gdscript"},"2":{"name":"constant.language.gdscript"},"3":{"name":"variable.other.property.gdscript"}},"match":"\\\\b(\\\\.)\\\\s*(?<![@$#%])(?:([A-Z_][A-Z_0-9]*)|([A-Za-z_]\\\\w*))\\\\b(?!\\\\()"},"any_variable":{"match":"\\\\b(?<![@$#%])([A-Za-z_]\\\\w*)\\\\b(?!\\\\()","name":"variable.other.gdscript"},"arithmetic_operator":{"match":"->|\\\\+=|-=|\\\\*\\\\*=|\\\\*=|\\\\^=|/=|%=|&=|~=|\\\\|=|\\\\*\\\\*|[*/%+-]","name":"keyword.operator.arithmetic.gdscript"},"assignment_operator":{"match":"=","name":"keyword.operator.assignment.gdscript"},"base_expression":{"patterns":[{"include":"#builtin_get_node_shorthand"},{"include":"#nodepath_object"},{"include":"#nodepath_function"},{"include":"#strings"},{"include":"#builtin_classes"},{"include":"#const_vars"},{"include":"#keywords"},{"include":"#operators"},{"include":"#lambda_declaration"},{"include":"#class_declaration"},{"include":"#variable_declaration"},{"include":"#signal_declaration_bare"},{"include":"#signal_declaration"},{"include":"#function_declaration"},{"include":"#statement_keyword"},{"include":"#assignment_operator"},{"include":"#in_keyword"},{"include":"#control_flow"},{"include":"#match_keyword"},{"include":"#curly_braces"},{"include":"#square_braces"},{"include":"#round_braces"},{"include":"#function_call"},{"include":"#region"},{"include":"#comment"},{"include":"#self"},{"include":"#func"},{"include":"#letter"},{"include":"#numbers"},{"include":"#pascal_case_class"},{"include":"#line_continuation"}]},"bitwise_operator":{"match":"[\\\\&|]|<<=|>>=|<<|>>|[\\\\^~]","name":"keyword.operator.bitwise.gdscript"},"boolean_operator":{"match":"(&&|\\\\|\\\\|)","name":"keyword.operator.boolean.gdscript"},"builtin_classes":{"match":"(?<![^.]\\\\.|:)\\\\b(Vector2|Vector2i|Vector3|Vector3i|Vector4|Vector4i|Color|Rect2|Rect2i|Array|Basis|Dictionary|Plane|Quat|RID|Rect3|Transform|Transform2D|Transform3D|AABB|String|Color|NodePath|PoolByteArray|PoolIntArray|PoolRealArray|PoolStringArray|PoolVector2Array|PoolVector3Array|PoolColorArray|bool|int|float|Signal|Callable|StringName|Quaternion|Projection|PackedByteArray|PackedInt32Array|PackedInt64Array|PackedFloat32Array|PackedFloat64Array|PackedStringArray|PackedVector2Array|PackedVector2iArray|PackedVector3Array|PackedVector3iArray|PackedVector4Array|PackedColorArray|JSON|UPNP|OS|IP|JSONRPC|XRVRS)\\\\b","name":"entity.name.type.class.builtin.gdscript"},"builtin_get_node_shorthand":{"patterns":[{"include":"#builtin_get_node_shorthand_quoted"},{"include":"#builtin_get_node_shorthand_bare"},{"include":"#builtin_get_node_shorthand_bare_multi"}]},"builtin_get_node_shorthand_bare":{"captures":{"1":{"name":"keyword.control.flow.gdscript"},"2":{"name":"constant.character.escape.gdscript"},"3":{"name":"constant.character.escape.gdscript"},"4":{"name":"constant.character.escape.gdscript"}},"match":"(?<!/\\\\s*)(\\\\$\\\\s*|%|\\\\$%\\\\s*)(/\\\\s*)?([a-zA-Z_]\\\\w*)\\\\b(?!\\\\s*/)","name":"meta.literal.nodepath.bare.gdscript"},"builtin_get_node_shorthand_bare_multi":{"begin":"(\\\\$\\\\s*|%|\\\\$%\\\\s*)(/\\\\s*)?([a-zA-Z_]\\\\w*)","beginCaptures":{"1":{"name":"keyword.control.flow.gdscript"},"2":{"name":"constant.character.escape.gdscript"},"3":{"name":"constant.character.escape.gdscript"}},"end":"(?!\\\\s*/\\\\s*%?\\\\s*[a-zA-Z_]\\\\w*)","name":"meta.literal.nodepath.bare.gdscript","patterns":[{"captures":{"1":{"name":"constant.character.escape.gdscript"},"2":{"name":"keyword.control.flow.gdscript"},"3":{"name":"constant.character.escape.gdscript"}},"match":"(/)\\\\s*(%)?\\\\s*([a-zA-Z_]\\\\w*)\\\\s*"}]},"builtin_get_node_shorthand_quoted":{"begin":"(?:([$%])|([\\\\&^@]))([\\"\'])","beginCaptures":{"1":{"name":"keyword.control.flow.gdscript"},"2":{"name":"variable.other.enummember.gdscript"}},"end":"(\\\\3)","name":"string.quoted.gdscript meta.literal.nodepath.gdscript constant.character.escape.gdscript","patterns":[{"match":"%","name":"keyword.control.flow"}]},"class_declaration":{"captures":{"1":{"name":"entity.name.type.class.gdscript"},"2":{"name":"class.other.gdscript"}},"match":"(?<=^class)\\\\s+([a-zA-Z_]\\\\w*)\\\\s*(?=:)"},"class_enum":{"captures":{"1":{"name":"entity.name.type.class.gdscript"},"2":{"name":"variable.other.enummember.gdscript"}},"match":"\\\\b([A-Z][a-zA-Z_0-9]*)\\\\.([A-Z_0-9]+)"},"class_is":{"captures":{"1":{"name":"storage.type.is.gdscript"},"2":{"name":"entity.name.type.class.gdscript"}},"match":"\\\\s+(is)\\\\s+([a-zA-Z_]\\\\w*)"},"class_name":{"captures":{"1":{"name":"entity.name.type.class.gdscript"},"2":{"name":"class.other.gdscript"}},"match":"(?<=class_name)\\\\s+([a-zA-Z_]\\\\w*(\\\\.([a-zA-Z_]\\\\w*))?)"},"class_new":{"captures":{"1":{"name":"entity.name.type.class.gdscript"},"2":{"name":"storage.type.new.gdscript"},"3":{"name":"punctuation.parenthesis.begin.gdscript"}},"match":"\\\\b([a-zA-Z_]\\\\w*).(new)\\\\("},"comment":{"captures":{"1":{"name":"punctuation.definition.comment.number-sign.gdscript"}},"match":"(#(?:#|)).*$\\\\n?","name":"comment.line.number-sign.gdscript"},"compare_operator":{"match":"<=|>=|==|[<>]|!=|!","name":"keyword.operator.comparison.gdscript"},"const_vars":{"match":"\\\\b([A-Z_][A-Z_0-9]*)\\\\b","name":"variable.other.constant.gdscript"},"control_flow":{"match":"\\\\b(?:if|elif|else|while|break|continue|pass|return|when|yield|await)\\\\b","name":"keyword.control.gdscript"},"curly_braces":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dict.begin.gdscript"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.dict.end.gdscript"}},"patterns":[{"include":"#base_expression"},{"include":"#any_variable"}]},"expression":{"patterns":[{"include":"#getter_setter_godot4"},{"include":"#base_expression"},{"include":"#assignment_operator"},{"include":"#annotations"},{"include":"#class_name"},{"include":"#builtin_classes"},{"include":"#class_new"},{"include":"#class_is"},{"include":"#class_enum"},{"include":"#any_method"},{"include":"#any_variable"},{"include":"#any_property"}]},"extends_statement":{"captures":{"1":{"name":"keyword.language.gdscript"},"2":{"name":"entity.other.inherited-class.gdscript"}},"match":"(extends)\\\\s+([a-zA-Z_]\\\\w*\\\\.[a-zA-Z_]\\\\w*)?"},"func":{"match":"\\\\bfunc\\\\b","name":"keyword.language.gdscript"},"function_arguments":{"begin":"(\\\\()","beginCaptures":{"1":{"name":"punctuation.definition.arguments.begin.gdscript"}},"contentName":"meta.function.parameters.gdscript","end":"(?=\\\\))(?!\\\\)\\\\s*\\\\()","patterns":[{"match":"(,)","name":"punctuation.separator.arguments.gdscript"},{"captures":{"1":{"name":"variable.parameter.function-call.gdscript"},"2":{"name":"keyword.operator.assignment.gdscript"}},"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\s*(=)(?!=)"},{"match":"=(?!=)","name":"keyword.operator.assignment.gdscript"},{"include":"#base_expression"},{"captures":{"1":{"name":"punctuation.definition.arguments.end.gdscript"},"2":{"name":"punctuation.definition.arguments.begin.gdscript"}},"match":"\\\\s*(\\\\))\\\\s*(\\\\()"},{"include":"#letter"},{"include":"#any_variable"},{"include":"#any_property"},{"include":"#keywords"}]},"function_call":{"begin":"(?=\\\\b[a-zA-Z_]\\\\w*\\\\b\\\\()","end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.arguments.end.gdscript"}},"name":"meta.function-call.gdscript","patterns":[{"include":"#function_name"},{"include":"#function_arguments"}]},"function_declaration":{"begin":"\\\\s*(func)\\\\s+([a-zA-Z_]\\\\w*)\\\\s*(?=\\\\()","beginCaptures":{"1":{"name":"keyword.language.gdscript storage.type.function.gdscript"},"2":{"name":"entity.name.function.gdscript"}},"end":"(:)","endCaptures":{"1":{"name":"punctuation.section.function.begin.gdscript"}},"name":"meta.function.gdscript","patterns":[{"include":"#parameters"},{"include":"#line_continuation"},{"include":"#base_expression"}]},"function_name":{"patterns":[{"include":"#builtin_classes"},{"match":"\\\\b(preload)\\\\b","name":"keyword.language.gdscript"},{"match":"\\\\b([a-zA-Z_]\\\\w*)\\\\b","name":"entity.name.function.gdscript"}]},"getter_setter_godot4":{"patterns":[{"captures":{"1":{"name":"entity.name.function.gdscript"},"2":{"name":"punctuation.separator.annotation.gdscript"}},"match":"(get)\\\\s*(:)","name":"meta.variable.declaration.getter.gdscript"},{"captures":{"1":{"name":"entity.name.function.gdscript"},"2":{"name":"punctuation.definition.arguments.begin.gdscript"},"3":{"name":"variable.other.gdscript"},"4":{"name":"punctuation.definition.arguments.end.gdscript"},"5":{"name":"punctuation.separator.annotation.gdscript"}},"match":"(set)\\\\s*(\\\\()\\\\s*([A-Za-z_]\\\\w*)\\\\s*(\\\\))\\\\s*(:)","name":"meta.variable.declaration.setter.gdscript"}]},"in_keyword":{"patterns":[{"begin":"\\\\b(for)\\\\b","captures":{"1":{"name":"keyword.control.gdscript"}},"end":":","patterns":[{"match":"\\\\bin\\\\b","name":"keyword.control.gdscript"},{"include":"#base_expression"},{"include":"#any_variable"},{"include":"#any_property"}]},{"match":"\\\\bin\\\\b","name":"keyword.operator.wordlike.gdscript"}]},"keywords":{"match":"\\\\b(?:class|class_name|abstract|is|onready|tool|static|export|as|void|enum|assert|breakpoint|sync|remote|master|puppet|slave|remotesync|mastersync|puppetsync|trait|namespace|super)\\\\b","name":"keyword.language.gdscript"},"lambda_declaration":{"begin":"(func)\\\\s?(?=\\\\()","beginCaptures":{"1":{"name":"keyword.language.gdscript storage.type.function.gdscript"},"2":{"name":"entity.name.function.gdscript"}},"end":"(:|(?=[#\'\\"\\\\n]))","end2":"(\\\\s*(\\\\-\\\\>)\\\\s*(void\\\\w*)|([a-zA-Z_]\\\\w*)\\\\s*\\\\:)","endCaptures2":{"1":{"name":"punctuation.separator.annotation.result.gdscript"},"2":{"name":"keyword.language.void.gdscript"},"3":{"name":"entity.name.type.class.gdscript markup.italic"}},"name":"meta.function.gdscript","patterns":[{"include":"#parameters"},{"include":"#line_continuation"},{"include":"#base_expression"},{"include":"#any_variable"},{"include":"#any_property"}]},"letter":{"match":"\\\\b(?:true|false|null)\\\\b","name":"constant.language.gdscript"},"line_continuation":{"patterns":[{"captures":{"1":{"name":"punctuation.separator.continuation.line.gdscript"},"2":{"name":"invalid.illegal.line.continuation.gdscript"}},"match":"(\\\\\\\\)\\\\s*(\\\\S.*$\\\\n?)"},{"begin":"(\\\\\\\\)\\\\s*$\\\\n?","beginCaptures":{"1":{"name":"punctuation.separator.continuation.line.gdscript"}},"end":"(?=^\\\\s*$)|(?!(\\\\s*[rR]?(\'\'\'|\\"\\"\\"|[\'\\"]))|(\\\\G$))","patterns":[{"include":"#base_expression"}]}]},"loose_default":{"begin":"(=)","beginCaptures":{"1":{"name":"keyword.operator.gdscript"}},"end":"(,)|(?=\\\\))","endCaptures":{"1":{"name":"punctuation.separator.parameters.gdscript"}},"patterns":[{"include":"#expression"}]},"match_keyword":{"captures":{"1":{"name":"keyword.control.gdscript"}},"match":"^\\\\n\\\\s*(match)"},"nodepath_function":{"begin":"(get_node_or_null|has_node|has_node_and_resource|find_node|get_node)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"entity.name.function.gdscript"},"2":{"name":"punctuation.definition.parameters.begin.gdscript"}},"contentName":"meta.function.parameters.gdscript","end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.parameters.end.gdscript"}},"name":"meta.function.gdscript","patterns":[{"begin":"([\\"\'])","end":"\\\\1","name":"string.quoted.gdscript meta.literal.nodepath.gdscript constant.character.escape","patterns":[{"match":"%","name":"keyword.control.flow"}]},{"include":"#expression"}]},"nodepath_object":{"begin":"(NodePath)\\\\s*\\\\(","beginCaptures":{"1":{"name":"support.class.library.gdscript"}},"end":"\\\\)","name":"meta.literal.nodepath.gdscript","patterns":[{"begin":"([\\"\'])","end":"\\\\1","name":"string.quoted.gdscript constant.character.escape.gdscript","patterns":[{"match":"%","name":"keyword.control.flow.gdscript"}]}]},"numbers":{"patterns":[{"match":"0b[01_]+","name":"constant.numeric.integer.binary.gdscript"},{"match":"0x[_\\\\h]+","name":"constant.numeric.integer.hexadecimal.gdscript"},{"match":"\\\\.[0-9][0-9_]*([eE][+-]?[0-9_]+)?","name":"constant.numeric.float.gdscript"},{"match":"([0-9][0-9_]*)\\\\.[0-9_]*([eE][+-]?[0-9_]+)?","name":"constant.numeric.float.gdscript"},{"match":"([0-9][0-9_]*)?\\\\.[0-9_]*([eE][+-]?[0-9_]+)","name":"constant.numeric.float.gdscript"},{"match":"[0-9][0-9_]*[eE][+-]?[0-9_]+","name":"constant.numeric.float.gdscript"},{"match":"-?[0-9][0-9_]*","name":"constant.numeric.integer.gdscript"}]},"operators":{"patterns":[{"include":"#wordlike_operator"},{"include":"#boolean_operator"},{"include":"#arithmetic_operator"},{"include":"#bitwise_operator"},{"include":"#compare_operator"}]},"parameters":{"begin":"(\\\\()","beginCaptures":{"1":{"name":"punctuation.definition.parameters.begin.gdscript"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.parameters.end.gdscript"}},"name":"meta.function.parameters.gdscript","patterns":[{"include":"#annotated_parameter"},{"captures":{"1":{"name":"variable.parameter.function.language.gdscript"},"2":{"name":"punctuation.separator.parameters.gdscript"}},"match":"([a-zA-Z_]\\\\w*)\\\\s*(?:(,)|(?=[)#\\\\n=]))"},{"include":"#comment"},{"include":"#loose_default"}]},"pascal_case_class":{"match":"\\\\b([A-Z]+[a-z_0-9]*([A-Z]?[a-z_0-9]+)*[A-Z]?)\\\\b","name":"entity.name.type.class.gdscript"},"region":{"match":"#(end)?region.*$\\\\n?","name":"keyword.language.region.gdscript"},"round_braces":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.parenthesis.begin.gdscript"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.parenthesis.end.gdscript"}},"patterns":[{"include":"#base_expression"},{"include":"#any_variable"}]},"self":{"match":"\\\\bself\\\\b","name":"variable.language.gdscript"},"signal_declaration":{"begin":"\\\\s*(signal)\\\\s+([a-zA-Z_]\\\\w*)\\\\s*(?=\\\\()","beginCaptures":{"1":{"name":"keyword.language.gdscript storage.type.function.gdscript"},"2":{"name":"entity.name.function.gdscript"}},"end":"((?=[#\'\\"\\\\n]))","name":"meta.signal.gdscript","patterns":[{"include":"#parameters"},{"include":"#line_continuation"}]},"signal_declaration_bare":{"captures":{"1":{"name":"keyword.language.gdscript storage.type.function.gdscript"},"2":{"name":"entity.name.function.gdscript"}},"match":"\\\\s*(signal)\\\\s+([a-zA-Z_]\\\\w*)(?=[\\\\n\\\\s])","name":"meta.signal.gdscript"},"square_braces":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.list.begin.gdscript"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.list.end.gdscript"}},"patterns":[{"include":"#base_expression"},{"include":"#any_variable"}]},"statement":{"patterns":[{"include":"#extends_statement"}]},"statement_keyword":{"patterns":[{"match":"\\\\b(?<!\\\\.)(continue|assert|break|elif|else|if|pass|return|while)\\\\b","name":"keyword.control.flow.gdscript"},{"match":"\\\\b(?<!\\\\.)(class)\\\\b","name":"storage.type.class.gdscript"},{"captures":{"1":{"name":"keyword.control.flow.gdscript"}},"match":"^\\\\s*(case|match)(?=\\\\s*([-+\\\\w\\\\d(\\\\[{\'\\":#]|$))\\\\b"}]},"string_bracket_placeholders":{"patterns":[{"captures":{"1":{"name":"constant.character.format.placeholder.other.gdscript"},"3":{"name":"storage.type.format.gdscript"},"4":{"name":"storage.type.format.gdscript"}},"match":"(\\\\{\\\\{|}}|\\\\{\\\\w*(\\\\.[[:alpha:]_]\\\\w*|\\\\[[^\\\\]\'\\"]+])*(![rsa])?(:\\\\w?[<>=^]?[-+ ]?#?\\\\d*,?(\\\\.\\\\d+)?[bcdeEfFgGnosxX%]?)?})","name":"meta.format.brace.gdscript"},{"captures":{"1":{"name":"constant.character.format.placeholder.other.gdscript"},"3":{"name":"storage.type.format.gdscript"},"4":{"name":"storage.type.format.gdscript"}},"match":"(\\\\{\\\\w*(\\\\.[[:alpha:]_]\\\\w*|\\\\[[^\\\\]\'\\"]+])*(![rsa])?(:)[^\'\\"{}\\\\n]*(?:\\\\{[^\'\\"}\\\\n]*?}[^\'\\"{}\\\\n]*)*})","name":"meta.format.brace.gdscript"}]},"string_percent_placeholders":{"captures":{"1":{"name":"constant.character.format.placeholder.other.gdscript"}},"match":"(%(\\\\([\\\\w\\\\s]*\\\\))?[-+#0 ]*(\\\\d+|\\\\*)?(\\\\.(\\\\d+|\\\\*))?([hlL])?[diouxXeEfFgGcrsab%])","name":"meta.format.percent.gdscript"},"strings":{"begin":"(r)?(\\"\\"\\"|\'\'\'|[\\"\'])","beginCaptures":{"1":{"name":"constant.character.escape.gdscript"}},"end":"\\\\2","name":"string.quoted.gdscript","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.gdscript"},{"include":"#string_percent_placeholders"},{"include":"#string_bracket_placeholders"}]},"variable_declaration":{"begin":"\\\\b(?:(var)|(const))\\\\b","beginCaptures":{"1":{"name":"keyword.language.gdscript storage.type.var.gdscript"},"2":{"name":"keyword.language.gdscript storage.type.const.gdscript"}},"end":"$|;","name":"meta.variable.declaration.gdscript","patterns":[{"captures":{"1":{"name":"punctuation.separator.annotation.gdscript"},"2":{"name":"entity.name.function.gdscript"},"3":{"name":"entity.name.function.gdscript"}},"match":"(:)?\\\\s*(set|get)\\\\s+=\\\\s+([a-zA-Z_]\\\\w*)"},{"match":":=|=(?!=)","name":"keyword.operator.assignment.gdscript"},{"captures":{"1":{"name":"punctuation.separator.annotation.gdscript"},"2":{"name":"entity.name.type.class.gdscript"}},"match":"(:)\\\\s*([a-zA-Z_]\\\\w*)?"},{"captures":{"1":{"name":"keyword.language.gdscript"},"2":{"name":"entity.name.function.gdscript"},"3":{"name":"entity.name.function.gdscript"}},"match":"(setget)\\\\s+([a-zA-Z_]\\\\w*)(?:,\\\\s*([a-zA-Z_]\\\\w*))?"},{"include":"#expression"},{"include":"#letter"},{"include":"#any_variable"},{"include":"#any_property"},{"include":"#keywords"}]},"wordlike_operator":{"match":"\\\\b(and|or|not)\\\\b","name":"keyword.operator.wordlike.gdscript"}},"scopeName":"source.gdscript"}'))]}}]);