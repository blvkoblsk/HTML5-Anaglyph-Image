import os

source = '../src/video.anaglyph.js'
build = '../build/video.anaglyph.js'
license = '../LICENSE'

os.system( 'java -jar compiler/compiler.jar --language_in=ECMASCRIPT5 --js ' + source + ' --js_output_file ' + build )

file = open( build, 'r' )
contents = file.read();
file.close()

file = open( license, 'r' )
license_contents = file.read();
file.close()

file = open( build, 'w' )
file.write( license_contents + contents )
file.close()