const a0_0x492ed6=a0_0x5cba;function a0_0x1e83(){const _0x2e0fa4=['exports','465768jDhbCT','from','1378005eEcmeM','4585168RlFhWW','41909pNWnDE','scans','210cVvFcG','176682nALNJS','child_process','\x20-w\x20wordlist.txt\x20-o\x20','join','239684RaFDpn','promisify','mkdirSync','133268VTSVXV','\x20-oA\x20','Nmap\x20scan\x20results:\x0a\x0a','gobuster\x20error:\x20','error','gobuster\x20dns\x20-d\x20','rmdirSync','Sublist3r\x20results:\x0a\x0a','sublist3r\x20-d\x20','Gobuster\x20results:\x0a\x0a','\x20-o\x20'];a0_0x1e83=function(){return _0x2e0fa4;};return a0_0x1e83();}(function(_0xe6d1a,_0x20a580){const _0x25d028=a0_0x5cba,_0x3ee74f=_0xe6d1a();while(!![]){try{const _0x461ec9=-parseInt(_0x25d028(0x11a))/0x1+-parseInt(_0x25d028(0x129))/0x2+-parseInt(_0x25d028(0x116))/0x3+parseInt(_0x25d028(0x11d))/0x4+parseInt(_0x25d028(0x111))/0x5+parseInt(_0x25d028(0x115))/0x6*(-parseInt(_0x25d028(0x113))/0x7)+parseInt(_0x25d028(0x112))/0x8;if(_0x461ec9===_0x20a580)break;else _0x3ee74f['push'](_0x3ee74f['shift']());}catch(_0x3d655c){_0x3ee74f['push'](_0x3ee74f['shift']());}}}(a0_0x1e83,0x22701));const util=require('util'),{exec}=require(a0_0x492ed6(0x117)),fs=require('fs'),path=require('path'),execAsync=util[a0_0x492ed6(0x11b)](exec);async function handleDomainCommand(_0x2c5329,_0x247f57,_0x534969){const _0x2d57db=a0_0x492ed6,_0x3d0c41=path[_0x2d57db(0x119)](__dirname,_0x2d57db(0x114),_0x2c5329);fs[_0x2d57db(0x11c)](_0x3d0c41,{'recursive':!![]});const {stdout:_0x3945d8,stderr:_0x39f741}=await execAsync('nmap\x20-A\x20-T4\x20'+_0x2c5329+_0x2d57db(0x11e)+path[_0x2d57db(0x119)](_0x3d0c41,'nmap'));_0x39f741&&console[_0x2d57db(0x121)]('nmap\x20error:\x20'+_0x39f741);const {stdout:_0x3c4d2c,stderr:_0x1ad7fd}=await execAsync(_0x2d57db(0x125)+_0x2c5329+_0x2d57db(0x127)+path[_0x2d57db(0x119)](_0x3d0c41,'sublist3r.txt'));_0x1ad7fd&&console[_0x2d57db(0x121)]('sublist3r\x20error:\x20'+_0x1ad7fd);const {stdout:_0x4217fb,stderr:_0x1272b5}=await execAsync(_0x2d57db(0x122)+_0x2c5329+_0x2d57db(0x118)+path[_0x2d57db(0x119)](_0x3d0c41,'gobuster.txt'));_0x1272b5&&console[_0x2d57db(0x121)](_0x2d57db(0x120)+_0x1272b5);const _0x4bb5be='Scan\x20report\x20for\x20'+_0x2c5329+'\x0a\x0a'+(_0x2d57db(0x11f)+_0x3945d8+'\x0a\x0a')+(_0x2d57db(0x124)+_0x3c4d2c+'\x0a\x0a')+(_0x2d57db(0x126)+_0x4217fb);await _0x247f57['sendText'](_0x534969[_0x2d57db(0x12a)],_0x4bb5be),fs[_0x2d57db(0x123)](_0x3d0c41,{'recursive':!![]});}function a0_0x5cba(_0x1ab829,_0x130050){const _0x1e83d3=a0_0x1e83();return a0_0x5cba=function(_0x5cba13,_0x260eb1){_0x5cba13=_0x5cba13-0x111;let _0x2da3a4=_0x1e83d3[_0x5cba13];return _0x2da3a4;},a0_0x5cba(_0x1ab829,_0x130050);}module[a0_0x492ed6(0x128)]={'handleDomainCommand':handleDomainCommand};
