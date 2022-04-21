Blockly.Blocks['signup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sign")
        .appendField(new Blockly.FieldDropdown([["Luke","luke"], ["Chinmaya","chinmaya"], ["Chris","chris"]]), "P1")
        .appendField("up for the service");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['save_contact'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Save")
        .appendField(new Blockly.FieldDropdown([["000-000-0000","000-000-0000"], ["111-111-1111","111-111-1111"], ["222-222-2222","222-222-2222"]]), "N")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["Luke","luke"], ["Chinmaya","chinmaya"], ["Chris","chris"]]), "P1")
        .appendField("'s contacts");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['show_suggestion'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Show")
        .appendField(new Blockly.FieldDropdown([["Luke","luke"], ["Chinmaya","chinmaya"], ["Chris","chris"]]), "P2")
        .appendField(" to ")
        .appendField(new Blockly.FieldDropdown([["Luke","luke"], ["Chinmaya","chinmaya"], ["Chris","chris"]]), "P1")
        .appendField(" as a friend suggestion");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['signup'] = function(block) {
  var P1 = block.getFieldValue('P1');
  // TODO: Assemble JavaScript into code variable.
  var first = false;
  var last = false;
  var previous_block_object = null;
  if (this.previousConnection.targetConnection === null) { // I am only the first block if I have no previous connection
    first = true;
  }

  if (this.nextConnection.targetConnection === null) { // I am only the last block if I have no next connection
    last = true;
  }

  //   var element = document.getElementById("outputCode").innerHTML += out; // this is only for the final iteration
  // `;
  if (first) { // if I am the first block
    this.event_num = 1;
    var code = 'happens('+ this.event_num + ', action(sign_up, ' + P1 + '), al(' + P1 + ')).';
    this.code = code;
  }
  else {
    previous_block_object = this.previousConnection.targetConnection.sourceBlock_;
    this.event_num = previous_block_object.event_num + 1;
    var code = 'happens('+ this.event_num + ', action(sign_up, ' + P1 + '), al(' + P1 + ')).';
    this.code = previous_block_object.code + '\n' + code;
    this.code += '\nedge(' + previous_block_object.event_num + ','+ this.event_num +').'; // edge(x,y).
    this.code += '\nafter(' + this.event_num + ','+ previous_block_object.event_num +').'; // after(y,x).
    this.code += '\nbefore(' + previous_block_object.event_num + ','+ this.event_num +').'; // before(x,y).
  }
  if (last) {
    return 'document.getElementById("outputCode").innerHTML =\`'  + this.code + '\`;\ndocument.getElementById("submit").setAttribute(\"value\", \`'  + this.code + '\`);'
  }
  return '';
};

Blockly.JavaScript['save_contact'] = function(block) {
  var P1 = block.getFieldValue('P1');
  var N = block.getFieldValue('N');
  // TODO: Assemble JavaScript into code variable.
  var first = false;
  var last = false;
  var previous_block_object = null;
  if (this.previousConnection.targetConnection === null) { // I am only the first block if I have no previous connection
    first = true;
  }

  if (this.nextConnection.targetConnection === null) { // I am only the last block if I have no next connection
    last = true;
  }

  //   var element = document.getElementById("outputCode").innerHTML += out; // this is only for the final iteration
  // `;
  if (first) { // if I am the first block
    this.event_num = 1;
    var code = 'happens('+ this.event_num + ', action(save_contact, ' + P1 + ', '+ N + '), al(' + P1 + ')).';
    this.code = code;
  }
  else {
    previous_block_object = this.previousConnection.targetConnection.sourceBlock_;
    this.event_num = previous_block_object.event_num + 1;
    var code = 'happens('+ this.event_num + ', action(save_contact, ' + P1 + ', '+ N + '), al(' + P1 + ')).';
    this.code = previous_block_object.code + '\n' + code;
    this.code += '\nedge(' + previous_block_object.event_num + ','+ this.event_num +').'; // edge(x,y).
    this.code += '\nafter(' + this.event_num + ','+ previous_block_object.event_num +').'; // after(y,x).
    this.code += '\nbefore(' + previous_block_object.event_num + ','+ this.event_num +').'; // before(x,y).
  }
  if (last) {
    return 'document.getElementById("outputCode").innerHTML =\`'  + this.code + '\`;\ndocument.getElementById("submit").setAttribute(\"value\", \`'  + this.code + '\`);'
  }
  return '';
};

Blockly.JavaScript['show_suggestion'] = function(block) {
  var P1 = block.getFieldValue('P1');
  var P2 = block.getFieldValue('P2');
  // TODO: Assemble JavaScript into code variable.
  var first = false;
  var last = false;
  var previous_block_object = null;
  if (this.previousConnection.targetConnection === null) { // I am only the first block if I have no previous connection
    first = true;
  }

  if (this.nextConnection.targetConnection === null) { // I am only the last block if I have no next connection
    last = true;
  }

  //   var element = document.getElementById("outputCode").innerHTML += out; // this is only for the final iteration
  // `;
  if (first) { // if I am the first block
    this.event_num = 1;
    var code = 'happens('+ this.event_num + ', action(show_suggestion, ' + P1 + ', '+ P2 + '), al(' + P1 + ')).';
    this.code = code;
  }
  else {
    previous_block_object = this.previousConnection.targetConnection.sourceBlock_;
    this.event_num = previous_block_object.event_num + 1;
    var code = 'happens('+ this.event_num + ', action(show_suggestion, ' + P1 + ', '+ P2 + '), al(' + P1 + ')).';
    this.code = previous_block_object.code + '\n' + code;
    this.code += '\nedge(' + previous_block_object.event_num + ','+ this.event_num +').'; // edge(x,y).
    this.code += '\nafter(' + this.event_num + ','+ previous_block_object.event_num +').'; // after(y,x).
    this.code += '\nbefore(' + previous_block_object.event_num + ','+ this.event_num +').'; // before(x,y).
  }
  if (last) {
    return 'document.getElementById("outputCode").innerHTML =\`'  + this.code + '\`;\ndocument.getElementById("submit").setAttribute(\"value\", \`'  + this.code + '\`);'
  }
  return '';
};