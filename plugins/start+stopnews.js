function _0x1320(_0x59aebc,_0xad5d94){const _0x5ff07b=_0x5ff0();return _0x1320=function(_0x132088,_0x206a54){_0x132088=_0x132088-0x161;let _0x322cd8=_0x5ff07b[_0x132088];return _0x322cd8;},_0x1320(_0x59aebc,_0xad5d94);}const _0x41ff6a=_0x1320;(function(_0x427add,_0x3b03d7){const _0x3be8e2=_0x1320,_0x1da677=_0x427add();while(!![]){try{const _0x531245=parseInt(_0x3be8e2(0x184))/0x1+-parseInt(_0x3be8e2(0x186))/0x2+parseInt(_0x3be8e2(0x162))/0x3*(parseInt(_0x3be8e2(0x179))/0x4)+-parseInt(_0x3be8e2(0x173))/0x5+-parseInt(_0x3be8e2(0x176))/0x6+-parseInt(_0x3be8e2(0x181))/0x7*(-parseInt(_0x3be8e2(0x18b))/0x8)+parseInt(_0x3be8e2(0x187))/0x9;if(_0x531245===_0x3b03d7)break;else _0x1da677['push'](_0x1da677['shift']());}catch(_0x3bf48d){_0x1da677['push'](_0x1da677['shift']());}}}(_0x5ff0,0xf36ca));const {_0x268ebd:cmd}=require('../command'),Hiru=require('hirunews-scrap'),Esana=require(_0x41ff6a(0x17a)),axios=require(_0x41ff6a(0x178)),config=require(_0x41ff6a(0x166));let activeGroups={},lastNewsTitles={};function _0x5ff0(){const _0x20b2c2=['4345632zQfbhP','_0x284565','_0x352724','_0x47ae11','88EGSCcx','stopnews','*✅\x2024/7\x20News\x20Already\x20Activated.*\x0a\x0a>\x20©𝗡𝗔𝗗𝗘𝗘𝗡\x20𝗠𝗗','keys','🇱🇰\x20Auto\x2024/7\x20News\x20Activated.\x0a\x0a>\x20©𝗡𝗔𝗗𝗘𝗘𝗡\x20𝗠𝗗','sender','results','21JLrGsc','*🚫\x20Disable\x20Sri\x20Lankan\x20news\x20updates\x20in\x20this\x20group*','push','Disable\x20Sri\x20Lankan\x20news\x20updates\x20in\x20this\x20group','../config','Error\x20fetching\x20Esana\x20News:\x20','message','Failed\x20to\x20activate\x20the\x20news\x20service.','some','interval','Error:\x20Esana\x20News\x20returned\x20invalid\x20data.','\x0a\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20ɴᴀᴅᴇᴇɴ\x20ᴘᴏᴏʀɴᴀ*\x0a>\x20*𝗡𝗔𝗗𝗘𝗘𝗡\x20-\x20𝗠𝗗*','🚫\x20This\x20command\x20can\x20only\x20be\x20used\x20by\x20group\x20admins\x20or\x20the\x20bot\x20owner.','_0x29eee5','startnews','_0x416b16','content','7206150bqFYsE','_0x109117','title','514542eJLyTs','shift','axios','112628vroxgj','@sl-code-lords/esana-news','includes','length','_0x23a1a7','description','Error\x20fetching\x20Hiru\x20News:\x20','Error\x20in\x20news\x20command:\x20','300706zEpoUU','error','This\x20command\x20can\x20only\x20be\x20used\x20in\x20groups.','1538710AtxNlS','_0x1023d8','334284LUqIZd'];_0x5ff0=function(){return _0x20b2c2;};return _0x5ff0();}async function getLatestNews(){const _0x2ae1b6=_0x41ff6a;let _0xa57a07=[];try{const _0x2232c4=new Hiru(),_0x1d62b8=await _0x2232c4[_0x2ae1b6(0x17d)]();_0xa57a07[_0x2ae1b6(0x164)]({'title':_0x1d62b8[_0x2ae1b6(0x161)][_0x2ae1b6(0x175)],'content':_0x1d62b8[_0x2ae1b6(0x161)][_0x2ae1b6(0x188)],'_0x1023d8':_0x1d62b8[_0x2ae1b6(0x161)][_0x2ae1b6(0x185)]});}catch(_0x15a744){console[_0x2ae1b6(0x182)](_0x2ae1b6(0x17f)+_0x15a744[_0x2ae1b6(0x168)]);}try{const _0x2936ea=new Esana(),_0x4a39b5=await _0x2936ea[_0x2ae1b6(0x174)]();_0x4a39b5&&_0x4a39b5[_0x2ae1b6(0x175)]&&_0x4a39b5[_0x2ae1b6(0x17e)]&&_0x4a39b5['_0x3bb4a0']?_0xa57a07[_0x2ae1b6(0x164)]({'title':_0x4a39b5['title'],'content':_0x4a39b5[_0x2ae1b6(0x17e)],'_0x1023d8':_0x4a39b5['_0x3bb4a0']}):console[_0x2ae1b6(0x182)](_0x2ae1b6(0x16c));}catch(_0x157e45){console['error'](_0x2ae1b6(0x167)+_0x157e45[_0x2ae1b6(0x168)]);}return _0xa57a07;}async function checkAndPostNews(_0x5505b7,_0x3c94d2){const _0x4ebdfc=await getLatestNews();_0x4ebdfc['forEach'](async _0x20abcd=>{const _0x10fe40=_0x1320;!lastNewsTitles[_0x3c94d2]&&(lastNewsTitles[_0x3c94d2]=[]),!lastNewsTitles[_0x3c94d2][_0x10fe40(0x17b)](_0x20abcd[_0x10fe40(0x175)])&&(await _0x5505b7[_0x10fe40(0x189)](_0x3c94d2,{'text':'*🔵𝐍𝐄𝐖𝐒\x20𝐀𝐋𝐄𝐑𝐓!*\x0a██████████████████████████████████████████\x0a\x0a\x0a📰\x20*'+_0x20abcd[_0x10fe40(0x175)]+'*\x0a'+_0x20abcd[_0x10fe40(0x172)]+'\x0a\x0a'+_0x20abcd[_0x10fe40(0x185)]+_0x10fe40(0x16d)}),lastNewsTitles[_0x3c94d2]['push'](_0x20abcd[_0x10fe40(0x175)]),lastNewsTitles[_0x3c94d2][_0x10fe40(0x17c)]>0x64&&lastNewsTitles[_0x3c94d2][_0x10fe40(0x177)]());});}cmd({'pattern':_0x41ff6a(0x170),'_0x39ec41':'Enable\x20Sri\x20Lankan\x20news\x20updates\x20in\x20this\x20group','_0x2b8fd1':!![],'_0x4e9fb5':'📰','filename':__filename},async(_0xb9e003,_0x4feb0d,_0x422a0e,{from:_0x4db562,_0x2b8fd1:_0x177c67,participants:_0x56269f})=>{const _0x2d061c=_0x41ff6a;try{if(_0x177c67){const _0x414c86=_0x56269f[_0x2d061c(0x16a)](_0xe45dbb=>_0xe45dbb['id']===_0x4feb0d[_0x2d061c(0x190)]&&_0xe45dbb[_0x2d061c(0x16f)]),_0x4dbc47=_0x4feb0d['sender']===_0xb9e003[_0x2d061c(0x18a)][_0x2d061c(0x171)];_0x414c86||_0x4dbc47?!activeGroups[_0x4db562]?(activeGroups[_0x4db562]=!![],await _0xb9e003[_0x2d061c(0x189)](_0x4db562,{'text':_0x2d061c(0x18f)}),!activeGroups[_0x2d061c(0x16b)]&&(activeGroups[_0x2d061c(0x16b)]=setInterval(async()=>{const _0x563359=_0x2d061c;for(const _0x53fe23 in activeGroups){activeGroups[_0x53fe23]&&_0x53fe23!==_0x563359(0x16b)&&await checkAndPostNews(_0xb9e003,_0x53fe23);}},0xea60))):await _0xb9e003['_0x352724'](_0x4db562,{'text':_0x2d061c(0x18d)}):await _0xb9e003[_0x2d061c(0x189)](_0x4db562,{'text':_0x2d061c(0x16e)});}else await _0xb9e003[_0x2d061c(0x189)](_0x4db562,{'text':_0x2d061c(0x183)});}catch(_0x4f35c7){console[_0x2d061c(0x182)](_0x2d061c(0x180)+_0x4f35c7['message']),await _0xb9e003[_0x2d061c(0x189)](_0x4db562,{'text':_0x2d061c(0x169)});}}),cmd({'pattern':_0x41ff6a(0x18c),'_0x39ec41':_0x41ff6a(0x165),'_0x2b8fd1':!![],'_0x4e9fb5':'🛑','filename':__filename},async(_0x9209ba,_0xc58a1a,_0x2e6c71,{from:_0x4c2c5a,_0x2b8fd1:_0x3182cf,participants:_0x1ea855})=>{const _0x919bed=_0x41ff6a;try{if(_0x3182cf){const _0xcc6ab6=_0x1ea855[_0x919bed(0x16a)](_0x16b84c=>_0x16b84c['id']===_0xc58a1a['sender']&&_0x16b84c[_0x919bed(0x16f)]),_0x1fe091=_0xc58a1a['sender']===_0x9209ba[_0x919bed(0x18a)][_0x919bed(0x171)];_0xcc6ab6||_0x1fe091?activeGroups[_0x4c2c5a]?(delete activeGroups[_0x4c2c5a],await _0x9209ba['_0x352724'](_0x4c2c5a,{'text':_0x919bed(0x163)}),Object[_0x919bed(0x18e)](activeGroups)[_0x919bed(0x17c)]===0x1&&activeGroups[_0x919bed(0x16b)]&&(clearInterval(activeGroups['interval']),delete activeGroups[_0x919bed(0x16b)])):await _0x9209ba[_0x919bed(0x189)](_0x4c2c5a,{'text':'🛑\x2024/7\x20News\x20is\x20not\x20active\x20in\x20this\x20group.\x0a\x0a>\x20©𝗡𝗔𝗗𝗘𝗘𝗡\x20𝗠𝗗'}):await _0x9209ba['_0x352724'](_0x4c2c5a,{'text':_0x919bed(0x16e)});}else await _0x9209ba[_0x919bed(0x189)](_0x4c2c5a,{'text':_0x919bed(0x183)});}catch(_0x16318d){console[_0x919bed(0x182)](_0x919bed(0x180)+_0x16318d[_0x919bed(0x168)]),await _0x9209ba['_0x352724'](_0x4c2c5a,{'text':'Failed\x20to\x20deactivate\x20the\x20news\x20service.'});}});