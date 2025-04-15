"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5859],{55859:(e,a,n)=>{n.r(a),n.d(a,{default:()=>t});let t=[Object.freeze(JSON.parse('{"displayName":"Log file","fileTypes":["log"],"name":"log","patterns":[{"match":"\\\\b(Trace)\\\\b:","name":"comment log.verbose"},{"match":"(?i)\\\\[(v(?:erbose|erb|rb|b|))]","name":"comment log.verbose"},{"match":"(?<=^[\\\\s\\\\dp]*)\\\\bV\\\\b","name":"comment log.verbose"},{"match":"\\\\b(D(?:EBUG|ebug))\\\\b|(?i)\\\\b(debug):","name":"markup.changed log.debug"},{"match":"(?i)\\\\[(d(?:ebug|bug|bg|e|))]","name":"markup.changed log.debug"},{"match":"(?<=^[\\\\s\\\\dp]*)\\\\bD\\\\b","name":"markup.changed log.debug"},{"match":"\\\\b(HINT|INFO|INFORMATION|Info|NOTICE|II)\\\\b|(?i)\\\\b(info(?:|rmation)):","name":"markup.inserted log.info"},{"match":"(?i)\\\\[(i(?:nformation|nfo|nf|n|))]","name":"markup.inserted log.info"},{"match":"(?<=^[\\\\s\\\\dp]*)\\\\bI\\\\b","name":"markup.inserted log.info"},{"match":"\\\\b(W(?:ARNING|ARN|arn|W))\\\\b|(?i)\\\\b(warning):","name":"markup.deleted log.warning"},{"match":"(?i)\\\\[(w(?:arning|arn|rn|n|))]","name":"markup.deleted log.warning"},{"match":"(?<=^[\\\\s\\\\dp]*)\\\\bW\\\\b","name":"markup.deleted log.warning"},{"match":"\\\\b(ALERT|CRITICAL|EMERGENCY|ERROR|FAILURE|FAIL|Fatal|FATAL|Error|EE)\\\\b|(?i)\\\\b(error):","name":"string.regexp, strong log.error"},{"match":"(?i)\\\\[(error|eror|err|er|e|fatal|fatl|ftl|fa|f)]","name":"string.regexp, strong log.error"},{"match":"(?<=^[\\\\s\\\\dp]*)\\\\bE\\\\b","name":"string.regexp, strong log.error"},{"match":"\\\\b\\\\d{4}-\\\\d{2}-\\\\d{2}(?=T|\\\\b)","name":"comment log.date"},{"match":"(?<=(^|\\\\s))\\\\d{2}[^\\\\w\\\\s]\\\\d{2}[^\\\\w\\\\s]\\\\d{4}\\\\b","name":"comment log.date"},{"match":"T?\\\\d{1,2}:\\\\d{2}(:\\\\d{2}([.,]\\\\d+)?)?(Z| ?[+-]\\\\d{1,2}:\\\\d{2})?\\\\b","name":"comment log.date"},{"match":"T\\\\d{2}\\\\d{2}(\\\\d{2}([.,]\\\\d+)?)?(Z| ?[+-]\\\\d{1,2}\\\\d{2})?\\\\b","name":"comment log.date"},{"match":"\\\\b(\\\\h{40}|\\\\h{10}|\\\\h{7})\\\\b","name":"constant.language"},{"match":"\\\\b\\\\h{8}-?(\\\\h{4}-?){3}\\\\h{12}\\\\b","name":"constant.language log.constant"},{"match":"\\\\b(\\\\h{2,}[:-])+\\\\h{2,}+\\\\b","name":"constant.language log.constant"},{"match":"\\\\b([0-9]+|true|false|null)\\\\b","name":"constant.language log.constant"},{"match":"\\\\b(0x\\\\h+)\\\\b","name":"constant.language log.constant"},{"match":"\\"[^\\"]*\\"","name":"string log.string"},{"match":"(?<!\\\\w)\'[^\']*\'","name":"string log.string"},{"match":"\\\\b([a-zA-Z.]*Exception)\\\\b","name":"string.regexp, emphasis log.exceptiontype"},{"begin":"^[\\\\t ]*at[\\\\t ]","end":"$","name":"string.key, emphasis log.exception"},{"match":"\\\\b[a-z]+://\\\\S+\\\\b/?","name":"constant.language log.constant"},{"match":"(?<![\\\\w/\\\\\\\\])([\\\\w-]+\\\\.)+([\\\\w-])+(?![\\\\w/\\\\\\\\])","name":"constant.language log.constant"}],"scopeName":"text.log"}'))]}}]);