import Blockly from 'blockly'
import { javascriptGenerator } from 'blockly/javascript'

// When bot starts event
Blockly.defineBlocksWithJsonArray([{
    "type": "on_bot_code_start",
    "message0": "code %1 %2",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "code"
        }
    ],
    "colour": '#F5AB1A',
    "tooltip": "Runs whenever the bot starts or when the code starts",
    "helpUrl": ""
}])

javascriptGenerator['on_bot_code_start'] = function (block: any) {
    var event = block.getFieldValue('event');
    var toCode = javascriptGenerator.statementToCode(block, 'code');
    var code = ''
    if (event == 'bot') {
        code = `s4d.client.on('ready', async () => {\n${toCode}\n});\n`;
    } else if (event != 'bot') {
        code = `\n${toCode}\n`
    }
    return code;
};