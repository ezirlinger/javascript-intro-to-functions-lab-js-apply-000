/* TEST 1
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})*/

//TEST 1 Output =  string should be uppercase by using the toUpperCase() method
function shout(string) {
  return string.toUpperCase()
}

/* TEST 2
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})*/

// TEST 2 Output = string should be lowercase using the toLowerCase() method
function whisper(string) {
  return string.toLowerCase();
}

/* TEST 3
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})*/

// TEST 3 Output logShout calls shout function - returns uppercase version of string in shout function

function logShout(string) {
  console.log(shout(string));
}

/* TEST 4
/* describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
}) */

// TEST 4 Output TBD
function logWhisper(string) {
  console.log(whisper(string));
}
