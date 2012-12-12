#HTML5-Anaglyph-Image
This is the core api of master.
All codes are rewritten to be more simple and efficient.
## Setup
1. add __stereoDraw.js__ in your head of html.
2. call the function.


## Usage

    stereoDrawImage(imgSrc, stereoType, anaglyphMode, glassType, cnvsDstID)


- __imgSrc__: url of source, **NOTICE**, the image must be loaded in the html.
- __stereoType__: Stereo type of the source image
  * "Flat"
  * "Anaglyph"
  * "StereoLR"
  * "StereoRL"
  * "StereoUD"
  * "StereoDU"
- __anaglyphMode__: Anaglyph Mode of the procedure
  * "TrueAnaglyph"
  * "GrayAnaglyph"
  * "ColorAnaglyph"
  * "OptimizedAnaglyph"
- __glassType__: Anaglyph Mode of the procedure
  * "RedCyan"
  * "GreenMagenta"
- __scaleRate__: Scale the final anaglyph image.
- __cnvsDstID__: Destination Canvas ID，**NOTICE**, the canvas must exist in the html.


----------


## Stereo Type

- "Flat" -> A flat picture.
- "Anaglyph" -> Already got a anaglyph views.
- "StereoLR/StereoRL" -> Left-Right/Right-Left Views
- "StereoUD/StereoDU" -> Up-Down/Down-up Views

## Glasses Type ##

Anaglyph images are used to provide a stereoscopic 3D effect, when viewed with glasses where the two lenses are different (usually chromatically opposite) colors, such as red and cyan.

#### Red-Cyan Glasses

patent-free, limited color perception, currently the most common in use; images available in full version (red channel has only red color) and half version (red channel is a red-tinted grayscale image, yields worse colors but less retinal rivalry).

#### Green-Magenta Glasses

Same principle as red-cyan, somewhat newer. Less chromatic aberration, as the red and blue in magenta balance well with green.


## Anaglyphs Mode

All the following formula and demo anaglyph picture is based on the **Red-Cyan** glasses.

#### True Anaglyphs
![](https://github.com/logicmd/HTML5-Anaglyph-Image/raw/core/doc/formulatrueanaglyph.gif)

- Dark image
- No color reproduction
- Little ghosting

![](https://github.com/logicmd/HTML5-Anaglyph-Image/raw/core/doc/trueanaglyph_small.jpg)

#### Gray Anaglyphs ####
![](https://github.com/logicmd/HTML5-Anaglyph-Image/raw/core/doc/formulagrayanaglyph.gif)

- No color reproduction
- More ghosting than true anaglyphs

![](https://github.com/logicmd/HTML5-Anaglyph-Image/raw/core/doc/grayanaglyph_small.jpg)

#### Color Anaglyphs ####
![](https://github.com/logicmd/HTML5-Anaglyph-Image/raw/core/doc/formulacoloranaglyph.gif)

- Partial color reproduction (but not as good as color anaglyphs)
- Less retinal rivalry than color anaglyphs

![](https://github.com/logicmd/HTML5-Anaglyph-Image/raw/core/doc/coloranaglyph_small.jpg)

#### Optimized Anaglyphs ####
![](https://github.com/logicmd/HTML5-Anaglyph-Image/raw/core/doc/formulaoptimizedanaglyph.gif)

In addition, we applied a gamma correction (gamma value 1.5) to brighten up final red channel ra. Stereoscopic Player implements a further improved algorithm which partially maps the red channels to green and blue before applying the above formula.

- Partial color reproduction (but not of red shades)
- Almost no retinal rivalry

> When we talk about retinal rivalry, we just mean the retinal rivalry caused by brightness differences of colored objects. Of course there is an additional form of retinal rivalry, independently of the anaglyph method used: retinal rivalry caused by the different color channels perceived by left and right eye.

![](https://github.com/logicmd/HTML5-Anaglyph-Image/raw/core/doc/optimizedanaglyph_small.jpg)

#### Optimized+ Anaglyphs ####

Highly optimized anaglyphs could give better visual feeling.

